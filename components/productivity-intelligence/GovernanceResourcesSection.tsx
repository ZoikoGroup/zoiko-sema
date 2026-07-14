"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiLock,
  FiThumbsUp,
  FiShield,
  FiCheckSquare,
  FiMonitor,
  FiEye,
  FiAlertCircle,
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

type Resource = {
  icon: IconType;
  title: string;
  description: string;
  action: string;
};

const RESOURCES: Resource[] = [
  {
    icon: FiLock,
    title: "Privacy & Data",
    description:
      "Data categories, privacy requests, and data handling.",
    action: "View Privacy & Data",
  },
  {
    icon: FiThumbsUp,
    title: "Responsible AI",
    description:
      "AI summary, action-item, and decision capture governance.",
    action: "Read Responsible AI",
  },
  {
    icon: FiShield,
    title: "Security Center",
    description:
      "Security posture and enterprise review routes.",
    action: "Visit Security Center",
  },
  {
    icon: FiCheckSquare,
    title: "Compliance",
    description:
      "Broader trust and control evidence.",
    action: "View Compliance",
  },
  {
    icon: FiMonitor,
    title: "Subprocessors",
    description:
      "Supports procurement and data-processing review.",
    action: "View Subprocessors",
  },
  {
    icon: FiEye,
    title: "Accessibility",
    description:
      "Accessible meeting and work-record workflows.",
    action: "View Accessibility",
  },
  {
    icon: FiAlertCircle,
    title: "Report a Concern",
    description:
      "Routes concerns about security, privacy, abuse, AI, or accessibility.",
    action: "Report a Concern",
  },
  {
    icon: FiFileText,
    title: "Data Processing Addendum",
    description:
      "Supports enterprise contract and privacy review.",
    action: "View DPA",
  },
];

export default function GovernanceResourcesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes grFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .gr-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .gr-visible{
          animation:grFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gr-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .gr-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.25);
          box-shadow:0 20px 45px rgba(79,91,213,.10);
        }

        .gr-icon{
          transition:transform .3s ease;
        }

        .gr-card:hover .gr-icon{
          transform:scale(1.08);
        }

        .gr-arrow{
          transition:transform .25s ease;
        }

        .gr-card:hover .gr-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){
          .gr-hidden,
          .gr-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .gr-card:hover{
            transform:none;
          }
        }
      `}</style>

      <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`gr-hidden ${
                badgeIn ? "gr-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Trust, Security & Compliance
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`gr-hidden ${
                titleIn ? "gr-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Validate the governance
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`gr-hidden ${
                subIn ? "gr-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Route deeper review to the official trust resources —
              privacy-safe by design.
            </p>

          </div>

          {/* Cards */}

          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {RESOURCES.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`gr-card gr-hidden ${
                    gridIn ? "gr-visible" : ""
                  } flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#151233]`}
                >
                  <div className="gr-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                    <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold text-[#172046] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] dark:text-[#8A94F8]"
                  >
                    {item.action}
                    <FiArrowRight className="gr-arrow h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}