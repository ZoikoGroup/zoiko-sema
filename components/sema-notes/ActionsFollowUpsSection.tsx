"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const checkmarkPolicies = [
  "Human review before external sharing by default",
  "Workspace policy can restrict AI drafting, external sharing, or exports",
  "Every action shows what source note it came from",
];

export default function ActionsFollowUpsSection() {
  const [darkMode, setDarkMode] = useState(false);
  const { ref: sectionRef, inView: animated } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes followUpsFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .action-hidden { opacity: 0; transform: translateY(24px); }
        .action-visible { animation: followUpsFade 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Segment Dark/Light Theme Wrapper */}
      <div className={`${darkMode ? "dark" : ""}`}>
        
       
        {/* Core Layout Canvas Block */}
        <section 
          ref={sectionRef}
          className="w-full bg-white dark:bg-slate-950 py-16 sm:py-20 md:py-24 overflow-hidden transition-colors duration-300"
        >
          <div 
            className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center action-hidden ${
              animated ? "action-visible" : ""
            }`}
          >
            
            {/* Left Visual Interface Mock Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-[530px] aspect-[530/334] bg-slate-50 dark:bg-slate-900 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_20px_45px_-15px_rgba(18,19,43,0.12)] overflow-hidden group">
                <img
                  src="/sema-notes/Overlay+Shadow.png"
                  alt="Actions configuration interface viewport preview"
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Information Architecture Column */}
            <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
              
              {/* Category Anchor Tag Header */}
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 block select-none">
                ACTIONS AND FOLLOW-UPS
              </span>

              {/* Header Title Narrative Payload */}
              <h2 className="text-[clamp(24px,4vw,30px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-5">
                Turn notes into work, not just<br className="hidden sm:inline" /> documentation.
              </h2>

              {/* System Utility Definition Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
                Convert a note into a follow-up draft, assign an owner and due date,
                create a reminder or calendar item, and share it with a channel or mail
                recipient — always with a preserved link to the original source note.
              </p>

              {/* Policy Rules Checklist Matrix Layout */}
              <div className="space-y-3.5 mb-8">
                {checkmarkPolicies.map((policy, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-700 dark:text-green-400 text-sm font-extrabold select-none mt-0.5">
                      ✓
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-normal font-sans leading-tight">
                      {policy}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dynamic Micro-interaction Forward Anchors Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <span>Turn notes into follow-ups</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

            </div>

          </div>
        </section>
      </div>
    </>
  );
}