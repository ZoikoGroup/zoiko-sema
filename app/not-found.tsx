"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);


  return (
    <>
      <style>{`
        @keyframes nfFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nfBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(30px,20px) scale(1.06); }
        }
        @keyframes nfBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-24px,-18px) scale(1.05); }
        }
        @keyframes nfShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        @keyframes nfBlink {
          0%,45% { opacity: 1; }
          50%,95% { opacity: 0; }
          100% { opacity: 1; }
        }

        .nf-root { opacity: 0; }
        .nf-mounted { animation: nfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .nf-anim-1,.nf-anim-2,.nf-anim-3,.nf-anim-4,.nf-anim-5 { opacity: 0; }
        .nf-mounted .nf-anim-1 { animation: nfFadeUp .55s cubic-bezier(.22,1,.36,1) .05s forwards; }
        .nf-mounted .nf-anim-2 { animation: nfFadeUp .55s cubic-bezier(.22,1,.36,1) .25s forwards; }
        .nf-mounted .nf-anim-3 { animation: nfFadeUp .55s cubic-bezier(.22,1,.36,1) .35s forwards; }
        .nf-mounted .nf-anim-4 { animation: nfFadeUp .55s cubic-bezier(.22,1,.36,1) .45s forwards; }
        .nf-mounted .nf-anim-5 { animation: nfFadeUp .55s cubic-bezier(.22,1,.36,1) .55s forwards; }

        .nf-blob-1 { animation: nfBlobDrift1 12s ease-in-out infinite alternate; }
        .nf-blob-2 { animation: nfBlobDrift2 16s ease-in-out infinite alternate-reverse; }

        .nf-cursor { animation: nfBlink 1.1s steps(1) infinite; }

        /* big 404 number gradient */
        .nf-num {
          background: linear-gradient(115deg, #474787 0%, #5b5bd6 35%, #2563eb 65%, #3b82f6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: nfGradientShift 6s ease-in-out infinite;
        }
        @keyframes nfGradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* ── Broken chat bubbles scene ── */
        .nf-scene {
          width: 220px;
          height: 150px;
          position: relative;
        }

        @keyframes bubbleFloatA {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          50%      { transform: translateY(-9px) rotate(-2deg); }
        }
        @keyframes bubbleFloatB {
          0%,100% { transform: translateY(0) rotate(5deg); }
          50%      { transform: translateY(-12px) rotate(7deg); }
        }
        .nf-bubble-a { animation: bubbleFloatA 3.4s ease-in-out infinite; transform-origin: center; }
        .nf-bubble-b { animation: bubbleFloatB 4s ease-in-out infinite .3s; transform-origin: center; }

        /* drop shadows that breathe opposite to float — grounds the bubbles */
        @keyframes shadowBreatheA {
          0%,100% { opacity: 0.18; transform: scaleX(1); }
          50%      { opacity: 0.08; transform: scaleX(0.82); }
        }
        @keyframes shadowBreatheB {
          0%,100% { opacity: 0.16; transform: scaleX(1); }
          50%      { opacity: 0.07; transform: scaleX(0.8); }
        }
        .nf-shadow-a { animation: shadowBreatheA 3.4s ease-in-out infinite; transform-origin: center; }
        .nf-shadow-b { animation: shadowBreatheB 4s ease-in-out infinite .3s; transform-origin: center; }

        /* sequential typing dots — like a real "..." indicator */
        @keyframes dotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-3.5px); opacity: 1; }
        }
        .nf-dot-1 { animation: dotBounce 1.3s ease-in-out infinite; }
        .nf-dot-2 { animation: dotBounce 1.3s ease-in-out infinite .15s; }
        .nf-dot-3 { animation: dotBounce 1.3s ease-in-out infinite .3s; }

        /* faded text lines shimmer — feels like garbled/corrupted signal */
        @keyframes lineShimmer {
          0%,100% { opacity: 0.55; }
          50%      { opacity: 0.95; }
        }
        .nf-line-1 { animation: lineShimmer 2.2s ease-in-out infinite; }
        .nf-line-2 { animation: lineShimmer 2.2s ease-in-out infinite .4s; }

        /* zigzag broken-link bolt — strike + flash, more dynamic than plain flicker */
        @keyframes boltStrike {
          0%   { opacity: 0;   transform: scale(0.6) rotate(-6deg); }
          8%   { opacity: 1;   transform: scale(1.15) rotate(2deg); }
          14%  { opacity: 0.85; transform: scale(0.95) rotate(-1deg); }
          20%  { opacity: 1;   transform: scale(1.05) rotate(1deg); }
          30%  { opacity: 0.3; transform: scale(0.9) rotate(0deg); }
          38%  { opacity: 1;   transform: scale(1); }
          70%  { opacity: 1;   transform: scale(1); }
          78%  { opacity: 0.2; transform: scale(0.85); }
          86%  { opacity: 1;   transform: scale(1.08); }
          100% { opacity: 0;   transform: scale(0.6) rotate(4deg); }
        }
        .nf-bolt { animation: boltStrike 2.8s ease-in-out infinite; transform-origin: center; }

        /* radiating glow ring at the break point, pulses outward on each "strike" */
        @keyframes boltGlow {
          0%, 35% { opacity: 0; transform: scale(0.4); }
          42%      { opacity: 0.55; transform: scale(1); }
          60%      { opacity: 0; transform: scale(1.6); }
          100%     { opacity: 0; transform: scale(0.4); }
        }
        .nf-bolt-glow { animation: boltGlow 2.8s ease-in-out infinite; transform-origin: center; }

        /* tiny spark particles bursting from the break point */
        @keyframes sparkBurst1 {
          0%, 34% { opacity: 0; transform: translate(0,0) scale(0.4); }
          40%      { opacity: 1; transform: translate(-7px,-9px) scale(1); }
          60%      { opacity: 0; transform: translate(-13px,-16px) scale(0.3); }
          100%     { opacity: 0; }
        }
        @keyframes sparkBurst2 {
          0%, 34% { opacity: 0; transform: translate(0,0) scale(0.4); }
          40%      { opacity: 1; transform: translate(8px,-6px) scale(1); }
          60%      { opacity: 0; transform: translate(15px,-11px) scale(0.3); }
          100%     { opacity: 0; }
        }
        @keyframes sparkBurst3 {
          0%, 34% { opacity: 0; transform: translate(0,0) scale(0.4); }
          40%      { opacity: 1; transform: translate(2px,9px) scale(1); }
          60%      { opacity: 0; transform: translate(4px,16px) scale(0.3); }
          100%     { opacity: 0; }
        }
        .nf-spark-1 { animation: sparkBurst1 2.8s ease-out infinite; }
        .nf-spark-2 { animation: sparkBurst2 2.8s ease-out infinite; }
        .nf-spark-3 { animation: sparkBurst3 2.8s ease-out infinite; }

        /* the two halves of the snapped connector line drift apart, synced loosely to the strike */
        @keyframes driftLeft {
          0%,100% { transform: translateX(0); }
          40%      { transform: translateX(-5px); }
          70%      { transform: translateX(-2px); }
        }
        @keyframes driftRight {
          0%,100% { transform: translateX(0); }
          40%      { transform: translateX(5px); }
          70%      { transform: translateX(2px); }
        }
        .nf-link-left  { animation: driftLeft 2.8s ease-in-out infinite; }
        .nf-link-right { animation: driftRight 2.8s ease-in-out infinite; }

        /* small "x" status dot pulse on bubble B (signal lost) — syncs with strike for cause/effect feel */
        @keyframes statusPulse {
          0%, 34%  { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); transform: scale(1); }
          42%       { box-shadow: 0 0 0 8px rgba(239,68,68,0); transform: scale(1.18); }
          60%       { box-shadow: 0 0 0 0 rgba(239,68,68,0); transform: scale(1); }
          100%      { box-shadow: 0 0 0 0 rgba(239,68,68,0); transform: scale(1); }
        }
        .nf-status-dot { animation: statusPulse 2.8s ease-in-out infinite; transform-origin: center; }

        /* primary button */
        .nf-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .nf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(71,71,135,0.35);
        }
        .nf-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .nf-btn-primary:hover::after { animation: nfShimmer .65s ease forwards; }
        .nf-btn-primary:active { transform: translateY(0) scale(0.98); }

        /* secondary button */
        .nf-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .nf-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15,15,40,0.10);
          border-color: rgba(71,71,135,0.35);
          background-color: #fafaff;
        }
        .nf-btn-secondary:active { transform: translateY(0) scale(0.98); }

        .nf-btn-arrow { display: inline-block; transition: transform .2s ease; }
        a:hover .nf-btn-arrow { transform: translateX(4px); }

        /* link list hover */
        .nf-quick-link { transition: color .2s ease, padding-left .2s ease; }
        .nf-quick-link:hover { padding-left: 4px; }

        @media (prefers-reduced-motion: reduce) {
          .nf-root, .nf-anim-1, .nf-anim-2, .nf-anim-3, .nf-anim-4, .nf-anim-5 {
            opacity: 1 !important; animation: none !important;
          }
          .nf-blob-1, .nf-blob-2, .nf-num, .nf-bubble-a, .nf-bubble-b,
          .nf-bolt, .nf-link-left, .nf-link-right, .nf-status-dot, .nf-cursor {
            animation: none !important;
          }
          .nf-btn-primary:hover, .nf-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <main
  className="nf-root nf-mounted relative min-h-screen w-full overflow-hidden flex items-center justify-center"
  style={{ backgroundColor: "#F4F6FE" }}
>
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="nf-blob-1 pointer-events-none absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "#a5b4fc" }}
        />
        <div
          aria-hidden="true"
          className="nf-blob-2 pointer-events-none absolute bottom-[-120px] right-[-80px] w-[440px] h-[440px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "#474787" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center flex flex-col items-center">

          {/* ── Broken chat bubbles scene (replaces orbiting S) ── */}
          <div className="nf-anim-1 nf-scene mb-4" aria-hidden="true">
            <svg viewBox="0 0 220 150" width="220" height="150" fill="none">

              {/* dotted connector — left half drifting */}
              <g className="nf-link-left">
                <path
                  d="M70 70 L95 70"
                  stroke="#c7cbe8"
                  strokeWidth="2.5"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                />
              </g>
              {/* dotted connector — right half drifting */}
              <g className="nf-link-right">
                <path
                  d="M125 70 L150 70"
                  stroke="#c7cbe8"
                  strokeWidth="2.5"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                />
              </g>

              {/* broken-link lightning bolt in the gap */}
              <g className="nf-bolt">
                <path
                  d="M104 58 L113 70 L107 70 L116 84"
                  stroke="#ef4444"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>

              {/* ── Bubble A — left, indigo, "sent" message ── */}
              <g className="nf-bubble-a">
                <rect x="20" y="34" width="62" height="42" rx="14" fill="#474787" />
                <path d="M34 76 L34 88 L46 76 Z" fill="#474787" />
                {/* three dots = typing */}
                <circle cx="38" cy="55" r="3.2" fill="#ffffff" fillOpacity="0.9" />
                <circle cx="51" cy="55" r="3.2" fill="#ffffff" fillOpacity="0.65" />
                <circle cx="64" cy="55" r="3.2" fill="#ffffff" fillOpacity="0.4" />
              </g>

              {/* ── Bubble B — right, blue outline, "undelivered" ── */}
              <g className="nf-bubble-b">
                <rect
                  x="138" y="34" width="62" height="42" rx="14"
                  fill="#ffffff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <path d="M174 76 L174 88 L186 76 Z" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
                {/* faded lines representing lost text */}
                <rect x="150" y="48" width="34" height="3.5" rx="1.75" fill="#dfe2f5" />
                <rect x="150" y="57" width="22" height="3.5" rx="1.75" fill="#dfe2f5" />

                {/* status dot — signal lost */}
                <circle cx="194" cy="38" r="6" fill="#ef4444" className="nf-status-dot" />
                <path
                  d="M191.5 35.5 L196.5 40.5 M196.5 35.5 L191.5 40.5"
                  stroke="#ffffff"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          {/* ── Big 404 ── */}
          <h1
            className="nf-anim-2 nf-num font-extrabold leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(72px,12vw,128px)" }}
          >
            404
          </h1>

          {/* ── Heading ── */}
          <h2
            className="nf-anim-3 font-bold leading-snug text-[#15131F] mb-4"
            style={{ fontSize: "clamp(20px,2.6vw,28px)" }}
          >
            This conversation got disconnected.
            <span className="nf-cursor text-[#2563eb]">|</span>
          </h2>

          {/* ── Sub-copy ── */}
          <p className="nf-anim-3 text-[15px] leading-relaxed text-[#5C5870] max-w-[440px] mb-9">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or the link is
            broken. Let&apos;s get you back to a clearer signal.
          </p>

          {/* ── CTAs ── */}
          <div className="nf-anim-4 flex flex-wrap items-center justify-center gap-3 mb-12">
            <Link
              href="/"
              className="nf-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#474787" }}
            >
              Back to home
              <span aria-hidden="true" className="nf-btn-arrow">→</span>
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="nf-btn-secondary inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-medium text-gray-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Go back
            </button>
          </div>

          {/* ── Quick links ── */}
          <nav aria-label="Quick links" className="nf-anim-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px]">
            <Link href="/product/overview" className="nf-quick-link text-[#474787] hover:text-[#2563eb] font-medium">
              Product
            </Link>
            <span className="text-gray-300">·</span>
            <Link href="/pricing" className="nf-quick-link text-[#474787] hover:text-[#2563eb] font-medium">
              Pricing
            </Link>
            <span className="text-gray-300">·</span>
            <Link href="/help-center" className="nf-quick-link text-[#474787] hover:text-[#2563eb] font-medium">
              Help Center
            </Link>
            <span className="text-gray-300">·</span>
            <Link href="/contact" className="nf-quick-link text-[#474787] hover:text-[#2563eb] font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}