"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiStar,
  FiLock,
  FiCheckSquare,
  FiShield,
  FiMonitor,
  FiEye,
  FiBell,
  FiCheckCircle,
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

type Resource = {
  icon: IconType;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  featured?: boolean;
};

const RESOURCES: Resource[] = [
  {
    icon: FiStar,
    title: "Responsible AI",
    description: "Human review, AI output limitations, and safe use of summaries.",
    linkLabel: "Read Responsible AI",
    href: "#",
  },
  {
    icon: FiLock,
    title: "Privacy & Data",
    description: "Data categories, request routes, and data governance.",
    linkLabel: "Review Privacy & Data",
    href: "#",
  },
  {
    icon: FiCheckSquare,
    title: "Compliance",
    description: "Control mapping and evidence routes.",
    linkLabel: "Review Compliance",
    href: "#",
  },
  {
    icon: FiShield,
    title: "Security Center",
    description: "Security posture and enterprise review paths.",
    linkLabel: "Visit Security Center",
    href: "#",
  },
  {
    icon: FiMonitor,
    title: "Subprocessors",
    description: "Provider categories and update notification routes.",
    linkLabel: "View Subprocessors",
    href: "#",
  },
  {
    icon: FiEye,
    title: "Accessibility",
    description: "Inclusive design, accessibility scope, and barrier reporting.",
    linkLabel: "Read Accessibility",
    href: "#",
  },
  {
    icon: FiBell,
    title: "Report a Concern",
    description:
      "A safe route for privacy, security, AI, accessibility, or misuse concerns.",
    linkLabel: "Report a Concern",
    href: "#",
  },
  {
    icon: FiCheckCircle,
    title: "Trust Center",
    description: "Everything in one place for enterprise review.",
    linkLabel: "Visit Trust Center",
    href: "#",
    featured: true,
  },
];

const TEAL = "#2DD4BF";

export function TrustSecuritySection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ts-hidden  { opacity: 0; transform: translateY(28px); }
        .ts-visible { animation: tsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ts-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .ts-card:hover {
          transform: translateY(-4px);
          border-color: rgba(45,212,191,0.45);
          box-shadow: 0 18px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(45,212,191,0.10);
        }
        .ts-arrow { transition: transform .25s ease; }
        .ts-link:hover .ts-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .ts-hidden, .ts-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ts-card:hover { transform: none !important; }
          .ts-link:hover .ts-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Trust, security and legal"
        className="w-full bg-[#0B0A1F] py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`ts-hidden ${eyebrowIn ? "ts-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em]`}
              style={{ color: TEAL }}
            >
              Trust, Security &amp; Legal
            </p>

            <h2
              ref={headRef}
              className={`ts-hidden ${headIn ? "ts-visible" : ""} mb-4 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Validate before you roll out
            </h2>

            <p
              ref={subRef}
              className={`ts-hidden ${subIn ? "ts-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Route privacy, security, compliance, responsible AI, accessibility,
              and concern reporting to the right resource.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {RESOURCES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`ts-card ts-hidden ${gridIn ? "ts-visible" : ""} flex flex-col rounded-2xl border p-6 ${
                    item.featured
                      ? "border-[#2DD4BF]/40 bg-gradient-to-br from-[#0F2A2C] to-[#12162E]"
                      : "border-white/[0.07] bg-[#14132B]"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(45,212,191,0.12)", color: TEAL }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mb-2 text-[15px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-5 text-[13px] leading-[1.6] text-gray-400">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="ts-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color: TEAL }}
                  >
                    {item.linkLabel}
                    <FiArrowRight className="ts-arrow h-4 w-4" aria-hidden="true" />
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

export default TrustSecuritySection;