import React from 'react';
import { motion } from 'motion/react';
import { Bolt, Terminal, Database, Cloud, Activity, Cpu, Shield, Layout, Layers, Globe, Code2, Sparkles } from 'lucide-react';
import { SKILLS } from '../constants';

export const CloudView: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Architectural Patterns': return <Layers size={20} />;
      case 'Frontend': return <Layout size={20} />;
      case 'Backend & APIs': return <Terminal size={20} />;
      case 'Cloud & Infrastructure': return <Cloud size={20} />;
      case 'Databases': return <Database size={20} />;
      case 'Tools & Platforms': return <Cpu size={20} />;
      case 'AI Tools': return <Sparkles size={20} />;
      case 'Payment & Security': return <Shield size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <div className="pt-12 pb-24 px-6 md:pl-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="font-headline text-primary text-[10px] tracking-[0.3em] mb-2 uppercase">SYSTEM_CAPABILITIES // CORE_COMPETENCIES</div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 text-on-surface">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          A comprehensive map of my architectural expertise and technical stack. From high-level system design to low-level implementation details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Skills Grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl border border-primary/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-headline font-bold text-on-surface uppercase tracking-widest text-sm">
                  {group.category.replace(' & ', '_')}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-mono rounded border border-outline-variant/10 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Infrastructure Visualization */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 border-t border-primary/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Bolt size={64} />
            </div>
            <div className="text-4xl font-headline font-bold text-primary mb-1">25%</div>
            <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">faster deployments</div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                className="h-full bg-primary"
              ></motion.div>
            </div>
          </div>

          <div className="glass-panel p-8 border-t border-secondary/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Activity size={64} />
            </div>
            <div className="text-4xl font-headline font-bold text-secondary mb-1">40%</div>
            <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">reduction in release effort</div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                className="h-full bg-secondary"
              ></motion.div>
            </div>
          </div>

          <div className="glass-panel p-8 border-t border-primary-container/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Shield size={64} />
            </div>
            <div className="text-4xl font-headline font-bold text-primary-container mb-1">100%</div>
            <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">compliance adherence</div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                className="h-full bg-primary-container"
              ></motion.div>
            </div>
          </div>

          <div className="p-6 border-l-2 border-primary/30 bg-primary/5 rounded-r-xl italic text-on-surface-variant font-sans text-sm leading-relaxed">
            "Strategic architecture isn't just about choosing the right tools; it's about building modular, scalable ecosystems that evolve with the business while maintaining absolute code quality."
          </div>
        </div>
      </div>
    </div>
  );
};
