"use client";

import Link from "next/link";
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
// e.g. "/images/privacy-notice/hero-bg.png"
const BG_IMAGE_SRC = "/Images/bg.webp";

export default function PrivacyNoticeHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes pnsFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pns-hidden  { opacity: 0; transform: translateY(26px); }
        .pns-visible { animation: pnsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .pns-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .pns-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .pns-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .pns-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -12px rgba(0,0,0,0.4);
          background: #f3f4f8;
        }

        @media (prefers-reduced-motion: reduce) {
          .pns-hidden { opacity: 1 !important; transform: none !important; }
          .pns-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Privacy notice hero"
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
            className={`pns-hidden ${badgeIn ? "pns-visible" : ""} inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 mb-6`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND }}>
              Legal
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className={`pns-hidden ${headingIn ? "pns-visible" : ""} text-[clamp(28px,4vw,38px)] font-bold tracking-tight text-white mb-4`}
            style={{ animationDelay: "0.05s" }}
          >
            Privacy Notice
          </h1>

          {/* Copy */}
          <p
            ref={copyRef}
            className={`pns-hidden ${copyIn ? "pns-visible" : ""} text-[14.5px] leading-relaxed mb-9 max-w-[640px] mx-auto`}
            style={{ color: "#C7C9DE", animationDelay: "0.1s" }}
          >
            Understand what information Zoiko Sema collects, how it is used,
            who it may be shared with, and the choices available to you
            across messaging, meetings, AI features, and workspace
            administration.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`pns-hidden ${ctaIn ? "pns-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.15s" }}
          >
            <Link href="/pricing" className="pns-btn-primary inline-flex items-center justify-center text-white text-[14px] font-semibold rounded-full px-7 py-3">
              View Pricing
            </Link>
            <Link href="/contact" className="pns-btn-secondary inline-flex items-center justify-center bg-white text-gray-900 text-[14px] font-semibold rounded-full px-7 py-3">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
