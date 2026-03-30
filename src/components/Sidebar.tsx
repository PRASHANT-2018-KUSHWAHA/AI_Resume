import React from 'react';
import { Terminal, Network, Share2, FileText, Settings, Power, X, Briefcase } from 'lucide-react';
import { View } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, isOpen, onClose }) => {
  const navItems = [
    { id: 'HOME', label: 'Mainframe', icon: Terminal },
    { id: 'ARCHITECTURE', label: 'Architecture', icon: Network },
    { id: 'EXPERIENCE', label: 'Experience', icon: Briefcase },
    { id: 'PROJECTS', label: 'Projects', icon: Share2 },
    { id: 'CLOUD', label: 'Skills', icon: FileText },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
      />

      {/* Sidebar Drawer */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-slate-900/95 backdrop-blur-2xl border-r border-primary/20 flex flex-col py-8 lg:hidden"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>

        <div className="px-6 mb-8 text-center mt-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary/30 p-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-md"></div>
            <img 
              src="https://cdn.dribbble.com/users/1355613/screenshots/6557741/jack.png" 
              alt="Prashant Singh Kushwaha" 
              className="w-full h-full rounded-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-primary font-headline font-black text-xl tracking-tight uppercase">PRASHANT_K</h2>
          <p className="text-on-surface-variant font-headline text-[10px] uppercase tracking-widest">Technical Architect</p>
        </div>

        <nav className="flex-1 flex flex-col space-y-2 px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as View)}
              className={`flex items-center gap-4 px-6 py-4 rounded-xl font-headline text-sm font-medium transition-all duration-200 group relative ${
                activeView === item.id 
                  ? 'text-primary bg-primary/10 border-l-4 border-primary shadow-[inset_0_0_20px_rgba(0,212,255,0.05)]' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
              }`}
            >
              <item.icon size={20} className={activeView === item.id ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-6 mt-8">
          <button className="w-full py-3 bg-primary/10 border border-primary/30 text-primary text-xs font-headline font-bold tracking-widest uppercase hover:bg-primary/20 transition-all active:scale-95 rounded-lg">
            INIT_CONNECTION
          </button>
        </div>

        <div className="mt-auto pt-8 flex flex-col space-y-1 border-t border-primary/10">
          <button className="text-on-surface-variant hover:text-primary px-8 py-4 flex items-center gap-4 transition-colors">
            <Settings size={18} />
            <span className="font-headline text-sm">Settings</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary px-8 py-4 flex items-center gap-4 transition-colors">
            <Power size={18} />
            <span className="font-headline text-sm">Power</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
};
