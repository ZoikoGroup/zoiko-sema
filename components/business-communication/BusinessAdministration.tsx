'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for independent node triggers ──
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
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface AdminFeature {
  title: string;
  status: 'Configured' | 'Needs review';
  description: string;
}

export default function BusinessAdministration() {
  const { ref: leftRef, inView: leftInView } = useElementInView(0.1);
  const { ref: rightRef, inView: rightInView } = useElementInView(0.1);

  const adminFeatures: AdminFeature[] = [
    {
      title: 'Access & roles',
      status: 'Configured',
      description: 'Role-based access with SSO and MFA support for controlled sign-in.',
    },
    {
      title: 'Audit logs',
      status: 'Configured',
      description: 'Track admin and policy changes with a searchable activity history.',
    },
    {
      title: 'AI policies',
      status: 'Needs review',
      description: 'Decide where AI recap and summary features are enabled by workspace.',
    },
    {
      title: 'Retention rules',
      status: 'Configured',
      description: 'Apply retention windows for messages, recaps, and files by policy.',
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 lg:py-14 antialiased overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Informative Content Block */}
        <div 
          ref={leftRef}
          className={`lg:col-span-5 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-slate-900 dark:text-white text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Business communication with<br className="hidden sm:inline" /> administration built in.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Manage users, groups, roles, workspace access, SSO, MFA, audit logs, retention, AI policies, and integrations from a central administration layer.
            </p>
          </div>

          {/* Call to Actions (Responsive Stack to Row) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="/get-a-demo">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-md shadow-blue-600/10 active:scale-95 transform hover:-translate-y-0.5">
              Get a demo
            </button></a>
            <a href="/contact">
            <button className="w-full sm:w-auto px-5 py-3 text-blue-600 dark:text-blue-400 font-bold text-sm bg-transparent border border-transparent hover:border-slate-200 dark:hover:border-slate-800 rounded-full transition-all duration-200 active:scale-95 transform">
              Talk to sales
            </button></a>
          </div>
        </div>

        {/* Right Feature Panel Grid Block */}
        <div 
          ref={rightRef}
          className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-750 ease-out ${
            rightInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'
          }`}
        >
          {adminFeatures.map((item, index) => {
            const isAlert = item.status === 'Needs review';
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-violet-100 dark:border-slate-800/80 shadow-sm transition-all duration-500 ease-out 
                  hover:-translate-y-1.5 hover:scale-[1.01] hover:border-violet-200 dark:hover:border-slate-700 hover:shadow-md cursor-default"
                style={{
                  transitionDelay: rightInView ? `${index * 0.05}s` : '0s',
                }}
              >
                {/* Header Information Wrap */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-slate-900 dark:text-white text-sm font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <span 
                    className={`text-[11px] font-bold tracking-wide transition-transform duration-300 group-hover:scale-105 ${
                      isAlert 
                        ? 'text-yellow-600 dark:text-amber-400' 
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Body Content Description */}
                <p className="text-gray-500 dark:text-slate-400 text-xs font-normal leading-relaxed transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}