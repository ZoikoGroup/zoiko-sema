"use client";

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

const cards = [
  {
    tag: "One space per client",
    title: "Client clarity",
    desc: "Keep messages, meetings, files, approvals, and decisions attached to the right client.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    tag: "AI-assisted follow-up",
    title: "Less admin work",
    desc: "Turn conversations into tasks, recaps, follow-ups, and status updates — automatically.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
  {
    tag: "Client-ready by default",
    title: "Professional delivery",
    desc: "Share a clean workspace that helps clients understand status and next steps at a glance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
];

export default function FreelancerWhySection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes fwwFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fww-hidden  { opacity:0; transform:translateY(28px); }
        .fww-visible { animation: fwwFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fww-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .fww-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(52,87,232,0.12);
          border-color: #3457E8;
        }
        .fww-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .fww-card:hover .fww-icon-box {
          transform: scale(1.08);
          background-color: rgba(52,87,232,0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .fww-hidden { opacity:1!important; transform:none!important; animation:none!important; }
          .fww-visible { animation:none!important; opacity:1!important; }
          .fww-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Why Freelancer Workflows"
        className="w-full py-20 md:py-24"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fww-hidden ${headIn ? "fww-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#3457E8" }}
            >
              Why Freelancer Workflows
            </p>
            <h2 className="text-[clamp(26px,3.8vw,40px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[720px] mx-auto">
              One organized workspace for every client
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray-500">
              Keep client work professional and calm — with client clarity,
              less admin work, and delivery your clients can actually follow.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className={`fww-hidden ${cardsIn ? "fww-visible" : ""} grid grid-cols-1 md:grid-cols-3 gap-5`}
            style={{ animationDelay: "0.1s" }}
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="fww-card rounded-2xl border border-gray-200 bg-white p-7"
                style={{
                  transitionDelay: cardsIn ? `${i * 60}ms` : "0ms",
                }}
              >
                <div
                  className="fww-icon-box w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(52,87,232,0.10)", color: "#3457E8" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500 mb-5">
                  {card.desc}
                </p>
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
                  style={{ background: "rgba(52,87,232,0.10)", color: "#3457E8" }}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}