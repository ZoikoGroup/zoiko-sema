"use client";

import { Video, CheckSquare, AlertTriangle, RefreshCw, Download, LucideIcon } from "lucide-react";
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
    icon: Video,
    title: "Capture",
    description: "Meeting, summary, decision, action item, or follow-up source is identified.",
    tag: "Source · timestamp · permissions",
  },
  {
    number: "02",
    icon: CheckSquare,
    title: "Review",
    description: "Authorized owner checks accuracy, owner, due date, wording, and sensitivity.",
    tag: "Draft · needs review · reviewed",
  },
  {
    number: "03",
    icon: AlertTriangle,
    title: "Resolve",
    description: "Exceptions queue for missing owner, dispute, duplicate, missing source, or failed sync.",
    tag: "Exception · owner · note",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Sync",
    description: "Approved record moves into ZoikoTime as a work record or productivity signal.",
    tag: "Review-before-sync · plan gate",
  },
  {
    number: "05",
    icon: Download,
    title: "Export",
    description: "Authorized admin or reviewer creates a permissioned evidence pack.",
    tag: "Format · range · access log",
  },
];

export default function ComplianceAuditWorkflowSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caStepUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-step-hidden { opacity: 0; transform: translateY(20px); }
        .ca-step-visible { animation: caStepUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caStepStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-step-item {
          opacity: 0;
          animation: caStepStagger .5s ease forwards;
        }
        .ca-step-icon {
          transition: transform .22s ease, background-color .22s ease;
        }
        .ca-step-item:hover .ca-step-icon {
          transform: translateY(-3px) scale(1.05);
          background-color: #2A2F6B;
        }

        @media (prefers-reduced-motion: reduce) {
          .ca-step-hidden { opacity: 1 !important; transform: none !important; }
          .ca-step-visible { animation: none !important; }
          .ca-step-item { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-step-hidden ${headIn ? "ca-step-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Meeting-to-work audit workflow
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Capture, review, resolve, sync, export
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Meeting events become reviewed work evidence — without the
              platform judging people or productivity.
            </p>
          </div>

          <div
            ref={rowRef}
            className={`ca-step-hidden ${rowIn ? "ca-step-visible" : ""} mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5`}
          >
            {steps.map(({ number, icon: Icon, title, description, tag }, i) => (
              <div key={title} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-white/15 lg:block" />
                )}
                <div
                  className="ca-step-item flex flex-col items-center text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="ca-step-icon relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1B2059] text-[#8FA3FF]">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <p className="mt-3 text-[11px] font-bold text-[#8FA3FF]">{number}</p>
                  <h3 className="mt-1 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#9CA0C4]">
                    {description}
                  </p>
                  <span className="mt-3 rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-medium text-[#AEB7CC]">
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
