import React from "react";
import Image from "next/image";

export default function MetricMethodologySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-[#4F46E5] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
            Metric methodology
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            A number isn't publishable until its<br />meaning is
          </h2>
          <p className="text-[#475569] text-base font-normal font-['Inter'] leading-7 max-w-2xl mt-2">
            Every KPI ships with a governed definition, formula, source, eligible population, exclusions, freshness, owner, and privacy rule.
          </p>
        </div>

        {/* Big Image */}
        <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] border border-gray-100">
          <Image 
            src="/insights/methodology-dashboard.png" 
            alt="Team looking at dashboard displays"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
