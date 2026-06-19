"use client";

import { useEffect, useState } from "react";

/**
 * FAQSection
 * Accordion-style FAQ list matching the "Pricing questions, answered straight" design.
 * First item open by default. Smooth grid-based expand/collapse animation,
 * hover/focus/active states on every row, and a skeleton loading state on mount.
 */

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Can I really start using Sema for free?",
    answer:
      "Yes. The Free plan is genuinely free for personal use. It is not a time-limited trial that automatically converts to paid. It is designed to help individuals explore Sema before deciding whether Pro or Business is right for them.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. You can create a Free account and start using Sema without entering any payment details. A card is only required when you choose to upgrade to a paid plan.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans at any time from your account settings. Changes take effect immediately and billing is prorated accordingly.",
  },
  {
    question: "Why is Sema priced below some established competitors?",
    answer:
      "Sema is built lean and focused. We don't carry the overhead of legacy infrastructure or bundle features most teams never use, so we can pass that efficiency on as lower, more transparent pricing.",
  },
  {
    question: "Is ZoikoTime included with Sema?",
    answer:
      "No. ZoikoTime is a separate, independent subscription. Sema can connect to ZoikoTime through a governed integration, but the products are priced and purchased separately.",
  },
  {
    question: "How does pricing work if our team grows?",
    answer:
      "Pricing scales per active user on your plan. As you add people, your next invoice reflects the updated seat count — there are no hidden tiers or sudden jumps.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes. Switching to annual billing on Pro or Business plans gives you a meaningful discount compared to paying month to month. You can switch from your billing settings at any time.",
  },
  {
    question: "Can we use Sema alongside Slack, Teams, Zoom, or Google Meet?",
    answer:
      "Yes. Sema is designed to complement your existing tools rather than replace them outright. Many teams run Sema for core communication while keeping other tools for specific workflows.",
  },
  {
    question: "What happens if we want to leave?",
    answer:
      "You can export your data and cancel at any time. There's no lock-in contract on monthly plans, and we provide a clear data-export path so you're never stuck.",
  },
];

function FAQRowSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="h-4 w-2/3 rounded bg-slate-100" />
        <div className="h-7 w-7 flex-shrink-0 rounded-full bg-slate-100" />
      </div>
    </div>
  );
}

export default function PricingFAQSection() {
  const [loaded, setLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#ECF3FF] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Frequently asked
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Pricing questions, answered straight
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        {!loaded ? (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <FAQRowSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="animate-[fadeUp_0.4s_ease-out_both] rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 rounded-xl"
                  >
                    <span className="text-[15px] font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
                        isOpen
                          ? "bg-[#2A2657] text-white"
                          : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                      }`}
                    >
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {isOpen ? (
                          <CloseIcon className="h-3.5 w-3.5" />
                        ) : (
                          <PlusIcon className="h-3.5 w-3.5" />
                        )}
                      </span>
                    </span>
                  </button>

                  {/* Smooth expand/collapse via grid-template-rows trick */}
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-8 text-center text-sm text-slate-500">
          Built for trust.{" "}
          <a
            href="#"
            className="font-semibold text-indigo-700 underline-offset-2 transition-colors duration-200 hover:text-indigo-900 hover:underline"
          >
            Read the trust architecture →
          </a>
        </p>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}