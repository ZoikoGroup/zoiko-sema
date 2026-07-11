'use client';

import React, { useEffect, useState, useRef } from 'react';

function useElementInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function EnterpriseDeploymentSection() {
  const { ref: sectionRef, inView: sectionInView } = useElementInView(0.05);
  const [activeSidebar, setActiveSidebar] = useState('Overview');

  const sidebarItems = [
    'Overview', 'Deployment', 'Identity', 'Security', 
    'Migration', 'Integrations', 'Adoption', 'Reports', 'Support'
  ];

  const metrics = [
    { value: '78%', label: 'Readiness', color: 'text-violet-600 dark:text-violet-400' },
    { value: '4,120', label: 'Users staged', color: 'text-slate-900 dark:text-slate-100' },
    { value: '3', label: 'Risks', color: 'text-yellow-600 dark:text-yellow-500' },
    { value: '6/8', label: 'Integrations', color: 'text-emerald-600 dark:text-emerald-400' },
    { value: 'Mar 14', label: 'Launch date', color: 'text-slate-900 dark:text-slate-100' },
    { value: 'Ready', label: 'Adoption', color: 'text-emerald-600 dark:text-emerald-400' },
  ];

  const phases = [
    { name: 'Discovery', status: 'Complete', dotColor: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Identity & domains', status: 'Complete', dotColor: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Security policy', status: 'In progress', dotColor: 'bg-violet-600', textColor: 'text-violet-600 dark:text-violet-400' },
    { name: 'Pilot rollout', status: 'Pending setup', dotColor: 'bg-slate-300 dark:bg-slate-600', textColor: 'text-slate-400 dark:text-slate-500' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-indigo-50 dark:bg-slate-950 py-16 lg:py-24 font-sans antialiased overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Side */}
        <div 
          className={`lg:col-span-5 space-y-6 text-left transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-xs">
            <span className="text-gray-600 dark:text-slate-400 text-xs font-bold tracking-wide uppercase">
              Enterprise Deployment
            </span>
          </div>

          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Deploy Zoiko Sema <br />
            across the <br />
            <span className="text-blue-600 dark:text-blue-400">enterprise with control</span>.
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Plan identity, security, workspaces, migrations, integrations, AI governance, adoption, and enterprise support from one structured deployment path.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-full shadow-[0px_10px_24px_-8px_rgba(52,87,232,0.5)] transition-all duration-200 transform active:scale-95">
              Get a demo
            </button>
            <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-bold text-sm rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200 transform active:scale-95">
              Talk to sales
            </button>
          </div>

          <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed pt-2">
            Built for IT, security, operations, compliance, and enterprise communication teams.
          </p>
        </div>

        {/* Right Preview Dashboard Side */}
        <div 
          className={`lg:col-span-7 w-full max-w-[642px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0px_40px_80px_-30px_rgba(20,22,60,0.18)] dark:shadow-[0px_40px_80px_-30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 delay-150 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
          }`}
        >
          {/* Dashboard Header Panel */}
          <div className="w-full h-12 border-b border-gray-100 dark:border-slate-800 px-4 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <span className="text-slate-900 dark:text-slate-100 text-xs font-bold">
              Deployment · Overview
            </span>
            <div className="bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full">
              <span className="text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-bold">
                On track
              </span>
            </div>
          </div>

          {/* Internal Layout Frame Wrapper */}
          <div className="flex min-h-[340px] relative">
            
            {/* Sidebar Columns Layer */}
            <aside className="w-28 sm:w-32 bg-[#4D4D8B] dark:bg-[#4D4D8B] border-r border-gray-100 dark:border-slate-800/60 flex flex-col py-2 flex-shrink-0">
              {sidebarItems.map((item) => {
                const isSelected = activeSidebar === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveSidebar(item)}
                    className={`w-full text-left px-4 py-2 text-[11px] font-semibold tracking-tight transition-all duration-150 relative ${
                      isSelected 
                        ? 'text-white bg-slate-600 dark:bg-slate-800' 
                        : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                    <span className={isSelected ? 'pl-2' : ''}>{item}</span>
                  </button>
                );
              })}
            </aside>

            {/* Main Application Matrix View Grid */}
            <main className="flex-1 p-4 sm:p-5 space-y-4 overflow-y-auto">
              
              {/* Top Stats Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-50 dark:bg-slate-950 p-3 rounded-xl border border-gray-100 dark:border-slate-800/80 hover:border-violet-200 dark:hover:border-slate-700 transition-all duration-200 group"
                  >
                    <div className={`text-sm sm:text-base font-bold ${metric.color} transition-transform duration-200 group-hover:scale-[1.03]`}>
                      {metric.value}
                    </div>
                    <div className="text-slate-400 text-[10px] font-medium mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deployment Project Track Phases Block */}
              <div className="border border-violet-100 dark:border-slate-800 rounded-xl p-4 space-y-3 bg-white dark:bg-slate-900">
                <div className="text-slate-400 text-[10px] font-bold tracking-wider uppercase mb-1">
                  Deployment Phases
                </div>
                
                <div className="space-y-2.5">
                  {phases.map((phase) => (
                    <div 
                      key={phase.name} 
                      className="flex items-center justify-between border-b border-slate-50 dark:border-slate-800/40 pb-2 last:border-0 last:pb-0 group/row"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-xs flex-shrink-0 ${phase.dotColor}`} />
                        <span className="text-slate-900 dark:text-slate-200 text-xs font-semibold group-hover/row:text-blue-600 dark:group-hover/row:text-blue-400 transition-colors duration-150">
                          {phase.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold ${phase.textColor}`}>
                        {phase.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </main>
          </div>
        </div>

      </div>
    </section>
  );
}