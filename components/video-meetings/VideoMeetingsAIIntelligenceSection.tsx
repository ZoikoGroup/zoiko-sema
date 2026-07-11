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

export default function VideoMeetingsAIIntelligenceSection() {
  const { ref: bannerRef, inView: bannerIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes bbFadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bb-hidden  { opacity: 0; transform: translateY(35px); }
        .bb-visible { animation: bbFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth custom transitions for interactive card buttons */
        .bb-btn-transition {
          transition: transform 0.25s cubic-bezier(0.2, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          
          {/* Main Card Container */}
          <div
            ref={bannerRef}
            className={`bb-hidden ${bannerIn ? "bb-visible" : ""} relative w-full rounded-3xl overflow-hidden bg-slate-950 px-6 py-16 sm:py-20 md:py-24 text-center border border-slate-900 shadow-xl`}
          >
            {/* Absolute Ambient Background Radial Mesh Glow Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(79,70,229,0.45),rgba(79,70,229,0)_65%)] sm:bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.45),rgba(79,70,229,0)_60%)]" />

            {/* Foreground Content Wrapper */}
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              
              <h2 className="text-[clamp(24px,5vw,36px)] font-extrabold text-white leading-[1.2] tracking-tight mb-4 max-w-md sm:max-w-xl">
                Meetings is included in Zoiko Sema Workspace
              </h2>
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal mb-8 sm:mb-10 max-w-lg">
                Consolidate and save — every plan tier comes with a range of communication and productivity products.
              </p>

              {/* Action Buttons Frame */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                
                <button className="bb-btn-transition w-full sm:w-auto px-7 py-3.5 bg-white text-slate-950 font-semibold rounded-full text-base hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.99] shadow-md">
                  Explore Zoiko Workspace
                </button>
                
                <button className="bb-btn-transition w-full sm:w-auto px-7 py-3.5 bg-transparent text-white font-semibold rounded-full text-base border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.99]">
                  Compare plans
                </button>
                
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}