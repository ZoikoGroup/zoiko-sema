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

export default function ProductOverviewHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes poFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .po-hidden  { opacity: 0; transform: translateY(28px); }
        .po-visible { animation: poFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .po-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .po-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px color-mix(in srgb, var(--brand) 35%, transparent);
        }
        .po-btn-primary:active { transform: translateY(0); }

        .po-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .po-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background-color: #f8f9ff;
        }
        .po-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .po-hidden, .po-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .po-btn-primary:hover, .po-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Product overview hero"
        className="w-full py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #EEF1FF 0%, #F5F7FF 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`po-hidden ${badgeIn ? "po-visible" : ""} inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
              Product Overview
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headRef}
            className={`po-hidden ${headIn ? "po-visible" : ""} text-[clamp(30px,5vw,48px)] font-bold leading-[1.12] tracking-tight text-gray-900 mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            One intelligent communication platform.
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`po-hidden ${subIn ? "po-visible" : ""} mx-auto max-w-[700px] text-[15px] leading-[1.75] text-gray-500 mb-9`}
            style={{ animationDelay: "0.16s" }}
          >
            Zoiko Sema brings messaging, audio calls, video meetings, AI
            meeting summaries, channels, spaces, and administration into one
            structured platform for individuals, teams, and organizations.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`po-hidden ${ctaIn ? "po-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-8`}
            style={{ animationDelay: "0.24s" }}
          >
            <button className="po-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white bg-brand hover:bg-brand-dark">
              Start free
            </button>
            <button className="po-btn-secondary rounded-full px-7 py-3 text-[14px] font-semibold text-gray-900 bg-white shadow-sm">
              Get a demo
            </button>
          </div>

          {/* Footnote */}
          <p
            ref={footRef}
            className={`po-hidden ${footIn ? "po-visible" : ""} text-[12.5px] text-gray-400`}
            style={{ animationDelay: "0.32s" }}
          >
            Start simple. Scale into governed communication when your team
            needs structure, security, and accountability.
          </p>
        </div>
      </section>
    </>
  );
}