/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

// Helper to initialize Gemini SDK safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// REST Endpoint to process user copy/article text and map to dynamic slides using Gemini
app.post("/api/generate-ppt", async (req: Request, res: Response): Promise<void> => {
  const { text, styleOverride } = req.body;

  if (!text || typeof text !== "string") {
    res.status(400).json({ error: "请提供文案内容 (text is required)." });
    return;
  }

  const ai = getGeminiClient();
  if (!ai) {
    res.status(400).json({
      error: "API_KEY_REQUIRED",
      message: "未检测到有效的 GEMINI_API_KEY。请在系统的「Secrets/密码管理」中配置 API Key，或直接体验内置高保真模版。"
    });
    return;
  }

  try {
    const prompt = `
你是一位顶级的 PPT 演示设计与文案提炼大师。
你要完全读懂用户提供的文章/文案，并且将其进行逻辑分段；
因为用户需要保证内容的完整性（"保证内容的完整性"），你必须把【每一段/章节/大意】提炼并生成【多个】PPT幻灯片，不要随便忽略或压缩信息，信息需要连贯、饱满。

请遵循以下指示：
1. 风格契合：根据文章内容的调调，自动检测并返回核心风格 'themeId'：
   - 'tech'：科技数码、人工智能、前沿探索、互联网（酷炫霓虹感）。
   - 'business'：企业战略、财务分析、商业宏观、市场策略（深蓝稳健感）。
   - 'life'：生活、美食、健康、园艺、情感、正念（温暖自然感）。
   - 'academic'：学术研究、历史分析、硬核科学、调研报告（典雅严谨感）。
   - 'retro'：潮流复古、流行音乐、游戏社区、艺术展（醒目碰撞感）。
   - 'minimal'：极简美学、奢侈品、建筑设计、高管致词（高级空白感）。
   可选覆盖：如果用户提交了 styleOverride，可在安全范围内参考。

2. 丰富的动图与数据图表：为了想粉丝直观地展示（"数据对比，数据分析"），在分配幻灯片布局时，必须重点、慷慨地使用带有对比、分析属性的布局：
   - 如果文中提到两个产品、两组指标、两个时期、前/后、赞成/反对等，必须生成 layout 为 'comparison' 的幻灯片，设计精密的数值对比 itemA 和 itemB。
   - 如果文中包含大量统计项，或者有核心业绩指标（KPI）、几组独立的重要数字，必须生成 layout 为 'stats-grid' 的幻灯片，并填充多项丰富的数据。
   - 如果文中讲解时间线、发展路线、先后顺序、工艺步骤，必须生成 layout 为 'timeline' 或 'process-flow'。
   - 对于普通的观点提炼，使用 'bullets' 布局，并挑选高亮词汇列表 ('boldWords')，或者使用 'split-text' 布局分栏。

3. 保证完整性：请生成共计大约 6 到 12 张幻灯片。不要在一张幻灯片中塞入太多文字。要对文案进行精巧的分句分屏设计，使得每一页都像海报一样精美，文字要极其凝练、适合PPT阅读。

请生成符合以下 JSON 结构的响应：
${JSON.stringify({
  title: "PPT 主标题",
  author: "作者",
  themeId: "tech | business | life | academic | retro | minimal",
  styleNotes: "对该设计风格的提炼点评，一两句话即可",
  segments: [
    {
      segmentTitle: "第1部分 核心逻辑/章节名",
      originalText: "对应的原文摘要",
      slides: [
        {
          title: "该幻灯片标题",
          subtitle: "副标题（可选）",
          description: "精简的一句话核心概括（可选）",
          layout: "hero | split-text | bullets | comparison | stats-grid | timeline | process-flow",
          icon: "Lucide图标名，推荐如: TrendingUp, Users, Smartphone, BarChart3, Database, Workflow, Shield, Zap, Globe, Cpu, Coins等",
          bullets: [
            {
              text: "提炼后的要点句子",
              boldWords: ["需要加粗或变色突出的词汇列表1", "突出的词汇2"]
            }
          ],
          comparison: {
            title: "对比主题",
            itemA: { label: "对比项A名称", value: 120, unit: "w/万/倍", description: "简短描述A" },
            itemB: { label: "对比项B名称", value: 340, unit: "w/万/倍", description: "简短描述B" }
          },
          stats: [
            { value: "核心数额", label: "核心指标", trend: "up | down | neutral", trendValue: "+15%", description: "简短说明" }
          ],
          steps: [
            { title: "步骤一", description: "具体文字", highlight: true, duration: "第一阶段" }
          ]
        }
      ]
    }
  ]
})}

重要：
- 不要输出 markdown 原生包裹代码如 \`\`\`json，只需返回纯粹、被完美解析的 JSON 字符串，可以直接被 JSON.parse 解析。
- slides 里的 layouts 必须提供对应的特定参数，例如 layout = 'comparison' 时必填 'comparison' 属性，layout = 'stats-grid' 时必填 'stats' 列表，'timeline'或'process-flow' 时必填 'steps' 列表。
- 保证每个 bullets 的 boldWords 都是 bullets[i].text 中确实存在的词组。

以下是用户的文章/文案：
"${text}"
${styleOverride ? `用户偏好的风格选择: ${styleOverride}` : ""}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const textOutput = response.text || "{}";
    const cleanedText = textOutput.trim();

    try {
      const parsedData = JSON.parse(cleanedText);
      res.json(parsedData);
    } catch (parseError) {
      console.error("Gemini output parse failed. Raw response:", cleanedText);
      // Attempt manual extraction in case it was wrapped in a markdown block
      const jsonMatch = cleanedText.match(/```json\s*([\s\S]*?)\s*```/) || cleanedText.match(/```\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        const fallbackParsed = JSON.parse(jsonMatch[1].trim());
        res.json(fallbackParsed);
      } else {
        throw parseError;
      }
    }
  } catch (error: any) {
    console.error("Gemini API call failed:", error);
    res.status(500).json({
      error: "GENERATION_FAILED",
      message: "生成 PPT 时发生异常，可能由于网络异常或内容安全过滤。您可以重试或选择内置示例体验。",
      details: error.message
    });
  }
});

// Serve frontend assets
if (process.env.NODE_ENV !== "production") {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
