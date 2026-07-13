"use client";

import { Shield, Lock, BarChart3, CheckSquare, Code2, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: TrustCard[] = [
  {
    icon: Shield,
    title: "Verified work signals",
    description: "Tied to meetings, decisions, and assigned outcomes.",
  },
  {
    icon: Lock,
    title: "Role-based visibility",
    description: "Admin-governed access with clear permission boundaries.",
  },
  {
    icon: BarChart3,
    title: "Aggregated intelligence",
    description: "Based on work outcomes and source-linked signals.",
  },
  {
    icon: CheckSquare,
    title: "Human review of AI",
    description: "Summaries and work conversion are reviewed and confirmed.",
  },
  {
    icon: Code2,
    title: "Transparent workflows",
    description: "User-visible source and history links close the loop.",
  },
];

export default function SemaZoikoTimeTrustDesignSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztTrustDesignUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-trustd-hidden { opacity: 0; transform: translateY(20px); }
        .szt-trustd-visible { animation: sztTrustDesignUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztTrustDesignStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-trustd-card {
          opacity: 0;
          animation: sztTrustDesignStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-trustd-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .szt-trustd-hidden { opacity: 1 !important; transform: none !important; }
          .szt-trustd-visible { animation: none !important; }
          .szt-trustd-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-trustd-hidden ${headIn ? "szt-trustd-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Workforce truth without surveillance
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Trust-led by design
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              ZoikoTime verifies outcomes and follow-through — it is not employee
              monitoring. No spying, no minute-by-minute activity exposure, no
              hidden tracking.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-trustd-hidden ${gridIn ? "szt-trustd-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-5`}
          >
            {cards.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="szt-trustd-card rounded-2xl bg-white p-6 shadow-sm"
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
