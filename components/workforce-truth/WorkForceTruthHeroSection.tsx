"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

export function WorkforceTruthHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: mockupRef, inView: mockupIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ztFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }

        .zt-hidden   { opacity: 0; transform: translateY(28px); }
        .zt-visible  { animation: ztFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .zt-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .zt-visible-x { animation: ztFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        /* Primary button hover */
        .zt-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .zt-btn-primary:hover {
          transform: translateY(-2px);
          background-color: #5C68E0;
          box-shadow: 0 12px 28px rgba(79,91,213,0.50);
        }
        .zt-btn-primary:active { transform: translateY(0); }

        /* Secondary button hover */
        .zt-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease, border-color .25s ease;
        }
        .zt-btn-secondary:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.45);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }
        .zt-btn-secondary:active { transform: translateY(0); }

        /* Mockup image */
        .zt-mockup {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .zt-mockup:hover {
          transform: translateY(-6px);
          box-shadow: 0 34px 70px rgba(0,0,0,0.55);
        }

        @media (prefers-reduced-motion: reduce) {
          .zt-hidden, .zt-visible, .zt-hidden-x, .zt-visible-x {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .zt-btn-primary:hover, .zt-btn-secondary:hover, .zt-mockup:hover {
            transform: none !important;
          }
        }
      `}</style>

      <section
        aria-label="ZoikoTime Workforce Truth hero"
        className="relative w-full overflow-hidden bg-[#0D0B24] py-16 sm:py-20 lg:py-24"
      >
        {/* Ambient glow to echo the artwork lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,0.35) 0%, rgba(79,91,213,0) 70%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p
              ref={badgeRef}
              className={`zt-hidden ${badgeIn ? "zt-visible" : ""} mb-5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              ZoikoTime
            </p>

            {/* Heading */}
            <h1
              ref={headRef}
              className={`zt-hidden ${headIn ? "zt-visible" : ""} mb-5 text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Workforce Truth
            </h1>

            {/* Subtext */}
            <p
              ref={subRef}
              className={`zt-hidden ${subIn ? "zt-visible" : ""} mb-9 max-w-[440px] text-[15px] leading-[1.75] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Turn meetings, decisions, tasks, owners, risks, and approvals into
              verified work records that teams can trust and leaders can review
              responsibly.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`zt-hidden ${ctaIn ? "zt-visible" : ""} flex flex-col items-stretch gap-3 sm:flex-row sm:items-center`}
              style={{ animationDelay: "0.24s" }}
            >
              <Link href="/get-a-demo">
              
              <button
                type="button"
                className="zt-btn-primary rounded-full bg-[#4F5BD5] px-8 py-3 text-[14px] font-semibold text-white"
              >
                Request Demo
              </button>
              </Link>
              <Link href="#">
              <button
                type="button"
                className="zt-btn-secondary rounded-full border border-white/25 bg-white/[0.04] px-8 py-3 text-[14px] font-semibold text-white backdrop-blur-[4px]"
              >
                Press Contact
              </button>
              </Link>
            </div>
          </div>

          {/* RIGHT — mockup image (single asset, not built from markup) */}
          <div
            ref={mockupRef}
            className={`zt-hidden-x ${mockupIn ? "zt-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            
            <img
              src="/workforcetruth/workforce-hero.png"
              alt="ZoikoTime dashboard showing verified meetings, decisions, tasks, and approvals for a workforce team"
              loading="eager"
              className="zt-mockup ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkforceTruthHeroSection;