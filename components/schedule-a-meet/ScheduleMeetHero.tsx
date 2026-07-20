import React from "react";

export function ScheduleMeetHero() {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start pr-0 lg:pr-8">
          <div className="text-blue-600 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            SEMA MEET · SCHEDULE A MEETING
          </div>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight mb-6">
            Schedule a governed<br className="hidden lg:block" /> meeting in minutes.
          </h1>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-7 max-w-lg mb-10">
            Coordinate calendars, time zones, and guests, resolve policy before sending, and keep every event connected to the right workspace and outcome — one idempotent invitation at a time.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="h-12 px-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-base font-bold font-['Inter'] hover:bg-blue-700 transition-colors">
              Schedule a Meeting
            </button>
            <a href="#scheduler" className="text-blue-600 text-sm font-bold font-['Inter'] hover:underline">
              See the scheduler →
            </a>
          </div>
          <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-5 max-w-md">
            Only permissioned free/busy data is used. No activity, presence, or productivity inference from calendar availability.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[740px] aspect-[3/2] bg-slate-900 rounded-3xl shadow-[0px_40px_90px_-20px_rgba(0,0,0,0.50)] border outline outline-1 outline-white/10 overflow-hidden relative">
            <img
              src="/schedule-a-meet/hero.png"
              alt="Schedule a governed meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
