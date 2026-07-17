import React from "react";

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col items-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpDelayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-delayed {
          animation: fadeUpDelayed 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Section Header */}
      <div
        className="text-center max-w-2xl mb-12 md:mb-16 animate-fade-up-delayed"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a4bf7]"></span>
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#2a4bf7] uppercase">
            INTEGRATIONS AND EVIDENCE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-[#0f1124]">
          Connected to your systems. Ready for an audit.
        </h2>
      </div>

      {/* Grid Features */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl animate-fade-up-delayed"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Feature 1 */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">
            HRIS & scheduling
          </h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            Worker type, jurisdiction, and schedule context stay mapped and
            current.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">Payroll</h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            Locked periods and displacement aspects — never a silent overwrite.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">
            Audit & retention
          </h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            Every version, approval, and exception retained on schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
