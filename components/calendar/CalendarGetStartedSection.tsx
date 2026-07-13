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

export default function CalendarGetStartedSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes cgsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cgs-hidden  { opacity: 0; transform: translateY(28px); }
        .cgs-visible { animation: cgsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .cgs-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .cgs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(75, 71, 229, 0.4);
        }
        .cgs-btn-outline {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .cgs-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .cgs-link {
          transition: gap .2s ease, opacity .2s ease;
        }
        .cgs-link:hover {
          gap: 7px;
          opacity: 0.85;
        }

        @media (prefers-reduced-motion: reduce) {
          .cgs-hidden, .cgs-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cgs-btn-primary:hover, .cgs-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Get started with Sema Calendar"
        className="w-full py-16 sm:py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 0%, rgba(75,71,229,0.4) 0%, rgba(15,15,42,0) 55%), linear-gradient(135deg, #0D0B22 0%, #12122E 55%, #0F0F2A 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cgs-hidden ${badgeIn ? "cgs-visible" : ""} flex items-center justify-center gap-2 mb-5`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B8FE0]" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8B8FE0]">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`cgs-hidden ${headIn ? "cgs-visible" : ""}`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(26px,4.4vw,38px)] font-bold leading-[1.2] tracking-tight text-white max-w-[720px] mx-auto mb-5">
              Schedule work with the context your team needs.
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.75] text-white/55 max-w-[600px] mx-auto mb-9">
              Start with Sema Calendar for meetings, calls, mail-connected scheduling, AI summaries, and policy-aware communication workflows.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`cgs-hidden ${ctaIn ? "cgs-visible" : ""}`}
            style={{ animationDelay: "0.12s" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a
                href="/calendar/start-free"
                className="cgs-btn-primary inline-flex items-center justify-center rounded-full bg-[#4B47E5] text-white text-[13.5px] font-semibold px-6 py-3"
              >
                Start free
              </a>
              <a
                href="/calendar/contact-sales"
                className="cgs-btn-outline inline-flex items-center justify-center rounded-full bg-transparent text-white text-[13.5px] font-semibold px-6 py-3 border border-white/25"
              >
                Contact sales
              </a>
            </div>

            <a
              href="/calendar/schedule-meeting"
              className="cgs-link inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8B8FE0]"
            >
              Schedule a meeting
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
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