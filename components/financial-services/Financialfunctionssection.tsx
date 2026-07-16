"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiBriefcase, FiCreditCard, FiTrendingUp, FiShield } from "react-icons/fi";
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

type Fn = { icon: IconType; title: string; description: string };

const FUNCTIONS: Fn[] = [
  {
    icon: FiBriefcase,
    title: "Wealth Management",
    description: "Empower advisors to use modern channels without compromising compliance.",
  },
  {
    icon: FiCreditCard,
    title: "Private Banking",
    description: "White-labeled secure workspaces for HNW clients and family offices.",
  },
  {
    icon: FiTrendingUp,
    title: "Investment Teams",
    description: "Centralized research and internal decision-making audit trails.",
  },
  {
    icon: FiShield,
    title: "Legal & Compliance",
    description: "Powerful eDiscovery and supervision tools to stay ahead of regulators.",
  },
];

export function FinancialFunctionsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.4);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ffFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ff-hidden  { opacity: 0; transform: translateY(28px); }
        .ff-visible { animation: ffFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ff-card { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease; }
        .ff-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(16,24,40,0.10); border-color: rgba(47,107,235,0.30); }

        @media (prefers-reduced-motion: reduce) {
          .ff-hidden, .ff-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ff-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Built for every financial function"
        className="w-full bg-white py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Heading */}
          <h2
            ref={headRef}
            className={`ff-hidden ${headIn ? "ff-visible" : ""} mb-12 text-center text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 dark:text-white`}
          >
            Built for Every Financial Function
          </h2>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {FUNCTIONS.map((fn, i) => {
              const Icon = fn.icon;
              return (
                <div
                  key={fn.title}
                  className={`ff-card ff-hidden ${gridIn ? "ff-visible" : ""} rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <Icon className="mb-4 h-6 w-6 text-[#2F6BEB] dark:text-[#6B8AF5]" aria-hidden="true" />
                  <h3 className="mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">
                    {fn.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {fn.description}
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

export default FinancialFunctionsSection;