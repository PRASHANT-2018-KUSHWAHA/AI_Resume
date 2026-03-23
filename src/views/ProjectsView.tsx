import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Cpu, Shield, BarChart3 } from 'lucide-react';
import { PROJECTS } from '../constants';

export const ProjectsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = PROJECTS[currentIndex];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="pt-12 pb-24 px-6 md:pl-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <nav className="flex items-center font-mono text-[10px] tracking-[0.2em] text-primary/60 uppercase">
          <span>SYSTEM</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span>PROJECT_ARCHIVE</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span className="text-primary font-bold">NODE_00{currentIndex + 1}_{project.title.toUpperCase()}</span>
        </nav>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Featured Panel */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, rotateY: 10 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-panel rounded-xl p-10 shadow-2xl relative overflow-hidden border border-primary/10"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-6xl font-headline font-bold tracking-tighter text-on-surface mb-2">{project.title}</h1>
                  <p className="text-primary font-headline text-xs tracking-[0.2em] uppercase">{project.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-headline text-on-surface-variant/40 uppercase tracking-widest">Status</span>
                  <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/30">
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-headline font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1 h-3 bg-primary"></span> Problem_Statement
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-headline font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1 h-3 bg-primary"></span> Technical_Architecture
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-surface-container-low/50 p-6 rounded-lg border border-outline-variant/10">
                    <h3 className="text-[10px] font-headline text-primary/50 uppercase mb-4 tracking-widest">System_Impact</h3>
                    <div className="flex flex-col gap-4">
                      {project.impact.map((item) => (
                        <div key={item.label} className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                          <span className="text-xs text-on-surface-variant uppercase">{item.label}</span>
                          <span className="text-2xl font-headline text-primary font-bold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-surface-container-high text-primary text-[9px] font-headline rounded border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-xs uppercase tracking-widest rounded shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Explore_Codebase
                </button>
                <button className="px-8 py-3 bg-surface-variant/20 backdrop-blur text-primary border border-primary/20 font-headline font-bold text-xs uppercase tracking-widest rounded hover:bg-surface-variant/40 transition-colors">
                  Case_Study_PDF
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Secondary Panels (Peek) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-6 justify-center">
          {PROJECTS.map((p, i) => {
            if (i === currentIndex) return null;
            return (
              <div 
                key={p.id}
                onClick={() => setCurrentIndex(i)}
                className="glass-panel p-6 rounded-xl opacity-40 hover:opacity-80 transition-all cursor-pointer border border-primary/10 group"
              >
                <div className="flex justify-between mb-4">
                  <h4 className="font-headline font-bold uppercase tracking-widest text-on-surface text-sm">{p.title}</h4>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[10px] text-on-surface-variant line-clamp-2 mb-4 uppercase">{p.description}</p>
                <div className="h-1 w-full bg-surface-container-low rounded">
                  <div className="h-full w-3/4 bg-primary/40 rounded"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-12 mt-12">
        <button 
          onClick={prevProject}
          className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary"></span>
          <span className="font-headline text-xs text-primary font-bold">0{currentIndex + 1}</span>
          <span className="text-outline-variant text-[10px] font-headline">/</span>
          <span className="font-headline text-xs text-outline-variant">0{PROJECTS.length}</span>
          <span className="w-8 h-[2px] bg-outline-variant/30"></span>
        </div>
        <button 
          onClick={nextProject}
          className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-surface-container-low p-8 rounded-xl border-t border-primary/5">
          <Cpu size={24} className="text-primary mb-4" />
          <h5 className="font-headline font-bold text-on-surface text-sm uppercase mb-3">DevOps_Cycle</h5>
          <p className="text-xs text-on-surface-variant leading-relaxed uppercase">Automated CI/CD via GitHub Actions with canary deployments to EKS.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border-t border-primary/5">
          <Shield size={24} className="text-primary mb-4" />
          <h5 className="font-headline font-bold text-on-surface text-sm uppercase mb-3">Auth_Integrity</h5>
          <p className="text-xs text-on-surface-variant leading-relaxed uppercase">OAuth2.0 implementation with rotating JWKS for cross-service trust.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border-t border-primary/5">
          <BarChart3 size={24} className="text-primary mb-4" />
          <h5 className="font-headline font-bold text-on-surface text-sm uppercase mb-3">Monitoring_Grid</h5>
          <p className="text-xs text-on-surface-variant leading-relaxed uppercase">Prometheus & Grafana dashboarding for 99.99% availability tracking.</p>
        </div>
      </div>
    </div>
  );
};
