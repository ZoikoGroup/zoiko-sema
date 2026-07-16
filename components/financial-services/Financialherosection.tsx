"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

export function FinancialHeroSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.25);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes fsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fsFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .fs-hidden   { opacity: 0; transform: translateY(28px); }
        .fs-visible  { animation: fsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .fs-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .fs-visible-x { animation: fsFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .fs-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .fs-btn-primary:hover { transform: translateY(-2px); background-color: #5C68E0; box-shadow: 0 12px 28px rgba(79,91,213,0.5); }
        .fs-btn-primary:active { transform: translateY(0); }

        .fs-btn-secondary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .fs-btn-secondary:hover { transform: translateY(-2px); background-color: #ffffff; box-shadow: 0 10px 24px rgba(0,0,0,0.3); }
        .fs-btn-secondary:active { transform: translateY(0); }

        .fs-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .fs-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .fs-hidden, .fs-visible, .fs-hidden-x, .fs-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .fs-btn-primary:hover, .fs-btn-secondary:hover, .fs-image:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Governed communication for financial services"
        className="relative w-full overflow-hidden bg-[#0D0B24] py-8 sm:py-10 lg:py-14"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,0.30) 0%, rgba(79,91,213,0) 70%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <p
              ref={eyebrowRef}
              className={`fs-hidden ${eyebrowIn ? "fs-visible" : ""} mb-5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#6B8AF5]`}
            >
              Financial Services
            </p>

            <h1
              ref={headRef}
              className={`fs-hidden ${headIn ? "fs-visible" : ""} mb-5 text-[clamp(34px,5.5vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Governed communication built for Financial Services.
            </h1>

            <p
              ref={subRef}
              className={`fs-hidden ${subIn ? "fs-visible" : ""} mb-8 max-w-[480px] text-[15px] leading-[1.75] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              One secure workspace where conversations, meetings, reviewed AI
              summaries, approvals, records, supervision, retention, client
              collaboration and governance remain connected.
            </p>

            <div
              ref={ctaRef}
              className={`fs-hidden ${ctaIn ? "fs-visible" : ""} flex flex-col items-stretch gap-3 sm:flex-row sm:items-center`}
              style={{ animationDelay: "0.24s" }}
            >
              <Link href="/start-free">
              <button
                type="button"
                className="fs-btn-primary w-full rounded-full bg-[#4F5BD5] px-7 py-3 text-[14px] font-semibold text-white"
              >
                Start free
              </button>
              </Link>
              <Link href="/get-a-demo">
              <button
                type="button"
                className="fs-btn-secondary w-full rounded-full bg-white/95 px-7 py-3 text-[14px] font-semibold text-[#171436]"
              >
                Get a demo
              </button>
              </Link>
            </div>
          </div>

          {/* RIGHT — hero image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`fs-hidden-x ${imgIn ? "fs-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/financial-services/financial-hero.png"
              alt="A Zoiko Sema advisor workspace dashboard shown on a monitor, with compliance and performance panels"
              loading="eager"
              className="fs-image ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialHeroSection;