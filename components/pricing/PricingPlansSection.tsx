"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  name: string;
  desc: string;
  badge?: string;
  annualUsd: number; // displayed /mo price when billed annually; 0 = free / custom handled separately
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  isFree?: boolean;
  isEnterprise?: boolean;
  fineMonthly: string;
  fineAnnual: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    desc: "For individuals getting started",
    annualUsd: 0,
    isFree: true,
    features: ["Meetings, messaging & calls", "Mail & calendar", "Basic AI summaries"],
    cta: "Start free",
    href: "/start-free/",
    fineMonthly: "No credit card required",
    fineAnnual: "No credit card required",
  },
  {
    name: "Pro",
    desc: "For freelancers & professionals",
    badge: "MOST POPULAR",
    annualUsd: 14,
    popular: true,
    features: ["Everything in Free", "Full AI Meeting Summaries", "Sema Notes & Search"],
    cta: "Start with Pro",
    href: "/start-free/",
    fineMonthly: "Billed monthly",
    fineAnnual: "Billed annually or monthly",
  },
  {
    name: "Business",
    desc: "For teams needing governance",
    annualUsd: 24,
    features: ["Everything in Pro", "Admin Console & policies", "Confidential Mode"],
    cta: "Talk to sales",
    href: "/contact-sales/",
    fineMonthly: "3-seat minimum",
    fineAnnual: "3-seat minimum",
  },
  {
    name: "Enterprise",
    desc: "For scaled, regulated deployment",
    annualUsd: 0,
    isEnterprise: true,
    features: ["SSO / SAML / SCIM", "Custom retention & compliance", "ZoikoTime integration"],
    cta: "Get a demo",
    href: "/get-a-demo/",
    fineMonthly: "Custom pricing & onboarding",
    fineAnnual: "Custom pricing & onboarding",
  },
];

function formatPrice(amount: number): string {
  const rounded = Math.round(amount * 100) / 100;
  const isWhole = rounded % 1 === 0;
  return `$${isWhole ? rounded.toFixed(0) : rounded.toFixed(2)}`;
}

export default function PricingPlansSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <>
      <style>{`
        @keyframes ppsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ppsPriceSwap {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pps-controls-enter { animation: ppsFadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }
        .pps-card-enter { animation: ppsFadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }

        .pps-currency-label {
          color: #A9B2DE;
          flex-shrink: 0;
        }

        /* billing toggle — plain text, selected option gets a white pill */
        .pps-toggle-row {
          flex-shrink: 0;
        }
        .pps-toggle-btn {
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 9999px;
          transition: color .2s ease, background-color .2s ease;
          cursor: pointer;
          background: transparent;
          border: none;
          white-space: nowrap;
          color: #A9B2DE;
        }
        .pps-toggle-btn.is-selected {
          background: #fff;
          color: #15131F;
        }

        /* price number swap animation */
        .pps-price-value { animation: ppsPriceSwap 0.3s cubic-bezier(.22,1,.36,1) both; }

        /* card hover */
        .pps-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1),
                      border-color .28s ease;
        }
        .pps-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(15,17,40,0.14);
        }
        .pps-card-popular:hover {
          box-shadow: 0 22px 44px rgba(59,91,255,0.22);
        }

        /* CTA buttons */
        .pps-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .pps-btn:hover { transform: translateY(-2px); opacity: .92; }

        .pps-compare-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pps-compare-link:hover { gap: 10px; color: #2440D6; }

        @media (prefers-reduced-motion: reduce) {
          .pps-controls-enter, .pps-card-enter, .pps-price-value {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .pps-card:hover, .pps-btn:hover { transform: none; }
        }
      `}</style>

      <section aria-label="Pricing plans" className="relative w-full bg-[#F5F7FC] pb-16 md:pb-20">
        <div
          className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 -mt-[100px]"
        >
          {/* ── Controls row: currency + billing toggle ── */}
          <div className="pps-controls-enter relative flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="pps-currency-label px-2 text-[13px] font-semibold">
              USD $
            </span>

            <div className="pps-toggle-row flex items-center gap-1" role="tablist" aria-label="Billing period">
              <button
                role="tab"
                aria-selected={billing === "monthly"}
                onClick={() => setBilling("monthly")}
                className={`pps-toggle-btn ${billing === "monthly" ? "is-selected" : ""}`}
              >
                Monthly
              </button>
              <button
                role="tab"
                aria-selected={billing === "annual"}
                onClick={() => setBilling("annual")}
                className={`pps-toggle-btn ${billing === "annual" ? "is-selected" : ""}`}
              >
                Annual · save 20%
              </button>
            </div>
          </div>

          {/* ── 4-card pricing grid ── */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {plans.map((plan, i) => {
              const monthlyUsd = plan.annualUsd / 0.8; // undiscounted monthly rate
              const price = billing === "monthly" ? monthlyUsd : plan.annualUsd;

              return (
                <div
                  key={plan.name}
                  className="pps-card-enter"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`pps-card h-full rounded-2xl p-6 flex flex-col relative ${
                      plan.popular ? "pps-card-popular" : "border border-gray-200"
                    }`}
                    style={{
                      background: "#fff",
                      borderColor: plan.popular ? "#3B5BFF" : undefined,
                      borderWidth: plan.popular ? "2px" : undefined,
                      boxShadow: plan.popular
                        ? "0 18px 40px rgba(59,91,255,0.16)"
                        : "0 1px 2px rgba(15,17,40,0.04)",
                    }}
                  >
                    {/* Popular badge */}
                    {plan.badge && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ background: "#3B5BFF" }}
                      >
                        {plan.badge}
                      </span>
                    )}

                    {/* Name */}
                    <h3 className="text-[17px] font-bold text-[#15131F] mb-1.5 mt-1">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] leading-relaxed text-[#6b7280] mb-5">
                      {plan.desc}
                    </p>

                    {/* Price block */}
                    <div className="mb-5">
                      {plan.isFree ? (
                        <p className="text-[30px] font-extrabold text-[#15131F] leading-none">
                          {formatPrice(0)}
                          <span className="text-[13px] font-medium text-[#9CA3AF]"> /forever</span>
                        </p>
                      ) : plan.isEnterprise ? (
                        <p className="text-[30px] font-extrabold text-[#15131F] leading-none">
                          Custom
                        </p>
                      ) : (
                        <p
                          key={`${plan.name}-${billing}`}
                          className="pps-price-value text-[30px] font-extrabold text-[#15131F] leading-none"
                        >
                          {formatPrice(price)}
                          <span className="text-[13px] font-medium text-[#9CA3AF]"> /user/mo</span>
                        </p>
                      )}
                    </div>

                    {/* Feature list */}
                    <ul className="space-y-[10px] mb-6 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13px] leading-snug">
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[3px]">
                            <path d="M2.5 7.2l3 3 6-6.4" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[#3f3d56]">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={plan.href}
                      className="pps-btn inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-semibold w-full"
                      style={{
                        background: plan.popular ? "#3B5BFF" : "#fff",
                        color: plan.popular ? "#fff" : "#15131F",
                        border: plan.popular ? "none" : "1px solid #E5E7EB",
                      }}
                    >
                      {plan.cta}
                    </Link>

                    <p className="mt-3 text-center text-[11px] text-[#9CA3AF]">
                      {billing === "annual" ? plan.fineAnnual : plan.fineMonthly}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compare plans link */}
          <div className="mt-10 text-center">
            <a
              href="#comparison"
              className="pps-compare-link inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#3B5BFF]"
            >
              Compare plans in detail
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
