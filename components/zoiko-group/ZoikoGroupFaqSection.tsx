"use client";

import { useState } from "react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Zoiko Group?",
    answer:
      "Zoiko Group is the parent ecosystem and shared operating vision for Zoiko products. This page uses only approved brand-relationship language and doesn't publish unverified corporate facts.",
  },
  {
    question: "How does Zoiko Sema fit into Zoiko Group?",
    answer:
      "Zoiko Sema is the group's business communication and collaboration product — messaging, meetings, AI summaries, channels, and admin-governed workspaces. It's the active product context within the wider Zoiko ecosystem.",
  },
  {
    question: "Is Zoiko Sema the same as Zoiko Tech?",
    answer:
      "No. Zoiko Sema is a distinct product within the Zoiko Group ecosystem. Where a relationship to Zoiko Tech or other entities is approved for publication, it is shown on this page with the appropriate context.",
  },
  {
    question: "What other products are in the Zoiko ecosystem?",
    answer:
      "The ecosystem map above shows the routes we can currently confirm — including Zoiko Telecom, Zoiko AI, and ZoikoMeds — each linked only where wording has been brand and legal approved.",
  },
  {
    question: "Where do I go for sales, support, partners, or press?",
    answer:
      "Use the \"Find your route\" section above to pick the description that matches you — buyer, current customer, partner prospect, candidate, or press/analyst — and it will point you to the right primary and secondary destination.",
  },
  {
    question: "Where can I review trust, privacy, and security?",
    answer:
      "The Trust Center brings together our Security Policy, Privacy Notice, AI Use Policy, Data Processing Addendum, and System Status in one place, listed in the \"Proof routes, not claims\" section above.",
  },
];

export default function ZoikoGroupFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes zgFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-faq-hidden { opacity: 0; transform: translateY(20px); }
        .zg-faq-visible { animation: zgFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .zg-faq-row { transition: background-color .18s ease; }
        .zg-faq-row:hover { background-color: #FAFAFF; }

        .zg-faq-toggle { transition: background-color .2s ease, color .2s ease, transform .2s ease; }
        .zg-faq-row:hover .zg-faq-toggle { background-color: #E0DDFB; }

        @keyframes zgFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-faq-answer { animation: zgFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .zg-faq-hidden { opacity: 1 !important; transform: none !important; }
          .zg-faq-visible, .zg-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`zg-faq-hidden ${inView ? "zg-faq-visible" : ""} mx-auto max-w-3xl`}>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            FAQ
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
            Zoiko Group &amp; Zoiko Sema
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
                    className="zg-faq-row flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="zg-faq-toggle flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="zg-faq-answer px-6 pb-6 pr-14">
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
