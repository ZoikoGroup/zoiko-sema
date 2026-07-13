"use client";

import { Clock, BarChart3, FileText, List, Phone, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface Row {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const rows: Row[] = [
  {
    icon: Clock,
    title: "Work timeline",
    description: "Approved meeting outcome, task, decision, or follow-up.",
    tag: "Owner + permission",
  },
  {
    icon: BarChart3,
    title: "Productivity intelligence",
    description: "Aggregated collaboration context and verified signals.",
    tag: "Privacy-safe",
  },
  {
    icon: FileText,
    title: "Compliance / audit",
    description: "Decision log, source link, reviewer, timestamp, status.",
    tag: "Audit + retention",
  },
  {
    icon: List,
    title: "Project / workspace",
    description: "Linked action items, owners, due dates, risks, files.",
    tag: "Workspace role",
  },
  {
    icon: Phone,
    title: "CRM / client follow-up",
    description: "Reviewed call recap and follow-up draft metadata.",
    tag: "Review-before-send",
  },
];

export default function VerifiedCollaborationZoikoTimeIntegrationSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: rowsRef, inView: rowsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcZtUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-zt-hidden { opacity: 0; transform: translateY(20px); }
        .vc-zt-visible { animation: vcZtUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcZtStagger {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-zt-row {
          opacity: 0;
          animation: vcZtStagger .45s ease forwards;
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .vc-zt-row:hover {
          transform: translateX(4px);
          background-color: #F3F2FD;
          border-color: rgba(79,99,240,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-zt-hidden { opacity: 1 !important; transform: none !important; }
          .vc-zt-visible { animation: none !important; }
          .vc-zt-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`vc-zt-hidden ${copyIn ? "vc-zt-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              ZoikoTime integration
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              Approved records become work context
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Once reviewed and verified, a record can sync to ZoikoTime and
              connected workflows — always through configured integrations and
              role permissions.
            </p>
          </div>

          <div ref={rowsRef} className={`vc-zt-hidden ${rowsIn ? "vc-zt-visible" : ""} flex flex-col gap-3`}>
            {rows.map(({ icon: Icon, title, description, tag }, i) => (
              <div
                key={title}
                className="vc-zt-row flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-[#F7F7FC] px-4 py-3.5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-semibold text-gray-900">
                      {title}
                    </span>
                    <span className="block text-[12px] leading-snug text-gray-500">
                      {description}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 rounded-full border border-[#4F63F0]/30 px-2.5 py-1 text-[10.5px] font-semibold text-[#4F63F0]">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
