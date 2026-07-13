"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function AdminGovernanceSection() {
  const [sectionRef, isVisible] = useScrollReveal();

  const governanceItems = [
    {
      title: 'Identity & access',
      desc: 'Manage users, SSO/MFA where supported, session and device controls, guest access.',
      badge: 'Plan & role based',
      actionText: 'View Admin Console'
    },
    {
      title: 'Roles & permissions',
      desc: 'Assign least-privilege roles and review workspace access.',
      badge: 'Admin/owner',
      actionText: 'View Roles'
    },
    {
      title: 'Retention & exports',
      desc: 'Configure retention, export, and deletion policies where supported.',
      badge: 'Business / Enterprise',
      actionText: 'View Data Controls'
    },
    {
      title: 'AI governance',
      desc: 'Enable/disable AI features, sensitive-workspace rules, and summary sharing.',
      badge: 'Feature based',
      actionText: 'View Responsible AI'
    },
    {
      title: 'Audit & monitoring',
      desc: 'Review security events, admin actions, and policy events where supported.',
      badge: 'Advanced plans',
      actionText: 'View Audit Logs'
    },
    {
      title: 'Integrations',
      desc: 'Review connected apps, API/webhook access, credentials, and third-party permissions.',
      badge: 'Admin/owner',
      actionText: 'View Integrations'
    },
    {
      title: 'Concern response',
      desc: 'Route and resolve reported concerns with security/legal/support ownership.',
      badge: 'Internal triage',
      actionText: 'Report a concern'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Sticky Context Text & Image Block */}
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-12">
          
          {/* Header Description Stack */}
          <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-sans">
                Admin Governance
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight">
              Route admins to the controls that support trust.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
              Configure identity, roles, retention, AI governance, audit, and integrations from the Admin Console. Availability depends on plan and role.
            </p>

            <div className="pt-2">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 font-sans text-sm font-bold rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-600/20">
                View Admin Console
              </button>
            </div>
          </div>

          {/* Graphic Media Block */}
          <div className={`w-full aspect-[493/320] bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none z-10" />
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              src="/security-center/image 82.png" 
              alt="Admin configuration terminal dashboard view" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Control Item List Rows */}
        <div className={`lg:col-span-7 space-y-3 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {governanceItems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              {/* Left Segment: Labels */}
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-base font-bold font-sans tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Right Segment: Meta Badges & Actions */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 font-sans bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {item.badge}
                </span>
                
                <button className="px-4 py-2 bg-violet-600/30 group-hover:bg-violet-600 font-sans text-xs font-bold text-violet-300 group-hover:text-white rounded-full border border-violet-500/20 group-hover:border-transparent transition-all duration-200">
                  {item.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}