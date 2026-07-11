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

export default function SearchableMemorySection() {
  const { ref: sectionRef, inView: isAnimated } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes memoryFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mem-hidden { opacity: 0; transform: translateY(24px); }
        .mem-visible { animation: memoryFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <section 
        ref={sectionRef} 
        className="w-full bg-violet-50 dark:bg-slate-950 py-10 sm:py-16 md:py-20 overflow-hidden transition-colors duration-300"
      >
        <div 
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mem-hidden ${
            isAnimated ? "mem-visible" : ""
          }`}
        >
          {/* Left Text/Content Architecture Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tag Pill Subtitle */}
            <span className="text-blue-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3 block select-none">
              SEARCHABLE MEMORY
            </span>

            {/* Core Section Headline */}
            <h2 className="text-[clamp(24px,4vw,32px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-5">
              Find the context behind every<br className="hidden sm:inline" /> conversation.
            </h2>

            {/* Main Descriptive Context Block */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
              Search notes by topic, decision, person, meeting, mail thread, file,
              channel, owner, or date — with source-backed AI answers. Filters and
              permission scope respect role, tenant, and privacy boundaries server-side.
            </p>

            {/* Micro-interaction Navigation Anchor */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-indigo-400 text-sm font-bold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-indigo-300"
              >
                <span>Search across Sema</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Interface Media Mockup Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[530px] aspect-[530/334] lg:aspect-square bg-white dark:bg-slate-900 rounded-[20px] shadow-lg dark:shadow-[0px_30px_90px_-20px_rgba(0,0,0,0.4)] border border-slate-200/60 dark:border-slate-800/80 overflow-hidden group transition-colors duration-300">
              
              {/* Image component overlay wrapper scaled fluidly matching layout offsets */}
              <img
                src="/sema-notes/image 42.png"
                alt="Search interface memory tracking viewport demonstration"
                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.02] dark:opacity-90"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}