"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Zoiko Sema Team Collaboration?",
    answer:
      "A governed workspace that brings messaging, meetings, decisions, files, tasks, and reviewed AI follow-up into one place, with role-based access and audit visibility built in.",
  },
  {
    question: "How does Zoiko Sema help teams collaborate?",
    answer:
      "Persistent channels, pinned decisions, and owned tasks keep every team member aligned without constant meetings, while search and history preserve context across the workspace.",
  },
  {
    question: "Can Zoiko Sema support remote and hybrid teams?",
    answer:
      "Yes. Messaging, meetings, and shared documents work the same whether your team is co-located, remote, or hybrid, with the same governance applied everywhere.",
  },
  {
    question: "Can we collaborate securely with clients and partners?",
    answer:
      "Yes. Guest scope with expiry and review lets you invite external collaborators into a channel or project without exposing the rest of your workspace.",
  },
  {
    question: "How does AI support collaboration?",
    answer:
      "AI may suggest summaries, drafts, or next steps, but a person always confirms the decision — nothing is silently finalized on your behalf.",
  },
  {
    question: "Does Zoiko Sema monitor or score employees?",
    answer:
      "No. Analytics and adoption reporting focus on workspace health and adoption milestones, not individual content surveillance or scoring.",
  },
  {
    question: "Is Team Collaboration suitable for enterprise deployment?",
    answer:
      "Yes. Role-based access, policy inheritance, retention rules, and audit-ready history are designed to meet enterprise governance and compliance requirements.",
  },
  {
    question: "What can Zoiko Sema integrate with?",
    answer:
      "Identity providers like Okta and Azure AD, calendars, cloud storage like Google Drive and SharePoint, and workflow tools like Jira and Asana — plus open APIs and webhooks.",
  },
];

export default function QuestionsAnswered() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E9FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Questions answered.
            </h2>
          </div>

          <div className="fade-up mt-12 border-t border-[#ECECF4]" style={{ animationDelay: ".1s" }}>
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div key={faq.question} className="border-b border-[#ECECF4]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-[15px] font-semibold text-[#1F2937]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#6B7280] transition-transform duration-300 ${
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
                      <p className="pb-6 text-[15px] leading-7 text-[#6B7280]">
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
