"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Reusable Intersection Observer Scroll-Reveal Hook ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function WorkflowAndGovernancePage() {
  // Independent scroll reveal animations per section
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();

  const workflowCards = [
    {
      title: "Deterministic routing",
      desc: "Media Relations first, then product, legal, security, or regional specialists as needed."
    },
    {
      title: "Sensitive-data guard",
      desc: "Warns against confidential data, credentials, or vulnerability details in the form."
    },
    {
      title: "Not a sales funnel",
      desc: "Press inquiries are never auto-enrolled as sales leads."
    }
  ];

  const correctionCards = [
    {
      label: "Clarified",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/70 dark:text-green-300",
      desc: "Adds context without reversing the original claim."
    },
    {
      label: "Corrected",
      badgeClass: "bg-orange-100 text-yellow-800 dark:bg-amber-950/70 dark:text-amber-300",
      desc: "States what was wrong, what changed, and notifies known recipients."
    },
    {
      label: "Withdrawn",
      badgeClass: "bg-rose-100 text-red-700 dark:bg-rose-950/70 dark:text-rose-300",
      desc: "Keeps the notice public with a reason category and replacement link."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: PRESS INQUIRY WORKFLOW (Rich Indigo Background Mesh)
          ========================================================================= */}
      <section
        ref={section1.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-950 text-white transition-all duration-1000 ease-out transform ${
          section1.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
          
          {/* Header Block */}
          <div className="max-w-[680px] space-y-3">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
                PRESS INQUIRY WORKFLOW
              </span>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              Routed to the right person — never straight into a sales queue.
            </h2>
          </div>

          {/* Dynamic Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Features Row List Stack */}
            <div className="lg:col-span-6 flex flex-col gap-3.5 w-full">
              {workflowCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col justify-start items-start gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                >
                  <h3 className="text-white text-sm font-bold  leading-6">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-normal   leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Image Framework Preview */}
            <div className="lg:col-span-6 w-full rounded-[20px] shadow-2xl border border-white/10 overflow-hidden bg-slate-900 group">
              <img
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                src="/newsroom/Press inquiry form.png"
                alt="Deterministic interactive workflow pipeline diagram"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORRECTIONS AND WITHDRAWALS (Soft Subtle Alternative Palette)
          ========================================================================= */}
      <section
        ref={section2.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
          section2.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-8">
          
          {/* Header Block */}
          <div className="max-w-[680px] space-y-3">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                CORRECTIONS AND WITHDRAWALS
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              The same URL. A visible notice. No silent rewrite.
            </h2>
          </div>

          {/* Full-width Diagram Box */}
          <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-gray-950 group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
              src="/newsroom/Correction.png"
              alt="Corrections timeline framework diagram schematic"
            />
          </div>

          {/* Bottom Card Deck Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {correctionCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-950 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] border border-slate-200 dark:border-slate-800 flex flex-col justify-start items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className={`px-3 py-1.5 rounded-full inline-flex items-center text-xs font-bold   leading-tight ${card.badgeClass}`}>
                  {card.label}
                </div>
                <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: AI ASSISTANCE AND HUMAN PUBLICATION (Clean Crisp Base Layout)
          ========================================================================= */}
      <section
        ref={section3.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
          section3.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-8">
          
          {/* Header Block */}
          <div className="max-w-[680px] space-y-3">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                AI ASSISTANCE AND HUMAN PUBLICATION
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              AI can draft. It cannot invent, approve, or publish.
            </h2>
          </div>

          {/* Media Full-Frame Grid Asset */}
          <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-gray-900 group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
              src="/newsroom/AI-assisted.png"
              alt="AI Guardrails flow visualization"
            />
          </div>

          {/* Warning Guardrail Callout Banner */}
          <div className="w-full p-5 sm:p-6 bg-violet-50 dark:bg-gray-900 rounded-2xl border border-violet-100 dark:border-slate-800/80 flex flex-col justify-start items-start shadow-inner transition-all duration-300 hover:border-violet-200 dark:hover:border-slate-700">
            <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-normal   leading-relaxed">
              AI may help outline, summarize approved sources, or suggest headline variants — never invent releases, quotes, coverage, customers, or certifications. Publication requires human fact-check and approval every time.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}