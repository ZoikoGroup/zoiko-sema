import React from "react";
import Navbar from "@/components/navbar/Navbar";

export function PrivacyHero() {
  return (
    <section className="relative w-full min-h-[666px] bg-slate-900 bg-radial-[at_20%_15%] from-indigo-600/60 to-indigo-600/0 to 60% overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-black"></div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 pt-16 lg:pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm" />
            <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              PRIVACY & DATA PROTECTION
            </span>
          </div>

          <h1 className="w-full text-white text-5xl font-extrabold font-['Inter'] leading-[57.20px] mb-8">
            Govern workspace data<br />with privacy built into<br />every layer.
          </h1>

          <p className="text-white/70 text-base font-normal font-['Inter'] leading-7 mb-12 max-w-xl">
            Map what is collected, why it is used, who can access it, where it is processed, how long it is retained, and how workers can understand, correct, challenge, or request their data.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-[999px] text-white text-sm font-semibold font-['Inter'] leading-6">
              Request a demo
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-[999px] outline outline-1 outline-white/30 hover:bg-white/10 transition-colors text-white text-sm font-semibold font-['Inter'] leading-6">
              View privacy framework
            </button>
          </div>
          
          <p className="text-white/50 text-xs font-normal font-['Inter'] leading-5 max-w-lg">
            ZoikoTime supports privacy controls and evidence. Customers remain responsible for lawful configuration, notices, consultation, and use.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[540px] xl:w-[600px] h-80 md:h-96 lg:h-[400px] flex-shrink-0 bg-white rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] outline outline-1 outline-white/10 overflow-hidden relative">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/hero.jpg" 
            alt="Privacy Command Center" 
          />
        </div>

      </div>
    </section>
  );
}
