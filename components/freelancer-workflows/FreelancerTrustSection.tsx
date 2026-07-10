"use client";

import React, { useEffect, useRef, useState } from "react";

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

const cards = [
  {
    title: "Client guest access",
    desc: "Invite clients to selected spaces with clear visibility rules — nothing more, nothing less.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    title: "Private notes",
    desc: "Keep freelancer-only notes separate from client-visible updates in the same workspace.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "File permissions",
    desc: "Share selected files, revoke access, and track approval status per deliverable.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    title: "Meeting privacy",
    desc: "Control who can access summaries, recordings, and AI notes for each client.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Export & handoff",
    desc: "Export client history, decisions, files, and approved milestones whenever you need to.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: "Plan gates",
    desc: "Advanced permissions, custom domains, audit history, and team controls when you grow.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    badge: "Pro · Business · Sales",
  },
];

export default function FreelancerTrustSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fwtFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwt-hidden  { opacity:0; transform:translateY(28px); }
        .fwt-visible { animation: fwtFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwt-card { opacity:0; transform:translateY(20px); }
        .fwt-card.active { animation: fwtFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .fwt-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .fwt-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(52,87,232,0.12);
          border-color: #3457E8;
        }
        .fwt-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .fwt-card:hover .fwt-icon-box {
          transform: scale(1.08);
          background-color: rgba(52,87,232,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwt-hidden, .fwt-card { opacity:1!important; transform:none!important; animation:none!important; }
          .fwt-visible { animation:none!important; opacity:1!important; }
          .fwt-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Client Trust & Controls"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fwt-hidden ${headIn ? "fwt-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#3457E8" }}
            >
              Client Trust & Controls
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              Professional controls for client-sensitive work
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray-500">
              Keep client data protected, control exactly what clients see,
              and hand off cleanly when a project ends.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`fwt-card ${gridIn ? "active" : ""} rounded-2xl border border-gray-200 bg-white p-6`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="fwt-icon-box w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(52,87,232,0.10)", color: "#3457E8" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{card.desc}</p>
                {card.badge && (
                  <span
                    className="inline-block mt-4 rounded-full px-3 py-1.5 text-[11.5px] font-semibold"
                    style={{ background: "rgba(52,87,232,0.10)", color: "#3457E8" }}
                  >
                    {card.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}