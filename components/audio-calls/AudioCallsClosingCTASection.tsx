"use client";

import { useRouter } from "next/navigation";
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

export default function AudioCallsClosingCTASection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.1);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes ctaFadeUp {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cta-hidden  { opacity: 0; transform: translateY(32px) scale(0.98); }
        .cta-visible { animation: ctaFadeUp .75s cubic-bezier(.22,1,.36,1) forwards; }

        .cta-item { opacity: 0; transform: translateY(16px); }
        .cta-card.cta-visible .cta-item {
          animation: ctaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cta-card {
          transition: box-shadow .4s ease, transform .4s cubic-bezier(.22,1,.36,1);
        }
        .cta-card:hover {
          box-shadow: 0 30px 60px rgba(52,87,232,0.28);
        }

        /* Primary — solid blue, matches screenshot */
        .cta-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
        }
        .cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(52,87,232,0.45);
          filter: brightness(1.08);
        }
        .cta-btn-primary:active { transform: translateY(0); }

        /* Outline buttons */
        .cta-btn-outline { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .cta-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.45);
        }
        .cta-btn-outline:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .cta-hidden, .cta-visible, .cta-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cta-card:hover, .cta-btn-primary:hover, .cta-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-[#F3F2FD] pb-16 pt-16 sm:pb-20 md:pb-24 px-5 sm:px-8"
      >
        <div
          ref={cardRef}
          className={`cta-card cta-hidden ${cardIn ? "cta-visible" : ""} mx-auto w-full max-w-6xl rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center`}
          style={{
            // Layered background: two soft radial glows (blue + purple)
            // over a diagonal dark-navy linear gradient base — matches
            // the color palette from the Figma export (image 2).
            background: `
              radial-gradient(ellipse 60% 55% at 28% 18%, rgba(52,87,232,0.40) 0%, rgba(52,87,232,0) 70%),
              radial-gradient(ellipse 55% 50% at 68% 12%, rgba(80,58,215,0.40) 0%, rgba(80,58,215,0) 70%),
              linear-gradient(135deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
            `,
          }}
        >
          <h2 className="cta-item text-[clamp(22px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white mb-5">
            Start the conversation without slowing the work.
          </h2>

          <p
            className="cta-item text-[14px] sm:text-[15px] leading-[1.75] text-white/60 max-w-[620px] mx-auto mb-9"
            style={{ animationDelay: "0.08s" }}
          >
            Use Zoiko Sema Audio Calls to move from message to voice, capture
            decisions, govern AI-assisted summaries, and keep team
            communication connected to the workspace.
          </p>

          <div
            className="cta-item flex flex-col sm:flex-row items-center justify-center gap-3 mb-7"
            style={{ animationDelay: "0.16s" }}
          >
            <button onClick={()=>router.push("/start-free")}
              className="cta-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-white"
              style={{ backgroundColor: "#3457E8" }}
            >
              Start free
            </button>
            <button onClick={()=>router.push("/get-a-demo")}
            className="cta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Get a demo
            </button>
            <button onClick={()=>router.push("/zoikotime-integrations")}
             className="cta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Explore ZoikoTime integration
            </button>
          </div>

          <p
            className="cta-item text-[12px] text-white/35"
            style={{ animationDelay: "0.22s" }}
          >
            Built for individuals, teams, and organizations that need fast
            voice collaboration with business-grade control.
          </p>
        </div>
      </section>
    </>
  );
}