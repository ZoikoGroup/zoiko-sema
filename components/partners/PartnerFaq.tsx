"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can apply to become a Zoiko Sema partner?",
    answer:
      "Technology providers, channel partners, implementation specialists, consultants, referral partners, and marketplace partners may apply. All applications are reviewed for fit.",
  },
  {
    question: "Is partner approval automatic?",
    answer:
      "No. Submitting an application starts a review by our partnerships team — it does not guarantee acceptance into any partner route.",
  },
  {
    question: "Can technology partners build integrations?",
    answer:
      "Yes. Technology partners can build APIs, integrations, connectors, marketplace apps, and extensions on top of Zoiko Sema, subject to security review readiness.",
  },
  {
    question: "Can partners resell Zoiko Sema?",
    answer:
      "Channel partners can resell, refer, or package Zoiko Sema as part of an approved commercial agreement. Commercial terms and specific benefits are program-approved.",
  },
  {
    question: "What enablement is available?",
    answer:
      "Qualified partners may receive structured onboarding, demo resources, technical documentation, product training, positioning guidance, implementation playbooks, co-marketing review, and a support escalation path after acceptance.",
  },
  {
    question: "How do partners support customers?",
    answer:
      "Partners support the customer journey across discovery, deployment, integration, governance, and expansion — depending on their partner type and route.",
  },
  {
    question: "Where can partners review security and privacy material?",
    answer:
      "Partners can point customers to the Trust Center, Security Policy, Privacy Notice, DPA, AI Use Policy, and System Status pages for enterprise readiness documentation.",
  },
];

export default function PartnerFaq() {
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

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Partner FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Before you apply
            </h2>
          </div>

          <div className="mt-12 space-y-4">
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
