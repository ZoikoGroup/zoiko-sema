"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiGrid,
  FiTarget,
  FiStar,
  FiClock,
  FiShare2,
  FiFileText,
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

type Control = {
  icon: IconType;
  title: string;
  description: string;
};

const CONTROLS: Control[] = [
  {
    icon: FiGrid,
    title: "Role-based access",
    description:
      "Admins control who can view portfolio signals, source meetings, audit trails, and team views.",
  },
  {
    icon: FiTarget,
    title: "Workspace scope",
    description:
      "Enable Workforce Truth by workspace, department, project, or customer environment where supported.",
  },
  {
    icon: FiStar,
    title: "AI summary review",
    description:
      "AI-generated summaries and tasks carry reviewed / unreviewed states before audit reliance.",
  },
  {
    icon: FiClock,
    title: "Retention",
    description:
      "Retention for summaries, tasks, evidence, and audit events follows workspace/admin settings.",
  },
  {
    icon: FiShare2,
    title: "External sharing",
    description:
      "External sharing of work records follows workspace permissions and customer policy.",
  },
  {
    icon: FiFileText,
    title: "Audit logs",
    description:
      "Enterprise audit events show source, actor, time, change, and affected object where supported.",
  },
];

export function GovernanceControlsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes gcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gc-hidden  { opacity: 0; transform: translateY(28px); }
        .gc-visible { animation: gcFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .gc-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .gc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(79,91,213,0.14);
          border-color: rgba(79,91,213,0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .gc-hidden, .gc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .gc-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Governance and controls"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`gc-hidden ${eyebrowIn ? "gc-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Governance &amp; controls
            </p>

            <h2
              ref={headRef}
              className={`gc-hidden ${headIn ? "gc-visible" : ""} mb-4 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Admin-governed by design
            </h2>

            <p
              ref={subRef}
              className={`gc-hidden ${subIn ? "gc-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Roles, scope, review states, retention, sharing, and audit logs —
              configured by admins, with advanced controls on Enterprise.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CONTROLS.map((control, i) => {
              const Icon = control.icon;
              return (
                <div
                  key={control.title}
                  className={`gc-card gc-hidden ${gridIn ? "gc-visible" : ""} rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 text-[15px] font-semibold text-gray-900 dark:text-white">
                    {control.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {control.description}
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

export default GovernanceControlsSection;