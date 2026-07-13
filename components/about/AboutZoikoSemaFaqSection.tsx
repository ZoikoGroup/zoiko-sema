"use client"

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Zoiko Sema?",
    answer:
      "Zoiko Sema is a work communication platform that connects messaging, audio and video meetings, AI meeting summaries, channels, spaces, and admin controls so teams can keep context, decisions, and follow-ups organized.",
  },
  {
    question: "Why does Sema exist?",
    answer:
      "Work communication breaks down when conversations, meetings, files, decisions, and follow-ups live in separate tools. Sema keeps them connected so context is never lost.",
  },
  {
    question: "How is Sema different from a chat or video tool?",
    answer:
      "Sema isn't a single-purpose chat or meeting app. It connects messaging, calls, meetings, and AI-supported summaries into one governed workspace, with follow-ups that stay tied to their original context.",
  },
  {
    question: "Is Zoiko Sema enterprise-ready?",
    answer:
      "Yes. Sema supports SSO, MFA, SCIM, role-based permissions, audit events, and retention policies designed for controlled, scalable enterprise deployment.",
  },
  {
    question: "How does Sema relate to ZoikoTime and the Zoiko ecosystem?",
    answer:
      "Sema is the work communication platform in the Zoiko ecosystem. ZoikoTime can provide workforce and customer context where relevant, and the wider Zoiko companies provide corporate background.",
  },
  {
    question: "Is the AI governed?",
    answer:
      "Yes. AI-supported summaries and follow-ups are designed to be reviewed and controlled by admins, with role permissions, sensitive space restrictions, and audit events — never hidden or unaccountable.",
  },
];

export default function AboutZoikoSemaFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          FAQ
        </p>
        <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          About Zoiko Sema
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
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pr-14">
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
  );
}
