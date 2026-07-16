"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TimelineMappingSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white">
      <div
        ref={ref}
        className="max-w-[1184px] mx-auto px-6 md:px-10 lg:px-0 py-[72px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Content */}
        <div
          className={`flex-1 flex flex-col gap-6 transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-zinc-900 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">
            Precision Timeline Mapping
          </h2>

          <p className="text-zinc-700 text-lg font-normal font-['Inter'] leading-7">
            Visualize the entire team&apos;s day. See at a glance where shifts
            overlap for critical collaborative windows and where work is being
            handed off.
          </p>

          {/* Feature Card */}
          <div className="self-stretch p-6 bg-white/70 rounded-xl border border-slate-200/80 backdrop-blur-[6px] flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6">
              <div className="size-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="/Hybrid/icon-clock.svg"
                  alt=""
                  className="size-5"
                />
              </div>
              <h3 className="text-zinc-900 text-sm font-semibold font-['Hanken_Grotesk'] leading-5 tracking-wide">
                Dynamic Overlap Engine
              </h3>
            </div>
            <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-5">
              Our AI predicts the best 30-minute window for a global sync based
              on
              <br />
              historical team activity and local time zones.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`flex-1 transition-all duration-1000 delay-200 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src="/Hybrid/timeline-mapping.jpg"
            alt="Precision Timeline Mapping"
            className="w-full max-w-[514px] h-auto rounded-xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl border border-neutral-300/30"
          />
        </div>
      </div>
    </section>
  );
}
