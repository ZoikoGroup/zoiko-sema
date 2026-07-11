'use client';

import React, { useEffect, useState, useRef } from 'react';

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

export default function EnterpriseIntegrationsSection() {
  const { ref: viewRef, inView: sectionInView } = useElementInView(0.05);

  const integrationPlatforms = [
    "Microsoft Entra", "Okta", "Google Workspace", 
    "Microsoft 365", "Salesforce", "ServiceNow", "ZoikoTime"
  ];

  const capabilityTags = [
    "SSO", "SCIM", "MFA", "Audit logs", "Retention", "Legal hold", "AI policy"
  ];

  const features = [
    {
      icon: "◈",
      iconColor: "text-violet-600 dark:text-violet-400",
      title: "Reduce rollout risk",
      description: "Give teams a clear deployment path for users, workspaces, identity, policies, integrations, and support."
    },
    {
      icon: "🛡",
      iconColor: "text-sky-700 dark:text-sky-400",
      title: "Prove enterprise readiness",
      description: "Show IT and security buyers that governance, auditability, and policy controls are ready before launch."
    },
    {
      icon: "↗",
      iconColor: "text-green-600 dark:text-green-400",
      title: "Accelerate adoption",
      description: "Help departments onboard with templates, training paths, launch dashboards, and post-launch health reporting."
    }
  ];

  return (
    <section 
      ref={viewRef}
      className="w-full bg-indigo-50/60 dark:bg-slate-950 py-20 lg:py-24 transition-colors duration-300 font-sans antialiased overflow-hidden"
    >
      <div className="max-w-[1248px] mx-auto px-6 space-y-20">
        
        {/* UPPER BLOCK: SYSTEMS INTEGRATIONS & GOVERNANCE TAGS */}
        <div 
          className={`space-y-8 text-center max-w-5xl mx-auto transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider max-w-2xl mx-auto leading-relaxed">
            Works with the identity, calendar, storage, and workflow systems you already run
          </p>

          {/* Integration Platforms Grid Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-6xl mx-auto">
            {integrationPlatforms.map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 bg-white dark:bg-slate-900 rounded-xl border border-violet-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm font-bold tracking-tight shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-violet-200 dark:hover:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200 cursor-default select-none"
              >
                {name}
              </div>
            ))}
          </div>

          {/* Compliance & Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {capabilityTags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 bg-violet-100/80 dark:bg-violet-950/40 text-indigo-800 dark:text-violet-300 text-xs font-bold rounded-full border border-violet-200/30 transition-all duration-200 hover:bg-violet-200 dark:hover:bg-violet-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* LOWER BLOCK: VALUE PROPOSITION CARD GRID */}
        <div className="space-y-12">
          
          {/* Main Proposition Titles */}
          <div 
            className={`text-center space-y-3 max-w-2xl mx-auto transition-all duration-700 delay-150 ease-out ${
              sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase block">
              WHY ENTERPRISE DEPLOYMENT
            </span>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              One deployment path — every team,<br className="hidden sm:inline" /> governed and measurable.
            </h2>
          </div>

          {/* Proposition Feature Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {features.map((feat, idx) => (
              <div
                key={feat.title}
                className={`bg-indigo-50/40 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 flex flex-col items-start text-left justify-start transition-all duration-500 ease-out hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 hover:shadow-xl hover:border-violet-200 dark:hover:border-slate-700 group`}
                style={{ 
                  transitionDelay: sectionInView ? `${idx * 100}ms` : '0ms',
                  transform: sectionInView ? 'none' : 'translateY(40px)',
                  opacity: sectionInView ? 1 : 0
                }}
              >
                {/* Icon Wrapper Frame */}
                <div className="w-11 h-11 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className={`text-xl font-bold leading-none ${feat.iconColor}`}>
                    {feat.icon}
                  </span>
                </div>

                {/* Proposition Header Content */}
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight mt-6 mb-3 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {feat.title}
                </h3>

                {/* Proposition Description Statement */}
                <p className="text-gray-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}