"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook to trigger entry animation precisely when scrolled into view
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
          obs.disconnect(); // Runs animation sequence once
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const steps = [
  {
    num: "1",
    title: "Email arrives",
    desc: "Client request, internal update, or vendor note.",
    badgeBg: "bg-blue-600",
  },
  {
    num: "2",
    title: "Sema understands",
    desc: "Thread summary, key asks, risks, next steps.",
    badgeBg: "bg-indigo-600",
  },
  {
    num: "3",
    title: "Human reviews",
    desc: "Approve, edit, reject, or assign owner.",
    badgeBg: "bg-teal-600",
  },
  {
    num: "4",
    title: "Action happens",
    desc: "Reply sent, task created, calendar updated.",
    badgeBg: "bg-amber-700 dark:bg-amber-600",
  },
  {
    num: "5",
    title: "Record stays searchable",
    desc: "Context preserved with policy and audit.",
    badgeBg: "bg-slate-900 dark:bg-slate-700",
  },
];

export default function MailWorkflowSection() {
  const { ref: sectionRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes sectionFloatUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .wf-card-hidden { 
          opacity: 0; 
          transform: translateY(40px); 
        }
        .wf-card-animated { 
          animation: sectionFloatUp 0.8s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; 
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="w-full bg-white dark:bg-gray-900 py-16 sm:py-20 md:py-24 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
          
          {/* Header Architecture Setup */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 justify-center select-none">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans">
                HOW IT WORKS
              </span>
            </div>
            
            <h2 className="text-[clamp(24px,4vw,32px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              Mail that becomes coordinated action.
            </h2>
            
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
              Sema turns important email into summaries, owners, follow-ups, reminders, meetings,
              <br className="hidden md:inline"/> and searchable workspace context.
            </p>
          </div>

          {/* Workflow Step Grid Matrix with Entry Scroll Activation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 md:mb-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "forwards"
                }}
                className={`bg-white dark:bg-gray-800/40 rounded-2xl border border-slate-200 dark:border-gray-800 p-6 flex flex-col justify-start min-h-[192px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-700 group wf-card-hidden ${
                  isVisible ? "wf-card-animated" : ""
                }`}
              >
                {/* Numeric Badge Element */}
                <div className={`size-7 rounded-full ${step.badgeBg} flex items-center justify-center text-white text-xs font-extrabold select-none mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {step.num}
                </div>
                
                {/* Text Content Block */}
                <h3 className="text-slate-990 dark:text-white text-sm sm:text-base font-bold font-sans mb-2 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-400 text-xs font-normal leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered CTA Link */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>See how Mail works</span>
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