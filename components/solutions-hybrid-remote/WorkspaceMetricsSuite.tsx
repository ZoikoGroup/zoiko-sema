"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Hook for Sequential Elements ---
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
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function WorkspaceMetricsSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      
      <SemaIntelligenceSection />
      <HealthMetricsSection />
    </div>
  );
}


/* ==========================================================================
   2. SEMA INTELLIGENCE SECTION (Dark Theme Showcase)
   ========================================================================== */
function SemaIntelligenceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-slate-900 dark:bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="max-w-[1056px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Core Description Copy Stack */}
        <div className="lg:col-span-7 space-y-6">
          <span
            className={`block text-indigo-300 text-sm font-semibold    uppercase tracking-wider transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Sema Intelligence
          </span>
          
          <h2
            className={`text-white text-2xl sm:text-3xl lg:text-4xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Never miss a decision again
          </h2>
          
          <p
            className={`text-slate-400 dark:text-gray-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed transition-all duration-700 ease-out transform delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            When you can't attend, Sema AI takes your seat. Structured summaries, clear decisions, and assigned owners are delivered to your workspace automatically.
          </p>

          {/* Interactive Bullet Framework Elements */}
          <div className="space-y-4 pt-4">
           {[
  "AI-curated 'Key Moments' video snippets",
  "One-click task creation from meeting decisions"
].map((text, idx) => (
  <div
    key={idx}
    className={`flex items-center gap-4 group/item transition-all duration-700 ease-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`}
    style={{ transitionDelay: `${300 + idx * 100}px` }}
  >
    <div className="size-7 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-indigo-500 group-hover/item:scale-110">
      {/* Conditionally renders image 8 for the first item (idx 0) and image 6 for the second item (idx 1) */}
      <img 
        className="size-3.5 object-contain" 
        src={idx === 0 ? "/solutions-hybrid-remote/image (8).png" : "/solutions-hybrid-remote/image (6).png"} 
        alt=""
      />
    </div>
    <span className="text-white text-sm sm:text-base font-normal font-['Inter'] group-hover/item:text-indigo-200 transition-colors">
      {text}
    </span>
  </div>
))}
          </div>
        </div>

        {/* Dynamic Image Graphic Panel */}
        <div
          className={`lg:col-span-5 w-full flex justify-center lg:justify-end transition-all duration-1000 ease-out transform delay-500 ${
            isVisible ? 'translate-y-0 opacity-100 rotate-1' : 'translate-y-16 opacity-0 rotate-0'
          }`}
        >
          <div className="w-full max-w-[496px] aspect-[496/339] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:rotate-0">
            <img
              className="w-full h-full object-cover"
              src="/solutions-hybrid-remote/image (4).png"
              alt="Sema AI automation system meeting snapshot overview metric module view"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. QUANTIFIABLE HEALTH METRICS SECTION
   ========================================================================== */
function HealthMetricsSection() {
  const { ref, isVisible } = useScrollReveal();

  const matrixCards = [
    {
      title: "Handoff Health",
      border: "border-sky-700",
      text: "text-sky-700 dark:text-sky-400",
      desc: "Track how effectively tasks move between time zones. Identify bottlenecks before they stall progress."
    },
    {
      title: "Team Adoption",
      border: "border-black dark:border-white",
      text: "text-black dark:text-white",
      desc: "Measure how frequently teams are utilizing async updates vs. traditional meetings."
    },
    {
      title: "Meeting Follow-through",
      border: "border-slate-500",
      text: "text-slate-500 dark:text-slate-400",
      desc: "Ensure AI-generated action items are being addressed within the expected SLA windows."
    }
  ];

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* Title Block Header */}
        <div className="text-center space-y-3">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold    tracking-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Quantifiable Health Metrics
          </h2>
          <p
            className={`text-zinc-700 dark:text-gray-400 text-base font-normal font-['Inter'] max-w-[650px] mx-auto transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Monitor adoption and collaboration health with enterprise-grade analytics.
          </p>
        </div>

        {/* Dynamic Dashboard Split Elements Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Dashboard Preview Graphic Panel */}
          <div
            className={`lg:col-span-7 w-full group order-2 lg:order-1 transition-all duration-1000 ease-out transform delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="w-full aspect-[704/394] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 dark:border-neutral-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/solutions-hybrid-remote/image (11).png"
                alt="Quantifiable engineering team operational sync metrics graphs visualization dashboard console layout"
              />
            </div>
          </div>

          {/* Core Analytics Factor Control List */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            {matrixCards.map((card, idx) => (
              <div
                key={idx}
                className={`p-6 bg-white/70 dark:bg-gray-950 rounded-xl border-l-4 ${card.border} border-t border-r border-b border-t-slate-200/60 border-r-slate-200/60 border-b-slate-200/60 dark:border-slate-800/80 backdrop-blur-[6px] space-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + idx * 100}px` }}
              >
                <h4 className={`text-sm font-semibold    tracking-wide ${card.text}`}>
                  {card.title}
                </h4>
                <p className="text-zinc-900 dark:text-gray-300 text-xs sm:text-sm font-normal font-['Inter'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}