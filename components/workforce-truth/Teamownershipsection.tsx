"use client";

import { useEffect, useRef, useState } from "react";
import { FiLink2, FiEdit, FiAlertTriangle, FiEye } from "react-icons/fi";
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

type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: FiLink2,
    title: "Source context",
    description:
      "Every task shows why it exists — linked summary, decision, thread, and files.",
  },
  {
    icon: FiEdit,
    title: "Review & correct",
    description:
      "Fix an inaccurate summary, owner, or due date — with an audit record.",
  },
  {
    icon: FiAlertTriangle,
    title: "Blocker update",
    description:
      "Escalate risk without blame — reason, assistance needed, impacted timeline.",
  },
  {
    icon: FiEye,
    title: "Privacy & visibility",
    description:
      "A visibility chip explains who can see each record and why — governed by role.",
  },
];

export function TeamOwnershipSection() {
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes toFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toFadeLeft {
          from { opacity: 0; transform: translateX(-36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .to-hidden   { opacity: 0; transform: translateY(28px); }
        .to-visible  { animation: toFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .to-hidden-x  { opacity: 0; transform: translateX(-36px) translateY(12px); }
        .to-visible-x { animation: toFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards; }

        .to-image {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .to-image:hover {
          transform: translateY(-6px);
          box-shadow: 0 34px 70px rgba(16,24,40,0.28);
        }

        .to-row .to-icon {
          transition: border-color .3s ease, background-color .3s ease, color .3s ease;
        }
        .to-row:hover .to-icon {
          border-color: rgba(79,91,213,0.45);
          background-color: rgba(79,91,213,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .to-hidden, .to-visible, .to-hidden-x, .to-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .to-image:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Team experience — clear ownership"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`to-hidden-x ${imgIn ? "to-visible-x" : ""} order-1 w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* 👇 replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/workforcetruth/team-ownership.png"
              alt="A team member reviewing their work dashboard in Zoiko Sema, showing commitments, follow-through, and an escalation queue"
              loading="lazy"
              className="to-image w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>

          {/* RIGHT — copy + feature list */}
          <div className="order-2 max-w-xl">
            <p
              ref={eyebrowRef}
              className={`to-hidden ${eyebrowIn ? "to-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Team experience
            </p>

            <h2
              ref={headRef}
              className={`to-hidden ${headIn ? "to-visible" : ""} mb-8 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Clear ownership, without feeling watched
            </h2>

            <div ref={listRef} className="flex flex-col gap-6">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`to-row to-hidden ${listIn ? "to-visible" : ""} flex items-start gap-4`}
                    style={{ animationDelay: `${0.12 + i * 0.1}s` }}
                  >
                    <span className="to-icon mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#4F5BD5] dark:border-white/10 dark:bg-[#151233] dark:text-[#8C95F2]">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="mb-1 text-[15px] font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
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

export default TeamOwnershipSection;