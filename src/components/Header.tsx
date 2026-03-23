import React from 'react';
import { Radio, Cpu, Server } from 'lucide-react';
import { View } from '../types';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onViewChange }) => {
  const navLinks = [
    { id: 'HOME', label: 'Mainframe' },
    { id: 'ARCHITECTURE', label: 'Architecture' },
    { id: 'PROJECTS', label: 'Projects' },
    { id: 'CLOUD', label: 'Cloud' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-900/40 backdrop-blur-xl border-b border-primary/10 shadow-[0_8px_32px_0_rgba(0,212,255,0.1)]">
      <div className="flex items-center gap-4">
        <span className="text-xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container tracking-tight uppercase">
          ARCH_OS // SYSTEM_HUD
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 font-headline tracking-tight uppercase text-[10px] font-bold">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onViewChange(link.id as View)}
            className={`transition-all duration-200 pb-1 border-b-2 ${
              activeView === link.id 
                ? 'text-primary border-primary' 
                : 'text-on-surface-variant border-transparent hover:text-primary'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-4 text-primary">
          <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors"><Radio size={18} /></button>
          <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors"><Cpu size={18} /></button>
          <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors"><Server size={18} /></button>
        </div>
        <div className="w-8 h-8 rounded-full border border-primary/30 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/user/100" 
            alt="Profile" 
            className="w-full h-full object-cover"
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
