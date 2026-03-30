import React from 'react';
import { Radio, Cpu, Server, Menu, Terminal, Network, Share2, FileText, Briefcase } from 'lucide-react';
import { View } from '../types';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onViewChange, onMenuClick }) => {
  const navLinks = [
    { id: 'HOME', label: 'Mainframe', icon: Terminal },
    { id: 'ARCHITECTURE', label: 'Architecture', icon: Network },
    { id: 'EXPERIENCE', label: 'Experience', icon: Briefcase },
    { id: 'PROJECTS', label: 'Projects', icon: Share2 },
    { id: 'CLOUD', label: 'Skills', icon: FileText },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-16 bg-slate-900/40 backdrop-blur-xl border-b border-primary/10 shadow-[0_8px_32px_0_rgba(0,212,255,0.1)]">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        <span className="text-lg md:text-xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container tracking-tight uppercase truncate">
          PRASHANT_K // TECHNICAL_ARCHITECT
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-6 font-headline tracking-tight uppercase text-[10px] font-bold">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onViewChange(link.id as View)}
            className={`flex items-center gap-2 transition-all duration-200 pb-1 border-b-2 ${
              activeView === link.id 
                ? 'text-primary border-primary' 
                : 'text-on-surface-variant border-transparent hover:text-primary'
            }`}
          >
            <link.icon size={14} className={activeView === link.id ? 'text-primary' : 'text-on-surface-variant'} />
            {link.label}
          </button>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3 pl-8 border-l border-primary/10">
        <div className="text-right">
          <div className="text-[10px] font-headline font-bold text-primary uppercase leading-none">PRASHANT_K</div>
          <div className="text-[8px] font-headline text-on-surface-variant uppercase tracking-tighter">System_Admin</div>
        </div>
        <div className="w-8 h-8 rounded-full border border-primary/30 p-0.5 overflow-hidden">
          <img 
            src="https://cdn.dribbble.com/users/1355613/screenshots/6557741/jack.png" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};

const SensorsPlaceholder = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a10 10 0 0 1 10-10"/><path d="M2 12a10 10 0 0 0 10 10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 22a10 10 0 0 0 10-10"/><circle cx="12" cy="12" r="3"/></svg>
);
