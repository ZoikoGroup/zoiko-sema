"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  /* position around the circle, in degrees, 0 = top, clockwise */
  angle: number;
  dark?: boolean;
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0566b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IdentityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b6fd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d99a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
  </svg>
);
const ProductivityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34a16b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const ZoikoTimeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const CrmIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
  </svg>
);
const ApiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b9fe0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const EcosystemIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0903d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const nodes: Node[] = [
  { id: "calendar",  title: "Calendar",       subtitle: "Google · Outlook",   icon: <CalendarIcon />,     iconBg: "#FBE4E8", angle: 0 },
  { id: "identity",  title: "Identity & SSO", subtitle: "SAML · SCIM · Okta", icon: <IdentityIcon />,     iconBg: "#E6E9FB", angle: 51.4 },
  { id: "files",     title: "File storage",   subtitle: "Drive · Dropbox · Box", icon: <FileIcon />,      iconBg: "#FBF0DD", angle: 102.8 },
  { id: "zoikotime", title: "ZoikoTime",      subtitle: "Workforce truth",    icon: <ZoikoTimeIcon />,    iconBg: "rgba(255,255,255,0.15)", angle: 154.3, dark: true },
  { id: "crm",       title: "CRM",            subtitle: "Salesforce · HubSpot", icon: <CrmIcon />,        iconBg: "#F3E6FB", angle: 205.7 },
  { id: "api",       title: "APIs & Webhooks",subtitle: "REST · events · audit", icon: <ApiIcon />,       iconBg: "#DEF0FB", angle: 257.1 },
  { id: "ecosystem", title: "Zoiko ecosystem",subtitle: "Future routes",      icon: <EcosystemIcon />,    iconBg: "#FBE7D6", angle: 308.6 },
  { id: "productivity", title: "Productivity", subtitle: "Notion · Linear · Asana", icon: <ProductivityIcon />, iconBg: "#E1F5E9", angle: 360 - 51.4 },
];

// ── Intersection-observer hook ─────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
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

/* Convert polar angle (deg, 0 = top, clockwise) + radius -> x/y offset in px */
function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export default function ProductEcosystemSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: diagramRef, inView: diagramIn } = useInView(0.05);
  const { ref: bannerRef, inView: bannerIn } = useInView(0.2);

  const RADIUS = 230; // px, distance of nodes from center on desktop

  return (
    <>
      <style>{`
        @keyframes peFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pe-hidden  { opacity: 0; transform: translateY(28px); }
        .pe-visible { animation: peFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* center hub pulse glow */
        @keyframes peHubGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(71,71,135,0.35), 0 18px 40px rgba(71,71,135,0.30); }
          50%      { box-shadow: 0 0 0 14px rgba(71,71,135,0), 0 18px 40px rgba(71,71,135,0.30); }
        }
        .pe-hub { animation: peHubGlow 3s ease-in-out infinite; }

        /* dotted orbit ring rotates slowly */
        @keyframes peOrbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .pe-orbit-ring { animation: peOrbitSpin 60s linear infinite; transform-origin: center; }

        /* node entrance — pop in from center with stagger, scales + fades */
        .pe-node {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
        }
        .pe-diagram-in .pe-node {
          animation: peNodePop .55s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        @keyframes peNodePop {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .pe-diagram-in .pe-node:nth-child(1) { animation-delay: .05s; }
        .pe-diagram-in .pe-node:nth-child(2) { animation-delay: .12s; }
        .pe-diagram-in .pe-node:nth-child(3) { animation-delay: .19s; }
        .pe-diagram-in .pe-node:nth-child(4) { animation-delay: .26s; }
        .pe-diagram-in .pe-node:nth-child(5) { animation-delay: .33s; }
        .pe-diagram-in .pe-node:nth-child(6) { animation-delay: .40s; }
        .pe-diagram-in .pe-node:nth-child(7) { animation-delay: .47s; }
        .pe-diagram-in .pe-node:nth-child(8) { animation-delay: .54s; }

        /* connecting spoke line draws in */
        .pe-spoke {
          stroke-dasharray: 4 5;
          stroke-dashoffset: 60;
          opacity: 0;
        }
        .pe-diagram-in .pe-spoke {
          animation: peSpokeDraw .6s ease forwards;
        }
        @keyframes peSpokeDraw {
          from { opacity: 0; stroke-dashoffset: 60; }
          to   { opacity: 1; stroke-dashoffset: 0; }
        }

        /* node card hover */
        .pe-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease, border-color .25s ease;
          will-change: transform;
        }
        .pe-card:hover {
          transform: scale(1.06);
          box-shadow: 0 14px 30px rgba(71,71,135,0.18);
          border-color: rgba(71,71,135,0.3);
        }
        .pe-card-dark:hover {
          box-shadow: 0 14px 30px rgba(30,26,60,0.45);
        }

        /* icon box hover wiggle */
        .pe-icon-box { transition: transform .25s ease; }
        .pe-card:hover .pe-icon-box { transform: scale(1.12) rotate(-5deg); }

        /* banner */
        .pe-bullet-dot { transition: transform .2s ease; }
        .pe-bullet:hover .pe-bullet-dot { transform: scale(1.3); }
        .pe-bullet { transition: padding-left .18s ease; }
        .pe-bullet:hover { padding-left: 4px; }

        @media (prefers-reduced-motion: reduce) {
          .pe-hidden { opacity: 1 !important; transform: none !important; }
          .pe-visible { animation: none !important; opacity: 1 !important; }
          .pe-hub, .pe-orbit-ring { animation: none !important; }
          .pe-node { opacity: 1 !important; transform: translate(-50%, -50%) scale(1) !important; animation: none !important; }
          .pe-spoke { opacity: 1 !important; stroke-dashoffset: 0 !important; animation: none !important; }
          .pe-card:hover { transform: none; }
        }

        /* mobile: stack nodes vertically instead of circular layout */
        @media (max-width: 880px) {
          .pe-circular-wrap { display: none; }
          .pe-mobile-list { display: flex; }
        }
        @media (min-width: 881px) {
          .pe-mobile-list { display: none; }
        }
      `}</style>

      <section
        aria-label="Connect communication to the tools and systems around it"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pe-hidden ${headIn ? "pe-visible" : ""} text-center mb-4`}
          >
            <h2
              className="font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "35px" }}
            >
              Connect communication
              <br />
              to the tools and systems around it
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-[#5C5870]">
              Sema fits into your existing technology stack — calendar, identity,
              files, productivity, CRM, APIs and ZoikoTime — and scales into future
              enterprise ecosystems.
            </p>
          </div>

          {/* ══════════ Desktop circular diagram ══════════ */}
          <div
            ref={diagramRef}
            className={`pe-circular-wrap relative mx-auto ${diagramIn ? "pe-diagram-in" : ""}`}
            style={{ width: "100%", maxWidth: "640px", height: "560px" }}
          >
            {/* SVG layer — orbit ring + spokes, sits behind cards */}
            <svg
              width="100%"
              height="100%"
              viewBox="-300 -300 600 600"
              className="absolute inset-0"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              {/* dotted orbit ring */}
              <circle
                className="pe-orbit-ring"
                cx="0" cy="0" r={RADIUS}
                fill="none"
                stroke="#E2E5F5"
                strokeWidth="1.5"
                strokeDasharray="3 7"
              />
              {/* spokes from center to each node */}
              {nodes.map((n) => {
                const outer = polarToXY(n.angle, RADIUS - 46);
                const inner = polarToXY(n.angle, 78);
                return (
                  <line
                    key={n.id}
                    className="pe-spoke"
                    x1={inner.x} y1={inner.y}
                    x2={outer.x} y2={outer.y}
                    stroke="#C7CBE8"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>

            {/* Center hub */}
            <div
              className="pe-hub absolute rounded-full flex items-center justify-center"
              style={{
                width: "140px",
                height: "140px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#474787",
              }}
            >
              <span className="px-4 py-2 rounded-full bg-white/15 text-white font-bold text-[15px]">
                Sema
              </span>
            </div>

            {/* Orbiting nodes */}
            {nodes.map((n) => {
              const { x, y } = polarToXY(n.angle, RADIUS);
              return (
                <div
                  key={n.id}
                  className="pe-node absolute"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                  }}
                >
                  <div
                    className={`pe-card flex items-center gap-3 rounded-xl px-4 py-3 border ${
                      n.dark ? "pe-card-dark" : "bg-white border-gray-100"
                    }`}
                    style={{
                      background: n.dark ? "#1E1A3C" : "#fff",
                      borderColor: n.dark ? "transparent" : "#EEF0FA",
                      minWidth: "168px",
                    }}
                  >
                    <span
                      className="pe-icon-box w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: n.iconBg }}
                    >
                      {n.icon}
                    </span>
                    <div>
                      <p
                        className="text-[13px] font-bold leading-tight"
                        style={{ color: n.dark ? "#fff" : "#15131F" }}
                      >
                        {n.title}
                      </p>
                      <p
                        className="text-[10.5px] leading-tight mt-[1px]"
                        style={{ color: n.dark ? "#b8baea" : "#9CA3AF" }}
                      >
                        {n.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ══════════ Mobile fallback — simple stacked list ══════════ */}
          <div className="pe-mobile-list flex-col gap-3 mt-8">
            {nodes.map((n) => (
              <div
                key={n.id}
                className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                style={{
                  background: n.dark ? "#1E1A3C" : "#fff",
                  borderColor: n.dark ? "transparent" : "#EEF0FA",
                }}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: n.iconBg }}
                >
                  {n.icon}
                </span>
                <div>
                  <p className="text-[13.5px] font-bold" style={{ color: n.dark ? "#fff" : "#15131F" }}>
                    {n.title}
                  </p>
                  <p className="text-[11px]" style={{ color: n.dark ? "#b8baea" : "#9CA3AF" }}>
                    {n.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ══════════ Bottom banner ══════════ */}
          <div
            ref={bannerRef}
            className={`pe-hidden ${bannerIn ? "pe-visible" : ""} mt-16`}
          >
            <div
              className="rounded-[24px] px-8 py-10 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 items-center"
              style={{ background: "#474787" }}
            >
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight text-white">
                Developer-ready,
                <br />
                admin-controlled
              </h3>

              <ul className="space-y-3">
                {[
                  "API & developer documentation",
                  "Admin-approved integrations",
                  "Integration directory roadmap",
                ].map((t) => (
                  <li key={t} className="pe-bullet flex items-center gap-2.5">
                    <span className="pe-bullet-dot w-1.5 h-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                    <span className="text-[13.5px]" style={{ color: "#dde0f5" }}>{t}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  "Webhook events for permitted actions",
                  "Audit logging for sensitive activity",
                  "Identity-aware access control",
                ].map((t) => (
                  <li key={t} className="pe-bullet flex items-center gap-2.5">
                    <span className="pe-bullet-dot w-1.5 h-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                    <span className="text-[13.5px]" style={{ color: "#dde0f5" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}