"use client";

import React from "react";

export default function ResourcesHeroSection() {
  return (
    <>
      <style>{`
        @keyframes rhFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes rhBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(26px,16px) scale(1.04); }
        }
        @keyframes rhBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-20px,-14px) scale(1.03); }
        }
        @keyframes rhPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(0,43,50,0.35); }
          50%      { box-shadow:0 0 0 5px rgba(0,43,50,0); }
        }

        .rh-blob-1 { animation: rhBlobDrift1 14s ease-in-out infinite alternate; }
        .rh-blob-2 { animation: rhBlobDrift2 18s ease-in-out infinite alternate-reverse; }
        .rh-badge-dot { animation: rhPulse 2.6s ease-in-out infinite; }

        .rh-a1,.rh-a2,.rh-a3,.rh-a4 { opacity:0; }

        .rh-mounted .rh-a1 { animation: rhFadeUp .5s ease .05s forwards; }
        .rh-mounted .rh-a2 { animation: rhFadeUp .55s ease .18s forwards; }
        .rh-mounted .rh-a3 { animation: rhFadeUp .55s ease .30s forwards; }
        .rh-mounted .rh-a4 { animation: rhFadeUp .5s ease .44s forwards; }

        .rh-badge {
          transition: box-shadow .25s, transform .25s;
        }

        .rh-badge:hover {
          box-shadow: 0 4px 14px rgba(0,43,50,0.15);
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .rh-a1,.rh-a2,.rh-a3,.rh-a4 {
            opacity:1 !important;
            animation:none !important;
          }

          .rh-blob-1,
          .rh-blob-2,
          .rh-badge-dot {
            animation:none !important;
          }
        }
      `}</style>

      <section
        aria-label="Resources hero"
        className="relative flex items-center justify-center overflow-hidden min-h-[60vh] rh-mounted"
        style={{ background: "#ECF3FF" }}
      >
        {/* blobs */}
        <div
          aria-hidden="true"
          className="rh-blob-1 pointer-events-none absolute -top-32 -left-32 w-[440px] h-[440px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "#c7d2fe" }}
        />

        <div
          aria-hidden="true"
          className="rh-blob-2 pointer-events-none absolute -bottom-20 right-0 w-[340px] h-[340px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "#a5b4fc" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 py-24 flex flex-col items-center text-center">
          {/* Badge */}
          <span
            className="rh-a1 rh-badge inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border bg-white/80 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.16em] cursor-default"
            style={{ borderColor: "#c7d2fe", color: "#002B32" }}
          >
            <span
              aria-hidden="true"
              className="rh-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#002B32" }}
            />
            Resources
          </span>

          {/* Headline */}
          <h1
            className="rh-a2 font-bold tracking-tight mb-6"
            style={{
              fontSize: "clamp(32px,5.5vw,56px)",
              lineHeight: 1.05,
              color: "#002B32",
            }}
          >
            Learn how better
            <br />
            communication becomes better work
          </h1>

          {/* Sub-copy 1 */}
          <p
            className="rh-a3 text-[16px] leading-[1.8] mb-3 max-w-[520px]"
            style={{ color: "#374151" }}
          >
            Practical guides, product insights, and governance resources for
            teams using AI to turn conversations into clarity.
          </p>

          {/* Sub-copy 2 */}
          <p
            className="rh-a4 text-[13.5px] leading-[1.75] max-w-[400px]"
            style={{ color: "#6b7280" }}
          >
            For individuals, teams, businesses, and organizations evaluating
            accountable communication.
          </p>
        </div>
      </section>
    </>
  );
}