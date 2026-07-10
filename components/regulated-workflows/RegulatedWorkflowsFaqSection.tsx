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

const BRAND = "#3457E8";

const faqs = [
  {
    q: "What is Zoiko Sema Regulated Workflows?",
    a: "A governed communication experience for teams that need controlled collaboration, approval workflows, evidence capture, retention, legal hold, audit trails, and enterprise security controls.",
  },
  {
    q: "Which teams is it designed for?",
    a: "Legal, compliance, healthcare, financial services, and any regulated team that needs to prove who did what, when, and under which policy — without slowing collaboration down.",
  },
  {
    q: "Does it support retention and legal hold?",
    a: "Yes. Administrators can set workspace-level and workflow-level retention rules, place legal holds on specific cases or matters, and control export scope and redaction for produced evidence.",
  },
  {
    q: "Can AI be restricted in sensitive spaces?",
    a: "Yes. AI summaries, action extraction, and generated outputs can be allowed, restricted, or fully excluded per workspace — including sensitive-space exclusions like Legal, HR, or Executive.",
  },
  {
    q: "Can external collaborators participate?",
    a: "Yes, with governance. External access supports approved domains, guest expiry, client and partner roles, and scheduled access reviews so outside participation stays controlled.",
  },
  {
    q: "Is this a compliance guarantee?",
    a: "No. Zoiko Sema supports compliance workflows and audit readiness through controls and evidence — it does not imply automatic compliance with any specific regulation or standard.",
  },
];

export default function RegulatedWorkflowsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes rfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rf-hidden  { opacity: 0; transform: translateY(28px); }
        .rf-visible { animation: rfFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rf-item { opacity: 0; transform: translateY(18px); }
        .rf-list.rf-list-visible .rf-item {
          animation: rfFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rf-row {
          transition: background-color .2s ease;
        }
        .rf-row:hover {
          background-color: #FAFAFE;
        }

        .rf-icon {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }

        .rf-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .rf-answer-open {
          grid-template-rows: 1fr;
        }
        .rf-answer-inner {
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .rf-hidden, .rf-visible, .rf-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rf-answer { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-[#F3F1FA] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 md:px-10">
          {/* Heading */}
          <div
            ref={headRef}
            className={`rf-hidden ${headIn ? "rf-visible" : ""} text-center mb-8 sm:mb-10`}
          >
            <h2 className="text-[clamp(22px,3.8vw,30px)] font-bold leading-[1.25] tracking-tight text-gray-900">
              Answers for compliance, legal, and IT reviewers
            </h2>
          </div>

          {/* FAQ list */}
          <div
            ref={listRef}
            className={`rf-list ${listIn ? "rf-list-visible" : ""} flex flex-col gap-3`}
          >
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className="rf-item rounded-2xl bg-white overflow-hidden"
                  style={{ animationDelay: `${0.04 + i * 0.06}s` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="rf-row w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[14px] sm:text-[14.5px] font-bold text-gray-900">
                      {item.q}
                    </span>
                    <span
                      className="rf-icon flex items-center justify-center w-6 h-6 rounded-full shrink-0"
                      style={{
                        color: BRAND,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div className={`rf-answer ${isOpen ? "rf-answer-open" : ""}`}>
                    <div className="rf-answer-inner">
                      <p className="px-6 pb-5 text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                        {item.a}
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