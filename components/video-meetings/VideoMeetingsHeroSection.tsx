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

export default function VideoMeetingsHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes vmFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vm-hidden  { opacity: 0; transform: translateY(28px); }
        .vm-visible { animation: vmFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .vm-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .vm-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px color-mix(in srgb, var(--brand) 35%, transparent);
        }
        .vm-btn-primary:active { transform: translateY(0); }

        .vm-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .vm-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background-color: #f8f9ff;
        }
        .vm-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .vm-hidden, .vm-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vm-btn-primary:hover, .vm-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Video meetings hero"
        className="w-full py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #EEF1FF 0%, #F5F7FF 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vm-hidden ${badgeIn ? "vm-visible" : ""} inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
              Video Meetings
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headRef}
            className={`vm-hidden ${headIn ? "vm-visible" : ""} text-[clamp(30px,5vw,48px)] font-bold leading-[1.12] tracking-tight text-gray-900 mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            Meetings that drive decisions.
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`vm-hidden ${subIn ? "vm-visible" : ""} mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray-500 mb-9`}
            style={{ animationDelay: "0.16s" }}
          >
            Host secure video meetings, collaborate in real time, capture
            decisions with AI, and keep every follow-up connected to your
            Zoiko Sema workspace.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`vm-hidden ${ctaIn ? "vm-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-8`}
            style={{ animationDelay: "0.24s" }}
          >
            <button className="vm-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white bg-brand hover:bg-brand-dark">
              Start free
            </button>
            <button className="vm-btn-secondary rounded-full px-7 py-3 text-[14px] font-semibold text-gray-900 bg-white shadow-sm">
              Get a demo
            </button>
          </div>

          {/* Footnote */}
          <p
            ref={footRef}
            className={`vm-hidden ${footIn ? "vm-visible" : ""} text-[12.5px] text-gray-400`}
            style={{ animationDelay: "0.32s" }}
          >
            Fast join. HD meetings. AI summaries. Enterprise controls.
            ZoikoTime-ready governance.
          </p>
        </div>
      </section>
    </>
  );
}