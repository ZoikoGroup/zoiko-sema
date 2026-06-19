"use client";

import React, { useEffect, useState } from "react";

export default function SolutionsHeroSection() {
  const [mounted, setMounted] = useState(false);
  const [orbitsIn, setOrbitsIn] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setMounted(true);
    setOrbitsIn(true);
  }, 50);

  return () => clearTimeout(timer);
}, []);

  const features = [
    ["Secure communication", "AI summaries", "Audio & video calls"],
    ["ZoikoTime route", "Business controls"],
  ];

  // Icons as SVG
  const GridIcon = ({ color = "currentColor" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
  const UserIcon = ({ color = "currentColor" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
  const ClockIcon = ({ color = "currentColor" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
  const CircleIcon = ({ color = "currentColor" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );

  return (
    <>
      <style>{`
        @keyframes shFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(28px,18px) scale(1.05); }
        }
        @keyframes shBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-22px,-16px) scale(1.04); }
        }
        @keyframes shPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow:0 0 0 5px rgba(71,71,135,0); }
        }
        @keyframes shShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        @keyframes shCardIn {
          from { opacity:0; transform:scale(.88); }
          65%  { transform:scale(1.03); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes shBob {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-10px); }
        }
        @keyframes shOrbitIn {
          from { opacity:0; transform:scale(.75) translateY(6px); }
          65%  { transform:scale(1.06) translateY(-2px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes shRingPulse {
          0%   { transform:scale(1); opacity:.35; }
          100% { transform:scale(1.6); opacity:0; }
        }

        .sh-blob-1 { animation: shBlobDrift1 13s ease-in-out infinite alternate; }
        .sh-blob-2 { animation: shBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .sh-badge-dot { animation: shPulse 2.4s ease-in-out infinite; }

        .sh-a1,.sh-a2,.sh-a3,.sh-a4,.sh-a5 { opacity:0; }
        .sh-mounted .sh-a1 { animation: shFadeUp .5s ease .05s forwards; }
        .sh-mounted .sh-a2 { animation: shFadeUp .5s ease .16s forwards; }
        .sh-mounted .sh-a3 { animation: shFadeUp .5s ease .27s forwards; }
        .sh-mounted .sh-a4 { animation: shFadeUp .5s ease .38s forwards; }
        .sh-mounted .sh-a5 { animation: shFadeUp .5s ease .50s forwards; }

        .sh-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .sh-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .sh-btn-p:hover::after { animation: shShimmer .65s ease forwards; }
        .sh-btn-p:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.32); }
        .sh-btn-p:active { transform:translateY(0); }
        .sh-arrow { display:inline-block; transition:transform .2s; }
        .sh-btn-p:hover .sh-arrow { transform:translateX(3px); }

        .sh-btn-s { transition:background .2s,border-color .2s,transform .2s,box-shadow .2s; }
        .sh-btn-s:hover { background:#fff; border-color:#a5b4fc; transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .sh-btn-s:active { transform:translateY(0); }

        .sh-badge { transition:box-shadow .25s,transform .25s; }
        .sh-badge:hover { box-shadow:0 4px 14px rgba(71,71,135,0.18); transform:translateY(-1px); }

        /* center card */
        .sh-center-card { opacity:0; }
        .sh-center-card.on {
          animation: shCardIn .7s cubic-bezier(.22,1,.36,1) .2s forwards;
        }
        .sh-center-card.bobbing {
          animation: shCardIn .7s cubic-bezier(.22,1,.36,1) .2s forwards,
                     shBob 4s ease-in-out 1.2s infinite;
        }

        /* pulse rings */
        .sh-ring {
          position:absolute; border-radius:50%;
          border:1.5px solid rgba(71,71,135,0.18);
          pointer-events:none;
          top:50%; left:50%;
          transform-origin:center center;
        }
        .sh-ring-1 { width:260px; height:260px; margin-left:-130px; margin-top:-130px; animation: shRingPulse 3s ease-out .8s infinite; }
        .sh-ring-2 { width:260px; height:260px; margin-left:-130px; margin-top:-130px; animation: shRingPulse 3s ease-out 1.6s infinite; }
        .sh-ring-3 { width:260px; height:260px; margin-left:-130px; margin-top:-130px; animation: shRingPulse 3s ease-out 2.4s infinite; }

        /* orbit pills */
        .sh-pill { opacity:0; cursor:default; transition:transform .25s ease, box-shadow .25s ease; }
        .sh-pill.on { animation: shOrbitIn .5s cubic-bezier(.22,1,.36,1) forwards; }
        .sh-pill:hover { transform:scale(1.06) translateY(-2px) !important; }
        .sh-pill-dark:hover { box-shadow:0 8px 24px rgba(71,71,135,0.35)!important; }
        .sh-pill-light:hover { box-shadow:0 8px 24px rgba(0,0,0,0.12)!important; }

        @media (prefers-reduced-motion:reduce) {
          .sh-a1,.sh-a2,.sh-a3,.sh-a4,.sh-a5 { opacity:1!important; animation:none!important; }
          .sh-blob-1,.sh-blob-2,.sh-badge-dot,.sh-ring { animation:none!important; }
          .sh-btn-p:hover,.sh-btn-s:hover { transform:none; }
          .sh-center-card { opacity:1!important; animation:none!important; }
          .sh-pill.on { opacity:1!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Solutions hero"
        className={`relative flex items-center overflow-hidden min-h-[90vh] ${mounted ? "sh-mounted" : ""}`}
        style={{ background: "#ECF3FF" }}
      >
        {/* blobs */}
        <div aria-hidden="true" className="sh-blob-1 pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]" style={{ background: "#c7d2fe" }} />
        <div aria-hidden="true" className="sh-blob-2 pointer-events-none absolute -bottom-24 right-0 w-[380px] h-[380px] rounded-full opacity-15 blur-[90px]" style={{ background: "#a5b4fc" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center py-20">

          {/* ── LEFT ── */}
          <div className="flex flex-col">

            <span
              className="sh-a1 sh-badge inline-flex items-center gap-2 w-fit mb-7 px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm text-[12px] font-semibold uppercase tracking-[0.13em] cursor-default"
              style={{ borderColor: "#c7d2fe", color: "#474787" }}
            >
              <span aria-hidden="true" className="sh-badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#474787" }} />
              Solutions
            </span>

            <h1
              className="sh-a2 font-bold leading-[1.1] tracking-tight text-gray-900 mb-5"
              style={{ fontSize: "35px" }}
            >
              Find the Sema that<br />fits how you work
            </h1>

            <p className="sh-a3 text-[15.5px] leading-[1.8] text-gray-500 max-w-[440px] mb-9">
              From individuals who want clearer conversations to enterprises that need verifiable
              workforce truth — one platform, configured for your situation.
            </p>

            <div className="sh-a4 flex flex-wrap items-center gap-3 mb-9">
              <a href="#compare" className="sh-btn-p inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "#474787" }}>
                Compare solutions
                <span className="sh-arrow text-base" aria-hidden="true">→</span>
              </a>
              <a href="#zoikotime" className="sh-btn-s inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-[15px] font-medium text-gray-700">
                Explore Sema + ZoikoTime
              </a>
            </div>

            <div className="sh-a5 flex flex-col gap-2">
              {features.map((row, ri) => (
                <div key={ri} className="flex flex-wrap gap-x-6 gap-y-1">
                  {row.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-[13.5px] text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#474787" }} />
                      {f}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — orbit diagram ── */}
          <div className="relative flex items-center justify-center" style={{ height: 540 }}>

            {/* Pulse rings */}
            <div className="sh-ring sh-ring-1" aria-hidden="true" />
            <div className="sh-ring sh-ring-2" aria-hidden="true" />
            <div className="sh-ring sh-ring-3" aria-hidden="true" />

            {/* ── Center card ── */}
            <div
              className={`sh-center-card ${mounted ? "bobbing" : ""} relative z-10 rounded-2xl bg-white overflow-hidden`}
              style={{
                width: 280,
                boxShadow: "0 16px 56px rgba(71,71,135,0.16), 0 2px 10px rgba(0,0,0,0.06)",
                border: "1px solid #e8ecf5",
              }}
            >
              {/* window bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-white">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[12px] font-semibold text-gray-400 ml-auto tracking-wide">SEMA</span>
              </div>
              {/* content */}
              <div className="px-4 py-4 flex flex-col gap-3">
                <p className="text-[11.5px] font-semibold text-indigo-500"># q4-launch · 12 members</p>
                {/* msg 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5">A</div>
                  <p className="text-[12.5px] text-gray-600 leading-snug">
                    <span className="font-semibold text-gray-800">Andy</span>{" "}Anyone blocked on the design review?
                  </p>
                </div>
                {/* msg 2 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5">M</div>
                  <p className="text-[12.5px] text-gray-600 leading-snug">
                    <span className="font-semibold text-gray-800">Maya</span>{" "}Reviewed last night. Good for Oct 14.
                  </p>
                </div>
                {/* Sema summary */}
                <div className="rounded-xl px-3 py-2.5 mt-0.5" style={{ background: "#474787" }}>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: "#a5b4fc" }}>SEMA · SUMMARY</p>
                  <p className="text-[12px] font-medium text-white leading-snug">3 decisions, 2 action items extracted</p>
                </div>
                {/* ZoikoTime */}
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-[11.5px] text-gray-400">ZoikoTime · available</span>
                </div>
              </div>
            </div>

            {/* ── Orbit pills — absolutely positioned with lots of gap ── */}

            {/* TOP CENTER — Businesses (dark) */}
            <div
              className={`sh-pill sh-pill-dark ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                top: "2%", left: "20%", transform: "translateX(-75%)",
                background: "#474787", color: "#fff",
                boxShadow: "0 6px 24px rgba(71,71,135,0.35)",
                animationDelay: "0.5s",
              }}
            >
              <GridIcon color="#a5b4fc" />
              <span className="text-[14px] font-semibold">Businesses</span>
            </div>

            {/* TOP RIGHT — Teams (light) */}
            <div
              className={`sh-pill sh-pill-light ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                top: "8%", right: "0%",
                background: "#fff", color: "#374151",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                animationDelay: "0.62s",
              }}
            >
              <UserIcon color="#6b7280" />
              <span className="text-[14px] font-semibold">Teams</span>
            </div>

            {/* MID LEFT — Enterprise (light) */}
            <div
              className={`sh-pill sh-pill-light ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                top: "50%", left: "-6%", transform: "translateY(-50%)",
                background: "#fff", color: "#374151",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                animationDelay: "0.74s",
              }}
            >
              <GridIcon color="#6b7280" />
              <span className="text-[14px] font-semibold">Enterprise</span>
            </div>

            {/* MID RIGHT — Individuals (light) */}
            <div
              className={`sh-pill sh-pill-light ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                top: "50%", right: "-10%", transform: "translateY(-50%)",
                background: "#fff", color: "#374151",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                animationDelay: "0.86s",
              }}
            >
              <UserIcon color="#6b7280" />
              <span className="text-[14px] font-semibold">Individuals</span>
            </div>

            {/* BOTTOM CENTER — ZoikoTime (dark) */}
            <div
              className={`sh-pill sh-pill-dark ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                bottom: "2%", left: "15%", transform: "translateX(-75%)",
                background: "#1a1a2e", color: "#fff",
                boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
                animationDelay: "0.98s",
              }}
            >
              <ClockIcon color="#a5b4fc" />
              <span className="text-[14px] font-semibold">ZoikoTime</span>
            </div>

            {/* BOTTOM RIGHT — Regulated (light) */}
            <div
              className={`sh-pill sh-pill-light ${orbitsIn ? "on" : ""} absolute inline-flex items-center gap-2 rounded-full px-5 py-2.5`}
              style={{
                bottom: "8%", right: "0%",
                background: "#fff", color: "#374151",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                animationDelay: "1.1s",
              }}
            >
              <CircleIcon color="#6b7280" />
              <span className="text-[14px] font-semibold">Regulated</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}