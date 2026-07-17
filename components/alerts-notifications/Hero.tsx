import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="relative text-white px-6 py-12 md:py-18 overflow-hidden animate-fade-up-we"
    >
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpWE {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-we {
          animation: fadeUpWE 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Decorative Radial Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5F56FD]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7C74FF]">
              ALERTS & NOTIFICATIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight max-w-[620px]">
            Turn workforce exceptions into clear, reviewable action.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-slate-400 leading-8 text-base">
            Configure policy-aware alerts for time, breaks, overtime, data
            quality, integrations, and security — then route each event to the
            right reviewer with full context, quiet-hour controls, and audit
            history.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#2F54EB] px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-600 shadow-lg shadow-blue-500/20">
              Request a demo
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold hover:bg-white/5">
              Start free
            </button>

            <button className="group flex items-center gap-2 pl-2 text-sm font-semibold text-[#8C84FF] transition hover:text-white">
              Explore policy controls
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Feature Pills */}
          <div className="mt-10 flex flex-wrap gap-3 max-w-[620px]">
            {[
              "Policy-aware alerts",
              "Human review",
              "Worker transparency",
              "Notification controls",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-xs font-medium text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-8 max-w-[600px] text-xs italic text-slate-500">
            Alerts surface exceptions for review. They do not automatically
            determine intent, misconduct, performance, pay, or discipline.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[46%] flex justify-center lg:justify-end">
          <div className="w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
            <img
              src="/alerts-notifications/hero.png"
              alt="Workforce exception review"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
