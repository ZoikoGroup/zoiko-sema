"use client";

import { MessageCircle, ShieldCheck, BarChart3, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface Pillar {
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
  tags: string[];
  barColor: string;
  iconBg: string;
  iconColor: string;
}

const pillars: Pillar[] = [
  {
    icon: MessageCircle,
    title: "Communication context",
    label: "From Zoiko Sema",
    description:
      "Sema captures meeting, message, channel, summary, decision, and follow-up context — the source of truth for what was agreed.",
    tags: ["Meetings", "Summaries", "Decisions", "Follow-ups"],
    barColor: "bg-indigo-500",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified work",
    label: "From ZoikoTime",
    description:
      "ZoikoTime attaches owners, work markers, status, approvals, and source-linked evidence — so outcomes are reviewable, not assumed.",
    tags: ["Owners", "Source links", "Approvals", "Evidence"],
    barColor: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Productivity intelligence",
    label: "For leaders",
    description:
      "Admins and leaders see patterns, capacity, follow-up health, and execution confidence — aggregated and role-filtered, never intrusive.",
    tags: ["Capacity", "Follow-up health", "Trends"],
    barColor: "bg-teal-500",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export default function SemaZoikoTimeIntegratedValueSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztValueUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-value-hidden { opacity: 0; transform: translateY(20px); }
        .szt-value-visible { animation: sztValueUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztValueStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-value-card {
          opacity: 0;
          animation: sztValueStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(15,15,40,0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .szt-value-hidden { opacity: 1 !important; transform: none !important; }
          .szt-value-visible { animation: none !important; }
          .szt-value-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-value-hidden ${headIn ? "szt-value-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Integrated value
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Conversations become work. Work becomes accountable.
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Three pillars: Sema captures the communication context, ZoikoTime
              verifies the work, and leaders get calm productivity intelligence.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-value-hidden ${gridIn ? "szt-value-visible" : ""} mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3`}
          >
            {pillars.map(({ icon: Icon, title, label, description, tags, barColor, iconBg, iconColor }, i) => (
              <div
                key={title}
                className="szt-value-card overflow-hidden rounded-2xl bg-white shadow-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`h-1.5 w-full ${barColor}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900">{title}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#4F63F0]">
                    {label}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#5B627E]">
                    {description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F3F2FD] px-2.5 py-1 text-[11px] font-medium text-[#4F63F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
