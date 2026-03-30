import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ArchitectureView } from './views/ArchitectureView';
import { ProjectsView } from './views/ProjectsView';
import { CloudView } from './views/CloudView';
import { ExperienceView } from './views/ExperienceView';

export default function App() {
  const [activeView, setActiveView] = useState<View>('HOME');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle view change with scroll to top
  const handleViewChange = (view: View) => {
    setActiveView(view);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface-dim selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Header 
        activeView={activeView} 
        onViewChange={handleViewChange} 
        onMenuClick={() => setIsSidebarOpen(true)} 
      />
      
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar 
            activeView={activeView} 
            onViewChange={handleViewChange} 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {activeView === 'HOME' && <HomeView />}
            {activeView === 'ARCHITECTURE' && <ArchitectureView />}
            {activeView === 'PROJECTS' && <ProjectsView />}
            {activeView === 'CLOUD' && <CloudView />}
            {activeView === 'EXPERIENCE' && <ExperienceView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Global Background Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #a8e8ff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        {/* Light Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
}
