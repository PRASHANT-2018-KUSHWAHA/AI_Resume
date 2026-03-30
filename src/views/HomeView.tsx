import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Workflow } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const HomeView: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-200px)',
            height: '200vh',
            width: '200%',
            left: '-50%'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Central Core */}
        <div className="relative mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-32 -left-48 p-4 glass-panel border border-primary/10 rounded-xl shadow-2xl"
          >
            <p className="font-headline text-[10px] text-primary/60 mb-1">01_ROOT</p>
            <h3 className="font-headline text-lg font-bold text-primary tracking-widest uppercase">ARCHITECTURE</h3>
            <div className="mt-2 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-12 -right-64 p-4 glass-panel border border-primary/10 rounded-xl shadow-2xl"
          >
            <p className="font-headline text-[10px] text-secondary/60 mb-1">02_DEPLOY</p>
            <h3 className="font-headline text-lg font-bold text-secondary tracking-widest uppercase">PROJECTS</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-40 -left-20 p-4 glass-panel border border-primary/10 rounded-xl shadow-2xl"
          >
            <p className="font-headline text-[10px] text-primary-container/60 mb-1">03_STACK</p>
            <h3 className="font-headline text-lg font-bold text-primary-container tracking-widest uppercase">CLOUD</h3>
          </motion.div>

          {/* The Core */}
          <motion.div 
            animate={{ rotate: 45 }}
            className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>
            <div className="w-full h-full rounded-2xl border border-primary/20 flex items-center justify-center bg-surface-container-low/50 backdrop-blur-sm shadow-[0_0_60px_rgba(0,212,255,0.1)]">
              <motion.div 
                animate={{ rotate: 12 }}
                className="w-3/4 h-3/4 border border-secondary/30 rounded-xl flex items-center justify-center"
              >
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-primary to-secondary opacity-80 rounded-lg shadow-[0_0_30px_rgba(168,232,255,0.5)]"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Title Section */}
        <div className="text-center z-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary/20 text-secondary text-xs font-headline tracking-tighter"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            SYSTEM_STATUS: OPTIMIZED // 7+ YEARS EXP
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface"
          >
            PRASHANT SINGH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">KUSHWAHA</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto font-sans text-on-surface-variant text-lg md:text-xl leading-relaxed"
          >
            {PERSONAL_INFO.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase">
              <Terminal size={20} />
              INITIALIZE_RESUME
            </button>
            <button className="px-8 py-4 bg-surface-variant/20 backdrop-blur-md border border-outline-variant/30 text-primary font-headline font-bold rounded-lg hover:bg-surface-variant/40 transition-all flex items-center gap-3 uppercase">
              <Workflow size={20} />
              VIEW_ARCHITECTURE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Side HUD Panels */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 space-y-4">
        <div className="p-4 bg-surface-container-low/40 backdrop-blur-lg border-l-2 border-primary rounded-r-xl w-48 shadow-xl">
          <p className="font-headline text-[10px] text-primary/60 uppercase tracking-widest">MFE_NODES</p>
          <p className="font-headline text-2xl font-bold">Nx / Fed</p>
        </div>
        <div className="p-4 bg-surface-container-low/40 backdrop-blur-lg border-l-2 border-secondary rounded-r-xl w-48 shadow-xl">
          <p className="font-headline text-[10px] text-secondary/60 uppercase tracking-widest">CLOUD_OPS</p>
          <p className="font-headline text-2xl font-bold">AWS / Docker</p>
        </div>
        <div className="p-4 bg-surface-container-low/40 backdrop-blur-lg border-l-2 border-primary-container rounded-r-xl w-48 shadow-xl">
          <p className="font-headline text-[10px] text-primary-container/60 uppercase tracking-widest">CODE_QUALITY</p>
          <p className="font-headline text-2xl font-bold">SOLID / TDD</p>
        </div>
      </div>

      {/* Tech Stack Grid at the bottom of HomeView */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 hidden md:block"
      >
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {[
            { label: 'Frontend', tech: 'Angular / React / Next' },
            { label: 'Backend', tech: 'Node / Express / GraphQL' },
            { label: 'Cloud', tech: 'AWS / Docker / CI-CD' },
            { label: 'Database', tech: 'MongoDB / Postgres' },
            { label: 'Patterns', tech: 'MFE / Nx / SOLID' }
          ].map((group) => (
            <div key={group.label} className="text-center">
              <p className="font-headline text-[8px] text-primary uppercase tracking-[0.3em] mb-1">{group.label}</p>
              <p className="font-mono text-[10px] text-on-surface-variant">{group.tech}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
        <div className="p-6 bg-surface-container-low/40 backdrop-blur-lg border border-outline-variant/15 rounded-xl w-64 glass-panel">
          <div className="flex items-center justify-between mb-4">
            <span className="font-headline text-[10px] text-on-surface-variant">LOGS // FEED</span>
            <Terminal size={12} className="text-primary" />
          </div>
          <div className="space-y-2 font-headline text-[10px] text-slate-500 overflow-hidden h-32">
            <p>&gt; MFE: Module Federation optimized (~30%)</p>
            <p className="text-primary">&gt; CI/CD: Release effort reduced (~40%)</p>
            <p>&gt; STRIPE: Mission-critical integration...</p>
            <p>&gt; AWS: Lambda / S3 / RDS scaled...</p>
            <p className="text-secondary">&gt; HIPAA: Compliance verified (Airamed)</p>
            <p>&gt; SOLID: 100% adherence achieved...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
