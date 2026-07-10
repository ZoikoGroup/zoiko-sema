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
    question: "What is Zoiko Sema for ZoikoTime Customers?",
    answer:
      "It's a Zoiko Sema solution for organizations using ZoikoTime that want governed communication, meetings, handoffs, AI summaries, and collaboration connected to workforce-context operations.",
  },
  {
    question: "Does this mean Zoiko Sema monitors employees?",
    answer:
      "No. Zoiko Sema surfaces context to help teams coordinate — it doesn't track individual activity or behavior, and access always follows existing workspace permissions.",
  },
  {
    question: "How does Zoiko Sema connect with ZoikoTime?",
    answer:
      "An admin links your ZoikoTime organization, maps teams, departments, or locations to Sema workspaces, and configures what context is shared before anything goes live.",
  },
  {
    question: "Who should use this solution?",
    answer:
      "Operations, HR, and IT teams at organizations already using ZoikoTime who want communication and workforce context to stay connected without extra manual work.",
  },
  {
    question: "Can AI summaries be controlled?",
    answer:
      "Yes. Retention, sharing, sensitive-space exclusion, and which roles can view AI-generated summaries are all configurable by workspace admins.",
  },
  {
    question: "Is this suitable for enterprise deployment?",
    answer:
      "Yes. Permissions, SSO, audit trails, and retention policies scale to enterprise requirements, with admin-led or sales-assisted rollout.",
  },
];

export default function ZoikoCustomersFAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.05);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style>{`
        @keyframes zcfqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zcfq-hidden  { opacity: 0; transform: translateY(28px); }
        .zcfq-visible { animation: zcfqFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .zcfq-item { opacity: 0; transform: translateY(18px); }
        .zcfq-item.zcfq-item-in {
          animation: zcfqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zcfq-item {
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .zcfq-item:hover {
          border-color: #c7cff9;
          box-shadow: 0 10px 24px -18px rgba(52,87,232,0.3);
        }

        /* height animation via grid-template-rows trick: no JS measuring needed */
        .zcfq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .zcfq-answer-wrap.zcfq-open {
          grid-template-rows: 1fr;
        }
        .zcfq-answer-inner {
          overflow: hidden;
        }
        .zcfq-answer-content {
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity .25s ease .05s, transform .25s ease .05s;
        }
        .zcfq-answer-wrap.zcfq-open .zcfq-answer-content {
          opacity: 1;
          transform: translateY(0);
        }

        /* circular plus / close icon chip */
        .zcfq-icon-chip {
          background: #E6E9FB;
          transition: background .25s ease;
        }
        .zcfq-item.zcfq-open .zcfq-icon-chip {
          background: #dde2fb;
        }
        .zcfq-icon-line {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
          transform-origin: center;
        }
        .zcfq-icon-vertical { transform: scaleY(1); }
        .zcfq-item.zcfq-open .zcfq-icon-vertical { transform: scaleY(0); }
        .zcfq-icon-chip {
          transition: background .25s ease, transform .3s cubic-bezier(.22,1,.36,1);
        }
        .zcfq-item.zcfq-open .zcfq-icon-chip {
          transform: rotate(90deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .zcfq-hidden, .zcfq-item { opacity: 1 !important; transform: none !important; }
          .zcfq-visible, .zcfq-item-in { animation: none !important; }
          .zcfq-answer-wrap, .zcfq-icon-line, .zcfq-icon-chip, .zcfq-answer-content {
            transition: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`zcfq-hidden ${headIn ? "zcfq-visible" : ""} text-center mb-10`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              FAQ
            </p>
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-tight text-gray-900">
              Answers for operations, HR, and IT
            </h2>
          </div>

          {/* Accordion list */}
          <div ref={listRef} className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`zcfq-item ${listIn ? "zcfq-item-in" : ""} ${isOpen ? "zcfq-open" : ""} rounded-2xl border border-gray-200 px-6 py-5`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="zcfq-icon-chip relative w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                      <span
                        className="zcfq-icon-line absolute w-3 h-[1.6px] rounded-full"
                        style={{ background: BRAND }}
                      />
                      <span
                        className="zcfq-icon-line zcfq-icon-vertical absolute w-[1.6px] h-3 rounded-full"
                        style={{ background: BRAND }}
                      />
                    </span>
                  </button>

                  <div className={`zcfq-answer-wrap ${isOpen ? "zcfq-open" : ""}`}>
                    <div className="zcfq-answer-inner">
                      <p className="zcfq-answer-content text-[13.5px] leading-relaxed text-gray-500 pt-3 max-w-[620px]">
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