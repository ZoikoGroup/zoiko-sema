"use client";

import { Video, Star, CheckSquare, User, RefreshCw, Download, Check, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface TimelineItem {
  icon: LucideIcon;
  title: string;
  description: string;
  proof: string;
  iconBg: string;
}

const items: TimelineItem[] = [
  {
    icon: Video,
    title: "Meeting record",
    description: "Title, date, participants, workspace, transcript availability (where permitted).",
    proof: "Proves context & origin",
    iconBg: "bg-indigo-500",
  },
  {
    icon: Star,
    title: "AI summary",
    description: "Summary version, generated time, editor, review status.",
    proof: "Structured recap after human review",
    iconBg: "bg-indigo-500",
  },
  {
    icon: CheckSquare,
    title: "Decision log",
    description: "Decision text, owner, approver, time, source meeting/space.",
    proof: "Shows who confirmed what",
    iconBg: "bg-emerald-500",
  },
  {
    icon: User,
    title: "Action item",
    description: "Task text, owner, due date, status, source, reassignment history.",
    proof: "Shows follow-through accountability",
    iconBg: "bg-amber-500",
  },
  {
    icon: RefreshCw,
    title: "ZoikoTime sync record",
    description: "Sync status, reviewer, workspace, project, retention rule.",
    proof: "Shows approved movement into work record",
    iconBg: "bg-indigo-500",
  },
  {
    icon: Download,
    title: "Export metadata",
    description: "Requester, time, format, filters, redaction, download event.",
    proof: "Shows controlled evidence sharing",
    iconBg: "bg-[#0B1330]",
  },
];

export default function ComplianceAuditEvidenceMapSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caMapUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-map-hidden { opacity: 0; transform: translateY(20px); }
        .ca-map-visible { animation: caMapUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caMapStagger {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-map-item {
          opacity: 0;
          animation: caMapStagger .45s ease forwards;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .ca-map-item:hover {
          transform: translateX(4px);
          box-shadow: 0 12px 24px -12px rgba(15,15,40,0.18);
          border-color: rgba(79,99,240,0.3);
        }
        .ca-map-icon { transition: transform .2s ease; }
        .ca-map-item:hover .ca-map-icon { transform: scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .ca-map-hidden { opacity: 1 !important; transform: none !important; }
          .ca-map-visible { animation: none !important; }
          .ca-map-item { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`ca-map-hidden ${copyIn ? "ca-map-visible" : ""} lg:sticky lg:top-24`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Source-linked evidence map
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              Every record traces to its source
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              No vague dashboards. Each audit record connects to concrete
              source objects — so you can prove what was reviewed, when, by
              whom, and from which source.
            </p>
          </div>

          <div ref={listRef} className={`ca-map-hidden ${listIn ? "ca-map-visible" : ""} relative`}>
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200" />
            <div className="flex flex-col gap-4">
              {items.map(({ icon: Icon, title, description, proof, iconBg }, i) => (
                <div
                  key={title}
                  className="ca-map-item relative flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 pl-4 shadow-sm"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span
                    className={`ca-map-icon relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg} text-white`}
                  >
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                      {description}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1 text-[11.5px] font-semibold text-[#4F63F0]">
                      <Check size={12} strokeWidth={2.5} />
                      {proof}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
