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

const BRAND = "#3457E8";

// TODO: replace with your actual image path, e.g. "/images/individual-productivity/hero.png"
const HERO_IMAGE_SRC = "/Images/individual-productivity.webp";

export default function IndividualProductivityHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.2);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);
  const { ref: mockRef, inView: mockIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ipsFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ipsFadeIn {
          from { opacity: 0; transform: translateY(18px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ips-hidden  { opacity: 0; transform: translateY(32px); }
        .ips-visible { animation: ipsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ips-mock-hidden  { opacity: 0; transform: translateY(40px) scale(.97); }
        .ips-mock-visible { animation: ipsFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* CTA hover micro-interactions */
        .ips-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ips-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -8px rgba(52,87,232,0.55);
          background: #2c48c9;
        }
        .ips-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .ips-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #c7cff9;
          box-shadow: 0 8px 20px -10px rgba(15,23,42,0.18);
        }

        /* Hero image hover lift */
        .ips-image-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ips-image-wrap:hover { transform: translateY(-6px); }
        .ips-image-wrap img {
          transition: box-shadow .3s ease;
        }
        .ips-image-wrap:hover img {
          box-shadow: 0 24px 48px -16px rgba(52,87,232,0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .ips-hidden, .ips-mock-hidden { opacity: 1 !important; transform: none !important; }
          .ips-visible, .ips-mock-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Individual productivity hero"
        className="w-full bg-[#F3F2FD] py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — Copy */}
            <div>
              {/* Badge */}
              <div
                ref={badgeRef}
                className={`ips-hidden ${badgeIn ? "ips-visible" : ""} inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 mb-6`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: BRAND }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-600">
                  Individual Productivity
                </span>
              </div>

              {/* Heading */}
              <h1
                ref={headingRef}
                className={`ips-hidden ${headingIn ? "ips-visible" : ""} text-[clamp(30px,4.4vw,44px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-5`}
                style={{ animationDelay: "0.05s" }}
              >
                Personal productivity built for focus,{" "}
                <span style={{ color: BRAND }}>follow-through, and control.</span>
              </h1>

              {/* Copy */}
              <p
                ref={copyRef}
                className={`ips-hidden ${copyIn ? "ips-visible" : ""} text-[15.5px] leading-[1.75] text-gray-500 max-w-[520px] mb-8`}
                style={{ animationDelay: "0.1s" }}
              >
                Plan your day, prepare for meetings, capture notes, organize
                follow-ups, and keep work moving with AI-assisted context
                across Zoiko Sema.
              </p>

              {/* CTAs */}
              <div
                ref={ctaRef}
                className={`ips-hidden ${ctaIn ? "ips-visible" : ""} flex flex-wrap items-center gap-3 mb-8`}
                style={{ animationDelay: "0.15s" }}
              >
                <button className="ips-btn-primary text-white text-[14px] font-semibold rounded-full px-6 py-3">
                  Get a demo
                </button>
                <button className="ips-btn-secondary bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3 border border-gray-200">
                  Start free
                </button>
              </div>

              {/* Footnote */}
              <p
                ref={footRef}
                className={`ips-hidden ${footIn ? "ips-visible" : ""} text-[13px] leading-relaxed text-gray-400 max-w-[460px]`}
                style={{ animationDelay: "0.2s" }}
              >
                Built for focused professionals, growing teams, and business
                workflows that need clarity without tool overload.
              </p>
            </div>

            {/* RIGHT — Hero image */}
            <div
              ref={mockRef}
              className={`ips-mock-hidden ${mockIn ? "ips-mock-visible" : ""}`}
            >
              <div className="ips-image-wrap mx-auto max-w-[600px]">
                <img
                  src={HERO_IMAGE_SRC}
                  alt="Individual productivity dashboard overview"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}