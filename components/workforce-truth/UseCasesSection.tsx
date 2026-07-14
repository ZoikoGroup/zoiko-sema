"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiPhone,
  FiStar,
  FiCheckSquare,
  FiGlobe,
  FiMenu,
  FiShield,
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

type UseCase = {
  icon: IconType;
  color: string; // icon tile background
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

const USE_CASES: UseCase[] = [
  {
    icon: FiPhone,
    color: "#2F6BEB",
    title: "Client Call Follow-Up",
    description:
      "Ensure every client commitment has an owner, due date, evidence, and follow-through status.",
    linkLabel: "View Client Call Follow-Up",
    href: "#",
  },
  {
    icon: FiStar,
    color: "#5D5AE6",
    title: "Meeting to Summary",
    description:
      "Turn meeting content into summaries, decisions, questions, risks, and tasks.",
    linkLabel: "View Meeting to Summary",
    href: "#",
  },
  {
    icon: FiCheckSquare,
    color: "#1FA463",
    title: "Team Decision Tracking",
    description: "Link decisions to owners, changes, and evidence trails.",
    linkLabel: "View Decision Tracking",
    href: "#",
  },
  {
    icon: FiGlobe,
    color: "#0E9E8E",
    title: "Remote Coordination",
    description:
      "Help distributed teams see what changed and what needs action — without more meetings.",
    linkLabel: "View Remote Coordination",
    href: "#",
  },
  {
    icon: FiMenu,
    color: "#7B4DE0",
    title: "Project Collaboration",
    description:
      "Connect meetings, spaces, files, tasks, and approvals in one evidence chain.",
    linkLabel: "View Project Collaboration",
    href: "#",
  },
  {
    icon: FiShield,
    color: "#C17A1A",
    title: "Regulated Workflows",
    description:
      "Support reviewable, permissioned, audit-ready collaboration records.",
    linkLabel: "View Regulated Workflows",
    href: "#",
  },
];

export function UseCasesSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .uc-hidden  { opacity: 0; transform: translateY(28px); }
        .uc-visible { animation: ucFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .uc-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
        }
        .uc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(16,24,40,0.12);
        }
        .uc-arrow { transition: transform .25s ease; }
        .uc-link:hover .uc-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .uc-hidden, .uc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .uc-card:hover { transform: none !important; }
          .uc-link:hover .uc-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases — where Workforce Truth pays off"
        className="w-full bg-[#F5F5FB] py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`uc-hidden ${eyebrowIn ? "uc-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Use cases
            </p>

            <h2
              ref={headRef}
              className={`uc-hidden ${headIn ? "uc-visible" : ""} mb-4 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Where Workforce Truth pays off
            </h2>

            <p
              ref={subRef}
              className={`uc-hidden ${subIn ? "uc-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Connect verified work records to the workflows enterprise teams run
              every day.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {USE_CASES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`uc-card uc-hidden ${gridIn ? "uc-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mb-2 text-[15px] font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-5 text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="uc-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4F5BD5] dark:text-[#8C95F2]"
                  >
                    {item.linkLabel}
                    <FiArrowRight className="uc-arrow h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default UseCasesSection;