import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const HeroSection = () => {
  return (
    <section className="w-full relative bg-slate-900 overflow-hidden flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col lg:flex-row justify-between items-center gap-12 z-10">
        <div className="w-full lg:w-[560px] flex flex-col justify-start items-start gap-6">
          <div className="inline-flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-[1.5px] border-cyan-400"></div>
            <span className="text-cyan-400 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              Use Case · Client Call Follow-Up
            </span>
          </div>
          
          <h1 className={`${plusJakartaSans.className} text-white text-4xl lg:text-5xl font-extrabold leading-tight`}>
            Turn client calls into<br />
            <span className="text-blue-400">trusted follow-ups,<br />clear owners, and next<br />steps.</span>
          </h1>
          
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-7">
            Zoiko Sema helps client-facing teams capture client commitments, draft follow-ups, assign internal owners, update deal context, and keep external communication governed.
          </p>
          
          <div className="flex flex-row items-center gap-4 pt-2">
            <Link href="/get-a-demo" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full flex justify-center items-center shadow-lg shadow-blue-900/50">
              <span className={`${plusJakartaSans.className} text-white text-sm font-semibold`}>Get a demo</span>
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-white hover:bg-slate-50 transition-colors rounded-full border border-slate-300 flex justify-center items-center">
              <span className={`${plusJakartaSans.className} text-slate-900 text-sm font-semibold`}>Talk to sales</span>
            </Link>
          </div>
          
          <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed max-w-[500px]">
            Built for sales, success, consulting, and service teams that need clearer follow-through after every client conversation.
          </p>
        </div>
        
        <div className="w-full lg:w-[574px]">
          <img 
            src="/call/hero-dashboard.png" 
            alt="Follow-up Dashboard" 
            className="w-full h-auto rounded-[20px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
