"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

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

export function WorkflowsCtaSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes wcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wc-hidden  { opacity: 0; transform: translateY(24px); }
        .wc-visible { animation: wcFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .wc-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .wc-btn-primary:hover { transform: translateY(-2px); background-color: #3B78F0; box-shadow: 0 12px 28px rgba(47,107,235,0.5); }
        .wc-btn-primary:active { transform: translateY(0); }

        .wc-btn-secondary { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .wc-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); }
        .wc-btn-secondary:active { transform: translateY(0); }

        .wc-link-arrow { transition: transform .25s ease; }
        .wc-link:hover .wc-link-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .wc-hidden, .wc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wc-btn-primary:hover, .wc-btn-secondary:hover { transform: none !important; }
          .wc-link:hover .wc-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Turn repeatable work into governed automation"
        className="relative w-full overflow-hidden bg-[#0A0A18] bg-cover bg-center bg-no-repeat"
        style={{
          // Save the Figma network background export here.
          backgroundImage: "url('/workflows/CTABanner.jpg')",
        }}
      >
        {/* Legibility scrim for the centered text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#0A0A18]/65"
        />

        <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-24 text-center sm:px-8 sm:py-28">
          <p
            ref={eyebrowRef}
            className={`wc-hidden ${eyebrowIn ? "wc-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
          >
            Test the logic
          </p>

          <h2
            ref={headRef}
            className={`wc-hidden ${headIn ? "wc-visible" : ""} mb-4 text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-white`}
            style={{ animationDelay: "0.08s" }}
          >
            Turn repeatable work into governed automation.
          </h2>

          <p
            ref={subRef}
            className={`wc-hidden ${subIn ? "wc-visible" : ""} mx-auto mb-9 max-w-md text-[15px] leading-[1.7] text-gray-300`}
            style={{ animationDelay: "0.16s" }}
          >
            Start with a template, or talk to sales about workflow governance for
            your organization.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`wc-hidden ${ctaIn ? "wc-visible" : ""} flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center`}
            style={{ animationDelay: "0.24s" }}
          >
            <Link href="/start-free">
            <button
              type="button"
              className="wc-btn-primary rounded-lg bg-[#2F6BEB] px-8 py-3 text-[14px] font-semibold text-white"
            >
              Start Free
            </button>
            </Link>
            <Link href="/get-a-demo">
            <button
              type="button"
              className="wc-btn-secondary rounded-lg border border-white/15 bg-white/[0.06] px-8 py-3 text-[14px] font-semibold text-white backdrop-blur-[2px]"
            >
              Get a demo
            </button>
            </Link>
          </div>

          {/* Text link */}
          <div
            ref={linkRef}
            className={`wc-hidden ${linkIn ? "wc-visible" : ""} mt-6`}
            style={{ animationDelay: "0.32s" }}
          >
            <button
              type="button"
              className="wc-link inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold text-white"
            >
              Explore Integrations
              <FiArrowRight className="wc-link-arrow h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkflowsCtaSection;