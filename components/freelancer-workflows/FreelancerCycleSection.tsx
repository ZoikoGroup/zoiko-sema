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

const steps = [
  {
    num: "01",
    title: "Lead intake",
    desc: "Capture inquiries from prospects and turn them into a client space in seconds.",
    cta: "Create client workspace",
  },
  {
    num: "02",
    title: "Proposal & scope",
    desc: "Keep proposal drafts, scope notes, estimate versions, and approvals in context.",
    cta: "Send proposal",
  },
  {
    num: "03",
    title: "Client meetings",
    desc: "Schedule calls, join meetings, record notes, and generate AI recaps automatically.",
    cta: "Schedule meeting",
  },
  {
    num: "04",
    title: "Task & delivery tracker",
    desc: "Track project tasks, due dates, milestones, dependencies, and blockers.",
    cta: "Add task",
  },
  {
    num: "05",
    title: "Files & handoff",
    desc: "Share deliverables, collect client feedback, and preserve version history.",
    cta: "Share file",
  },
  {
    num: "06",
    title: "Invoice readiness",
    desc: "Mark approved work, prepare invoice notes, and connect payment tools where available.",
    cta: "Prepare invoice",
  },
  {
    num: "07",
    title: "Retention & repeat work",
    desc: "Reuse client history, templates, previous decisions, and relationship context.",
    cta: "Create repeat project",
  },
];

const ctaCard = {
  eyebrow: "Start",
  title: "Bring your first client in",
  desc: "Create a client workspace and keep chat, meetings, files, tasks, and approvals together.",
  cta: "Start free",
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function StepCard({
  num,
  title,
  desc,
  cta,
  active,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  cta: string;
  active: boolean;
  delay: number;
}) {
  return (
    <div
      className={`fwc-card ${active ? "active" : ""} rounded-2xl border border-gray-200 bg-white p-6 cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="fwc-num text-[11px] font-bold tracking-[0.06em] mb-3" style={{ color: "#3457E8" }}>
        {num}
      </p>
      <h3 className="fwc-title text-[15px] font-bold text-gray-900 mb-2">{title}</h3>
      <p className="fwc-desc text-[13px] leading-relaxed text-gray-500 mb-5">{desc}</p>
      <span className="fwc-cta inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: "#3457E8" }}>
        {cta}
        <ArrowIcon className="fwc-arrow" />
      </span>
    </div>
  );
}

export default function FreelancerCycleSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fwcFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwc-hidden  { opacity:0; transform:translateY(28px); }
        .fwc-visible { animation: fwcFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwc-card { opacity:0; transform:translateY(20px); }
        .fwc-card.active { animation: fwcFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        /* Card fill-on-hover, matching the permanent CTA card look */
        .fwc-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease,
                      background-color .35s ease, border-color .35s ease;
        }
        .fwc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(52,87,232,0.28);
          background-color: #3457E8;
          border-color: #3457E8;
        }
        .fwc-card .fwc-num, .fwc-card .fwc-title, .fwc-card .fwc-desc,
        .fwc-card .fwc-cta, .fwc-card .fwc-arrow {
          transition: color .35s ease;
        }

        /* !important needed here because fwc-num / fwc-cta carry an
           inline style={{ color: "#3457E8" }} which otherwise always
           wins over a plain class-based hover rule. */
        .fwc-card:hover .fwc-num { color: #ffffff !important; }
        .fwc-card:hover .fwc-title { color: #ffffff !important; }
        .fwc-card:hover .fwc-desc { color: #DCE1FA !important; }
        .fwc-card:hover .fwc-cta { color: #ffffff !important; }
        .fwc-card:hover .fwc-arrow { color: #ffffff !important; transform: translateX(3px); }
        .fwc-arrow { transition: transform .3s ease, color .35s ease; }

        /* Permanent CTA card (last cell) — always filled, only lifts on hover */
        .fwc-cta-card {
          background: #3457E8;
          border-color: #3457E8;
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
        }
        .fwc-cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(52,87,232,0.32);
        }
        .fwc-cta-arrow { transition: transform .3s ease; }
        .fwc-cta-card:hover .fwc-cta-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .fwc-hidden, .fwc-card { opacity:1!important; transform:none!important; animation:none!important; }
          .fwc-visible { animation:none!important; opacity:1!important; }
          .fwc-card:hover, .fwc-cta-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Freelancer workflow: the full client cycle"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fwc-hidden ${headIn ? "fwc-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#3457E8" }}
            >
              Freelancer Workflow
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[680px] mx-auto">
              The full client cycle, in one workspace
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-gray-500">
              From the first inquiry to repeat work — every stage stays
              connected, so nothing slips between messages, meetings, and
              delivery.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {steps.map((step, i) => (
              <StepCard key={step.num} {...step} active={gridIn} delay={i * 70} />
            ))}

            {/* Permanent filled CTA card */}
            <div
              className={`fwc-cta-card fwc-card ${gridIn ? "active" : ""} rounded-2xl p-6 cursor-pointer`}
              style={{ animationDelay: `${steps.length * 70}ms` }}
            >
              <p className="text-[12px] font-semibold mb-3" style={{ color: "#C9D3FF" }}>
                {ctaCard.eyebrow}
              </p>
              <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">
                {ctaCard.title}
              </h3>
              <p className="text-[13px] leading-relaxed mb-5" style={{ color: "#DCE1FA" }}>
                {ctaCard.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
                {ctaCard.cta}
                <ArrowIcon className="fwc-cta-arrow" />
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}