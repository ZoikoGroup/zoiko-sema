"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const icons = {
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      <line x1="7.5" y1="7.5" x2="16.5" y2="16.5"/><line x1="16.5" y1="7.5" x2="7.5" y2="16.5"/>
    </svg>
  ),
  messaging: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  audio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  channels: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  files: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  mobile: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  admin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

// ─────────────────────────────────────────
// DIAGRAM CONSTANTS
// Container: 800 × 700
// Center circle at (400, 310)
// ─────────────────────────────────────────
const SIZE_W   = 800;
const SIZE_H   = 700;
const CX       = 400;   // horizontal center
const CY       = 310;   // vertical center (not mid — shifted up so zoiko has room below)
const CENTER_R = 120;
const CARD_W   = 200;
const CARD_H   = 72;

// cx / cy = offset from (CX, CY)
// Left column: cx = -260, Right column: cx = +260  — perfectly symmetric
const satellites = [
  { id: "ai",       label: "AI Signal Layer",    sub: "Summaries, decisions",   icon: icons.ai,       cx: 0,    cy: -250, delay: 0   },
  { id: "msg",      label: "Messaging",           sub: "DMs, channels, threads", icon: icons.messaging,cx: -260, cy: -130, delay: 80  },
  { id: "audio",    label: "Audio Calls",         sub: "1:1 and group",          icon: icons.audio,    cx: 260,  cy: -130, delay: 160 },
  { id: "channels", label: "Channels & Spaces",   sub: "Project rooms",          icon: icons.channels, cx: -260, cy: 30,   delay: 240 },
  { id: "files",    label: "Files & Context",     sub: "Shared, in-thread",      icon: icons.files,    cx: 260,  cy: 30,   delay: 320 },
  { id: "mobile",   label: "Mobile & Desktop",    sub: "Cross-device sync",      icon: icons.mobile,   cx: -260, cy: 190,  delay: 400 },
  { id: "admin",    label: "Admin & Security",    sub: "Roles, retention, audit",icon: icons.admin,    cx: 260,  cy: 190,  delay: 480 },
];

export default function ProductPlatformSection() {
  const { ref: headRef,   inView: headIn   } = useInView(0.2);
  const { ref: diagRef,   inView: diagIn   } = useInView(0.08);
  const { ref: mobileRef, inView: mobileIn } = useInView(0.08);

  const [activeCards, setActiveCards] = useState<Set<number>>(new Set());
  const [showZoiko,   setShowZoiko  ] = useState(false);
  const [centerPulse, setCenterPulse] = useState(false);

  useEffect(() => {
    if (!diagIn) return;
    setTimeout(() => setCenterPulse(true), 100);
    satellites.forEach((s, i) => {
      setTimeout(() => setActiveCards(prev => new Set([...prev, i])), 300 + s.delay);
    });
    setTimeout(() => setShowZoiko(true), 300 + satellites.length * 80 + 400);
  }, [diagIn]);

  return (
    <>
      <style>{`
        /* ── fade-up for heading ── */
        @keyframes ppFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pp-hidden  { opacity:0; transform:translateY(26px); }
        .pp-visible { animation: ppFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── center circle ── */
        @keyframes ppCenterIn {
          0%   { opacity:0; transform:scale(.7); }
          65%  { transform:scale(1.05); }
          100% { opacity:1; transform:scale(1); }
        }
        .pp-center { opacity:0; }
        .pp-center.on { animation: ppCenterIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── pulse rings ── */
        @keyframes ppPulse {
          0%   { transform:scale(1); opacity:.45; }
          100% { transform:scale(1.6); opacity:0; }
        }
        .pp-ring { position:absolute; border-radius:50%; border:1.5px solid rgba(71,71,135,0.22); pointer-events:none; opacity:0; }
        .pp-ring.on   { animation: ppPulse 2.2s ease-out infinite; }
        .pp-ring-2.on { animation: ppPulse 2.2s ease-out .73s infinite; }
        .pp-ring-3.on { animation: ppPulse 2.2s ease-out 1.46s infinite; }

        /* ── connector lines ── */
        .pp-line { stroke-dasharray:400; stroke-dashoffset:400; transition:stroke-dashoffset .6s ease; }
        .pp-line.on { stroke-dashoffset:0; }

        /* ── satellite cards ── */
        @keyframes ppCardIn {
          0%   { opacity:0; transform:scale(.84) translateY(8px); }
          65%  { transform:scale(1.03) translateY(-2px); }
          100% { opacity:1; transform:scale(1) translateY(0); }
        }
        .pp-card { opacity:0; transition:box-shadow .25s, transform .25s; cursor:default; }
        .pp-card.on { animation: ppCardIn .45s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-card:hover { transform:translateY(-3px)!important; box-shadow:0 8px 24px rgba(71,71,135,0.13)!important; }

        /* ── zoiko card ── */
        @keyframes ppZoikoIn {
          0%   { opacity:0; transform:translateX(-50%) translateY(14px) scale(.9); }
          65%  { transform:translateX(-50%) translateY(-3px) scale(1.03); }
          100% { opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
        }
        .pp-zoiko { opacity:0; }
        .pp-zoiko.on { animation: ppZoikoIn .5s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-zoiko:hover { box-shadow:0 8px 28px rgba(79,110,247,0.32)!important; transition:box-shadow .25s; }

        /* ── mobile ── */
        .pp-m-center { opacity:0; transform:translateY(14px); transition:opacity .5s ease, transform .5s ease; }
        .pp-m-center.on { opacity:1; transform:translateY(0); }
        @keyframes ppMCard { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }
        .pp-m-card { opacity:0; }
        .pp-m-card.on { animation: ppMCard .4s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-m-zoiko { opacity:0; transform:translateY(10px); transition:opacity .45s ease .1s, transform .45s ease .1s; }
        .pp-m-zoiko.on { opacity:1; transform:translateY(0); }

        /* ── reduced motion ── */
        @media (prefers-reduced-motion:reduce) {
          .pp-hidden,.pp-card,.pp-zoiko,.pp-center,
          .pp-m-center,.pp-m-card,.pp-m-zoiko { opacity:1!important; transform:none!important; animation:none!important; }
          .pp-visible { animation:none!important; opacity:1!important; }
          .pp-line { stroke-dashoffset:0!important; transition:none!important; }
          .pp-ring { animation:none!important; }
        }
      `}</style>

      <section
        aria-label="One platform for conversations, context and coordinated action"
        className="w-full bg-white py-20 md:py-24 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center mb-12`}
          >
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              One platform for conversations, context and coordinated action
            </h2>
            <p className="mx-auto max-w-[520px] text-[15px] leading-[1.8] text-gray-500">
              Sema combines the communication layer people use every day with the intelligence
              and controls organizations need to operate with clarity.
            </p>
          </div>

          {/* ════════════════════════════════════════
              DESKTOP DIAGRAM  ≥ md
          ════════════════════════════════════════ */}
          <div
            ref={diagRef}
            className="hidden md:block relative mx-auto"
            style={{ width: SIZE_W, height: SIZE_H, maxWidth: "100%" }}
          >
            {/* ── SVG layer: orbit ring + lines ── */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
              fill="none"
              aria-hidden="true"
            >
              {/* outer dashed orbit ring */}
              <circle
                cx={CX} cy={CY} r="218"
                stroke="rgba(71,71,135,0.11)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              {/* inner subtle ring */}
              <circle
                cx={CX} cy={CY} r="155"
                stroke="rgba(71,71,135,0.07)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* connector lines — from edge of center circle to card center */}
              {satellites.map((s, i) => {
                const tx = CX + s.cx;   // card center x
                const ty = CY + s.cy;   // card center y
                const angle = Math.atan2(s.cy, s.cx);
                const ex = CX + Math.cos(angle) * CENTER_R;  // line start (circle edge)
                const ey = CY + Math.sin(angle) * CENTER_R;
                return (
                  <line
                    key={s.id}
                    className={`pp-line ${activeCards.has(i) ? "on" : ""}`}
                    x1={ex} y1={ey}
                    x2={tx} y2={ty}
                    stroke="rgba(71,71,135,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    style={{ transitionDelay: `${s.delay * 0.001}s` }}
                  />
                );
              })}
            </svg>

            {/* ── Pulse rings ── */}
            {[1, 2, 3].map(n => (
              <div
                key={n}
                className={`pp-ring ${n === 2 ? "pp-ring-2" : n === 3 ? "pp-ring-3" : ""} ${centerPulse ? "on" : ""}`}
                style={{
                  width:  CENTER_R * 2,
                  height: CENTER_R * 2,
                  left:   CX - CENTER_R,
                  top:    CY - CENTER_R,
                }}
              />
            ))}

            {/* ── Center circle ── */}
            <div
              className={`pp-center ${diagIn ? "on" : ""} absolute flex flex-col items-center justify-center rounded-full text-center`}
              style={{
                width:  CENTER_R * 2,
                height: CENTER_R * 2,
                left:   CX - CENTER_R,
                top:    CY - CENTER_R,
                background: "#474787",
                boxShadow: "0 8px 48px rgba(71,71,135,0.38)",
              }}
            >
              <p
                className="font-semibold uppercase tracking-[0.16em] mb-1.5"
                style={{ fontSize: "9px", color: "#a5b4fc" }}
              >
                Communication Core
              </p>
              <p className="text-[19px] font-bold leading-[1.25] text-white px-4">
                Messaging,<br />calls and meetings
              </p>
            </div>

            {/* ── Satellite cards ── */}
            {satellites.map((s, i) => {
              const left = CX + s.cx - CARD_W / 2;
              const top  = CY + s.cy - CARD_H / 2;
              return (
                <div
                  key={s.id}
                  className={`pp-card ${activeCards.has(i) ? "on" : ""} absolute flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-4`}
                  style={{
                    width: CARD_W,
                    left,
                    top,
                    boxShadow: "0 2px 14px rgba(0,0,0,0.055)",
                    animationDelay: `${s.delay * 0.001}s`,
                  }}
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-500"
                    style={{ background: "#EEF2FF" }}
                  >
                    {s.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-semibold text-gray-900 leading-snug">{s.label}</span>
                    <span className="text-[11px] text-gray-400 leading-tight mt-0.5">{s.sub}</span>
                  </div>
                </div>
              );
            })}

            {/* ── ZoikoTime — absolute centered at bottom ── */}
            <div
              className={`pp-zoiko ${showZoiko ? "on" : ""} absolute inline-flex items-center gap-3 rounded-2xl px-6 py-4`}
              style={{
                background: "#4F6EF7",
                boxShadow: "0 4px 24px rgba(79,110,247,0.3)",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-white leading-tight">ZoikoTime route</span>
                <span className="text-[12px] leading-tight" style={{ color: "#bfcfff" }}>Workforce truth</span>
              </div>
            </div>
          </div>
          {/* ════════ END DESKTOP ════════ */}

          {/* ════════════════════════════════════════
              MOBILE LAYOUT  < md
          ════════════════════════════════════════ */}
          <div ref={mobileRef} className="flex flex-col items-center gap-4 md:hidden">

            {/* Center badge */}
            <div
              className={`pp-m-center ${mobileIn ? "on" : ""} w-full rounded-2xl flex flex-col items-center justify-center text-center px-6 py-7`}
              style={{
                background: "#474787",
                boxShadow: "0 6px 32px rgba(71,71,135,0.28)",
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: "#a5b4fc" }}>
                Communication Core
              </p>
              <p className="text-[22px] font-bold leading-[1.25] text-white">
                Messaging,<br />calls and meetings
              </p>
            </div>

            <div className="w-px h-5 bg-indigo-200" aria-hidden="true" />

            {/* 2-col satellite grid */}
            <div className="w-full grid grid-cols-2 gap-3">
              {satellites.map((s, i) => (
                <div
                  key={s.id}
                  className={`pp-m-card ${mobileIn ? "on" : ""} flex flex-col gap-2.5 rounded-2xl bg-white border border-gray-100 px-3.5 py-4`}
                  style={{
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    animationDelay: `${0.1 + i * 0.07}s`,
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-indigo-500 flex-shrink-0"
                    style={{ background: "#EEF2FF" }}
                  >
                    {s.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-gray-900 leading-snug">{s.label}</span>
                    <span className="text-[11px] text-gray-400 leading-tight mt-0.5">{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-px h-5 bg-indigo-200" aria-hidden="true" />

            {/* ZoikoTime */}
            <div
              className={`pp-m-zoiko ${mobileIn ? "on" : ""} w-full flex items-center gap-3 rounded-2xl px-5 py-4`}
              style={{ background: "#4F6EF7", boxShadow: "0 4px 20px rgba(79,110,247,0.28)" }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-white leading-tight">ZoikoTime route</span>
                <span className="text-[12px] leading-tight" style={{ color: "#bfcfff" }}>Workforce truth</span>
              </div>
            </div>

          </div>
          {/* ════════ END MOBILE ════════ */}

        </div>
      </section>
    </>
  );
}