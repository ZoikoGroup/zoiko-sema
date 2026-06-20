"use client";

import { useEffect, useState } from "react";

/**
 * PricingPlansCardsSection
 * Three pricing cards (Free / Starter / Business) — equal height, buttons
 * aligned on the same baseline regardless of feature-list length.
 * Starter is the highlighted "Most popular" dark card in the middle.
 */

interface Feature {
  label: string;
  included: boolean;
}

interface Plan {
  id: string;
  tag: string;
  price: string;
  priceSuffix?: string;
  meta: string;
  description: string;
  features: Feature[];
  cta: string;
  variant: "light" | "dark";
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "free",
    tag: "FREE",
    price: "$0",
    meta: "Up to 10 users · free forever",
    description: "For individuals and small teams who want fast, secure communication without commitment.",
    features: [
      { label: "Unlimited 1:1 and group messaging", included: true },
      { label: "HD audio and video calls", included: true },
      { label: "10 AI meeting summaries/month", included: true },
      { label: "Channels, threads, and search", included: true },
      { label: "30-day message history", included: true },
      { label: "2 integrations", included: true },
      { label: "Admin console", included: false },
      { label: "SSO / SAML", included: false },
    ],
    cta: "Start free",
    variant: "light",
  },
  {
    id: "starter",
    tag: "STARTER",
    price: "$6",
    priceSuffix: "/ user",
    meta: "Up to 50 users · billed monthly",
    description: "For growing teams that need longer history, unlimited AI, and light admin controls.",
    features: [
      { label: "Everything in Free", included: true },
      { label: "Unlimited AI meeting summaries", included: true },
      { label: "Longer message history", included: true },
      { label: "Guest access", included: true },
      { label: "Admin console", included: true },
      { label: "Priority onboarding prompts", included: true },
      { label: "SSO / SAML", included: false },
      { label: "Compliance controls", included: false },
    ],
    cta: "Start free trial",
    variant: "dark",
    popular: true,
  },
  {
    id: "business",
    tag: "BUSINESS",
    price: "$14",
    priceSuffix: "/ user",
    meta: "Unlimited users · billed monthly",
    description: "For teams that need compliance controls, SSO, audit logs, and ZoikoTime workforce integration.",
    features: [
      { label: "Everything in Starter", included: true },
      { label: "Compliance and audit controls", included: true },
      { label: "Audit logs and export controls", included: true },
      { label: "SSO / SAML + advanced admin", included: true },
      { label: "ZoikoTime integration route", included: true },
      { label: "Priority support and security review", included: true },
      { label: "Full API and webhooks", included: true },
      { label: "Custom data retention", included: true },
    ],
    cta: "Get a demo",
    variant: "light",
  },
];

function CardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm">
      <div className="animate-pulse space-y-4">
        <div className="h-3 w-16 rounded bg-slate-100" />
        <div className="h-9 w-20 rounded bg-slate-100" />
        <div className="h-3 w-40 rounded bg-slate-100" />
        <div className="h-10 w-full rounded bg-slate-100" />
        <div className="space-y-3 pt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-3 w-full rounded bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan, index, loaded }: { plan: Plan; index: number; loaded: boolean }) {
  const isDark = plan.variant === "dark";

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-500 ease-out ${
        loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${
        isDark
          ? "bg-[#4B4789] shadow-[0_10px_30px_rgba(76,71,137,0.25)] hover:shadow-[0_14px_40px_rgba(76,71,137,0.32)]"
          : "bg-white shadow-sm hover:shadow-md"
      } hover:-translate-y-1`}
      style={{ transitionDelay: loaded ? `${index * 90}ms` : "0ms" }}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
          Most popular
        </span>
      )}

      <p
        className={`text-[11px] font-bold uppercase tracking-wide ${
          isDark ? "text-indigo-200" : "text-slate-400"
        }`}
      >
        {plan.tag}
      </p>

      <div className="mt-2 flex items-baseline gap-1.5">
        <span className={`text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-indigo-700"}`}>
          {plan.price}
        </span>
        {plan.priceSuffix && (
          <span className={`text-sm font-medium ${isDark ? "text-indigo-200" : "text-slate-500"}`}>
            {plan.priceSuffix}
          </span>
        )}
      </div>

      <p className={`mt-1 text-[12.5px] ${isDark ? "text-indigo-200" : "text-slate-400"}`}>
        {plan.meta}
      </p>

      <p
        className={`mt-4 text-[13.5px] leading-relaxed ${
          isDark ? "text-indigo-100" : "text-slate-600"
        }`}
      >
        {plan.description}
      </p>

      <div className={`mt-5 border-t ${isDark ? "border-white/15" : "border-slate-100"}`} />

      {/* Feature list — flex-1 pushes the button to a shared baseline */}
      <ul className="mt-5 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={`flex items-start gap-2.5 text-[13.5px] transition-opacity duration-200 ${
              feature.included
                ? isDark
                  ? "text-indigo-50"
                  : "text-slate-700"
                : isDark
                ? "text-indigo-300/40"
                : "text-slate-300"
            }`}
          >
            <CheckIcon
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                feature.included
                  ? isDark
                    ? "text-emerald-300"
                    : "text-indigo-600"
                  : isDark
                  ? "text-indigo-300/30"
                  : "text-slate-200"
              }`}
            />
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      <button
        className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
          isDark
            ? "bg-white text-[#2A2657] hover:bg-slate-100 hover:shadow-md"
            : plan.id === "business"
            ? "border border-indigo-300 text-indigo-700 hover:border-indigo-500 hover:bg-indigo-50"
            : "border border-slate-200 text-slate-900 hover:border-slate-400 hover:bg-slate-50"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function PricingPlansCardsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#F4F6FC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Start free. Scale with control.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
          Free forever for teams up to 10. Upgrade when you need more history,
          AI, admin controls, or enterprise governance.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
        {!loaded
          ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
          : PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} loaded={loaded} />
            ))}
      </div>
    </section>
  );
}