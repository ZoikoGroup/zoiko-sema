"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiCheckSquare,
  FiLink2,
  FiGrid,
  FiLock,
  FiDownload,
  FiClock,
} from "react-icons/fi";
import type { IconType } from "react-icons";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type GovernanceCard = {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const GOVERNANCE: GovernanceCard[] = [
  {
    icon: FiCheckSquare,
    title: "Review queue",
    subtitle: "Hold insight packs until an authorized reviewer approves.",
    description:
      "Review packages can be approved, rejected, or returned before sharing.",
    tags: ["Pending", "Approved", "Rejected", "Returned"],
  },
  {
    icon: FiLink2,
    title: "Source-linked evidence",
    subtitle: "Keep every insight tied to meetings, decisions, actions, and work records.",
    description:
      "Every insight remains traceable back to its original collaboration record.",
    tags: ["Source drawer", "Traceable"],
  },
  {
    icon: FiGrid,
    title: "Role-based access",
    subtitle: "Control who can view, approve, export, and sync insights.",
    description:
      "Permission-aware visibility ensures leaders only see appropriate information.",
    tags: ["Admin matrix", "Permissioned"],
  },
  {
    icon: FiLock,
    title: "Privacy boundaries",
    subtitle: "Limit person-level exposure and default to team/project-level aggregation.",
    description:
      "Insights are aggregated by default with privacy-first safeguards.",
    tags: ["Aggregate default", "Privacy-safe"],
  },
  {
    icon: FiDownload,
    title: "Export controls",
    subtitle: "Manage CSV, PDF, API, CRM, HR, and report exports.",
    description:
      "Every export follows governance policies and approval workflows.",
    tags: ["Plan-gated", "Audited"],
  },
  {
    icon: FiClock,
    title: "Retention & audit",
    subtitle: "Track insight generation, review, export, sync, revoke, and deletion.",
    description:
      "Maintain a complete audit trail for governance and compliance.",
    tags: ["Audit timeline", "Admin-visible"],
  },
];

export default function ReviewGovernanceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes rgFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .rg-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .rg-visible{
          animation:rgFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rg-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .rg-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.25);
          box-shadow:0 20px 45px rgba(79,91,213,.10);
        }

        .rg-icon{
          transition:transform .3s ease;
        }

        .rg-card:hover .rg-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){
          .rg-hidden,
          .rg-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .rg-card:hover{
            transform:none;
          }
        }
      `}</style>

      <section className="bg-white py-20 dark:bg-[#0D0B24] sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`rg-hidden ${
                badgeIn ? "rg-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Review-before-sync Governance
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`rg-hidden ${
                titleIn ? "rg-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Insights don't leave without review
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`rg-hidden ${
                subIn ? "rg-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Productivity insights should not automatically become external
              reports, HR records, audit packs, CRM updates, or client
              communications without review and permission.
            </p>

          </div>

          {/* Cards */}

          <div
            ref={cardsRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {GOVERNANCE.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`rg-card rg-hidden ${
                    cardsIn ? "rg-visible" : ""
                  } rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                >
                  <div className="rg-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                    <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#172046] dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {card.subtitle}
                  </p>

                  <p className="mt-5 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {card.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F3F4FA] px-3 py-1 text-[11px] font-medium text-[#5B6078] dark:bg-white/10 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}