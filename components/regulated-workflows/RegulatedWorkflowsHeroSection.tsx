"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other pages. */
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

// TODO: replace with your actual image path, e.g. "/images/regulated-workflows/hero.png"
const HERO_IMAGE_SRC = "/Images/regulated-workflows-hero.webp";

export default function RegulatedWorkflowsHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.2);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes rwsFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rwsFadeIn {
          from { opacity: 0; transform: translateY(40px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .rws-hidden  { opacity: 0; transform: translateY(32px); }
        .rws-visible { animation: rwsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .rws-image-hidden  { opacity: 0; transform: translateY(40px) scale(.97); }
        .rws-image-visible { animation: rwsFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .rws-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .rws-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -8px rgba(52,87,232,0.55);
          background: #2c48c9;
        }
        .rws-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .rws-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #c7cff9;
          box-shadow: 0 8px 20px -10px rgba(15,23,42,0.18);
        }

        .rws-image-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .rws-image-wrap:hover { transform: translateY(-6px); }
        .rws-image-wrap img { transition: filter .3s ease; }
        .rws-image-wrap:hover img {
          filter: drop-shadow(0 24px 40px rgba(15,23,42,0.2));
        }

        @media (prefers-reduced-motion: reduce) {
          .rws-hidden, .rws-image-hidden { opacity: 1 !important; transform: none !important; }
          .rws-visible, .rws-image-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Regulated workflows hero"
        className="w-full py-20 md:py-28"
        style={{ background: "#EBF0FB" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — Copy */}
            <div>
              {/* Badge */}
              <div
                ref={badgeRef}
                className={`rws-hidden ${badgeIn ? "rws-visible" : ""} inline-flex items-center rounded-full border border-gray-300 bg-white px-3.5 py-1.5 mb-6`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-700">
                  Regulated Workflows
                </span>
              </div>

              {/* Heading */}
              <h1
                ref={headingRef}
                className={`rws-hidden ${headingIn ? "rws-visible" : ""} text-[clamp(30px,4.4vw,46px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-5`}
                style={{ animationDelay: "0.05s" }}
              >
                Communication workflows with{" "}
                <span style={{ color: BRAND }}>
                  controls, evidence, and auditability.
                </span>
              </h1>

              {/* Copy */}
              <p
                ref={copyRef}
                className={`rws-hidden ${copyIn ? "rws-visible" : ""} text-[15.5px] leading-[1.75] text-gray-500 max-w-[500px] mb-8`}
                style={{ animationDelay: "0.1s" }}
              >
                Create governed spaces for legal, healthcare, finance,
                public-sector, and compliance-sensitive collaboration without
                forcing teams into slow manual process.
              </p>

              {/* CTAs */}
              <div
                ref={ctaRef}
                className={`rws-hidden ${ctaIn ? "rws-visible" : ""} flex flex-wrap items-center gap-3 mb-8`}
                style={{ animationDelay: "0.15s" }}
              >
                <button className="rws-btn-primary text-white text-[14px] font-semibold rounded-full px-6 py-3">
                  Get a demo
                </button>
                <button className="rws-btn-secondary bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3 border border-gray-200">
                  Talk to sales
                </button>
              </div>

              {/* Footnote */}
              <p
                ref={footRef}
                className={`rws-hidden ${footIn ? "rws-visible" : ""} text-[13px] leading-relaxed text-gray-400 max-w-[440px]`}
                style={{ animationDelay: "0.2s" }}
              >
                Designed for sensitive communication, approval-heavy work,
                auditable collaboration, and privacy-respecting governance.
              </p>
            </div>

            {/* RIGHT — complete image */}
            <div
              ref={imageRef}
              className={`rws-image-hidden ${imageIn ? "rws-image-visible" : ""}`}
            >
              <div className="rws-image-wrap">
                <img
                  src={HERO_IMAGE_SRC}
                  alt="Zoiko Sema regulated workflows case workspace"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}