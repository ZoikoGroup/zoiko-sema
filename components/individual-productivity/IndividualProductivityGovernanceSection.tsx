"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
function useInView(threshold = 0.1) {
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

const BRAND = "#3457E8";

// TODO: replace with your actual image path, e.g. "/images/individual-productivity/governance.png"
const SIDE_IMAGE_SRC = "/images/governance.webp";

const cards = [
  {
    title: "Permission-aware context",
    description: "AI and search show accessible sources only.",
    badge: "Privacy-respecting",
    badgeColor: "#16A34A",
    badgeBg: "#DCFCE7",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "AI governance",
    description: "Policy notice, sensitive-space exclusion, retention labels.",
    badge: "Advanced on Business+",
    badgeColor: BRAND,
    badgeBg: "#E6E9FB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5z" />
      </svg>
    ),
  },
  {
    title: "Data retention",
    description: "Notes, summaries, and tasks follow workspace retention.",
    badge: "Custom on Enterprise",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 3v4h8V3" />
        <line x1="7" y1="13" x2="17" y2="13" />
        <line x1="7" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "Identity & access",
    description: "SSO, MFA, sessions, and domain controls.",
    badge: "SSO on Business+",
    badgeColor: BRAND,
    badgeBg: "#E6E9FB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
];

export default function IndividualProductivityGovernanceSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.2);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ipgFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ipgFadeIn {
          from { opacity: 0; transform: translateY(40px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ipg-hidden  { opacity: 0; transform: translateY(32px); }
        .ipg-visible { animation: ipgFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipg-image-hidden  { opacity: 0; transform: translateY(40px) scale(.97); }
        .ipg-image-visible { animation: ipgFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ipg-card { opacity: 0; transform: translateY(24px); }
        .ipg-card.ipg-card-in {
          animation: ipgFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipg-card {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .ipg-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -20px rgba(15,23,42,0.18);
        }

        .ipg-icon { transition: transform .25s ease; }
        .ipg-card:hover .ipg-icon { transform: scale(1.1); }

        .ipg-image-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ipg-image-wrap:hover { transform: translateY(-6px); }
        .ipg-image-wrap img { transition: filter .3s ease; }
        .ipg-image-wrap:hover img { filter: drop-shadow(0 20px 30px rgba(15,23,42,0.18)); }

        @media (prefers-reduced-motion: reduce) {
          .ipg-hidden, .ipg-image-hidden, .ipg-card { opacity: 1 !important; transform: none !important; }
          .ipg-visible, .ipg-image-visible, .ipg-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Governance and privacy"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end ">

            {/* LEFT — copy + cards */}
            <div>
              <p
                ref={eyebrowRef}
                className={`ipg-hidden ${eyebrowIn ? "ipg-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
                style={{ color: BRAND }}
              >
                Governance & Privacy
              </p>
              <h2
                ref={headingRef}
                className={`ipg-hidden ${headingIn ? "ipg-visible" : ""} text-[clamp(24px,3.4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-4`}
                style={{ animationDelay: "0.05s" }}
              >
                Personal productivity with business-grade control.
              </h2>
              <p
                ref={copyRef}
                className={`ipg-hidden ${copyIn ? "ipg-visible" : ""} text-[14.5px] leading-relaxed text-gray-500 mb-9 max-w-[480px]`}
                style={{ animationDelay: "0.1s" }}
              >
                Zoiko Sema supports individual productivity while respecting
                roles, permissions, workspace policies, AI controls, retention
                rules, and integration governance.
              </p>

              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`ipg-card ${gridIn ? "ipg-card-in" : ""} bg-white rounded-2xl p-5`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className="ipg-icon w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "#E6E9FB" }}
                    >
                      {card.icon}
                    </div>

                    <h3 className="text-[14.5px] font-bold text-gray-900 mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 mb-4">
                      {card.description}
                    </p>

                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                      style={{ background: card.badgeBg }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: card.badgeColor }}
                      />
                      <span
                        className="text-[10.5px] font-medium"
                        style={{ color: card.badgeColor }}
                      >
                        {card.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — complete image */}
            <div
              ref={imageRef}
              className={`ipg-image-hidden ${imageIn ? "ipg-image-visible" : ""}`}
            >
              <div className="ipg-image-wrap">
                <img
                  src={SIDE_IMAGE_SRC}
                  alt="Zoiko Sema governance and privacy controls"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}