"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const stats = [
  { value: "99.9%", label: "UPTIME SLA" },
  { value: "500+", label: "INTEGRATIONS" },
];

export function ConnectedArchitectureSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-violet-50">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] py-[72px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Content */}
        <div
          className={`flex-1 max-w-[512px] flex flex-col gap-6 transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-zinc-900 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">
            A truly connected architecture
          </h2>

          <p className="text-zinc-700 text-lg font-normal font-['Inter'] leading-7">
            Zoiko Sema doesn&apos;t just sit on top of your work; it bridges it.
            <br />
            Every message, meeting, and file is indexed for context-aware
            collaboration.
          </p>

          {/* Stats */}
          <div className="pt-6 flex items-start gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 flex flex-col gap-1">
                <span className="text-sky-700 text-2xl font-semibold font-['Hanken_Grotesk'] leading-8">
                  {stat.value}
                </span>
                <span className="text-zinc-700 text-xs font-medium font-['Hanken_Grotesk'] uppercase leading-4">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`flex-1 transition-all duration-1000 delay-200 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src="/Hybrid/connected-architecture.jpg"
            alt="ZoikoTime Bridge - Connected Architecture"
            className="w-full max-w-[648px] h-auto rounded-xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl border border-neutral-300/30"
          />
        </div>
      </div>
    </section>
  );
}
