import React from "react";
import { ArrowRight } from "lucide-react";

export default function IntegrationsReporting() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-ir">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpIr {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-ir {
          animation: fadeUpIr 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
            INTEGRATIONS AND REPORTING
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center tracking-tight leading-[1.2] max-w-3xl mb-12">
          Source systems, delivery channels, freshness, and exports.
        </h2>

        {/* Clean Image Frame Container */}
        <div>
          <img
            src="/alerts-notifications/integrations.png"
            alt="Integrations data pipeline and customizable reporting configuration"
            className="w-full h-full object-contain rounded-[20px] mb-8"
          />
        </div>

        {/* CTA Link */}
        <div className="flex justify-center">
          <a
            href="/zoikotime-integrations"
            className="group flex items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#3B30E3] transition-colors"
          >
            View integrations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
