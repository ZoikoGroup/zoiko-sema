"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// TODO: replace with the final demo screenshot/photo URL.
const DEMO_IMAGE_URL = "/Images/Hero-Image-Placeholder-Replacement.webp";

const tags = [
  "Tailored to your workflow",
  "Real questions answered",
  "ZoikoTime walkthrough if relevant",
];

export default function GetDemoPage() {
 

  return (
    <>
      <style>{`
        @keyframes gdFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes gdBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(26px,16px) scale(1.04); }
        }
        @keyframes gdBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-20px,-14px) scale(1.03); }
        }
        @keyframes gdBadgeDot {
          0%,100% { box-shadow:0 0 0 0 rgba(165,180,252,0.5); }
          50%      { box-shadow:0 0 0 4px rgba(165,180,252,0); }
        }

        .gd-blob-1 { animation: gdBlobDrift1 13s ease-in-out infinite alternate; }
        .gd-blob-2 { animation: gdBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .gd-badge-dot { animation: gdBadgeDot 2.4s ease-in-out infinite; }

        .gd-a1,.gd-a2,.gd-a3,.gd-a4,.gd-a5,.gd-a6 { opacity:0; }
        .gd-mounted .gd-a1 { animation: gdFadeUp .5s ease .05s forwards; }
        .gd-mounted .gd-a2 { animation: gdFadeUp .5s ease .16s forwards; }
        .gd-mounted .gd-a3 { animation: gdFadeUp .5s ease .26s forwards; }
        .gd-mounted .gd-a4 { animation: gdFadeUp .5s ease .36s forwards; }
        .gd-mounted .gd-a5 { animation: gdFadeUp .5s ease .46s forwards; }
        .gd-mounted .gd-a6 { animation: gdFadeUp .65s cubic-bezier(.22,1,.36,1) .3s forwards; }

        .gd-btn-primary { transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease; }
        .gd-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(99,102,241,0.4); }
        .gd-btn-primary:active { transform: translateY(0); }

        .gd-btn-secondary { transition: border-color .2s ease, background-color .2s ease, transform .2s ease; }
        .gd-btn-secondary:hover { border-color: rgba(255,255,255,0.6); background-color: rgba(255,255,255,0.06); transform: translateY(-2px); }
        .gd-btn-secondary:active { transform: translateY(0); }

        .gd-tag { transition: border-color .2s ease, background-color .2s ease; }
        .gd-tag:hover { border-color: rgba(255,255,255,0.35); background-color: rgba(255,255,255,0.08); }

        @media (prefers-reduced-motion:reduce) {
          .gd-a1,.gd-a2,.gd-a3,.gd-a4,.gd-a5,.gd-a6 { opacity:1!important; animation:none!important; }
          .gd-blob-1,.gd-blob-2,.gd-badge-dot { animation:none!important; }
          .gd-btn-primary:hover,.gd-btn-secondary:hover { transform:none; }
        }
      `}</style>

      <div
         className="relative flex items-center overflow-hidden min-h-screen py-20 gd-mounted"
        style={{ background: "#12143a" }}
      >
        {/* blobs */}
        <div aria-hidden="true" className="gd-blob-1 pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full opacity-20 blur-[100px]" style={{ background: "#4338ca" }} />
        <div aria-hidden="true" className="gd-blob-2 pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full opacity-15 blur-[90px]" style={{ background: "#6366f1" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <span className="gd-a1 inline-flex items-center gap-2 w-fit text-[11px] font-bold uppercase tracking-[0.16em] text-gray-300">
              <span aria-hidden="true" className="gd-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} />
              Get a Demo
            </span>

            {/* Headline */}
            <h1 className="gd-a2 font-bold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(32px,4.4vw,48px)" }}>
              See Sema in action, tailored to your workflow.
            </h1>

            {/* Sub */}
            <p className="gd-a3 text-[15px] leading-[1.8] max-w-[500px]" style={{ color: "#b7bbe8" }}>
              A guided walkthrough for teams, enterprise rollout, security review, and
              ZoikoTime integration — with real questions answered, not a generic pitch.
            </p>

            {/* Buttons */}
            <div className="gd-a4 flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="gd-btn-primary rounded-xl px-6 py-3 text-[14.5px] font-semibold text-white"
                style={{ background: "#6366f1" }}
              >
                Request demo
              </Link>
              <Link
                href="/start-free"
                className="gd-btn-secondary rounded-xl px-6 py-3 text-[14.5px] font-semibold text-white border"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Start free instead
              </Link>
            </div>

            {/* Tags */}
            <div className="gd-a5 flex flex-wrap gap-2.5 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="gd-tag rounded-full border px-4 py-1.5 text-[12.5px] font-medium text-gray-200"
                  style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.03)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — image ── */}
          <div className="gd-a6 relative">
            <div
              className="relative rounded-2xl overflow-hidden"
             
            >
              {DEMO_IMAGE_URL ? (
                <img
                  src={DEMO_IMAGE_URL}
                  alt="Sema product walkthrough preview"
                  className="w-full h-auto block"
                />
              ) : (
                <div
                  className="w-full  flex items-center justify-center text-[13px]"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#8b8fc7" }}
                >
                  Add DEMO_IMAGE_URL to display the preview image
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
