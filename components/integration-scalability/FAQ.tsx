import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Zoiko Sema handle data sovereignty for global enterprises?",
    answer:
      "Zoiko Sema lets you pin data storage and processing to specific regions, so information never leaves the jurisdiction you choose. Every region runs on isolated infrastructure with independent encryption keys and audit logs.",
  },
  {
    question: "Can we build custom connectors for our proprietary legacy systems?",
    answer:
      "Yes. The Universal Connector Engine ships with an SDK for building custom adapters against any REST, SOAP, or database-backed system, complete with schema mapping and conflict-resolution hooks.",
  },
  {
    question: "What are the rate limits for the Enterprise plan?",
    answer:
      "Enterprise plans start at 500k API calls per month with configurable burst limits, and can be scaled further on request to match your peak traffic patterns.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white px-6 py-24 md:px-16">
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-heading {
          opacity: 0;
          animation: faqFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .faq-item {
          opacity: 0;
          animation: faqFadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .faq-item:nth-child(1) { animation-delay: 0.1s; }
        .faq-item:nth-child(2) { animation-delay: 0.18s; }
        .faq-item:nth-child(3) { animation-delay: 0.26s; }
        @media (prefers-reduced-motion: reduce) {
          .faq-heading, .faq-item {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-3xl">
        <h2 className="faq-heading text-center text-3xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="faq-item group rounded-xl border border-slate-200 px-6 py-1 open:bg-slate-50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-slate-900 marker:content-none">
                <span>{question}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-slate-500">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
