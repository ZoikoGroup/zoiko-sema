"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook to handle individual viewport entry animations for each distinct section
function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const policies = [
  { title: "Workspace policy", desc: "Administrators control domains, external sender rules, AI assistance, retention, and audit logs.", linkText: "Explore Admin Console" },
  { title: "External email awareness", desc: "Surface external sender warnings and policy notices without blocking normal work.", linkText: "Visit Trust Center" },
  { title: "AI governance", desc: "Drafting and summaries respect workspace settings and user review.", linkText: "Explore Sema AI" },
  { title: "Audit trail", desc: "Record policy-relevant events where required by workspace settings.", linkText: "Explore Admin Console" },
  { title: "Role-based access", desc: "Ensure only authorized users and admins can manage workspace mail controls.", linkText: "Contact Sales" }
];

export default function SecurityAndWorkspaceSuite() {
  const { ref: secRef1, inView: visible1 } = useInView(0.05);
  const { ref: secRef2, inView: visible2 } = useInView(0.05);
  const { ref: secRef3, inView: visible3 } = useInView(0.05);

  return (
    <div className="w-full bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* ----------------- SECTION 1: SECURITY AND GOVERNANCE ----------------- */}
      <section 
        ref={secRef1}
        className="w-full bg-violet-50 dark:bg-gray-950/40 py-16 sm:py-20 md:py-24 border-b border-slate-200/60 dark:border-gray-900 transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
          
          <div className={`max-w-3xl mb-12 md:mb-16 transform transition-all duration-700 ease-out ${visible1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans">SECURITY AND GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              Governed by workspace policy, not guesswork.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Admins stay in control of domains, retention, external mail, AI assistance, and audit — nothing about Sema Mail reads private mail without policy and review.
            </p>
          </div>

          <div 
            style={{ transitionDelay: "150ms" }}
            className={`bg-white dark:bg-gray-900 rounded-[20px] shadow-sm border border-slate-200 dark:border-gray-800 divide-y divide-slate-200 dark:divide-gray-800 p-4 sm:p-6 md:p-8 transform transition-all duration-700 ease-out ${visible1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {policies.map((item, idx) => (
              <div key={idx} className="py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 first:pt-2 last:pb-2 group transition-colors duration-200 hover:bg-slate-50/60 dark:hover:bg-gray-800/30 px-3 rounded-xl">
                <div className="lg:w-1/4">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold font-sans">{item.title}</h3>
                </div>
                <div className="lg:w-1/2">
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="lg:w-1/4 lg:text-right">
                  <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold group/link transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
                    <span>{item.linkText}</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1 font-bold">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 2: MOBILE AND DESKTOP ----------------- */}
 {/* ----------------- SECTION 2: MOBILE AND DESKTOP ----------------- */}
<section 
  ref={secRef2}
  className="w-full bg-white dark:bg-gray-950 py-16 sm:py-10 md:py-14 border-b border-slate-200/60 dark:border-gray-900 transition-colors duration-300 overflow-hidden"
>
  <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
    
    {/* Section Header */}
    <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transform transition-all duration-700 ease-out ${visible2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div className="inline-flex items-center gap-2 mb-3 justify-center">
        <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
        <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
          MOBILE AND DESKTOP
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-10 mb-4">
        Ready wherever work happens.
      </h2>
      <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-7">
        Full inbox and thread context on desktop; fast review, reply, approve, join, and search on <br className="hidden sm:inline" /> mobile. External recipients never see internal workspace context.
      </p>
    </div>

    {/* Layout Showcase Canvas Container */}
    {/* Responsive Behavior: Stacks clean on mobile, transforms into exact Figma pixel-perfect absolute layers on desktop */}
    <div className="relative flex flex-col md:block items-center gap-8 md:gap-0 max-w-[1084px] mx-auto min-h-[280px] md:h-[200px] mb-12">
      
      {/* 1. Desktop UI Frame Mockup */}
      <div 
        style={{ transitionDelay: "100ms" }}
        className={`w-full max-w-[460px] md:absolute md:left-0 md:top-0 bg-white dark:bg-gray-900 rounded-2xl h-56 p-4 pt-8 border border-slate-200 dark:border-gray-800 shadow-[0px_8px_24px_rgba(18,19,43,0.05),0px_1px_2px_rgba(18,19,43,0.04)] space-y-3 z-10 transform transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-xl ${visible2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        {/* Mock Window Top Bar */}
        <div className="w-full h-6 absolute top-0 left-0 bg-violet-50 dark:bg-gray-850 border-b border-slate-200 dark:border-gray-800 rounded-t-2xl flex items-center gap-1.5 px-3">
          <span className="size-2 bg-slate-200 dark:bg-gray-750 rounded-sm" />
          <span className="size-2 bg-slate-200 dark:bg-gray-750 rounded-sm" />
          <span className="size-2 bg-slate-200 dark:bg-gray-750 rounded-sm" />
        </div>

        {/* Acme Renewal Follow-up Row */}
        <div className="bg-violet-50 dark:bg-indigo-950/40 rounded-xl p-3 border border-blue-600 flex items-start gap-3 mt-2">
          <span className="size-2 mt-1.5 rounded-sm bg-green-700 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5">Acme renewal follow-up</h4>
            <p className="text-xs text-gray-400 dark:text-gray-400 leading-5">AI suggested reply · Calendar linked</p>
          </div>
        </div>

        {/* Board Prep Row */}
        <div className="rounded-xl p-3 border border-slate-200 dark:border-gray-800 flex items-start gap-3">
          <span className="size-2 mt-1.5 rounded-sm bg-indigo-600 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5">Board prep: Q3 agenda</h4>
            <p className="text-xs text-gray-400 dark:text-gray-400 leading-5">3 owners assigned</p>
          </div>
        </div>
      </div>

      <div 
        style={{ transitionDelay: "200ms" }}
        className={`w-full max-w-[200px] md:absolute md:left-[354px] md:top-[160px] bg-white dark:bg-gray-900 rounded-3xl h-32 p-3.5 border border-slate-200 dark:border-gray-800 shadow-[0px_8px_24px_rgba(18,19,43,0.05),0px_1px_2px_rgba(18,19,43,0.04)] flex flex-col justify-between z-30 transform transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-xl ${visible2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div>
          <div className="w-10 h-[5px] bg-slate-200 dark:bg-gray-700 rounded-sm mx-auto mb-2.5" />
          
          <div className="bg-violet-50 dark:bg-indigo-950/40 rounded-xl p-2.5 border border-blue-600 flex items-start gap-2">
            <span className="size-2 mt-1.5 rounded-sm bg-green-700 shrink-0" />
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5 truncate">Acme renewal</h4>
              <p className="text-[9.5px] text-gray-400 dark:text-gray-400 leading-4">Reply ready</p>
            </div>
          </div>
        </div>
        
        {/* Quick Action Interactive Buttons */}
        <div className="flex gap-2 items-center">
          <button className="flex-1 bg-blue-600 text-white text-[10px] font-semibold py-1.5 rounded-full hover:bg-blue-700 transition-colors leading-4">
            Approve
          </button>
          <button className="flex-1 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white text-[10px] font-semibold py-1.5 rounded-full hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors leading-4">
            Join
          </button>
        </div>
      </div>

      {/* 3. Hero Media Thumbnail Panel */}
      <div 
        style={{ transitionDelay: "300ms" }}
        className={`w-full max-w-[555px] md:absolute md:right-0 md:top-0 rounded-3xl h-72 overflow-hidden bg-stone-300 dark:bg-gray-800 z-0 transform transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-xl ${visible2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <img 
          className="w-[588px] max-w-none h-96 absolute -left-[33px] -top-[48px] object-cover select-none" 
          src="/sema-mail/image 52.png" 
          alt="Dynamic platform workspace image visualization layout" 
        />
      </div>

    </div>

    {/* Downloader Trigger Link */}\<div className="text-center ">
      <a href="#" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide leading-6 group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
        <span>Download apps</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
      </a>
    </div>
    

  </div>
</section>

      {/* ----------------- SECTION 3: ZOIKOTIME BRIDGE ----------------- */}
      <section 
        ref={secRef3}
        className="w-full bg-violet-50 dark:bg-gray-950/40 py-16 sm:py-20 md:py-24 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
          
          <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transform transition-all duration-700 ease-out ${visible3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 mb-3 justify-center select-none">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans">ZOIKOTIME BRIDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Connect approved mail context to verified work when policy allows.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              For organizations using ZoikoTime, Sema Mail can support approved work-context workflows without exposing private mail content to unauthorized users.
            </p>
          </div>

          {/* Integration Workflow Node Pipeline */}
          <div 
            style={{ transitionDelay: "150ms" }}
            className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 transform transition-all duration-700 ease-out ${visible3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-full max-w-[220px] bg-white dark:bg-gray-900 rounded-2xl p-5 border border-slate-200 dark:border-gray-800 shadow-sm text-center group transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Sema Mail</h4>
              <p className="text-xs text-gray-400 dark:text-gray-500">Thread & context</p>
            </div>

            <span className="text-gray-400 dark:text-gray-600 text-2xl rotate-90 md:rotate-0 font-light select-none">→</span>

            <div className="w-full max-w-[220px] bg-white dark:bg-gray-900 rounded-2xl p-5 border border-slate-200 dark:border-gray-800 shadow-sm text-center group transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Policy layer</h4>
              <p className="text-xs text-gray-400 dark:text-gray-500">Admin-controlled</p>
            </div>

            <span className="text-gray-400 dark:text-gray-600 text-2xl rotate-90 md:rotate-0 font-light select-none">→</span>

            <div className="w-full max-w-[220px] bg-white dark:bg-gray-900 rounded-2xl p-5 border border-slate-200 dark:border-gray-800 shadow-sm text-center group transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">ZoikoTime</h4>
              <p className="text-xs text-gray-400 dark:text-gray-500">Approved work context</p>
            </div>
          </div>

          <div 
            style={{ transitionDelay: "250ms" }}
            className={`w-full max-w-4xl mx-auto bg-violet-100/50 dark:bg-gray-900/40 rounded-2xl border border-violet-200/40 dark:border-gray-800 p-5 mb-12 text-center transform transition-all duration-700 ease-out ${visible3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              Mail-to-ZoikoTime signals must be permissioned, policy-governed, and configurable by authorized administrators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
              <span>Explore Sema + ZoikoTime</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
              <span>Request integration demo</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}