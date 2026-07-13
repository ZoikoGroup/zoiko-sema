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
    q: "What is Zoiko Sema Search?",
    a: "Sema Search is the unified search layer inside Zoiko Sema. It lets you search across messages, meetings, mail, files, and decisions from a single search bar, instead of checking each tool separately.",
  },
  {
    q: "Can Sema Search find meeting summaries?",
    a: "Yes. Sema Search indexes AI-generated meeting summaries, so you can search for decisions, owners, and next steps that came out of a specific meeting.",
  },
  {
    q: "Can Sema Search find Mail and Calendar items?",
    a: "Yes. Connected mail threads and calendar events are indexed alongside messages and files, so a single search can surface an email, a meeting invite, and the related discussion together.",
  },
  {
    q: "Are search results permission controlled?",
    a: "Yes. Every result is filtered per user based on roles, group membership, and access policies. Sema Search never surfaces content a user isn't already authorized to view.",
  },
  {
    q: "Does Sema Search use AI?",
    a: "Yes. Sema AI ranks results by relevance and can extract decisions, owners, and action items automatically, so you get an answer instead of just a list of links.",
  },
  {
    q: "Can Sema Search connect with ZoikoTime?",
    a: "Yes, through the ZoikoTime Bridge. Sema Search can surface approved ZoikoTime context for authorized users, while keeping private or unpermitted data out of results.",
  },
];

export default function SearchFaqSection() {
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
        @keyframes sfqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sfq-hidden  { opacity: 0; transform: translateY(28px); }
        .sfq-visible { animation: sfqFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .sfq-item { opacity: 0; transform: translateY(20px); }
        .sfq-list.sfq-visible .sfq-item {
          animation: sfqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sfq-row {
          transition: background-color .2s ease, border-color .2s ease;
        }
        .sfq-row:hover {
          background-color: rgba(75, 95, 255, 0.03);
        }

        .sfq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .sfq-panel.sfq-open {
          grid-template-rows: 1fr;
        }
        .sfq-panel-inner {
          overflow: hidden;
        }

        .sfq-icon {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .sfq-icon.sfq-open {
          transform: rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .sfq-hidden, .sfq-visible, .sfq-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sfq-panel { transition: none !important; }
          .sfq-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`sfq-hidden ${badgeIn ? "sfq-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`sfq-hidden ${headIn ? "sfq-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Answers for buyers and reviewers
            </h2>
          </div>

          {/* Accordion list */}
          <div
            ref={listRef}
            className={`sfq-list ${listIn ? "sfq-visible" : ""} flex flex-col gap-3`}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `sfq-panel-${i}`;
              return (
                <div
                  key={faq.q}
                  className="sfq-item"
                  style={{ animationDelay: `${0.04 + i * 0.06}s` }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="sfq-row w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-4.5 text-left"
                    >
                      <span className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900">
                        {faq.q}
                      </span>
                      <span
                        className={`sfq-icon ${isOpen ? "sfq-open" : ""} shrink-0 inline-flex items-center justify-center w-5 h-5 text-brand`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className={`sfq-panel ${isOpen ? "sfq-open" : ""}`}
                    >
                      <div className="sfq-panel-inner">
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