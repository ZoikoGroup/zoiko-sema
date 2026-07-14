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
    question: "How often are updates released?",
    answer:
      "We ship improvements and fixes continuously, with a summarized release note published roughly every two weeks and larger feature releases on a quarterly cadence.",
  },
  {
    question: "Can I beta-test new features?",
    answer:
      "Yes. Workspace admins can opt in to the early access program from Admin Console settings to try new features before general availability.",
  },
];

export default function ProductUpdateFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes puFaqUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-faq-hidden { opacity: 0; transform: translateY(20px); }
        .pu-faq-visible { animation: puFaqUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .pu-faq-row { transition: background-color .18s ease; }
        .pu-faq-row:hover { background-color: #FAFAFA; }

        .pu-faq-chevron { transition: transform .25s ease; }
        .pu-faq-chevron.open { transform: rotate(180deg); }

        @keyframes puFaqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-faq-answer { animation: puFaqAnswerIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .pu-faq-hidden { opacity: 1 !important; transform: none !important; }
          .pu-faq-visible, .pu-faq-answer { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div ref={ref} className={`pu-faq-hidden ${inView ? "pu-faq-visible" : ""} mx-auto max-w-2xl`}>
          <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="pu-faq-row flex w-full items-center justify-between py-5 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`pu-faq-chevron shrink-0 text-gray-400 ${isOpen ? "open" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pu-faq-answer pb-5 pr-10">
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
