/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPTTheme } from '../types';

export const THEMES: Record<string, PPTTheme> = {
  tech: {
    themeId: 'tech',
    name: '极客科技 (Cyber Tech)',
    bgClass: 'bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]',
    textClass: 'text-slate-100',
    accentClass: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    secondaryClass: 'text-violet-400',
    headingFont: 'font-sans font-extrabold tracking-tight',
    bodyFont: 'font-mono text-xs',
    borderClass: 'border-slate-800',
    cardBg: 'bg-slate-900/40 backdrop-blur-md border border-slate-800'
  },
  business: {
    themeId: 'business',
    name: '商务大气 (Elite Business)',
    bgClass: 'bg-slate-900 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(99,102,241,0.12),rgba(255,255,255,0))]',
    textClass: 'text-slate-100',
    accentClass: 'text-amber-400 bg-amber-950/30 border-amber-500/30',
    secondaryClass: 'text-indigo-400',
    headingFont: 'font-sans font-bold tracking-tight',
    bodyFont: 'font-sans',
    borderClass: 'border-slate-800',
    cardBg: 'bg-slate-950/50 border border-slate-800'
  },
  life: {
    themeId: 'life',
    name: '温暖生活 (Warm Lifestyle)',
    bgClass: 'bg-stone-50 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.06),rgba(255,255,255,0))]',
    textClass: 'text-stone-800',
    accentClass: 'text-teal-600 bg-teal-50 border-teal-200',
    secondaryClass: 'text-emerald-600',
    headingFont: 'font-serif font-black tracking-normal',
    bodyFont: 'font-sans',
    borderClass: 'border-stone-200',
    cardBg: 'bg-white border border-stone-200/80 shadow-sm'
  },
  academic: {
    themeId: 'academic',
    name: '经典严谨 (Pure Academic)',
    bgClass: 'bg-zinc-100',
    textClass: 'text-zinc-900',
    accentClass: 'text-sky-700 bg-sky-50 border-sky-200',
    secondaryClass: 'text-slate-600',
    headingFont: 'font-serif font-semibold tracking-wide',
    bodyFont: 'font-sans',
    borderClass: 'border-zinc-300',
    cardBg: 'bg-white border-2 border-zinc-300/80'
  },
  retro: {
    themeId: 'retro',
    name: '摩登复古 (Retro Punch)',
    bgClass: 'bg-amber-100/90 bg-[linear-gradient(45deg,#fef3c7_25%,transparent_25%),linear-gradient(-45deg,#fef3c7_25%,transparent_25%)] bg-[size:24px_24px] bg-[size:40px_40px]',
    textClass: 'text-black',
    accentClass: 'text-black bg-orange-400 border-2 border-black font-bold uppercase',
    secondaryClass: 'text-red-600',
    headingFont: 'font-sans font-black tracking-tight uppercase',
    bodyFont: 'font-sans font-semibold',
    borderClass: 'border-2 border-black',
    cardBg: 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
  },
  minimal: {
    themeId: 'minimal',
    name: '高级极简 (Minimal Slate)',
    bgClass: 'bg-stone-100',
    textClass: 'text-neutral-900',
    accentClass: 'text-neutral-950 bg-neutral-200/55 border-neutral-300/60',
    secondaryClass: 'text-neutral-500',
    headingFont: 'font-sans font-light tracking-wide',
    bodyFont: 'font-sans',
    borderClass: 'border-neutral-200',
    cardBg: 'bg-neutral-50 border border-neutral-200'
  }
};

export const getTheme = (themeId?: string): PPTTheme => {
  return THEMES[themeId || 'tech'] || THEMES.tech;
};
