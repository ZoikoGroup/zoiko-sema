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

export default function SemaAiCTASection() {
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes sactaFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sacta-hidden  { opacity: 0; transform: translateY(24px); }
        .sacta-visible { animation: sactaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sacta-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .sacta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -10px rgba(0,0,0,0.4);
        }

        .sacta-btn-secondary {
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .sacta-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.4);
        }

        .sacta-link { transition: gap .2s ease; }
        .sacta-link .sacta-arrow { transition: transform .2s ease; display: inline-block; }
        .sacta-link:hover .sacta-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .sacta-hidden { opacity: 1 !important; transform: none !important; }
          .sacta-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Ready to turn communication into useful work"
        className="w-full py-16 md:py-20"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div
            className="rounded-3xl px-8 py-16 md:py-20 text-center"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, #2A2C6E 0%, #0D0E24 55%, #0A0A1D 100%)",
            }}
          >
            <h2
              ref={headingRef}
              className={`sacta-hidden ${headingIn ? "sacta-visible" : ""} text-[clamp(24px,3.6vw,32px)] font-bold tracking-tight text-white mb-4`}
            >
              Ready to turn communication into useful work?
            </h2>

            <p
              ref={copyRef}
              className={`sacta-hidden ${copyIn ? "sacta-visible" : ""} text-[13.5px] leading-relaxed mb-8 max-w-[520px] mx-auto`}
              style={{ color: "#A6A9C8", animationDelay: "0.08s" }}
            >
              Use Sema AI to summarize, search, draft, and follow up across
              your communication workspace — with control and policy built
              in.
            </p>

            <div
              ref={ctaRef}
              className={`sacta-hidden ${ctaIn ? "sacta-visible" : ""} flex flex-wrap items-center justify-center gap-3 mb-6`}
              style={{ animationDelay: "0.14s" }}
            >
              <button className="sacta-btn-primary bg-white text-gray-900 text-[13.5px] font-semibold rounded-full px-6 py-3">
                Watch Sema AI Demo
              </button>
              <button className="sacta-btn-secondary text-white text-[13.5px] font-semibold rounded-full px-6 py-3">
                Start Free
              </button>
              <button className="sacta-btn-secondary text-white text-[13.5px] font-semibold rounded-full px-6 py-3">
                Contact Sales
              </button>
            </div>

            <div
              ref={linkRef}
              className={`sacta-hidden ${linkIn ? "sacta-visible" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#"
                className="sacta-link inline-flex items-center gap-1.5 text-[13px] font-semibold text-white"
              >
                Visit Trust Center
                <span className="sacta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}