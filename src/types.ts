/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SlideLayoutType = 'hero' | 'split-text' | 'bullets' | 'comparison' | 'stats-grid' | 'timeline' | 'process-flow';

export interface DataPair {
  label: string;
  value: number;
  unit?: string;
  description?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  comparedValue?: number;
}

export interface SlideContent {
  id: string; // Unique ID for keying/editing
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: Array<{
    text: string;
    boldWords?: string[]; // Words to highlight in bold/color
  }>;
  // Layout specification
  layout: SlideLayoutType;
  // Icon to use for key visual
  icon?: string;
  // Data comparison visual
  comparison?: {
    title: string;
    itemA: DataPair;
    itemB: DataPair;
  };
  // Stat grid or bento widgets
  stats?: Array<{
    value: string;
    label: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    description?: string;
  }>;
  // Timeline or sequential steps
  steps?: Array<{
    title: string;
    description: string;
    highlight?: boolean;
    duration?: string;
  }>;
}

export interface PPTTheme {
  themeId: string;
  name: string;
  bgClass: string;
  textClass: string;
  accentClass: string;
  secondaryClass: string;
  headingFont: string;
  bodyFont: string;
  borderClass: string;
  cardBg: string;
}

export interface PPTSegment {
  segmentTitle: string;
  originalText: string;
  slides: SlideContent[];
}

export interface PPTData {
  title: string;
  author: string;
  themeId: string;
  styleNotes: string; // Style instructions extracted from tone
  segments: PPTSegment[];
}
