"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

export default function RegulatedWorkflowsClosingCtaSection() {
  const { ref: sectionRef, inView } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes rccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rcc-hidden  { opacity: 0; transform: translateY(28px); }
        .rcc-visible { animation: rccFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rcc-btn-white {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .rcc-btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.2);
        }

        .rcc-btn-outline {
          transition: transform .25s ease, background-color .25s ease, border-color .25s ease;
        }
        .rcc-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }

        .rcc-btn-text {
          transition: opacity .2s ease;
        }
        .rcc-btn-text:hover { opacity: 0.75; }

        @media (prefers-reduced-motion: reduce) {
          .rcc-hidden, .rcc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rcc-btn-white:hover, .rcc-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Ready to govern sensitive collaboration"
        className="w-full py-16 sm:py-20"
        style={{
          background: "linear-gradient(120deg, #6C4FE0 0%, #6C4FE0 50%, #4B34B0 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10 text-center">
          {/* Heading */}
          <div className={`rcc-hidden ${inView ? "rcc-visible" : ""}`}>
            <h2 className="text-[clamp(24px,4vw,34px)] font-bold leading-[1.25] tracking-tight text-white max-w-[620px] mx-auto mb-5">
              Ready to govern sensitive collaboration with confidence?
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`rcc-hidden ${inView ? "rcc-visible" : ""} text-[14px] sm:text-[15px] leading-[1.7] text-white/75 max-w-[520px] mx-auto mb-9`}
            style={{ animationDelay: "0.08s" }}
          >
            See how Zoiko Sema supports regulated workflows, audit readiness, and secure business communication.
          </p>

          {/* CTAs */}
          <div
            className={`rcc-hidden ${inView ? "rcc-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.14s" }}
          >
            <Link
              href="/get-a-demo"
              className="rcc-btn-white inline-flex items-center justify-center rounded-full bg-white text-[#3A2FB8] text-[14px] font-semibold px-7 py-3.5"
            >
              Get a demo
            </Link>
            <Link
              href="/contact-sales"
              className="rcc-btn-outline inline-flex items-center justify-center rounded-full border border-white/30 text-white text-[14px] font-semibold px-7 py-3.5"
            >
              Talk to sales
            </Link>
            <Link
              href="/security-compliance"
              className="rcc-btn-text inline-flex items-center justify-center text-white text-[14px] font-semibold underline underline-offset-4 decoration-white/40 px-2"
            >
              Explore security &amp; compliance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}