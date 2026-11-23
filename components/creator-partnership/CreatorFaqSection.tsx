"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Can I apply without a company?",
    a: "Yes. Individual creators can apply without a registered company. Agency applications must identify the authorized representative.",
  },
  {
    q: "Is there a minimum follower count?",
    a: "No. Applications are reviewed for audience relevance, authenticity, and collaboration fit — there's no single follower threshold that approves or rejects you.",
  },
  {
    q: "Are creator fees guaranteed?",
    a: "No. Any compensation is agreed in a separate written agreement after approval. Submitting an application doesn't guarantee approval, a campaign, or payment.",
  },
  {
    q: "Will I receive a referral link immediately?",
    a: "No. Unique campaign links and reporting are issued only after approval, a signed agreement, and campaign activation.",
  },
  {
    q: "How will my campaign be measured?",
    a: "Approved campaigns use authorized attribution and reporting defined in your brief. Performance-based payouts depend on verified results, not self-reported numbers.",
  },
  {
    q: "Do I need to disclose a paid collaboration?",
    a: "Yes. Paid and sponsored content must be clearly disclosed in line with your agreement, platform rules, and applicable advertising guidelines.",
  },
  {
    q: "When will I hear back?",
    a: "After you verify your email, our team reviews your application and contacts you by email. Review times vary with application volume.",
  },
  {
    q: "Is this program live everywhere?",
    a: "Not yet. This program currently focuses on creators in India. Creators elsewhere can still apply, and we'll keep their details for future programs.",
  },
];

export default function CreatorFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Straight answers before you apply" />

        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            const id = `cp-faq-${i}`;
            return (
              <div
                key={q}
                className={`rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-[#C9D6F2]" : "border-[#E3E8F4] hover:border-[#C9D6F2]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15.5px] font-semibold text-[#0D1638] font-plus-jakarta">{q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2F6FED]">
                    <Plus size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                <div
                  id={id}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14.5px] leading-6 text-[#5B6582]">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
