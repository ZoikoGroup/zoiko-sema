"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I verify the integrity of my downloads?",
    answer:
      "Every asset in the Zoiko Sema library includes a SHA-256 checksum. You can use the provided manifest or run a manual integrity check via the terminal to ensure the file matches our signed source.",
  },
  {
    question: "Can I access older versions of documentation?",
    answer:
      "Yes. The Version Management panel above lets you browse Current, Archive, and Legacy releases, each with its own changelog and direct download link.",
  },
  {
    question: "Are resources updated automatically?",
    answer:
      "No. Every update goes through human review and re-signing before publication, so your existing download links always resolve to a verified, stable version.",
  },
];

export default function ResourceLibraryFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="fade-up overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                  >
                    <span className="text-[15px] font-semibold text-[#202533]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-7 text-[15px] leading-7 text-[#6B7280]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
