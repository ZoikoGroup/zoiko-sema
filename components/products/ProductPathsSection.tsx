"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Individuals",
    desc: "Messaging, audio and video calls for people who want secure personal communication.",
    cta: "Use Sema free",
    href: "/solutions/individuals",
  },
  {
    title: "Teams",
    desc: "Channels, spaces, calls, meetings, and AI summaries for teams and small businesses.",
    cta: "View Teams",
    href: "/solutions/teams",
  },
  {
    title: "Businesses",
    desc: "Admin controls, security, deployment readiness, and business-ready governance.",
    cta: "View Business",
    href: "/solutions/business",
  },
  {
    title: "Freelancers & Consultants",
    desc: "Client-ready messaging, simple setup, dependable call quality and history.",
    cta: "Try Freelancer",
    href: "/solutions/freelancers",
  },
  {
    title: "Negotiated Teams",
    desc: "Coordinate multi-party work with shared spaces and reliable escalation paths.",
    cta: "View Negotiated Teams",
    href: "/solutions/negotiated-teams",
  },
  {
    title: "ZoikoTime Customers",
    desc: "Existing ZoikoTime customers connecting communication to workforce truth.",
    cta: "View ZoikoTime",
    href: "/zoikotime-customers",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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

function CardGrid({ cards, gridIn }: { cards: typeof solutions; gridIn: boolean }) {
  return (
    <div
      className={`pp-card-grid ${gridIn ? "pp-grid-in" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
    >
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="pp-card"
          style={{ animationDelay: `${0.04 + i * 0.07}s` }}
        >
          <div className="pp-card-inner h-full rounded-2xl bg-white border border-gray-200 p-6">
            <h3 className="text-[16px] font-bold text-gray-900 mb-2.5">
              {card.title}
            </h3>

            <p className="text-[13.5px] leading-[1.7] text-gray-500 mb-5">
              {card.desc}
            </p>

            <Link
              href={card.href}
              className="pp-card-link inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#3457E8]"
            >
              {card.cta}
              <span className="pp-card-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductPathsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes ppFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-hidden  { opacity: 0; transform: translateY(28px); }
        .pp-visible { animation: ppFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pp-card { opacity: 0; transform: translateY(24px); }
        .pp-card-grid.pp-grid-in .pp-card {
          animation: ppFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pp-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pp-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(79,70,229,0.25);
        }

        .pp-card-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pp-card-link:hover {
          gap: 7px;
          color: #3730A3;
        }
        .pp-card-arrow {
          display: inline-block;
          transition: transform .2s ease;
        }
        .pp-card-link:hover .pp-card-arrow {
          transform: translateX(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pp-hidden, .pp-visible, .pp-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pp-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Badge */}
          <div
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center mb-4`}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3457E8]">
              Solutions &middot; By Business
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(26px,4.2vw,38px)] font-extrabold leading-[1.2] tracking-tight text-[#15131F] max-w-[620px] mx-auto">
              Choose the path that fits how you communicate.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.75] text-[#5C5870] max-w-[620px] mx-auto mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Solutions package Sema by audience. Use Cases describe a practical job. Both invest deeper on dedicated pages; pick this one that matches your starting point.
          </p>

          {/* Card grid */}
          <div ref={gridRef}>
            <CardGrid cards={solutions} gridIn={gridIn} />
          </div>

        </div>
      </section>
    </>
  );
}