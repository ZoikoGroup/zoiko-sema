"use client"

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does Zoiko Sema include file sharing?",
    answer:
      "Yes. Sema Files is a contextual file layer built into the workspace, connected to messages, meetings, and mail — not a separate storage tool.",
  },
  {
    question: "How are files organized in Sema?",
    answer:
      "Files are grouped by conversation, meeting, mail thread, or project rather than folders, and stay linked to the context that created them.",
  },
  {
    question: "Can Sema find files across meetings and messages?",
    answer:
      "Yes. Search works by topic, meeting, owner, decision, or mail thread, so files can be found by meaning rather than filename alone.",
  },
  {
    question: "Does Sema support secure file sharing?",
    answer:
      "Yes. Access permissions, external sharing approval, retention controls, and confidential mode are available for regulated and enterprise workspaces.",
  },
  {
    question: "How does Sema Files work with Mail and Calendar?",
    answer:
      "Mail attachments can become meeting assets, meeting decks stay linked to channels, and calendar events carry their files with them.",
  },
  {
    question: "Does Sema Files work with ZoikoTime?",
    answer:
      "Where relevant, ZoikoTime can provide workforce and customer context that connects to files inside the Sema workspace.",
  },
];

export default function SemaFilesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          FAQ
        </p>
        <h2 className="text-center text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Questions about Sema Files
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
