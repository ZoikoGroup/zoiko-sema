"use client";

import { CalendarDays, Building2, KanbanSquare, Users, KeyRound, Settings2, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface IntegrationCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const cards: IntegrationCard[] = [
  {
    icon: CalendarDays,
    title: "Calendar & meetings",
    desc: "Connect meeting sources for meeting-to-work continuity.",
  },
  {
    icon: Building2,
    title: "CRM",
    desc: "Lead, opportunity, and account mapping for revenue teams.",
  },
  {
    icon: KanbanSquare,
    title: "Project & PM tools",
    desc: "Action items become owned, tracked work in your tools.",
  },
  {
    icon: Users,
    title: "HRIS",
    desc: "Team structure and roles for governed, team-level insight.",
  },
  {
    icon: KeyRound,
    title: "SSO & identity",
    desc: "SAML/SSO, roles, and permissions for secure deployment.",
  },
  {
    icon: Settings2,
    title: "Admin governance",
    desc: "Retention, privacy controls, plan gates, and audit routing.",
  },
];

export default function ZTRDIntegrationSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztrdIntFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-int-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-int-visible { animation: ztrdIntFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-int-card {
          transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s ease, border-color .2s ease;
        }
        .ztrd-int-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px -16px rgba(15,15,42,0.16);
        }
        .ztrd-int-icon { transition: transform .2s ease; }
        .ztrd-int-card:hover .ztrd-int-icon { transform: scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-int-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-int-visible { animation: none !important; }
          .ztrd-int-card:hover { transform: none !important; }
        }
      `}</style>

      <section className="bg-[#F7F7FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div ref={headRef} className={`ztrd-int-hidden ${headIn ? "ztrd-int-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Integration & rollout planning
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              We map your systems before the demo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Tell us your stack and we&apos;ll show exactly how ZoikoTime
              fits your governance model.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ztrd-int-hidden ${gridIn ? "ztrd-int-visible" : ""} mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2`}
            style={{ animationDelay: "0.08s" }}
          >
            {cards.map((card) => (
              <div key={card.title} className="ztrd-int-card flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                <span className="ztrd-int-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDEBFB]">
                  <card.icon size={19} strokeWidth={2} color="#4F63F0" />
                </span>
                <div>
                  <h3 className="mb-1 text-[15px] font-bold text-gray-900">{card.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}