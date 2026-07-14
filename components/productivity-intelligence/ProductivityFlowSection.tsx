"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiVideo,
  FiLink2,
  FiBarChart2,
  FiCheckSquare,
  FiZap,
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

type Step = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Capture",
    description:
      "Permitted meeting, action, decision, note, channel, and ZoikoTime signals.",
    icon: FiVideo,
  },
  {
    number: "02",
    title: "Verify",
    description:
      "Tie signals to owners, source records, summaries, decisions, and review state.",
    icon: FiLink2,
  },
  {
    number: "03",
    title: "Aggregate",
    description:
      "Convert records into team/project-level trends without unnecessary person-level details.",
    icon: FiBarChart2,
  },
  {
    number: "04",
    title: "Review",
    description:
      "Authorized users review context before exporting, syncing, or reporting.",
    icon: FiCheckSquare,
  },
  {
    number: "05",
    title: "Act",
    description:
      "Remove blockers, improve meetings, reassign work, or update cadence.",
    icon: FiZap,
  },
];

export default function ProductivityFlowSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: flowRef, inView: flowIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes piFadeUp{
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

        .pi-step{
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .pi-step:hover{
          transform:translateY(-6px);
        }

        .pi-icon{
          transition:
            transform .3s ease,
            background .3s ease;
        }

        .pi-step:hover .pi-icon{
          transform:scale(1.08);
          background:#4F5BD5;
        }

        .pi-step:hover .pi-icon svg{
          color:white;
        }

        @media(prefers-reduced-motion:reduce){
          .pi-hidden,
          .pi-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .pi-step:hover{
            transform:none;
          }
        }
      `}</style>

      <section className="bg-[#0D0B24] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`pi-hidden ${
                badgeIn ? "pi-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Meeting-to-work-to-insight flow
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`pi-hidden ${
                titleIn ? "pi-visible" : ""
              } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-white`}
            >
              Intelligence that starts at the source
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`pi-hidden ${
                subIn ? "pi-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-400`}
            >
              Work insight begins with source meetings and collaboration
              records — not disconnected timesheets or manual status reports.
            </p>
          </div>

          <div
            ref={flowRef}
            className="relative mt-16"
          >
            {/* Desktop connecting line */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#4F5BD5]/40 lg:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    style={{
                      animationDelay: `${0.15 + index * 0.08}s`,
                    }}
                    className={`pi-step pi-hidden ${
                      flowIn ? "pi-visible" : ""
                    } relative text-center`}
                  >
                    <div className="pi-icon mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[#4F5BD5]/40 bg-[#16143A]">
                      <Icon
                        className="h-5 w-5 text-[#7C86F0]"
                      />
                    </div>

                    <p className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-[#7C86F0]">
                      {step.number}
                    </p>

                    <h3 className="mt-1 text-[17px] font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[180px] text-[13px] leading-6 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
} 