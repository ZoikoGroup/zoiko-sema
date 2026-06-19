"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const cards = [
  {
    id: "business",
    dark: false,
    purple: true,         // large purple card
    badge: "PRIMARY · BUSINESS",
    badgeColor: "#a5b4fc",
    badgeDot: "#a5b4fc",
    title: ["For businesses and teams that need ", "accountability", "."],
    titleItalic: [false, true, false],
    desc: "Secure communication, AI-powered meeting intelligence, admin controls, and the integration route into ZoikoTime workforce truth. Built for organizations where conversations need to become accountable work.",
    bestFor: "Companies, departments, regulated industries, distributed workforces.",
    cta: "Explore for business",
    ctaHref: "#business",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: "teams",
    dark: false,
    purple: false,
    badge: "TEAMS",
    badgeColor: "#4f46e5",
    badgeDot: "#6366f1",
    title: ["For teams that need to coordinate without ", "chaos", "."],
    titleItalic: [false, true, false],
    desc: "Channels, group calls, shared files, action items and AI summaries for departments, projects and operating units.",
    bestFor: "Departments, project teams, startups, agencies.",
    cta: "Explore for teams",
    ctaHref: "#teams",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "individuals",
    dark: false,
    purple: false,
    badge: "INDIVIDUALS",
    badgeColor: "#4f46e5",
    badgeDot: "#6366f1",
    title: ["For people who want secure communication that ", "thinks", "."],
    titleItalic: [false, true, false],
    desc: "Messaging, audio calls, video calls and AI conversation memory for professionals, freelancers and individuals who want clearer conversations.",
    bestFor: "Professionals, freelancers, individuals, small personal groups.",
    cta: "Use Sema as an individual",
    ctaHref: "#individuals",
    span: "lg:col-span-1",
  },
  {
    id: "regulated",
    dark: false,
    purple: false,
    badge: "REGULATED ENVIRONMENTS",
    badgeColor: "#4f46e5",
    badgeDot: "#6366f1",
    title: ["For organizations where governance is ", "not optional", "."],
    titleItalic: [false, true, false],
    desc: "Stronger governance, access control, retention, auditability and compliance-ready communication — including field and distributed operating patterns.",
    bestFor: "Financial services, legal, healthcare, regulated tech, field operations, multi-site organizations.",
    cta: "Explore regulated environments",
    ctaHref: "#regulated",
    span: "lg:col-span-1",
  },
  {
    id: "zoikotime",
    dark: true,
    purple: false,
    badge: "ZOIKOTIME CUSTOMERS",
    badgeColor: "#a5b4fc",
    badgeDot: "#a5b4fc",
    title: ["For organizations that need ", "verified workforce truth", "."],
    titleItalic: [false, true, false],
    desc: "Connect Sema communication signals to ZoikoTime workforce context. Support meeting-to-work continuity, audit-ready evidence and operational accountability.",
    bestFor: "ZoikoTime customers, evaluators, consulting firms, regulated teams.",
    cta: "Connect Sema and ZoikoTime",
    ctaHref: "#zoikotime",
    span: "lg:col-span-1",
  },
];

function Card({ card, delay = 0, inView }: { card: typeof cards[0]; delay?: number; inView: boolean }) {
  const dark   = card.dark;
  const purple = card.purple;

  const bg = dark ? "#1a1a2e" : purple ? "#474787" : "#fff";
  const border = dark || purple ? "none" : "1px solid #e8ecf5";
  const shadow = dark ? "0 4px 32px rgba(0,0,0,0.2)" : purple ? "0 4px 32px rgba(71,71,135,0.22)" : "0 2px 20px rgba(71,71,135,0.07)";

  const textMain  = dark || purple ? "#fff" : "#111827";
  const textSub   = dark ? "#9da0c8" : purple ? "#c7caed" : "#6b7280";
  const bestForBg = dark ? "rgba(255,255,255,0.07)" : purple ? "rgba(255,255,255,0.12)" : "#f3f5ff";
  const bestForText = dark || purple ? "#c7caed" : "#374151";
  const bestForLabel = dark ? "#a5b4fc" : purple ? "#c7d2fe" : "#4f46e5";
  const ctaColor  = dark ? "#a5b4fc" : purple ? "#e0e7ff" : "#4f46e5";

  return (
    <div
      className={`ssp-card ${inView ? "on" : ""} flex flex-col rounded-2xl p-7 h-full`}
      style={{
        background: bg,
        border,
        boxShadow: shadow,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: card.badgeDot }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: card.badgeColor }}>
          {card.badge}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-bold leading-[1.18] mb-4"
        style={{ fontSize: card.purple ? "clamp(20px,2.2vw,26px)" : "clamp(17px,1.8vw,22px)", color: textMain }}
      >
        {card.title.map((part, i) =>
          card.titleItalic[i]
            ? <em key={i} className="not-italic italic font-bold" style={{ fontFamily: "Georgia, serif" }}>{part}</em>
            : <span key={i}>{part}</span>
        )}
      </h3>

      {/* Description */}
      <p className="text-[13.5px] leading-[1.75] mb-6" style={{ color: textSub }}>
        {card.desc}
      </p>

      {/* Best For box */}
      <div className="rounded-xl px-4 py-3.5 mb-6 flex-1" style={{ background: bestForBg }}>
        <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1.5" style={{ color: bestForLabel }}>
          Best For
        </p>
        <p className="text-[12.5px] leading-relaxed" style={{ color: bestForText }}>
          {card.bestFor}
        </p>
      </div>

      {/* CTA */}
      <a
        href={card.ctaHref}
        className="ssp-cta inline-flex items-center gap-1.5 text-[13.5px] font-semibold mt-auto"
        style={{ color: ctaColor }}
      >
        {card.cta}
        <span className="ssp-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function SolutionsSixPathsSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: grid1Ref, inView: grid1In } = useInView(0.06);
  const { ref: grid2Ref, inView: grid2In } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes sspFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ssp-hidden  { opacity:0; transform:translateY(26px); }
        .ssp-visible { animation: sspFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card entrance */
        .ssp-card { opacity:0; transform:translateY(22px); transition:transform .28s ease, box-shadow .28s ease; }
        .ssp-card.on { animation: sspFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }
        .ssp-card:hover { transform:translateY(-4px)!important; }

        /* CTA arrow */
        .ssp-arrow { display:inline-block; transition:transform .2s ease; }
        .ssp-cta { transition:opacity .2s; }
        .ssp-cta:hover { opacity:.7; }
        .ssp-cta:hover .ssp-arrow { transform:translateX(4px); }

        @media (prefers-reduced-motion:reduce) {
          .ssp-hidden,.ssp-card { opacity:1!important; transform:none!important; animation:none!important; }
          .ssp-visible { animation:none!important; opacity:1!important; }
          .ssp-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Six paths into Sema"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`ssp-hidden ${headIn ? "ssp-visible" : ""} text-center mb-12`}>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              Six paths into Sema. Pick the one that fits your situation
            </h2>
            <p className="mx-auto max-w-[460px] text-[15px] leading-[1.8] text-gray-500">
              Each route opens onto a dedicated solution page with the depth, pricing path
              and onboarding flow that matches that audience.
            </p>
          </div>

          {/* ── TOP ROW: large purple (col-span-2) + medium white ── */}
          <div ref={grid1Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

            {/* Card 1 — Business (wide, purple) */}
            <div className="lg:col-span-2">
              <Card card={cards[0]} delay={0.04} inView={grid1In} />
            </div>

            {/* Card 2 — Teams */}
            <div className="lg:col-span-1">
              <Card card={cards[1]} delay={0.13} inView={grid1In} />
            </div>
          </div>

          {/* ── BOTTOM ROW: 3 equal cards ── */}
          <div ref={grid2Ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.slice(2).map((card, i) => (
              <Card key={card.id} card={card} delay={0.04 + i * 0.09} inView={grid2In} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}