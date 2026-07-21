"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const paths = [
  {
    label: "Individuals",
    desc: "Start with secure calls, messages, meetings, notes, mail, calendar, and personal productivity.",
    linkLabel: "Start Free",
    href: "/start-free",
  },
  {
    label: "Teams",
    desc: "Bring group conversations, meetings, files, decisions, and follow-ups into one workspace.",
    linkLabel: "Explore Teams",
    href: "/pricing",
  },
  {
    label: "Businesses",
    desc: "Deploy secure communication with admin controls, policies, and enterprise-ready governance.",
    linkLabel: "Contact Sales",
    href: "/contact-sales",
  },
];

export default function ProductOverviewAudiencePathsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes poapFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes poapFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .poap-hidden  { opacity: 0; transform: translateY(28px); }
        .poap-visible { animation: poapFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .poap-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .poap-img-visible { animation: poapFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .poap-card { opacity: 0; transform: translateY(24px); }
        .poap-grid.poap-visible .poap-card {
          animation: poapFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .poap-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .poap-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        .poap-link {
          transition: gap .2s ease, color .2s ease;
        }
        .poap-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .poap-hidden, .poap-visible, .poap-img-hidden, .poap-img-visible, .poap-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .poap-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Audience paths"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`poap-hidden ${badgeIn ? "poap-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Audience Paths
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`poap-hidden ${headIn ? "poap-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Individuals, teams, and businesses — one platform, three
              journeys.
            </h2>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`poap-img-hidden ${imgIn ? "poap-img-visible" : ""} relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-4 sm:mb-5`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/audience-paths.webp"
              alt="Double exposure of a city skyline and business professionals, representing individuals, teams, and businesses on Zoiko Sema"
              fill
              className="object-cover"
            />
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`poap-grid ${gridIn ? "poap-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {paths.map((p, i) => (
              <div
                key={p.label}
                className="poap-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="poap-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm flex flex-col">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand mb-2">
                    {p.label}
                  </span>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {p.desc}
                  </p>
                  <a
                    href={p.href}
                    className="poap-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                  >
                    {p.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
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
