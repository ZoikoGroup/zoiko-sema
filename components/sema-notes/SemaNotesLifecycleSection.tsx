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

const lifecycleSteps = [
  {
    step: "1",
    title: "Capture",
    desc: "From a meeting, call, message, mail, or manual note.",
  },
  {
    step: "2",
    title: "Refine",
    desc: "AI-assisted structure with human editing.",
  },
  {
    step: "3",
    title: "Decide",
    desc: "Owners, due dates, and linked context.",
  },
  {
    step: "4",
    title: "Share",
    desc: "To a channel, mail, workspace, or project.",
  },
  {
    step: "5",
    title: "Recall",
    desc: "Through search, memory, and related records.",
  },
];

export default function SemaNotesLifecycleSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes lcTranslationUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lc-hidden  { opacity: 0; transform: translateY(24px); }
        .lc-visible { animation: lcTranslationUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        
        /* Interactive Connecting Line Pulse Effect */
        .lc-line-fill {
          width: 0%;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }
        .lc-container.lc-visible .lc-line-fill {
          width: 100%;
        }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 lc-container lc-hidden ${
            sectionIn ? "lc-visible" : ""
          }`}
        >
          {/* Header Configuration */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3 select-none">
              CONVERSATION-TO-MEMORY LIFECYCLE
            </span>
            <h2 className="text-[clamp(24px,4.5vw,34px)] font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              From conversation to searchable memory.
            </h2>
          </div>

          {/* Interactive Steps Tracker Grid Framework */}
          <div className="relative w-full mb-14 md:mb-16">
            
            {/* Horizontal Connection Pipeline (Visible on desktop viewports) */}
            <div className="hidden lg:block absolute left-[4%] right-[4%] top-6 h-0.5 bg-slate-200 -translate-y-1/2 z-0">
              <div className="lc-line-fill h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
              {lifecycleSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  {/* Step Bubble Indicator */}
                  <div className="size-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-base select-none shadow-[0px_10px_24px_-8px_rgba(52,87,232,0.50)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-600">
                    {item.step}
                  </div>

                  {/* Step Title Label */}
                  <h3 className="mt-5 mb-2 text-slate-900 text-sm font-bold tracking-tight">
                    {item.title}
                  </h3>

                  {/* Step Description Payload */}
                  <p className="text-slate-600 text-xs font-normal leading-relaxed max-w-[200px] sm:max-w-none">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Workflow Redirection Action Link */}
          <div className="flex justify-center items-center mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-bold transition-colors duration-150 hover:text-blue-700 dynamic-link"
            >
              <span>See Sema Notes workflow</span>
              <span className="transition-transform duration-200 transform translate-x-0 hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}