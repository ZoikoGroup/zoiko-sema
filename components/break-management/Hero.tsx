import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#F3F2FD] text-[#0F172A] px-6 py-16 md:py-24 overflow-hidden animate-fade-up-wch">
      {/* Inline Animation Style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpWCH {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-wch {
          animation: fadeUpWCH 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0F172A]">
            Workforce Transparency & Automated Compliance.
          </h1>
          
          <p className="text-[#45464D] text-[18px] leading-relaxed max-w-120">
            Show one governed workspace connecting shift starts, scheduled breaks, meal periods, human reviews, and payroll sync while respecting labor laws and local jurisdictions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#000000] hover:bg-slate-900 text-white font-bold text-xs md:text-sm px-15 py-3.5 rounded-lg transition-all shadow-md">
              Schedule a Demo
            </button>
            <button className="bg-transparent hover:bg-black/5 text-[#0F172A] border border-black/10 font-bold text-xs md:text-sm px-15 py-3.5 rounded-lg transition-all">
              View Ecosystem
            </button>
          </div>
        </div>

        {/* Right Image Column (Parent div is completely clean; all styles on img) */}
        <div>
          <img 
            src="/break-management/hero.png" 
            alt="Workforce transparency and automated compliance workspace layout" 
            className="w-full h-full object-contain rounded-2xl shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
}