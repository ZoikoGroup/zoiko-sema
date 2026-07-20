import React from "react";
import { ShieldAlert, History } from "lucide-react";

export default function ComprehensiveGovernance() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-cg">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCG {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-cg {
          animation: fadeUpCG 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Comprehensive Governance Modules
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
            Navigate through specialized configuration environments designed for
            institutional-scale security.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Side: Modular Dashboard Image Frame (Parent is strictly clean) */}
          <div className="lg:col-span-7">
            <img
              src="/settings/modules.png"
              alt="Grid matrix visualization of interconnected security governance modules"
              className="w-full object-contain rounded-[32px]"
            />
          </div>

          {/* Right Side: Stacked Focus Features */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Box 1: Role Separation */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="p-2 bg-[#EEF2FF] rounded-lg w-9 h-9 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#0F172A] tracking-tight">
                Role Separation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Configure precise access controls with multi-layered permission
                matrices.
              </p>
            </div>

            {/* Box 2: Audit History */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="p-2 bg-[#EEF2FF] rounded-lg w-9 h-9 flex items-center justify-center">
                <History className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#0F172A] tracking-tight">
                Audit History
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Every change is tracked, recorded, and attributed for permanent
                oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
