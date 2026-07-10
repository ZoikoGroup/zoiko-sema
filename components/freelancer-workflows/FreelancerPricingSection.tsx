"use client";

import React, { useEffect, useRef, useState } from "react";

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

type Feature = { label: string; included: boolean };

type Plan = {
  tag: string;
  name: string;
  desc: string;
  price: string;
  period?: string;
  features: Feature[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    tag: "FREE / STARTER",
    name: "",
    desc: "For solo freelancers getting organized.",
    price: "$0",
    period: "/mo",
    features: [
      { label: "Limited client workspaces", included: true },
      { label: "Client guest access", included: true },
      { label: "AI recaps & follow-ups (limited)", included: true },
      { label: "Private notes", included: true },
      { label: "Advanced permissions", included: false },
    ],
    cta: "Start free",
  },
  {
    tag: "PRO FREELANCER",
    name: "",
    desc: "For independents running client work daily.",
    price: "$18",
    period: "/mo",
    features: [
      { label: "Advanced client workspaces", included: true },
      { label: "Full AI recaps & follow-ups", included: true },
      { label: "Meeting summaries", included: true },
      { label: "Finance integrations", included: true },
      { label: "Optional custom branding", included: true },
    ],
    cta: "Start free",
    popular: true,
  },
  {
    tag: "STUDIO / BUSINESS",
    name: "",
    desc: "For boutique studios and multi-client teams.",
    price: "$39",
    period: "/mo",
    features: [
      { label: "Multi-member workspaces", included: true },
      { label: "Advanced permissions", included: true },
      { label: "Custom branding", included: true },
      { label: "Advanced audit & export", included: true },
      { label: "Team notes & visibility", included: true },
    ],
    cta: "Get a demo",
  },
  {
    tag: "ENTERPRISE",
    name: "",
    desc: "For client-service organizations at scale.",
    price: "Custom",
    features: [
      { label: "Custom governance & retention", included: true },
      { label: "Custom policies & controls", included: true },
      { label: "Advanced visibility", included: true },
      { label: "Custom integrations", included: true },
      { label: "Dedicated onboarding", included: true },
    ],
    cta: "Talk to sales",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PlanCard({ plan, active, delay }: { plan: Plan; active: boolean; delay: number }) {
  return (
    <div
      className={`fwp-card ${active ? "active" : ""} ${plan.popular ? "fwp-popular" : ""} relative rounded-2xl border p-6 flex flex-col`}
      style={{
        animationDelay: `${delay}ms`,
        borderColor: plan.popular ? "#503AD7" : "#E5E7EB",
      }}
    >
      {plan.popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: "#503AD7" }}
        >
          Most popular
        </span>
      )}

      <p className="fwp-tag text-[11px] font-semibold tracking-[0.08em] text-gray-500 mb-3">
        {plan.tag}
      </p>
      <p className="fwp-desc text-[13px] leading-relaxed text-gray-500 mb-6 min-h-[38px]">
        {plan.desc}
      </p>

      <div className="fwp-price flex items-end gap-1 mb-7">
        <span className="text-[30px] font-extrabold text-gray-900 leading-none">{plan.price}</span>
        {plan.period && (
          <span className="fwp-period text-[13px] text-gray-400 mb-0.5">{plan.period}</span>
        )}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f.label} className="fwp-feature flex items-start gap-2.5">
            <span
              className={`fwp-feature-icon flex-shrink-0 mt-0.5 ${f.included ? "" : "opacity-40"}`}
              style={{ color: f.included ? "#503AD7" : "#9CA3AF" }}
            >
              {f.included ? <CheckIcon /> : <XIcon />}
            </span>
            <span className={`text-[13px] leading-snug ${f.included ? "text-gray-700" : "text-gray-400"} fwp-feature-text`}>
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`fwp-btn w-full rounded-full py-3 text-[14px] font-semibold ${
          plan.popular
            ? "text-white"
            : "border border-gray-300 text-gray-900"
        }`}
        style={
          plan.popular
            ? { background: "linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%)" }
            : undefined
        }
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function FreelancerPricingSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fwpFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwp-hidden  { opacity:0; transform:translateY(28px); }
        .fwp-visible { animation: fwpFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwp-card { opacity:0; transform:translateY(22px); }
        .fwp-card.active { animation: fwpFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* Card hover: gradient background + white text */
        .fwp-card {
          background: #ffffff;
          transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease,
                      background .4s ease, border-color .35s ease;
        }
        .fwp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(45,42,122,0.28);
          background: linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%);
          border-color: transparent;
        }

        .fwp-tag, .fwp-desc, .fwp-period, .fwp-feature-text {
          transition: color .35s ease;
        }
        .fwp-price span {
          transition: color .35s ease;
        }
        .fwp-feature-icon {
          transition: color .35s ease, opacity .35s ease;
        }

        .fwp-card:hover .fwp-tag { color: #D6D3F5; }
        .fwp-card:hover .fwp-desc { color: #D6D3F5; }
        .fwp-card:hover .fwp-price span { color: #ffffff; }
        .fwp-card:hover .fwp-period { color: #C9C5F0; }
        .fwp-card:hover .fwp-feature-text { color: #E8E6FB !important; }
        .fwp-card:hover .fwp-feature-icon { color: #ffffff !important; opacity: 1 !important; }

        /* Button: on card hover, becomes white bg + brand text */
        .fwp-btn {
          transition: background .35s ease, color .35s ease, border-color .35s ease,
                      transform .25s ease, box-shadow .25s ease;
        }
        .fwp-card:hover .fwp-btn {
          background: #ffffff !important;
          color: #503AD7 !important;
          border-color: transparent !important;
        }
        .fwp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwp-hidden, .fwp-card { opacity:1!important; transform:none!important; animation:none!important; }
          .fwp-visible { animation:none!important; opacity:1!important; }
          .fwp-card:hover, .fwp-btn:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Pricing"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fwp-hidden ${headIn ? "fwp-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#503AD7" }}
            >
              Pricing
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              Start free, upgrade when your client work grows
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500">
              A self-serve plan for freelancers, a studio plan for small
              teams, and a sales-assisted plan for client-service
              organizations.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
          >
            {plans.map((plan, i) => (
              <PlanCard key={plan.tag} plan={plan} active={gridIn} delay={i * 90} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}