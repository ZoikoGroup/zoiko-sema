"use client";

import { useState } from "react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is ZoikoTime employee surveillance?",
    answer:
      "No. ZoikoTime verifies work outcomes and follow-through tied to meetings, decisions, and assigned tasks — with role-based visibility and source-linked evidence. There's no spying, no minute-by-minute activity exposure, and no hidden tracking.",
  },
  {
    question: "What does ZoikoTime add to Zoiko Sema?",
    answer:
      "ZoikoTime attaches owners, work markers, status, approvals, and source-linked evidence to the meetings, messages, and decisions captured in Sema — turning conversations into verified, reviewable work.",
  },
  {
    question: "Are AI summaries and work items reviewed by people?",
    answer:
      "Yes. AI-assisted summaries and work conversions are designed to be reviewed and confirmed by an owner or admin before they're treated as verified — never auto-accepted without human review.",
  },
  {
    question: "Who can see verified work signals?",
    answer:
      "Visibility follows workspace roles: contributors see their own items, managers see team-level signals, admins manage retention and integrations, and auditors get source-linked, exportable views where permitted.",
  },
  {
    question: "Is productivity intelligence based on individual activity?",
    answer:
      "No. Productivity intelligence is aggregated and role-filtered — built from work outcomes and source-linked signals rather than minute-by-minute individual activity monitoring.",
  },
  {
    question: "Which capabilities require a plan?",
    answer:
      "Core meeting-to-work capture is available broadly, while advanced capacity signals, audit exports, and admin retention controls are plan-gated for Business and Enterprise workspaces.",
  },
];

export default function SemaZoikoTimeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes sztFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-faq-hidden { opacity: 0; transform: translateY(20px); }
        .szt-faq-visible { animation: sztFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .szt-faq-row { transition: background-color .18s ease; }
        .szt-faq-row:hover { background-color: #FAFAFF; }

        .szt-faq-toggle { transition: background-color .2s ease, color .2s ease, transform .2s ease; }
        .szt-faq-row:hover .szt-faq-toggle { background-color: #E0DDFB; }

        @keyframes sztFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-faq-answer { animation: sztFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .szt-faq-hidden { opacity: 1 !important; transform: none !important; }
          .szt-faq-visible, .szt-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`szt-faq-hidden ${inView ? "szt-faq-visible" : ""} mx-auto max-w-3xl`}>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            FAQ
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
            Sema + ZoikoTime
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={faq.question}
                  className={i !== faqs.length - 1 ? "border-b border-gray-200" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="szt-faq-row flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="szt-faq-toggle flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="szt-faq-answer px-6 pb-6 pr-14">
                      <p className="text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
