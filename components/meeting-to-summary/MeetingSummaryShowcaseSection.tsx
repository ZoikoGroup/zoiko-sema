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

const leftCards = [
  {
    title: "Meeting tile",
    desc: "Meeting title, participants, calendar source, live controls, and summary status.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Summary panel",
    desc: "Overview, decisions, risks, and follow-up items with owner assignments.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
  {
    title: "Decision record",
    desc: "Decision, context, participants, and a link back to the source meeting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
];

const rightCards = [
  {
    title: "Action item table",
    desc: "Task, owner, due date, source meeting, status, and reminders.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Share controls",
    desc: "Participants, workspace, or channel — with permission outcome shown first.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Governance labels",
    desc: "Host enabled, internal visibility, retention, and audit recorded.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

function ShowcaseCard({
  title,
  desc,
  icon,
  active,
  delay,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  active: boolean;
  delay: number;
}) {
  return (
    <div
      className={`mtss-card ${active ? "active" : ""} h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <span
          className="mtss-icon-box w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
        >
          {icon}
        </span>
        <h3 className="text-[14.5px] font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-[12.5px] leading-relaxed text-gray-500">{desc}</p>
    </div>
  );
}

export default function MeetingSummaryShowcaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtssFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mtss-hidden  { opacity:0; transform:translateY(28px); }
        .mtss-visible { animation: mtssFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mtss-card { opacity:0; transform:translateY(20px); }
        .mtss-card.active { animation: mtssFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .mtss-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .mtss-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(79,70,229,0.12);
          border-color: rgba(79,70,229,0.35);
        }
        .mtss-card:hover .mtss-icon-box {
          background-color: rgba(79,70,229,0.18);
        }
        .mtss-icon-box { transition: background-color .3s ease; }

        .mtss-img-wrap { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .mtss-img-wrap:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 24px 48px rgba(15,23,42,0.18); }

        @media (prefers-reduced-motion: reduce) {
          .mtss-hidden, .mtss-card { opacity:1!important; transform:none!important; animation:none!important; }
          .mtss-visible { animation:none!important; opacity:1!important; }
          .mtss-card:hover, .mtss-img-wrap:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Product Showcase"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`mtss-hidden ${headIn ? "mtss-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Product Showcase
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[720px] mx-auto">
              From live meeting to a structured, shareable summary
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500">
              A credible transition from discussion to overview, decisions,
              action items, and a decision record — with human review before
              anything is shared.
            </p>
          </div>

          {/* Body: left cards / center image / right cards — equal-height columns via items-stretch */}
          <div
            ref={bodyRef}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 items-stretch"
          >
            {/* LEFT */}
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              {leftCards.map((card, i) => (
                <ShowcaseCard
                  key={card.title}
                  {...card}
                  active={bodyIn}
                  delay={i * 90}
                />
              ))}
            </div>

            {/* CENTER — Image, stretches to match the tallest column */}
            <div
              className={`mtss-hidden ${bodyIn ? "mtss-visible" : ""} order-1 lg:order-2 h-full flex`}
            >
              <div className="mtss-img-wrap rounded-2xl overflow-hidden shadow-lg w-full h-full">
                <img
                  src="/Images/MeetingSummaryShowcaseSection.webp" /* 👈 add your image URL here */
                  alt="Zoiko Sema meeting summary on laptop showing action items and decision record"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4 order-3">
              {rightCards.map((card, i) => (
                <ShowcaseCard
                  key={card.title}
                  {...card}
                  active={bodyIn}
                  delay={i * 90}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}