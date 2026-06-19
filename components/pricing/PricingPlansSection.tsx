"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ── Currency config — base prices defined in USD, converted on the fly ── */
interface Currency {
  code: string;
  symbol: string;
  label: string;
  rate: number; // relative to USD
}

const currencies: Currency[] = [
  { code: "USD", symbol: "$", label: "USD ($)", rate: 1 },
  { code: "EUR", symbol: "€", label: "EUR (€)", rate: 0.92 },
  { code: "GBP", symbol: "£", label: "GBP (£)", rate: 0.78 },
  { code: "INR", symbol: "₹", label: "INR (₹)", rate: 83.2 },
  { code: "AUD", symbol: "A$", label: "AUD (A$)", rate: 1.52 },
];

interface Plan {
  name: string;
  desc: string;
  badge?: string;
  subNote?: string;
  monthlyUsd: number; // 0 = free / custom handled separately
  features: { label: string; bold?: boolean }[];
  cta: string;
  href: string;
  popular?: boolean;
  isFree?: boolean;
  isEnterprise?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    desc: "For individuals exploring Sema for personal use.",
    monthlyUsd: 0,
    isFree: true,
    features: [
      { label: "Messaging and direct calls" },
      { label: "Audio & video with limits" },
      { label: "Limited AI meeting summaries" },
      { label: "Personal workspace" },
      { label: "Mobile and desktop apps" },
      { label: "Help center support" },
    ],
    cta: "Start free",
    href: "#start-free",
  },
  {
    name: "Pro",
    desc: "For freelancers, consultants, and independent professionals.",
    monthlyUsd: 6,
    features: [
      { label: "Everything in Free, plus", bold: true },
      { label: "Higher meeting limits" },
      { label: "Full AI meeting summaries" },
      { label: "Action items & decisions" },
      { label: "Project organization" },
      { label: "Calendar integrations" },
      { label: "Email support" },
    ],
    cta: "Start with Pro",
    href: "#start-pro",
  },
  {
    name: "Business",
    desc: "For teams that need shared communication and AI coordination.",
    badge: "MOST POPULAR",
    subNote: "3-seat minimum",
    monthlyUsd: 10,
    popular: true,
    features: [
      { label: "Everything in Pro, plus", bold: true },
      { label: "Team workspaces & channels" },
      { label: "Admin console" },
      { label: "Team AI summaries" },
      { label: "Permissions & policies" },
      { label: "Standard integrations" },
      { label: "Priority support" },
    ],
    cta: "Talk to sales",
    href: "#talk-sales",
  },
  {
    name: "Enterprise",
    desc: "For organizations with scale, security, compliance, or ZoikoTime requirements.",
    monthlyUsd: 0,
    isEnterprise: true,
    features: [
      { label: "Everything in Business, plus", bold: true },
      { label: "SSO / SAML & SCIM" },
      { label: "Custom retention" },
      { label: "Compliance configuration" },
      { label: "ZoikoTime integration design" },
      { label: "Dedicated onboarding" },
      { label: "99.9% SLA" },
    ],
    cta: "Get a demo",
    href: "#get-demo",
  },
];

function formatPrice(amountUsd: number, currency: Currency): string {
  const converted = amountUsd * currency.rate;
  if (currency.code === "INR") {
    return `${currency.symbol}${Math.round(converted)}`;
  }
  // round to nearest integer for clean display, but keep 1 decimal if needed
  const rounded = Math.round(converted * 100) / 100;
  const isWhole = rounded % 1 === 0;
  return `${currency.symbol}${isWhole ? rounded.toFixed(0) : rounded.toFixed(2)}`;
}

export default function PricingPlansSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const currency = currencies.find((c) => c.code === currencyCode) ?? currencies[0];

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

        /* currency dropdown */
        .pps-currency-trigger {
          transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .pps-currency-trigger:hover {
          border-color: #474787;
          background-color: #fafaff;
        }
        .pps-currency-trigger:focus-visible {
          outline: 2px solid #474787;
          outline-offset: 1px;
        }
        .pps-chevron { transition: transform .25s cubic-bezier(.22,1,.36,1); }
        .pps-chevron.is-open { transform: rotate(180deg); }

        .pps-dropdown {
          animation: ppsDropdownOpen .18s cubic-bezier(.22,1,.36,1) both;
          transform-origin: top;
        }
        @keyframes ppsDropdownOpen {
          from { opacity: 0; transform: scaleY(0.92) translateY(-4px); }
          to   { opacity: 1; transform: scaleY(1) translateY(0); }
        }
        .pps-dropdown-item { transition: background-color .15s ease, padding-left .15s ease; }
        .pps-dropdown-item:hover { background-color: #F4F6FE; padding-left: 18px; }

        /* billing toggle pill */
        .pps-toggle-track {
          position: relative;
          background: #EEF0FB;
          border-radius: 9999px;
          padding: 4px;
          display: inline-flex;
        }
        .pps-toggle-thumb {
          position: absolute;
          top: 4px;
          bottom: 4px;
          border-radius: 9999px;
          background: #474787;
          transition: transform .3s cubic-bezier(.22,1,.36,1), width .3s cubic-bezier(.22,1,.36,1);
          z-index: 0;
        }
        .pps-toggle-btn {
          position: relative;
          z-index: 1;
          padding: 7px 18px;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: 9999px;
          transition: color .25s ease;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .pps-save-badge {
          animation: ppsFadeUp 0.5s cubic-bezier(.22,1,.36,1) both;
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
          box-shadow: 0 18px 36px rgba(71,71,135,0.12);
        }
        .pps-card-popular:hover {
          box-shadow: 0 22px 44px rgba(71,71,135,0.28);
        }

        .pps-feature { transition: padding-left .18s ease; }
        .pps-feature:hover { padding-left: 4px; }

        /* CTA buttons */
        .pps-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .pps-btn:hover { transform: translateY(-2px); opacity: .92; }
        @keyframes ppsShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .pps-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .pps-btn:hover::after { animation: ppsShimmer .65s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .pps-controls-enter, .pps-card-enter, .pps-price-value, .pps-save-badge {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .pps-card:hover, .pps-btn:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Pricing plans"
        className="w-full bg-white pb-12 md:pb-16"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">

          {/* ── Controls row: currency + billing toggle ── */}
          <div className="pps-controls-enter relative flex flex-wrap items-center justify-center gap-5 mb-10" style={{ zIndex: 30 }}>

            {/* Currency dropdown */}
            <div className="relative" style={{ zIndex: 40 }}>
              <button
                type="button"
                onClick={() => setCurrencyOpen((o) => !o)}
                className="pps-currency-trigger flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-[13.5px] font-medium text-[#15131F]"
                aria-haspopup="listbox"
                aria-expanded={currencyOpen}
              >
                <span className="text-gray-400 text-[12px]">Currency</span>
                <span className="font-semibold">{currency.label}</span>
                <svg
                  className={`pps-chevron ${currencyOpen ? "is-open" : ""}`}
                  width="11" height="11" viewBox="0 0 11 11" fill="none"
                >
                  <path d="M2 4l3.5 3.5L9 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {currencyOpen && (
                <div
                  className="pps-dropdown absolute left-0 top-[calc(100%+6px)] w-44 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden"
                  style={{ zIndex: 50 }}
                  role="listbox"
                >
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      role="option"
                      aria-selected={c.code === currencyCode}
                      onClick={() => {
                        setCurrencyCode(c.code);
                        setCurrencyOpen(false);
                      }}
                      className="pps-dropdown-item w-full text-left px-4 py-2.5 text-[13.5px] text-[#15131F] flex items-center justify-between"
                    >
                      {c.label}
                      {c.code === currencyCode && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6.5l2.5 2.5L10 3" stroke="#474787" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Monthly / Annual toggle */}
            <div className="pps-toggle-track" role="tablist" aria-label="Billing period">
              <span
                className="pps-toggle-thumb"
                style={{
                  left: billing === "monthly" ? "4px" : "calc(50% + 2px)",
                  width: "calc(50% - 6px)",
                }}
                aria-hidden="true"
              />
              <button
                role="tab"
                aria-selected={billing === "monthly"}
                onClick={() => setBilling("monthly")}
                className="pps-toggle-btn"
                style={{ color: billing === "monthly" ? "#fff" : "#5C5870" }}
              >
                Monthly
              </button>
              <button
                role="tab"
                aria-selected={billing === "annual"}
                onClick={() => setBilling("annual")}
                className="pps-toggle-btn"
                style={{ color: billing === "annual" ? "#fff" : "#5C5870" }}
              >
                Annual
              </button>
            </div>

            {/* Save badge */}
            {billing === "annual" && (
              <span
                key="save-badge"
                className="pps-save-badge inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#474787]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#474787]" />
                Save with annual billing
              </span>
            )}
          </div>

          {/* ── 4-card pricing grid ── */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" style={{ zIndex: 1 }}>
            {plans.map((plan, i) => {
              const monthlyPrice = formatPrice(plan.monthlyUsd, currency);
              const annualMonthlyEquivalent = plan.monthlyUsd * 0.83; // ~17% off when billed annually
              const annualPrice = formatPrice(annualMonthlyEquivalent, currency);
              const annualYearTotal = formatPrice(annualMonthlyEquivalent * 12, currency);

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
                      borderColor: plan.popular ? "#474787" : undefined,
                      borderWidth: plan.popular ? "2px" : undefined,
                    }}
                  >
                    {/* Popular badge */}
                    {plan.badge && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ background: "#474787" }}
                      >
                        {plan.badge}
                      </span>
                    )}

                    {/* Name */}
                    <h3 className="text-[17px] font-bold text-[#15131F] mb-1.5 mt-1">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] leading-relaxed text-[#6b7280] mb-4">
                      {plan.desc}
                    </p>

                    {/* Sub note (e.g. 3-seat minimum) */}
                    {plan.subNote && (
                      <p className="text-[11.5px] font-semibold text-[#474787] mb-4 text-center bg-[#EEF0FB] rounded-md py-1.5">
                        {plan.subNote}
                      </p>
                    )}

                    {/* Feature list */}
                    <ul className="space-y-[9px] mb-6 flex-1">
                      {plan.features.map((f) => (
                        <li key={f.label} className="pps-feature flex items-start gap-2 text-[12.5px] leading-snug">
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[2px]">
                            <path d="M2.5 7.2l3 3 6-6.4" stroke="#474787" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span
                            className={f.bold ? "font-bold text-[#15131F]" : "text-[#3f3d56]"}
                          >
                            {f.label}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Price block */}
                    <div className="mb-5">
                      {plan.isFree ? (
                        <>
                          <p key={`free-${currencyCode}`} className="pps-price-value text-[30px] font-extrabold text-[#15131F] leading-none">
                            {formatPrice(0, currency)}
                          </p>
                          <p className="text-[12px] text-[#9CA3AF] mt-1">forever</p>
                          <p className="text-[11px] text-[#9CA3AF] mt-0.5">No charge · No credit card required</p>
                        </>
                      ) : plan.isEnterprise ? (
                        <>
                          <p className="text-[24px] font-extrabold text-[#15131F] leading-none">Custom</p>
                          <p className="text-[12px] text-[#9CA3AF] mt-1">Tailored to your organization</p>
                        </>
                      ) : (
                        <>
                          <p key={`${plan.name}-${billing}-${currencyCode}`} className="pps-price-value text-[30px] font-extrabold text-[#15131F] leading-none">
                            {billing === "monthly" ? monthlyPrice : annualPrice}
                            <span className="text-[13px] font-medium text-[#9CA3AF]"> /user/month</span>
                          </p>
                          <p className="text-[12px] text-[#9CA3AF] mt-1">
                            {billing === "annual"
                              ? `billed annually as ${annualYearTotal}/user/year`
                              : "billed monthly"}
                          </p>
                        </>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={plan.href}
                      className="pps-btn inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-semibold w-full"
                      style={{
                        background: plan.popular ? "#474787" : "#15131F",
                        color: "#fff",
                      }}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}