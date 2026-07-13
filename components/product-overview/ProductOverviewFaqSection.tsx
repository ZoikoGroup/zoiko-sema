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
    question: "What is Zoiko Sema?",
    answer:
      "Zoiko Sema is a unified work communication platform that brings meetings, messaging, calls, mail, calendar, files, search, and AI-supported summaries into one governed workspace.",
  },
  {
    question: "Does Zoiko Sema include meetings and messaging?",
    answer:
      "Yes. Sema includes video meetings, audio calls, direct messaging, group chats, and channels & spaces as its core daily communication tools.",
  },
  {
    question: "Does Zoiko Sema include Mail and Calendar?",
    answer:
      "Yes. Mail and Calendar are first-class Sema products, connected to your conversations, files, and workspace context — not separate utilities.",
  },
  {
    question: "Does Zoiko Sema provide AI meeting summaries?",
    answer:
      "Yes. Sema AI summarizes meetings, captures decisions, drafts follow-ups, and keeps context searchable across your workspace.",
  },
  {
    question: "Is Zoiko Sema suitable for businesses?",
    answer:
      "Yes. Sema supports admin controls, roles, policies, security, and enterprise-ready governance, with optional ZoikoTime integration for deeper accountability.",
  },
];

export default function ProductOverviewFaqSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.08);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes pofaqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pofaq-hidden  { opacity: 0; transform: translateY(28px); }
        .pofaq-visible { animation: pofaqFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pofaq-item { opacity: 0; transform: translateY(16px); }
        .pofaq-list.pofaq-visible .pofaq-item {
          animation: pofaqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pofaq-item-inner {
          transition: box-shadow .25s ease;
        }
        .pofaq-item-inner:hover {
          box-shadow: 0 10px 24px color-mix(in srgb, var(--brand) 10%, transparent);
        }

        .pofaq-toggle {
          transition: transform .25s ease;
        }
        .pofaq-toggle.pofaq-open {
          transform: rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .pofaq-hidden, .pofaq-visible, .pofaq-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pofaq-toggle { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#EEF1FF" }}
      >
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pofaq-hidden ${badgeIn ? "pofaq-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                FAQ
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pofaq-hidden ${headIn ? "pofaq-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,32px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Questions about Zoiko Sema
            </h2>
          </div>

          {/* List */}
          <div
            ref={listRef}
            className={`pofaq-list ${listIn ? "pofaq-visible" : ""} flex flex-col gap-3`}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="pofaq-item"
                  style={{ animationDelay: `${0.05 + i * 0.06}s` }}
                >
                  <div className="pofaq-item-inner rounded-2xl bg-white shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-[13.5px] sm:text-[14px] font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <span
                        className={`pofaq-toggle ${isOpen ? "pofaq-open" : ""} shrink-0 text-[18px] font-medium text-brand`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pr-14">
                        <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    )}
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
