"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const metrics = [
  {
    title: "Handoff Health",
    desc: "Track how effectively tasks move between time zones. Identify bottlenecks before they stall progress.",
    borderColor: "border-l-sky-700",
    titleColor: "text-sky-700",
  },
  {
    title: "Team Adoption",
    desc: "Measure how frequently teams are utilizing async updates vs. traditional meetings.",
    borderColor: "border-l-black",
    titleColor: "text-black",
  },
  {
    title: "Meeting Follow-through",
    desc: "Ensure AI-generated action items are being addressed within the expected SLA windows.",
    borderColor: "border-l-slate-500",
    titleColor: "text-slate-500",
  },
];

export function HealthMetricsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-6 md:px-12 pt-[120px] lg:pt-[180px] pb-16 flex flex-col gap-16"
      >
        {/* Header */}
        <div
          className={`flex flex-col items-center transition-all duration-700 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-center text-zinc-900 text-3xl font-semibold font-sans leading-10">
            Quantifiable Health Metrics
          </h2>
          <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6 mt-2">
            Monitor adoption and collaboration health with enterprise-grade
            analytics.
          </p>
        </div>

        {/* Content Grid */}
        <div
          className={`flex flex-col lg:flex-row gap-8 transition-all duration-1000 delay-200 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Dashboard Image */}
          <div className="flex-1 flex items-start justify-center">
            <img
              src="/Hybrid/health-metrics.jpg"
              alt="Reporting Dashboard"
              className="w-full max-w-[704px] h-auto rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg border border-neutral-300/30"
            />
          </div>

          {/* Metric Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {metrics.map((metric, i) => (
              <div
                key={metric.title}
                className={`p-6 bg-white/70 rounded-xl border border-slate-200/80 ${metric.borderColor} border-l-4 backdrop-blur-[6px] flex flex-col gap-1 hover:shadow-md transition-all duration-500`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <h3
                  className={`${metric.titleColor} text-sm font-semibold font-sans leading-5 tracking-wide`}
                >
                  {metric.title}
                </h3>
                <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-5">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
