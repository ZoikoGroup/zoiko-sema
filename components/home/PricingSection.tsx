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
    href: "#start-free",
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
    tag: "★ POPULAR",
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
    href: "#start-team",
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
    href: "#talk-sales",
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
    href: "#get-demo",
    popular: false,
  },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
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
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1),
                      border-color .28s ease;
          will-change: transform;
        }
        .pr-card:hover { transform: translateY(-6px); }
        .pr-card-plain:hover {
          box-shadow: 0 18px 36px rgba(15,15,40,0.10);
          border-color: rgba(71,71,135,0.25);
        }
        .pr-card-popular:hover {
          box-shadow: 0 26px 52px rgba(71,71,135,0.40);
        }

        /* feature row check icon hover */
        .pr-feature { transition: padding-left .18s ease; }
        .pr-feature:hover { padding-left: 4px; }

        /* CTA button */
        .pr-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .pr-btn:hover { transform: translateY(-2px); opacity: .92; }
        .pr-btn-dark:hover  { box-shadow: 0 12px 26px rgba(0,0,0,0.22); }
        .pr-btn-white:hover { box-shadow: 0 12px 26px rgba(0,0,0,0.18); }

        @keyframes prShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .pr-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
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
              className="font-bold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,36px)" }}
            >
              Start free. Scale when communication needs structure.
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
              <div key={plan.name} className="pr-card-wrap h-full">
                <div
                  className={`pr-card h-full rounded-2xl p-6 flex flex-col ${
                    plan.popular
                      ? "pr-card-popular text-white"
                      : "pr-card-plain border border-gray-200 bg-white"
                  }`}
                  style={
                    plan.popular
                      ? { background: "#474787" }
                      : undefined
                  }
                >
                  {/* Tag */}
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-3"
                    style={{ color: plan.popular ? "#c7c9f2" : "#9CA3AF" }}
                  >
                    {plan.tag}
                  </span>

                  {/* Plan name */}
                  <h3
                    className="text-[20px] font-bold leading-snug mb-2"
                    style={{ color: plan.popular ? "#fff" : "#15131F" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[12.5px] leading-relaxed mb-5"
                    style={{ color: plan.popular ? "#cfd0f0" : "#6b7280" }}
                  >
                    {plan.desc}
                  </p>

                  {/* Feature list — flex-1 pushes button down to align across all cards */}
                  <ul className="flex-1 mb-6 space-y-[10px]">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="pr-feature flex items-start gap-2 text-[13px] leading-snug"
                        style={{ color: plan.popular ? "#e3e4f8" : "#374151" }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="flex-shrink-0 mt-[2px]"
                        >
                          <path
                            d="M2.5 7.2l3 3 6-6.4"
                            stroke={plan.popular ? "#a5b4fc" : "#474787"}
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
                    className={`pr-btn mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-semibold ${
                      plan.popular ? "pr-btn-white bg-white text-[#15131F]" : "pr-btn-dark text-white"
                    }`}
                    style={!plan.popular ? { background: "#15131F" } : undefined}
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