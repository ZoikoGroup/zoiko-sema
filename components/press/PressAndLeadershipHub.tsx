"use client"
import React, { useEffect, useRef, useState } from "react";

// --- REUSABLE SCROLL REVEAL HOOK ---
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function PressAndLeadershipHub() {
  const [templateRef, templateVisible] = useScrollReveal();
  const [leadershipRef, leadershipVisible] = useScrollReveal();

  const profiles = [
    { title: "Product & AI governance", sub: "AI summaries, human review, admin control" },
    { title: "Security & trust", sub: "Secure communication, privacy, governance" },
    { title: "Enterprise & workplace", sub: "Remote work, enterprise collaboration" },
    { title: "Company & ecosystem", sub: "Zoiko Tech, product strategy" },
  ];

  const quotes = [
    {
      tag: "AI governance",
      text: '"AI should help teams follow through on decisions — reviewed by people and governed by policy, never hidden."',
    },
    {
      tag: "Secure communication",
      text: '"Communication carries a company\'s most important context. It deserves security and clear administrative control."',
    },
    {
      tag: "Enterprise collaboration",
      text: '"Teams shouldn\'t lose decisions between tools. One governed workspace keeps context connected to the work."',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: PRESS RELEASE TEMPLATE                                         */}
      {/* ========================================================================= */}
      <section
        ref={templateRef}
        className={`max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10 space-y-12 transform transition-all duration-1000 ease-out ${
          templateVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block font-sans">
            Press Release Template
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white">
            How a Zoiko Sema release reads
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            A consistent structure so communications, product, and legal can review without design rework. This is an illustrative template, not a published release.
          </p>
        </div>

        <div className="relative group rounded-2xl overflow-hidden shadow-md dark:shadow-black/40 border border-slate-200/60 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 p-2 sm:p-4">
          <img
            className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
            src="/press/Frame 217.png"
            alt="Zoiko Sema consistent press release structure wireframe baseline template layout"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: LEADERSHIP & SPOKESPEOPLE                                      */}
      {/* ========================================================================= */}
      <section
        ref={leadershipRef}
        className={`w-full bg-violet-50/50 dark:bg-gray-900/40 py-16 transition-colors duration-300 transform transition-all duration-1000 ease-out ${
          leadershipVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block font-sans">
              Leadership & Spokespeople
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white">
              Interviews & approved quotes
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-gray-800 bg-white dark:bg-gray-900 p-2">
            <img
              className="w-full h-auto object-cover rounded-xl"
              src="/press/ChatGPT Image Jul 11, 2026, 08_19_11 PM 1.png"
              alt="Zoiko Sema spokesperson panel interview session group imagery panel"
            />
          </div>

          {/* Dynamic Grid split for profiles and quotes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Profiles grid Matrix */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {profiles.map((profile, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-950 border border-slate-200/60 dark:border-gray-850 p-5 rounded-2xl flex flex-col items-center text-center space-y-3 shadow-[0px_2px_6px_rgba(16,22,60,0.01)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-800 group"
                >
                  <div className="size-12 bg-slate-50 dark:bg-gray-900 rounded-full flex justify-center items-center text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                    <img className="size-5"  src="/press/Frame (6).png" />
                      
                  </div>
                  <div className="space-y-1 font-sans">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {profile.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-normal max-w-[220px] mx-auto">
                      {profile.sub}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 bg-slate-50 dark:bg-gray-900 border border-slate-100 dark:border-gray-850 text-[9px] font-bold text-slate-400 dark:text-gray-500 rounded-full tracking-wide">
                    Profile on approval
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: Quotes Stream Library */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-950 border border-slate-200/60 dark:border-gray-850 p-6 sm:p-8 rounded-2xl shadow-[0px_2px_8px_rgba(16,22,60,0.015)] transition-all duration-300 hover:shadow-md">
              <h3 className="text-base font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-gray-900 pb-3">
                Approved quote library
              </h3>
              
              <div className="space-y-6">
                {quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="pl-4 border-l-[3px] border-slate-200 dark:border-gray-800 space-y-1.5 transition-colors hover:border-blue-500 dark:hover:border-blue-400 group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-sans block">
                      {quote.tag}
                    </span>
                    <p className="text-sm font-semibold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white leading-relaxed">
                      {quote.text}
                    </p>
                    <span className="text-[11px] text-slate-400 dark:text-gray-500 font-sans block">
                      Attributed on approval · Zoiko Sema spokesperson
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}