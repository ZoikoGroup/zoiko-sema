"use client";

import React, { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d % 3) + 1), 480);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @keyframes zlFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .zl-root { animation: zlFadeIn .35s ease forwards; }

        @keyframes zlDrift1 { from { transform: translate(0,0); } to { transform: translate(26px,16px); } }
        @keyframes zlDrift2 { from { transform: translate(0,0); } to { transform: translate(-22px,-14px); } }
        .zl-blob-1 { animation: zlDrift1 7s ease-in-out infinite alternate; }
        .zl-blob-2 { animation: zlDrift2 8s ease-in-out infinite alternate; }

        /* ripple rings, expanding outward like an incoming call */
        @keyframes zlRipple {
          0%   { transform: scale(0.75); opacity: .55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .zl-ripple { animation: zlRipple 2.6s cubic-bezier(.2,.6,.35,1) infinite; }
        .zl-ripple-2 { animation-delay: .65s; }
        .zl-ripple-3 { animation-delay: 1.3s; }

        /* big avatar disc gently breathing */
        @keyframes zlAvatarBreathe {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.035); }
        }
        .zl-avatar-disc { animation: zlAvatarBreathe 2.6s ease-in-out infinite; }

        @keyframes zlAvatarBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .zl-avatar-figure { animation: zlAvatarBob 3.2s ease-in-out infinite; }

        /* status ring spinning around the disc */
        @keyframes zlSpin { to { transform: rotate(360deg); } }
        .zl-spin-ring { animation: zlSpin 1.4s linear infinite; transform-origin: center; }

        @keyframes zlChipPulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
        .zl-chip-dot { animation: zlChipPulse .9s ease-in-out infinite; }

        /* control pill icons, quiet idle state */
        .zl-ctrl { transition: transform .2s ease; }

        @media (prefers-reduced-motion: reduce) {
          .zl-blob-1, .zl-blob-2, .zl-ripple, .zl-ripple-2, .zl-ripple-3,
          .zl-avatar-disc, .zl-avatar-figure, .zl-spin-ring, .zl-chip-dot {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="zl-root fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#12122E" }}
        role="status"
        aria-live="polite"
        aria-label="Connecting to Zoiko Sema"
      >
        <div
          className="zl-blob-1 pointer-events-none absolute -top-32 -left-24 w-[440px] h-[440px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "#2E63E0" }}
          aria-hidden="true"
        />
        <div
          className="zl-blob-2 pointer-events-none absolute -bottom-32 -right-24 w-[440px] h-[440px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "#40407C" }}
          aria-hidden="true"
        />

        {/* ── connecting chip ── */}
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3.5 py-1.5 mb-10">
          <span className="zl-chip-dot block w-1.5 h-1.5 rounded-full" style={{ background: "#FFD166" }} />
          <span className="text-[11px] font-bold tracking-[0.14em] text-white/80">CONNECTING</span>
        </div>

        {/* ── big avatar with ripple rings ── */}
        <div className="relative flex items-center justify-center mb-9" style={{ width: 220, height: 220 }}>
          <span className="zl-ripple absolute inset-0 rounded-full border-2" style={{ borderColor: "#2E63E0" }} aria-hidden="true" />
          <span className="zl-ripple zl-ripple-2 absolute inset-0 rounded-full border-2" style={{ borderColor: "#4E7CF0" }} aria-hidden="true" />
          <span className="zl-ripple zl-ripple-3 absolute inset-0 rounded-full border-2" style={{ borderColor: "#6C93F0" }} aria-hidden="true" />

          <div
            className="zl-avatar-disc relative w-[132px] h-[132px] rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(155deg, #40407C, #2E63E0)",
              boxShadow: "0 20px 50px rgba(46,99,224,0.35)",
            }}
          >
            <svg className="zl-avatar-figure" width="58" height="58" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="11" r="6.5" fill="#fff" />
              <path d="M3 27c1.6-7 7.5-9.6 12-9.6S26.4 20 28 27" fill="#fff" opacity="0.92" />
            </svg>

            {/* spinning progress ring hugging the disc edge */}
            <svg className="zl-spin-ring absolute -inset-2" width="148" height="148" viewBox="0 0 148 148" fill="none" aria-hidden="true">
              <circle cx="74" cy="74" r="70" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" strokeDasharray="30 190" />
            </svg>
          </div>
        </div>

        {/* ── status text ── */}
        <p className="text-[19px] font-bold text-white mb-1.5 tracking-tight">
          Connecting to Zoiko Sema{".".repeat(dots)}
        </p>
        <p className="text-[13px] text-white/50 mb-10">Setting up your room, hang tight</p>

        {/* ── idle call-control pill, for flavor ── */}
        <div className="flex items-center gap-3 rounded-full px-3 py-2.5" style={{ background: "#1B1B3C" }}>
          <div className="zl-ctrl w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#26264E" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" stroke="#fff" strokeWidth="1.8" />
              <path d="M6 11a6 6 0 0 0 12 0M12 19v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="zl-ctrl w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#26264E" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="12" height="12" rx="2.5" stroke="#fff" strokeWidth="1.8" />
              <path d="M20 8.5 15.5 12l4.5 3.5v-7Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="zl-ctrl w-11 h-9 rounded-full flex items-center justify-center" style={{ background: "#FF5A5A" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 12c4-4.5 14-4.5 18 0l-2.6 3.3a1.6 1.6 0 0 1-2 .3l-2-1.2a1.6 1.6 0 0 0-1.8.1 6.4 6.4 0 0 1-5.2 0 1.6 1.6 0 0 0-1.8-.1l-2 1.2a1.6 1.6 0 0 1-2-.3L3 12Z"
                fill="#fff" transform="rotate(135 12 12)" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}