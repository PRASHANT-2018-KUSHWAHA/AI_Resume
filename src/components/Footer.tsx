import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const techStack = [
    'Angular (v1-20)', 'React.js', 'Next.js', 'Node.js', 'GraphQL', 
    'AWS (Lambda/S3/RDS)', 'MongoDB', 'PostgreSQL', 'Nx Monorepo', 
    'Micro Frontends (MFE)', 'Module Federation', 'Docker', 'CI/CD', 'SOLID', 'TDD',
    'Stripe', 'Razorpay', 'HIPAA Compliance', 'Clean Architecture'
  ];

  return (
    <footer className="fixed bottom-0 w-full z-50 flex flex-col bg-slate-950/90 backdrop-blur-lg border-t border-primary/10 font-mono text-[10px] uppercase tracking-widest text-primary">
      {/* Tech Stack Marquee */}
      <div className="w-full overflow-hidden bg-primary/5 py-1 border-b border-primary/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="mx-8 text-primary/40 flex items-center">
              <span className="w-1 h-1 rounded-full bg-primary/30 mr-2"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4 md:space-x-6">
          <span className="text-on-surface-variant/60 hidden sm:inline">SYS_READY // LATENCY: 24MS // UPTIME: 99.9%</span>
          <span className="text-on-surface-variant/60 sm:hidden">SYS_OK</span>
          <div className="flex items-center space-x-4 border-l border-primary/20 pl-4 md:pl-6">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-on-surface-variant/40 hover:text-primary transition-colors"
              title="GITHUB"
            >
              <Github size={12} />
              <span className="hidden sm:inline">GITHUB</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-on-surface-variant/40 hover:text-primary transition-colors"
              title="LINKEDIN"
            >
              <Linkedin size={12} />
              <span className="hidden sm:inline">LINKEDIN</span>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-on-surface-variant/40 hover:text-primary transition-colors">TERM_ACCESS</button>
          <button className="text-on-surface-variant/40 hover:text-primary transition-colors">ERR_LOGS</button>
          <button className="text-primary font-bold">NET_STAT</button>
        </div>
      </div>
    </footer>
  );
};
