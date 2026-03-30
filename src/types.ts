export type View = 'HOME' | 'ARCHITECTURE' | 'PROJECTS' | 'CLOUD' | 'EXPERIENCE';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  architecture: string;
  impact: {
    label: string;
    value: string;
  }[];
  tags: string[];
  status: string;
}

export interface LogEntry {
  timestamp: string;
  type: 'EVENT_PUSH' | 'AUTH_SYNC' | 'CACHE_CLR' | 'SYS_READY';
  message: string;
}
