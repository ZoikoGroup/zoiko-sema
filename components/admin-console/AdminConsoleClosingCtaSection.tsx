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

export default function AdminConsoleClosingCtaSection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes accsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .accs-hidden  { opacity: 0; transform: translateY(28px); }
        .accs-visible { animation: accsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .accs-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .accs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.18);
        }
        .accs-btn-outline {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .accs-btn-outline:hover {
          background-color: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .accs-hidden, .accs-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .accs-btn-primary:hover, .accs-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-white pt-10 sm:pt-12 pb-16 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div
            ref={cardRef}
            className={`accs-hidden ${cardIn ? "accs-visible" : ""} rounded-[28px] bg-[#151030] px-6 sm:px-12 py-14 sm:py-16 text-center`}
          >
            <h2 className="text-[clamp(22px,3.6vw,32px)] font-bold leading-[1.2] tracking-tight text-white mb-4 max-w-[560px] mx-auto">
              Ready to govern communication at scale?
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/55 max-w-[580px] mx-auto mb-9">
              See how Zoiko Sema Admin Console helps organizations manage users, workspaces, security, AI policies, integrations, reporting, and ZoikoTime workforce-context governance from one centralized platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button className="accs-btn-primary rounded-full bg-white text-[#0F0F2A] text-[14px] font-semibold px-6 py-3">
                Get a demo
              </button>
              <button className="accs-btn-outline rounded-full border border-white/20 text-white text-[14px] font-semibold px-6 py-3">
                Talk to sales
              </button>
              <button className="accs-btn-outline rounded-full border border-white/20 text-white text-[14px] font-semibold px-6 py-3">
                Explore ZoikoTime integration
              </button>
            </div>

            <p className="text-[12px] text-white/35">
              Built for growing teams, business workspaces, and enterprise communication environments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}