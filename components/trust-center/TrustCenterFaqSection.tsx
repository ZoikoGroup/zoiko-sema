"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is Zoiko Sema ISO 27001 or SOC 2 certified?",
    answer:
      "Current certification status and audit reports are shared with qualified reviewers through the verified access process above, alongside our published security overview.",
  },
  {
    question: "How does Zoiko Sema handle AI-generated meeting summaries?",
    answer:
      "AI summaries are admin-controlled and reviewable — access, sharing, and export follow role and workspace policy, and sensitive workspaces can exclude AI entirely.",
  },
  {
    question: "What admin controls are available to enterprise customers?",
    answer:
      "Enterprise admins can manage identity and access (SSO/MFA), roles and permissions, retention and audit settings, AI governance, and integration/webhook access from the Admin Console.",
  },
  {
    question: "Can I request a vendor security packet for procurement review?",
    answer:
      "Yes. Submit a security review request above with your work email, company, and role, and our team will route a vendor security packet to qualified reviewers.",
  },
  {
    question: "Does Zoiko Sema support data residency?",
    answer:
      "Data residency options and current hosting regions are detailed in the data processing summary, available to verified reviewers through the trust document request process.",
  },
  {
    question: "Where can I report a security vulnerability?",
    answer:
      "Use the Report a Concern route above, or contact our security team directly — all reports are triaged by our security team with acknowledgement and status updates.",
  },
];

export default function TrustCenterFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes tcFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-faq-hidden { opacity: 0; transform: translateY(20px); }
        .tc-faq-visible { animation: tcFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-faq-row { transition: background-color .18s ease; }
        .tc-faq-row:hover { background-color: #FAFAFA; }

        .tc-faq-chevron { transition: transform .25s ease; }
        .tc-faq-chevron.open { transform: rotate(180deg); }

        @keyframes tcFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-faq-answer { animation: tcFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .tc-faq-hidden { opacity: 1 !important; transform: none !important; }
          .tc-faq-visible, .tc-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`tc-faq-hidden ${inView ? "tc-faq-visible" : ""} mx-auto max-w-2xl`}>
          <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Security Center FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-gray-500">
            Common questions from security reviewers, procurement teams, and
            IT administrators.
          </p>

          <div className="mt-8">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="tc-faq-row flex w-full items-center justify-between py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`tc-faq-chevron shrink-0 text-gray-400 ${isOpen ? "open" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="tc-faq-answer pb-5 pr-10">
                      <p className="text-sm leading-relaxed text-gray-500">{faq.answer}</p>
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
