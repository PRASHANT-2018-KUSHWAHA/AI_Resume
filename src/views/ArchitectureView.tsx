import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Verified } from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 md:pl-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <nav className="flex items-center font-mono text-[10px] tracking-[0.2em] text-primary/60 uppercase">
          <span>ARCH_OS</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span>MODULES</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span className="text-primary font-bold">ARCHITECTURE</span>
        </nav>
        <h1 className="mt-4 font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface">
          System Design <span className="text-primary-container">Concepts</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Micro Frontends Visualization */}
        <section className="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative min-h-[500px] border border-primary/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="p-8 relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="font-headline text-primary text-[10px] uppercase tracking-widest">Core Infrastructure</span>
                <h2 className="font-headline text-3xl font-bold mt-1">Micro Frontends</h2>
              </div>
              <div className="glass-panel px-4 py-2 rounded-full border border-primary/20 text-primary text-[10px] font-mono">
                STATUS: DEPLOYED_V4
              </div>
            </div>

            {/* 3D Abstract Representation */}
            <div className="flex-1 flex items-center justify-center py-12 relative">
              <div className="grid grid-cols-3 gap-6 transform -rotate-12 skew-x-12">
                {['AUTH', 'CATALOG', 'CHECKOUT', 'SEARCH', 'CORE_ENGINE', 'DASHBOARD'].map((module, i) => (
                  <motion.div
                    key={module}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`w-24 h-24 rounded-lg border flex items-center justify-center font-mono text-[10px] transition-all duration-500 ${
                      module === 'CORE_ENGINE' 
                        ? 'bg-primary-container/20 border-primary shadow-[0_0_60px_rgba(0,212,255,0.4)] text-primary font-bold' 
                        : 'bg-surface-container-highest border-primary/30 text-primary/60 shadow-[0_0_30px_rgba(168,232,255,0.2)]'
                    }`}
                  >
                    {module}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border-l-2 border-primary/50">
                <p className="text-[10px] font-headline text-on-surface-variant/60 uppercase tracking-widest">Independent Scoping</p>
                <p className="text-sm font-sans text-on-surface mt-1">Modules communicate via lightweight event bus and federation.</p>
              </div>
              <div className="glass-panel p-4 rounded-xl border-l-2 border-primary/50">
                <p className="text-[10px] font-headline text-on-surface-variant/60 uppercase tracking-widest">Federated Loading</p>
                <p className="text-sm font-sans text-on-surface mt-1">Shared dependencies managed at runtime via Webpack 5.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Callouts and Secondary Info */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 relative overflow-hidden border border-primary/5">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <h3 className="font-headline text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8">Performance Impact</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-4xl font-headline font-black text-primary">40%</span>
                  <span className="text-[10px] font-mono text-primary/60">▼ DECREASE</span>
                </div>
                <p className="text-xs text-on-surface-variant font-sans">Reduced direct dependencies through strict module scoping.</p>
              </div>
              <div className="pt-8 border-t border-outline-variant/20">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-4xl font-headline font-black text-primary">30%</span>
                  <span className="text-[10px] font-mono text-primary/60">▼ DECREASE</span>
                </div>
                <p className="text-xs text-on-surface-variant font-sans">Reduced maintenance overhead via shared governance models.</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-6 border border-primary/5">
            <h3 className="font-headline text-[10px] uppercase text-on-surface-variant/40 mb-4 px-2 tracking-widest">Tech_Stack_Trace</h3>
            <div className="space-y-2">
              {['React v18.2', 'TypeScript v5.0', 'Webpack Federation', 'Docker / K8s'].map((tech) => (
                <div key={tech} className="flex items-center justify-between p-3 rounded bg-surface-container-highest hover:bg-primary/10 transition-colors group">
                  <span className="text-xs font-mono">{tech}</span>
                  <Verified size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Clean Architecture Section */}
        <section className="lg:col-span-12 mt-12">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] flex items-center justify-center">
                {/* Concentric Rings */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/10"></div>
                <div className="absolute w-[220px] h-[220px] rounded-full border border-primary/20 bg-primary/5"></div>
                <div className="absolute w-[140px] h-[140px] rounded-full border border-primary/40 bg-primary/10"></div>
                <div className="absolute w-[60px] h-[60px] rounded-full border border-primary bg-primary-container/30 shadow-[0_0_40px_rgba(0,212,255,0.3)] flex items-center justify-center">
                  <Terminal size={24} className="text-primary" />
                </div>
                
                {/* Labels */}
                <div className="absolute top-10 right-10 glass-panel px-3 py-1 border-l-2 border-primary text-[10px] font-mono">ENTITIES (Core Logic)</div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 glass-panel px-3 py-1 border-l-2 border-primary/60 text-[10px] font-mono">USE_CASES</div>
                <div className="absolute bottom-10 right-20 glass-panel px-3 py-1 border-l-2 border-primary/40 text-[10px] font-mono">GATEWAYS / REPOS</div>
                <div className="absolute bottom-0 left-1/4 glass-panel px-3 py-1 border-l-2 border-primary/20 text-[10px] font-mono">UI / DB / WEB</div>
              </div>
              <div>
                <span className="font-headline text-primary text-[10px] tracking-widest uppercase mb-2 block">System Design Methodology</span>
                <h2 className="font-headline text-4xl font-bold mb-6">Clean Architecture Implementation</h2>
                <p className="text-on-surface-variant font-sans text-lg leading-relaxed mb-8">
                  Separation of concerns is enforced through strict layer boundaries. Dependencies only point inwards, ensuring that the business logic remains agnostic of UI, databases, or external frameworks.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-high p-4 rounded-xl border-t border-primary/20">
                    <h4 className="font-headline text-primary font-bold text-sm mb-1 uppercase">Testability</h4>
                    <p className="text-xs text-on-surface-variant/60">100% decoupling allows unit testing without mocking external drivers.</p>
                  </div>
                  <div className="bg-surface-container-high p-4 rounded-xl border-t border-primary/20">
                    <h4 className="font-headline text-primary font-bold text-sm mb-1 uppercase">Scalability</h4>
                    <p className="text-xs text-on-surface-variant/60">Framework-agnostic core prevents technological lock-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
