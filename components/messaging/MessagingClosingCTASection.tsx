"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

export default function FinalCTASection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes ctaFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cta-hidden  { opacity: 0; transform: translateY(32px); }
        .cta-visible { animation: ctaFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      {/* Background Outer Wrapper Panel matching original Figma color block */}
      <section className="w-full bg-violet-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 cta-hidden ${
            sectionIn ? "cta-visible" : ""
          }`}
        >
          {/* Main Container Card Box Frame featuring rich inner ambient gradient */}
          <div className="w-full bg-[#14122B] sm:rounded-[32px] px-6 py-12 sm:py-16 md:py-20 text-center shadow-xl relative border border-indigo-950">
            
            {/* Header Core Title Context */}
            <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold text-white leading-[1.25] tracking-tight max-w-3xl mx-auto mb-4 select-none">
              Bring every conversation into one structured workspace.
            </h2>

            {/* Sub-paragraph Description Meta */}
            <p className="text-white/70 text-sm font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
              Start with fast messaging for people and teams, then scale into channels, AI 
              summaries, admin controls, security policies, and enterprise governance.
            </p>

            {/* Dynamic Buttons Multi-Row Trigger Elements */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4 max-w-2xl mx-auto">
              
              <a
                href="/start-free"
                className="w-full sm:w-auto min-w-[128px] px-6 h-12 bg-white rounded-full text-slate-900 text-sm font-semibold inline-flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors duration-200"
              >
                Start free
              </a>

              <a
                href="/get-a-demo"
                className="w-full sm:w-auto min-w-[144px] px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                Get a demo
              </a>

              <a
                href="/channels-spaces"
                className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                Explore channels and spaces
              </a>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}