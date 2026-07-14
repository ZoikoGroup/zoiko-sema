"use client";

import { useState } from "react";
import { useInView } from "./useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is ZoikoTime employee monitoring?",
    answer:
      "No. ZoikoTime verifies work outcomes and follow-through tied to meetings, decisions, and assigned tasks — with role-based visibility and source-linked evidence, not minute-by-minute activity tracking.",
  },
  {
    question: "What will the demo actually show?",
    answer:
      "A guided walkthrough tailored to your selected use case: meeting-to-work flow, verified collaboration records, compliance and audit evidence, productivity intelligence, and admin governance controls.",
  },
  {
    question: "How do you handle security and compliance review?",
    answer:
      "Our Security Center, Privacy & Data, and Compliance pages cover our posture up front, and we can route your request directly to a security or compliance specialist before or after the demo.",
  },
  {
    question: "We're already a Zoiko Sema customer — can we still request a demo?",
    answer:
      "Yes. Select \"Current customers\" as your primary goal and we'll route you to an expansion and implementation conversation instead of a general sales demo.",
  },
  {
    question: "How long is the demo and who attends?",
    answer:
      "Most walkthroughs run 30–45 minutes. We'll match attendees to your selected use case — typically a solutions engineer plus a specialist for compliance, workforce, or IT topics.",
  },
  {
    question: "What does it take to deploy?",
    answer:
      "Deployment scope depends on your stack — calendar and meeting sources, CRM, project tools, HRIS, and SSO/identity are mapped during onboarding, with admin governance controls configured before rollout.",
  },
];

export default function ZTRDFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ztrdFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-faq-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-faq-visible { animation: ztrdFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-faq-row { transition: background-color .18s ease; }
        .ztrd-faq-row:hover { background-color: #FAFAFF; }

        .ztrd-faq-toggle { transition: background-color .2s ease, color .2s ease, transform .2s ease; }
        .ztrd-faq-row:hover .ztrd-faq-toggle { background-color: #E0DDFB; }

        @keyframes ztrdFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-faq-answer { animation: ztrdFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-faq-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-faq-visible, .ztrd-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`ztrd-faq-hidden ${inView ? "ztrd-faq-visible" : ""} mx-auto max-w-3xl`}>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            FAQs & objection handling
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
            Common questions before you request
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
                    aria-expanded={isOpen}
                    className="ztrd-faq-row flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{faq.question}</h3>
                    <span className="ztrd-faq-toggle flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="ztrd-faq-answer px-6 pb-6 pr-14">
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