"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook (same pattern as your other sections)
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

export default function AudioCallsHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes acFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ac-hidden  { opacity: 0; transform: translateY(28px); }
        .ac-visible { animation: acFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Primary button hover */
        .ac-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ac-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(71,71,135,0.35);
        }
        .ac-btn-primary:active { transform: translateY(0); }

        /* Secondary button hover */
        .ac-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ac-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background-color: #f8f9ff;
        }
        .ac-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .ac-hidden, .ac-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ac-btn-primary:hover, .ac-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Audio calls hero"
        className="w-full py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #F4F7FF 0%, #E7EDFE 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ac-hidden ${badgeIn ? "ac-visible" : ""} inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F5BD5]" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4F5BD5]">
              Audio Calls
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headRef}
            className={`ac-hidden ${headIn ? "ac-visible" : ""} text-[clamp(30px,5vw,48px)] font-bold leading-[1.12] tracking-tight text-gray-900 mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            Voice calls that move work forward.
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`ac-hidden ${subIn ? "ac-visible" : ""} mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray-500 mb-9`}
            style={{ animationDelay: "0.16s" }}
          >
            Start secure 1:1 and group audio calls from chats, channels, spaces,
            contacts, and calendars with AI-assisted summaries, action items,
            call history, and business-grade controls.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`ac-hidden ${ctaIn ? "ac-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-8`}
            style={{ animationDelay: "0.24s" }}
          >
            <button
              className="ac-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white"
              style={{ backgroundColor: "#4F5BD5" }}
            >
              Start free
            </button>
            <button className="ac-btn-secondary rounded-full px-7 py-3 text-[14px] font-semibold text-gray-900 bg-white shadow-sm">
              Get a demo
            </button>
          </div>

          {/* Footnote */}
          <p
            ref={footRef}
            className={`ac-hidden ${footIn ? "ac-visible" : ""} text-[12.5px] text-gray-400`}
            style={{ animationDelay: "0.32s" }}
          >
            Built for fast conversations, clear decisions, and governed
            communication across modern teams.
          </p>
        </div>
      </section>
    </>
  );
}