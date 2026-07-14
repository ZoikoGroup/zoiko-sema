"use client"
import { ArrowRight } from "lucide-react";

interface ScopeRow {
  title: string;
  description: string;
  action: string;
}

const rows: ScopeRow[] = [
  {
    title: "AI meeting summaries",
    description:
      "Summaries, highlights, decisions, and follow-ups generated from meetings where enabled.",
    action: "AI Meeting Summaries",
  },
  {
    title: "Action item extraction",
    description:
      "Suggested owners, tasks, due dates, and follow-up workflows — with human confirmation expected.",
    action: "AI Use Policy",
  },
  {
    title: "Decision capture",
    description:
      "Suggested decision records surfaced from meetings, threads, or workspace for review.",
    action: "AI Use Policy",
  },
  {
    title: "Follow-up suggestions",
    description:
      "Suggested next steps, drafted messages, or task prompts — review before send.",
    action: "Help Center",
  },
  {
    title: "AI-assisted search",
    description:
      "AI-supported answers, summaries, or contextual assistance with source-checking guidance.",
    action: "Help Center",
  },
  {
    title: "Workspace automation",
    description:
      "AI-assisted workflow prompts and governance notifications where supported.",
    action: "Admin Console",
  },
  {
    title: "Developer / API AI",
    description: "AI-related integrations or API workflows where applicable.",
    action: "Developer Docs",
  },
];

export default function AiFeatureScopeSection() {
  return (
    <section className="bg-[#F0EFFB] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          AI feature scope
        </p>
        <h2 className="text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          What this page covers.
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {rows.map(({ title, description, action }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                i !== rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <p className="text-sm font-bold text-gray-900 sm:w-1/4">{title}</p>
              <p className="text-xs leading-relaxed text-gray-500 sm:w-1/2">
                {description}
              </p>
              <button className="flex w-fit items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]">
                {action}
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
