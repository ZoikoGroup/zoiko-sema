import React from "react";

export default function OrganizationIdentity() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-oi">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpOI {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-oi {
          animation: fadeUpOI 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Block */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Organization Identity
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            Global corporate profile and departmental structure.
          </p>
        </div>

        {/* Clean Image Frame Container */}
        <div>
          <img
            src="/settings/identity.png"
            alt="Organizational dashboard displaying department profiles and employee directories"
            className="w-full object-contain rounded-[32px] shadow-lg bg-[#FAF9FF]"
          />
        </div>
      </div>
    </section>
  );
}
