import React from "react";

export default function HumanInTheLoop() {
  return (
    <section className="relative bg-[#F3F2FD] text-[#0F172A] px-6 py-16 md:py-24 overflow-hidden animate-fade-up-hitl">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpHITL {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-hitl {
          animation: fadeUpHITL 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
              MANAGEMENT GOVERNANCE
            </span>
          </div>

          <h2 className="text-4xl md:text-[42px] max-w-80 font-extrabold tracking-tight leading-[1.15] text-[#0F172A]">
            Human-in-the-Loop Review Center.
          </h2>

          <p className="text-[#45464D] text-sm md:text-base leading-relaxed max-w-lg">
            Compliance isn't just binary. Our Review Center connects automated
            flags with human context, allowing managers to verify exceptions and
            worker explanations before they impact payroll.
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm min-w-[140px] flex-1 sm:flex-initial">
              <div className="text-3xl font-black text-[#4F46E5] tracking-tight">
                99.8%
              </div>
              <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Audit Accuracy
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm min-w-[140px] flex-1 sm:flex-initial">
              <div className="text-3xl font-black text-[#4F46E5] tracking-tight">
                -40%
              </div>
              <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Review Time
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column (Parent div is completely clean; all styles on img) */}
        <div>
          <img
            src="/break-management/pc.png"
            alt="Human-in-the-loop exception dashboard mockup on desktop monitor"
            className="w-full object-contain rounded-2xl shadow-xl border border-slate-100 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
