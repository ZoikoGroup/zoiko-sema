"use client";

import { Link2, CheckSquare, AlertTriangle, Download, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: ValueCard[] = [
  {
    icon: Link2,
    title: "Source-linked records",
    description:
      "Every audit item points back to a meeting, summary, decision, action item, or ZoikoTime record.",
  },
  {
    icon: CheckSquare,
    title: "Human review before sync",
    description:
      "Work evidence gets stronger when authorized users confirm accuracy, owner, due date, and context.",
  },
  {
    icon: AlertTriangle,
    title: "Exception resolution",
    description:
      "Missing owners, disputed decisions, failed syncs, and incomplete records move to a calm resolution queue.",
  },
  {
    icon: Download,
    title: "Export-ready evidence",
    description:
      "Authorized teams create permissioned PDF, CSV, or API evidence packs — with metadata and access logs.",
  },
];

export default function ComplianceAuditValueSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caValueUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-value-hidden { opacity: 0; transform: translateY(20px); }
        .ca-value-visible { animation: caValueUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caValueStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-value-card {
          opacity: 0;
          animation: caValueStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .ca-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
          border-color: rgba(79,99,240,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .ca-value-hidden { opacity: 1 !important; transform: none !important; }
          .ca-value-visible { animation: none !important; }
          .ca-value-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-value-hidden ${headIn ? "ca-value-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Compliance value
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Audit readiness, built from real work
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Every record points back to its source, is reviewed by a person,
              and can become a permissioned evidence pack.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ca-value-hidden ${gridIn ? "ca-value-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
          >
            {cards.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="ca-value-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
