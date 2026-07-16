"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiShare2, FiArchive, FiUsers, FiEye, FiCopy, FiShield } from "react-icons/fi";
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

type Challenge = {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const CHALLENGES: Challenge[] = [
  {
    icon: FiShare2,
    title: "Off-channel Control",
    description: "Centralize fragmented messaging apps into a single, supervised ecosystem.",
    image: "/financial-services/challenge1.png",
    alt: "Team collaborating on a unified, supervised messaging workspace",
  },
  {
    icon: FiArchive,
    title: "Immutable Retention",
    description: "WORM-compliant storage for every interaction, meeting, and file shared.",
    image: "/financial-services/challenge2.png",
    alt: "Secure, tamper-proof records storage visualization",
  },
  {
    icon: FiUsers,
    title: "Secure Collaboration",
    description: "Frictionless guest access with enterprise-grade permission boundaries.",
    image: "/financial-services/challenge3.png",
    alt: "Guests joining a secure video collaboration with permission controls",
  },
  {
    icon: FiEye,
    title: "Real-time Supervision",
    description: "Automated lexicons and flags to capture policy violations instantly.",
    image: "/financial-services/challenge4.png",
    alt: "Supervision dashboard flagging policy violations in real time",
  },
  {
    icon: FiCopy,
    title: "AI Governance",
    description: "Traceable AI summaries with mandatory human-in-the-loop review.",
    image: "/financial-services/challenge5.png",
    alt: "Reviewer approving traceable AI summaries with human oversight",
  },
  {
    icon: FiShield,
    title: "Verified Approvals",
    description: "Multi-factor authorization for sensitive financial workflow approvals.",
    image: "/financial-services/challenge6.png",
    alt: "Multi-factor approval flow for financial workflows",
  },
];

export function FinancialChallengesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes fchFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fch-hidden  { opacity: 0; transform: translateY(28px); }
        .fch-visible { animation: fchFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .fch-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .fch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(16,24,40,0.12);
          border-color: rgba(47,107,235,0.30);
        }

        @media (prefers-reduced-motion: reduce) {
          .fch-hidden, .fch-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .fch-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Solve complex financial challenges"
        className="w-full bg-white py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2
              ref={headRef}
              className={`fch-hidden ${headIn ? "fch-visible" : ""} mb-4 text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              Solve Complex Financial Challenges
            </h2>
            <p
              ref={subRef}
              className={`fch-hidden ${subIn ? "fch-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.08s" }}
            >
              Eliminate friction between client engagement and strict regulatory
              compliance with unified governance.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CHALLENGES.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`fch-card fch-hidden ${gridIn ? "fch-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <Icon className="mb-4 h-6 w-6 text-[#2F6BEB] dark:text-[#6B8AF5]" aria-hidden="true" />
                  <h3 className="mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mb-5 text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {card.description}
                  </p>
                  {/* replace src with your exported card image (PNG in /public/images/) */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="mt-auto aspect-[16/9] w-full rounded-lg object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialChallengesSection;