"use client";

import React from "react";

export default function OperationalScale() {
  const tiers = [
    {
      name: "Entry / Free",
      sub: "Small teams, pilot cohorts",
      features: [
        "Basic teams and manager assignment",
        "Limited hierarchy levels",
      ],
      color: "#0f1124",
    },
    {
      name: "Governed / Business",
      sub: "Advanced workflows and rules",
      features: [
        "Advanced dynamic groups and rules",
        "Advanced access reviews",
      ],
      color: "#664de6",
    },
    {
      name: "Sovereign / Enterprise",
      sub: "Custom policy at scale",
      features: [
        "Custom hierarchy depth and models",
        "Custom access-review cadence and evidence",
      ],
      color: "#254ef7",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpPlans {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-plans {
              animation: fadeUpPlans 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-fade-up-plans">
        {/* Left Matrix Configuration Block */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              15 – TRUST & PLAN GATES
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight mb-12 max-w-2xl">
            Legally required access and correction is never paywalled.
          </h2>

          <div className="flex flex-col w-full border-t border-[#ebedf5]">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-7 border-b border-[#ebedf5] items-start text-[13px]"
              >
                {/* Tier Label Headers */}
                <div className="md:col-span-4 flex flex-col">
                  <span
                    className="font-bold text-[15px]"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </span>
                  <span className="text-[#9ea3ce] text-[11px] font-medium mt-0.5">
                    {tier.sub}
                  </span>
                </div>

                {/* Tier Features Checklist Parameters */}
                {tier.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="md:col-span-4 text-[#51567d] font-medium leading-relaxed flex items-start gap-1.5"
                  >
                    <span className="text-[#a2a7cb] font-normal select-none">
                      ·
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Strategic Team Workspace Layout Viewport */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[1.15]">
            <img
              src="/teams-and-groups/image 290.png"
              alt="Enterprise governance coordination workshop group"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
