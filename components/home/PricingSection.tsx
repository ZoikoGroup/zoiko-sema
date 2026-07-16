"use client";

import React, { useEffect, useRef, useState } from "react";

interface Plan {
  tag: string;
  name: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    tag: "FREE",
    name: "Personal",
    desc: "For individuals and small groups.",
    features: [
      "Messaging",
      "Audio calls",
      "Video calls",
      "Basic groups",
      "Limited AI summaries",
      "Mobile + web access",
    ],
    cta: "Start free",
    href: "/start-free/",
    popular: false,
  },
  {
    tag: "PRO",
    name: "Pro",
    desc: "For freelancers and power users.",
    features: [
      "Extended AI summaries",
      "Larger group chats",
      "More meeting history",
      "Advanced search",
      "Productivity features",
    ],
    cta: "Upgrade to Pro",
    href: "#upgrade-pro",
    popular: false,
  },
  {
    tag: "TEAM",
    name: "Team",
    desc: "For small teams and growing orgs.",
    features: [
      "Team workspaces",
      "Channels & spaces",
      "Admin controls",
      "Shared files",
      "Team AI summaries",
      "Basic governance",
    ],
    cta: "Start team plan",
    href: "/pricing",
    popular: true,
  },
  {
    tag: "BUSINESS",
    name: "Business",
    desc: "For orgs needing stronger control.",
    features: [
      "Advanced administration",
      "Security controls",
      "Retention policies",
      "Compliance exports",
      "Priority support",
      "ZoikoTime ready",
    ],
    cta: "Talk to sales",
    href: "/contact",
    popular: false,
  },
  {
    tag: "ENTERPRISE",
    name: "Enterprise",
    desc: "For complex organizations.",
    features: [
      "Custom deployment",
      "Enterprise security",
      "Advanced compliance",
      "Dedicated support",
      "Custom integrations",
      "ZoikoTime design",
    ],
    cta: "Get a demo",
    href: "/get-a-demo/",
    popular: false,
  },
];

// ── Intersection-observer hook ─────────────────────────────────
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

const BRAND = "#4F46E5";
const HOVER_TEXT = "#503AD7";

export default function PricingSection() {
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
          transition: transform .3s cubic-bezier(.22,1,.36,1),
                      box-shadow .3s cubic-bezier(.22,1,.36,1),
                      border-color .3s ease,
                      background .35s ease;
          will-change: transform;
        }
        .pr-card:hover { transform: translateY(-7px); }
        .pr-card-plain:hover {
          box-shadow: 0 20px 40px rgba(15,15,40,0.10);
        }
        .pr-card-popular:hover {
          box-shadow: 0 26px 52px rgba(71,71,135,0.22);
        }

        /* ── Gradient background + white text on card hover ── */
        .pr-card-plain:hover,
        .pr-card-popular:hover {
          background: linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%) !important;
          border-color: transparent !important;
        }

        .pr-card:hover .pr-plan-tag,
        .pr-card:hover .pr-plan-name,
        .pr-card:hover .pr-plan-desc,
        .pr-card:hover .pr-feature {
          color: #ffffff !important;
        }

        .pr-card:hover .pr-check-icon path {
          stroke: #ffffff !important;
        }

        /* popular badge pulse */
        @keyframes prBadgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(71,71,135,0.35); }
          50%      { box-shadow: 0 0 0 6px rgba(71,71,135,0); }
        }
        .pr-badge { animation: prBadgePulse 2.6s ease-in-out infinite; }

        /* feature row hover */
        .pr-feature { transition: transform .18s ease, color .18s ease; }
        .pr-feature:hover { transform: translateX(3px); }
        .pr-feature:hover .pr-check-icon { transform: scale(1.15); }
        .pr-check-icon { transition: transform .18s ease; }
        .pr-check-icon path { transition: stroke .3s ease; }

        /* CTA buttons */
        .pr-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1),
                      box-shadow .22s ease,
                      background-color .22s ease,
                      background .3s ease,
                      color .22s ease,
                      border-color .3s ease;
        }
        .pr-btn:hover { transform: translateY(-2px); }

        .pr-btn-outline {
          background: #fff;
          color: ${BRAND};
          border: 1.5px solid ${BRAND};
        }
        .pr-btn-outline:hover {
          background: ${BRAND};
          color: #fff;
          box-shadow: 0 12px 26px rgba(71,71,135,0.28);
        }

        .pr-btn-filled {
          background: ${BRAND};
          color: #fff;
          border: 1.5px solid ${BRAND};
        }
        .pr-btn-filled:hover {
          box-shadow: 0 14px 30px rgba(71,71,135,0.38);
          filter: brightness(1.08);
        }

        /* ── When the whole card is hovered, buttons flip to white bg / brand text ── */
        .pr-card:hover .pr-btn-outline,
        .pr-card:hover .pr-btn-filled {
          background: #ffffff !important;
          color: ${HOVER_TEXT} !important;
          border-color: #ffffff !important;
          filter: none;
        }

        @keyframes prShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .pr-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .pr-btn:hover::after { animation: prShimmer .65s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .pr-hidden, .pr-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pr-visible { animation: none !important; opacity: 1 !important; }
          .pr-card:hover, .pr-btn:hover { transform: none; }
          .pr-btn::after { display: none; }
          .pr-badge { animation: none; }
        }
      `}</style>

      <section
        aria-label="Pricing plans"
        className="w-full bg-white pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pr-hidden ${headIn ? "pr-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,36px)" }}
            >
              Scale when communication needs structure
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-[#5C5870]">
              Free for individuals and small groups. Pro for power users. Team, Business
              and Enterprise plans for organizations that need governance.
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
              <div key={plan.name} className="pr-card-wrap h-full relative">
                {/* Popular badge — overlaps top border */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="pr-badge inline-flex items-center gap-1 rounded-full text-white text-[10.5px] font-bold uppercase tracking-[0.08em] px-3.5 py-1.5"
                      style={{ background: BRAND }}
                    >
                      ★ Popular
                    </span>
                  </div>
                )}

                <div
                  className={`pr-card h-full rounded-2xl p-6 flex flex-col text-center bg-white ${
                    plan.popular ? "pr-card-popular" : "pr-card-plain"
                  }`}
                  style={{
                    border: plan.popular
                      ? `2px solid ${BRAND}`
                      : "1px solid #E5E7EB",
                  }}
                >
                  {/* Tag */}
                  <span className="pr-plan-tag text-[10.5px] font-bold uppercase tracking-[0.12em] mb-3 text-gray-400">
                    {plan.tag}
                  </span>

                  {/* Plan name */}
                  <h3 className="pr-plan-name text-[20px] font-bold leading-snug mb-2 text-[#15131F]">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="pr-plan-desc text-[13px] leading-relaxed mb-5 text-gray-500">
                    {plan.desc}
                  </p>

                  {/* Feature list */}
                  <ul className="flex-1 mb-6 space-y-[10px] text-left inline-block ">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="pr-feature flex items-start gap-2 text-[11px] leading-snug p-0 text-gray-700"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="pr-check-icon flex-shrink-0 mt-[2px]"
                        >
                          <path
                            d="M2.5 7.2l3 3 6-6.4"
                            stroke={BRAND}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.href}
                    className={`pr-btn mt-auto inline-flex items-center justify-center rounded-[9px] px-5 py-3 text-[13.5px] font-semibold ${
                      plan.popular ? "pr-btn-filled" : "pr-btn-outline"
                    }`}
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