"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiEye, FiClipboard } from "react-icons/fi";
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

type Column = {
  icon: IconType;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const COLUMNS: Column[] = [
  {
    icon: FiEye,
    badge: "Supervision",
    title: "Advanced Supervision",
    description:
      "Proactively detect risk with AI-assisted review queues and detailed audit timelines.",
    image: "/financial-services/supervision.jpg",
    alt: "Communication supervision dashboard with review queue and approval history",
  },
  {
    icon: FiClipboard,
    badge: "Compliance",
    title: "Records & Retention",
    description:
      "SEC 17a-4 and FINRA compliant archiving with guaranteed preservation timelines.",
    image: "/financial-services/compliance.jpg",
    alt: "Records and retention dashboard with archive health and preservation timeline",
  },
];

export function SupervisionRetentionSection() {
  const { ref: gridRef, inView: gridIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes srFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sr-hidden  { opacity: 0; transform: translateY(28px); }
        .sr-visible { animation: srFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .sr-image { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
        .sr-frame:hover .sr-image { transform: translateY(-4px); box-shadow: 0 20px 44px rgba(16,24,40,0.18); }

        @media (prefers-reduced-motion: reduce) {
          .sr-hidden, .sr-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sr-frame:hover .sr-image { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Advanced supervision and records retention"
        className="w-full bg-white py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div
          ref={gridRef}
          className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14"
        >
          {COLUMNS.map((col, i) => {
            const Icon = col.icon;
            const base = i * 0.12; 
            return (
              <div key={col.title}>
                {/* Badge */}
                <span
                  className={`sr-hidden ${gridIn ? "sr-visible" : ""} mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#F3F3F8] px-3 py-1.5 text-[12px] font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300`}
                  style={{ animationDelay: `${base}s` }}
                >
                  <Icon className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                  {col.badge}
                </span>

                {/* Heading */}
                <h2
                  className={`sr-hidden ${gridIn ? "sr-visible" : ""} mb-3 text-[clamp(22px,3vw,28px)] font-bold tracking-tight text-gray-900 dark:text-white`}
                  style={{ animationDelay: `${base + 0.08}s` }}
                >
                  {col.title}
                </h2>

                {/* Description */}
                <p
                  className={`sr-hidden ${gridIn ? "sr-visible" : ""} mb-6 max-w-[440px] text-[14px] leading-[1.7] text-gray-500 dark:text-gray-400`}
                  style={{ animationDelay: `${base + 0.16}s` }}
                >
                  {col.description}
                </p>

                {/* Image frame — screenshot on a subtle panel (matches the design).
                    If your Figma export already includes the panel, drop the
                    bg/padding and keep just the <img>. */}
                <div
                  className={`sr-frame sr-hidden ${gridIn ? "sr-visible" : ""} rounded-2xl bg-[#EFEFF4] p-3 dark:bg-[#151233] sm:p-4`}
                  style={{ animationDelay: `${base + 0.24}s` }}
                >
                  {/* 👇 replace src with your Figma export (PNG in /public/images/) */}
                  <img
                    src={col.image}
                    alt={col.alt}
                    loading="lazy"
                    className="sr-image w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SupervisionRetentionSection;