"use client";

import { MessageCircle, Star, ListChecks, CheckCircle2, LineChart, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Communicate",
    description: "Messages, spaces, meetings, and calls in Zoiko Sema.",
    tag: "Source captured",
  },
  {
    number: "02",
    icon: Star,
    title: "Summarize",
    description: "AI recaps, key points, decisions, and action items.",
    tag: "Review required",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Assign",
    description: "Owner, due date, priority, and follow-up confirmation.",
    tag: "Owner accepts",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Verify",
    description: "Work session, status, and source link become a signal.",
    tag: "Verified · linked",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Analyze",
    description: "Trends, follow-up completion, and conversion.",
    tag: "Role-filtered",
  },
];

export default function SemaZoikoTimeWorkflowStepsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztStepUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-step-hidden { opacity: 0; transform: translateY(20px); }
        .szt-step-visible { animation: sztStepUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztStepStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-step-item {
          opacity: 0;
          animation: sztStepStagger .5s ease forwards;
        }
        .szt-step-icon {
          transition: transform .22s ease, background-color .22s ease;
        }
        .szt-step-item:hover .szt-step-icon {
          transform: translateY(-3px) scale(1.05);
          background-color: #E0DDFB;
        }

        @media (prefers-reduced-motion: reduce) {
          .szt-step-hidden { opacity: 1 !important; transform: none !important; }
          .szt-step-visible { animation: none !important; }
          .szt-step-item { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-step-hidden ${headIn ? "szt-step-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Meeting-to-work workflow
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              From conversation to verified work in five steps
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Communicate, summarize, assign, verify, analyze — each step carries
              source context forward.
            </p>
          </div>

          <div
            ref={rowRef}
            className={`szt-step-hidden ${rowIn ? "szt-step-visible" : ""} mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5`}
          >
            {steps.map(({ number, icon: Icon, title, description, tag }, i) => (
              <div key={title} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-[#DCD9F7] lg:block" />
                )}
                <div
                  className="szt-step-item flex flex-col items-center text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="szt-step-icon relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <p className="mt-3 text-[11px] font-bold text-[#4F63F0]">{number}</p>
                  <h3 className="mt-1 text-sm font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#5B627E]">
                    {description}
                  </p>
                  <span className="mt-3 rounded-full bg-[#F3F2FD] px-2.5 py-1 text-[10.5px] font-medium text-[#4F63F0]">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
