"use client";

import React, { useEffect, useRef, useState } from "react";

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

type BadgeColor = "green" | "blue" | "amber" | "red";

type CatalogItem = {
  label: string;
  color: BadgeColor;
  description: string;
};

const BADGE_CLASSES: Record<BadgeColor, string> = {
  green: "bg-[#16A34A]/10 text-[#16A34A] dark:bg-[#22C55E]/15 dark:text-[#4ADE80]",
  blue: "bg-[#4F5BD5]/10 text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]",
  amber: "bg-[#D97706]/12 text-[#B45309] dark:bg-[#F59E0B]/15 dark:text-[#FBBF24]",
  red: "bg-[#EF4444]/10 text-[#DC2626] dark:bg-[#F87171]/15 dark:text-[#F87171]",
};

const CARDS: CatalogItem[] = [
  {
    label: "Available",
    color: "green",
    description:
      "Identity, HRIS/HCM, payroll/finance, projects/CRM, communication, and Zoiko ecosystem.",
  },
  {
    label: "Beta",
    color: "blue",
    description:
      "Newer connectors validated with early customers before general availability.",
  },
  {
    label: "Planned / Custom",
    color: "amber",
    description:
      "Roadmap connectors and enterprise/custom-scoped integrations.",
  },
  {
    label: "Deprecated / Unavailable",
    color: "red",
    description:
      "Clearly labeled rather than silently removed from the catalog.",
  },
];

export function ConnectorCatalogSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ccRise {
          from { opacity: 0; transform: translateY(40px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cc-hidden  { opacity: 0; transform: translateY(28px); }
        .cc-visible { animation: ccFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .cc-hidden-r  { opacity: 0; transform: translateY(40px) scale(.99); }
        .cc-visible-r { animation: ccRise .85s cubic-bezier(.22,1,.36,1) forwards; }

        .cc-card { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease; }
        .cc-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(16,24,40,0.10); }

        @media (prefers-reduced-motion: reduce) {
          .cc-hidden, .cc-visible, .cc-hidden-r, .cc-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cc-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Connector catalog"
        className="w-full bg-[#EFEFFB] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`cc-hidden ${eyebrowIn ? "cc-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#8C95F2]`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F5BD5] dark:bg-[#8C95F2]" />
              Connector Catalog
            </p>
            <h2
              ref={headRef}
              className={`cc-hidden ${headIn ? "cc-visible" : ""} text-[clamp(30px,4vw,42px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Category, availability, direction, and setup level — never a
              fabricated connector.
            </h2>
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`cc-hidden-r ${imgIn ? "cc-visible-r" : ""} mt-12 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            {/* replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/zoikotime-integrations/connector-catalog.png"
              alt="A diverse team collaborating around integration options in a bright office"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/7] lg:aspect-[16/6]"
            />
          </div>

          {/* Status cards */}
          <div
            ref={gridRef}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {CARDS.map((card, i) => (
              <div
                key={card.label}
                className={`cc-card cc-hidden ${gridIn ? "cc-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <span
                  className={`mb-4 inline-block self-start rounded-full px-3 py-1 text-[12px] font-semibold ${BADGE_CLASSES[card.color]}`}
                >
                  {card.label}
                </span>
                <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ConnectorCatalogSection;