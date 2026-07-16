"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

export function FinancialLifecycleSection() {
  const { ref: headRef, inView: headIn } = useInView(0.4);
  const { ref: panelRef, inView: panelIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes flFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fl-hidden  { opacity: 0; transform: translateY(24px); }
        .fl-visible { animation: flFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .fl-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .fl-visible-r { animation: flRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .fl-hidden, .fl-visible, .fl-hidden-r, .fl-visible-r {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
        }
      `}</style>

      <section
        aria-label="The financial communication lifecycle"
        className="w-full bg-[#EEEEF6] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Heading */}
          <h2
            ref={headRef}
            className={`fl-hidden ${headIn ? "fl-visible" : ""} mb-7 text-center text-[clamp(22px,3.2vw,30px)] font-bold tracking-tight text-gray-900 dark:text-white`}
          >
            The Financial Communication Lifecycle
          </h2>

          {/* Panel holding the lifecycle graphic */}
          <div
            ref={panelRef}
            className={`fl-hidden-r ${panelIn ? "fl-visible-r" : ""} rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(16,24,40,0.08)] dark:border-white/10 dark:from-[#151233] dark:to-[#0F0E24] dark:shadow-none`}
          >
            {/* Horizontal scroll on small screens so the 7-step strip stays legible */}
             <div className="overflow-x-auto">
              <img
                src="/financial-services/lifecycle2.png"
                alt="The financial communication lifecycle: client conversation, meeting, AI summary, review, approval, supervision, and records preservation"
                loading="lazy"
                className="h-auto w-full min-w-[680px] rounded-xl md:min-w-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialLifecycleSection;