"use client";

import { List, CheckSquare, BarChart3, Clock, ShieldCheck, ChevronRight, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface InsightCard {
  icon: LucideIcon;
  title: string;
  quote: string;
  tag: string;
}

const insights: InsightCard[] = [
  {
    icon: List,
    title: "Meeting-to-work conversion",
    quote: "Are meetings becoming clear tasks and outcomes?",
    tag: "Aggregate & role-filtered",
  },
  {
    icon: CheckSquare,
    title: "Follow-up health",
    quote: "Are follow-ups completed, delayed, or blocked?",
    tag: "No unnecessary personal exposure",
  },
  {
    icon: BarChart3,
    title: "Capacity signal",
    quote: "Where are teams overloaded or stalled?",
    tag: "Trends, not intrusive monitoring",
  },
  {
    icon: Clock,
    title: "Decision velocity",
    quote: "How long do decisions take to become action?",
    tag: "Source-linked & auditable",
  },
  {
    icon: ShieldCheck,
    title: "Audit readiness",
    quote: "Can we prove who owned what and why?",
    tag: "Permission controlled",
  },
];

export default function SemaZoikoTimeInsightsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztInsightUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-insight-hidden { opacity: 0; transform: translateY(20px); }
        .szt-insight-visible { animation: sztInsightUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztInsightStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-insight-card {
          opacity: 0;
          animation: sztInsightStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-insight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }

        .szt-insight-cta {
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-insight-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 36px -14px rgba(0,0,0,0.35);
        }
        .szt-insight-cta-btn {
          background: #4F63F0;
          transition: transform .2s ease, background .2s ease;
        }
        .szt-insight-cta-btn:hover { transform: translateY(-2px); background: #3E51DE; }

        @media (prefers-reduced-motion: reduce) {
          .szt-insight-hidden { opacity: 1 !important; transform: none !important; }
          .szt-insight-visible { animation: none !important; }
          .szt-insight-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-insight-hidden ${headIn ? "szt-insight-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Productivity intelligence
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Insight for leaders, privacy for people
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Enterprise insights that improve workflows — aggregated and
              role-filtered, without exposing unnecessary individual detail.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-insight-hidden ${gridIn ? "szt-insight-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {insights.map(({ icon: Icon, title, quote, tag }, i) => (
              <div
                key={title}
                className="szt-insight-card rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] italic leading-relaxed text-gray-500">
                    &ldquo;{quote}&rdquo;
                </p>
                <span className="mt-4 inline-flex items-center rounded-full bg-[#F3F2FD] px-2.5 py-1 text-[10.5px] font-medium text-[#4F63F0]">
                  {tag}
                </span>
              </div>
            ))}

            <div
              className="szt-insight-card szt-insight-cta flex flex-col justify-between rounded-2xl bg-[#0B1330] p-6"
              style={{ animationDelay: `${insights.length * 0.08}s` }}
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#8FA3FF]">
                  <ChevronRight size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-white">See it on your data</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#AEB7CC]">
                  Request a demo to explore role-filtered dashboards.
                </p>
              </div>
              <a
                href="#request-demo"
                className="szt-insight-cta-btn mt-5 inline-flex w-fit items-center justify-center rounded-lg px-4 py-2.5 text-xs font-semibold text-white"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
