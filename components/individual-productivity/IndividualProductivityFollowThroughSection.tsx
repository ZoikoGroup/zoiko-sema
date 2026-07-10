"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
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

const BRAND = "#3457E8";
const ACCENT = "#8FA3FF"; // lighter brand tint for the dark background

// TODO: replace with your actual image path, e.g. "/images/individual-productivity/follow-through.png"
const SIDE_IMAGE_SRC = "/Images/follow-through.webp";

const cards = [
  {
    title: "Daily brief",
    description: "Summarizes priorities and upcoming commitments.",
    badge: "Accessible context only",
    badgeColor: "#C7CFFA",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Meeting summaries",
    description: "Decisions and action items in one recap.",
    badge: "Authorized participants",
    badgeColor: "#6EE7B7",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "Draft replies",
    description: "Suggested responses you edit before sending.",
    badge: "You stay in control",
    badgeColor: "#C7CFFA",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Smart search",
    description: "Find context across notes, files, and threads.",
    badge: "Respects retention",
    badgeColor: "#FBBF24",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function IndividualProductivityFollowThroughSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.2);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ipfFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ipfFadeIn {
          from { opacity: 0; transform: translateY(40px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ipf-hidden  { opacity: 0; transform: translateY(32px); }
        .ipf-visible { animation: ipfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipf-image-hidden  { opacity: 0; transform: translateY(40px) scale(.97); }
        .ipf-image-visible { animation: ipfFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ipf-card { opacity: 0; transform: translateY(24px); }
        .ipf-card.ipf-card-in {
          animation: ipfFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipf-image-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ipf-image-wrap:hover { transform: translateY(-6px); }
        .ipf-image-wrap img { transition: box-shadow .3s ease; }
        .ipf-image-wrap:hover img {
          box-shadow: 0 28px 56px -20px rgba(0,0,0,0.6);
        }

        .ipf-card {
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .ipf-card:hover {
          transform: translateY(-3px);
          background: #23244a;
          box-shadow: 0 14px 30px -18px rgba(0,0,0,0.55);
        }

        .ipf-card-icon { transition: transform .25s ease; }
        .ipf-card:hover .ipf-card-icon { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .ipf-hidden, .ipf-image-hidden, .ipf-card { opacity: 1 !important; transform: none !important; }
          .ipf-visible, .ipf-image-visible, .ipf-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="AI follow-through"
        className="w-full py-20 md:py-24"
        style={{ background: "#0B0F2D" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading block */}
          <div className="max-w-[640px] mb-12">
            <p
              ref={eyebrowRef}
              className={`ipf-hidden ${eyebrowIn ? "ipf-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
              style={{ color: ACCENT }}
            >
              AI Follow-through
            </p>
            <h2
              ref={headingRef}
              className={`ipf-hidden ${headingIn ? "ipf-visible" : ""} text-[clamp(24px,3.6vw,34px)] font-bold leading-[1.2] tracking-tight text-white mb-4`}
              style={{ animationDelay: "0.05s" }}
            >
              Move from conversation to completed work faster.
            </h2>
            <p
              ref={copyRef}
              className={`ipf-hidden ${copyIn ? "ipf-visible" : ""} text-[14.5px] leading-relaxed`}
              style={{ color: "#A6A9C8", animationDelay: "0.1s" }}
            >
              Zoiko Sema helps you turn messages, meetings, notes, and
              decisions into summaries, draft replies, tasks, and next steps
              — while respecting workspace policies.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-start">

            {/* LEFT — image */}
            <div
              ref={imageRef}
              className={`ipf-image-hidden ${imageIn ? "ipf-image-visible" : ""}`}
            >
              <div className="ipf-image-wrap">
                <img
                  src={SIDE_IMAGE_SRC}
                  alt="Zoiko Sema meeting and workspace view"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* RIGHT — 2x2 card grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {cards.map((card, i) => (
                <div
                  key={card.title}
                  className={`ipf-card ${gridIn ? "ipf-card-in" : ""} rounded-xl p-5`}
                  style={{
                    background: "#FFFFFF0F",
                    border: "1px solid #FFFFFF29",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="ipf-card-icon w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "#33356B" }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-[14px] font-bold text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed mb-4" style={{ color: "#9497BE" }}>
                    {card.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{ background: "rgba(255,255,255,0.06)" }}
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

        </div>
      </section>
    </>
  );
}