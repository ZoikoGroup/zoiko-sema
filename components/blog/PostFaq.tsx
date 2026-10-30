"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlogFaq } from "@/lib/blog/posts";

export default function PostFaq({ faqs }: { faqs: BlogFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={faq.question} className="border-b border-gray-200 bg-[#F7F9FB] last:border-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <h3 className="text-[15px] font-semibold text-gray-900">
                {i + 1}. {faq.question}
              </h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Kept in the DOM so the answers match the FAQPage structured data. */}
            <div hidden={!isOpen} className="px-6 pb-6 pr-14">
              <p className="text-[15px] leading-relaxed text-gray-500">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
