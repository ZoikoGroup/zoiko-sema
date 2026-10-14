"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { CheckCircle2, Sparkles } from "lucide-react";
import type { ChatTurn } from "@/lib/semaGuideApi";

// Answers often include GFM tables (e.g. plan comparisons) far wider than the
// 420px panel. Unstyled, they stretched the bubble and made the whole
// conversation scroll sideways; each table now scrolls inside its own box.
const markdownComponents: Components = {
  p: ({ children }) => <p className="my-2 first:mt-0 last:mb-0">{children}</p>,
  h1: ({ children }) => <h3 className="mb-1.5 mt-3 text-[15px] font-bold first:mt-0">{children}</h3>,
  h2: ({ children }) => <h3 className="mb-1.5 mt-3 text-[15px] font-bold first:mt-0">{children}</h3>,
  h3: ({ children }) => <h4 className="mb-1 mt-3 text-[14px] font-semibold first:mt-0">{children}</h4>,
  h4: ({ children }) => <h4 className="mb-1 mt-3 text-[14px] font-semibold first:mt-0">{children}</h4>,
  ul: ({ children }) => <ul className="my-2 list-disc space-y-1 pl-5 first:mt-0 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="my-2 list-decimal space-y-1 pl-5 first:mt-0 last:mb-0">{children}</ol>,
  li: ({ children }) => <li className="pl-0.5">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  a: ({ href, children }) => (
    <a href={href} className="font-medium text-[#3F63F2] underline underline-offset-2">{children}</a>
  ),
  code: ({ children }) => <code className="rounded bg-[#F3F4F6] px-1 py-0.5 text-[12.5px]">{children}</code>,
  hr: () => <hr className="my-3 border-[#E5E8F0]" />,
  table: ({ children }) => (
    <div className="my-2 max-w-full overflow-x-auto rounded-lg border border-[#E5E8F0] first:mt-0 last:mb-0">
      <table className="w-full border-collapse text-left text-[12.5px] leading-snug">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#F5F7FC]">{children}</thead>,
  th: ({ children }) => (
    <th className="min-w-[96px] whitespace-nowrap border-b border-[#E5E8F0] px-2.5 py-2 align-bottom font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="min-w-[96px] border-b border-[#E5E8F0] px-2.5 py-2 align-top">{children}</td>
  ),
  tr: ({ children }) => <tr className="last:[&>td]:border-b-0">{children}</tr>,
};

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
    <div className="flex min-w-0 max-w-[90%] flex-col gap-1.5 self-start">
      <div className="flex items-center gap-2">
        {/* Same avatar treatment as the real in-product AiMessage.jsx —
            a Sparkles icon in an accent gradient circle, not a letter. */}
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#5B4CE6] to-[#3F63F2] text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="text-[11px] text-[#6B7280]">Sema Guide</span>
      </div>

      <div className="min-w-0 rounded-2xl rounded-tl-sm border border-[#E5E8F0] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#111827] break-words">
        <div className="sg-markdown min-w-0">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{turn.content}</ReactMarkdown>
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
