export type View = 'HOME' | 'ARCHITECTURE' | 'PROJECTS' | 'CLOUD';

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
