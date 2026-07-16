"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "What is Zoiko Sema Documents?",
  "How is Documents different from Files?",
  "Can multiple people edit a document?",
  "Does Documents include version history?",
  "Can AI write or summarize documents?",
  "How are documents secured and governed?",
  "Can I share documents outside my organization?",
  "Is Documents available on every plan?",
];

export default function DocumentsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F1FC] px-6 py-20 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
          style={{ animationDelay: "0ms" }}
        >
          FAQ
        </p>
        <h2
          className="fade-in-item mt-4 text-4xl font-extrabold leading-snug text-gray-900 sm:text-[42px]"
          style={{ animationDelay: "80ms" }}
        >
          Common questions answered.
        </h2>

        <div className="mt-10 flex flex-col gap-3 text-left">
          {faqs.map((question, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={question}
                className="fade-in-item overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                style={{ animationDelay: `${160 + i * 50}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-sm leading-relaxed text-gray-500">
                      More detail on this topic will appear here.
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
