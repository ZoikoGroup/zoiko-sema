"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const checkItems = [
  "Auto-compiled daily reports",
  "Blocker escalation workflows",
];

export function AsyncStandupsSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-violet-50">
      <div
        ref={ref}
        className="max-w-[1184px] mx-auto px-6 md:px-10 lg:px-0 py-[72px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Image */}
        <div
          className={`flex-1 transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <img
            src="/Hybrid/async-standups.jpg"
            alt="Async Standups Dashboard"
            className="w-full max-w-[514px] h-auto rounded-xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl border border-neutral-300/30"
          />
        </div>

        {/* Right Content */}
        <div
          className={`flex-1 flex flex-col gap-6 transition-all duration-1000 delay-200 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h2 className="text-zinc-900 text-3xl font-semibold font-sans leading-10">
            Async Standups for Velocity
          </h2>

          <p className="text-zinc-700 text-lg font-normal font-['Inter'] leading-7">
            Replace draining daily calls with structured async updates. View
            progress bars, blockers, and manager reviews without needing
            everyone on a single call.
          </p>

          <div className="flex flex-col gap-4">
            {checkItems.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <img
                  src="/Hybrid/icon-check-blue.svg"
                  alt=""
                  className="size-5 shrink-0 mt-0.5"
                />
                <span className="text-zinc-900 text-base font-normal font-['Inter'] leading-6">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
