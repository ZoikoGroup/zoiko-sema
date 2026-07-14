"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function GetDemoFinalCTASection() {
  const { ref, inView } = useInView(0.25);

  return (
    <>
      <style>{`
        @keyframes gdctaFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gdcta-hidden  { opacity: 0; transform: translateY(20px); }
        .gdcta-visible { animation: gdctaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .gdcta-btn-primary { transition: transform .2s ease, box-shadow .2s ease; }
        .gdcta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(99,102,241,0.4); }
        .gdcta-btn-primary:active { transform: translateY(0); }

        .gdcta-btn-secondary { transition: border-color .2s ease, background-color .2s ease, transform .2s ease; }
        .gdcta-btn-secondary:hover { border-color: rgba(255,255,255,0.6); background-color: rgba(255,255,255,0.06); transform: translateY(-2px); }
        .gdcta-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .gdcta-hidden { opacity: 1 !important; animation: none !important; }
          .gdcta-btn-primary:hover, .gdcta-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Ready for a tailored walkthrough"
        className="relative w-full overflow-hidden py-16 md:py-20"
        style={{ background: "radial-gradient(120% 160% at 20% 0%, #232659 0%, #12143a 55%)" }}
      >
        <div ref={ref} className={`gdcta-hidden ${inView ? "gdcta-visible" : ""} relative z-10 mx-auto w-full max-w-2xl px-6 text-center`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#a5b4fc" }}>
            See It For Yourself
          </p>
          <h2 className="font-bold leading-[1.15] tracking-tight text-white mb-4" style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>
            Ready for a tailored walkthrough?
          </h2>
          <p className="text-[14.5px] leading-[1.7] mb-8" style={{ color: "#b7bbe8" }}>
            Request a demo, or start free if you're ready to explore on your own.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="gdcta-btn-primary rounded-xl px-6 py-3 text-[14.5px] font-semibold text-white"
              style={{ background: "#6366f1" }}
            >
              Request demo
            </Link>
            <Link
              href="/start-free"
              className="gdcta-btn-secondary rounded-xl px-6 py-3 text-[14.5px] font-semibold text-white border"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              Start free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
