import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export const Footer = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `00:${m}:${s}`;
  };

  const scrollToTop = () => {
    sound.playConfirm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t dark:border-slate-800 border-slate-200 dark:bg-[#070b14]/95 bg-white/95 pt-12 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SYSTEM ONLINE // ALL PROTOCOLS VERIFIED</span>
            </div>
            <p className="font-display text-sm dark:text-slate-300 text-slate-700">
              Muhammad Bilal Yousaf © 2026. Cyber Engineer • Lead Architect of <a href="https://hemo-scan--srbilal12.replit.app/" target="_blank" rel="noreferrer" className="text-red-500 hover:underline">HemoScan</a> • <a href="https://github.com/srbilal12-cyber" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub (srbilal12-cyber)</a> • <a href="https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">LinkedIn</a>.
            </p>
            <p className="font-mono text-[11px] dark:text-slate-500 text-slate-400">
              SESSION UPTIME: <span className="dark:text-cyan-400 text-sky-600">{formatTime(uptime)}</span> • Hajira, Azad Kashmir • CUST
            </p>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="cyber-button px-6 py-3 dark:bg-slate-900 bg-white border dark:border-cyan-400 border-sky-600 dark:text-cyan-400 text-sky-700 font-mono text-xs font-bold tracking-wider uppercase dark:hover:bg-cyan-400 dark:hover:text-black hover:bg-sky-50 transition-all flex items-center gap-2 group shadow-sm"
          >
            <span>BEAM UP</span>
            <span className="group-hover:-translate-y-1 transition-transform">▲</span>
          </button>

        </div>
      </div>
    </footer>
  );
};
