"use client";

import { useState } from "react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does this replace compliance systems?",
    answer:
      "No. It provides meeting-to-work evidence and a review workflow that can support your internal processes and reviews. It's not a replacement for your compliance systems or a guarantee of regulatory compliance.",
  },
  {
    question: "Are records automatically synced?",
    answer:
      "No. A record only syncs to ZoikoTime after an authorized owner or reviewer approves it. Review-before-sync is an admin-configured policy that's always enforced, not optional.",
  },
  {
    question: "Can records be exported?",
    answer:
      "Yes. Authorized roles can generate permissioned PDF, CSV, or API evidence packs, with optional redaction, watermarking, and an export audit log recording who exported what and when.",
  },
  {
    question: "How is privacy handled?",
    answer:
      "Records use neutral, work-based language — source, owner, status, timestamps — rather than personal or behavioral scoring. Sensitive records can be flagged and restricted from export where needed.",
  },
  {
    question: "Does this track employees?",
    answer:
      "No. Compliance & Audit reflects reviewed meeting outcomes, decisions, and action items — not individual activity monitoring, keystrokes, or minute-by-minute tracking.",
  },
  {
    question: "Can legal or security review this?",
    answer:
      "Yes. The Trust, Privacy & Governance section above routes legal and security reviewers to the Security Center, Privacy Notice, Responsible AI policy, and Data Processing Addendum.",
  },
];

export default function ComplianceAuditFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes caFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-faq-hidden { opacity: 0; transform: translateY(20px); }
        .ca-faq-visible { animation: caFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ca-faq-row { transition: background-color .18s ease; }
        .ca-faq-row:hover { background-color: #FAFAFF; }

        .ca-faq-toggle { transition: background-color .2s ease, color .2s ease, transform .2s ease; }
        .ca-faq-row:hover .ca-faq-toggle { background-color: #E0DDFB; }

        @keyframes caFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-faq-answer { animation: caFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .ca-faq-hidden { opacity: 1 !important; transform: none !important; }
          .ca-faq-visible, .ca-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`ca-faq-hidden ${inView ? "ca-faq-visible" : ""} mx-auto max-w-3xl`}>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            FAQ
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
            Compliance &amp; Audit, answered
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
                    className="ca-faq-row flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="ca-faq-toggle flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="ca-faq-answer px-6 pb-6 pr-14">
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
