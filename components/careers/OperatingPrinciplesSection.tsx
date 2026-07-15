"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiAlignLeft,
  FiShield,
  FiCpu,
  FiGrid,
  FiUsers,
  FiFileText,
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

type Principle = {
  icon: IconType;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: FiAlignLeft,
    title: "Clarity over noise",
    description:
      "Teams document decisions, owners, and next steps clearly.",
  },
  {
    icon: FiShield,
    title: "Secure by default",
    description:
      "Communication, files, AI summaries, and admin controls respect access boundaries.",
  },
  {
    icon: FiCpu,
    title: "AI with review",
    description:
      "AI is useful when it is visible, explainable, and reviewable — never unaccountable.",
  },
  {
    icon: FiGrid,
    title: "Product craft",
    description:
      "Design and engineering prioritize usability, performance, and adoption.",
  },
  {
    icon: FiUsers,
    title: "Customer empathy",
    description:
      "Choices make enterprise collaboration easier and safer.",
  },
  {
    icon: FiFileText,
    title: "Ownership & docs",
    description:
      "Teams write clearly, track decisions, and reduce context loss.",
  },
];

export default function OperatingPrinciplesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes opFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .op-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .op-visible{
          animation:opFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .op-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .op-card:hover{
          transform:translateY(-8px);
          border-color:rgba(79,91,213,.30);
          box-shadow:0 20px 45px rgba(79,91,213,.12);
        }

        .op-icon{
          transition:transform .3s ease;
        }

        .op-card:hover .op-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){

          .op-hidden,
          .op-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .op-card:hover{
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
              className={`op-hidden ${
                badgeIn ? "op-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              How We Work
            </p>

            <h2
              ref={headingRef}
              style={{ animationDelay: ".08s" }}
              className={`op-hidden ${
                headingIn ? "op-visible" : ""
              } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Operating principles
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`op-hidden ${
                subIn ? "op-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              How teams collaborate, document, and build — the expectations
              that make the work credible.
            </p>

          </div>
          {/* Principles Grid */}

          <div
            ref={cardsRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`op-card op-hidden ${
                    cardsIn ? "op-visible" : ""
                  } flex h-full flex-col rounded-2xl border border-[#E8E9F7] bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                >
                  {/* Icon */}

                  <div className="op-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                    <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-[18px] font-semibold leading-tight text-[#172046] dark:text-white">
                    {principle.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {principle.description}
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