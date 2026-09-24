import React from 'react';
import { Heart, ExternalLink, Shield, MapPin, Mail, Phone, Github, Download, Check } from 'lucide-react';
import { sound } from '../utils/audio';

const USER_HEADSHOT_SRC = (typeof window !== 'undefined' && window.BILAL_HEADSHOT_BASE64)
  ? window.BILAL_HEADSHOT_BASE64
  : './assets/bilal_headshot.jpg';

export const Hero = ({ theme = 'dark' }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Headline & Clearance Header */}
      <div className="text-center max-w-4xl mx-auto space-y-5 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-emerald-500/40 border-emerald-500/30 dark:bg-emerald-500/10 bg-emerald-500/10 dark:text-emerald-400 text-emerald-700 font-mono text-xs tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>AUTHENTICATED DOSSIER // BS CYBERSECURITY STUDENT @ CUST</span>
        </div>

        {/* Circular Holographic Avatar (Focused on Face & Hand) */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="relative group cursor-pointer" onClick={() => sound.playHover()}>
            {/* Outer glowing pulsing aura */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse"></div>
            
            {/* Rotating dashed holographic perimeter ring */}
            <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-cyan-400/60 dark:border-cyan-400/70 animate-spin pointer-events-none" style={{ animationDuration: '20s' }}></div>

            {/* Circular Image Container with Precision Headshot Framing */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 dark:border-cyan-300 border-sky-400 dark:bg-slate-950 bg-slate-100 shadow-[0_0_30px_rgba(0,240,255,0.3)] p-1 transition-transform duration-300 group-hover:scale-105">
              <img
                src={USER_HEADSHOT_SRC}
                alt="Muhammad Bilal Yousaf"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>

            {/* Verified Cyber Badge */}
            <div 
              className="absolute bottom-1 right-1 p-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-lg border-2 dark:border-slate-950 border-white flex items-center justify-center"
              title="Verified Technical Identity"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs sm:text-sm dark:text-cyan-400 text-sky-600 uppercase tracking-widest">
            &gt; BS CYBERSECURITY UNDERGRADUATE // CUST (STUDENT)
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight dark:text-white text-slate-950 leading-none">
            Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-400 dark:via-sky-300 dark:to-emerald-400 from-sky-600 via-blue-600 to-indigo-600">
              Bilal Yousaf
            </span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs">
          <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-cyan-400 text-sky-700 font-semibold shadow-sm">
            BS Cybersecurity (Student @ CUST)
          </span>
          <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-emerald-400 text-emerald-700 font-semibold shadow-sm">
            Artificial Intelligence
          </span>
          <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-indigo-400 text-indigo-700 font-semibold shadow-sm">
            Microsoft Office Suite
          </span>
          <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-purple-400 text-purple-700 font-semibold shadow-sm">
            Data Analytics &amp; Modeling
          </span>
        </div>

        <p className="dark:text-slate-300 text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Undergraduate Cybersecurity student currently enrolled at Capital University of Science and Technology (CUST), specializing in defensive cybersecurity infrastructures, clinical AI diagnostics, and advanced Microsoft Office data modeling. Architect and creator of <strong className="text-red-500 dark:text-red-400">HemoScan</strong>, an AI-powered non-invasive hemoglobin estimation platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3.5 pt-2">
          <a
            href="./assets/Muhammad_Bilal_Yousaf_Resume.html"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playConfirm()}
            className="cyber-button px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 text-white dark:text-slate-950 font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME / CV</span>
          </a>

          <a
            href="#hemoscan"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="cyber-button px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>EXPLORE HEMOSCAN</span>
          </a>

          <a
            href="https://hemo-scan--srbilal12.replit.app/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playConfirm()}
            className="cyber-button px-7 py-3.5 dark:bg-slate-900 bg-white border dark:border-cyan-400 border-sky-600 dark:text-cyan-400 text-sky-700 font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LAUNCH LIVE APP ↗</span>
          </a>

          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="cyber-button px-7 py-3.5 dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 dark:text-slate-300 text-slate-700 font-display font-bold text-xs sm:text-sm tracking-wider uppercase dark:hover:border-slate-500 hover:border-slate-500 hover:text-cyan-600 transition-all flex items-center gap-2 shadow-sm"
          >
            <Shield className="w-4 h-4" />
            <span>ESTABLISH CONTACT</span>
          </a>

          <a
            href="https://github.com/srbilal12-cyber"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="cyber-button px-7 py-3.5 dark:bg-slate-900 bg-white border dark:border-emerald-500/40 border-emerald-600/40 dark:text-emerald-400 text-emerald-700 font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-emerald-400 transition-all flex items-center gap-2 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB // srbilal12-cyber ↗</span>
          </a>
        </div>
      </div>

      {/* Real-time Telemetry Grid (Rotatable 3D block removed as requested) */}
      <div className="max-w-4xl mx-auto mt-10">
        <div className="relative dark:border dark:border-cyan-500/20 border border-slate-300/80 rounded-2xl dark:bg-[#0c152a]/70 bg-white/80 backdrop-blur-xl p-4 sm:p-5 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase">DIRECT GMAIL</span>
              <a href="mailto:srbilal12@gmail.com" className="dark:text-cyan-400 text-sky-600 font-bold hover:underline truncate block">
                srbilal12@gmail.com
              </a>
            </div>
            <div className="p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase">SECURE PHONE</span>
              <span className="dark:text-emerald-400 text-emerald-600 font-bold">+92 3421080908</span>
            </div>
            <div className="p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase">STATUS &amp; DEGREE</span>
              <span className="dark:text-indigo-400 text-indigo-600 font-bold truncate block">BS CYBER @ CUST (STUDENT)</span>
            </div>
            <div className="p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase">LOCATION</span>
              <span className="dark:text-slate-200 text-slate-700 font-bold truncate block">Hajira, Azad Kashmir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
