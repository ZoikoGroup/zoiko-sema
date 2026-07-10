"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
function useInView(threshold = 0.2) {
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

const BRAND = "#3457E8";

export default function ZoikoCustomersCTASection() {
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes zcctaFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zccta-hidden  { opacity: 0; transform: translateY(26px); }
        .zccta-visible { animation: zcctaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .zccta-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .zccta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .zccta-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .zccta-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -12px rgba(0,0,0,0.4);
          background: #f3f4f8;
        }

        @media (prefers-reduced-motion: reduce) {
          .zccta-hidden { opacity: 1 !important; transform: none !important; }
          .zccta-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Ready to connect ZoikoTime and Zoiko Sema"
        className="w-full py-24 md:py-15"
        style={{ background: "#32325E" }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 text-center">
          <h2
            ref={headingRef}
            className={`zccta-hidden ${headingIn ? "zccta-visible" : ""} text-[clamp(26px,4vw,38px)] font-bold leading-[1.2] tracking-tight text-white mb-4`}
          >
            Ready to connect ZoikoTime and Zoiko Sema?
          </h2>

          <p
            ref={copyRef}
            className={`zccta-hidden ${copyIn ? "zccta-visible" : ""} text-[14.5px] leading-relaxed mb-9 max-w-[560px] mx-auto`}
            style={{ color: "#B4B2CE", animationDelay: "0.08s" }}
          >
            See how Zoiko Sema helps ZoikoTime customers move from workforce
            context to governed communication, meetings, handoffs,
            AI-assisted summaries, and accountable follow-ups.
          </p>

          <div
            ref={ctaRef}
            className={`zccta-hidden ${ctaIn ? "zccta-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.16s" }}
          >
            <button className="zccta-btn-primary text-white text-[14px] font-semibold rounded-full px-6 py-3">
              Get a demo
            </button>
            <button className="zccta-btn-secondary bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
              Talk to sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}