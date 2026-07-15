"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiGrid,
  FiCode,
  FiShield,
  FiStar,
  FiBell,
  FiBriefcase,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Reusable scroll-in-view hook (same pattern as the other sections)
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type Team = {
  icon: IconType;
  color: string;
  title: string;
  description: string;
  roles: string[];
};

const TEAMS: Team[] = [
  {
    icon: FiGrid,
    color: "#5D5AE6",
    title: "Product & Design",
    description: "Shape usable, secure, enterprise-ready communication experiences.",
    roles: ["PM", "Product Designer", "UX Writer", "Design Systems"],
  },
  {
    icon: FiCode,
    color: "#0E9E8E",
    title: "Engineering",
    description:
      "Build reliable messaging, meetings, AI workflows, integrations, and admin systems.",
    roles: ["Front-End", "Backend", "QA", "DevOps"],
  },
  {
    icon: FiShield,
    color: "#4F5BD5",
    title: "Security & Governance",
    description: "Define trust, permissions, policy controls, auditability, and confidence.",
    roles: ["Security Eng", "Compliance", "Governance PM"],
  },
  {
    icon: FiStar,
    color: "#7B4DE0",
    title: "AI & Meeting Intelligence",
    description: "Improve summaries, decisions, action items, and human-review workflows.",
    roles: ["AI Product Eng", "ML Quality", "Conversation Intel"],
  },
  {
    icon: FiBell,
    color: "#1FA463",
    title: "Customer Success & Support",
    description:
      "Help customers adopt Sema, resolve issues, and build repeatable success paths.",
    roles: ["CSM", "Support Specialist", "Implementation Lead"],
  },
  {
    icon: FiBriefcase,
    color: "#C17A1A",
    title: "Sales & Partnerships",
    description: "Help organizations understand, evaluate, and adopt Zoiko Sema.",
    roles: ["Account Exec", "Partnerships", "Solutions Consultant"],
  },
  {
    icon: FiSettings,
    color: "#2B2A45",
    title: "Operations & People",
    description: "Support hiring, documentation, process, and internal collaboration.",
    roles: ["People Ops", "Recruiting", "Operations", "PM"],
  },
];

export function WorkAreasSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes waFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wa-hidden  { opacity: 0; transform: translateY(28px); }
        .wa-visible { animation: waFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .wa-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .wa-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(16,24,40,0.12);
          border-color: rgba(79,91,213,0.30);
        }
        .wa-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 48px rgba(79,91,213,0.45);
        }
        .wa-arrow { transition: transform .25s ease; }
        .wa-feature:hover .wa-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .wa-hidden, .wa-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wa-card:hover, .wa-feature:hover { transform: none !important; }
          .wa-feature:hover .wa-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Teams and work areas"
        className="w-full bg-[#F5F5FB] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`wa-hidden ${eyebrowIn ? "wa-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Teams &amp; work areas
            </p>
            <h2
              ref={headRef}
              className={`wa-hidden ${headIn ? "wa-visible" : ""} mb-4 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Where you could contribute
            </h2>
            <p
              ref={subRef}
              className={`wa-hidden ${subIn ? "wa-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Areas across the company where candidates help build and support
              Zoiko Sema. Role types shown are illustrative placeholders.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TEAMS.map((team, i) => {
              const Icon = team.icon;
              return (
                <div
                  key={team.title}
                  className={`wa-card wa-hidden ${gridIn ? "wa-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ backgroundColor: team.color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 text-[15px] font-semibold text-gray-900 dark:text-white">
                    {team.title}
                  </h3>
                  <p className="mb-4 text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {team.description}
                  </p>
                  <p className="mt-auto text-[12px] leading-[1.5] text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-[#4F5BD5] dark:text-[#8C95F2]">
                      Roles:{" "}
                    </span>
                    {team.roles.join(" · ")}
                  </p>
                </div>
              );
            })}

            {/* Featured — Browse all roles */}
            <a
              href="#"
              className={`wa-feature wa-hidden ${gridIn ? "wa-visible" : ""} flex flex-col rounded-2xl bg-[#4F5BD5] p-6 text-white transition-[transform,box-shadow]`}
              style={{ animationDelay: `${0.1 + TEAMS.length * 0.06}s` }}
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FiArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-[15px] font-semibold text-white">
                Browse all roles
              </h3>
              <p className="mb-4 text-[13px] leading-[1.6] text-white/80">
                Jump to the open roles board and filter by team, location, and
                type.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
                View roles
                <FiArrowRight className="wa-arrow h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkAreasSection;