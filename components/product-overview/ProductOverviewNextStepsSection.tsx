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
  {
    want: "Team chat",
    goTo: "Messaging page",
    linkLabel: "Explore Messaging",
    href: "/messaging",
  },
  {
    want: "Quick voice calls",
    goTo: "Audio Calls page",
    linkLabel: "Explore Audio Calls",
    href: "/audio-calls",
  },
  {
    want: "Meetings",
    goTo: "Video Meetings page",
    linkLabel: "Explore Video Meetings",
    href: "/video-meetings",
  },
  {
    want: "Structured collaboration",
    goTo: "Channels & Spaces page",
    linkLabel: "Explore Channels & Spaces",
    href: "/product/channels",
  },
  {
    want: "IT / security / admin controls",
    goTo: "Admin Console page",
    linkLabel: "Explore Admin Console",
    href: "/admin-console",
  },
  {
    want: "Enterprise evaluation",
    goTo: "Demo path",
    linkLabel: "Get a demo",
    href: "/demo",
  },
];

export default function ProductOverviewNextStepsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes pnsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pns-hidden  { opacity: 0; transform: translateY(28px); }
        .pns-visible { animation: pnsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pns-row { opacity: 0; transform: translateY(12px); }
        .pns-frame.pns-visible .pns-row {
          animation: pnsFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pns-frame { transition: box-shadow .35s ease; }
        .pns-frame:hover { box-shadow: 0 24px 50px rgba(15,15,40,0.1); }

        .pns-row-hover {
          transition: background-color .2s ease;
        }
        .pns-row-hover:hover {
          background-color: color-mix(in srgb, var(--brand) 4%, transparent);
        }

        .pns-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pns-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .pns-hidden, .pns-visible, .pns-row { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pns-frame:hover, .pns-row-hover:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Where to go next"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#EEF1FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pns-hidden ${badgeIn ? "pns-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Where To Go Next
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pns-hidden ${headIn ? "pns-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Find the right module for what you need.
            </h2>
          </div>

          {/* Table frame */}
          <div
            ref={tableRef}
            className={`pns-frame pns-hidden ${tableIn ? "pns-visible" : ""} rounded-2xl bg-white border border-gray-100 shadow-[0_16px_40px_rgba(15,15,40,0.06)] overflow-hidden`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      You Want
                    </th>
                    <th className="text-left px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      Go To
                    </th>
                    <th className="text-left px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={i}
                      className={`pns-row pns-row-hover ${
                        i !== rows.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                      style={{ animationDelay: `${0.25 + i * 0.06}s` }}
                    >
                      <td className="px-6 py-4 text-[13.5px] text-gray-800">
                        {r.want}
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">
                        {r.goTo}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={r.href}
                          className="pns-link inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand whitespace-nowrap"
                        >
                          {r.linkLabel}
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
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