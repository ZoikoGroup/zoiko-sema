"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiTrendingDown,
  FiShield,
  FiUsers,
  FiRefreshCcw,
  FiCheckSquare,
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

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Reduce follow-up drift",
    description:
      "Start the right actions from meetings, messages, forms, tasks, and connectors.",
  },
  {
    title: "Protect judgment",
    description:
      "Pause for review or approval when policy or risk requires a person.",
  },
  {
    title: "Connect with responsibility",
    description:
      "Use approved connectors and data mappings with clear authorization.",
  },
  {
    title: "Recover visibility",
    description:
      "See who did what, what's waiting, when it failed, and drop in to fix it.",
  },
  {
    title: "Audit governance",
    description:
      "Use roles, schedules, user gates, audit, and retention controls.",
  },
];

export default function WorkflowAutomationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.25);
  const { ref: textRef, inView: textIn } = useInView(0.25);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes wfFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes wfFadeScale{
          from{
            opacity:0;
            transform:scale(.96);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .wf-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .wf-visible{
          animation:wfFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .wf-hidden-img{
          opacity:0;
          transform:scale(.96);
        }

        .wf-visible-img{
          animation:wfFadeScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .wf-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .wf-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.18);
        }

        .wf-card{
          transition:
            transform .3s ease,
            border-color .3s ease;
        }

        .wf-card:hover{
          transform:translateY(-5px);
        }

        .wf-icon{
          transition:transform .3s ease;
        }

        .wf-card:hover .wf-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){

          .wf-hidden,
          .wf-hidden-img,
          .wf-visible,
          .wf-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

        }

      `}</style>

      <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">

            <p
              ref={badgeRef}
              className={`wf-hidden ${
                badgeIn ? "wf-visible" : ""
              } mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              No More Ungoverned Workflows
            </p>

            <h2
              ref={headingRef}
              style={{ animationDelay: ".08s" }}
              className={`wf-hidden ${
                headingIn ? "wf-visible" : ""
              } text-[clamp(30px,5vw,40px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Repeatable work shouldn't depend on
              <br />
              memory and manual chasing.
            </h2>

            <p
              ref={textRef}
              style={{ animationDelay: ".16s" }}
              className={`wf-hidden ${
                textIn ? "wf-visible" : ""
              } mx-auto mt-6 max-w-4xl text-[16px] leading-8 text-gray-500 dark:text-gray-400`}
            >
              Requests, approvals, meeting follow-ups, document reviews,
              onboarding, and cross-team updates often rely on people
              remembering every next step. Workflows turn approved
              patterns into visible, owned, testable automation —
              while keeping exceptions and human judgment in the loop.
            </p>

          </div>
          {/* Workflow Preview Image */}

          <div
            ref={imageRef}
            style={{ animationDelay: ".24s" }}
            className={`wf-hidden-img ${
              imageIn ? "wf-visible-img" : ""
            } mt-16`}
          >
            <div className="overflow-hidden rounded-[24px] border border-[#E7E8F7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#151233]">

              <Image
                src="/workflows/workflow-automation.png"
                alt="Workflow automation preview"
                width={1600}
                height={900}
                priority
                className="wf-image h-auto w-full object-cover"
              />

            </div>
          </div>

          {/* Feature Cards */}

          <div
            ref={cardsRef}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {FEATURES.map((feature, index) => {
              return (
                <div
                  key={feature.title}
                  style={{
                    animationDelay: `${0.3 + index * 0.08}s`,
                  }}
                  className={`wf-card wf-hidden ${
                    cardsIn ? "wf-visible" : ""
                  } flex h-full flex-col rounded-2xl p-2`}
                >

                  {/* Title */}

                  <h3 className="text-[17px] font-semibold leading-tight text-[#172046] dark:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                    {feature.description}
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