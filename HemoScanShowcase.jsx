import React, { useState } from 'react';
import { Heart, Activity, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

export const HemoScanShowcase = () => {
  const [simulating, setSimulating] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  const runSimulation = () => {
    sound.playTransmission();
    setSimulating(true);
    setScanResult(null);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimulating(false);
          setScanResult({
            hb: (13.8 + (Math.random() * 1.4 - 0.7)).toFixed(1),
            status: 'Optimal / Normal Range',
            risk: 'Low Anemia Risk',
            confidence: '98.6%',
            pulse: Math.floor(70 + Math.random() * 12)
          });
          sound.playConfirm();
          return 100;
        }
        return prev + 10;
      });
    }, 180);
  };

  return (
    <section id="hemoscan" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-red-400 tracking-widest uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>// FLAGSHIP MEDICAL AI INNOVATION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
          HemoScan — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Hemoglobin Screening</span>
        </h2>
        <p className="text-slate-300 font-sans text-base sm:text-lg">
          AI-powered non-invasive hemoglobin estimation and anemia risk detection using smartphone camera optics.
        </p>
      </div>

      {/* Main HemoScan Deep Feature Card */}
      <div className="cyber-panel bg-gradient-to-b from-slate-900/90 to-cyber-dark/95 border-2 border-red-500/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Project Overview & Specs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 font-semibold">
                ● PRODUCTION DEPLOYMENT
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                NON-INVASIVE AI
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                PWA / WEB MOBILE
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Next-Generation Smartphone Anemia Diagnostics
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              Traditional hemoglobin screening demands invasive venipunctures, clinical laboratory equipment, and needle pricks. <strong className="text-white">HemoScan</strong> replaces physical blood extraction with optical photoplethysmography (PPG) and spectral computer vision, enabling accessible, pain-free screening for anyone with a smartphone camera.
            </p>

            {/* 4 Architectural Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="font-mono text-xs text-red-400 font-bold block">01 // OPTICAL CAPTURE</span>
                <p className="text-xs text-slate-300">
                  Captures fingertip micro-vascular blood volume pulses using smartphone flashlight illumination.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="font-mono text-xs text-cyan-400 font-bold block">02 // SPECTRAL COLORIMETRY</span>
                <p className="text-xs text-slate-300">
                  Decomposes RGB wavelength absorption to isolate oxygenated vs. deoxygenated hemoglobin ratios.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="font-mono text-xs text-emerald-400 font-bold block">03 // AI ESTIMATION MODEL</span>
                <p className="text-xs text-slate-300">
                  Neural regression computes estimated Hb level in g/dL and stratifies clinical anemia risk.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="font-mono text-xs text-purple-400 font-bold block">04 // CLINIC GEOLOCATION</span>
                <p className="text-xs text-slate-300">
                  Integrated Leaflet GIS mapping immediately directs at-risk individuals to nearby healthcare centers.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://hemo-scan--srbilal12.replit.app/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playConfirm()}
                className="cyber-button px-7 py-3.5 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_45px_rgba(239,68,68,0.8)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>LAUNCH HEMOSCAN WEB APP ↗</span>
              </a>

              <a
                href="https://hemo-scan--srbilal12.replit.app/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="cyber-button px-6 py-3.5 bg-slate-900 border border-slate-700 text-slate-300 font-display font-semibold text-xs sm:text-sm tracking-wider hover:border-slate-500 hover:text-white transition-all flex items-center gap-2"
              >
                <span>REPLIT DEPLOYMENT // srbilal12</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Simulation HUD */}
          <div className="lg:col-span-5 bg-slate-950/90 border border-red-500/30 rounded-xl p-6 relative flex flex-col justify-between shadow-xl">
            <div className="border-b border-slate-800 pb-3 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                HEMOSCAN OPTICAL SCAN SIMULATOR
              </div>
              <span className="font-mono text-[10px] text-slate-500">OPTICAL SENSING</span>
            </div>

            <div className="space-y-4 py-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center relative overflow-hidden">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center text-red-400 mb-2">
                  <Activity className="w-8 h-8" />
                </div>
                <p className="text-sm font-display font-bold text-white">
                  {simulating ? 'Analyzing Optical Blood Flow...' : (scanResult ? 'Screening Completed' : 'Simulate Camera Optical Scan')}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {simulating ? `Processing Spectral Bands: ${scanProgress}%` : 'Experience HemoScan algorithm in real time'}
                </p>

                {simulating && (
                  <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-600 to-amber-400 transition-all duration-200"
                      style={{ width: `${scanProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {scanResult && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ESTIMATED HEMOGLOBIN:</span>
                    <span className="text-lg font-bold text-emerald-400">{scanResult.hb} g/dL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ANEMIA RISK STRATIFICATION:</span>
                    <span className="text-emerald-300 font-semibold">{scanResult.risk}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">MODEL CONFIDENCE:</span>
                    <span className="text-cyan-400">{scanResult.confidence}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">HEART RATE TELEMETRY:</span>
                    <span className="text-purple-400">{scanResult.pulse} BPM</span>
                  </div>
                </div>
              )}

              <button
                onClick={runSimulation}
                disabled={simulating}
                onMouseEnter={() => sound.playHover()}
                className="cyber-button w-full py-3 bg-red-600/20 border border-red-500/50 hover:bg-red-600 hover:text-white text-red-300 font-display font-bold text-xs uppercase tracking-wider transition-all"
              >
                {simulating ? 'SCREENING IN PROGRESS...' : (scanResult ? 'RUN SCAN AGAIN' : 'START SIMULATED SCAN')}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
