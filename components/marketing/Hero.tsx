import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#0B0F19] text-white px-6 py-16 md:py-24 overflow-hidden animate-fade-up">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            One governed workspace for modern marketing collaboration.
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Show campaign briefs, planning, content, assets, meetings,
            approvals, launch coordination, agencies, reviewed AI, reporting and
            reusable campaign knowledge inside one connected Zoiko Sema
            workspace.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold text-xs px-6 py-3 rounded-full transition-all shadow-lg shadow-blue-500/20">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0B0F19] font-semibold text-xs px-6 py-3 rounded-full transition-all border border-gray-200 shadow-sm">
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
          <img src="/marketing/hero.png" alt="Image" />
        </div>
      </div>
    </section>
  );
}
