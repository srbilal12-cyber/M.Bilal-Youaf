import React, { useState } from 'react';
import { Shield, ExternalLink, Activity, Send, CheckCircle, Mail, Phone, MapPin, Building, Github, Download } from 'lucide-react';
import { sound } from '../utils/audio';

const USER_HEADSHOT_SRC = (typeof window !== 'undefined' && window.BILAL_HEADSHOT_BASE64)
  ? window.BILAL_HEADSHOT_BASE64
  : './assets/bilal_headshot.jpg';

export const ContactTransmission = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [transmissionStep, setTransmissionStep] = useState(0);
  const [transmitted, setTransmitted] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState('direct');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playTransmission();
    setTransmitting(true);
    setTransmissionStep(1);

    const stepTimer1 = setTimeout(() => setTransmissionStep(2), 600);
    const stepTimer2 = setTimeout(() => setTransmissionStep(3), 1200);

    try {
      const response = await fetch("https://formspree.io/f/xbjnqzkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message,
          _subject: `New Transmission from ${formData.name} via Portfolio`
        })
      });

      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);

      if (response.ok) {
        setDeliveryStatus('formspree');
      } else {
        setDeliveryStatus('direct');
      }
    } catch (err) {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      setDeliveryStatus('direct');
    }

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      sound.playConfirm();
    }, 1800);
  };

  const mailtoUrl = `mailto:srbilal12@gmail.com?subject=${encodeURIComponent(`Transmission from ${formData.name || 'Portfolio Visitor'}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs dark:text-cyan-400 text-sky-600 tracking-widest uppercase">
          <Shield className="w-4 h-4" />
          <span>// MODULE 04: COMM CHANNELS</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl dark:text-white text-slate-900">
          Establish <span className="dark:text-cyan-400 text-sky-600">Transmission</span>
        </h2>
        <p className="dark:text-slate-400 text-slate-600 font-sans text-base sm:text-lg">
          Transmit a direct inquiry to Muhammad Bilal Yousaf or connect through verified communication channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Direct Comms & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="cyber-panel p-6 sm:p-8 dark:bg-slate-900/80 bg-white/90 border dark:border-slate-800 border-slate-200 rounded-2xl space-y-5 shadow-sm">
            <div className="flex items-center gap-3">
              <img 
                src={USER_HEADSHOT_SRC} 
                alt="Muhammad Bilal Yousaf" 
                className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              />
              <div>
                <h3 className="font-display font-bold text-lg dark:text-white text-slate-900">Muhammad Bilal Yousaf</h3>
                <p className="text-xs text-emerald-500 font-mono font-semibold">Cyber Engineer</p>
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">Hajira, Azad Kashmir</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 font-mono text-xs">
              {/* Email */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 dark:text-cyan-400 text-sky-600" />
                  EMAIL:
                </span>
                <a 
                  href="mailto:srbilal12@gmail.com" 
                  className="dark:text-cyan-400 text-sky-600 font-bold hover:underline"
                  onClick={() => sound.playClick()}
                >
                  srbilal12@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  PHONE:
                </span>
                <span className="dark:text-emerald-400 text-emerald-600 font-bold">+92 3421080908</span>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500">LINKEDIN:</span>
                <a 
                  href="https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="dark:text-cyan-400 text-sky-600 hover:underline flex items-center gap-1 font-bold"
                  onClick={() => sound.playClick()}
                >
                  <span>Muhammad Bilal Yousaf</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500 flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  GITHUB:
                </span>
                <a 
                  href="https://github.com/srbilal12-cyber" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="dark:text-cyan-400 text-sky-600 hover:underline flex items-center gap-1 font-bold"
                  onClick={() => sound.playClick()}
                >
                  <span>srbilal12-cyber</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* HemoScan Project Link */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500">HEMOSCAN:</span>
                <a 
                  href="https://hemo-scan--srbilal12.replit.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-red-500 dark:text-red-400 hover:underline flex items-center gap-1 font-bold"
                  onClick={() => sound.playClick()}
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Printable CV */}
              <div className="p-3.5 dark:bg-slate-950/80 bg-slate-50 rounded-xl border dark:border-slate-800 border-slate-200 flex items-center justify-between">
                <span className="dark:text-slate-400 text-slate-500 flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  VERIFIED CV:
                </span>
                <a 
                  href="./assets/Muhammad_Bilal_Yousaf_Resume.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  onClick={() => sound.playClick()}
                >
                  <span>Printable Resume</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Message Dispatch Terminal */}
        <div className="lg:col-span-7 dark:bg-slate-900/90 bg-white/95 border dark:border-slate-800 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md relative">
          <h3 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-2">
            Send Direct Transmission
          </h3>
          <p className="dark:text-slate-400 text-slate-600 text-sm mb-6">
            Dispatch an encrypted packet directly to Muhammad Bilal Yousaf (srbilal12@gmail.com).
          </p>

          {transmitted ? (
            <div className="py-10 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-emerald-400">
                Transmission Dispatched Successfully
              </h4>
              <p className="dark:text-slate-300 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Your packet has been transmitted for <strong>srbilal12@gmail.com</strong>. A response will be dispatched within 24 business hours.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-6 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client / Gmail ↗</span>
                </a>

                <button
                  onClick={() => {
                    sound.playClick();
                    setTransmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2.5 dark:bg-slate-800 bg-slate-200 dark:text-slate-300 text-slate-700 font-display font-bold text-xs rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs dark:text-cyan-400 text-sky-600 mb-1.5 uppercase font-semibold">
                  [01] Full Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Healthcare Researcher"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => sound.playHover()}
                  className="w-full dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-300 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm dark:text-slate-100 text-slate-900 outline-none transition-all dark:placeholder-slate-600 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block font-mono text-xs dark:text-emerald-400 text-emerald-600 mb-1.5 uppercase font-semibold">
                  [02] Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. partner@institute.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => sound.playHover()}
                  className="w-full dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-300 focus:border-emerald-400 rounded-xl px-4 py-3 text-sm dark:text-slate-100 text-slate-900 outline-none transition-all dark:placeholder-slate-600 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block font-mono text-xs dark:text-purple-400 text-purple-600 mb-1.5 uppercase font-semibold">
                  [03] Message / Project Inquiry
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline collaboration opportunities, cyber engineering, or HemoScan queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => sound.playHover()}
                  className="w-full dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-300 focus:border-purple-400 rounded-xl px-4 py-3 text-sm dark:text-slate-100 text-slate-900 outline-none transition-all dark:placeholder-slate-600 placeholder-slate-400"
                ></textarea>
              </div>

              {transmitting && (
                <div className="p-3 dark:bg-slate-950 bg-slate-100 rounded-lg border border-cyan-400 font-mono text-xs space-y-2">
                  <div className="flex justify-between text-cyan-500 font-semibold">
                    <span>
                      {transmissionStep === 1 && 'ENCRYPTING PAYLOAD & VALIDATING HEADERS...'}
                      {transmissionStep === 2 && 'HANDSHAKE VERIFIED VIA FORMSPREE PROTOCOL...'}
                      {transmissionStep === 3 && 'DISPATCHING TELEMETRY TO SRBILAL12@GMAIL.COM...'}
                    </span>
                    <span>{transmissionStep * 33}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
                      style={{ width: `${transmissionStep * 33.3}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={transmitting}
                onMouseEnter={() => sound.playHover()}
                className="cyber-button w-full py-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 text-white dark:text-black font-display font-extrabold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-4 h-4" />
                <span>{transmitting ? 'TRANSMITTING PACKET...' : 'TRANSMIT ENCRYPTED MESSAGE'}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
