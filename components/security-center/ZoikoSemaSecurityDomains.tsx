"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER HOOK FOR FLOATING REVEAL EFFECTS ---
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
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaSecurityDomains() {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const securityDomains = [
    {
      code: 'AI',
      title: 'Account & identity',
      desc: 'Sign-in, account protection, SSO/MFA where supported, sessions, and admin-owned identity configuration.',
      action: 'Admin Console',
      image: '/security-center/image 90.png'
    },
    {
      code: 'MC',
      title: 'Messaging & channels',
      desc: 'Private and shared spaces, user roles, message access, and guest boundaries.',
      action: 'Channels & Spaces',
      image: '/security-center/image 91.png'
    },
    {
      code: 'VM',
      title: 'Video meetings',
      desc: 'Meeting access, participants, recordings, captions, host controls, and external guests.',
      action: 'Video Meetings',
      image: '/security-center/image 92.png'
    },
    {
      code: 'AS',
      title: 'AI summaries',
      desc: 'Human review, output handling, summary sharing, and sensitive-workspace controls.',
      action: 'Responsible AI',
      image: '/security-center/image 93.png'
    },
    {
      code: 'AC',
      title: 'Admin console',
      desc: 'Roles, policies, audit, retention, integrations, access review, and workspace configuration.',
      action: 'Admin Console',
      image: '/security-center/image 94.png'
    },
    {
      code: 'IN',
      title: 'Integrations & APIs',
      desc: 'Customer-directed integrations, OAuth/API credentials,and third-party terms.',
      action: 'Developer Docs ',
      image: '/security-center/image 95.png'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-950 transition-colors duration-300 border-b border-slate-100 dark:border-gray-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Text Stack Reveal */}
        <div className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-1000 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
              Product Security Domains
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
            Security across every part of the workspace.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Account, meetings, messaging, AI, channels, admin controls, integrations, and data governance — each with its own controls and admin pathway.
          </p>
        </div>

        {/* Responsive Domain Showcases Grid Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {securityDomains.map((domain, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col shadow-[0px_4px_20px_rgba(18,19,43,0.015)] hover:-translate-y-2 hover:shadow-2xl hover:border-violet-200 dark:hover:border-gray-700 transition-all duration-300"
            >
              {/* Media Segment Wrapper with Micro-Zoom Effect */}
              <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-gray-950 relative border-b border-slate-100 dark:border-gray-900">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={domain.image} 
                  alt={`${domain.title} dynamic ecosystem visual asset`}
                />
              </div>

              {/* Informational Text Content Segment */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  {/* Title Segment Row with Initialized Monogram badge */}
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center font-sans font-bold text-xs text-violet-600 dark:text-violet-400 shrink-0">
                      {domain.code}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                      {domain.title}
                    </h3>
                  </div>
                  
                  {/* Paragraph Description Copy */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-sans">
                    {domain.desc}
                  </p>
                </div>

                {/* Micro Action Interactive Dynamic Inline Trigger Link */}
                <div className="inline-flex items-center gap-1 text-xs font-bold font-sans text-violet-600 dark:text-violet-400 cursor-pointer group-hover:gap-2 transition-all duration-200">
                  <span>{domain.action}</span>
                  <span className="text-sm font-normal transform translate-y-[-0.5px]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}