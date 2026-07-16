"use client";

import React, { useEffect, useState, useRef } from "react";

const GRADIENT = "linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%)";

const cards = [
  {
    key: "business",
     restBg: "#ffffff",
    hoverBg: GRADIENT,
    restLabel: "#3B5FDD",
    hoverLabel: "#c7c9ef",
    restTitle: "#111827",
    hoverTitle: "#ffffff",
    restDesc: "#4b5563",
    hoverDesc: "#c7caed",
    restCta: "#3B5FDD",
    hoverCta: "#ffffff",
    label: "Primary · Business-First",
    title: "Sema for Business",
    desc: "For companies that need communication, accountability and operational clarity — across teams, departments, regions and roles.",
    ctaLabel: "Explore Sema for Business",
    href: "/pricing",
    imageUrl: "/Home/Business.webp", // <-- paste your image URL here
  },
  {
    key: "teams",
    restBg: "#ffffff",
    hoverBg: GRADIENT,
    restLabel: "#3B5FDD",
    hoverLabel: "#c7c9ef",
    restTitle: "#111827",
    hoverTitle: "#ffffff",
    restDesc: "#4b5563",
    hoverDesc: "#c7caed",
    restCta: "#3B5FDD",
    hoverCta: "#ffffff",
    label: "Teams",
    title: "Sema for Teams",
    desc: "For small teams, departments, projects and professional groups who need one place to communicate and coordinate.",
    ctaLabel: "Explore Teams",
    href: "#teams",
    imageUrl: "/Home/Teams.webp", // <-- paste your image URL here
  },
  {
    key: "individuals",
    restBg: "#ffffff",
    hoverBg: GRADIENT,
    restLabel: "#3B5FDD",
    hoverLabel: "#c7c9ef",
    restTitle: "#111827",
    hoverTitle: "#ffffff",
    restDesc: "#4b5563",
    hoverDesc: "#c7caed",
    restCta: "#3B5FDD",
    hoverCta: "#ffffff",
    label: "Individuals",
    title: "Sema for You",
    desc: "For people who want secure audio calls, video calls and intelligent conversation memory — without needing a business account.",
    ctaLabel: "Use Sema for free",
    href: "/start-free",
    imageUrl: "/Home/Individuals.webp", // <-- paste your image URL here
  },
];

// ── Intersection observer hook ─────────────────────────────────────────────
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

export default function WorksForSection() {
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.1);

  return (
    <>
      <style>{`
        /* ── fade-up entrance ── */
        @keyframes wfFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .wf-hidden  { opacity: 0; transform: translateY(36px); }
        .wf-visible { animation: wfFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── card lift + shadow on hover (identical on all 3 cards) ── */
        .wf-card {
          transition: transform .32s cubic-bezier(.22,1,.36,1),
                      box-shadow .32s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .wf-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 54px rgba(15,15,40,0.18);
        }

        /* image zoom on card hover */
        .wf-media { overflow: hidden; }
        .wf-media img { transition: transform .55s cubic-bezier(.22,1,.36,1); }
        .wf-card:hover .wf-media img { transform: scale(1.07); }

        /* image loading skeleton (shows until imageUrl is set) */
        @keyframes wfShimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .wf-skeleton {
          background: linear-gradient(90deg, #eceef7 0%, #f6f7fc 50%, #eceef7 100%);
          background-size: 400px 100%;
          animation: wfShimmer 1.8s ease-in-out infinite;
        }

        /* ── Bottom section: two stacked background layers crossfade on hover ── */
        .wf-bottom { position: relative; isolation: isolate; }
        .wf-bg-layer {
          position: absolute;
          inset: 0;
          transition: opacity .45s ease;
        }
        .wf-bg-rest { opacity: 1; z-index: 0; }
        .wf-bg-hover { opacity: 0; z-index: 1; }
        .wf-card:hover .wf-bg-rest { opacity: 0; }
        .wf-card:hover .wf-bg-hover { opacity: 1; }

        .wf-content { position: relative; z-index: 2; }

        /* text color crossfade */
        .wf-label, .wf-title, .wf-desc, .wf-cta {
          transition: color .4s ease;
        }

        /* ── CTA arrow shift on hover ── */
        .wf-cta { display: inline-flex; align-items: center; gap: 8px; transition: gap .22s ease, color .4s ease; }
        .wf-cta:hover { gap: 10px; }
        .wf-cta-arrow { transition: transform .22s ease; display: inline-block; }
        .wf-cta:hover .wf-cta-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .wf-hidden, .wf-visible { opacity:1 !important; transform:none !important; animation:none !important; }
          .wf-card:hover, .wf-card:hover .wf-media img { transform: none !important; }
          .wf-skeleton { animation: none !important; }
          .wf-bg-layer { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Built for the way you work"
        className="w-full bg-white py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-12 text-center wf-hidden ${headInView ? "wf-visible" : ""}`}
          >
            <h2
              className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4"
              style={{ fontSize: "clamp(26px,3.5vw,35px)" }}
            >
              Built for the way you work and the way your business runs
            </h2>
            <p className="mx-auto max-w-[800px] text-[15.5px] leading-[1.75] text-gray-500">
              Sema is business-first and individual-accessible. Companies get governed
              communication and operational clarity. Individuals get secure, intelligent
              calls and conversations — no business account required.
            </p>
          </div>

          {/* ── Cards grid ── */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          >
            {cards.map((card, i) => (
              <div
                key={card.key}
                className={`wf-card flex flex-col rounded-[20px] overflow-hidden wf-hidden ${
                  cardsInView ? "wf-visible" : ""
                }`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  boxShadow: "0 8px 24px rgba(15,15,40,0.06)",
                }}
              >
                {/* ── Image on top ── */}
                <div className="wf-media relative w-full aspect-[4/3]">
                  {card.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover block"
                    />
                  ) : (
                    <div className="wf-skeleton w-full h-full" />
                  )}
                </div>

                {/* ── Bottom content — crossfading background layers ── */}
                <div className="wf-bottom flex items-center flex-col flex-1 px-7 py-7 sm:px-8 sm:py-8">
                  {/* rest-state background */}
                  <div
                    className="wf-bg-layer wf-bg-rest"
                    style={{ background: card.restBg }}
                  />
                  {/* hover-state background */}
                  <div
                    className="wf-bg-layer wf-bg-hover"
                    style={{ background: card.hoverBg }}
                  />

                  {/* content sits above both layers */}
                  <div className="wf-content flex flex-col flex-1">
                    <p
                      className="wf-label mb-3 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                      style={
                        {
                          "--rest": card.restLabel,
                          "--hover": card.hoverLabel,
                          color: "var(--rest)",
                        } as React.CSSProperties
                      }
                    >
                      {card.label}
                    </p>

                    <h3
                      className="wf-title font-bold leading-tight mb-3"
                      style={
                        {
                          fontSize: "clamp(20px,2.1vw,26px)",
                          "--rest": card.restTitle,
                          "--hover": card.hoverTitle,
                          color: "var(--rest)",
                        } as React.CSSProperties
                      }
                    >
                      {card.title}
                    </h3>

                    <p
                      className="wf-desc text-[14px] leading-[1.72] mb-7"
                      style={
                        {
                          "--rest": card.restDesc,
                          "--hover": card.hoverDesc,
                          color: "var(--rest)",
                        } as React.CSSProperties
                      }
                    >
                      {card.desc}
                    </p>

                    <a
                      href={card.href}
                      className="wf-cta mt-auto  text-[14.5px] font-semibold text-center"
                      style={
                        {
                          "--rest": card.restCta,
                          "--hover": card.hoverCta,
                          color: "var(--rest)",
                        } as React.CSSProperties
                      }
                    >
                      {card.ctaLabel}
                      <span aria-hidden="true" className="wf-cta-arrow">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card-hover text-color swap — driven by the CSS vars set inline above */}
      <style>{`
        .wf-card:hover .wf-label,
        .wf-card:hover .wf-title,
        .wf-card:hover .wf-desc,
        .wf-card:hover .wf-cta {
          color: var(--hover) !important;
        }
      `}</style>
    </>
  );
}