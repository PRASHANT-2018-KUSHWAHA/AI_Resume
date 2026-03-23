import React from 'react';
import { motion } from 'motion/react';
import { Bolt, Terminal, Database, Cloud, Activity } from 'lucide-react';

export const CloudView: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 md:pl-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="font-headline text-primary text-[10px] tracking-[0.3em] mb-2 uppercase">INFRASTRUCTURE // CLOUD_OPS</div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 text-on-surface">
          Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystems</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Visualizing the neural network of modern architecture. From serverless logic clusters to automated deployment pipelines, our systems are built for perpetual motion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Stats Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 border-t border-primary/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Bolt size={64} />
            </div>
            <div className="text-4xl font-headline font-bold text-primary mb-1">25%</div>
            <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">faster deployments</div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/4"></div>
            </div>
          </div>

          <div className="glass-panel p-8 border-t border-secondary/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Activity size={64} />
            </div>
            <div className="text-4xl font-headline font-bold text-secondary mb-1">40%</div>
            <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">reduction in release effort</div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[40%]"></div>
            </div>
          </div>

          <div className="p-6 border-l-2 border-outline-variant/30 italic text-on-surface-variant font-light">
            "Transitioning to an event-driven serverless architecture eliminated 90% of our idle compute costs while increasing reliability across peak traffic cycles."
          </div>
        </div>

        {/* Right: The Map */}
        <div className="col-span-12 lg:col-span-8 relative min-h-[500px] bg-surface-container-low/30 rounded-3xl p-8 overflow-hidden border border-primary/5">
          {/* Abstract Data Streams */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {[12, -6, 45].map((rot, i) => (
              <div 
                key={i}
                className="absolute w-full h-px data-stream"
                style={{ top: `${25 + i * 25}%`, transform: `rotate(${rot}deg)` }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { id: 'AWS_LAMBDA', label: 'Logic Clusters', icon: Terminal, color: 'primary' },
              { id: 'AWS_RDS', label: 'Aurora DB', icon: Database, color: 'secondary' },
              { id: 'AWS_S3', label: 'Object Store', icon: Cloud, color: 'primary' },
              { id: 'AWS_EC2', label: 'Scale Groups', icon: Activity, color: 'secondary' },
            ].map((node, i) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center space-y-4 p-6 rounded-full border border-${node.color}/10 ${i === 1 ? 'mt-12' : ''} ${i === 3 ? 'md:col-start-2' : ''}`}
              >
                <div className={`w-16 h-16 glass-panel rounded-xl flex items-center justify-center text-${node.color} border border-${node.color}/30 shadow-[0_0_20px_rgba(168,232,255,0.2)]`}>
                  <node.icon size={32} />
                </div>
                <div className="text-center">
                  <div className={`font-headline text-[10px] text-${node.color} tracking-widest uppercase`}>{node.id}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">{node.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pipeline Overlay */}
          <div className="mt-16 bg-surface-container-highest/40 rounded-xl p-6 border border-outline-variant/20 backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Activity size={16} className="text-primary" />
                <span className="font-headline text-[10px] tracking-widest uppercase">CI_CD_PIPELINE_ACTIVE</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-20"></div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6 relative">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">GIT</div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-primary to-transparent relative">
                  <motion.div 
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#a8e8ff]"
                  ></motion.div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">BLD</div>
                <div className="flex-1 h-[2px] bg-surface-container-low"></div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">DEP</div>
              </div>
              <div className="flex justify-between px-2 text-[10px] font-mono text-on-surface-variant uppercase">
                <span>commit_push</span>
                <span>unit_tests_pass</span>
                <span>prod_deploy</span>
              </div>
            </div>
          </div>

          {/* Status Label */}
          <div className="absolute bottom-4 right-4 bg-surface-container p-2 border border-primary/20 rounded shadow-xl">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              <span className="font-headline text-[10px] text-on-surface uppercase tracking-widest">SYS_HEALTH: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
