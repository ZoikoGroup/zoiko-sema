import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function WorkspaceSettingsHero() {
  return (
    <section className="relative bg-[#F3F2FD] text-[#0F172A] px-6 py-12 md:py-18 overflow-hidden animate-fade-up-wsh">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpWSH {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-wsh {
          animation: fadeUpWSH 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-md bg-[#E8E3FA]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span className="text-[10px] font-extrabold tracking-wider text-[#4F46E5] uppercase">
              Enterprise Settings Control Center
            </span>
          </div>

          <h1 className="text-4xl md:text-[42px] font-extrabold tracking-tight leading-[1.15] text-[#0F172A]">
            Manage every workspace setting from one governed control center.
          </h1>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Present one centralized Settings experience where organization
            identity, defaults, localization, notifications, billing, usage,
            personal preferences, lifecycle safeguards, approvals, ownership,
            audit history, and governance remain connected inside a secure
            enterprise workspace.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="group bg-black hover:bg-slate-900 text-white font-bold text-xs md:text-sm px-15 py-4 rounded-lg transition-all flex items-center gap-2">
              Open Control Center
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-[#0F172A] border border-black/10 font-bold text-xs md:text-sm px-10 py-4 rounded-lg transition-all">
              Documentation
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div>
          <img
            src="/settings/hero.png"
            alt="Centralized settings workspace control center configuration interface"
            className="w-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
