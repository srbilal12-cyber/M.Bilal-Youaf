import React from 'react';
import { Cpu } from 'lucide-react';
import { sound } from '../utils/audio';

export const SkillsGrid = () => {
  const skills = [
    {
      category: 'Cybersecurity & Threat Defense',
      items: [
        { name: 'Network Defense & Protocol Hardening', level: 94, desc: 'Traffic telemetry, threat mapping, boundary security' },
        { name: 'Applied Cryptography & Secure Enclaves', level: 90, desc: 'Symmetric/asymmetric algorithms, token exchange, PKI' },
        { name: 'Vulnerability Analysis & Ethical Auditing', level: 91, desc: 'Defensive penetration analysis, endpoint protection, Linux systems' }
      ]
    },
    {
      category: 'Artificial Intelligence & Vision',
      items: [
        { name: 'Computer Vision & Optical PPG', level: 96, desc: 'Signal processing, micro-vascular colorimetry, non-invasive sensing' },
        { name: 'Python & Machine Learning Pipelines', level: 93, desc: 'TensorFlow, Scikit-Learn, NumPy, predictive regression' },
        { name: 'Spectral Image Analysis', level: 89, desc: 'Multi-channel decomposition, noise filtering, optical calibration' }
      ]
    },
    {
      category: 'Microsoft Office & Analytics Suite',
      items: [
        { name: 'Microsoft Excel (Advanced Data Modeling)', level: 96, desc: 'Advanced formulas (XLOOKUP, INDEX/MATCH), Pivot Tables, multi-criteria data modeling & automated reporting' },
        { name: 'Microsoft Word (Technical Documentation)', level: 94, desc: 'Executive reporting, research publications, corporate proposals, technical indexing & professional typography' },
        { name: 'Microsoft PowerPoint (Executive Presentations)', level: 92, desc: 'High-impact technical decks, medical & AI visual storytelling, stakeholder briefings & pitch decks' },
        { name: 'Microsoft 365 & Power BI Analytics', level: 88, desc: 'Interactive business intelligence dashboards, cloud workspace integration & collaborative data reporting' }
      ]
    },
    {
      category: 'Software Engineering & Cloud',
      items: [
        { name: 'React.js & Progressive Web Apps', level: 95, desc: 'Component architectures, mobile PWA manifests, modern reactive state flows' },
        { name: 'Modern Web APIs & Mobile Systems', level: 92, desc: 'Camera MediaDevices API, Geolocation, Responsive Tailwind UI systems' },
        { name: 'Git & Deployment Workflows', level: 93, desc: 'Version control, deployment pipelines, Replit, CI/CD automated deployment' }
      ]
    }
  ];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs dark:text-emerald-400 text-emerald-600 tracking-widest uppercase">
          <Cpu className="w-4 h-4" />
          <span>// MODULE 03: VERIFIED COMPETENCIES</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl dark:text-white text-slate-900">
          Technical <span className="dark:text-emerald-400 text-emerald-600">Proficiencies</span>
        </h2>
        <p className="dark:text-slate-400 text-slate-600 font-sans text-base sm:text-lg">
          Verified specializations across Cyber Engineering, Artificial Intelligence, Microsoft Office Suite, and Scalable Software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div 
            key={idx}
            onMouseEnter={() => sound.playHover()}
            className="cyber-panel p-6 sm:p-8 dark:bg-slate-900/80 bg-white/90 border dark:border-slate-800 border-slate-200 rounded-2xl space-y-6 hover:border-slate-400 dark:hover:border-slate-700 transition-all shadow-sm"
          >
            <h3 className="font-display font-bold text-xl dark:text-white text-slate-900 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {group.category}
            </h3>

            <div className="space-y-5">
              {group.items.map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold dark:text-slate-200 text-slate-800">{item.name}</span>
                    <span className="font-mono text-xs dark:text-cyan-400 text-sky-600 font-bold">{item.level}%</span>
                  </div>
                  <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed">{item.desc}</p>
                  <div className="w-full h-1.5 dark:bg-slate-950 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
