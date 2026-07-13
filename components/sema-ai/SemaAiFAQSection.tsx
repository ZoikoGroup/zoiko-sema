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
    question: "What is Sema AI?",
    answer:
      "Sema AI is the intelligence layer inside Zoiko Sema that summarizes meetings, messages, calls, and mail, captures decisions, and drafts follow-ups — all governed by your workspace's policy.",
  },
  {
    question: "Does Sema AI work with meetings?",
    answer:
      "Yes. Sema AI generates meeting summaries, decisions, and action items from audio and transcripts, which hosts and permitted participants can review and edit before sharing.",
  },
  {
    question: "Does Sema AI work with messages, mail, and calendar?",
    answer:
      "Yes. Sema AI recaps message threads, drafts email replies, and uses calendar context to prepare for upcoming meetings — all scoped to content you already have permission to see.",
  },
  {
    question: "Can Sema AI send emails or follow-ups automatically?",
    answer:
      "No, not without approval. Sema AI drafts follow-ups and replies, but by default a human must review and approve before anything is sent — this can be configured by workspace admins.",
  },
  {
    question: "How does Sema AI protect sensitive communication?",
    answer:
      "Confidential Mode content is excluded from AI processing entirely, and admins can restrict AI availability by workspace, role, or meeting type for HR, legal, or other sensitive contexts.",
  },
  {
    question: "Is Sema AI suitable for enterprise teams?",
    answer:
      "Yes. Admin controls, audit trails, data boundaries, and retention settings scale to enterprise requirements, with governance documentation available through the Trust Center.",
  },
];

export default function SemaAiFAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.05);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style>{`
        @keyframes safqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .safq-hidden  { opacity: 0; transform: translateY(28px); }
        .safq-visible { animation: safqFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .safq-item { opacity: 0; transform: translateY(18px); }
        .safq-item.safq-item-in {
          animation: safqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .safq-item {
          transition: background .25s ease;
        }
        .safq-item:hover {
          background: #E6E9FB;
        }

        .safq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .safq-answer-wrap.safq-open {
          grid-template-rows: 1fr;
        }
        .safq-answer-inner {
          overflow: hidden;
        }
        .safq-answer-content {
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity .25s ease .05s, transform .25s ease .05s;
        }
        .safq-answer-wrap.safq-open .safq-answer-content {
          opacity: 1;
          transform: translateY(0);
        }

        .safq-icon-line {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
          transform-origin: center;
        }
        .safq-icon-vertical { transform: scaleY(1); }
        .safq-item.safq-open .safq-icon-vertical { transform: scaleY(0); }

        @media (prefers-reduced-motion: reduce) {
          .safq-hidden, .safq-item { opacity: 1 !important; transform: none !important; }
          .safq-visible, .safq-item-in { animation: none !important; }
          .safq-answer-wrap, .safq-icon-line, .safq-answer-content { transition: none !important; }
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
            className={`safq-hidden ${headIn ? "safq-visible" : ""} text-center mb-10`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              FAQ
            </p>
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-tight text-gray-900">
              Answers for buyers and reviewers
            </h2>
          </div>

          {/* Accordion list */}
          <div ref={listRef} className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`safq-item ${listIn ? "safq-item-in" : ""} ${isOpen ? "safq-open" : ""} rounded-xl px-6 py-4`}
                  style={{ background: "#F3F2FD", animationDelay: `${i * 0.06}s` }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="relative w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      <span
                        className="safq-icon-line absolute w-3.5 h-[1.8px] rounded-full"
                        style={{ background: BRAND }}
                      />
                      <span
                        className="safq-icon-line safq-icon-vertical absolute w-[1.8px] h-3.5 rounded-full"
                        style={{ background: BRAND }}
                      />
                    </span>
                  </button>

                  <div className={`safq-answer-wrap ${isOpen ? "safq-open" : ""}`}>
                    <div className="safq-answer-inner">
                      <p className="safq-answer-content text-[13px] leading-relaxed text-gray-500 pt-3 max-w-[640px]">
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