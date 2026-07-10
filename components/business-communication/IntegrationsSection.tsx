'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for decoupled scroll animations ──
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
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface IntegrationItem {
  initials: string;
  name: string;
  status: 'Connected' | 'Available' | 'Requires setup' | 'Enterprise only';
}

export default function IntegrationsSection() {
  const { ref: headerRef, inView: headerInView } = useElementInView(0.1);
  const { ref: gridRef, inView: gridInView } = useElementInView(0.05);
  const { ref: footerRef, inView: footerInView } = useElementInView(0.05);

  const integrations: IntegrationItem[] = [
    { initials: 'GC', name: 'Google Calendar', status: 'Connected' },
    { initials: 'M365', name: 'Microsoft 365', status: 'Connected' },
    { initials: 'GD', name: 'Google Drive', status: 'Available' },
    { initials: 'SF', name: 'Salesforce', status: 'Requires setup' },
    { initials: 'SL', name: 'Slack import', status: 'Available' },
    { initials: 'ZT', name: 'ZoikoTime', status: 'Enterprise only' },
    { initials: 'OK', name: 'Okta SSO', status: 'Enterprise only' },
    { initials: 'API', name: 'Webhooks & API', status: 'Available' },
  ];

  // Helper mapping to clean text color values based on state conditions
  const getStatusStyles = (status: IntegrationItem['status']) => {
    switch (status) {
      case 'Connected':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'Available':
        return 'text-violet-600 dark:text-violet-400';
      case 'Requires setup':
        return 'text-yellow-600 dark:text-amber-400';
      case 'Enterprise only':
        return 'text-slate-400 dark:text-slate-500';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-20 lg:py-28 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 flex flex-col items-center">
        
        {/* Section Header Wrapper */}
        <div 
          ref={headerRef}
          className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase block">
            INTEGRATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Connect communication to the tools<br className="hidden sm:inline" /> your teams already use.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Bring calendars, identity, storage, workflow systems, APIs, webhooks, and Zoiko ecosystem services into a controlled communication layer.
          </p>
        </div>

        {/* Integrations Layout Grid */}
        <div 
          ref={gridRef}
          className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 transition-all duration-750 ease-out ${
            gridInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.99]'
          }`}
        >
          {integrations.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-violet-100/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between min-h-[128px] transition-all duration-500 ease-out 
                hover:-translate-y-1.5 hover:scale-[1.02] hover:border-violet-200 dark:hover:border-slate-700 hover:shadow-md cursor-default"
              style={{
                transitionDelay: gridInView ? `${index * 0.04}s` : '0s',
              }}
            >
              {/* Initials Badge Logo */}
              <div className="size-8 bg-violet-50 dark:bg-violet-950/40 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/60 shadow-sm">
                <span className="text-violet-600 dark:text-violet-400 text-xs font-bold font-serif tracking-tight">
                  {item.initials}
                </span>
              </div>

              {/* Text Fields */}
              <div className="mt-4 space-y-0.5">
                <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold tracking-tight transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.name}
                </h3>
                <p className={`text-xs font-bold transition-all duration-300 ${getStatusStyles(item.status)}`}>
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Responsive Action Trigger Bar */}
        <div 
          ref={footerRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-14 w-full sm:w-auto transition-all duration-700 ease-out ${
            footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-md shadow-blue-600/10 active:scale-95 transform hover:-translate-y-0.5">
            View integrations
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-blue-600 dark:text-blue-400 font-bold text-sm bg-transparent border border-transparent hover:border-slate-200 dark:hover:border-slate-800 rounded-full transition-all duration-200 active:scale-95 transform whitespace-nowrap">
            Talk to sales for enterprise setup
          </button>
        </div>

      </div>
    </section>
  );
}