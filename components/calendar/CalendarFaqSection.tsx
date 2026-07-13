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

const faqs = [
  {
    q: "What is Zoiko Sema Calendar?",
    a: "Sema Calendar is the scheduling layer inside Zoiko Sema. It brings meetings, calls, events, and reminders together with mail, files, and workspace policies in one place.",
  },
  {
    q: "Does Zoiko Sema include Calendar?",
    a: "Yes. Calendar ships as part of the Zoiko Sema platform alongside Search, Messaging, and Meetings, and shares the same permissions and workspace policies.",
  },
  {
    q: "Can I schedule video meetings from Sema Calendar?",
    a: "Yes. Any event can include a Sema Meet link, with waiting room and guest options configured at the time the meeting is scheduled.",
  },
  {
    q: "Does Calendar connect with Mail?",
    a: "Yes. You can create a calendar event directly from a mail thread, and the originating email stays attached to the event for context.",
  },
  {
    q: "Does Calendar support team availability?",
    a: "Yes. Calendar shows usable time slots across invited guests and time zones without exposing private meeting titles or details.",
  },
  {
    q: "How does Calendar connect with ZoikoTime?",
    a: "Through the ZoikoTime Bridge, an optional, policy-governed connection. Organizations that enable it can align meeting schedules with approved work context, never used for workforce surveillance.",
  },
  {
    q: "Is Calendar suitable for enterprise use?",
    a: "Yes. Calendar supports Confidential Mode, guest rules, retention controls, and audit trails, with policy configuration controlled by authorized administrators.",
  },
];

export default function CalendarFaqSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.08);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style>{`
        @keyframes cfqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cfq-hidden  { opacity: 0; transform: translateY(28px); }
        .cfq-visible { animation: cfqFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .cfq-item { opacity: 0; transform: translateY(20px); }
        .cfq-list.cfq-visible .cfq-item {
          animation: cfqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cfq-row {
          transition: background-color .2s ease, border-color .2s ease;
        }
        .cfq-row:hover {
          background-color: rgba(75, 71, 229, 0.03);
        }

        .cfq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .cfq-panel.cfq-open {
          grid-template-rows: 1fr;
        }
        .cfq-panel-inner {
          overflow: hidden;
        }

        .cfq-icon {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .cfq-icon.cfq-open {
          transform: rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .cfq-hidden, .cfq-visible, .cfq-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cfq-panel { transition: none !important; }
          .cfq-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-[#F3F2FD] pt-4 pb-16 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cfq-hidden ${badgeIn ? "cfq-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`cfq-hidden ${headIn ? "cfq-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(22px,4vw,30px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Questions about Sema Calendar
            </h2>
          </div>

          {/* Accordion list */}
          <div
            ref={listRef}
            className={`cfq-list ${listIn ? "cfq-visible" : ""} flex flex-col gap-3`}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `cfq-panel-${i}`;
              return (
                <div
                  key={faq.q}
                  className="cfq-item"
                  style={{ animationDelay: `${0.04 + i * 0.05}s` }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="cfq-row w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-4.5 text-left"
                    >
                      <span className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900">
                        {faq.q}
                      </span>
                      <span
                        className={`cfq-icon ${isOpen ? "cfq-open" : ""} shrink-0 inline-flex items-center justify-center w-5 h-5 text-brand`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className={`cfq-panel ${isOpen ? "cfq-open" : ""}`}
                    >
                      <div className="cfq-panel-inner">
                        <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}