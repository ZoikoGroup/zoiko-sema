"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiVideo,
  FiZap,
  FiClock,
  FiFileText,
  FiPhone,
  FiCode,
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

type Integration = {
  icon: IconType;
  title: string;
  description: string;
};

const INTEGRATIONS: Integration[] = [
  {
    icon: FiVideo,
    title: "Zoiko Sema meetings",
    description:
      "Source meetings, captions, and AI summaries — cross-linked to Video Meetings.",
  },
  {
    icon: FiZap,
    title: "Decisions & action items",
    description:
      "Decision logs and owned actions become verified work signals.",
  },
  {
    icon: FiClock,
    title: "ZoikoTime work records",
    description:
      "Verified collaboration and work-time context feed aggregate intelligence.",
  },
  {
    icon: FiFileText,
    title: "Compliance & audit",
    description:
      "Reviewed, source-linked records support permissioned export packs.",
  },
  {
    icon: FiPhone,
    title: "CRM / client systems",
    description:
      "Sync approved client follow-up intelligence where configured — plan-gated.",
  },
  {
    icon: FiCode,
    title: "Enterprise API",
    description:
      "Optional integration output for enterprise systems — developer-controlled.",
  },
];

export default function IntegrationsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes intFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .int-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .int-visible{
          animation:intFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .int-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .int-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.28);
          box-shadow:0 18px 42px rgba(79,91,213,.12);
        }

        .int-icon{
          transition:
            transform .3s ease,
            background-color .3s ease;
        }

        .int-card:hover .int-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){
          .int-hidden,
          .int-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .int-card:hover{
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
              className={`int-hidden ${
                badgeIn ? "int-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Integrations & ZoikoTime Fit
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`int-hidden ${
                titleIn ? "int-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Where the signals come from
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`int-hidden ${
                subIn ? "int-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Productivity Intelligence is built on Zoiko Sema collaboration
              and ZoikoTime work records — connecting to the systems you
              already use.
            </p>

          </div>

          {/* Cards */}

          <div
            ref={cardsRef}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {INTEGRATIONS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{
                    animationDelay: `${0.15 + index * 0.08}s`,
                  }}
                  className={`int-card int-hidden ${
                    cardsIn ? "int-visible" : ""
                  } flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                >
                  <div className="int-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                    <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#172046] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
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