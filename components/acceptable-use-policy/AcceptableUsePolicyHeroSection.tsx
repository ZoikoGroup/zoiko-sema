"use client";

import { useRouter } from "next/navigation";
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
// e.g. "/images/acceptable-use-policy/hero-bg.png"
const BG_IMAGE_SRC = "/Images/bg.webp";

export default function AcceptableUsePolicyHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes aupsFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .aups-hidden  { opacity: 0; transform: translateY(26px); }
        .aups-visible { animation: aupsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .aups-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .aups-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .aups-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .aups-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -12px rgba(0,0,0,0.4);
          background: #f3f4f8;
        }

        @media (prefers-reduced-motion: reduce) {
          .aups-hidden { opacity: 1 !important; transform: none !important; }
          .aups-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Acceptable use policy hero"
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
            className={`aups-hidden ${badgeIn ? "aups-visible" : ""} inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 mb-6`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND }}>
              Legal
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className={`aups-hidden ${headingIn ? "aups-visible" : ""} text-[clamp(28px,4vw,38px)] font-bold tracking-tight text-white mb-4`}
            style={{ animationDelay: "0.05s" }}
          >
            Acceptable Use Policy
          </h1>

          {/* Copy */}
          <p
            ref={copyRef}
            className={`aups-hidden ${copyIn ? "aups-visible" : ""} text-[14.5px] leading-relaxed mb-9 max-w-[640px] mx-auto`}
            style={{ color: "#C7C9DE", animationDelay: "0.1s" }}
          >
            Understand permitted and prohibited use of Zoiko Sema across
            messaging, meetings, AI features, developer access, and platform
            security.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`aups-hidden ${ctaIn ? "aups-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.15s" }}
          >
            <button onClick={()=>router.push('/pricing')}
            className="aups-btn-primary text-white text-[14px] cursor-pointer font-semibold rounded-full px-7 py-3">
              View Pricing
            </button>
            <button onClick={()=>router.push('/contact')}
            className="aups-btn-secondary bg-white cursor-pointer text-gray-900 text-[14px] font-semibold rounded-full px-7 py-3">
              Contact Us
            </button>
          </div>

        </div>
      </section>
    </>
  );
}