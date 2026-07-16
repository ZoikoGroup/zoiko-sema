"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiUserCheck, FiFileText } from "react-icons/fi";
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

type Feature = { icon: IconType; title: string; description: string };

const FEATURES: Feature[] = [
  {
    icon: FiUserCheck,
    title: "Human-in-the-Loop",
    description: "Mandatory peer or supervisor review for all AI-generated client recaps.",
  },
  {
    icon: FiFileText,
    title: "Audit Persistence",
    description: "Every AI prompt and response is logged with a cryptographic timestamp.",
  },
];

export function AiGovernanceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes aigFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aigFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .aig-hidden   { opacity: 0; transform: translateY(28px); }
        .aig-visible  { animation: aigFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .aig-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .aig-visible-x { animation: aigFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .aig-card { transition: transform .3s ease, border-color .3s ease, background-color .3s ease; }
        .aig-card:hover { transform: translateY(-3px); border-color: rgba(107,138,245,0.45); background-color: rgba(107,138,245,0.06); }

        @media (prefers-reduced-motion: reduce) {
          .aig-hidden, .aig-visible, .aig-hidden-x, .aig-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .aig-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Explainable AI governance"
        className="w-full bg-[#0D0B24] py-10 sm:py-14"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy + feature cards */}
          <div className="max-w-xl">
            <h2
              ref={headRef}
              className={`aig-hidden ${headIn ? "aig-visible" : ""} mb-4 text-[clamp(24px,3.6vw,34px)] font-bold tracking-tight text-white`}
            >
              Explainable AI Governance
            </h2>

            <p
              ref={subRef}
              className={`aig-hidden ${subIn ? "aig-visible" : ""} mb-7 max-w-[440px] text-[14px] leading-[1.75] text-gray-400`}
              style={{ animationDelay: "0.08s" }}
            >
              In an industry where every word matters, our AI Governance layer
              ensures summaries are accurate, traceable, and reviewed by human
              experts before becoming official records.
            </p>

            <div ref={cardsRef} className="flex flex-col gap-4">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`aig-card aig-hidden ${cardsIn ? "aig-visible" : ""} flex items-start gap-4 rounded-xl border border-white/[0.07] bg-[#141430] p-4`}
                    style={{ animationDelay: `${0.12 + i * 0.1}s` }}
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#6B8AF5]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="mb-1 text-[14px] font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] leading-[1.6] text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — draft summary card (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`aig-hidden-x ${imgIn ? "aig-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* replace src with your Figma export (PNG in /public/images/) */}
            <img
              src="/financial-services/draft.png"
              alt="Draft summary card for a client meeting awaiting human review, with Approve and Edit actions"
              loading="lazy"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AiGovernanceSection;