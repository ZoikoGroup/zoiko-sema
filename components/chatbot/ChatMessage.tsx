"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CheckCircle2 } from "lucide-react";
import type { ChatTurn } from "@/lib/semaGuideApi";

interface AnswerAction {
  label: string;
  href: string;
}

// Wireframe 2.2 "Action row": max two, deterministic, contextual to the
// reply's own content — kept simple and content-matched rather than
// AI-chosen, so the destination is always a real, known route (never
// invented by the model itself).
function actionsForContent(content: string): AnswerAction[] {
  const lower = content.toLowerCase();
  const actions: AnswerAction[] = [];
  if (lower.includes("plan") || lower.includes("pricing")) {
    actions.push({ label: "Compare plans", href: "/pricing" });
  }
  if (lower.includes("demo") || lower.includes("sales") || lower.includes("enterprise")) {
    actions.push({ label: "Talk to sales", href: "/contact-sales" });
  }
  if (actions.length < 2 && lower.includes("start")) {
    actions.push({ label: "Get started", href: "/pricing" });
  }
  return actions.slice(0, 2);
}

export default function ChatMessage({ turn, verified, sources }: {
  turn: ChatTurn;
  verified?: boolean;
  sources?: { label: string; title: string }[];
}) {
  if (turn.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#3F63F2] px-4 py-2.5 text-[14px] leading-relaxed text-white">
          {turn.content}
        </div>
      </div>
    );
  }

  const actions = verified ? actionsForContent(turn.content) : [];
  const source = sources?.[0];

  return (
    <div className="flex max-w-[90%] flex-col gap-1.5 self-start">
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#5B4CE6] to-[#3F63F2] text-white">
          <span className="text-[11px] font-bold">S</span>
        </span>
        <span className="text-[11px] text-[#6B7280]">Sema Guide</span>
      </div>

      <div className="min-w-0 rounded-2xl rounded-tl-sm border border-[#E5E8F0] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#111827] break-words">
        <div className="sg-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{turn.content}</ReactMarkdown>
        </div>
      </div>

      {verified && source && (
        <div className="flex items-center gap-1.5 px-1 text-[11px] text-[#6B7280]">
          <span>Source: {source.title || source.label}</span>
        </div>
      )}

      {verified && (
        <div className="flex items-center gap-1.5 px-1">
          <CheckCircle2 className="h-[14px] w-[14px] text-emerald-500" />
          <span className="text-[11px] font-medium text-emerald-500">Verified</span>
        </div>
      )}

      {actions.length > 0 && (
        <div className="flex flex-wrap gap-2 px-1 pt-0.5">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="rounded-lg border border-[#3F63F2] px-3 py-1.5 text-[12.5px] font-semibold text-[#3F63F2] transition hover:bg-[#3F63F2] hover:text-white"
            >
              {a.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
