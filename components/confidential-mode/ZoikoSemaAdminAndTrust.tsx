"use client"
import { useRouter } from 'next/navigation';
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
        rootMargin: '0px 0px -4px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaAdminAndTrust() {
  const [adminRef, adminVisible] = useScrollReveal();
  const [trustRef, trustVisible] = useScrollReveal();
  const router = useRouter();

  const policyRows = [
    {
      title: 'Availability rules',
      desc: 'Allow or require Confidential Mode for selected meeting types or workspaces.',
      actionText: 'Explore Admin Console',
      link:"/admin-console"
    },
    {
      title: 'Feature restrictions',
      desc: 'Disable AI summaries, live transcription, recording, and content indexing while active.',
      actionText: 'Request security review',
      link:"/security-review"
    },
    {
      title: 'Guest rules',
      desc: 'Apply guest rules and waiting room requirements.',
      actionText: 'Explore Admin Console',
      link:"/admin-console"
    },
    {
      title: 'Audit-safe events',
      desc: 'Record policy events without storing protected conversation content.',
      actionText: 'View Trust Center',
      link:"/trust-center"
    },
    {
      title: 'Role-based access',
      desc: 'Role-based access and settings history for administrators.',
      actionText: 'Request security review',
      link:"/security-review"
    }
  ];

  const trustCards = [
    { title: 'Content', desc: 'Protected content is end-to-end encrypted in Confidential Mode.' },
    { title: 'AI processing', desc: 'AI features do not process protected content while active.' },
    { title: 'Recording/transcript', desc: 'Unavailable in Confidential Mode.' },
    { title: 'Metadata', desc: 'May exist where required for security, routing, billing, or audit-safe events.' },
    { title: 'Admin policy', desc: 'Authorized admins configure access, availability, and retention.' }
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 selection:bg-blue-500/20">

      {/* ========================================== */}
      {/* SECTION 1: ADMIN AND POLICY CONTROLS      */}
      {/* ========================================== */}
      <section 
        ref={adminRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 border-b border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          
          {/* Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 transform ${adminVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
                Admin and Policy Controls
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
              Govern confidential communication at the workspace level.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Authorized admins can define when Confidential Mode is available, required, or restricted by workspace policy.
            </p>
          </div>

          {/* Hero Admin Panel Graphic */}
          <div className={`w-full aspect-[1136/384] bg-slate-50 dark:bg-gray-900 rounded-2xl border border-slate-200/60 dark:border-gray-850 overflow-hidden shadow-sm transition-all duration-1000 delay-150 transform ${adminVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} group`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              src="/confidentail/image 78.png" 
              alt="Workspace authorization management parameters grid interface panel" 
            />
          </div>

          {/* Line-Item Governance Structure Matrix */}
          <div className={`bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 rounded-2xl shadow-[0px_8px_24px_rgba(18,19,43,0.03)] divide-y divide-slate-100 dark:divide-gray-800 transition-all duration-1000 delay-300 transform ${adminVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {policyRows.map((row, idx) => (
              <div 
                key={idx}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-gray-850/40 transition-colors duration-250 group"
              >
                <div className="md:w-1/4">
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {row.title}
                  </span>
                </div>
                <div className="flex-1 md:px-4">
                  <p className="text-sm text-slate-600 dark:text-gray-400 font-sans leading-relaxed">
                    {row.desc}
                  </p>
                </div>
                <div className="md:w-1/4 flex md:justify-end">
                  <div onClick={()=>router.push(row.link)} className="flex cursor-pointer items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
                    <span>{row.actionText}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: TRUST MODEL                     */}
      {/* ========================================== */}
      <section 
        ref={trustRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-violet-50/40 dark:bg-gray-900/20"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 transform ${trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
                Trust Model
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
              Content, metadata, policy, and audit kept separate on purpose.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
              Separating these boundaries avoids privacy confusion and reduces legal risk.
            </p>
          </div>

          {/* Core Trust Model Workspace Preview Image */}
          <div className={`w-full aspect-[1136/384] bg-slate-100 dark:bg-gray-900 rounded-2xl border border-slate-200/50 dark:border-gray-800/80 overflow-hidden shadow-sm transition-all duration-1000 delay-150 transform ${trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} group`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              src="/confidentail/image 71.png" 
              alt="Architecture view parsing separate spaces for system metadata and dynamic communication logs" 
            />
          </div>

          {/* Matrix Card Row Blocks */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-1000 delay-300 transform ${trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {trustCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-gray-800/80 p-5 rounded-2xl shadow-[0px_4px_16px_rgba(18,19,43,0.015)] flex flex-col justify-start space-y-3 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-700 transition-all duration-300 group"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}