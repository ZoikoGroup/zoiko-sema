"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
function useInView(threshold = 0.1) {
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

const BRAND = "#3457E8";

// TODO: replace each src with your real image path,
// e.g. "/images/sema-ai/meetings.jpg"
const products = [
  {
    name: "Meetings",
    imageSrc: "/Images/Mask group (3).png",
    description: "Summaries, decisions, owners, next steps, follow-up drafts.",
    cta: "Explore AI Meeting Summaries",
    href: "/ai-meetings",
  },
  {
    name: "Messaging",
    imageSrc: "/Images/Mask group (4).png",
    description: "Thread recaps, unanswered question detection, context search.",
    cta: "Explore Messaging",
    href: "/messaging",
  },
  {
    name: "Calls",
    imageSrc: "/Images/Mask group (5).png",
    description: "Call notes, follow-up capture, missed-context recovery.",
    cta: "Explore Calls",
    href: "/audio-calls",
  },
  {
    name: "Mail",
    imageSrc: "/Images/Mask group (6).png",
    description: "Draft replies, summarize threads, connect email to work context.",
    cta: "Explore Mail",
    href: "/sema-mail",
  },
  {
    name: "Calendar",
    imageSrc: "/Images/Mask group (7).png",
    description: "Suggested follow-ups, meeting preparation, schedule context.",
    cta: "Explore Calendar",
    href: "/calendar",
  },
  {
    name: "Files and Search",
    imageSrc: "/Images/Mask group (8).png",
    description: "Source-aware answers, file context, searchable memory.",
    cta: "Explore Search",
    href: "/search",
  },
];

export default function SemaAiProductsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes sapFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sap-hidden  { opacity: 0; transform: translateY(28px); }
        .sap-visible { animation: sapFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sap-card { opacity: 0; transform: translateY(24px); }
        .sap-card.sap-card-in {
          animation: sapFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sap-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .sap-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px -20px rgba(15,23,42,0.2);
        }

        .sap-card img { transition: transform .4s ease; }
        .sap-card:hover img { transform: scale(1.05); }

        .sap-link { transition: gap .2s ease; }
        .sap-link .sap-arrow { transition: transform .2s ease; display: inline-block; }
        .sap-link:hover .sap-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .sap-hidden, .sap-card { opacity: 1 !important; transform: none !important; }
          .sap-visible, .sap-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="AI across Sema products"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`sap-hidden ${headIn ? "sap-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              AI Across Sema Products
            </p>
            <h2 className="text-[clamp(22px,3.2vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[760px] mx-auto">
              Intelligence built into the communication stack, not a standalone gimmick.
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`sap-card ${gridIn ? "sap-card-in" : ""} bg-white rounded-2xl overflow-hidden`}
                style={{ animationDelay: `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.08}s` }}
              >
                <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-gray-500 mb-3">
                    {product.description}
                  </p>
                  <a
                    href={product.href}
                    className="sap-link inline-flex items-center gap-1 text-[12.5px] font-semibold"
                    style={{ color: BRAND }}
                  >
                    {product.cta}
                    <span className="sap-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}