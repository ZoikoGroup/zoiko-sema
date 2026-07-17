import React from "react";
import Image from "next/image";

export function ProductHero() {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <div className="text-violet-400 text-xs font-bold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            ZoikoTime Platform
          </div>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight mb-6">
            Workforce assurance<br />with evidence, context,<br />and human oversight.
          </h1>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-7 max-w-lg mb-10">
            ZoikoTime helps organizations verify approved work sessions, apply
            workforce policies, surface explainable exceptions, and preserve
            reviewable evidence — while giving workers clear notice, visibility, and
            correction routes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="h-12 px-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-base font-bold font-['Inter'] hover:bg-blue-700 transition-colors">
              Request a Demo
            </button>
            <button className="h-12 px-7 bg-white rounded-full border border-white/25 flex items-center justify-center text-slate-900 text-base font-bold font-['Inter'] hover:bg-slate-100 transition-colors">
              Download Free
            </button>
            <a href="#how-it-works" className="text-teal-400 text-sm font-bold font-['Inter'] hover:underline ml-2">
              See how it works →
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="border-r border-white/20 pr-4">
              <span className="text-slate-400 text-xs font-semibold font-['Inter']">Human-in-command AI</span>
            </div>
            <div className="border-r border-white/20 pr-4">
              <span className="text-slate-400 text-xs font-semibold font-['Inter']">Policy-based assurance</span>
            </div>
            <div className="border-r border-white/20 pr-4">
              <span className="text-slate-400 text-xs font-semibold font-['Inter']">Worker transparency</span>
            </div>
            <div>
              <span className="text-slate-400 text-xs font-semibold font-['Inter']">Audit-ready evidence</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-5 max-w-lg">
            No automatic employment or payroll decision from AI alone. Data collection and visibility
            depend on approved purpose, policy, role, jurisdiction, and worker notice.
          </p>
        </div>

        {/* Right Content - Floating Image */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[714px] aspect-[3/2] bg-slate-900 rounded-3xl shadow-[0px_40px_90px_-20px_rgba(0,0,0,0.50)] border-l border-r border-t border-white/10 overflow-hidden relative">
            <img
              src="/product-management/hero-dashboard.png"
              alt="ZoikoTime Dashboard Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
