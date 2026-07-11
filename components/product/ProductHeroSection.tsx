"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ProductHeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const features = [
    "Business administration",
    "AI summaries & call intelligence",
    "Channels, spaces & shared context",
    "Secure messaging",
    "HD audio & video calls",
    "ZoikoTime integration options",
  ];

  return (
    <>
      <style>{`
        @keyframes phFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes phFadeUpImg {
          from { opacity:0; transform:translateX(28px) scale(1.02); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        @keyframes phPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(52,87,232,0.4); }
          50%      { box-shadow:0 0 0 5px rgba(52,87,232,0); }
        }
        @keyframes phShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }

        .ph-badge-dot { animation: phPulse 2.4s ease-in-out infinite; }

        /* entrance — staggered */
        .ph-a1,.ph-a2,.ph-a3,.ph-a4,.ph-a5 { opacity:0; }
        .ph-mounted .ph-a1 { animation: phFadeUp .5s ease .05s forwards; }
        .ph-mounted .ph-a2 { animation: phFadeUp .5s ease .15s forwards; }
        .ph-mounted .ph-a3 { animation: phFadeUp .5s ease .26s forwards; }
        .ph-mounted .ph-a4 { animation: phFadeUp .5s ease .37s forwards; }
        .ph-mounted .ph-a5 { animation: phFadeUp .5s ease .48s forwards; }

        .ph-img-wrap { opacity:0; }
        .ph-mounted .ph-img-wrap { animation: phFadeUpImg .8s cubic-bezier(.22,1,.36,1) .15s forwards; }
        .ph-img-wrap img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
        .ph-img-wrap:hover img { transform: scale(1.035); }

        /* primary btn shimmer */
        .ph-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s,filter .2s; }
        .ph-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.25) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .ph-btn-p:hover::after { animation: phShimmer .65s ease forwards; }
        .ph-btn-p:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(52,87,232,0.45); filter:brightness(1.08); }
        .ph-btn-p:active { transform:translateY(0); }

        .ph-arrow { display:inline-block; transition:transform .2s ease; }
        .ph-btn-p:hover .ph-arrow { transform:translateX(3px); }

        /* secondary btn — dark outline */
        .ph-btn-s { transition:background .2s,border-color .2s,transform .2s,box-shadow .2s; }
        .ph-btn-s:hover { background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.5); transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,0.25); }
        .ph-btn-s:active { transform:translateY(0); }

        /* badge hover */
        .ph-badge { transition:box-shadow .25s,transform .25s; }
        .ph-badge:hover { box-shadow:0 6px 18px rgba(0,0,0,0.25); transform:translateY(-1px); }

        /* feature row hover */
        .ph-feat { transition:transform .2s ease, opacity .2s ease; }
        .ph-feat:hover { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .ph-a1,.ph-a2,.ph-a3,.ph-a4,.ph-a5,.ph-img-wrap { opacity:1!important; animation:none!important; transform:none!important; }
          .ph-badge-dot { animation:none!important; }
          .ph-btn-p:hover,.ph-btn-s:hover,.ph-img-wrap:hover img { transform:none; }
        }
      `}</style>

      <section
        ref={heroRef}
        aria-label="Product hero"
        className={`relative pt-10 pb-10 w-full overflow-hidden ${mounted ? "ph-mounted" : ""}`}
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 15% 20%, rgba(52,87,232,0.22) 0%, rgba(52,87,232,0) 70%),
            radial-gradient(ellipse 45% 50% at 10% 85%, rgba(80,58,215,0.20) 0%, rgba(80,58,215,0) 70%),
            linear-gradient(135deg, #07091F 0%, #0B0F2D 55%, #14122B 100%)
          `,
        }}
      >
        {/* Grid: left text (padded) + right image (full-bleed, no gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* LEFT — text */}
          <div className="relative z-10 flex -mr-13 flex-col justify-center px-6 sm:px-10 lg:pl-30 lg:pr-8 py-20 lg:py-28">

            {/* Badge */}
            <span
              className="ph-a1 ph-badge inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full bg-white text-[12.5px] font-semibold w-fit"
              style={{ color: "#503AD7" }}
            >
              <span aria-hidden="true" className="ph-badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#3457E8" }} />
              Zoiko Sema — Intelligent Communication Platform
            </span>

            {/* Headline */}
            <h1
              className="ph-a2 font-bold leading-[1.3] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(28px,3.4vw,42px)" }}
            >
              Messaging, calls, meetings and{" "}
              <span style={{ color: "#C8BFFF" }}>AI clarity</span> in one
              secure platform.
            </h1>

            {/* Sub-copy */}
            <p className="ph-a3 text-[14.5px] leading-[1.8] text-white/60 mb-8 ">
              Sema brings secure messaging, audio calls, video meetings, AI summaries, channels,
              shared context and business-ready controls into one communication platform — with a
              direct route into ZoikoTime when organizations need verified workforce truth.
            </p>

            {/* Feature checklist — 2×3 grid */}
            <div className="ph-a4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10 w-full">
              {features.map((f, i) => (
                <div key={i} className="ph-feat flex items-center gap-2">
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center"
                    style={{ borderColor: "rgba(255,255,255,0.5)" }}
                  >
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <polyline points="1.5,4 3.2,5.8 6.5,2.2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-medium text-white/80 leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="ph-a5 flex flex-wrap items-center gap-3">
              <a
                href="/start-free/"
                className="ph-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ background: "#3457E8" }}
              >
                Start free
                <span className="ph-arrow text-base" aria-hidden="true">→</span>
              </a>

              <a
                href="/get-a-demo/"
                className="ph-btn-s inline-flex items-center gap-2.5 rounded-full border px-8 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                Get a demo
              </a>
            </div>
          </div>

          {/* RIGHT — full-bleed image, no gap, touches the section edge */}
          <div className="ph-img-wrap relative w-full min-h-[380px] lg:min-h-full">
            <img
              src="/Images/ProductHeroVideoCall.webp" // 👈 add your image URL here
              alt="Video call in progress on a laptop"
              className="absolute inset-0 w-full h-full object-cover rounded-l-[48px] lg:rounded-l-[64px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}