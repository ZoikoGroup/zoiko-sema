import React from "react";
import { ArrowRight } from "lucide-react";

export default function Governance() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="text-white px-6 py-20 relative overflow-hidden animate-fade-up-gov"
    >
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpGov {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-gov {
          animation: fadeUpGov 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Decorative subtle blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5F56FD]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#7C74FF] uppercase">
            GOVERNANCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-tight leading-[1.2] max-w-3xl mb-12">
          Roles, privacy, AI boundaries, retention, and prohibited uses.
        </h2>

        {/* Clean Image Frame Container */}
        <div>
          <img
            src="/alerts-notifications/governance.png"
            alt="Data governance dashboard layout and access controls map"
            className="w-full h-full object-contain rounded-[20px] mb-8"
          />
        </div>

        {/* CTA Link */}
        <div className="flex justify-center">
          <a
            href="#trust-center"
            className="group flex items-center gap-2 text-sm font-semibold text-[#8C84FF] hover:text-white transition-colors"
          >
            Visit Trust Center
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
