"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other pages. */
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

const BRAND = "#3457E8";

// TODO: replace with your actual background image path,
// e.g. "/images/security-policy/hero-bg.png"
const BG_IMAGE_SRC = "/Images/bg.webp";

export default function SecurityPolicyHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes spsFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sps-hidden  { opacity: 0; transform: translateY(26px); }
        .sps-visible { animation: spsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sps-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .sps-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .sps-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .sps-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -12px rgba(0,0,0,0.4);
          background: #f3f4f8;
        }

        @media (prefers-reduced-motion: reduce) {
          .sps-hidden { opacity: 1 !important; transform: none !important; }
          .sps-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Security policy hero"
        className="w-full py-24 md:py-28"
        style={{
          backgroundImage: `url(${BG_IMAGE_SRC})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // fallback tint shown while the image loads / if it's missing
          backgroundColor: "#14152B",
        }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 text-center">

          {/* Badge */}
          <div
            ref={badgeRef}
            className={`sps-hidden ${badgeIn ? "sps-visible" : ""} inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 mb-6`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND }}>
              Legal
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className={`sps-hidden ${headingIn ? "sps-visible" : ""} text-[clamp(28px,4vw,38px)] font-bold tracking-tight text-white mb-4`}
            style={{ animationDelay: "0.05s" }}
          >
            Security Policy
          </h1>

          {/* Copy */}
          <p
            ref={copyRef}
            className={`sps-hidden ${copyIn ? "sps-visible" : ""} text-[14.5px] leading-relaxed mb-9 max-w-[660px] mx-auto`}
            style={{ color: "#C7C9DE", animationDelay: "0.1s" }}
          >
            Understand Zoiko Sema&apos;s security program, access controls, data
            protection practices, incident response, and shared
            responsibilities between Zoiko Sema and customers.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`sps-hidden ${ctaIn ? "sps-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.15s" }}
          >
            <button className="sps-btn-primary text-white text-[14px] font-semibold rounded-full px-7 py-3">
              View Pricing
            </button>
            <button className="sps-btn-secondary bg-white text-gray-900 text-[14px] font-semibold rounded-full px-7 py-3">
              Contact Us
            </button>
          </div>

        </div>
      </section>
    </>
  );
}