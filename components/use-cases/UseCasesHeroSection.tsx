"use client";

import React, { useEffect, useState, useRef } from "react";

export default function UseCasesHeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ucBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(28px,18px) scale(1.05); }
        }
        @keyframes ucBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-22px,-16px) scale(1.04); }
        }
        @keyframes ucPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(71,71,135,0.45); }
          50%      { box-shadow:0 0 0 5px rgba(71,71,135,0); }
        }
        @keyframes ucShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }

        .uc-blob-1 { animation: ucBlobDrift1 13s ease-in-out infinite alternate; }
        .uc-blob-2 { animation: ucBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .uc-badge-dot { animation: ucPulse 2.4s ease-in-out infinite; }

        .uc-a1,.uc-a2,.uc-a3,.uc-a4,.uc-a5 { opacity:0; }
        .uc-mounted .uc-a1 { animation: ucFadeUp .5s ease .05s forwards; }
        .uc-mounted .uc-a2 { animation: ucFadeUp .5s ease .18s forwards; }
        .uc-mounted .uc-a3 { animation: ucFadeUp .5s ease .30s forwards; }
        .uc-mounted .uc-a4 { animation: ucFadeUp .5s ease .44s forwards; }
        .uc-mounted .uc-a5 { animation: ucFadeUp .5s ease .56s forwards; }

        /* primary btn */
        .uc-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .uc-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .uc-btn-p:hover::after { animation: ucShimmer .65s ease forwards; }
        .uc-btn-p:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.35); }
        .uc-btn-p:active { transform:translateY(0); }
        .uc-arrow { display:inline-block; transition:transform .2s ease; }
        .uc-btn-p:hover .uc-arrow { transform:translateX(3px); }

        /* secondary btn */
        .uc-btn-s { transition:background .2s,border-color .2s,transform .2s,box-shadow .2s; }
        .uc-btn-s:hover { background:#fff; border-color:#a5b4fc; transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .uc-btn-s:active { transform:translateY(0); }
        .uc-play { transition:background .2s,transform .2s; }
        .uc-btn-s:hover .uc-play { background:#474787!important; transform:scale(1.1); }

        /* badge hover */
        .uc-badge { transition:box-shadow .25s,transform .25s; }
        .uc-badge:hover { box-shadow:0 4px 14px rgba(71,71,135,0.18); transform:translateY(-1px); }

        @media (prefers-reduced-motion:reduce) {
          .uc-a1,.uc-a2,.uc-a3,.uc-a4,.uc-a5 { opacity:1!important; animation:none!important; }
          .uc-blob-1,.uc-blob-2,.uc-badge-dot { animation:none!important; }
          .uc-btn-p:hover,.uc-btn-s:hover { transform:none; }
        }
      `}</style>

      <section
        aria-label="Use Cases hero"
        className={`relative flex items-center justify-center overflow-hidden min-h-[72vh] ${mounted ? "uc-mounted" : ""}`}
        style={{ background: "#ECF3FF" }}
      >
        {/* blobs */}
        <div aria-hidden="true" className="uc-blob-1 pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full opacity-25 blur-[90px]" style={{ background: "#c7d2fe" }} />
        <div aria-hidden="true" className="uc-blob-2 pointer-events-none absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full opacity-20 blur-[80px]" style={{ background: "#a5b4fc" }} />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-10 py-24 flex flex-col items-center text-center">

          {/* Badge */}
          <span
            className="uc-a1 uc-badge inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border bg-white/80 backdrop-blur-sm text-[12px] font-semibold uppercase tracking-[0.13em] cursor-default"
            style={{ borderColor: "#c7d2fe", color: "#474787" }}
          >
            <span aria-hidden="true" className="uc-badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#474787" }} />
            Use Cases
          </span>

          {/* Headline */}
          <h1
            className="uc-a2 font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
            style={{ fontSize: "35px" }}
          >
            Communication that becomes accountable work
          </h1>

          {/* Sub-copy */}
          <p className="uc-a3 text-[15.5px] leading-[1.8] text-gray-500 max-w-[680px] mb-10">
            Sema is designed to turn meetings, calls, team discussions and workforce signals
            into clear next steps. Four workflows show how — from a meeting that produces
            decisions to a team chat that becomes coordinated execution.
          </p>

          {/* CTAs */}
          <div className="uc-a4 flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#workflows"
              className="uc-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#474787" }}
            >
              See the workflows
              <span className="uc-arrow text-base" aria-hidden="true">→</span>
            </a>

            <a
              href="/get-a-demo/"
              className="uc-btn-s inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-[15px] font-medium text-gray-700"
            >
              <span
                aria-hidden="true"
                className="uc-play flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: "#6366f1" }}
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                </svg>
              </span>
              Get a demo
            </a>
          </div>

          {/* Disclaimer note */}
          <p className="uc-a5 text-[12.5px] text-gray-400 max-w-[480px] leading-relaxed">
            Sema is in launch. The workflows on this page are how Sema is designed to operate,
            not customer case evidence.
          </p>

        </div>
      </section>
    </>
  );
}