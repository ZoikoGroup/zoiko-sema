"use client";

import { Video, CheckSquare, List, Clock, Shield, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface EvidenceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const cards: EvidenceCard[] = [
  {
    icon: Video,
    title: "Source meeting",
    description: "Title, date, participants, recap, files, decisions.",
    tag: "Permitted participants",
  },
  {
    icon: CheckSquare,
    title: "Decision log",
    description: "Decision text, owner, timestamp, source, approval.",
    tag: "By project role",
  },
  {
    icon: List,
    title: "Work item",
    description: "Owner, due date, status, and acceptance history.",
    tag: "Assignee & managers",
  },
  {
    icon: Clock,
    title: "Time / work signal",
    description: "Verified work connected to the source, with status.",
    tag: "Role-scoped",
  },
  {
    icon: Shield,
    title: "Audit view",
    description: "Source → decision → work, exportable where permitted.",
    tag: "Auditor / admin",
  },
];

export default function SemaZoikoTimeEvidenceMapSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztEvidenceUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-evidence-hidden { opacity: 0; transform: translateY(20px); }
        .szt-evidence-visible { animation: sztEvidenceUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztEvidenceStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-evidence-card {
          opacity: 0;
          animation: sztEvidenceStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease, border-color .22s ease;
        }
        .szt-evidence-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(0,0,0,0.5);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(124,140,248,0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .szt-evidence-hidden { opacity: 1 !important; transform: none !important; }
          .szt-evidence-visible { animation: none !important; }
          .szt-evidence-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-evidence-hidden ${headIn ? "szt-evidence-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Verified collaboration
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Every outcome traces back to its source
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              An evidence map links the source meeting, decision log, work item,
              time signal, and audit view — each with role-based visibility.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-evidence-hidden ${gridIn ? "szt-evidence-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-5`}
          >
            {cards.map(({ icon: Icon, title, description, tag }, i) => (
              <div
                key={title}
                className="szt-evidence-card rounded-2xl border border-white/10 bg-white/3 p-5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F63F0]/20 text-[#8FA3FF]">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#9CA0C4]">
                  {description}
                </p>
                <span className="mt-3 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-[#AEB7CC]">
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
