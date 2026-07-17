"use client";

import React, { useEffect, useState, useRef } from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlansRolesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      name: "Free",
      description:
        "Internal support space, basic messages, meetings, tasks, and files.",
      features: [
        "Internal support space",
        "Messages and tasks",
        "Basic meetings",
        "File sharing",
      ],
      cta: "Start free",
      isPopular: false,
      link: "/start-free",
    },
    {
      name: "Team",
      description:
        "Shared queues, templates, guests, team reporting, and connected customer spaces.",
      features: [
        "Shared support queues",
        "Guest / client spaces",
        "Templates and macros",
        "Team reporting",
      ],
      cta: "Start free",
      isPopular: false,
      link: "/start-free",
    },
    {
      name: "Business",
      description:
        "SSO, advanced routing, retention, full audit, integrations, AI governance, and exports.",
      features: [
        "SSO and MFA",
        "Advanced routing and SLA",
        "Full audit trail",
        "AI governance and exports",
        "All integrations",
      ],
      cta: "Get a demo",
      isPopular: true,
      link: "/get-a-demo",
    },
    {
      name: "Enterprise",
      description:
        "Custom roles, sensitive-case controls, legal hold, advanced integrations, and deployment support.",
      features: [
        "Restricted / sensitive queues",
        "Custom retention + legal hold",
        "Custom roles and permissions",
        "Residency options",
        "Dedicated support",
      ],
      cta: "Talk to sales",
      isPopular: false,
      link: "/talk-to-sales",
    },
  ];

  return (
    <section
      ref={containerRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-16 bg-slate-50 dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-500 dark:text-teal-400 text-xs font-semibold  uppercase tracking-wide">
              PLANS AND ROLES
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
            Right-sized for every support operation.
          </h2>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border group ${
                tier.isPopular
                  ? "bg-slate-900 text-white dark:bg-gray-850 border-transparent shadow-[0px_8px_32px_0px_rgba(52,87,232,0.25)]"
                  : "bg-white text-slate-900 dark:bg-gray-800 dark:text-white border-slate-200/60 dark:border-slate-700/50 shadow-sm"
              }`}
            >
              {/* Most Popular Badge Integration */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-6 bg-blue-600 px-3 py-0.5 rounded-full shadow-sm">
                  <span className="text-white text-[10px] font-bold  tracking-wide uppercase">
                    Most popular
                  </span>
                </div>
              )}

              {/* Card Meta Content Block */}
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-1.5">
                  <h3 className="text-base font-extrabold   leading-none">
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs font-normal  leading-relaxed ${
                      tier.isPopular
                        ? "text-slate-300"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Checklist Rules Array */}
                <div className="space-y-2.5 my-4 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 group/item"
                    >
                      <div className="pt-0.5 shrink-0 text-teal-500 dark:text-teal-400">
                        <Check
                          className="size-3.5 transition-transform group-hover/item:scale-110"
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className={`text-xs font-normal  leading-tight ${
                          tier.isPopular
                            ? "text-slate-200"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Theme CTA Trigger Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => router.push(tier.link)}
                  className={`w-full py-2.5 rounded-full cursor-pointer text-center text-sm font-bold  leading-5 transition-all duration-200 active:scale-98 ${
                    tier.isPopular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                      : "bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 hover:bg-blue-600/20 dark:hover:bg-blue-400/20"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
