import React, { useState, useMemo, useEffect } from 'react';
import { Layers, Github, ExternalLink, X, Heart, Download } from 'lucide-react';
import { sound } from '../utils/audio';

const TECHNICAL_PROJECTS = [
  {
    id: 'hemoscan',
    title: 'HemoScan AI — Clinical Hemoglobin Estimator',
    category: 'Clinical AI & Computer Vision',
    role: 'Creator & Lead Systems Architect',
    badge: 'FLAGSHIP INNOVATION',
    badgeColor: 'border-red-500/40 text-red-400 bg-red-500/10',
    summary: 'Non-invasive optical hemoglobin estimation platform leveraging smartphone camera photoplethysmography (PPG) to analyze micro-vascular capillary blood absorption and deliver instantaneous anemia risk stratification.',
    specs: [
      'Fingertip PPG optical sensing with zero blood-prick intrusion',
      'Colorimetric spectral absorption wavelength analysis (Red/Green channel ratios)',
      'Real-time automated anemia risk stratification (Normal, Mild, Moderate, Severe)',
      'Integrated clinic geolocation routing for immediate clinical access'
    ],
    techStack: ['React', 'Three.js', 'Tailwind CSS', 'Python', 'OpenCV', 'PPG Signal Processing', 'Replit', 'Web APIs'],
    liveUrl: 'https://hemo-scan--srbilal12.replit.app/',
    githubUrl: 'https://github.com/srbilal12-cyber',
    architecture: [
      { step: '01. Optical Acquisition', desc: 'Smartphone video stream illuminates fingertip capillaries at 60 FPS, recording pulsatile blood dynamics.' },
      { step: '02. Micro-Vascular Decomposition', desc: 'Isolates pulsatile AC/DC signal ratios across red and green optical spectral absorption bands.' },
      { step: '03. Polynomial ML Estimation', desc: 'Calibrated regression curves convert micro-vascular optical absorbance into clinical Hb (g/dL).' },
      { step: '04. Clinical Stratification', desc: 'Maps telemetry against WHO anemia criteria and geolocates nearest medical facilities.' }
    ]
  },
  {
    id: 'cybershield',
    title: 'CyberShield Threat Defense & Protocol Boundary Auditor',
    category: 'Cybersecurity & Infrastructure',
    role: 'Cyber Systems Engineer',
    badge: 'DEFENSIVE CYBERSECURITY',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    summary: 'High-performance network traffic auditor and boundary hardening engine designed to detect protocol anomalies, sniff unauthorized packet payloads, and audit endpoint encryption configurations.',
    specs: [
      'Real-time packet inspection & promiscuous mode packet telemetry',
      'Vulnerability scanning against OWASP Top 10 and misconfigured port services',
      'Cryptographic handshake & TLS cipher strength validation',
      'Automated incident logs with intrusion detection indicators'
    ],
    techStack: ['Python', 'Scapy', 'Applied Cryptography', 'Linux Boundary Hardening', 'Socket Networking', 'Bash', 'Tailwind UI'],
    githubUrl: 'https://github.com/srbilal12-cyber',
    architecture: [
      { step: '01. Raw Packet Ingestion', desc: 'Sniffs and parses Ethernet, IP, TCP, and UDP layer headers in real-time non-blocking queues.' },
      { step: '02. Signature & Anomaly Heuristics', desc: 'Flags malformed handshakes, SYN floods, unauthorized probe sweeps, and port scan signatures.' },
      { step: '03. Cipher Strength Verification', desc: 'Audits TLS certificate chains, key exchange entropy, and deprecation status of cipher suites.' },
      { step: '04. Alert & Telemetry Dispatch', desc: 'Outputs structured JSON incident logs and automated defensive firewall filtering rules.' }
    ]
  },
  {
    id: 'neurovision',
    title: 'NeuroVision Optical PPG & Signal Decomposition Engine',
    category: 'Artificial Intelligence & Vision',
    role: 'AI & Algorithm Developer',
    badge: 'COMPUTER VISION ENGINE',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    summary: 'Computer vision algorithms dedicated to extracting physiological bio-signals from dermal video feeds. Filters noise, attenuates motion artifacts, and generates clean pulse waveforms.',
    specs: [
      'Sub-pixel skin segmentation and multi-region micro-vascular tracking',
      'Butterworth bandpass filtering & Fast Fourier Transform (FFT) spectrum analysis',
      'Real-time heart rate (BPM) and oxygenation saturation trend derivation',
      'Low-latency lightweight inference pipeline optimized for edge mobile browsers'
    ],
    techStack: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'TensorFlow', 'Signal Processing', 'Fast Fourier Transform'],
    githubUrl: 'https://github.com/srbilal12-cyber',
    architecture: [
      { step: '01. ROI Dermal Tracking', desc: 'Dynamic bounding box locks onto skin regions with highest capillary density, ignoring background noise.' },
      { step: '02. Chrominance Signal Filtering', desc: 'Transforms color space (YCrCb/Lab) to decouple blood volume changes from ambient light jitter.' },
      { step: '03. FFT Frequency Peak Extraction', desc: 'Computes power spectral density to isolate cardiac frequency bands (0.75 Hz to 3.5 Hz).' },
      { step: '04. Waveform Telemetry Export', desc: 'Streams smoothed cardiac pulse curves directly to interactive UI charts and diagnostic monitors.' }
    ]
  },
  {
    id: 'enterprise-analytics',
    title: 'Enterprise Analytics & MS Office Automation Suite',
    category: 'Data Systems & Business Intelligence',
    role: 'Data Modeling & Systems Specialist',
    badge: 'MS OFFICE & BUSINESS INTEL',
    badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    summary: 'Enterprise-grade data modeling and business intelligence frameworks developed across Microsoft Excel, Power BI, Word, and PowerPoint for executive stakeholder decision making.',
    specs: [
      'Advanced multi-criteria Excel modeling (nested XLOOKUP, dynamic array formulas, INDEX/MATCH)',
      'Automated data cleaning & transformation pipelines using Power Query & VBA',
      'Interactive Power BI multi-table relational models with DAX measures',
      'Executive publication-quality documentation in Word and presentation decks in PowerPoint'
    ],
    techStack: ['Microsoft Excel', 'VBA / Macros', 'Power BI', 'DAX', 'Power Query', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft 365'],
    resumeUrl: './assets/Muhammad_Bilal_Yousaf_Resume.html',
    architecture: [
      { step: '01. Ingestion & ETL Normalization', desc: 'Power Query pipelines clean, unpivot, and standardize heterogeneous institutional datasets.' },
      { step: '02. Relational Star-Schema Modeling', desc: 'Establishes dimension and fact tables with optimized DAX measure calculations.' },
      { step: '03. Dynamic Forecasting Models', desc: 'Excel scenario managers and sensitivity matrices project operational and clinical metrics.' },
      { step: '04. Executive Synthesis & Briefings', desc: 'Synchronized live-linked PowerPoint decks and formal Word technical briefs for leadership.' }
    ]
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-3xl my-8 dark:bg-[#090f1e] bg-white rounded-2xl border dark:border-cyan-500/30 border-slate-300 shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden z-10">
        <div className="dark:bg-slate-900/90 bg-slate-100 px-6 py-4 border-b dark:border-slate-800 border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border ${project.badgeColor}`}>
              {project.badge}
            </span>
            <span className="font-mono text-xs dark:text-slate-400 text-slate-500 hidden sm:inline">
              // {project.role}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-black hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
          <div>
            <span className="font-mono text-xs dark:text-cyan-400 text-sky-600 uppercase tracking-widest block mb-1">
              {project.category}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl dark:text-white text-slate-950">
              {project.title}
            </h3>
            <p className="dark:text-slate-300 text-slate-700 text-sm sm:text-base leading-relaxed mt-2.5">
              {project.summary}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs dark:text-slate-400 text-slate-500 uppercase tracking-wider block">
              Technologies &amp; Libraries:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-cyan-500/25 border-slate-300 dark:text-cyan-300 text-sky-700 font-mono text-xs font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs dark:text-emerald-400 text-emerald-600 uppercase tracking-wider block font-semibold">
              Core Architectural Capabilities:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs sm:text-sm">
              {project.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800/80 border-slate-200">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span className="dark:text-slate-300 text-slate-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs dark:text-purple-400 text-purple-600 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Pipeline Architecture &amp; Dataflow Execution:</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-3.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-1">
                  <span className="font-mono text-xs dark:text-cyan-400 text-sky-600 font-bold block">
                    {arch.step}
                  </span>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t dark:border-slate-800 border-slate-200 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Launch Live Application ↗</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-slate-200 text-slate-800 font-display font-bold text-xs uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-400 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub: srbilal12-cyber ↗</span>
                </a>
              )}

              {project.resumeUrl && (
                <a
                  href={project.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-cyan-400/50 border-sky-400 dark:text-cyan-300 text-sky-700 font-display font-bold text-xs uppercase tracking-wider hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>View in Verified Resume / CV</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg dark:text-slate-400 text-slate-500 text-xs font-mono hover:text-white transition-colors"
            >
              [CLOSE VIEW]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Clinical AI', 'Cybersecurity', 'Data Systems'];

  const filteredProjects = useMemo(() => {
    if (filter === 'ALL') return TECHNICAL_PROJECTS;
    if (filter === 'Clinical AI') return TECHNICAL_PROJECTS.filter(p => p.category.includes('Clinical') || p.category.includes('Vision'));
    if (filter === 'Cybersecurity') return TECHNICAL_PROJECTS.filter(p => p.category.includes('Cybersecurity'));
    if (filter === 'Data Systems') return TECHNICAL_PROJECTS.filter(p => p.category.includes('Data Systems'));
    return TECHNICAL_PROJECTS;
  }, [filter]);

  const openModal = (proj) => {
    sound.playModalOpen();
    setActiveProject(proj);
  };

  const closeModal = () => {
    sound.playModalClose();
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs dark:text-cyan-400 text-sky-600 tracking-widest uppercase">
          <Layers className="w-4 h-4" />
          <span>// MODULE 02: INITIATIVES &amp; ARCHITECTURES</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl dark:text-white text-slate-900">
          Technical <span className="dark:text-cyan-400 text-sky-600">Projects Showcase</span>
        </h2>
        <p className="dark:text-slate-400 text-slate-600 font-sans text-base sm:text-lg">
          Explore Muhammad Bilal Yousaf's software engineering, clinical computer vision platforms, cybersecurity auditing tooling, and advanced Microsoft Office modeling architectures.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              className={`px-4 py-1.5 rounded-full border transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'dark:bg-slate-900 bg-white border-slate-300 dark:border-slate-800 dark:text-slate-400 text-slate-600 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="cyber-panel p-6 sm:p-8 dark:bg-slate-900/80 bg-white/95 border dark:border-slate-800 border-slate-200 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <span className="font-mono text-xs dark:text-slate-400 text-slate-500">
                  {project.role}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed mt-2">
                  {project.summary}
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="font-mono text-[11px] dark:text-slate-400 text-slate-500 uppercase tracking-wider block">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md dark:bg-slate-950 bg-slate-100 border dark:border-cyan-500/20 border-slate-300 dark:text-cyan-300 text-sky-700 font-mono text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-1.5 font-sans text-xs dark:text-slate-400 text-slate-600 pt-1">
                {project.specs.slice(0, 3).map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">›</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t dark:border-slate-800 border-slate-200 flex flex-wrap gap-2.5 items-center justify-between">
              <button
                onClick={() => openModal(project)}
                onMouseEnter={() => sound.playHover()}
                className="cyber-button px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>INSPECT ARCHITECTURE &amp; SPECS</span>
              </button>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="p-2 rounded-lg dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-300 text-red-500 hover:border-red-500 transition-all"
                    title="Launch Live Web App"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="p-2 rounded-lg dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-300 text-emerald-500 hover:border-emerald-500 transition-all"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </section>
  );
};
