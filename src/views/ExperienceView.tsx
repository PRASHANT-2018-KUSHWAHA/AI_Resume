import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap, Globe } from 'lucide-react';
import { EXPERIENCES, EDUCATION, LANGUAGES } from '../constants';

export const ExperienceView: React.FC = () => {
  return (
    <div className="pt-12 pb-24 px-6 md:pl-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <nav className="flex items-center font-mono text-[10px] tracking-[0.2em] text-primary/60 uppercase">
          <span>SYSTEM</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span>PROFESSIONAL_HISTORY</span>
          <span className="mx-3 text-outline-variant">//</span>
          <span className="text-primary font-bold">LOG_ENTRIES</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Experience Timeline */}
        <div className="lg:col-span-8 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-primary/20"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
              
              <div className="glass-panel p-8 rounded-xl border border-primary/5 hover:border-primary/20 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-headline text-sm tracking-widest uppercase mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-on-surface-variant/60 text-[10px] font-mono uppercase">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant/60 text-[10px] font-mono uppercase">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-primary/5 text-primary text-[9px] font-headline rounded border border-primary/10 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Info: Education & Languages */}
        <div className="lg:col-span-4 space-y-8">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 rounded-xl border border-primary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest">Education</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-primary font-headline text-[10px] uppercase tracking-widest mb-1">{EDUCATION.year}</p>
                <h5 className="text-on-surface font-bold text-sm leading-tight mb-1">{EDUCATION.degree}</h5>
                <p className="text-on-surface-variant text-xs">{EDUCATION.institution}</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-xl border border-primary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Globe size={20} className="text-secondary" />
              </div>
              <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest">Languages</h4>
            </div>
            
            <div className="space-y-4">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface font-bold text-sm">{lang.name}</span>
                  <span className="text-on-surface-variant text-[10px] font-mono uppercase">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Quick Link */}
          <div className="p-8 bg-primary/5 rounded-xl border border-primary/10 border-dashed">
            <p className="text-[10px] font-mono text-primary/60 uppercase mb-4 tracking-widest">Ready for collaboration?</p>
            <a 
              href="mailto:prashantkushwaha000@gmail.com"
              className="block w-full py-3 bg-primary text-on-primary text-center font-headline font-bold text-xs uppercase tracking-widest rounded hover:bg-primary/90 transition-colors"
            >
              Contact_Architect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
