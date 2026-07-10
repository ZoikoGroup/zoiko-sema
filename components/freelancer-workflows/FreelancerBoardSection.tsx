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

type Card = {
  dotColor: string;
  title: string;
  desc: string;
  badge?: { label: string; bg: string; color: string };
  meta?: string;
};

type Column = {
  title: string;
  count: number;
  cards: Card[];
};

const columns: Column[] = [
  {
    title: "Inquiry",
    count: 2,
    cards: [
      {
        dotColor: "#6D6AF2",
        title: "Delta Roasters",
        desc: "New inquiry — brand refresh & site.",
        badge: { label: "New lead", bg: "#EEF0F4", color: "#5B5F73" },
      },
      {
        dotColor: "#6D6AF2",
        title: "Aria Health",
        desc: "Discovery call requested.",
        badge: { label: "New lead", bg: "#EEF0F4", color: "#5B5F73" },
      },
    ],
  },
  {
    title: "Proposal",
    count: 1,
    cards: [
      {
        dotColor: "#22B573",
        title: "Nimbus Studio",
        desc: "Scope sent — awaiting sign-off.",
        badge: { label: "In review", bg: "#FDF0DA", color: "#B4791B" },
        meta: "Due Fri",
      },
    ],
  },
  {
    title: "Active work",
    count: 2,
    cards: [
      {
        dotColor: "#F2895C",
        title: "Harper & Co",
        desc: "Homepage approved, pricing page next.",
        badge: { label: "Approved", bg: "#E4F6EA", color: "#1E9A54" },
        meta: "Milestone 1",
      },
      {
        dotColor: "#E85D3C",
        title: "Fern Consulting",
        desc: "Deck drafts in progress.",
        badge: { label: "In review", bg: "#FDF0DA", color: "#B4791B" },
      },
    ],
  },
  {
    title: "Approval / Bill",
    count: 1,
    cards: [
      {
        dotColor: "#6D6AF2",
        title: "Vertex Labs",
        desc: "Delivered & approved by client.",
        badge: { label: "Ready to bill", bg: "#EDEBFB", color: "#3457E8" },
      },
    ],
  },
];

function BoardCard({ card, active, delay }: { card: Card; active: boolean; delay: number }) {
  return (
    <div
      className={`fwbd-card ${active ? "active" : ""} rounded-xl border border-gray-100 bg-white p-4`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-2.5 mb-2">
        <span
          className="w-3 h-3 rounded-[4px] mt-1 flex-shrink-0"
          style={{ background: card.dotColor }}
        />
        <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug">{card.title}</h4>
      </div>
      <p className="text-[12.5px] leading-relaxed text-gray-500 mb-3 pl-[22px]">{card.desc}</p>
      {card.badge && (
        <div className="flex items-center gap-2 pl-[22px]">
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{ background: card.badge.bg, color: card.badge.color }}
          >
            {card.badge.label}
          </span>
          {card.meta && (
            <span className="text-[11.5px] text-gray-400 font-medium">{card.meta}</span>
          )}
        </div>
      )}
    </div>
  );
}

function BoardColumn({
  column,
  active,
  colDelay,
}: {
  column: Column;
  active: boolean;
  colDelay: number;
}) {
  return (
    <div
      className={`fwbd-col ${active ? "active" : ""} rounded-2xl border border-gray-100 bg-white p-4`}
      style={{ animationDelay: `${colDelay}ms` }}
    >
      <div className="flex items-center justify-between mb-4 px-0.5">
        <h3 className="text-[13.5px] font-bold text-gray-900">{column.title}</h3>
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-semibold text-gray-500"
          style={{ background: "#F0F0F5" }}
        >
          {column.count}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {column.cards.map((card, i) => (
          <BoardCard
            key={card.title}
            card={card}
            active={active}
            delay={colDelay + 120 + i * 90}
          />
        ))}
      </div>
    </div>
  );
}

export default function FreelancerBoardSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: boardRef, inView: boardIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fwbdFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwbd-hidden  { opacity:0; transform:translateY(28px); }
        .fwbd-visible { animation: fwbdFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwbd-col { opacity:0; transform:translateY(24px); }
        .fwbd-col.active { animation: fwbdFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .fwbd-card { opacity:0; transform:translateY(14px); }
        .fwbd-card.active { animation: fwbdFadeUp .4s cubic-bezier(.22,1,.36,1) forwards; }

        .fwbd-col {
          transition: box-shadow .3s ease, border-color .3s ease;
        }
        .fwbd-col:hover {
          box-shadow: 0 12px 28px rgba(52,87,232,0.08);
          border-color: rgba(52,87,232,0.2);
        }

        .fwbd-card {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .fwbd-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px rgba(15,23,42,0.08);
          border-color: rgba(52,87,232,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwbd-hidden, .fwbd-col, .fwbd-card { opacity:1!important; transform:none!important; animation:none!important; }
          .fwbd-visible { animation:none!important; opacity:1!important; }
          .fwbd-col:hover, .fwbd-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Client Project Board"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fwbd-hidden ${headIn ? "fwbd-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#3457E8" }}
            >
              Client Project Board
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[680px] mx-auto">
              See every client from inquiry to delivered
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-gray-500">
              A calm, communication-led board — lighter than heavy project
              management, focused on progress, client approval, and delivery
              visibility.
            </p>
          </div>

          {/* Board */}
          <div
            ref={boardRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {columns.map((col, i) => (
              <BoardColumn key={col.title} column={col} active={boardIn} colDelay={i * 100} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}