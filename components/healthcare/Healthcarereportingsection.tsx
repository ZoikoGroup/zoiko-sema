"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiBarChart2, FiArrowUpRight, FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

const CHECKS = [
  "Aggregate handoff completion, escalation, and overdue rates by team and workspace",
  "Access review status: guests, expiring access, exceptions, revocations",
  "AI governance: eligible workspaces, drafts, reviews, corrections, exclusions",
  "Retention and evidence readiness — counts do not imply legal compliance",
];

type Stat = {
  label: string;
  value: string;
  trend: "up" | "down";
  sub: string;
};

const STATS: Stat[] = [
  { label: "Handoffs Completed", value: "94%", trend: "up", sub: "This week · Team aggregate" },
  { label: "Reviews On Time", value: "87%", trend: "up", sub: "Compliance team" },
  { label: "Guest Reviews Due", value: "12", trend: "down", sub: "3 expiring in 48h" },
  { label: "AI Drafts Reviewed", value: "78%", trend: "up", sub: "Of eligible workspaces" },
  { label: "Policy Coverage", value: "96%", trend: "up", sub: "Configured workspaces" },
  { label: "Integration Health", value: "5/6", trend: "down", sub: "1 connector degraded" },
];

export function HealthcareReportingSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView<HTMLUListElement>(0.2);
  const { ref: linkRef, inView: linkIn } = useInView<HTMLButtonElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes hrFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hr-hidden  { opacity: 0; transform: translateY(28px); }
        .hr-visible { animation: hrFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .hr-stat { transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .3s ease; }
        .hr-stat:hover { transform: translateY(-3px); background-color: rgba(47,107,235,0.06); }

        .hr-link-arrow { transition: transform .25s ease; }
        .hr-link:hover .hr-link-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .hr-hidden, .hr-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .hr-stat:hover { transform: none !important; }
          .hr-link:hover .hr-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Workflow health reporting"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-md lg:pt-2">
            <p
              ref={eyebrowRef}
              className={`hr-hidden ${eyebrowIn ? "hr-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Reporting
            </p>
            <h2
              ref={headRef}
              className={`hr-hidden ${headIn ? "hr-visible" : ""} mb-4 text-[clamp(28px,4.2vw,40px)] font-bold leading-[1.12] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Workflow health, not staff surveillance.
            </h2>
            <p
              ref={subRef}
              className={`hr-hidden ${subIn ? "hr-visible" : ""} mb-6 text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Aggregate and team-level reporting on coordination, reviews, access,
              AI governance, retention, and adoption — scoped by workspace and
              role, without individual productivity scoring.
            </p>

            <ul ref={listRef} className="mb-7 flex flex-col gap-3">
              {CHECKS.map((item, i) => (
                <li
                  key={item}
                  className={`hr-hidden ${listIn ? "hr-visible" : ""} flex items-start gap-2.5`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <FiBarChart2
                    className="mt-0.5 h-[16px] w-[16px] flex-shrink-0 text-[#2F6BEB] dark:text-[#6B8AF5]"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] leading-[1.5] text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="#" >
            <button
              ref={linkRef}
              type="button"
              className={`hr-hidden hr-link ${linkIn ? "hr-visible" : ""} inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2F6BEB] dark:text-[#6B8AF5]`}
              style={{ animationDelay: "0.5s" }}
            >
              See reporting
              <FiArrowRight className="hr-link-arrow h-4 w-4" aria-hidden="true" />
            </button>
            </Link>
          </div>

          {/* RIGHT — 2x3 stat cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {STATS.map((stat, i) => {
              const up = stat.trend === "up";
              const TrendIcon = up ? FiArrowUpRight : FiArrowDownRight;
              const trendColor = up
                ? "text-[#16A34A] dark:text-[#4ADE80]"
                : "text-[#D97706] dark:text-[#FBBF24]";
              return (
                <div
                  key={stat.label}
                  className={`hr-stat hr-hidden ${gridIn ? "hr-visible" : ""} rounded-xl bg-[#F5F6FA] p-5 dark:bg-[#151233]`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <p className="mb-2 text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <span className="text-[26px] font-bold leading-none text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                    <TrendIcon className={`h-4 w-4 ${trendColor}`} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">
                    {stat.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareReportingSection;