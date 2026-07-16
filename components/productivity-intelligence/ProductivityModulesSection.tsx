"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FiAperture,
  FiCheckCircle,
  FiUsers,
  FiAlertTriangle,
  FiCheckSquare,
  FiFileText,
  FiArrowRight,
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

type Module = {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  action: string;
  iconBg: string;
  href: string;
};

const MODULES: Module[] = [
  {
    icon: FiAperture,
    title: "Work Signal Map",
    subtitle: "See where work signals originate.",
    description:
      "Meetings, summaries, action items, decisions, channels, projects, ZoikoTime records, and integrations.",
    action: "View signal map",
    iconBg: "bg-[#4F5BD5]",
    href: "#",
  },
  {
    icon: FiCheckCircle,
    title: "Follow-Through Health",
    subtitle: "Understand whether commitments progress.",
    description:
      "Owned actions, due dates, blocked status, unresolved decisions, and review status.",
    action: "Explore follow-through",
    iconBg: "bg-[#17A673]",
    href: "#",
  },
  {
    icon: FiUsers,
    title: "Collaboration Patterns",
    subtitle: "Understand coordination—not individual surveillance.",
    description:
      "Aggregate handoffs, meetings, spaces, response friction, and cross-team dependency patterns.",
    action: "View patterns",
    iconBg: "bg-[#5B5CE6]",
    href: "#",
  },
  {
    icon: FiAlertTriangle,
    title: "Blocker Intelligence",
    subtitle: "Find operational friction quickly.",
    description:
      "Recurring blockers, waiting states, missing owners, delayed approvals, and system handoffs.",
    action: "Find blockers",
    iconBg: "bg-[#C48911]",
    href: "#",
  },
  {
    icon: FiCheckSquare,
    title: "Review-Before-Sync",
    subtitle: "Prevent unsafe or premature sharing.",
    description:
      "Human approval before CRM sync, reports, HR review, audit exports, or executive packs.",
    action: "View governance",
    iconBg: "bg-[#0F9D91]",
    href: "#",
  },
  {
    icon: FiFileText,
    title: "Enterprise Export Packs",
    subtitle: "Share insight safely with leaders.",
    description:
      "PDF/CSV/API export states, permissions, retention, audit log, and watermark where required.",
    action: "Request demo",
    iconBg: "bg-[#4F46E5]",
    href: "#",
  },
];

export default function ProductivityModulesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes pmFadeUp {
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .pm-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .pm-visible{
          animation:pmFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pm-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .pm-card:hover{
          transform:translateY(-8px);
          border-color:rgba(79,91,213,.25);
          box-shadow:0 20px 45px rgba(79,91,213,.12);
        }

        .pm-icon{
          transition:transform .3s ease;
        }

        .pm-card:hover .pm-icon{
          transform:scale(1.08);
        }

        .pm-link{
          transition:gap .25s ease,color .25s ease;
        }

        .pm-card:hover .pm-link{
          gap:.55rem;
        }

        @media(prefers-reduced-motion:reduce){
          .pm-hidden,
          .pm-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .pm-card:hover{
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
              className={`pm-hidden ${
                badgeIn ? "pm-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Core Insight Modules
            </p>

            <h2
              ref={headingRef}
              style={{ animationDelay: ".08s" }}
              className={`pm-hidden ${
                headingIn ? "pm-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Six ways to understand the work
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`pm-hidden ${
                subIn ? "pm-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Each module is source-linked and aggregate by default —
              designed for leaders, not for watching individuals.
            </p>

          </div>

          {/* Cards */}

          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {MODULES.map((module, index) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`pm-card pm-hidden ${
                    gridIn ? "pm-visible" : ""
                  } rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                >
                  <div
                    className={`pm-icon flex h-12 w-12 items-center justify-center rounded-xl ${module.iconBg}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#172046] dark:text-white">
                    {module.title}
                  </h3>

                  <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
                    {module.subtitle}
                  </p>

                  <p className="mt-5 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {module.description}
                  </p>
                  <Link href={module.href}>
                  <button
                    type="button"
                    className="pm-link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] dark:text-[#7C86F0]"
                  >
                    {module.action}
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}