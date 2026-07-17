"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

type Card = { title: string; description: string };

const LEFT_CARDS: Card[] = [
  {
    title: "Health Systems & Hospitals",
    description:
      "Standardize shift handoffs, incident coordination, and cross-unit committee workflows at scale.",
  },
  {
    title: "Privacy & Compliance Leaders",
    description:
      "Configure purpose-limited access, retention, audit records, and export evidence paths.",
  },
];

const RIGHT_CARDS: Card[] = [
  {
    title: "Payers & Health-Tech Teams",
    description:
      "Coordinate authorization reviews, vendor access, and operational incident response in governed workspaces.",
  },
  {
    title: "Care Operations Teams",
    description:
      "Run handoffs, track open actions, escalate blockers, and close workflows with verifiable completion evidence.",
  },
];

function TeamCard({
  card,
  show,
  delay,
}: {
  card: Card;
  show: boolean;
  delay: number;
}) {
  return (
    <div
      className={`hf-hidden ${show ? "hf-visible" : ""} rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
      style={{ animationDelay: `${delay}s` }}
    >
      <FiCheckCircle
        className="mb-3 h-5 w-5 text-[#2F6BEB] dark:text-[#6B8AF5]"
        aria-hidden="true"
      />
      <h3 className="mb-2 text-[15px] font-semibold text-gray-900 dark:text-white">
        {card.title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
        {card.description}
      </p>
    </div>
  );
}

export function HealthcareTeamsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes hfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hfRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hf-hidden  { opacity: 0; transform: translateY(28px); }
        .hf-visible { animation: hfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hf-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .hf-visible-r { animation: hfRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .hf-hidden, .hf-visible, .hf-hidden-r, .hf-visible-r {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Built for healthcare operations teams"
        className="w-full bg-[#F5F6FB] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`hf-hidden ${eyebrowIn ? "hf-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Healthcare fit
            </p>
            <h2
              ref={headRef}
              className={`hf-hidden ${headIn ? "hf-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Built for healthcare operations teams.
            </h2>
            <p
              ref={subRef}
              className={`hf-hidden ${subIn ? "hf-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              From health systems to care networks — Sema supports the people who
              coordinate sensitive operational work, not diagnosis, not clinical
              records.
            </p>
          </div>

          {/* 3-column band: cards | image | cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          >
            {/* LEFT cards */}
            <div className="flex flex-col gap-6">
              {LEFT_CARDS.map((card, i) => (
                <TeamCard
                  key={card.title}
                  card={card}
                  show={gridIn}
                  delay={0.1 + i * 0.1}
                />
              ))}
            </div>

            {/* CENTER image */}
            <div
              className={`hf-hidden-r ${gridIn ? "hf-visible-r" : ""} min-h-[360px] overflow-hidden rounded-2xl lg:min-h-0`}
              style={{ animationDelay: "0.15s" }}
            >
              {/* 👇 replace src with your Figma export (PNG in /public/images/) */}
              <img
                src="/healthcare/healthcare-fit.png"
                alt="A care team collaborating, with a clinician joining by video call on a phone"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT cards */}
            <div className="flex flex-col gap-6">
              {RIGHT_CARDS.map((card, i) => (
                <TeamCard
                  key={card.title}
                  card={card}
                  show={gridIn}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareTeamsSection;