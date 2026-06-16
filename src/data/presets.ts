/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPTData } from '../types';

export const PRESETS: Record<string, PPTData> = {
  tech: {
    title: '苹果 iPhone 17 及 A19 芯片预测分析',
    author: '智能前沿研究员',
    themeId: 'tech',
    styleNotes: '科技数码、人工智能前沿讨论。采用极客荧光蓝、霓虹紫等荧光效果，搭配精致卡片阴影与流程制程图。',
    segments: [
      {
        segmentTitle: '第一篇：前代回顾与高端化红利',
        originalText: 'iPhone 16 虽大获成功，但市场迫切渴望更高维度的设计语言革新以及端侧多模态AI的彻底落地。随着用户对硬件轻薄化和流畅度要求的提升，iPhone 17 的演进势在必行，主要面临高端化占有率与创新拐点双重考验。',
        slides: [
          {
            id: 'tech-s1',
            title: '重塑奇点：寻找智能硬件的下一个形态',
            subtitle: 'iPhone 17 前瞻研究与轻薄潮起',
            description: '轻薄设计、芯片算力与本地模型爆发正在汇聚，将智能手机带入全面AI体验的新浪潮。',
            layout: 'hero',
            icon: 'Cpu'
          },
          {
            id: 'tech-s2',
            title: '两代飞跃：折叠意愿与轻薄偏好深度剖析',
            subtitle: '消费者对高溢价智能终端的购买决策模型',
            layout: 'comparison',
            icon: 'Activity',
            comparison: {
              title: '用户痛点演进与核心诉求对比',
              itemA: { label: '前代续航/发热负反馈', value: 34, unit: '%', description: '高压多任务下的传统硬件局限' },
              itemB: { label: '17款轻薄化/端侧AI期待', value: 78, unit: '%', description: '全新一代超薄极简形态的压倒性红利' }
            }
          }
        ]
      },
      {
        segmentTitle: '第二篇：A19 神经处理器的工艺革命',
        originalText: '根据供应链信息，A19 芯片由于台积电2纳米量产延迟，将深度打磨第3代增强型3纳米工艺 (N3P)。它集成了全新的12核架构（包括4个超大核心），其神经引擎 (NPU) 的晶体管密度更提升了40%，使得端侧大模型的应答速度提高了甚至将近两倍，极大地丰富了数据深度交互。',
        slides: [
          {
            id: 'tech-s3',
            title: 'A19 核心版图：3纳米增强版的技术跃迁',
            subtitle: '台积电 N3P 加持下的极致能量效率比',
            layout: 'stats-grid',
            icon: 'TrendingUp',
            stats: [
              { value: '40%', label: 'NPU 晶体管密度提升', trend: 'up', trendValue: '+40%', description: '端侧多模态深度神经网络提供硬核算力保障' },
              { value: '2.1x', label: '端侧大模型应答增速', trend: 'up', trendValue: '210%', description: '智能助手Siri实现秒级零延迟本地语义理解' },
              { value: '15%', label: '能耗比综合降低', trend: 'down', trendValue: '-15%', description: '功耗大幅收敛，显著克服重度游戏过程的发热' }
            ]
          },
          {
            id: 'tech-s4',
            title: '微架构生命周期：AI 核心任务调度流向',
            subtitle: '从神经网络计算，到端侧渲染的工艺主路径',
            layout: 'process-flow',
            icon: 'Workflow',
            steps: [
              { title: '本地多模态感知', description: '双摄模组实时捕获外界景深和人影面部特征', duration: '5ms', highlight: false },
              { title: 'A19 NPU 硬件级激活', description: '内置多路量化推理引擎，支持轻量化主干网络加载', duration: '20ms', highlight: true },
              { title: '端侧渲染与输出', description: '全新图形核心执行逐帧像素优化，流畅呈现在动态岛交互区域', duration: '12ms', highlight: false }
            ]
          }
        ]
      },
      {
        segmentTitle: '第三篇：全面爆发与粉丝期待值总结',
        originalText: 'iPhone 17 Pro 的轻薄型设计与专属 AI 矩阵将带来极其猛烈的粉丝关注。测评大V与硬核科技粉丝一致认为，12GB的大运行内存配合双主长焦镜头，能实现无缝的高密度渲染。数码爱好者对这款设备的综合期待指数已达到历史峰值。',
        slides: [
          {
            id: 'tech-s5',
            title: '2026/2027 智能手机核心风向标',
            subtitle: '技术成熟度与生态成熟曲线',
            layout: 'bullets',
            icon: 'Smartphone',
            bullets: [
              { text: '标配 12GB 超大运行内存，全面解锁更为庞大的本地大模型参数运行需求。', boldWords: ['12GB 超大运行内存', '本地大模型'] },
              { text: '全新的金属中框雕琢工艺，将整机厚度压缩至前所未有的极致表现，重新定义单手握持。', boldWords: ['整机厚度压缩', '单手握持'] },
              { text: '更强大的端侧视觉搜索 (Visual Intelligence) 真正打通工作与日常信息的交互屏障。', boldWords: ['端侧视觉搜索'] }
            ]
          }
        ]
      }
    ]
  },
  business: {
    title: '2026年全球新能源与车企大对决',
    author: '商业战略分析部',
    themeId: 'business',
    styleNotes: '商界精英宏观博弈、竞争格局。色调为科技深蓝搭配高对比亮金，布局方正，注重多维度的图表数据拆解。',
    segments: [
      {
        segmentTitle: '第一篇：红海绞杀与白热化搏斗',
        originalText: '2026年初，全球电动汽车市场已跨越早期高歌猛进的红利期，陷入极致的价格战与毛利率拉锯之中。国内渗透率突破55%大关，而欧美市场受限于基础设施与关税重组，整体进程步履蹒跚。传统老牌主机厂与新势力正面临洗牌期。',
        slides: [
          {
            id: 'biz-s1',
            title: '智驾纪元与深水区博弈',
            subtitle: '全球新能源汽车高阶战略探讨',
            description: '从单纯拼续航里程、看智能化大屏，走向整车算法、充能网络与核心毛利的生死防守。',
            layout: 'hero',
            icon: 'TrendingUp'
          },
          {
            id: 'biz-s2',
            title: '渗透率与增长周期的分水岭',
            subtitle: '国内红海竞争与欧美转型阵痛深度解析',
            layout: 'comparison',
            icon: 'Activity',
            comparison: {
              title: '两地市场战略对比',
              itemA: { label: '国内纯电与插电渗透率', value: 55.4, unit: '%', description: '越过红利极值，各大品牌彻底开启红海肉搏' },
              itemB: { label: '欧美整体电动增长弹性', value: 12.8, unit: '%', description: '基础设施瓶颈与补贴边际递减限制增速' }
            }
          }
        ]
      },
      {
        segmentTitle: '第二篇：核心毛利与智驾溢价分析',
        originalText: '汽车厂商不得不寻求高溢价的高阶智能驾驶方案来抵消硬件降价潮。数据显示，搭载城市NOA（无图智能驾驶）功能车型的毛利率始终稳定在18%左右，而纯粹拼低配价格的车型在经历三年价格战后毛毛利甚至已经降到了可怕的3.5%。这展现了算法溢价对于实体经济的重塑作用。',
        slides: [
          {
            id: 'biz-s3',
            title: '降损防线：高阶智驾的毛利护城河',
            subtitle: '城市NOA战略对抵御价格下挫的支撑度',
            layout: 'stats-grid',
            icon: 'BarChart3',
            stats: [
              { value: '18.2%', label: '高阶智驾版车主毛利率', trend: 'up', trendValue: '+14.7%', description: '软件溢价与算法订阅提供高冗余空间' },
              { value: '3.5%', label: '传统纯硬件套壳车毛利', trend: 'down', trendValue: '-8.2%', description: '白热化竞争导致渠道商被迫放血促销' },
              { value: '1.2M', label: '城市NOA活跃激活用户', trend: 'up', trendValue: '+215%', description: '数据飞轮快速闭环，越跑越聪明的路况模型' }
            ]
          },
          {
            id: 'biz-s4',
            title: '破局曲线：合资车企突围三步走',
            subtitle: '数据定义整车生存空间与新制造周期',
            layout: 'timeline',
            icon: 'Workflow',
            steps: [
              { title: '盘活硬件资产与供应链合作', description: '将老旧工厂升级为柔性数智化纯电组装车间，剥离冗余折旧成本。', duration: 'Q1-Q2', highlight: false },
              { title: '全面接入本土智驾朋友圈', description: '摒弃自主重构方案，直接采用华为、百度等头部高阶智驾现成算法平台。', duration: 'Q3-Q4', highlight: true },
              { title: '抢滩千瓦时代快充网络', description: '围绕超充桩和超级电站开展密集布网，用充能体验置换用户感知粘度。', duration: '年度终期', highlight: false }
            ]
          }
        ]
      }
    ]
  },
  life: {
    title: '都市正念生活：高压法则下的身心防守',
    author: '身心正念向导',
    themeId: 'life',
    styleNotes: '生活方式、正念心理。温和怡人的森林绿与温暖沙滩米色，字体柔和，营造舒适安详、无压力的粉丝共鸣感。',
    segments: [
      {
        segmentTitle: '第一篇：精神内耗的数字围墙',
        originalText: '在这个被手机通知和短视频碎片化裹挟的时代，很多人都处于持续焦虑状态。据不完全统计，都市白领平均每天查看手机推送超过150次，注意力被切割成无数纳米小块，导致大脑深度思考机能大幅退化，精神内耗的罪魁祸首不言而喻。',
        slides: [
          {
            id: 'life-s1',
            title: '寻回内聚力：重构你的注意力沙漏',
            subtitle: '打破数字泡沫与白领正念行动倡议',
            description: '对抗全天候信息焦虑，教你如何用15分钟时间，在喧嚣的都市中立起一块防噪声心灵结界。',
            layout: 'hero',
            icon: 'Smile'
          },
          {
            id: 'life-s2',
            title: '感官争夺：高压白领行为画像对比',
            subtitle: '被算法裹挟的生活 vs 注重沉浸式的健康正念节奏',
            layout: 'comparison',
            icon: 'Activity',
            comparison: {
              title: '注意力流失指标对比',
              itemA: { label: '每日漫无目的查看手机', value: 152, unit: '次', description: '被动算法割裂意志力，导致全天候隐形疲惫' },
              itemB: { label: '每日专注进行深呼吸冥想', value: 15, unit: '分钟', description: '深度重连副交感神经，帮助褪去过度警戒状态' }
            }
          }
        ]
      },
      {
        segmentTitle: '第二篇：正念呼吸与深度睡眠重组',
        originalText: '正念练习不需要你躲避工作、出家修行，只需要你在高压中尝试几个极简技巧。通过呼吸、设定断网时段，你可以切实修复受损的神经。数据显示，坚持两周微习惯，深睡比例即可以从12%稳定提升到健康的25%。',
        slides: [
          {
            id: 'life-s3',
            title: '睡眠觉醒：坚持两周带来的体质蜕变',
            subtitle: '情绪内稳态、脑波活跃度与免疫力增长数据',
            layout: 'stats-grid',
            icon: 'Activity',
            stats: [
              { value: '25%', label: '两周深睡比例跃升', trend: 'up', trendValue: '+13%', description: '无意识肌肉紧绷被彻底疏解，恢复清晨能量' },
              { value: '-28%', label: '皮质醇（压力荷尔蒙）水平', trend: 'down', trendValue: '-28%', description: '血液炎症因子表达显著平稳下来' },
              { value: '3.4x', label: '正向应对挫折的主动性', trend: 'up', trendValue: '3.4倍', description: '在面对突发方案更改或汇报高压时的自我容错率' }
            ]
          },
          {
            id: 'life-s4',
            title: '微习惯植入：正念防抖三步走',
            subtitle: '极其易读的极简日程实践指南',
            layout: 'process-flow',
            icon: 'Workflow',
            steps: [
              { title: '晨起：三分钟吐纳', description: '不看手机，盘腿在床边闭目进行深吸慢呼共20次，唤醒肺泡。', duration: '起床后', highlight: false },
              { title: '午休：静音吃饭', description: '在电脑屏幕外享用午餐，全神贯注感知米饭的温热与食材嚼劲。', duration: '中午', highlight: true },
              { title: '睡前：数字解毒', description: '睡前半小时将一切电子设备锁进抽屉，放一盘香氛或翻阅纸质书。', duration: '睡前', highlight: false }
            ]
          }
        ]
      }
    ]
  }
};
export const getPreset = (presetId?: string): PPTData => {
  return PRESETS[presetId || 'tech'] || PRESETS.tech;
};
