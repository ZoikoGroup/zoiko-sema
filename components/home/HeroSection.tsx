"use client";

import React, { useEffect, useState, useRef } from "react";

interface HeroSectionProps {
  heroImageUrl?: string;
}

// ── Count-up hook ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

export default function HeroSection({
  heroImageUrl = "/Home/banner.webp",
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // count-up values
  const workspaces = useCountUp(10, 1600, statsVisible);
  const countries  = useCountUp(23, 1800, statsVisible);
  const uptime     = useCountUp(999, 2000, statsVisible); // rendered as 99.9

  useEffect(() => {
    setMounted(true);
  }, []);

  // trigger count-up when stats row enters viewport
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(28px,18px) scale(1.05); }
        }
        @keyframes blobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-22px,-16px) scale(1.04); }
        }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0 rgba(71,71,135,0.45); }
          50%      { box-shadow: 0 0 0 5px rgba(71,71,135,0); }
        }
        @keyframes shimmerSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }

        .hero-blob-1 { animation: blobDrift1 13s ease-in-out infinite alternate; }
        .hero-blob-2 { animation: blobDrift2 17s ease-in-out infinite alternate-reverse; }
        .badge-dot   { animation: pulseRing 2.4s ease-in-out infinite; }

        .anim-1,.anim-2,.anim-3,.anim-4,.anim-5,.anim-right { opacity:0; }

        .mounted .anim-1 { animation: fadeUp .5s ease .05s forwards; }
        .mounted .anim-2 { animation: fadeUp .5s ease .15s forwards; }
        .mounted .anim-3 { animation: fadeUp .5s ease .25s forwards; }
        .mounted .anim-4 { animation: fadeUp .5s ease .35s forwards; }
        .mounted .anim-5 { animation: fadeUp .5s ease .45s forwards; }
        .mounted .anim-right { animation: slideInRight .65s ease .1s forwards; }

        /* shimmer on primary btn */
        .shimmer-line {
          position:absolute; inset:0; overflow:hidden; border-radius:inherit; pointer-events:none;
        }
        .shimmer-line::after {
          content:"";
          position:absolute; top:0; left:0; width:40%; height:100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-100%);
        }
        .btn-primary:hover .shimmer-line::after {
          animation: shimmerSlide .65s ease forwards;
        }

        @media (prefers-reduced-motion:reduce) {
          .anim-1,.anim-2,.anim-3,.anim-4,.anim-5,.anim-right { opacity:1!important; animation:none!important; }
          .hero-blob-1,.hero-blob-2,.badge-dot { animation:none!important; }
        }
      `}</style>

      <section
        ref={heroRef}
        aria-label="Hero"
        style={{ backgroundColor: "#ECF3FF" }}
        className={`relative flex items-center overflow-hidden min-h-[88vh] ${mounted ? "mounted" : ""}`}
      >
        {/* ── Blobs ── */}
        <div aria-hidden="true" className="hero-blob-1 pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-[90px]" style={{ background: "#c7d2fe" }} />
        <div aria-hidden="true" className="hero-blob-2 pointer-events-none absolute bottom-0 right-[35%] w-[360px] h-[360px] rounded-full opacity-20 blur-[80px]" style={{ background: "#a5b4fc" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ════ LEFT ════ */}
          <div className="flex flex-col">

            {/* Badge */}
            <span className="anim-1 inline-flex items-center gap-2 w-fit mb-6 px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm text-sm font-medium cursor-default transition-all duration-300 hover:-translate-y-px hover:shadow-md"
              style={{ borderColor: "#474688", color: "#474787" }}>
              <span aria-hidden="true" className="badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#474787" }} />
              Zoiko Sema — Intelligent Communication
            </span>

            {/* Headline */}
            <h1 className="anim-2 font-bold leading-[1.08] tracking-tight text-[#15131F] mb-5"
              style={{ fontSize: "clamp(34px,4.2vw,51px)" }}>
              Where conversations
              <br />become clarity
            </h1>

            {/* Sub-copy */}
            <p className="anim-3 text-[15.5px] leading-[1.75] text-[#5C5870] mb-8 max-w-[490px]">
              Sema brings secure messaging, audio calls, video meetings, AI
              summaries and team collaboration into one intelligent communication
              platform — built for businesses, teams and individuals, with a
              direct route into ZoikoTime workforce truth.
            </p>

            {/* CTAs */}
            <div className="anim-4 flex flex-wrap items-center gap-3 mb-7">
              {/* Primary */}
              <a href="#start"
                className="btn-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
                style={{ background: "#474787" }}>
                <span aria-hidden="true" className="shimmer-line" />
                Start free
                <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              {/* Secondary */}
              <a href="#demo"
                className="group inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-[15px] font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
                <span aria-hidden="true"
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 group-hover:scale-110"
                  style={{ background: "#474787" }}>
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                    <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                  </svg>
                </span>
                Get a demo
              </a>
            </div>

            {/* ── Divider ── */}
            <div className="anim-4 w-full h-px bg-[#474688] mb-7" />

            {/* ── Stats with count-up ── */}
            <div ref={statsRef} aria-label="Platform statistics" className="anim-5 flex items-center gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-bold leading-none tracking-tight text-gray-900">
                  {workspaces}K+
                </span>
                <span className="text-[13px] text-gray-400 font-normal">Active workspaces</span>
              </div>

              <div aria-hidden="true" className="w-px h-10 bg-gray-200 flex-shrink-0" />

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-bold leading-none tracking-tight text-gray-900">
                  {countries}+
                </span>
                <span className="text-[13px] text-gray-400 font-normal">Countries supported</span>
              </div>

              <div aria-hidden="true" className="w-px h-10 bg-gray-200 flex-shrink-0" />

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-bold leading-none tracking-tight text-gray-900">
                  {(uptime / 10).toFixed(1)}%
                </span>
                <span className="text-[13px] text-gray-400 font-normal">Platform uptime</span>
              </div>
            </div>
          </div>

          {/* ════ RIGHT — image ════ */}
          <div className="anim-right relative flex items-center justify-center order-first lg:order-last">
            <div className="group w-full h-[300px] sm:h-[400px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1">
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt="Sema intelligent communication platform"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-2xl text-sm font-medium text-indigo-400"
                  style={{ background: "linear-gradient(120deg,#e0e7ff,#c7d2fe,#e0e7ff)", backgroundSize: "200% 100%" }}>
                  Place your image at public/Home/banner.webp
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}