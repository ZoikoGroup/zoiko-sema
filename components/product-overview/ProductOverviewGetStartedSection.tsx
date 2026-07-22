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

export default function ProductOverviewGetStartedSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: linkRef, inView: linkIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes pogsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pogs-hidden  { opacity: 0; transform: translateY(28px); }
        .pogs-visible { animation: pogsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pogs-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .pogs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(79, 91, 255, 0.45);
        }

        .pogs-btn-outline {
          transition: transform .25s ease, background-color .25s ease, border-color .25s ease;
        }
        .pogs-btn-outline:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.4);
          background-color: rgba(255,255,255,0.06);
        }

        .pogs-link {
          transition: gap .2s ease, opacity .2s ease;
        }
        .pogs-link:hover {
          gap: 8px;
          opacity: 0.85;
        }

        @media (prefers-reduced-motion: reduce) {
          .pogs-hidden, .pogs-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pogs-btn-primary:hover, .pogs-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Get started"
        className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 15%, #2A2266 0%, transparent 55%), linear-gradient(150deg, #0A0C24 0%, #12123A 45%, #1B1550 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pogs-hidden ${badgeIn ? "pogs-visible" : ""} mb-6 inline-flex items-center gap-2`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C8CFF]" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9AA3F5]">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headRef}
            className={`pogs-hidden ${headIn ? "pogs-visible" : ""} text-[clamp(26px,4.4vw,40px)] font-bold leading-[1.2] tracking-tight text-white mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            Ready to bring every conversation into one secure workspace?
          </h2>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`pogs-hidden ${subIn ? "pogs-visible" : ""} text-[14px] sm:text-[15px] leading-[1.75] text-[#A6ABCE] max-w-[560px] mx-auto mb-9`}
            style={{ animationDelay: "0.14s" }}
          >
            Start free, invite your team, or speak with sales about
            business deployment.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`pogs-hidden ${ctaIn ? "pogs-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-5`}
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="/start-free"
              className="pogs-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white"
              style={{ backgroundColor: "#4F5BFF" }}
            >
              Start free
            </a>
            <a
              href="/contact-sales"
              className="pogs-btn-outline rounded-full border px-7 py-3 text-[14px] font-semibold text-white"
              style={{ borderColor: "rgba(255,255,255,0.22)" }}
            >
              Contact sales
            </a>
          </div>

          {/* Link */}
          <div
            ref={linkRef}
            className={`pogs-hidden ${linkIn ? "pogs-visible" : ""} flex justify-center`}
            style={{ animationDelay: "0.26s" }}
          >
            <a
              href="/sema-meet"
              className="pogs-link inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#9AA3F5]"
            >
              Explore Sema Meet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
