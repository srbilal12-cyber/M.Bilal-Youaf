import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Menu, X, ExternalLink, Linkedin, Sun, Moon, Github, Download, Activity } from 'lucide-react';
import { sound } from '../utils/audio';

const USER_PHOTO_SRC = (typeof window !== 'undefined' && window.BILAL_HEADSHOT_BASE64)
  ? window.BILAL_HEADSHOT_BASE64
  : './assets/bilal_headshot.jpg';

export const Navbar = ({ theme = 'dark', toggleTheme, soundMuted, toggleSound, humActive, toggleHum }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'HemoScan', href: '#hemoscan' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#expertise' },
    { label: 'Direct Comms', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'dark:bg-[#070b14]/90 bg-white/90 backdrop-blur-xl dark:border-b dark:border-slate-800/80 border-b border-slate-200/90 py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border dark:border-cyan-400/40 border-sky-500/40 p-0.5 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <img 
              src={USER_PHOTO_SRC} 
              alt="Muhammad Bilal Yousaf" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors">
              Muhammad Bilal Yousaf
            </span>
            <span className="font-mono text-[10px] dark:text-emerald-400 text-emerald-600 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              CYBER ENGINEER • HEMOSCAN
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-display text-sm font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="dark:text-slate-300 text-slate-600 dark:hover:text-cyan-400 hover:text-sky-600 transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Controls & Quick Links */}
        <div className="flex items-center gap-2.5">
          {/* Download CV Action Button */}
          <a
            href="./assets/Muhammad_Bilal_Yousaf_Resume.html"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playConfirm()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border dark:border-cyan-400/60 border-cyan-600/60 dark:bg-cyan-500/10 bg-cyan-50 text-cyan-600 dark:text-cyan-300 text-xs font-mono font-semibold hover:dark:bg-cyan-400 hover:dark:text-slate-950 hover:bg-cyan-600 hover:text-white transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            title="Download ATS-Friendly Printable Resume / CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD CV</span>
          </a>

          {/* Ambient Cyber Hum Toggle */}
          {toggleHum && (
            <button
              onClick={toggleHum}
              onMouseEnter={() => sound.playHover()}
              title={humActive ? "Deactivate Ambient Cyber Soundscape" : "Activate Ambient Cyber Soundscape"}
              className={`hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                humActive 
                  ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.35)]' 
                  : 'dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 border-slate-300 bg-white text-slate-500 hover:border-cyan-400'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{humActive ? 'HUM: ON' : 'HUM: OFF'}</span>
            </button>
          )}

          {/* Theme Toggle (Dark vs Bright Mode) */}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => sound.playHover()}
            title={theme === 'dark' ? "Switch to Bright Mode" : "Switch to Dark Mode"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              theme === 'dark' 
                ? 'border-slate-700 bg-slate-900/80 text-cyan-400 hover:border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.2)]' 
                : 'border-slate-300 bg-white text-slate-800 hover:border-sky-500 shadow-sm'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'BRIGHT' : 'DARK'}</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            title={soundMuted ? "Enable Cyber Sound Effects" : "Mute Sound Effects"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              !soundMuted 
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]' 
                : 'dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 border-slate-300 bg-white text-slate-500 hover:border-slate-400'
            }`}
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{soundMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
            {!soundMuted && (
              <span className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse"></span>
                <span className="w-0.5 h-3 bg-emerald-400 animate-pulse"></span>
                <span className="w-0.5 h-2 bg-emerald-400 animate-pulse"></span>
              </span>
            )}
          </button>

          {/* HemoScan Live Link Button */}
          <a
            href="https://hemo-scan--srbilal12.replit.app/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playConfirm()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600/15 border border-red-500/40 text-red-500 dark:text-red-400 text-xs font-mono font-semibold hover:bg-red-600 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>HEMOSCAN APP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn Direct Profile Link */}
          <a
            href="https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hidden sm:inline-flex p-2 rounded-lg border dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 border-slate-300 bg-white text-slate-700 hover:text-cyan-500 hover:border-cyan-500/50 transition-all shadow-sm"
            title="LinkedIn: Muhammad Bilal Yousaf"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* GitHub Direct Profile Link */}
          <a
            href="https://github.com/srbilal12-cyber"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hidden sm:inline-flex p-2 rounded-lg border dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 border-slate-300 bg-white text-slate-700 hover:text-cyan-500 hover:border-cyan-500/50 transition-all shadow-sm"
            title="GitHub: srbilal12-cyber"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 dark:text-slate-300 text-slate-700 hover:text-cyan-400"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenu && (
        <div className="md:hidden dark:bg-[#080d1a]/95 bg-white/95 border-b dark:border-slate-800 border-slate-200 px-6 py-5 mt-2 space-y-3 font-display text-sm shadow-xl">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="block dark:text-slate-300 text-slate-700 hover:text-cyan-400 py-1.5"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2 border-t dark:border-slate-800 border-slate-200">
            <a
              href="./assets/Muhammad_Bilal_Yousaf_Resume.html"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenu(false)}
              className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyan-500/10 border border-cyan-400 text-cyan-400 font-mono text-xs font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Verified Resume / CV</span>
            </a>

            {toggleHum && (
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-xs dark:text-slate-400 text-slate-500">Ambient Hum:</span>
                <button
                  onClick={toggleHum}
                  className="px-3 py-1 rounded border dark:border-slate-700 border-slate-300 font-mono text-xs flex items-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{humActive ? 'Hum ON' : 'Hum OFF'}</span>
                </button>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs dark:text-slate-400 text-slate-500">Visual Mode:</span>
              <button
                onClick={() => { toggleTheme(); setMobileMenu(false); }}
                className="px-3 py-1 rounded border dark:border-slate-700 border-slate-300 font-mono text-xs flex items-center gap-1.5"
              >
                {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
                <span>{theme === 'dark' ? 'Bright Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>

          <div className="pt-2 space-y-2 border-t dark:border-slate-800 border-slate-200">
            <a
              href="https://hemo-scan--srbilal12.replit.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-red-500 dark:text-red-400 font-mono text-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Launch HemoScan (Live Replit App) ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b"
              target="_blank"
              rel="noreferrer"
              className="block text-cyan-500 font-mono text-xs"
            >
              <Linkedin className="w-4 h-4 inline-block mr-2" />
              <span>LinkedIn Profile ↗</span>
            </a>
            <a
              href="https://github.com/srbilal12-cyber"
              target="_blank"
              rel="noreferrer"
              className="block text-emerald-500 font-mono text-xs"
            >
              <Github className="w-4 h-4 inline-block mr-2" />
              <span>GitHub (srbilal12-cyber) ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
