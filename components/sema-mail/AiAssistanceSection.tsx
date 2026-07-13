"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook to trigger entry animations sequentially when scrolled into view
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

const capabilities = [
  {
    title: "Thread summaries",
    desc: "Summarize long email threads into clear context.",
    meta: "User initiated or policy-controlled",
  },
  {
    title: "Reply drafting",
    desc: "Draft professional replies based on the thread and related workspace context.",
    meta: "User approval before sending",
  },
  {
    title: "Owner extraction",
    desc: "Identify requested actions, possible owners, and due dates.",
    meta: "Editable before assignment",
  },
  {
    title: "Follow-up prompts",
    desc: "Suggest reminders, calendar actions, or meeting links.",
    meta: "User chooses action",
  },
  {
    title: "Reasoning trace",
    desc: "Explain why a draft or next step was suggested.",
    meta: "Visible where AI affects work",
  },
];

export default function AiAssistanceSection() {
  const { ref: sectionRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes aiRevealFloat {
          from { 
            opacity: 0; 
            transform: translateY(35px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .ai-float-hidden { 
          opacity: 0; 
          transform: translateY(35px); 
        }
        .ai-float-animated { 
          animation: aiRevealFloat 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="w-full min-h-[824px] bg-[#1e1b4b] bg-radial-[at_20%_15%] from-indigo-600/60 via-slate-950 to-slate-950 dark:bg-gray-950 py-16 sm:py-20 md:py-24 text-white overflow-hidden relative flex items-center transition-colors duration-300"
      >
        {/* Subtle decorative grid background overlay matching layout styles */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 relative z-10">
          
          {/* Header Block with scroll trigger float up */}
          <div className={`max-w-3xl mb-12 md:mb-16 ai-float-hidden ${isVisible ? "ai-float-animated" : ""}`}>
            <div className="inline-flex items-center gap-2 mb-3 select-none">
              <span className="size-1.5 rounded-full bg-indigo-400" />
              <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase font-sans">
                AI ASSISTANCE
              </span>
            </div>
            
            <h2 className="text-[clamp(26px,4.5vw,36px)] font-extrabold tracking-tight leading-snug mb-4">
              AI that drafts. You decide.
            </h2>
            
            <p className="text-white/70 dark:text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Sema AI helps you move faster on email without acting on your behalf — every draft and suggestion is reviewed before it becomes action.
            </p>
          </div>

          {/* Core Feature Matrix Row with step-delayed float ups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8 md:mb-10">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                style={{ 
                  animationDelay: `${idx * 0.08}s`,
                  animationFillMode: "forwards"
                }}
                className={`bg-white/5 dark:bg-gray-900/40 rounded-2xl border border-white/20 dark:border-gray-800 p-6 flex flex-col justify-between min-h-[224px] backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30 group ai-float-hidden ${
                  isVisible ? "ai-float-animated" : ""
                }`}
              >
                <div>
                  <h3 className="text-white text-base font-bold font-sans mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/70 dark:text-gray-400 text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="text-indigo-400 dark:text-indigo-300 text-xs font-bold leading-snug pt-4 mt-auto border-t border-white/10">
                  {item.meta}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Code Review Console Terminal Node */}
          <div 
            style={{ 
              animationDelay: "0.45s",
              animationFillMode: "forwards"
            }}
            className={`w-full bg-white/5 dark:bg-gray-900/30 rounded-[20px] border border-white/20 dark:border-gray-800 p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.07] ai-float-hidden ${
              isVisible ? "ai-float-animated" : ""
            }`}
          >
            <span className="text-white text-sm sm:text-base font-bold font-sans block mb-2 select-none">
              Draft ready for review
            </span>
            
            <p className="text-white/70 dark:text-gray-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed italic mb-8 px-2">
              &ldquo;Thanks for the meeting today — here are the updated commercial terms and timeline for the renewal.&rdquo;
            </p>

            {/* Simulated Action Controls Flow Panel */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-48 h-10 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-600/20">
                Approve
              </button>
              <button className="w-full sm:w-48 h-10 border border-white/30 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
                Edit
              </button>
              <button className="w-full sm:w-48 h-10 border border-white/30 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
                Reject
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}