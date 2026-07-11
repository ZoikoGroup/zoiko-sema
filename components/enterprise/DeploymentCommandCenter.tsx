'use client';

import React, { useEffect, useState, useRef } from 'react';

// Custom lightweight hook for triggering staggered entry animations on scroll
function useElementInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // Animate once
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function DeploymentCommandCenter() {
  const { ref: sectionRef, inView: sectionInView } = useElementInView(0.05);

  const metrics = [
    { value: "78%", label: "Deployment readiness", color: "text-violet-500" },
    { value: "4,120", label: "Users staged", color: "text-slate-900 dark:text-white" },
    { value: "3", label: "Open blockers", color: "text-amber-500" },
    { value: "Mar 14", label: "Target launch", color: "text-slate-900 dark:text-white" }
  ];

  const checklist = [
    { title: "Verify domains", status: "Done", badge: "bg-emerald-600", text: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" },
    { title: "Configure SSO", status: "Done", badge: "bg-emerald-600", text: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" },
    { title: "Enable MFA", status: "In progress", badge: "bg-violet-500", text: "text-violet-600 bg-violet-50 dark:bg-violet-950/30" },
    { title: "Import users", status: "In progress", badge: "bg-violet-500", text: "text-violet-600 bg-violet-50 dark:bg-violet-950/30" },
    { title: "Create workspaces", status: "Pending", badge: "bg-slate-200 dark:bg-slate-700", text: "text-slate-400 dark:text-slate-500" },
    { title: "Connect integrations", status: "Pending", badge: "bg-slate-200 dark:bg-slate-700", text: "text-slate-400 dark:text-slate-500" },
    { title: "Configure AI policy", status: "Needs review", badge: "bg-orange-400", text: "text-amber-600 bg-amber-50 dark:bg-amber-950/20" },
    { title: "Schedule training", status: "Pending", badge: "bg-slate-200 dark:bg-slate-700", text: "text-slate-400 dark:text-slate-500" },
  ];

  const risks = [
    { title: "Identity mapping gaps", desc: "Security owner · 12 users", indicator: "bg-amber-500 ring-amber-500/20" },
    { title: "Missing retention rules", desc: "Compliance owner", indicator: "bg-pink-600 ring-pink-600/20" },
    { title: "Unreviewed guest access", desc: "IT owner · 4 spaces", indicator: "bg-amber-500 ring-amber-500/20" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-slate-900 text-white py-12 lg:py-14 font-sans antialiased relative overflow-hidden"
    >
      {/* Background Ambient Glow Decals */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Header Block with Float Up entry */}
        <div 
          className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-blue-400 text-xs font-bold tracking-widest uppercase block drop-shadow-xs">
            DEPLOYMENT COMMAND CENTER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            See rollout readiness, risks, and owners in one place.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Track readiness, work the setup checklist, resolve blockers, and assign accountable owners across every deployment wave.
          </p>
        </div>

        {/* Dashboard Frame Container with Delayed Float Up & Scale Hover Lift */}
        <div 
          className={`bg-white dark:bg-slate-950 rounded-3xl text-slate-900 dark:text-slate-100 shadow-2xl border border-slate-800/10 dark:border-slate-800 overflow-hidden transition-all duration-700 delay-150 ease-out hover:shadow-blue-500/5 hover:border-slate-700/30 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          
          {/* Top Panel Metrics Matrix with Individual Interactive Scale States */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-100 dark:border-slate-800">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-8 border-r last:border-r-0 border-slate-100 dark:border-slate-800 flex flex-col justify-center transition-all duration-300 hover:bg-slate-50/60 dark:hover:bg-slate-900/40 group cursor-default"
              >
                <span className={`text-2xl sm:text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block ${m.color}`}>
                  {m.value}
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-xs mt-1 font-medium transition-colors group-hover:text-slate-600 dark:group-hover:text-slate-300">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Checklist Matrix Area */}
            <div className="p-6 sm:p-8 lg:col-span-7 lg:border-r border-slate-100 dark:border-slate-800 space-y-4">
              <span className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider block mb-4 uppercase">
                SETUP CHECKLIST
              </span>
              <div className="space-y-1 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {checklist.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-xl border-b border-slate-50/60 dark:border-slate-900/20 last:border-0 group transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  >
                    <div className="flex items-center gap-3">
                      {/* Checkbox Frame Scale Micro-Interaction */}
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] text-white shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.badge}`}>
                        {item.status === 'Done' && '✓'}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {item.title}
                      </span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-all duration-200 group-hover:scale-105 ${item.text}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Control Panel Row */}
            <div className="p-6 sm:p-8 lg:col-span-5 bg-slate-50/50 dark:bg-slate-900/20 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider block uppercase">
                  RISK PANEL
                </span>
                <div className="space-y-2">
                  {risks.map((risk, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 py-3 px-2 -mx-2 rounded-xl border-b border-slate-100 dark:border-slate-800/60 last:border-0 transition-all duration-200 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xs group"
                    >
                      {/* Alert Dot Pulsing Glow Anchor */}
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-all duration-200 group-hover:ring-4 ${risk.indicator}`} />
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {risk.title}
                        </h4>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{risk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Operations with Springy Hover Animations */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold tracking-tight shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0">
                  Start readiness check
                </button>
                <button className="px-5 py-2.5 bg-transparent text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold tracking-tight border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0">
                  Export plan
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Global Action Footers with Late Cascade Float Up Entry */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-300 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 font-bold rounded-full text-sm shadow-xl transition-all duration-200 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-white/5 active:translate-y-0">
            Request deployment plan
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-transparent text-white font-bold rounded-full text-sm border-b border-white/20 transition-all duration-200 hover:border-blue-400 hover:text-blue-400">
            Get a demo
          </button>
        </div>

      </div>
    </section>
  );
}