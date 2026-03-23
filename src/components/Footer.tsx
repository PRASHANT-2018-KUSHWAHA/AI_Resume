import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-6 py-2 bg-slate-950/80 backdrop-blur-md border-t border-primary/10 font-mono text-[10px] uppercase tracking-widest text-primary">
      <div className="flex items-center space-x-6">
        <span className="text-on-surface-variant/60">SYS_READY // LATENCY: 24MS // UPTIME: 99.9%</span>
      </div>
      <div className="flex items-center space-x-8">
        <button className="text-on-surface-variant/40 hover:text-primary transition-colors">TERM_ACCESS</button>
        <button className="text-on-surface-variant/40 hover:text-primary transition-colors">ERR_LOGS</button>
        <button className="text-primary font-bold">NET_STAT</button>
      </div>
    </footer>
  );
};
