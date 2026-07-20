"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiBriefcase, FiUsers, FiGlobe, FiCalendar } from "react-icons/fi";
import type { IconType } from "react-icons";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

type Card = { icon: IconType; title: string; items: string[] };

const CARDS: Card[] = [
  {
    icon: FiBriefcase,
    title: "Event brief workspace",
    items: [
      "Event name, type, date, venue space, owner",
      "Guest/attendee scope (count, access level)",
      "F&B requirements linked to brief",
      "AV and setup checklist with owners",
      "Accessible to all named staff — no broadcast",
    ],
  },
  {
    icon: FiUsers,
    title: "Staff coordination",
    items: [
      "Per-department task assignment with due time",
      "Cross-department channel for live coordination",
      "Shift overlap for handoff between event phases",
      "Duty manager on-call flagged and visible",
      "Post-event debrief space with action items",
    ],
  },
  {
    icon: FiGlobe,
    title: "Vendor scope",
    items: [
      "Named vendor contacts with scoped guest access",
      "Document sharing: floor plan, AV spec, F&B runsheet",
      "Vendor task visibility limited to their scope",
      "Messages expire at event close unless retained",
      "Audit of all vendor activity during event window",
    ],
  },
  {
    icon: FiCalendar,
    title: "Group booking coordination",
    items: [
      "Group channel linked to block reference (no PMS data)",
      "Block coordinator as named channel owner",
      "Room-block status updates from front desk",
      "Special requests routed to department workspaces",
      "Post-checkout satisfaction follow-up workflow",
    ],
  },
];

export function TravelEventOperationsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes teoFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .teo-hidden  { opacity: 0; transform: translateY(28px); }
        .teo-visible { animation: teoFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .teo-card { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease; }
        .teo-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(16,24,40,0.10); border-color: rgba(47,107,235,0.30); }

        @media (prefers-reduced-motion: reduce) {
          .teo-hidden, .teo-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .teo-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Event and group operations"
        className="w-full bg-[#EEF0FA] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span
              ref={eyebrowRef}
              className={`teo-hidden ${eyebrowIn ? "teo-visible" : ""} mb-5 inline-flex items-center rounded-full border border-[#2F6BEB]/30 bg-[#2F6BEB]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Event &amp; Group Operations
            </span>
            <h2
              ref={headRef}
              className={`teo-hidden ${headIn ? "teo-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Every event runs from a single brief.
            </h2>
            <p
              ref={subRef}
              className={`teo-hidden ${subIn ? "teo-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              One workspace per event. All departments, all tasks, all vendors —
              scoped and documented.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`teo-card teo-hidden ${gridIn ? "teo-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#2F6BEB] dark:bg-[#2F6BEB]/20 dark:text-[#6B8AF5]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-4 text-[15px] font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6BEB] dark:bg-[#6B8AF5]" />
                        <span className="text-[12.5px] leading-[1.5] text-gray-500 dark:text-gray-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelEventOperationsSection;