"use client";

import { useState } from "react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Verified Collaboration?",
    answer:
      "It turns meetings, messages, decisions, and follow-ups into source-linked, human-reviewed work records that can connect to ZoikoTime work context — so collaboration becomes visible, reviewable, and auditable.",
  },
  {
    question: "Is this surveillance or productivity scoring?",
    answer:
      "No. Verified Collaboration works from reviewed collaboration outcomes — meetings, decisions, and follow-ups — not minute-by-minute activity or individual monitoring. Productivity views are aggregated and role-filtered.",
  },
  {
    question: "How does a meeting become a verified record?",
    answer:
      "A meeting, call, or message thread is captured, a candidate summary and decisions are extracted, an owner reviews and approves it, and only then is it verified with a source link, timestamp, and evidence trail.",
  },
  {
    question: "What does \"review before sync\" mean?",
    answer:
      "Nothing is treated as final until a human owner or authorized reviewer approves it. Extracted summaries, decisions, and tasks stay as candidates — editable or rejectable — until they're confirmed.",
  },
  {
    question: "What syncs to ZoikoTime?",
    answer:
      "Only approved, verified records — work timeline entries, decision logs, and follow-up items — sync to ZoikoTime and connected workflows, gated by admin-configured integrations and role permissions.",
  },
  {
    question: "Who can approve or edit records?",
    answer:
      "Only authorized users defined by workspace role permissions — typically the record owner, their manager, or a workspace admin — can approve, sync, export, or edit a verified record.",
  },
];

export default function VerifiedCollaborationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes vcFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-faq-hidden { opacity: 0; transform: translateY(20px); }
        .vc-faq-visible { animation: vcFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .vc-faq-row { transition: background-color .18s ease; }
        .vc-faq-row:hover { background-color: #FAFAFF; }

        .vc-faq-toggle { transition: background-color .2s ease, color .2s ease, transform .2s ease; }
        .vc-faq-row:hover .vc-faq-toggle { background-color: #E0DDFB; }

        @keyframes vcFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-faq-answer { animation: vcFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .vc-faq-hidden { opacity: 1 !important; transform: none !important; }
          .vc-faq-visible, .vc-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`vc-faq-hidden ${inView ? "vc-faq-visible" : ""} mx-auto max-w-3xl`}>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            FAQ
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
            Verified Collaboration, answered
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
                    className="vc-faq-row flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="vc-faq-toggle flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="vc-faq-answer px-6 pb-6 pr-14">
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
