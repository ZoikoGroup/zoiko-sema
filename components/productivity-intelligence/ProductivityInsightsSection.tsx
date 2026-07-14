"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiCheckCircle,
  FiGitBranch,
  FiShield,
  FiTrendingUp,
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

type Insight = {
  icon: IconType;
  title: string;
  description: string;
};

const INSIGHTS: Insight[] = [
  {
    icon: FiCheckCircle,
    title: "See follow-through",
    description:
      "Know which commitments have owners, dates, review states, and work records.",
  },
  {
    icon: FiGitBranch,
    title: "Find blockers",
    description:
      "Group recurring blockers by project, client, workflow, or dependency.",
  },
  {
    icon: FiShield,
    title: "Protect trust",
    description:
      "Keep insight access permissioned, aggregate, reviewable, and source-linked.",
  },
  {
    icon: FiTrendingUp,
    title: "Improve execution",
    description:
      "Adjust operating rhythm, meeting quality, project flow, and handoffs.",
  },
];

export default function ProductivityInsightsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes piFadeUp {
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .pi-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .pi-visible{
          animation:piFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pi-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .pi-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.28);
          box-shadow:0 18px 40px rgba(79,91,213,.12);
        }

        .pi-icon{
          transition:transform .3s ease;
        }

        .pi-card:hover .pi-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){
          .pi-hidden,
          .pi-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .pi-card:hover{
            transform:none;
          }
        }
      `}</style>

      <section className="bg-white py-20 dark:bg-[#0D0B24] sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={eyebrowRef}
              className={`pi-hidden ${
                eyebrowIn ? "pi-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              WHAT THIS HELPS LEADERS UNDERSTAND
            </p>

            <h2
              ref={headingRef}
              style={{ animationDelay: ".08s" }}
              className={`pi-hidden ${
                headingIn ? "pi-visible" : ""
              } text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-tight text-[#172046] dark:text-white`}
            >
              Outcome-led insight,
              <span className="block">
                not activity tracking
              </span>
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`pi-hidden ${
                subIn ? "pi-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Four things Productivity Intelligence makes clear — at an
              aggregate, permissioned, source-linked level.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {INSIGHTS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`pi-card pi-hidden ${
                    cardsIn ? "pi-visible" : ""
                  } rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                >
                  <div className="pi-icon mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF] dark:bg-[#4F5BD5]/15">
                    <Icon
                      className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]"
                    />
                  </div>

                  <h3 className="mb-3 text-[17px] font-semibold text-[#172046] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {item.description}
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