"use client"

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Zoiko Tech?",
    answer:
      "Zoiko Tech is the technology company that builds and operates Zoiko Sema, a business communication product for secure, context-aware collaboration, governed AI, and admin-controlled workspaces.",
  },
  {
    question: "How does Zoiko Tech relate to Zoiko Sema?",
    answer:
      "Zoiko Tech is the technology organization; Zoiko Sema is the business communication product it builds and operates, handling messaging, meetings, AI summaries, and admin controls.",
  },
  {
    question: "Is Zoiko Sema enterprise-ready, and how is trust handled?",
    answer:
      "Yes. Zoiko Sema supports SSO, MFA, SCIM, role-based permissions, audit events, and retention policies, with security, privacy, and reliability documented on the Trust Center.",
  },
  {
    question: "Does Zoiko Tech work with partners and developers?",
    answer:
      "Yes. Partner and integration collaboration is supported through the Partners route, with API and admin documentation available in the Developer Docs.",
  },
  {
    question: "How do press and candidates get in touch?",
    answer:
      "Press can request approved company boilerplate and media kits through the Press contact route. Candidates can view open roles and hiring status through Careers.",
  },
  {
    question: "Where can I find company facts like founding date or headquarters?",
    answer:
      "Company facts are published only when verified and approved, and will appear on this page and the Company Timeline as they become available.",
  },
];

export default function AboutZoikoTechFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F46E5]">
          FAQ
        </p>
        <h2 className="text-center text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          About Zoiko Tech
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
                  className="flex w-full items-center gap-20 justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F46E5]">
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
