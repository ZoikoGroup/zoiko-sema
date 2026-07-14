"use client";

import { FileText, LayoutGrid, Code2, EyeOff, Star, Clock, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual evidence pack image path, e.g. "/Images/compliance-audit-export.webp"
const EXPORT_IMAGE_SRC = "/Images/compliance-audit-export.webp";

interface ExportCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const cards: ExportCard[] = [
  {
    icon: FileText,
    title: "PDF evidence pack",
    description: "Executive summary, records, source references, review history, and export metadata.",
    tag: "Authorized role",
  },
  {
    icon: LayoutGrid,
    title: "CSV export",
    description: "Structured export for compliance or operations analysis.",
    tag: "Filtered · logged",
  },
  {
    icon: Code2,
    title: "API export",
    description: "Optional integration output for enterprise systems.",
    tag: "Plan-gated",
  },
  {
    icon: EyeOff,
    title: "Redaction options",
    description: "Remove restricted fields or sensitive meeting details where permitted.",
    tag: "Admin policy",
  },
  {
    icon: Star,
    title: "Export watermark",
    description: "Optional label with date, time, and requester.",
    tag: "Visible in PDF",
  },
  {
    icon: Clock,
    title: "Export audit log",
    description: "Records who exported, what filters were used, and when.",
    tag: "Always logged",
  },
];

export default function ComplianceAuditExportPacksSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caExportUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-export-hidden { opacity: 0; transform: translateY(20px); }
        .ca-export-visible { animation: caExportUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caExportStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-export-card {
          opacity: 0;
          animation: caExportStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease, border-color .22s ease;
        }
        .ca-export-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(0,0,0,0.5);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(124,140,248,0.35);
        }

        @keyframes caExportImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ca-export-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .ca-export-img-visible { animation: caExportImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }
        .ca-export-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ca-export-img-wrap:hover { transform: translateY(-6px); }

        @media (prefers-reduced-motion: reduce) {
          .ca-export-hidden, .ca-export-img-hidden { opacity: 1 !important; transform: none !important; }
          .ca-export-visible, .ca-export-img-visible { animation: none !important; }
          .ca-export-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-export-hidden ${headIn ? "ca-export-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Export packs & evidence reports
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Permissioned evidence, on demand
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Authorized teams generate evidence packages for internal
              reviews — with metadata, redaction, and export logs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div
              ref={gridRef}
              className={`ca-export-hidden ${gridIn ? "ca-export-visible" : ""} grid grid-cols-1 gap-4 text-left sm:grid-cols-2`}
            >
              {cards.map(({ icon: Icon, title, description, tag }, i) => (
                <div
                  key={title}
                  className="ca-export-card rounded-2xl border border-white/10 bg-white/3 p-5"
                  style={{ animationDelay: `${i * 0.07}s` }}
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

            <div
              ref={imgRef}
              className={`ca-export-img-hidden ${imgIn ? "ca-export-img-visible" : ""} ca-export-img-wrap overflow-hidden rounded-2xl`}
            >
              <img
                src={EXPORT_IMAGE_SRC}
                alt="Permissioned audit evidence pack export graphic"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
