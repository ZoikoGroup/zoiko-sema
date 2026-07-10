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
    key: "messaging",
    title: "Governed messaging",
    desc: "Governed messaging ensures every communication aligns with your brand voice.",
    position: "top-left",
    variant: "white",
  },
  {
    key: "meetings",
    title: "Secure meetings",
    desc: "Secure meetings protect every conversation with enterprise-grade encryption.",
    position: "bottom-left",
    variant: "dark",
  },
  {
    key: "approvals",
    title: "Approval workflows",
    desc: "Approval workflows ensure every action is , approved, and executed with the right level of control.",
    position: "top-right",
    variant: "dark",
  },
  {
    key: "evidence",
    title: "Evidence capture",
    desc: "Automatically document approvals, and shared content to support compliance.",
    position: "bottom-right",
    variant: "dark",
  },
];

export default function RegulatedWorkflowsGovernedCollaborationSection() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes rgcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rgc-hidden  { opacity: 0; transform: translateY(28px); }
        .rgc-visible { animation: rgcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes rgcFadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes rgcFadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .rgc-card-left  { opacity: 0; transform: translateX(-24px); }
        .rgc-card-right { opacity: 0; transform: translateX(24px); }
        .rgc-cards-in .rgc-card-left  { animation: rgcFadeInLeft .6s cubic-bezier(.22,1,.36,1) forwards; }
        .rgc-cards-in .rgc-card-right { animation: rgcFadeInRight .6s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes rgcScaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        .rgc-monitor { opacity: 0; transform: scale(0.94); }
        .rgc-monitor-in { animation: rgcScaleIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* dashed connector lines drawing in */
        .rgc-line {
          stroke-dasharray: 6 6;
          stroke-dashoffset: 200;
          opacity: 0;
        }
        .rgc-lines-in .rgc-line {
          animation: rgcDrawLine 1s ease forwards, rgcDashFlow 3s linear infinite .9s;
        }
        @keyframes rgcDrawLine {
          from { stroke-dashoffset: 200; opacity: 0; }
          to   { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes rgcDashFlow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -24; }
        }

        .rgc-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .rgc-card:hover {
          transform: translateY(-4px);
        }
        .rgc-card-white:hover {
          box-shadow: 0 16px 32px rgba(0,0,0,0.18);
        }
        .rgc-card-dark:hover {
          box-shadow: 0 16px 32px rgba(0,0,0,0.3);
        }

        .rgc-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .rgc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.25);
        }
        .rgc-btn-text {
          transition: opacity .2s ease;
        }
        .rgc-btn-text:hover { opacity: 0.75; }

        @media (prefers-reduced-motion: reduce) {
          .rgc-hidden, .rgc-visible, .rgc-card-left, .rgc-card-right, .rgc-monitor {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .rgc-line { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
          .rgc-card:hover, .rgc-btn-primary:hover { transform: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Governed collaboration"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ background: "#12163A" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center mb-4`}>
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: "#8B9CFF" }}
            >
              Governed Collaboration
            </span>
          </div>

          {/* Heading */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-white max-w-[560px] mx-auto">
              Keep sensitive work in one governed collaboration space.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center text-[13.5px] sm:text-[14px] leading-[1.7] text-white/50 max-w-[560px] mx-auto mb-14 sm:mb-20`}
            style={{ animationDelay: "0.14s" }}
          >
            Communicate, meet, share files, capture decisions, route approvals, and preserve evidence without spreading regulated work across disconnected tools.
          </p>

          {/* Hub-and-spoke diagram */}
          <div className="relative max-w-[1000px] mx-auto mb-14 sm:mb-16">
            {/* Connector lines - desktop only, absolutely positioned SVG overlay */}
            <svg
              className={`hidden lg:block absolute inset-0 w-full h-full pointer-events-none ${inView ? "rgc-lines-in" : ""}`}
              viewBox="0 0 1000 460"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* top-left card -> monitor top-left */}
              <path className="rgc-line" d="M255 140 H340 V190" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              {/* bottom-left card -> monitor bottom-left */}
              <path className="rgc-line" d="M255 320 H340 V270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              {/* top-right card -> monitor top-right */}
              <path className="rgc-line" d="M745 140 H660 V190" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              {/* bottom-right card -> monitor bottom-right */}
              <path className="rgc-line" d="M745 320 H660 V270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            </svg>

            <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6 lg:gap-4 items-center">
              {/* Left column cards */}
              <div className={`flex flex-col gap-5 lg:gap-24 order-2 lg:order-1 ${inView ? "rgc-cards-in" : ""}`}>
                {cards
                  .filter((c) => c.position.endsWith("left"))
                  .map((c) => (
                    <InfoCard key={c.key} card={c} side="left" />
                  ))}
              </div>

              {/* Center monitor mockup */}
              <div
                className={`rgc-monitor ${inView ? "rgc-monitor-in" : ""} order-1 lg:order-2 relative z-10 mx-auto w-full max-w-[330px]`}
              >
                {/* Screen */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/Images/GOVERNED_WORKSPACE.webp"
                    alt="Governed workspace interface"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right column cards */}
              <div className={`flex flex-col gap-5 lg:gap-24 order-3 ${inView ? "rgc-cards-in" : ""}`}>
                {cards
                  .filter((c) => c.position.endsWith("right"))
                  .map((c) => (
                    <InfoCard key={c.key} card={c} side="right" />
                  ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} flex flex-wrap items-center justify-center gap-6`}
            style={{ animationDelay: "0.32s" }}
          >
            <a
              href="#governed-workspace-demo"
              className="rgc-btn-primary rounded-full bg-white text-[#12122E] text-[14px] font-semibold px-7 py-3.5"
            >
              See governed workspace demo
            </a>
            <a
              href="#talk-sales"
              className="rgc-btn-text text-white text-[14px] font-semibold underline underline-offset-4 decoration-white/40"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  card,
  side,
}: {
  card: { title: string; desc: string; variant: string };
  side: "left" | "right";
}) {
  const isWhite = card.variant === "white";
  return (
    <div className={side === "left" ? "rgc-card-left" : "rgc-card-right"}>
      <div
        className={`rgc-card ${isWhite ? "rgc-card-white" : "rgc-card-dark"} rounded-2xl p-5 max-w-[240px] ${
          side === "right" ? "ml-auto" : ""
        }`}
        style={{
          background: isWhite ? "#fff" : "rgba(255,255,255,0.06)",
          border: isWhite ? "none" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3
          className="text-[14px] font-bold mb-1.5"
          style={{ color: isWhite ? "#12122E" : "#fff" }}
        >
          {card.title}
        </h3>
        <p
          className="text-[12.5px] leading-[1.6]"
          style={{ color: isWhite ? "#6B7280" : "rgba(255,255,255,0.5)" }}
        >
          {card.desc}
        </p>
      </div>
    </div>
  );
}