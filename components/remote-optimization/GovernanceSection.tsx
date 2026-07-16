"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const features = [
  {
    text: "SOC2 Type II & GDPR Compliant",
    icon: "/Hybrid/icon-check-blue.svg",
  },
  {
    text: "End-to-end encrypted \u2018Confidential Mode\u2019",
    icon: "/Hybrid/icon-shield.svg",
  },
];

export function GovernanceSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] py-[72px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Image */}
        <div
          className={`flex-1 transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <img
            src="/Hybrid/governance-security.jpg"
            alt="Enterprise Governance - Confidential Mode, Admin Console, AI Policies"
            className="w-full max-w-[600px] h-auto rounded-xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl border border-neutral-300/30"
          />
        </div>

        {/* Right Content */}
        <div
          className={`flex-1 max-w-[560px] flex flex-col gap-6 transition-all duration-1000 delay-200 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h2 className="text-zinc-900 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">
            Enterprise-grade Governance
          </h2>

          <p className="text-zinc-700 text-lg font-normal font-['Inter'] leading-7">
            Maintain total control over your global data with sophisticated
            <br />
            permissions, confidential modes, and audit-ready logs.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="p-4 rounded-lg flex items-center gap-4"
              >
                <img
                  src={feature.icon}
                  alt=""
                  className="w-4 h-5 shrink-0"
                />
                <span className="text-zinc-900 text-base font-normal font-['Inter'] leading-6">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
