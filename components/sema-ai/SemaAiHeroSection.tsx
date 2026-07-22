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

// TODO: replace with your actual background image path,
// e.g. "/images/sema-ai/hero-bg.png"
const BG_IMAGE_SRC = "/Images/Container.webp/";

// TODO: replace with your actual product mockup image path,
// e.g. "/images/sema-ai/hero-mockup.png"
const MOCKUP_IMAGE_SRC = "/Images/hero-mockup.png";

const checklistRow1 = ["Summaries", "Decisions", "Follow-ups", "Search", "Policy controls"];
const checklistRow2 = ["Confidential Mode-aware"];

export default function SemaAiHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);
  const { ref: checklistRef, inView: checklistIn } = useInView(0.3);
  const { ref: mockupRef, inView: mockupIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes saiFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saiFadeIn {
          from { opacity: 0; transform: translateY(36px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sai-hidden  { opacity: 0; transform: translateY(24px); }
        .sai-visible { animation: saiFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .sai-mockup-hidden  { opacity: 0; transform: translateY(36px) scale(.97); }
        .sai-mockup-visible { animation: saiFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .sai-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .sai-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .sai-btn-secondary {
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .sai-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.4);
        }

        .sai-explore-link { transition: color .2s ease, gap .2s ease; }
        .sai-explore-link .sai-arrow { transition: transform .2s ease; display: inline-block; }
        .sai-explore-link:hover .sai-arrow { transform: translateX(3px); }

        .sai-mockup-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .sai-mockup-wrap:hover { transform: translateY(-6px); }
        .sai-mockup-wrap img { transition: box-shadow .3s ease; }
        .sai-mockup-wrap:hover img {
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55);
        }

        @media (prefers-reduced-motion: reduce) {
          .sai-hidden, .sai-mockup-hidden { opacity: 1 !important; transform: none !important; }
          .sai-visible, .sai-mockup-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Sema AI hero"
        className="w-full pt-20 pb-0 md:pt-24"
        style={{
          backgroundImage: `url(${BG_IMAGE_SRC})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          // fallback tint shown while the image loads / if it's missing
          backgroundColor: "#0D0E24",
        }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 text-center">

          {/* Badge */}
          <div
            ref={badgeRef}
            className={`sai-hidden ${badgeIn ? "sai-visible" : ""} inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6`}
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8FA3FF" }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Sema AI
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className={`sai-hidden ${headingIn ? "sai-visible" : ""} text-[clamp(28px,4.2vw,42px)] font-bold leading-[1.2] tracking-tight text-white mb-4`}
            style={{ animationDelay: "0.05s" }}
          >
            AI that helps conversations become useful work.
          </h1>

          {/* Copy */}
          <p
            ref={copyRef}
            className={`sai-hidden ${copyIn ? "sai-visible" : ""} text-[14.5px] leading-relaxed mb-8 max-w-[600px] mx-auto`}
            style={{ color: "#A6A9C8", animationDelay: "0.1s" }}
          >
            Sema AI summarizes meetings, messages, calls, mail, and workspace
            context; captures decisions; drafts follow-ups; and keeps every
            output governed by your workspace policy.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`sai-hidden ${ctaIn ? "sai-visible" : ""} flex flex-wrap items-center justify-center gap-3 mb-5`}
            style={{ animationDelay: "0.15s" }}
          >
            <button className="sai-btn-primary text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5">
              Watch Sema AI demo
            </button>
            <a href="/start-free" className="sai-btn-secondary text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5 inline-flex items-center justify-center">
              Start Free
            </a>
            <a href="/contact-sales" className="sai-btn-secondary text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5 inline-flex items-center justify-center">
              Contact Sales
            </a>
          </div>

          {/* Explore link */}
          <div
            ref={linkRef}
            className={`sai-hidden ${linkIn ? "sai-visible" : ""} mb-7`}
            style={{ animationDelay: "0.2s" }}
          >
            <a href="/ai-meetings">
            <button
              type="button"
              className="sai-explore-link inline-flex items-center gap-1.5 text-[13px] font-semibold text-white"
            >
              Explore AI Meeting Summaries
              <span className="sai-arrow">→</span>
            </button></a>
          </div>

          {/* Checklist */}
          <div
            ref={checklistRef}
            className={`sai-hidden ${checklistIn ? "sai-visible" : ""} flex flex-col items-center gap-2`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {checklistRow1.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-[12.5px]" style={{ color: "#9CA0C4" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {checklistRow2.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-[12.5px]" style={{ color: "#9CA0C4" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product mockup — complete image, sits at the bottom of the hero */}
        <div
          ref={mockupRef}
          className={`sai-mockup-hidden ${mockupIn ? "sai-mockup-visible" : ""} mt-10 md:mt-14 px-6`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="sai-mockup-wrap mx-auto max-w-[880px]">
            <img
              src={MOCKUP_IMAGE_SRC}
              alt="Sema AI meeting summary and policy context workspace"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
