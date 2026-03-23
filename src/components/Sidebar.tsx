import React from 'react';
import { Terminal, Network, Share2, FileText, Settings, Power } from 'lucide-react';
import { View } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'HOME', label: 'Mainframe', icon: Terminal },
    { id: 'ARCHITECTURE', label: 'Nodes', icon: Network },
    { id: 'PROJECTS', label: 'Traffic', icon: Share2 },
    { id: 'CLOUD', label: 'Logs', icon: FileText },
  ];

  return (
    <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 w-64 bg-slate-900/60 backdrop-blur-2xl rounded-2xl border-r border-primary/10 shadow-2xl shadow-primary/5 flex-col py-8 h-[80vh]">
      <div className="px-6 mb-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary/30 p-1 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-md"></div>
          <img 
            src="https://picsum.photos/seed/architect/200" 
            alt="System Identity" 
            className="w-full h-full rounded-full object-cover relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-primary font-headline font-black text-lg tracking-tight">ROOT_USER</h2>
        <p className="text-on-surface-variant font-headline text-[10px] uppercase tracking-widest">v1.0.4-stable</p>
      </div>

      <nav className="flex-1 flex flex-col space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={`flex items-center gap-4 px-6 py-3 font-headline text-xs font-medium transition-all duration-200 group relative ${
              activeView === item.id 
                ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                : 'text-on-surface-variant hover:text-primary hover:bg-primary/5 hover:translate-x-1'
            }`}
          >
            <item.icon size={18} className={activeView === item.id ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-6 mt-8">
        <button className="w-full py-2 bg-primary/10 border border-primary/30 text-primary text-[10px] font-headline font-bold tracking-widest uppercase hover:bg-primary/20 transition-all active:scale-95">
          INIT_CONNECTION
        </button>
      </div>

      <div className="mt-auto pt-8 flex flex-col space-y-1 border-t border-primary/10">
        <button className="text-on-surface-variant hover:text-primary px-6 py-3 flex items-center gap-4 transition-colors">
          <Settings size={16} />
          <span className="font-headline text-xs">Settings</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary px-6 py-3 flex items-center gap-4 transition-colors">
          <Power size={16} />
          <span className="font-headline text-xs">Power</span>
        </button>
      </div>
    </aside>
  );
};
