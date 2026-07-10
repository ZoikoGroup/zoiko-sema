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

export default function IndividualProductivityCTASection() {
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes ipcCtaFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipc-cta-hidden  { opacity: 0; transform: translateY(26px); }
        .ipc-cta-visible { animation: ipcCtaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipc-cta-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ipc-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .ipc-cta-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ipc-cta-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -12px rgba(0,0,0,0.4);
          background: #f3f4f8;
        }

        @media (prefers-reduced-motion: reduce) {
          .ipc-cta-hidden { opacity: 1 !important; transform: none !important; }
          .ipc-cta-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Ready to work with more focus and follow-through"
        className="w-full py-15 md:py-15"
        style={{
          background: "linear-gradient(135deg, #43437A 0%, #2C2C52 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 text-center">
          <h2
            ref={headingRef}
            className={`ipc-cta-hidden ${headingIn ? "ipc-cta-visible" : ""} text-[clamp(26px,4vw,38px)] font-bold leading-[1.2] tracking-tight text-white mb-4`}
          >
            Ready to work with more focus and follow-through?
          </h2>

          <p
            ref={copyRef}
            className={`ipc-cta-hidden ${copyIn ? "ipc-cta-visible" : ""} text-[14.5px] leading-relaxed mb-9 max-w-[560px] mx-auto`}
            style={{ color: "#A6A9C8", animationDelay: "0.08s" }}
          >
            See how Zoiko Sema helps individuals plan, prepare, summarize, and
            complete work with less context switching.
          </p>

          <div
            ref={ctaRef}
            className={`ipc-cta-hidden ${ctaIn ? "ipc-cta-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.16s" }}
          >
            <button className="ipc-cta-btn-primary text-white text-[14px] font-semibold rounded-full px-6 py-3">
              Get a demo
            </button>
            <button className="ipc-cta-btn-secondary bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
              Start free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}