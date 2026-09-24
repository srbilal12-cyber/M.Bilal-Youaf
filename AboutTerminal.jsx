import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, ExternalLink, Heart, FileSpreadsheet } from 'lucide-react';
import { sound } from '../utils/audio';

const USER_HEADSHOT_SRC = (typeof window !== 'undefined' && window.BILAL_HEADSHOT_BASE64)
  ? window.BILAL_HEADSHOT_BASE64
  : './assets/bilal_headshot.jpg';

export const AboutTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'MBY-OS Quantum Terminal v4.0 Initialized.' },
    { type: 'sys', text: 'Operative: Muhammad Bilal Yousaf | Status: BS Cybersecurity Student @ CUST (In Progress).' },
    { type: 'output', text: 'Flagship Deployment: HemoScan (AI Non-Invasive Hemoglobin Screening).' },
    { type: 'sys', text: 'Type "hemoscan", "msoffice", "skills", "bio", or "contact" for telemetry readouts.' }
  ]);
  const [inputCommand, setInputCommand] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [history]);

  const handleRunCommand = (cmdStr) => {
    sound.playClick();
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available Direct Commands:\n  - hemoscan  : Full architecture & specs of HemoScan app\n  - bio       : Academic status, BS Cybersecurity enrollment, CUST affiliation\n  - msoffice  : Microsoft Office Suite, Excel, Word & Power BI\n  - github    : GitHub repositories & projects (srbilal12-cyber)\n  - ai        : Machine learning & computer vision models\n  - cyber     : Cybersecurity & defensive initiatives\n  - contact   : Direct communication uplink\n  - clear     : Clear terminal console';
        break;
      case 'github':
        response = '[GITHUB REPOSITORY PROFILE]\nAccount: srbilal12-cyber\nURL: https://github.com/srbilal12-cyber\nRepositories: HemoScan AI core, Cybersecurity auditing tools, Python ML scripts, and Web systems.';
        break;
      case 'hemoscan':
        response = '[HEMOSCAN DEPLOYMENT BLUEPRINT]\nURL: https://hemo-scan--srbilal12.replit.app/\nMission: AI-powered non-invasive hemoglobin screening using smartphone camera optical analysis.\nKey Capabilities:\n  • Fingertip PPG optical sensing with zero needle intrusion\n  • Colorimetric spectral absorption wavelength analysis\n  • Real-time automated anemia risk stratification (Normal, Mild, Moderate, Severe)\n  • Integrated clinic geolocation mapping for immediate medical access.';
        break;
      case 'bio':
        response = '[ACADEMIC & BIOGRAPHY DOSSIER]\nName: Muhammad Bilal Yousaf\nAcademic Status: Undergraduate Student (Currently Enrolled / In Progress)\nDegree: BS Cybersecurity\nUniversity: Capital University of Science and Technology (CUST - cust.pk)\nLocation: Hajira, Azad Kashmir\nSpecializations: Cybersecurity & Threat Defense, Applied AI Diagnostics (HemoScan), Microsoft Office Advanced Analytics.';
        break;
      case 'msoffice':
      case 'office':
      case 'excel':
        response = '[MICROSOFT OFFICE & ANALYTICS SUITE]\n• Microsoft Excel: Advanced formula modeling (XLOOKUP, INDEX/MATCH), dynamic Pivot Tables, and automated analytics.\n• Microsoft Word: High-standard executive documentation, research publications, and corporate reporting.\n• Microsoft PowerPoint: Strategic high-impact pitch decks, technical briefings, and visual presentations.\n• Microsoft 365 & Power BI: Unified cloud productivity workflows and interactive KPI reporting.';
        break;
      case 'ai':
        response = '[AI & COMPUTER VISION]\nSpecialization in Optical PPG, non-invasive spectral analysis, Python ML pipelines (TensorFlow, Scikit-Learn), and regression-based biometric estimation.';
        break;
      case 'cyber':
        response = '[CYBERSECURITY & DEFENSE]\nNetwork traffic analysis, boundary defense, cryptographic protocols, ethical auditing methodology, and secure enclave architectures.';
        break;
      case 'contact':
        response = 'Direct Comms:\n  • Gmail: srbilal12@gmail.com\n  • Phone: +92 3421080908\n  • GitHub: https://github.com/srbilal12-cyber\n  • Affiliation: Capital University of Science and Technology (cust.pk)\n  • Status: BS Cybersecurity Student (In Progress)\n  • Location: Hajira, Azad Kashmir\n  • LinkedIn: https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b\n  • HemoScan App: https://hemo-scan--srbilal12.replit.app/';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = `Command "${cmd}" not recognized. Type "help" or click the chips below.`;
        break;
    }

    setHistory(prev => [
      ...prev,
      { type: 'user', text: `$ ${cmdStr}` },
      { type: 'output', text: response }
    ]);
    setInputCommand('');
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs dark:text-cyan-400 text-sky-600 tracking-widest uppercase">
          <Terminal className="w-4 h-4" />
          <span>// MODULE 01: OPERATIVE PROFILE</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl dark:text-white text-slate-900">
          Executive <span className="dark:text-cyan-400 text-sky-600">Dossier</span>
        </h2>
        <p className="dark:text-slate-400 text-slate-600 font-sans text-base sm:text-lg">
          Verified academic and technical credentials of Muhammad Bilal Yousaf, undergraduate Cybersecurity student at CUST.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Real Career Pillars & Photo Badge */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          {/* Identity Card */}
          <div className="cyber-panel p-6 dark:bg-slate-900/80 bg-white/90 border dark:border-slate-800 border-slate-200 rounded-xl relative hover:border-cyan-500/50 transition-all flex items-center gap-4 shadow-sm">
            <img 
              src={USER_HEADSHOT_SRC} 
              alt="Muhammad Bilal Yousaf" 
              className="w-20 h-20 rounded-xl object-cover border-2 border-cyan-400 shadow-md"
            />
            <div>
              <h3 className="font-display font-bold text-lg dark:text-white text-slate-900">Muhammad Bilal Yousaf</h3>
              <p className="text-xs text-emerald-500 font-mono">BS Cybersecurity (Student @ CUST)</p>
              <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">Undergraduate • In Progress</p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl dark:bg-slate-900/70 bg-white/80 border dark:border-slate-800 border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono dark:text-cyan-400 text-sky-600 font-bold">
                <Shield className="w-4 h-4" />
                <span>01 // CYBERSECURITY &amp; SYSTEM DEFENSE</span>
              </div>
              <p className="text-xs dark:text-slate-300 text-slate-600">
                Network defense, vulnerability assessments, boundary hardening, cryptography, and secure enclaves.
              </p>
            </div>

            <div className="p-4 rounded-xl dark:bg-slate-900/70 bg-white/80 border dark:border-slate-800 border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-red-500 dark:text-red-400 font-bold">
                <Heart className="w-4 h-4 fill-current" />
                <span>02 // ARTIFICIAL INTELLIGENCE &amp; HEMOSCAN</span>
              </div>
              <p className="text-xs dark:text-slate-300 text-slate-600">
                Computer vision, optical photoplethysmography (PPG), and machine learning regression for non-invasive medical screening.
              </p>
            </div>

            <div className="p-4 rounded-xl dark:bg-slate-900/70 bg-white/80 border dark:border-slate-800 border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono dark:text-emerald-400 text-emerald-600 font-bold">
                <FileSpreadsheet className="w-4 h-4" />
                <span>03 // MICROSOFT OFFICE &amp; ANALYTICS</span>
              </div>
              <p className="text-xs dark:text-slate-300 text-slate-600">
                Advanced data modeling in Excel, executive documentation in Word, PowerPoint technical decks, and Power BI dashboards.
              </p>
            </div>

            <div className="p-4 rounded-xl dark:bg-slate-900/70 bg-white/80 border dark:border-slate-800 border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-500 dark:text-purple-400 font-bold">
                <Cpu className="w-4 h-4" />
                <span>04 // SCALABLE WEB &amp; CLOUD SYSTEMS</span>
              </div>
              <p className="text-xs dark:text-slate-300 text-slate-600">
                Modern responsive React applications, Progressive Web Apps (PWAs), Git workflows, and cloud deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Console */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex-1 flex flex-col rounded-2xl dark:bg-[#050914] bg-slate-950 border dark:border-slate-800 border-slate-800 shadow-2xl overflow-hidden min-h-[460px]">
            {/* Terminal Window Header */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-mono text-xs text-slate-400 font-medium">mby-terminal // bash</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">ENCRYPTED SESSION</span>
            </div>

            {/* Terminal Screen / History */}
            <div 
              ref={terminalEndRef}
              className="flex-1 p-5 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 max-h-[380px]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'sys' && (
                    <span className="text-cyan-400/90">{item.text}</span>
                  )}
                  {item.type === 'user' && (
                    <span className="text-emerald-400 font-bold">{item.text}</span>
                  )}
                  {item.type === 'output' && (
                    <span className="text-slate-200">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Command Chips */}
            <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800 flex flex-wrap gap-2 items-center">
              <span className="font-mono text-[10px] text-slate-500">QUICK CMDS:</span>
              {['hemoscan', 'github', 'msoffice', 'bio', 'ai', 'cyber', 'contact', 'clear'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleRunCommand(cmd)}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-slate-800/90 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Command Input Field */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleRunCommand(inputCommand); }}
              className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
            >
              <span className="font-mono text-emerald-400 font-bold">$</span>
              <input 
                type="text"
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                placeholder="type command (e.g., 'hemoscan', 'msoffice', 'help')..."
                className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none"
              />
              <button 
                type="submit" 
                className="font-mono text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-500 hover:text-black transition-all"
              >
                EXEC
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
