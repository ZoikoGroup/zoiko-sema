import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Zoiko Sema handle student data privacy?",
    answer:
      "Zoiko Sema is built with privacy-first principles, ensuring student data is encrypted both in transit and at rest. Role-based access controls, secure authentication, audit logs, and compliance-ready data management help educational institutions protect sensitive information while meeting privacy and regulatory requirements.",
  },
  {
    question: "Can we integrate our existing LMS with Zoiko Sema?",
    answer:
      "Yes. Zoiko Sema integrates seamlessly with leading Learning Management Systems through secure APIs and standard integration protocols. Whether you're using Canvas, Moodle, Blackboard, Google Classroom, or a custom LMS, our platform enables smooth synchronization of users, courses, and learning data.",
  },
  {
    question: "What are the AI governance policy controls?",
    answer:
      "Zoiko Sema provides comprehensive AI governance controls, including role-based permissions, policy enforcement, model approval workflows, audit trails, content moderation, and configurable compliance rules. These controls ensure AI is deployed responsibly, transparently, and in alignment with your organization's governance and regulatory requirements.",
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
