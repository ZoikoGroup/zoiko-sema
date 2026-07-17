import React from "react";

export default function HighRiskWorkflow() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-hrw">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpHRW {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-hrw {
          animation: fadeUpHRW 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col space-y-12 items-center text-center">
        {/* Header Block */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            High-Risk Change Workflow
          </h2>
          <p className="text-[#44474F] text-xs md:text-sm leading-relaxed">
            Changes to critical security settings trigger an institutional-grade
            approval sequence, ensuring no unauthorized modifications reach
            production.
          </p>
        </div>

        {/* Clean Image Frame Container */}
        <div className="w-full">
          <img
            src="/settings/risk.png"
            alt="Multi-step institutional security authentication and approval sequence visualization"
            className="w-full aspect-[2.1/1] object-contain rounded-[32px] border border-slate-900/10 shadow-2xl bg-[#090D1F]"
          />
        </div>
      </div>
    </section>
  );
}
