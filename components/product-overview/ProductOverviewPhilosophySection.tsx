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

const rows = [
  { from: "Fragmented chats", to: "Structured communication spaces" },
  { from: "Meetings with no follow-up", to: "Summaries, decisions, and action items" },
  { from: "Scattered files", to: "Contextual files inside conversations and spaces" },
  { from: "Unclear ownership", to: "Assigned follow-ups and shared accountability" },
  { from: "Tool switching", to: "Messaging, calls, meetings, AI, and administration in one platform" },
  { from: "Loose communication", to: "Governed communication for business and enterprise teams" },
];

export default function ProductOverviewPhilosophySection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes poplFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .popl-hidden  { opacity: 0; transform: translateY(28px); }
        .popl-visible { animation: poplFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .popl-row { opacity: 0; transform: translateY(12px); }
        .popl-frame.popl-visible .popl-row {
          animation: poplFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .popl-frame { transition: box-shadow .35s ease; }
        .popl-frame:hover { box-shadow: 0 24px 50px rgba(15,15,40,0.1); }

        .popl-row-hover {
          transition: background-color .2s ease;
        }
        .popl-row-hover:hover {
          background-color: color-mix(in srgb, var(--brand) 4%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .popl-hidden, .popl-visible, .popl-row { opacity: 1 !important; transform: none !important; animation: none !important; }
          .popl-frame:hover, .popl-row-hover:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Product philosophy"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#EEF1FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`popl-hidden ${badgeIn ? "popl-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Philosophy
              </span>
            </div>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`popl-hidden ${headIn ? "popl-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-4">
              Conversations should not disappear.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[620px] mx-auto">
              In Zoiko Sema, messages, meetings, decisions, actions, files,
              and summaries become searchable business context that teams
              can use to coordinate work and move faster.
            </p>
          </div>

          {/* Table frame */}
          <div
            ref={tableRef}
            className={`popl-frame popl-hidden ${tableIn ? "popl-visible" : ""} rounded-2xl bg-white border border-gray-100 shadow-[0_16px_40px_rgba(15,15,40,0.06)] overflow-hidden`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand w-1/3">
                      From
                    </th>
                    <th className="text-left px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                      To
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={i}
                      className={`popl-row popl-row-hover ${
                        i !== rows.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                      style={{ animationDelay: `${0.25 + i * 0.06}s` }}
                    >
                      <td className="px-6 py-4 text-[13.5px] text-gray-500 align-top">
                        {r.from}
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-800 align-top">
                        {r.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}