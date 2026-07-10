"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
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

const BRAND = "#3457E8";

const faqs = [
  {
    question: "What is Zoiko Sema for individual productivity?",
    answer:
      "A personal workspace that brings your priorities, messages, meetings, and tasks into one daily view — with AI-assisted summaries and follow-ups you control.",
  },
  {
    question: "How does Zoiko Sema help me stay focused each day?",
    answer:
      "It surfaces what needs your attention first, protects focus blocks from noisy interruptions, and keeps a running daily brief so nothing important gets buried.",
  },
  {
    question: "Can I use it without my whole team adopting it?",
    answer:
      "Yes. Zoiko Sema works for individual use out of the box — connect your own calendar, inbox, and tools, and get value immediately without waiting on a team rollout.",
  },
  {
    question: "Does Zoiko Sema respect my workspace's data and privacy policies?",
    answer:
      "Yes. AI and search only surface content you already have access to, and retention, sharing, and governance follow your workspace's existing policies.",
  },
  {
    question: "How does AI support my daily work?",
    answer:
      "AI summarizes meetings, drafts replies you can edit before sending, extracts action items automatically, and keeps searchable context across every conversation.",
  },
  {
    question: "What tools can Zoiko Sema integrate with?",
    answer:
      "Calendar, email, storage, CRM, task trackers, and identity tools — including Google Calendar, Microsoft 365, Slack, Salesforce, Jira/Asana, and Okta.",
  },
  {
    question: "Is Zoiko Sema suitable for enterprise use?",
    answer:
      "Yes. Individual productivity features scale into business-grade controls — permissions, retention rules, SSO, and admin governance — as your organization grows.",
  },
];

export default function IndividualProductivityFAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.05);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style>{`
        @keyframes ipfqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipfq-hidden  { opacity: 0; transform: translateY(28px); }
        .ipfq-visible { animation: ipfqFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipfq-item { opacity: 0; transform: translateY(18px); }
        .ipfq-item.ipfq-item-in {
          animation: ipfqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipfq-item {
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .ipfq-item:hover {
          border-color: #c7cff9;
          box-shadow: 0 10px 24px -18px rgba(52,87,232,0.3);
        }

        .ipfq-question {
          transition: color .2s ease;
        }

        /* height animation via grid-template-rows trick: no JS measuring needed */
        .ipfq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .ipfq-answer-wrap.ipfq-open {
          grid-template-rows: 1fr;
        }
        .ipfq-answer-inner {
          overflow: hidden;
        }
        .ipfq-answer-content {
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity .25s ease .05s, transform .25s ease .05s;
        }
        .ipfq-answer-wrap.ipfq-open .ipfq-answer-content {
          opacity: 1;
          transform: translateY(0);
        }

        /* plus / close icon */
        .ipfq-icon-line {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
          transform-origin: center;
        }
        .ipfq-icon-vertical { transform: scaleY(1); }
        .ipfq-item.ipfq-open .ipfq-icon-vertical { transform: scaleY(0); }
        .ipfq-icon-wrap {
          transition: transform .3s cubic-bezier(.22,1,.36,1), background .25s ease;
        }
        .ipfq-item.ipfq-open .ipfq-icon-wrap {
          transform: rotate(90deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .ipfq-hidden, .ipfq-item { opacity: 1 !important; transform: none !important; }
          .ipfq-visible, .ipfq-item-in { animation: none !important; }
          .ipfq-answer-wrap, .ipfq-icon-line, .ipfq-icon-wrap, .ipfq-answer-content {
            transition: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ipfq-hidden ${headIn ? "ipfq-visible" : ""} text-center mb-10`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              FAQ
            </p>
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-tight text-gray-900">
              Answers for teams and IT reviewers
            </h2>
          </div>

          {/* Accordion list */}
          <div ref={listRef} className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`ipfq-item ${listIn ? "ipfq-item-in" : ""} ${isOpen ? "ipfq-open" : ""} rounded-2xl border border-gray-200 px-6 py-5`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="ipfq-question text-[15px] font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span
                      className="ipfq-icon-wrap relative w-5 h-5 flex-shrink-0 flex items-center justify-center"
                    >
                      <span
                        className="ipfq-icon-line absolute w-3.5 h-[1.6px] rounded-full"
                        style={{ background: BRAND }}
                      />
                      <span
                        className="ipfq-icon-line ipfq-icon-vertical absolute w-[1.6px] h-3.5 rounded-full"
                        style={{ background: BRAND }}
                      />
                    </span>
                  </button>

                  <div className={`ipfq-answer-wrap ${isOpen ? "ipfq-open" : ""}`}>
                    <div className="ipfq-answer-inner">
                      <p className="ipfq-answer-content text-[13.5px] leading-relaxed text-gray-500 pt-3 max-w-[620px]">
                        {faq.answer}
                      </p>
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