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
    title: "Privacy modes",
    desc: "Define which workforce-context signals can appear inside Zoiko Sema workspaces.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Role-based visibility",
    desc: "Control which managers, admins, and viewers can see context-linked communication.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
  },
  {
    title: "Policy alignment",
    desc: "Map communication workflows to organization policy — without monitoring people.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Audit & retention",
    desc: "Record admin changes, integration updates, and policy edits for governance review.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    title: "External collaboration",
    desc: "Control guest access, client workspaces, invite expiry, and external meeting visibility.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
  },
  {
    title: "AI governance",
    desc: "Control AI summaries, action extraction, handoff summaries, and sensitive workspace exclusions.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
];

export default function ZoikoCustomersControlsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztccFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztcc-hidden  { opacity:0; transform:translateY(28px); }
        .ztcc-visible { animation: ztccFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcc-card { opacity:0; transform:translateY(20px); }
        .ztcc-card.active { animation: ztccFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcc-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease, background-color .3s ease;
        }
        .ztcc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(0,0,0,0.35);
          border-color: rgba(140,156,255,0.5);
          background-color: #12163A;
        }
        .ztcc-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .ztcc-card:hover .ztcc-icon-box {
          transform: scale(1.08);
          background-color: rgba(140,156,255,0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztcc-hidden, .ztcc-card { opacity:1!important; transform:none!important; animation:none!important; }
          .ztcc-visible { animation:none!important; opacity:1!important; }
          .ztcc-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Privacy, Governance & Enterprise Controls"
        className="w-full py-20 md:py-24"
        style={{ background: "#0A0F2D" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ztcc-hidden ${headIn ? "ztcc-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#8C9CFF" }}
            >
              Privacy, Governance & Enterprise Controls
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-white mb-5 max-w-[680px] mx-auto">
              Trust-first controls for IT, HR, and compliance
            </h2>
            <p className="mx-auto max-w-[600px] text-[15px] leading-[1.75]" style={{ color: "#A7ACC9" }}>
              Reassure every stakeholder: this is privacy-respecting
              operational coordination, not surveillance.
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
                className={`ztcc-card ${gridIn ? "active" : ""} rounded-2xl border p-6`}
                style={{
                  animationDelay: `${i * 70}ms`,
                  background: "#0F1330",
                  borderColor: "rgba(140,156,255,0.14)",
                }}
              >
                <div
                  className="ztcc-icon-box w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(140,156,255,0.16)", color: "#8C9CFF" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2">{card.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#8A8FB0" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}