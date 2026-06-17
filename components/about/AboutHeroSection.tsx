"use client";

import React, { useEffect, useState, useRef } from "react";

export default function AboutHeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  

  return (
    <>
      <style>{`
        @keyframes ahFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ahBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(28px,18px) scale(1.05); }
        }
        @keyframes ahBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-22px,-16px) scale(1.04); }
        }
        @keyframes ahPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow:0 0 0 5px rgba(71,71,135,0); }
        }
        @keyframes ahShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }

        .ah-blob-1 { animation: ahBlobDrift1 13s ease-in-out infinite alternate; }
        .ah-blob-2 { animation: ahBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .ah-badge-dot { animation: ahPulse 2.4s ease-in-out infinite; }

        /* entrance — trigger only after mount class added */
        .ah-a1,.ah-a2,.ah-a3,.ah-a4 { opacity:0; }
        .ah-mounted .ah-a1 { animation: ahFadeUp .5s ease .05s forwards; }
        .ah-mounted .ah-a2 { animation: ahFadeUp .5s ease .18s forwards; }
        .ah-mounted .ah-a3 { animation: ahFadeUp .5s ease .30s forwards; }
        .ah-mounted .ah-a4 { animation: ahFadeUp .5s ease .44s forwards; }

        /* primary button shimmer */
        .ah-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .ah-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .ah-btn-p:hover::after { animation: ahShimmer .65s ease forwards; }
        .ah-btn-p:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.35); }
        .ah-btn-p:active { transform:translateY(0); }

        /* arrow slides on hover */
        .ah-arrow { display:inline-block; transition:transform .2s ease; }
        .ah-btn-p:hover .ah-arrow { transform:translateX(3px); }

        /* secondary button */
        .ah-btn-s {
          transition:background .2s,border-color .2s,transform .2s,box-shadow .2s;
        }
        .ah-btn-s:hover {
          background:#fff;
          border-color:#a5b4fc;
          transform:translateY(-2px);
          box-shadow:0 6px 18px rgba(0,0,0,0.08);
        }
        .ah-btn-s:active { transform:translateY(0); }

        /* play icon scale */
        .ah-play { transition:background .2s,transform .2s; }
        .ah-btn-s:hover .ah-play { background:#474787!important; transform:scale(1.1); }

        /* badge hover */
        .ah-badge { transition:box-shadow .25s,transform .25s; }
        .ah-badge:hover { box-shadow:0 4px 14px rgba(71,71,135,0.18); transform:translateY(-1px); }

        @media (prefers-reduced-motion:reduce) {
          .ah-a1,.ah-a2,.ah-a3,.ah-a4 { opacity:1!important; animation:none!important; }
          .ah-blob-1,.ah-blob-2,.ah-badge-dot { animation:none!important; }
          .ah-btn-p:hover,.ah-btn-s:hover { transform:none; }
        }
      `}</style>

      <section
  ref={heroRef}
  aria-label="About Zoiko Sema — hero"
  className="relative flex items-center justify-center overflow-hidden min-h-[82vh] ah-mounted"
  style={{ background: "#ECF3FF" }}
>
        {/* ── background blobs ── */}
        <div
          aria-hidden="true"
          className="ah-blob-1 pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full opacity-25 blur-[90px]"
          style={{ background: "#c7d2fe" }}
        />
        <div
          aria-hidden="true"
          className="ah-blob-2 pointer-events-none absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full opacity-20 blur-[80px]"
          style={{ background: "#a5b4fc" }}
        />

        {/* ── content — centred ── */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-10 py-24 flex flex-col items-center text-center">

          {/* Badge */}
          <span
            className="ah-a1 ah-badge inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm text-sm font-medium cursor-default"
            style={{ borderColor: "#c7d2fe", color: "#474787" }}
          >
            <span
              aria-hidden="true"
              className="ah-badge-dot w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#474787" }}
            />
            About Zoiko Sema
          </span>

          {/* Headline */}
          <h1
            className="ah-a2 font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
            style={{ fontSize: "clamp(32px,5vw,60px)" }}
          >
            Communication that turns
            <br />conversations into clarity
          </h1>

          {/* Sub-copy */}
          <p
            className="ah-a3 text-[15.5px] leading-[1.8] text-gray-500 max-w-[620px] mb-10"
          >
            Zoiko Sema is an intelligent communication platform for businesses, teams and
            individuals combining secure messaging, audio calls, video meetings, AI-powered
            summaries, collaboration and a route into ZoikoTime workforce truth for
            organizations that need deeper verification.
          </p>

          {/* CTAs */}
          <div className="ah-a4 flex flex-wrap items-center justify-center gap-3">
            {/* Primary */}
            <a
              href="#start"
              className="ah-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#474787" }}
            >
              Start free
              <span className="ah-arrow text-base" aria-hidden="true">→</span>
            </a>

            {/* Secondary */}
            <a
              href="#demo"
              className="ah-btn-s inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-[15px] font-medium text-gray-700"
            >
              <span
                aria-hidden="true"
                className="ah-play flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: "#6366f1" }}
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                </svg>
              </span>
              Get a demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}