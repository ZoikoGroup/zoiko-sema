"use client"
import { ArrowRight } from "lucide-react";

interface GlanceCard {
  badge: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  description: string;
  action: string;
}

const cards: GlanceCard[] = [
  {
    badge: "HR",
    badgeBg: "bg-[#F0ECFC]",
    badgeColor: "text-[#6C4FE0]",
    title: "Human review",
    description:
      "AI can summarize, organize, and draft — review accuracy, context, ownership, and sensitivity before relying or sharing.",
    action: "Jump to human review",
  },
  {
    badge: "AG",
    badgeBg: "bg-[#E7F0FE]",
    badgeColor: "text-[#3B7DF0]",
    title: "Admin governance",
    description:
      "Owners and admins configure availability, permissions, sensitive-space rules, retention, and sharing where supported.",
    action: "View Admin Console",
  },
  {
    badge: "DP",
    badgeBg: "bg-[#E1F5EF]",
    badgeColor: "text-[#0F9E7A]",
    title: "Data protection",
    description:
      "AI-related data handling connects to the Privacy Notice, DPA, Security Policy, and subprocessor list.",
    action: "View Privacy & Data",
  },
  {
    badge: "SB",
    badgeBg: "bg-[#FDF1DD]",
    badgeColor: "text-[#F5A623]",
    title: "Safety boundaries",
    description:
      "AI features should not be used for policy-violating, harmful, deceptive, or unauthorized activity.",
    action: "Read AI Use Policy",
  },
];

export default function AiAtAGlanceSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Responsible AI at a glance
        </p>
        <h2 className="text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          AI that assists communication and stays reviewable.
        </h2>
        <p className="mt-4 max-w-160 leading-relaxed text-gray-500">
          Plain-language summary of how Zoiko Sema approaches AI — with deeper terms
          routed to the AI Use Policy, Privacy Notice, Security Policy, and Admin Console.
        </p>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[67%_33%]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map(({ badge, badgeBg, badgeColor, title, description, action }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span
                  className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${badgeBg} ${badgeColor}`}
                >
                  {badge}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
                <button className={`mt-3 flex items-center gap-1 text-xs font-semibold ${badgeColor} hover:text-[#3E51DE]`}>
                  {action}
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img src="/responsive-ai/work.png" alt="image" className="h-110 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
