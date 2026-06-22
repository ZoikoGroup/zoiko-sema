"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ProductHeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const features = [
    "Business administration",
    "AI summaries & action items",
    "Channels, spaces & shared context",
    "Secure messaging",
    "HD audio & video calls",
    "ZoikoTime integration pathway",
  ];

  return (
    <>
      <style>{`
        @keyframes phFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes phBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(28px,18px) scale(1.05); }
        }
        @keyframes phBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-22px,-16px) scale(1.04); }
        }
        @keyframes phPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow:0 0 0 5px rgba(71,71,135,0); }
        }
        @keyframes phShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }

        .ph-blob-1 { animation: phBlobDrift1 13s ease-in-out infinite alternate; }
        .ph-blob-2 { animation: phBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .ph-badge-dot { animation: phPulse 2.4s ease-in-out infinite; }

        /* entrance — staggered */
        .ph-a1,.ph-a2,.ph-a3,.ph-a4,.ph-a5 { opacity:0; }
        .ph-mounted .ph-a1 { animation: phFadeUp .5s ease .05s forwards; }
        .ph-mounted .ph-a2 { animation: phFadeUp .5s ease .15s forwards; }
        .ph-mounted .ph-a3 { animation: phFadeUp .5s ease .26s forwards; }
        .ph-mounted .ph-a4 { animation: phFadeUp .5s ease .37s forwards; }
        .ph-mounted .ph-a5 { animation: phFadeUp .5s ease .48s forwards; }

        /* primary btn shimmer */
        .ph-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .ph-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .ph-btn-p:hover::after { animation: phShimmer .65s ease forwards; }
        .ph-btn-p:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.35); }
        .ph-btn-p:active { transform:translateY(0); }

        /* arrow slides */
        .ph-arrow { display:inline-block; transition:transform .2s ease; }
        .ph-btn-p:hover .ph-arrow { transform:translateX(3px); }

        /* secondary btn */
        .ph-btn-s { transition:background .2s,border-color .2s,transform .2s,box-shadow .2s; }
        .ph-btn-s:hover { background:#fff; border-color:#a5b4fc; transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .ph-btn-s:active { transform:translateY(0); }
        .ph-play { transition:background .2s,transform .2s; }
        .ph-btn-s:hover .ph-play { background:#474787!important; transform:scale(1.1); }

        /* badge hover */
        .ph-badge { transition:box-shadow .25s,transform .25s; }
        .ph-badge:hover { box-shadow:0 4px 14px rgba(71,71,135,0.18); transform:translateY(-1px); }

        /* feature pill hover */
        .ph-feat { transition:background .2s,transform .2s; }
        .ph-feat:hover { background:rgba(255,255,255,0.9)!important; transform:translateY(-1px); }

        @media (prefers-reduced-motion:reduce) {
          .ph-a1,.ph-a2,.ph-a3,.ph-a4,.ph-a5 { opacity:1!important; animation:none!important; }
          .ph-blob-1,.ph-blob-2,.ph-badge-dot { animation:none!important; }
          .ph-btn-p:hover,.ph-btn-s:hover { transform:none; }
        }
      `}</style>

      <section
        ref={heroRef}
        aria-label="Product hero"
        className={`relative flex items-center justify-center overflow-hidden min-h-[80vh] ${mounted ? "ph-mounted" : ""}`}
        style={{ background: "#ECF3FF" }}
      >
        {/* blobs */}
        <div aria-hidden="true" className="ph-blob-1 pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full opacity-25 blur-[90px]" style={{ background: "#c7d2fe" }} />
        <div aria-hidden="true" className="ph-blob-2 pointer-events-none absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full opacity-20 blur-[80px]" style={{ background: "#a5b4fc" }} />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-10 py-24 flex flex-col items-center text-center">

          {/* Badge */}
          <span
            className="ph-a1 ph-badge inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm text-[13px] font-medium cursor-default"
            style={{ borderColor: "#c7d2fe", color: "#474787" }}
          >
            <span aria-hidden="true" className="ph-badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#474787" }} />
            Zoiko Sema — Intelligent Communication Platform
          </span>

          {/* Headline — all 35px */}
          <h1
            className="ph-a2 font-bold leading-[1.5] tracking-tight text-gray-900 mb-5"
            style={{ fontSize: "44px" }}
          >
            Messaging, calls, meetings and<br />
            AI clarity in one secure platform.
          </h1>

          {/* Sub-copy */}
          <p className="ph-a3 text-[15px] leading-[1.8] text-gray-500  mb-8">
            Sema brings secure messaging, audio calls, video meetings, AI summaries, channels,
            shared context and business-ready controls into one communication platform — with a
            direct route into ZoikoTime when organizations need verified workforce truth.
          </p>

          {/* Feature pills — 2×3 grid */}
          <div className="ph-a4 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2.5 mb-10 w-full ">
            {features.map((f, i) => (
              <div
                key={i}
                className="ph-feat flex items-center gap-2 px-3 py-1.5 rounded-lg"
             
              >
                {/* circle check */}
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#474787" }}
                >
                  <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                    <polyline points="1.5,4 3.2,5.8 6.5,2.2" stroke="#474787" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[13px] font-medium text-gray-700 leading-snug">{f}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="ph-a5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/start-free/"
              className="ph-btn-p inline-flex items-center gap-2 rounded-full px-20 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#474787" }}
            >
              Start free
              <span className="ph-arrow text-base" aria-hidden="true">→</span>
            </a>

            <a
              href="/get-a-demo/"
              className="ph-btn-s inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-20 py-3.5 text-[15px] font-medium text-gray-700"
            >
              <span
                aria-hidden="true"
                className="ph-play flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: "#474889" }}
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