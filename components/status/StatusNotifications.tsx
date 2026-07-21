"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

const COMPONENTS = [
  { id: 'msg', name: 'Messaging', active: true },
  { id: 'audio', name: 'Audio Calls', active: false },
  { id: 'video', name: 'Video Meetings', active: true },
  { id: 'ai', name: 'AI Meeting Summaries', active: false },
  { id: 'channels', name: 'Channels & Spaces', active: false },
  { id: 'admin', name: 'Admin Console', active: false },
  { id: 'auth', name: 'Authentication', active: false },
];

export default function StatusNotifications() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setRevealed(true), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="subscribe" ref={sectionRef} className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className={`text-center space-y-3 mb-16 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-wider block">Status Notifications</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">Stay informed when things change</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">Choose how you receive incident, maintenance, and resolved-status updates.</p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Feature Graphic Card */}
          <div className={`relative rounded-2xl border border-slate-800 bg-slate-800/50 min-h-[350px] overflow-hidden group transition-all duration-1000 delay-100 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <img 
              src="/status/image 147.png" 
              alt="Dashboard Preview" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Form Container Card */}
          <div className={`p-6 sm:p-8 bg-white/5 border border-slate-800 rounded-2xl flex flex-col justify-between transition-all duration-1000 delay-200 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold">Subscribe by email</h3>
              
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-slate-400 text-xs font-bold uppercase tracking-tight block">Email address</label>
                <input 
                  type="email" 
                  placeholder="you@yourcompany.com" 
                  className="w-full h-12 px-4 rounded-xl bg-slate-900 border border-slate-800 text-sm focus:outline-none focus:border-violet-500 transition-colors placeholder:text-white/30"
                />
              </div>

              {/* Component Badge Selector */}
              <div className="space-y-3">
                <label className="text-slate-400 text-xs font-bold uppercase tracking-tight block">Subscribe to components</label>
                <div className="flex flex-wrap gap-2">
                  {COMPONENTS.map((item) => (
                    <button
                      key={item.id}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 hover:scale-105 ${
                        item.active 
                          ? 'bg-blue-600 border-blue-600 text-white' 
                          : 'bg-white border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkbox Segment */}
              <div className="space-y-3 pt-2">
                {['Incident updates', 'Maintenance updates', 'Resolved updates'].map((label, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      defaultChecked={idx !== 2} 
                      className="accent-blue-600 w-4 h-4 rounded border-slate-700 bg-slate-900"
                    />
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Form Footer Action */}
            <div className="pt-8 space-y-3">
              <button className="w-full h-12 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20">
                Subscribe to updates
              </button>
              <p className="text-center text-slate-400 text-xs flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Every notification includes an unsubscribe link. No spam.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}