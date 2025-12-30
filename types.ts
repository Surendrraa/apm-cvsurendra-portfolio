
export interface FeatureDetail {
  label: string;
  value: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface ScreenMockup {
  title: string;
  description: string;
  type: 'home' | 'post' | 'browse' | 'details' | 'requests' | 'mypools' | 'payment' | 'status' | 'history' | 'rating' | 'chat' | 'settings' | 'analytics' | 'edit';
}

export interface SubTab {
  title: string;
  type: 'table' | 'text' | 'grid';
  headers?: string[];
  data?: TableRow[];
  content?: string;
}

export interface CaseStudySection {
  title: string;
  type: 'text' | 'table' | 'grid' | 'screens' | 'tabs';
  headers?: string[];
  data?: TableRow[];
  screens?: ScreenMockup[];
  content?: string;
  tabs?: SubTab[];
}

export interface CaseStudy {
  id: string;
  title: string;
  oneLineDescription: string;
  problem: string;
  innovation: string;
  impact: string;
  tags: string[];
  details: FeatureDetail[];
  fullSpecs?: CaseStudySection[];
  notionUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}
