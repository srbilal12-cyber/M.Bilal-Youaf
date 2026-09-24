import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTerminal } from './components/AboutTerminal';
import { HemoScanShowcase } from './components/HemoScanShowcase';
import { Projects } from './components/Projects';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactTransmission } from './components/ContactTransmission';
import { Footer } from './components/Footer';
import { sound } from './utils/audio';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [soundMuted, setSoundMuted] = useState(sound.muted);
  const [humActive, setHumActive] = useState(sound.humActive);

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark scroll-smooth' : 'light scroll-smooth';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    sound.playConfirm();
  };

  const toggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundMuted(isMuted);
  };

  const toggleHum = () => {
    const active = sound.toggleHum();
    setHumActive(active);
  };

  return (
    <div className={`relative min-h-screen ${
      theme === 'dark' 
        ? 'bg-[#070b14] text-slate-100 selection:bg-cyan-500 selection:text-white' 
        : 'bg-[#f8fafc] text-slate-900 selection:bg-sky-500 selection:text-white'
    }`}>
      {/* Ambient High-Tech Overlays */}
      <div className="fixed inset-0 spatial-grid pointer-events-none z-0"></div>
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="fixed top-1/2 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-20">
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          soundMuted={soundMuted} 
          toggleSound={toggleSound}
          humActive={humActive}
          toggleHum={toggleHum}
        />
        <main>
          <Hero theme={theme} />
          <AboutTerminal />
          <HemoScanShowcase />
          <Projects />
          <SkillsGrid />
          <ContactTransmission />
        </main>
        <Footer />
      </div>
    </div>
  );
}
