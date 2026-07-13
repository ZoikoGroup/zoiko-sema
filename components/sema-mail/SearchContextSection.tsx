"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook to trigger an entry float-up animation when scrolled into view
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

const searchResults = [
  {
    type: "Mail",
    badgeBg: "bg-violet-200 text-indigo-700",
    boldText: "Acme renewal follow-up",
    normalText: " — thread with Maya Chen, 3 messages",
  },
  {
    type: "Meeting",
    badgeBg: "bg-green-100 text-green-700",
    boldText: "Renewal review",
    normalText: " — July 8, summary and decisions logged",
  },
  {
    type: "File",
    badgeBg: "bg-orange-100 text-amber-800",
    boldText: "Commercial-terms-v3.pdf",
    normalText: " — attached to thread and meeting",
  },
  {
    type: "Decision",
    badgeBg: "bg-rose-100 text-red-700",
    boldText: "Renewal approved",
    normalText: " — owner: Maya Chen, due Friday",
  },
];

export default function SearchContextSection() {
  const { ref: sectionRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes contextRevealUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .ctx-hidden { 
          opacity: 0; 
          transform: translateY(40px); 
        }
        .ctx-animated { 
          animation: contextRevealUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="w-full bg-white dark:bg-gray-950 py-16 sm:py-20 md:py-24 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
          
          {/* Section Heading Frame */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 justify-center select-none">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans">
                SEARCH AND CONTEXT
              </span>
            </div>
            
            <h2 className="text-[clamp(24px,4vw,32px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              Find the thread, the meeting, the file, and the decision.
            </h2>
            
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Sema search shows mail as part of the work graph, not as a separate archive — spanning mail, messages, meetings, calendar events, files, notes, decisions, owners, and follow-ups.
            </p>
          </div>

          {/* Interactive Workspace Stream Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Left Simulated Search Terminal Node Panel */}
            <div 
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              className={`lg:col-span-7 bg-slate-900 dark:bg-gray-900 rounded-[20px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-slate-800 ctx-hidden ${
                isVisible ? "ctx-animated" : ""
              }`}
            >
              {/* Search Bar Input Node */}
              <div className="w-full bg-white/10 rounded-full border border-white/20 backdrop-blur-md py-3 px-5 flex items-center gap-3 select-none">
                <span className="text-white/50 text-sm">🔍</span>
                <span className="text-neutral-300 font-normal text-sm font-sans">
                  Acme renewal
                </span>
              </div>

              {/* Feed Results Queue Stream */}
              <div className="space-y-3">
                {searchResults.map((res, i) => (
                  <div 
                    key={i}
                    className="w-full bg-white/5 rounded-xl border border-white/10 p-3.5 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-white/[0.08] transition-colors duration-200"
                  >
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider self-start sm:self-auto ${res.badgeBg}`}>
                      {res.type}
                    </span>
                    <p className="text-sm text-white/90 font-sans truncate">
                      <span className="font-bold text-white">{res.boldText}</span>
                      <span className="text-white/70 font-normal">{res.normalText}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visualization Media Card */}
            <div 
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
              className={`lg:col-span-5 relative bg-slate-900 dark:bg-gray-900 rounded-[20px] overflow-hidden min-h-[320px] lg:min-h-full shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-slate-800 ctx-hidden ${
                isVisible ? "ctx-animated" : ""
              }`}
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 select-none" 
                src="/sema-mail/image 51.png" 
                alt="Sema continuous enterprise graph connection stream analytics interface overview"
                loading="lazy"
              />
            </div>

          </div>

          {/* Core Navigation Link Framework Context */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>Explore Search</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                →
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}