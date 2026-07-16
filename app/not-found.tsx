"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type SparkVars = React.CSSProperties & {
  "--sx"?: string;
  "--sy"?: string;
};

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes zsFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zs-root { opacity: 0; }
        .zs-mounted { animation: zsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }
        .zs-anim-1,.zs-anim-2,.zs-anim-3,.zs-anim-4,.zs-anim-5 { opacity: 0; }
        .zs-mounted .zs-anim-1 { animation: zsFadeUp .55s cubic-bezier(.22,1,.36,1) .05s forwards; }
        .zs-mounted .zs-anim-2 { animation: zsFadeUp .55s cubic-bezier(.22,1,.36,1) .22s forwards; }
        .zs-mounted .zs-anim-3 { animation: zsFadeUp .55s cubic-bezier(.22,1,.36,1) .34s forwards; }
        .zs-mounted .zs-anim-4 { animation: zsFadeUp .55s cubic-bezier(.22,1,.36,1) .46s forwards; }
        .zs-mounted .zs-anim-5 { animation: zsFadeUp .55s cubic-bezier(.22,1,.36,1) .58s forwards; }

        /* ── Diagonal color-block backdrop ── */
        .zs-wedge-a {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #302f66 0%, #40407C 55%, #46479A 100%);
          clip-path: polygon(0 0, 68% 0, 40% 100%, 0 100%);
        }
        .zs-wedge-b {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #2650BE 0%, #2E63E0 55%, #4E7CF0 100%);
          clip-path: polygon(68% 0, 100% 0, 100% 100%, 40% 100%);
        }
        @media (max-width: 720px) {
          .zs-wedge-a { clip-path: polygon(0 0, 100% 0, 100% 42%, 0 58%); }
          .zs-wedge-b { clip-path: polygon(0 42%, 100% 58%, 100% 100%, 0 100%); }
        }

        @keyframes zsSheen {
          0%   { transform: translateX(-60%) skewX(-12deg); opacity: 0; }
          8%   { opacity: .5; }
          40%  { opacity: 0; }
          100% { transform: translateX(160%) skewX(-12deg); opacity: 0; }
        }
        .zs-sheen {
          position: absolute; top: -10%; width: 22%; height: 120%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          animation: zsSheen 7s ease-in-out infinite;
        }
        .zs-sheen-2 { animation-delay: 3.4s; }

        @keyframes zsBigNum {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        .zs-bignum {
          position: absolute;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: rgba(255,255,255,0.14);
          line-height: 0.8;
          user-select: none;
          animation: zsBigNum 8s ease-in-out infinite;
          white-space: nowrap;
        }

        @keyframes zsOrbSpin { to { transform: rotate(360deg); } }
        .zs-orbit { animation: zsOrbSpin 18s linear infinite; transform-origin: center; }
        .zs-orbit-rev { animation: zsOrbSpin 24s linear infinite reverse; transform-origin: center; }

        @keyframes zsCardFloat {
          0%,100% { transform: translateY(0) rotate(-1.4deg); }
          50%      { transform: translateY(-12px) rotate(-0.4deg); }
        }
        .zs-card { animation: zsCardFloat 4.6s ease-in-out infinite; }

        @keyframes zsGlowPulse {
          0%,100% { opacity: .55; transform: scale(1); }
          50%      { opacity: .9; transform: scale(1.12); }
        }
        .zs-glow { animation: zsGlowPulse 3.2s ease-in-out infinite; }

        @keyframes zsSpeakerCycle {
          0%, 16%   { box-shadow: 0 0 0 3px #FFD166; }
          20%, 100% { box-shadow: 0 0 0 0 rgba(255,209,102,0); }
        }
        .zs-tile-1 { animation: zsSpeakerCycle 5.6s ease-in-out infinite; }
        .zs-tile-2 { animation: zsSpeakerCycle 5.6s ease-in-out infinite 1.4s; }
        .zs-tile-4 { animation: zsSpeakerCycle 5.6s ease-in-out infinite 2.8s; }

        @keyframes zsLostRing {
          0%,100% { box-shadow: 0 0 0 3px rgba(255,90,90,0.95); }
          50%      { box-shadow: 0 0 0 3px rgba(255,90,90,0.4); }
        }
        .zs-tile-3 { animation: zsLostRing 1.4s ease-in-out infinite; background: #3a1414; }

        @keyframes zsWave1 { 0%,100% { height: 4px; } 50% { height: 13px; } }
        @keyframes zsWave2 { 0%,100% { height: 8px; } 50% { height: 16px; } }
        @keyframes zsWave3 { 0%,100% { height: 5px; } 50% { height: 11px; } }
        .zs-wave-1 { animation: zsWave1 .75s ease-in-out infinite; }
        .zs-wave-2 { animation: zsWave2 .75s ease-in-out infinite .12s; }
        .zs-wave-3 { animation: zsWave3 .75s ease-in-out infinite .24s; }

        /* continuous spark bursts */
        @keyframes zsSpark {
          0%   { opacity: 0; transform: translate(0,0) scale(0.4); }
          15%  { opacity: 1; transform: translate(var(--sx), var(--sy)) scale(1); }
          40%  { opacity: 0; transform: translate(calc(var(--sx) * 1.8), calc(var(--sy) * 1.8)) scale(0.3); }
          100% { opacity: 0; }
        }
        .zs-spark { animation: zsSpark 1.6s ease-out infinite; }

        @keyframes zsChipPulse { 0%,100% { opacity: 1; } 50% { opacity: .5; } }
        .zs-chip-dot { animation: zsChipPulse .9s ease-in-out infinite; }

        /* satellite chips drifting around the card */
        @keyframes zsSatelliteA {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(10px,-14px); }
        }
        @keyframes zsSatelliteB {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-12px,10px); }
        }
        .zs-sat-a { animation: zsSatelliteA 5s ease-in-out infinite; }
        .zs-sat-b { animation: zsSatelliteB 6.2s ease-in-out infinite .5s; }

        @keyframes zsBlink { 0%,45% { opacity: 1; } 50%,95% { opacity: 0; } 100% { opacity: 1; } }
        .zs-cursor { animation: zsBlink 1.1s steps(1) infinite; }

        /* marquee ticker */
        @keyframes zsMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .zs-marquee-track { display: inline-flex; animation: zsMarquee 16s linear infinite; white-space: nowrap; }

        .zs-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease;
        }
        .zs-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
        .zs-btn-primary:active { transform: translateY(0) scale(0.98); }
        @keyframes zsShimmer { from { transform: translateX(-120%); } to { transform: translateX(220%); } }
        .zs-btn-primary::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .zs-btn-primary:hover::after { animation: zsShimmer .65s ease forwards; }

        .zs-btn-secondary { transition: transform .22s cubic-bezier(.22,1,.36,1), background-color .22s ease, border-color .22s ease; }
        .zs-btn-secondary:hover { transform: translateY(-3px) scale(1.02); background-color: rgba(255,255,255,0.14); }
        .zs-btn-secondary:active { transform: translateY(0) scale(0.98); }

        .zs-btn-arrow { display: inline-block; transition: transform .2s ease; }
        a:hover .zs-btn-arrow { transform: translateX(4px); }

        .zs-quick-link { transition: opacity .2s ease, padding-left .2s ease; }
        .zs-quick-link:hover { padding-left: 4px; opacity: 1 !important; }

        @media (prefers-reduced-motion: reduce) {
          .zs-root, .zs-anim-1, .zs-anim-2, .zs-anim-3, .zs-anim-4, .zs-anim-5 { opacity: 1 !important; animation: none !important; }
          .zs-sheen, .zs-sheen-2, .zs-bignum, .zs-orbit, .zs-orbit-rev, .zs-card, .zs-glow,
          .zs-tile-1, .zs-tile-2, .zs-tile-3, .zs-tile-4, .zs-wave-1, .zs-wave-2, .zs-wave-3,
          .zs-spark, .zs-chip-dot, .zs-sat-a, .zs-sat-b, .zs-cursor, .zs-marquee-track {
            animation: none !important;
          }
          .zs-btn-primary:hover, .zs-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <main
        className={`zs-root ${mounted ? "zs-mounted" : ""} relative h-screen w-full overflow-hidden flex flex-col`}
        style={{ backgroundColor: "#20204A" }}
      >
        {/* ── Bold diagonal color blocks ── */}
        <div className="zs-wedge-a" aria-hidden="true">
          <div className="zs-sheen" />
        </div>
        <div className="zs-wedge-b" aria-hidden="true">
          <div className="zs-sheen zs-sheen-2" />
        </div>

        {/* oversized ghost numeral, bleeding off the top */}
        <div
          className="zs-bignum zs-anim-1 top-[-6%] left-1/2 -translate-x-1/2"
          style={{ fontSize: "clamp(160px,26vw,360px)" }}
          aria-hidden="true"
        >
          404
        </div>

        <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center px-6 py-3">

          {/* ── Floating call-disconnect card ── */}
          <div className="zs-anim-2 relative mb-5" style={{ transform: "scale(0.86)" }}>
            {/* pulsing glow */}
            <div
              className="zs-glow pointer-events-none absolute -inset-10 rounded-full blur-[50px]"
              style={{ background: "radial-gradient(circle, rgba(79,209,255,0.55), transparent 70%)" }}
              aria-hidden="true"
            />

            {/* rotating dashed orbit ring */}
            <svg
              className="zs-orbit pointer-events-none absolute -inset-8"
              width="100%" height="100%" viewBox="0 0 320 320" aria-hidden="true"
            >
              <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3 10" />
            </svg>
            <svg
              className="zs-orbit-rev pointer-events-none absolute -inset-4"
              width="100%" height="100%" viewBox="0 0 320 320" aria-hidden="true"
            >
              <circle cx="160" cy="160" r="132" fill="none" stroke="rgba(79,209,255,0.4)" strokeWidth="1.5" strokeDasharray="1 8" />
            </svg>

            {/* satellite status chips */}
            <div className="zs-sat-a absolute -top-4 -right-6 bg-white rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
              <span className="zs-chip-dot block w-1.5 h-1.5 rounded-full bg-[#FF5A5A]" />
              <span className="text-[10px] font-bold text-[#20204A] tracking-wide">LIVE</span>
            </div>
            <div className="zs-sat-b absolute -bottom-3 -left-7 bg-[#FFD166] rounded-full px-2.5 py-1 shadow-lg">
              <span className="text-[10px] font-bold text-[#20204A] tracking-wide">4G</span>
            </div>

            <div
              className="zs-card relative rounded-[26px] p-4"
              style={{ width: 300, background: "#12122E", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}
            >
              <div className="grid grid-cols-2 gap-2.5">
                {/* Tile 1 */}
                <div className="zs-tile-1 relative h-[76px] rounded-[14px] flex items-center justify-center overflow-hidden" style={{ background: "#2E63E0" }}>
                  <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="11" r="6" fill="#fff" />
                    <path d="M4 27c1.5-6.5 7-9 11-9s9.5 2.5 11 9" fill="#fff" opacity="0.9" />
                  </svg>
                </div>

                {/* Tile 2 — talking */}
                <div className="zs-tile-2 relative h-[76px] rounded-[14px] flex items-center justify-center overflow-hidden" style={{ background: "#40407C" }}>
                  <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="11" r="6" fill="#fff" />
                    <path d="M4 27c1.5-6.5 7-9 11-9s9.5 2.5 11 9" fill="#fff" opacity="0.9" />
                  </svg>
                  <div className="absolute bottom-2 right-2 flex items-end gap-[2px] bg-black/25 rounded-full px-1.5 py-1">
                    <span className="zs-wave-1 block w-[2.5px] rounded-full bg-[#FFD166]" style={{ height: 6 }} />
                    <span className="zs-wave-2 block w-[2.5px] rounded-full bg-[#FFD166]" style={{ height: 10 }} />
                    <span className="zs-wave-3 block w-[2.5px] rounded-full bg-[#FFD166]" style={{ height: 7 }} />
                  </div>
                </div>

                {/* Tile 3 — disconnected, with continuous spark burst */}
                <div className="zs-tile-3 relative h-[76px] rounded-[14px] flex items-center justify-center overflow-hidden">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M2 8.5a15 15 0 0 1 6-3.2M22 8.5a15 15 0 0 0-4.2-2.6M6 13a9 9 0 0 1 4-2M12 17.5h.01"
                      stroke="#FF5A5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                    <path d="M3 3l18 18" stroke="#FF5A5A" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <span
                    className="zs-spark absolute w-1 h-1 rounded-full bg-[#FF5A5A]"
                    style={{ top: "40%", left: "45%", "--sx": "-16px", "--sy": "-14px" } as SparkVars}
                  />
                  <span
                    className="zs-spark absolute w-1 h-1 rounded-full bg-[#FFD166]"
                    style={{ top: "40%", left: "55%", "--sx": "18px", "--sy": "-10px", animationDelay: "0.3s" } as SparkVars}
                  />
                  <span
                    className="zs-spark absolute w-1 h-1 rounded-full bg-[#FF5A5A]"
                    style={{ top: "55%", left: "50%", "--sx": "4px", "--sy": "18px", animationDelay: "0.6s" } as SparkVars}
                  />
                </div>

                {/* Tile 4 — camera off */}
                <div className="zs-tile-4 relative h-[76px] rounded-[14px] flex items-center justify-center overflow-hidden" style={{ background: "#3450B8" }}>
                  <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="11" r="6" fill="#fff" />
                    <path d="M4 27c1.5-6.5 7-9 11-9s9.5 2.5 11 9" fill="#fff" opacity="0.9" />
                  </svg>
                  <div className="absolute bottom-2 left-2 w-5 h-5 rounded-full bg-black/40 flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 3v-9l-4 3Z"
                        stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" opacity="0.6" />
                      <path d="M2 2l20 20" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* control pill */}
              <div className="mt-3 flex items-center justify-center gap-2.5 rounded-full py-2" style={{ background: "#0A0A20" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#26264E" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" stroke="#fff" strokeWidth="1.7" />
                    <path d="M6 11a6 6 0 0 0 12 0M12 19v3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#26264E" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="12" height="12" rx="2.5" stroke="#fff" strokeWidth="1.7" />
                    <path d="M20 8.5 15.5 12l4.5 3.5v-7Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-11 h-8 rounded-full flex items-center justify-center" style={{ background: "#FF5A5A" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12c4-4.5 14-4.5 18 0l-2.6 3.3a1.6 1.6 0 0 1-2 .3l-2-1.2a1.6 1.6 0 0 0-1.8.1 6.4 6.4 0 0 1-5.2 0 1.6 1.6 0 0 0-1.8-.1l-2 1.2a1.6 1.6 0 0 1-2-.3L3 12Z"
                      fill="#fff" transform="rotate(135 12 12)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Heading ── */}
          <h2
            className="zs-anim-3 font-extrabold leading-[1.12] text-white mb-3 text-center max-w-xl"
            style={{ fontSize: "clamp(24px,3.4vw,38px)" }}
          >
            You&apos;ve been disconnected
            <br className="hidden sm:block" /> from this page<span className="zs-cursor text-[#FFD166]">.</span>
          </h2>

          {/* ── Sub-copy ── */}
          <p className="zs-anim-3 text-[14.5px] leading-relaxed text-white/70 max-w-[420px] mb-6 text-center">
            The page you&apos;re looking for was moved, renamed, or the link is broken.
            Let&apos;s get you back into the room.
          </p>

          {/* ── CTAs ── */}
          <div className="zs-anim-4 flex flex-wrap items-center justify-center gap-3 mb-6">
            <Link
              href="/"
              className="zs-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-bold text-[#20204A]"
              style={{ background: "#FFD166" }}
            >
              Back to home
              <span aria-hidden="true" className="zs-btn-arrow">→</span>
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="zs-btn-secondary inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-[14px] font-bold text-white"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Go back
            </button>
          </div>

          {/* ── Quick links ── */}
          <nav aria-label="Quick links" className="zs-anim-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px]">
            <Link href="/product/overview" className="zs-quick-link text-white/70 hover:text-white font-semibold">Product</Link>
            <span className="text-white/25">·</span>
            <Link href="/pricing" className="zs-quick-link text-white/70 hover:text-white font-semibold">Pricing</Link>
            <span className="text-white/25">·</span>
            <Link href="/help-center" className="zs-quick-link text-white/70 hover:text-white font-semibold">Help Center</Link>
            <span className="text-white/25">·</span>
            <Link href="/contact" className="zs-quick-link text-white/70 hover:text-white font-semibold">Contact</Link>
          </nav>
        </div>

        {/* ── Scrolling status ticker ── */}
        <div className="zs-anim-5 relative z-10 border-t-2 border-white/10 py-2 overflow-hidden shrink-0" style={{ background: "#12122E" }}>
          <div className="zs-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center">
                {Array.from({ length: 6 }).map((_, j) => (
                  <span key={j} className="mx-6 text-[12px] font-bold tracking-[0.2em] text-white/50">
                    SIGNAL LOST <span className="text-[#FFD166]">•</span> RECONNECTING <span className="text-[#FF5A5A]">•</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}