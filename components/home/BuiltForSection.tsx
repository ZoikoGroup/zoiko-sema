"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── SVG Icons ──────────────────────────────────────────────────────────────
const IconBusiness = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconTeams = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconIndividual = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconFreelancer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    <line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/>
  </svg>
);
const IconRegulated = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconZoikoTime = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const cards = [
  {
    icon: <IconBusiness />,
    iconBg: "#5B5BD6",
    iconColor: "#fff",
    title: "Sema for Business",
    desc: "For organizations that need secure communication, AI meeting intelligence, team coordination and optional ZoikoTime integration.",
    cta: "View Business Solution",
    href: "#business",
    dark: false,
    cardBg: "#E3EDFF",
  },
  {
    icon: <IconTeams />,
    iconBg: "#2D8F6F",
    iconColor: "#fff",
    title: "Sema for Teams",
    desc: "For departments, project teams, startups and agencies that need fast, structured collaboration around shared work.",
    cta: "View Team Solution",
    href: "#teams",
    dark: false,
    cardBg: "#E3EDFF",
  },
  {
    icon: <IconIndividual />,
    iconBg: "#E8718A",
    iconColor: "#fff",
    title: "Sema for Individuals",
    desc: "For people who want secure messaging, audio calls, video calls and AI-assisted conversation memory — no business account needed.",
    cta: "Use Sema as an Individual",
    href: "#individuals",
    dark: false,
    cardBg: "#E3EDFF",
  },
  {
    icon: <IconFreelancer />,
    iconBg: "#F5A623",
    iconColor: "#fff",
    title: "Sema for Freelancers & Consultants",
    desc: "For independent professionals managing client calls, notes, follow-ups and project discussions across multiple engagements.",
    cta: "Explore Freelancer Use",
    href: "#freelancers",
    dark: false,
    cardBg: "#E3EDFF",
  },
  {
    icon: <IconRegulated />,
    iconBg: "#1a1a2e",
    iconColor: "#fff",
    title: "Sema for Regulated Teams",
    desc: "For organizations that need stronger governance, access control, retention, auditability and compliance-ready communication.",
    cta: "Explore Regulated Teams",
    href: "#regulated",
    dark: false,
    cardBg: "#E3EDFF",
  },
  {
    icon: <IconZoikoTime />,
    iconBg: "rgba(255,255,255,0.15)",
    iconColor: "#a5b4fc",
    title: "Sema for ZoikoTime Customers",
    desc: "For organizations already using or evaluating ZoikoTime that want communication signals connected to verified workforce truth.",
    cta: "Connect Sema to ZoikoTime",
    href: "#zoikotime",
    dark: true,
    cardBg: "#474889",
  },
];

export default function BuiltForSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes bfFadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bf-hidden  { opacity:0; transform:translateY(30px); }
        .bf-visible { animation: bfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .bf-card-wrap { opacity:0; transform:translateY(24px); }
        .bf-grid-in .bf-card-wrap { animation: bfFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }
        .bf-grid-in .bf-card-wrap:nth-child(1) { animation-delay:.04s; }
        .bf-grid-in .bf-card-wrap:nth-child(2) { animation-delay:.10s; }
        .bf-grid-in .bf-card-wrap:nth-child(3) { animation-delay:.16s; }
        .bf-grid-in .bf-card-wrap:nth-child(4) { animation-delay:.22s; }
        .bf-grid-in .bf-card-wrap:nth-child(5) { animation-delay:.28s; }
        .bf-grid-in .bf-card-wrap:nth-child(6) { animation-delay:.34s; }

        /* card hover */
        .bf-card {
          transition: transform .28s ease, box-shadow .28s ease;
          height:100%;
        }
        .bf-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
        }
        .bf-card-dark:hover {
          box-shadow: 0 16px 40px rgba(71,71,135,0.35);
        }

        /* CTA link hover */
        .bf-cta { transition: gap .2s ease; display:inline-flex; align-items:center; gap:6px; }
        .bf-cta:hover { gap:10px; }
        .bf-cta-arrow { transition: transform .2s ease; display:inline-block; }
        .bf-cta:hover .bf-cta-arrow { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .bf-hidden,.bf-card-wrap { opacity:1!important; transform:none!important; animation:none!important; }
          .bf-visible { animation:none!important; opacity:1!important; }
          .bf-card:hover { transform:none; }
        }
      `}</style>

      <section
        aria-label="Built for the way people and organizations communicate"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`bf-hidden ${headIn ? "bf-visible" : ""} text-center mb-12`}
          >
            <h2 className="text-[clamp(24px,3.6vw,35px)] font-bold leading-[1.1] tracking-tight text-gray-900 mb-4">
              Built for the way people and organizations communicate
            </h2>
            <p className="mx-auto max-w-[520px] text-[15px] leading-[1.75] text-gray-500">
              From individual conversations to enterprise deployment Sema scales with how
              communication actually happens inside your team.
            </p>
          </div>

          {/* ── 3×2 Card grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${gridIn ? "bf-grid-in" : ""}`}
          >
            {cards.map((card, i) => (
              <div key={i} className="bf-card-wrap">
                <div
                  className={`bf-card rounded-2xl p-7 flex flex-col ${card.dark ? "bf-card-dark" : ""}`}
                  style={{ background: card.cardBg }}
                >
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: card.iconBg, color: card.iconColor }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[17px] font-bold leading-snug mb-3"
                    style={{ color: card.dark ? "#fff" : "#111827" }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13.5px] leading-[1.7] mb-6 flex-1"
                    style={{ color: card.dark ? "#c7caed" : "#6b7280" }}
                  >
                    {card.desc}
                  </p>

                  {/* CTA link */}
                  <a
                    href={card.href}
                    className="bf-cta text-[13.5px] font-semibold mt-auto"
                    style={{ color: card.dark ? "#a5b4fc" : "#4f46e5" }}
                  >
                    {card.cta}
                    <span className="bf-cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}