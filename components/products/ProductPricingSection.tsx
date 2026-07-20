"use client";

import React, { useEffect, useRef, useState } from "react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Personal",
    price: "Free",
    features: [
      "Messaging",
      "Audio & video calls",
      "Unlimited contacts",
      "Personal use only",
    ],
    cta: "Start free",
    href: "/start-free/",
    popular: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/mo",
    features: [
      "Extended call history",
      "Larger group calls",
      "AI call summaries",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    href: "#upgrade-pro",
    popular: false,
  },
  {
    name: "Team",
    price: "$14",
    period: "/mo",
    features: [
      "Channels & spaces",
      "Shared context",
      "AI meeting summaries",
      "Admin basics",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "#start-team",
    popular: true,
  },
  {
    name: "Business",
    price: "$22",
    period: "/mo",
    features: [
      "Admin console",
      "Security controls",
      "Retention policies",
      "Audit logs",
      "ZoikoTime ready",
    ],
    cta: "Talk to sales",
    href: "/contact",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "SSO & advanced identity",
      "Full ZoikoTime integration",
      "Compliance exports",
      "Dedicated support",
    ],
    cta: "Get a demo",
    href: "/get-a-demo/",
    popular: false,
  },
];

// ── Intersection-observer hook ─────────────────────────────
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

export default function ProductPricingSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes prFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pr-hidden  { opacity: 0; transform: translateY(28px); }
        .pr-visible { animation: prFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .pr-card-wrap { opacity: 0; transform: translateY(26px); }
        .pr-grid-in .pr-card-wrap {
          animation: prFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .pr-grid-in .pr-card-wrap:nth-child(1) { animation-delay: .02s; }
        .pr-grid-in .pr-card-wrap:nth-child(2) { animation-delay: .08s; }
        .pr-grid-in .pr-card-wrap:nth-child(3) { animation-delay: .14s; }
        .pr-grid-in .pr-card-wrap:nth-child(4) { animation-delay: .20s; }
        .pr-grid-in .pr-card-wrap:nth-child(5) { animation-delay: .26s; }

        /* card hover */
        .pr-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1),
                      border-color .28s ease;
          will-change: transform;
        }
        .pr-card:hover { transform: translateY(-6px); }
        .pr-card-plain:hover {
          box-shadow: 0 18px 36px rgba(15,15,40,0.10);
          border-color: rgba(30,27,75,0.25);
        }
        .pr-card-popular:hover {
          box-shadow: 0 30px 60px rgba(15,15,40,0.5);
        }

        /* feature row hover */
        .pr-feature { transition: padding-left .18s ease; }
        .pr-feature:hover { padding-left: 4px; }

        /* CTA button */
        .pr-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease;
        }
        .pr-btn:hover { transform: translateY(-2px); }
        .pr-btn-outline:hover {
          background-color: #F9FAFB;
          box-shadow: 0 10px 22px rgba(15,15,40,0.08);
        }
        .pr-btn-filled:hover {
          box-shadow: 0 14px 30px rgba(71,71,222,0.4);
        }

        @keyframes prShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .pr-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .pr-btn:hover::after { animation: prShimmer .65s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .pr-hidden, .pr-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pr-visible { animation: none !important; opacity: 1 !important; }
          .pr-card:hover, .pr-btn:hover { transform: none; }
          .pr-btn::after { display: none; }
        }
      `}</style>

      <section
        aria-label="Pricing plans"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pr-hidden ${headIn ? "pr-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-extrabold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,36px)" }}
            >
              Start free. Scale when communication needs structure.
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-[#5C5870]">
              Free for individuals and small groups. Pro for power users. Team and Business plans for organizations that need structure. Enterprise plans for organizations that need governance.
            </p>
          </div>

          {/* ── 5-card grid — equal height, buttons aligned ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch ${
              gridIn ? "pr-grid-in" : ""
            }`}
          >
            {plans.map((plan) => (
              <div key={plan.name} className="pr-card-wrap h-full">
                <div
                  className={`pr-card h-full rounded-2xl p-6 flex flex-col ${
                    plan.popular
                      ? "pr-card-popular"
                      : "pr-card-plain border border-gray-200 bg-white"
                  }`}
                  style={
                    plan.popular
                      ? { background: "#0F0F2A" }
                      : undefined
                  }
                >
                  {/* Plan name */}
                  <span
                    className="text-[13px] font-medium mb-2"
                    style={{ color: plan.popular ? "#c7c9f2" : "#6b7280" }}
                  >
                    {plan.name}
                  </span>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-5">
                    <span
                      className="text-[26px] font-bold leading-none"
                      style={{ color: plan.popular ? "#fff" : "#15131F" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className="text-[13px]"
                        style={{ color: plan.popular ? "#a5a7d9" : "#0B0F2D" }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Feature list — flex-1 pushes button down to align across all cards */}
                  <ul className="flex-1 mb-6 space-y-[9px]">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="pr-feature flex items-start gap-2 text-[12.5px] leading-snug"
                        style={{ color: plan.popular ? "#d4d5f2" : "#4B5563" }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="flex-shrink-0 mt-[2px]"
                        >
                          <path
                            d="M2.5 7.2l3 3 6-6.4"
                            stroke={plan.popular ? "#8B8FE8" : "#9CA3AF"}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — anchored at bottom, same line across all cards */}
                  <a
                    href={plan.href}
                    className={`pr-btn mt-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold ${
                      plan.popular
                        ? "pr-btn-filled text-white"
                        : "pr-btn-outline text-[#0B0F2D] border border-[#0B0F2D] bg-white"
                    }`}
                    style={plan.popular ? { background: "#4B47DE" } : undefined}
                  >
                    {plan.cta}
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