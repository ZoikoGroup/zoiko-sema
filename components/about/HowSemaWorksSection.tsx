"use client";
import {
  MessageCircle,
  Video,
  FileText,
  CheckCircle2,
  Clock,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Start a conversation",
    description: "Communicate in messages, channels, or spaces.",
  },
  {
    number: "02",
    icon: Video,
    title: "Move into a meeting",
    description: "Continue the context in audio or video.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Capture a summary",
    description: "AI-assisted recaps reduce manual follow-up work.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Confirm decisions",
    description: "Identify decisions and owners without losing the trail.",
  },
  {
    number: "05",
    icon: Clock,
    title: "Follow up",
    description: "Tasks, files, and updates stay connected to the space.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Govern the workspace",
    description: "Admins manage access, retention, AI usage, and compliance.",
  },
];

export default function HowSemaWorksSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          How Sema works
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          From conversation to action, without losing the trail
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
          A conversation becomes a meeting, a summary, a confirmed decision, and
          an eventual follow-up — all governed by the workspace.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <div key={title} className="flex flex-col items-center">
              {/* Icon + connectors */}
              <div className="flex w-full items-center">
                {/* Left line */}
                <div
                  className={`hidden xl:block h-px flex-1 bg-[#6C63FF]/40 ${
                    index === 0 ? "opacity-0" : ""
                  }`}
                />

                {/* Icon */}
                <div className="mx-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3F1FF] text-[#6C63FF]">
                  <Icon size={17} strokeWidth={2} />
                </div>

                {/* Right line */}
                <div
                  className={`hidden xl:block h-px flex-1 bg-[#6C63FF]/40 ${
                    index === steps.length - 1 ? "opacity-0" : ""
                  }`}
                />
              </div>

              {/* Number */}
              <span className="mt-3 text-xs font-semibold text-[#6C63FF]">
                {number}
              </span>

              {/* Title */}
              <h3 className="mt-1 text-center text-sm font-semibold text-[#111827] sm:text-[15px]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[220px] text-center text-sm leading-6 text-[#6B7280] sm:max-w-[180px] xl:max-w-[150px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
