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

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    subtext: "Try for free",
    buttonText: "Sign up free",
    link:"/signup",
    isPopular: false,
    features: [
      "40-minute group meetings",
      "100 participants",
      "Messaging & channels",
      "3 editable whiteboards"
    ],
    theme: "bg-white text-slate-900 border-violet-100 button-outline",
  },
  {
    name: "Pro",
    price: "$14.16",
    period: "/mo",
    subtext: "Billed annually",
    buttonText: "Buy now",
    link:"/buy-now",
    isPopular: true,
    features: [
      "All of Basic, plus:",
      "30-hour group meetings",
      "AI meeting summaries",
      "Unlimited whiteboards",
      "Unlimited clips & docs"
    ],
    theme: "bg-slate-900 text-white border-transparent button-solid-blue shadow-[0px_30px_60px_-20px_rgba(11,15,45,0.40)]",
  },
  {
    name: "Business",
    price: "$18.33",
    period: "/mo",
    subtext: "Billed annually · 250+ users",
    buttonText: "Buy now",
    link:"/buy-now",
    isPopular: false,
    features: [
      "All of Pro, plus:",
      "300 participants",
      "Admin scheduler",
      "End-to-end encryption"
    ],
    theme: "bg-white text-slate-900 border-violet-100 button-outline",
  }
];

export default function PricingSection() {
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes prFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pr-hidden  { opacity: 0; transform: translateY(32px); }
        .pr-visible { animation: prFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .pr-card { opacity: 0; transform: translateY(24px); }
        .pr-grid.pr-visible .pr-card {
          animation: prFadeUp .6s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pr-interactive-card {
          transition: transform .35s cubic-bezier(.25, 1, .5, 1), box-shadow .35s ease;
        }
        .pr-interactive-card:hover {
          transform: translateY(-8px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pr-hidden, .pr-visible, .pr-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pr-interactive-card:hover { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-violet-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`pr-hidden ${headerIn ? "pr-visible" : ""} text-center max-w-2xl mx-auto mb-16 lg:mb-20`}
          >
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              PRICING
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold leading-[1.2] text-slate-900 tracking-tight">
              Plans and pricing for Zoiko Sema Meetings
            </h2>
          </div>

          {/* Pricing Grid */}
          <div
            ref={gridRef}
            className={`pr-grid ${gridIn ? "pr-visible" : ""} grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-md lg:max-w-none mx-auto`}
          >
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className="pr-card h-full"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className={`pr-interactive-card relative flex flex-col h-full rounded-[20px] border p-8 sm:p-9 ${plan.theme} ${plan.isPopular ? "lg:scale-105 lg:-translate-y-2 z-10" : "z-0"}`}>
                  
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 right-6 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                      Most popular
                    </div>
                  )}

                  {/* Header Tier Details */}
                  <div className="mb-6">
                    <span className={`block text-sm font-bold uppercase tracking-wider ${plan.isPopular ? "text-white/60" : "text-slate-500"}`}>
                      {plan.name}
                    </span>
                    <div className="flex items-baseline mt-2 mb-1">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-sm font-medium ml-1 ${plan.isPopular ? "text-white/50" : "text-gray-400"}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-normal block min-h-[16px] ${plan.isPopular ? "text-white/50" : "text-gray-400"}`}>
                      {plan.subtext}
                    </span>
                  </div>

                  {/* CTA Action Button */}
                  <div className="mb-8">
                    {plan.isPopular ? (
                      <a href={plan.link}>
                      <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-base transition-all duration-200 shadow-[0px_10px_30px_-8px_rgba(52,87,232,0.55)] active:scale-[0.98]">
                        {plan.buttonText}
                      </button></a>
                    ) : (
                      <a href={plan.link}>
                      <button className="w-full py-3.5 bg-transparent hover:bg-slate-900 hover:text-white text-slate-900 font-semibold rounded-full text-base border border-slate-900 transition-all duration-200 active:scale-[0.98]">
                        {plan.buttonText}
                      </button></a>
                    )}
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-3.5 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`text-sm font-normal flex items-start gap-2 ${
                          plan.isPopular 
                            ? "text-white/90" 
                            : idx === 0 && plan.name !== "Basic" ? "text-slate-800 font-medium" : "text-slate-600"
                        }`}
                      >
                        <span className={plan.isPopular ? "text-blue-400" : "text-blue-600"}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}