"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

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

const USE_CASES = [
  {
    label: "COO / OPERATIONS LEADER",
    title: "Operations rhythm",
    description:
      "Spot repeated blockers, decision delays, and handoff gaps across teams.",
    action: "Request operations demo",
  },
  {
    label: "PROJECT LEADER",
    title: "Project execution",
    description:
      "Understand project health from meetings, commitments, decisions, and action ownership.",
    action: "See project flow",
  },
  {
    label: "CLIENT SERVICES LEADER",
    title: "Client follow-through",
    description:
      "Connect client meetings to follow-ups, owners, and delivery signals.",
    action: "View client workflow",
  },
  {
    label: "COMPLIANCE TEAM",
    title: "Regulated workflows",
    description:
      "Keep insights reviewable, exportable, and source-linked for audit readiness.",
    action: "View compliance workflow",
  },
  {
    label: "PEOPLE / WORKPLACE LEADER",
    title: "Distributed teams",
    description:
      "Identify collaboration friction and meeting-load patterns at an aggregate level.",
    action: "Explore team patterns",
  },
  {
    label: "EXECUTIVE SPONSOR",
    title: "Executive reporting",
    description:
      "Generate reviewed insight packs from verified work signals.",
    action: "Request executive demo",
  },
];

export default function EnterpriseUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes euFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .eu-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .eu-visible{
          animation:euFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .eu-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .eu-card:hover{
          transform:translateY(-8px);
          border-color:rgba(79,91,213,.28);
          box-shadow:0 18px 40px rgba(79,91,213,.12);
        }

        .eu-arrow{
          transition:transform .3s ease;
        }

        .eu-card:hover .eu-arrow{
          transform:translateX(5px);
        }

        @media(prefers-reduced-motion:reduce){
          .eu-hidden,
          .eu-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .eu-card:hover{
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
              className={`eu-hidden ${
                badgeIn ? "eu-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Enterprise Use Cases
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`eu-hidden ${
                titleIn ? "eu-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Insight for how enterprises actually run
            </h2>

          </div>

          {/* Cards */}

          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {USE_CASES.map((item, index) => (
              <div
                key={item.title}
                style={{
                  animationDelay: `${0.15 + index * 0.08}s`,
                }}
                className={`eu-card eu-hidden ${
                  gridIn ? "eu-visible" : ""
                } flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4F5BD5] dark:text-[#7C86F0]">
                  {item.label}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-[#172046] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] dark:text-[#7C86F0]"
                >
                  {item.action}
                  <FiArrowRight className="eu-arrow h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}