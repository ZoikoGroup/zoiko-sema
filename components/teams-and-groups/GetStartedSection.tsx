"use client";

import React from "react";

export default function GetStartedSection() {
  return (
    <section className="w-full bg-[#0f1225] text-white px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Call to Action Heading */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-white leading-tight">
            Ready for a workforce structure your workers can also see?
          </h2>
        </div>

        {/* Action Buttons Interface Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary Call to Action */}
          <button className="bg-[#2b56f5] hover:bg-[#2044cc] text-white font-bold text-[13px] px-6 py-4 rounded-xl transition-all shadow-sm whitespace-nowrap">
            Request a Demo
          </button>

          {/* Secondary Action */}
          <button className="bg-transparent border border-white/20 hover:border-white/40 text-white font-bold text-[13px] px-6 py-4 rounded-xl transition-all whitespace-nowrap">
            Start Free
          </button>

          {/* Platform Access Action */}
          <button className="bg-[#191e38] hover:bg-[#202747] text-[#a5a9cc] hover:text-white font-bold text-[13px] px-6 py-4 rounded-xl transition-all whitespace-nowrap">
            Open ZoikoTime Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
