import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function AutomatedBreakCompliance() {
  const highlights = [
    "Real-time Jurisdiction Adapters",
    "Dynamic Shift Rebalancing",
    "Automated Payroll Flagging",
  ];

  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-abc">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpABC {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-abc {
          animation: fadeUpABC 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left */}
        <div className="lg:mt-20">
          <img
            src="/break-management/flow.png"
            alt="Automated break compliance pipeline illustration"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-[48px] max-w-80 font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
            Automated Break Compliance Workflow.
          </h2>

          <p className="text-[#45464D] max-w-md">
            Our proprietary engine automatically triggers alerts, schedules
            meals, and flags discrepancies in real-time. Experience a connected
            thread of accountability from clock-in to final settlement.
          </p>

          {/* List highlights using Lucide CheckCircle2 */}
          <div className="space-y-3 pt-2">
            {highlights.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
                <span className="text-xs md:text-sm font-bold text-[#1E293B]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
