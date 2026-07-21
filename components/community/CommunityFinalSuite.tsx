"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
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
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function CommunityFinalSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <ExpertProfiles />
      <GovernanceSafety />
      <CommunityFAQ />
      <JoinCommunityCTA />
    </div>
  );
}

/* ==========================================================================
   1. MEMBER PROFILES AND VERIFIED EXPERTS SECTION (Dark Hero style)
   ========================================================================== */
function ExpertProfiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              MEMBER PROFILES AND VERIFIED EXPERTS
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Transparent contribution signals. No hidden influence scores.
          </h2>
        </div>

        <div className="w-full aspect-[1136/461] rounded-[20px] overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 308.png" 
            alt="Verified Expert member profile system interface dashboard illustration context layout" 
          />
        </div>

        <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
          <p className="text-white/80 text-xs sm:text-sm font-normal   leading-relaxed">
            Verified expert means confirmed subject-area expertise with disclosure of employee, partner, or customer relationship — never a universal endorsement. <span className="text-indigo-300 font-semibold">Prohibited:</span> hidden influence scores, buyer tiers, contract value, or response-speed pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. MODERATION, SAFETY, AND AI GOVERNANCE SECTION
   ========================================================================== */
function GovernanceSafety() {
  const { ref, isVisible } = useScrollReveal();

  const blocks = [
    { title: "Triage", desc: "Severity, safety, and specialist routing before any action." },
    { title: "Human decision", desc: "No final removal, restriction, or appeal denial by AI alone." },
    { title: "Appeal", desc: "Independent review where practical, with a stated rationale." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              MODERATION, SAFETY, AND AI GOVERNANCE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Proportionate action. A human decides. You can always appeal.
          </h2>
        </div>

        <div className="w-full aspect-[1136/503] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 309.png" 
            alt="Safety reporting console moderation pipeline metrics framework structural view" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((item, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold   mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. FAQ SECTION
   ========================================================================== */
function CommunityFAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "What is the Zoiko Sema Community?",
    "Do I need an account?",
    "Is the Community official customer support?",
    "Who can answer questions?",
    "Does AI write community answers?",
    "Can community ideas become product commitments?"
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-950/40 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[760px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold   tracking-tight">
            Questions about the Community
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-950 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base   hover:bg-slate-50/60 dark:hover:bg-gray-900/40 transition-colors"
                >
                  <span>{q}</span>
                  <div className="relative size-4 flex items-center justify-center ml-4 shrink-0">
                    <div className="w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    <div className={`absolute w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-900' : 'max-h-0'}`}>
                  <div className="p-5 text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum rhoncus varius.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   4. JOIN IN / FINAL CTA SECTION (Dark Hero style)
   ========================================================================== */
function JoinCommunityCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white text-center relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[700px] mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-center gap-3 h-5">
          <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
            JOIN IN
          </span>
        </div>

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold   tracking-tight leading-tight">
          Find your answer, or become the one who gives it.
        </h2>

        <p className="text-white/70 text-sm sm:text-base font-normal   leading-relaxed max-w-[600px] mx-auto">
          Browse public answers, join the community, or start free and bring your own questions.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
          <button className="px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold   rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/30 active:translate-y-0">
            Join the community
          </button>
          <button className="px-7 py-3.5 bg-transparent text-white text-sm font-semibold   rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/50 active:translate-y-0">
            Start free
          </button>
        </div>

        <div className="pt-2">
          <button className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold   transition-all group duration-200">
            <span>Get a demo</span>
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Decorative Canvas Background Glow Overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-indigo-600/10 to-transparent pointer-events-none" />
    </section>
  );
}