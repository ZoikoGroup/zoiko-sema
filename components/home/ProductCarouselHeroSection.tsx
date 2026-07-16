"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Replace each `src` with your actual image URL. `href` is where the card links to.
const carouselItems = [
  { id: 1, src: "/Home/Meeting1.png", alt: "Meetings", href: "#" },
  { id: 2, src: "/Home/Meeting-1.png", alt: "Messaging", href: "/messaging" },
  { id: 3, src: "/Home/Meeting-2.png", alt: "AI Summaries", href: "/ai-meetings" },
  { id: 4, src: "/Home/Meeting-3.png", alt: "Sema Agent", href: "#" },
  { id: 5, src: "/Home/Meeting-4.png", alt: "ZoikoTime", href: "https://zoikotime.com/" },
  { id: 6, src: "/Home/Meeting-5.png", alt: "Calls", href: "/audio-calls" },
  { id: 7, src: "/Home/Meeting-6.png", alt: "Channels", href: "/channels-spaces" },
];

// Duplicated once so the marquee loop is seamless — never edit this directly,
// it's derived from carouselItems above.
const marqueeItems = [...carouselItems, ...carouselItems];

const trustSignals = [
  {
    label: "Policy-aware AI",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Verified work context",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Audit trail",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    label: "Enterprise-grade security",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

// Add your icon image URL to `iconUrl` — falls back to the shield SVG until you do.
const complianceBadges = [
  { label: "SOC 2", sub: "Type II", color: "#EF4444", iconUrl: "/Home/SOC.png/" },
  { label: "ISO", sub: "27001", color: "#D97706", iconUrl: "/Home/ISO.png/" },
  { label: "GDPR", sub: "Ready", color: "#3B82F6", iconUrl: "/Home/GDPR.png/" },
  { label: "HIPAA", sub: "Eligible", color: "#8B5CF6", iconUrl: "/Home/HIPAA.png/" },
  { label: "Global data", sub: "residency", color: "#06B6D4", iconUrl: "/Home/Global-data.png/" },
];

export default function ProductCarouselHeroSection() {
  const { ref: contentRef, inView: contentIn } = useInView(0.2);
  const { ref: carouselRef, inView: carouselIn } = useInView(0.1);

  // Purely cosmetic dot progress — the marquee itself runs continuously via CSS
  const [activeDot, setActiveDot] = useState(0);
  const [dotsPaused, setDotsPaused] = useState(false);

  useEffect(() => {
    if (dotsPaused) return;
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % carouselItems.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [dotsPaused]);

  return (
    <>
      <style>{`
        @keyframes pchFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pch-hidden  { opacity: 0; transform: translateY(28px); }
        .pch-visible { animation: pchFadeUp .75s cubic-bezier(.22,1,.36,1) forwards; }

        .pch-carousel-wrap { opacity: 0; transform: translateY(24px); }
        .pch-carousel-wrap.pch-visible { animation: pchFadeUp .8s cubic-bezier(.22,1,.36,1) forwards; }

        /* ---- Seamless continuous marquee (no scrollbar, no snap-back) ---- */
        .pch-marquee-viewport {
          overflow: hidden;
        }
        .pch-marquee-track {
          display: flex;
          width: max-content;
          animation: pchMarqueeScroll 40s linear infinite;
        }
        .pch-marquee-viewport:hover .pch-marquee-track {
          animation-play-state: paused;
        }
        @keyframes pchMarqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Card hover — track has extra top/bottom padding so the lift never clips */
        .pch-card {
          transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, border-color .35s ease;
        }
        .pch-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255,255,255,0.2);
        }

        .pch-dot {
          transition: width .3s ease, background-color .3s ease, opacity .3s ease;
        }

        .pch-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .pch-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(59,95,221,0.45);
        }

        .pch-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .pch-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.2);
        }

        .pch-btn-ghost {
          transition: color .25s ease, gap .25s ease;
        }
        .pch-btn-ghost:hover {
          color: white;
          gap: 10px;
        }

        .pch-badge { transition: transform .25s ease; }
        .pch-badge:hover { transform: translateY(-2px); }

        @media (prefers-reduced-motion: reduce) {
          .pch-hidden, .pch-visible, .pch-carousel-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pch-marquee-track { animation: none !important; }
          .pch-card:hover, .pch-btn-primary:hover, .pch-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Governed communications platform hero"
        className="relative w-full overflow-hidden"
      >
        {/* Background image + dark overlay gradient */}
        <img
          src="/Home/Container.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 pt-16 sm:pt-20 md:pt-10 pb-12 sm:pb-16 md:pb-20">
          {/* Hero content */}
          <div
            ref={contentRef}
            className={`pch-hidden ${contentIn ? "pch-visible" : ""} mx-auto w-full max-w-4xl px-4 sm:px-6 text-center`}
          >
            <h1 className="text-[clamp(26px,7vw,42px)] font-extrabold leading-[1.18] tracking-tight text-white mb-4 sm:mb-5">
              Governed communications that turn conversations{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6C8CFF, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                into action.
              </span>
            </h1>

            <p className="mx-auto max-w-[92%] sm:max-w-[620px] text-[13.5px] sm:text-[15px] leading-[1.7] sm:leading-[1.75] text-[#A9AFC9] mb-7 sm:mb-9">
              One secure platform for meetings, messaging, calls, and agentic
              AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full sm:w-auto">
              <a href="/products" >
              <button
                className="pch-btn-primary w-full sm:w-auto rounded-[10px] px-6 py-3 text-[13.5px] sm:text-[14px] font-semibold text-white inline-flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(90deg, #3457E8, #3457E8)" }}
              >
                Explore products
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button></a>
                <a href="/pricing">
              <button className="pch-btn-secondary w-full sm:w-auto rounded-[10px] px-6 py-3 text-[13.5px] sm:text-[14px] font-semibold text-gray-900 bg-white">
                Find your plan
              </button></a>

              <button className="pch-btn-ghost inline-flex items-center justify-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-white/70 px-2 py-3">
                <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </span>
                Watch Sema act
              </button>
            </div>

            {/* Trust signals row */}
            {/* <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 px-2">
              {trustSignals.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12.5px] text-[#D6D9EC] whitespace-nowrap"
                >
                  <span className="text-white/40">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div> */}
          </div>

          {/* Carousel — continuous seamless marquee, no arrows, dots are decorative */}
          <div
            ref={carouselRef}
            className={`pch-carousel-wrap ${carouselIn ? "pch-visible" : ""} mt-10 sm:mt-5 md:mt-5`}
          >
            <div
              className="pch-marquee-viewport"
              onMouseEnter={() => setDotsPaused(true)}
              onMouseLeave={() => setDotsPaused(false)}
            >
              <div className="pch-marquee-track gap-0 pl-4 sm:pl-6 md:pl-10 lg:pl-16 pt-4 pb-6">
                {marqueeItems.map((item, i) => (
                  <a
                    key={`${item.id}-${i}`}
                    href={item.href}
                    className="flex-shrink-0 w-[168px] xs:w-[190px] sm:w-[220px] md:w-[250px] lg:w-[280px]"
                  >
                    <div className="pch-card rounded-2xl overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Dot indicator — decorative progress only, marquee never stops looping */}
            <div className="flex items-center justify-center gap-2 mt-3 sm:mt-2">
              {carouselItems.map((_, i) => (
                <span
                  key={i}
                  className="pch-dot h-1.5 rounded-full"
                  style={{
                    width: i === activeDot ? "22px" : "6px",
                    backgroundColor:
                      i === activeDot
                        ? "var(--brand)"
                        : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Trust / compliance bar — pill shape, label | divider | colored badge row */}
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 mt-10 sm:mt-16 md:mt-24 lg:mt-20">
            <div className="rounded-[28px] sm:rounded-full border border-[#535353] bg-[#0D1130] px-5 sm:px-6 md:px-8 py-6 sm:py-5 md:py-4 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-8">
              {/* Left label */}
              <div className="text-center md:text-left flex-shrink-0">
                <p className="text-[13.5px] sm:text-[14px] font-bold text-white mb-1">
                  Built for trust.
                </p>
                <p className="text-[11px] sm:text-[12px] text-white/45 max-w-[280px] sm:max-w-none mx-auto md:mx-0">
                  Backed by enterprise-grade security, compliance, and data
                  residency.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-white/10 flex-shrink-0" />

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-8">
                {complianceBadges.map((b, i) => (
                  <div key={i} className="pch-badge flex items-center gap-2 sm:gap-2.5">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0">
                      {b.iconUrl ? (
                        <img src={b.iconUrl} alt={b.label} className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]" />
                      ) : (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={b.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      )}
                    </span>
                    <div className="text-left">
                      <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-white leading-tight whitespace-nowrap">
                        {b.label}
                      </p>
                      <p className="text-[10px] sm:text-[10.5px] text-white/40 leading-tight whitespace-nowrap">
                        {b.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}