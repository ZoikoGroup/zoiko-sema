"use client";

import React, { useEffect, useRef, useState } from "react";

// Intersection Observer Hook for smooth viewport entry animations
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

// Data Matrix Configurations
const audienceCards = [
  {
    tag: "Individuals",
    title: "Remember every conversation",
    desc: "Start with personal notes, calls, meetings, and search.",
    action: "Start Free →",
  },
  {
    tag: "Teams",
    title: "Keep decisions visible",
    desc: "Shared notes help teams move from discussion to execution.",
    action: "Explore Teams →",
  },
  {
    tag: "Businesses",
    title: "Govern notes at scale",
    desc: "Deploy notes with policy, admin controls, and audit support.",
    action: "Contact Sales →",
  },
  {
    tag: "Regulated teams",
    title: "Protect sensitive discussions",
    desc: "Use Confidential Mode and policy-led governance.",
    action: "Visit Trust Center →",
  },
];

const faqData = [
  { 
    q: "What is Sema Notes?", 
    a: "Sema Notes is a highly secure, governance-first transcription and workspace asset-building utility integrated into the enterprise ecosystem." 
  },
  { 
    q: "Is Sema Notes the same as AI Meeting Summaries?", 
    a: "No. While it uses AI structural parsing, Sema Notes enforces server-side permission policies, compliance retention schedules, and clear audit log trails distinct from raw individual captures." 
  },
  { 
    q: "Can Sema Notes create follow-ups?", 
    a: "Yes, you can directly turn structured sentences into drafts, assign concrete owners, flag deadlines, and map actionable items seamlessly." 
  },
  { 
    q: "Does Sema Notes connect with Mail and Calendar?", 
    a: "Yes, it safely coordinates across your channels and notification services strictly subject to individual or workspace data tenant constraints." 
  },
  { 
    q: "Can admins control Sema Notes?", 
    a: "Absolutely. IT leaders can completely toggle AI assistance flags, constrain export pipelines, and customize retention intervals universally." 
  },
  { 
    q: "How does Confidential Mode affect notes?", 
    a: "If active, it entirely shuts off automated captures or logs. Sema strictly alerts participants prior to sessions without parsing hidden parameters." 
  },
  { 
    q: "Is Sema Notes suitable for regulated teams?", 
    a: "Yes. Built natively for stringent compliance paths, it satisfies strict verification pipelines required by legal and internal audit departments." 
  },
];

export default function MarketingSectionsPack() {
  const { ref: audienceRef, inView: audienceIn } = useInView(0.05);
  const { ref: faqRef, inView: faqIn } = useInView(0.05);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.05);
  
  // Track open state for individual accordions
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes customFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-hidden  { opacity: 0; transform: translateY(24px); }
        .anim-visible { animation: customFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="w-full bg-white text-slate-900 font-sans">
        
        {/* ========================================================
            SECTION 1: AUDIENCE PATHS
           ======================================================== */}
        <section 
          ref={audienceRef}
          className="w-full bg-violet-50 py-16 sm:py-20 md:py-24 border-b border-slate-100"
        >
          <div className={`mx-auto max-w-6xl px-6 sm:px-8 md:px-10 anim-hidden ${audienceIn ? "anim-visible" : ""}`}>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-3 select-none">
                AUDIENCE PATHS
              </span>
              <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold text-slate-900 tracking-tight leading-tight">
                Built for how you'll actually use it.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audienceCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between items-start min-h-[190px] shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="w-full">
                    <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wide block mb-2 select-none">
                      {card.tag}
                    </span>
                    <h3 className="text-slate-900 text-sm font-bold tracking-tight mb-2 font-sans">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-normal leading-relaxed font-sans mb-5">
                      {card.desc}
                    </p>
                  </div>
                  <a 
                    href="#" 
                    className="text-blue-600 text-xs font-bold group-hover:text-blue-700 transition-colors"
                  >
                    {card.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: FAQ ACCORDIONS
           ======================================================== */}
        <section 
          ref={faqRef}
          className="w-full bg-white py-16 sm:py-20 md:py-24"
        >
          <div className={`mx-auto max-w-3xl px-6 sm:px-8 anim-hidden ${faqIn ? "anim-visible" : ""}`}>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-3 select-none">
                FAQ
              </span>
              <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold text-slate-900 tracking-tight leading-tight">
                Answers for buyers and reviewers
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="bg-violet-50 rounded-2xl border border-slate-200 overflow-hidden transition-colors duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-slate-900 text-sm font-semibold tracking-tight font-sans pr-4">
                        {item.q}
                      </span>
                      <span className={`text-blue-600 text-xl font-semibold leading-none select-none transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    
                    {/* Collapsible Content Area */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-40 opacity-100 border-t border-slate-200/60" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-white/40">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: FINAL CALL TO ACTION
           ======================================================== */}
        <section 
          ref={ctaRef}
          className="w-full bg-violet-50 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8"
        >
          <div className={`mx-auto max-w-5xl rounded-3xl bg-slate-900 bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.45),transparent_60%)] py-14 px-8 md:px-16 text-center flex flex-col items-center shadow-xl anim-hidden ${ctaIn ? "anim-visible" : ""}`}>
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
              Keep every important conversation useful.
            </h2>
            <p className="text-white/60 text-sm font-normal leading-relaxed max-w-xl mb-8 font-sans">
              Start free, invite your team, or speak with sales about governed Sema Notes deployment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a 
                href="#" 
                className="w-full sm:w-auto px-6 h-12 rounded-full bg-white text-slate-900 text-sm font-semibold inline-flex items-center justify-center hover:bg-slate-50 transition-colors duration-150"
              >
                Start Free
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-transparent hover:bg-white/5 hover:border-white/50 transition-all duration-150"
              >
                Contact Sales
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-transparent hover:bg-white/5 hover:border-white/50 transition-all duration-150"
              >
                Explore Sema AI
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}