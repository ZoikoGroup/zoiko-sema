"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this the same as the Roadmap?",
    answer:
      "No. The Roadmap shows what's planned; Product Updates shows what has actually shipped, is rolling out, or is being deprecated — with availability and impact stated per update.",
  },
  {
    question: "Why can't I use an update marked Available?",
    answer:
      "Availability can still depend on your plan, platform, region, or workspace policy. Each card explains the specific condition blocking access for your account.",
  },
  {
    question: "What does \"Rolling out\" mean for me?",
    answer:
      "The feature is being delivered in phases across workspaces and regions. If you don't see it yet, it will reach your workspace on its scheduled cohort — no action is needed.",
  },
  {
    question: "How do I find breaking API changes?",
    answer:
      "Filter the timeline to \"Developer,\" or use the \"View developer notes\" link — every breaking or migration-required change lists its deadline and migration guide.",
  },
  {
    question: "Can I subscribe to only some products?",
    answer:
      "Yes. After confirming your subscription email, you can choose which products and change types (features, admin, developer) you want notified about.",
  },
];

export default function ProductUpdatesFaq() {
  const [open, setOpen] = useState(-1);

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
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Questions about Product Updates
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

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] transition-transform duration-300">
                      {isOpen ? (
                        <X size={16} className="text-[#4F63F0]" />
                      ) : (
                        <Plus size={16} className="text-[#4F63F0]" />
                      )}
                    </span>
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
