import { ChevronDown } from "lucide-react";
import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does Zoiko Sema handle agency access?",
      answer:
        "Zoiko Sema enables secure agency access through role-based permissions, allowing administrators to assign granular access levels for different teams and external partners. This ensures agencies can collaborate efficiently while maintaining strict control over sensitive data and workflows.",
    },
    {
      question: "Can we integrate our existing CRM and CMS?",
      answer:
        "Yes. Zoiko Sema integrates with popular CRM and CMS platforms through secure APIs, making it easy to synchronize customer data, content, and workflows. Custom integrations are also supported for proprietary systems to fit your organization's unique requirements.",
    },
    {
      question: "What is ZoikoTime?",
      answer:
        "ZoikoTime is Zoiko Sema's intelligent scheduling and time management solution that helps organizations streamline appointments, meetings, resource allocation, and team coordination. It automates scheduling workflows, reduces conflicts, and improves operational efficiency with real-time availability and smart reminders.",
    },
  ];
  return (
    <section className="bg-white px-6 py-20 animate-fade-up-faq">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpFAQ { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up-faq { animation: fadeUpFAQ 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `,
        }}
      />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0F172A] mb-12">
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
