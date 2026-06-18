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

// SVG icons
const icons = {
  ai: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      <line x1="7.5" y1="7.5" x2="16.5" y2="16.5"/><line x1="16.5" y1="7.5" x2="7.5" y2="16.5"/>
    </svg>
  ),
  messaging: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  audio: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  channels: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  files: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  admin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
};

// Satellite positions around center (% of container)
// cx/cy = center offset from container center in px (container is 560x560)
const satellites = [
  { id: "ai",       label: "AI Signal Layer",    sub: "Summaries, decisions",  icon: icons.ai,       cx: 0,    cy: -220, delay: 0   },
  { id: "msg",      label: "Messaging",           sub: "DMs, channels, threads",icon: icons.messaging,cx: -220, cy: -110, delay: 80  },
  { id: "audio",    label: "Audio Calls",         sub: "1:1 and group",        icon: icons.audio,    cx: 220,  cy: -110, delay: 160 },
  { id: "channels", label: "Channels & Spaces",   sub: "Project rooms",        icon: icons.channels, cx: -220, cy: 80,   delay: 240 },
  { id: "files",    label: "Files & Context",     sub: "Shared, in-thread",    icon: icons.files,    cx: 220,  cy: 80,   delay: 320 },
  { id: "mobile",   label: "Mobile & Desktop",    sub: "Cross-device sync",    icon: icons.mobile,   cx: -160, cy: 210,  delay: 400 },
  { id: "admin",    label: "Admin & Security",    sub: "Roles, retention, audit",icon: icons.admin,  cx: 160,  cy: 210,  delay: 480 },
];

export default function ProductPlatformSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: diagRef, inView: diagIn } = useInView(0.08);

  const [activeCards, setActiveCards] = useState<Set<number>>(new Set());
  const [showZoiko, setShowZoiko] = useState(false);
  const [centerPulse, setCenterPulse] = useState(false);

  useEffect(() => {
    if (!diagIn) return;
    // pulse center first
    setTimeout(() => setCenterPulse(true), 100);
    // then cards appear one by one
    satellites.forEach((s, i) => {
      setTimeout(() => {
        setActiveCards(prev => new Set([...prev, i]));
      }, 300 + s.delay);
    });
    // zoikotime last
    setTimeout(() => setShowZoiko(true), 300 + satellites.length * 80 + 400);
  }, [diagIn]);

  // Container size
  const SIZE = 560;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const CENTER_R = 110;

  return (
    <>
      <style>{`
        @keyframes ppFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pp-hidden  { opacity:0; transform:translateY(26px); }
        .pp-visible { animation: ppFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* center circle animations */
        @keyframes ppCenterIn {
          0%   { opacity:0; transform:scale(.7); }
          65%  { transform:scale(1.05); }
          100% { opacity:1; transform:scale(1); }
        }
        @keyframes ppOrbit {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes ppPulseRing {
          0%   { transform:scale(1); opacity:.5; }
          100% { transform:scale(1.55); opacity:0; }
        }

        .pp-center-circle { opacity:0; }
        .pp-center-circle.on { animation: ppCenterIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* orbit ring */
        .pp-orbit-ring {
          position:absolute; border-radius:50%;
          border:1.5px dashed rgba(71,71,135,0.18);
          pointer-events:none;
          animation: ppOrbit 40s linear infinite;
          transform-origin:center center;
        }

        /* pulse rings emanate from center */
        .pp-pulse-ring {
          position:absolute; border-radius:50%;
          border:1.5px solid rgba(71,71,135,0.25);
          pointer-events:none;
          opacity:0;
        }
        .pp-pulse-ring.on {
          animation: ppPulseRing 2s ease-out infinite;
        }
        .pp-pulse-ring-2.on { animation: ppPulseRing 2s ease-out .66s infinite; }
        .pp-pulse-ring-3.on { animation: ppPulseRing 2s ease-out 1.32s infinite; }

        /* satellite card */
        @keyframes ppCardIn {
          0%   { opacity:0; transform:scale(.82) translateY(8px); }
          65%  { transform:scale(1.04) translateY(-2px); }
          100% { opacity:1; transform:scale(1) translateY(0); }
        }
        .pp-card { opacity:0; transition:box-shadow .25s,transform .25s; }
        .pp-card.on { animation: ppCardIn .45s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-card:hover { transform:translateY(-3px)!important; box-shadow:0 8px 24px rgba(71,71,135,0.14)!important; }

        /* line draw */
        .pp-line { stroke-dasharray:200; stroke-dashoffset:200; transition:stroke-dashoffset .5s ease; }
        .pp-line.on { stroke-dashoffset:0; }

        /* zoikotime card */
        @keyframes ppZoikoIn {
          0%   { opacity:0; transform:translateY(12px) scale(.9); }
          65%  { transform:translateY(-3px) scale(1.03); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }
        .pp-zoiko { opacity:0; }
        .pp-zoiko.on { animation: ppZoikoIn .5s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-zoiko:hover { transform:translateY(-3px)!important; box-shadow:0 8px 28px rgba(79,110,247,0.3)!important; transition:transform .25s,box-shadow .25s; }

        @media (prefers-reduced-motion:reduce) {
          .pp-hidden,.pp-card,.pp-zoiko,.pp-center-circle { opacity:1!important; transform:none!important; animation:none!important; }
          .pp-visible { animation:none!important; opacity:1!important; }
          .pp-line { stroke-dashoffset:0!important; transition:none!important; }
          .pp-orbit-ring,.pp-pulse-ring { animation:none!important; }
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
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center mb-10`}
          >
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              One platform for conversations, context and coordinated action
            </h2>
            <p className="mx-auto max-w-[520px] text-[15px] leading-[1.8] text-gray-500">
              Sema combines the communication layer people use every day with the intelligence
              and controls organizations need to operate with clarity.
            </p>
          </div>

          {/* ── Diagram ── */}
          <div
            ref={diagRef}
            className="relative flex flex-col items-center"
          >
            {/* SVG diagram — lines */}
            <div
              className="relative mx-auto"
              style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}
            >
              {/* SVG lines layer */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                fill="none"
                aria-hidden="true"
              >
                {/* orbit circle (dashed) */}
                <circle
                  cx={CX} cy={CY} r="195"
                  stroke="rgba(71,71,135,0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                {/* connector lines from center to each satellite */}
                {satellites.map((s, i) => {
                  const sx = CX + s.cx;
                  const sy = CY + s.cy;
                  // end at edge of center circle
                  const angle = Math.atan2(s.cy, s.cx);
                  const ex = CX + Math.cos(angle) * CENTER_R;
                  const ey = CY + Math.sin(angle) * CENTER_R;
                  return (
                    <line
                      key={s.id}
                      className={`pp-line ${activeCards.has(i) ? "on" : ""}`}
                      x1={ex} y1={ey}
                      x2={sx} y2={sy}
                      stroke="rgba(71,71,135,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="5 4"
                      style={{ transitionDelay: `${s.delay * 0.001}s` }}
                    />
                  );
                })}
              </svg>

              {/* Pulse rings behind center */}
              {[1,2,3].map(n => (
                <div
                  key={n}
                  className={`pp-pulse-ring ${n === 2 ? "pp-pulse-ring-2" : n === 3 ? "pp-pulse-ring-3" : ""} ${centerPulse ? "on" : ""}`}
                  style={{
                    width: CENTER_R * 2,
                    height: CENTER_R * 2,
                    left: CX - CENTER_R,
                    top: CY - CENTER_R,
                  }}
                />
              ))}

              {/* Center circle */}
              <div
                className={`pp-center-circle ${diagIn ? "on" : ""} absolute flex flex-col items-center justify-center rounded-full text-center`}
                style={{
                  width: CENTER_R * 2,
                  height: CENTER_R * 2,
                  left: CX - CENTER_R,
                  top: CY - CENTER_R,
                  background: "#474787",
                  boxShadow: "0 8px 40px rgba(71,71,135,0.35)",
                }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] mb-1.5" style={{ color: "#a5b4fc" }}>
                  Communication Core
                </p>
                <p className="text-[18px] font-bold leading-[1.2] text-white px-3">
                  Messaging,<br />calls and meetings
                </p>
              </div>

              {/* Satellite cards */}
              {satellites.map((s, i) => {
                const cardW = 170;
                const cardH = 70;
                const left = CX + s.cx - cardW / 2;
                const top  = CY + s.cy - cardH / 2;
                return (
                  <div
                    key={s.id}
                    className={`pp-card ${activeCards.has(i) ? "on" : ""} absolute flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-3.5`}
                    style={{
                      width: cardW,
                      left,
                      top,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      animationDelay: `${s.delay * 0.001}s`,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-indigo-500"
                      style={{ background: "#EEF2FF" }}
                    >
                      {s.icon}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[13px] font-semibold text-gray-900 leading-tight truncate">{s.label}</span>
                      <span className="text-[11px] text-gray-400 leading-tight truncate">{s.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ZoikoTime card — bottom, full standalone */}
            <div
              className={`pp-zoiko ${showZoiko ? "on" : ""} -mt-8 inline-flex items-center gap-3 rounded-2xl px-6 py-3.5`}
              style={{ background: "#4F6EF7", boxShadow: "0 4px 24px rgba(79,110,247,0.28)" }}
            >
              <span
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                {icons.clock}
                <style>{`.pp-zoiko svg { stroke:#fff; }`}</style>
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-white leading-tight">ZoikoTime route</span>
                <span className="text-[11.5px] leading-tight" style={{ color: "#bfcfff" }}>Workforce truth</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}