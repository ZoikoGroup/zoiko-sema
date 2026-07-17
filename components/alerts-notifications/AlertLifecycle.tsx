import React from "react";
import {
  Target,
  Search,
  CheckCircle,
  ShieldAlert,
  BadgeHelp,
} from "lucide-react";

export default function AlertLifecycle() {
  const steps = [
    {
      num: 1,
      label: "Detect",
      color: "bg-[#2563EB] text-white",
      icon: <ShieldAlert className="w-3.5 h-3.5" />,
    },
    {
      num: 2,
      label: "Explain",
      color: "bg-[#7C3AED] text-white",
      icon: <BadgeHelp className="w-3.5 h-3.5" />,
    },
    {
      num: 3,
      label: "Acknowledge",
      color: "bg-[#059669] text-white",
      icon: <CheckCircle className="w-3.5 h-3.5" />,
    },
    {
      num: 4,
      label: "Investigate",
      color: "bg-[#D97706] text-white",
      icon: <Search className="w-3.5 h-3.5" />,
    },
    {
      num: 5,
      label: "Resolve",
      color: "bg-[#1E293B] text-white",
      icon: <Target className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-al">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpAL {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-al {
          animation: fadeUpAL 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
            ALERT LIFECYCLE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center tracking-tight leading-[1.2] max-w-3xl mb-12">
          Detect, explain, review, decide, resolve — with a human at every gate.
        </h2>

        {/* Big Aspect-Ratio Image Slot */}
        <div>
          <img
            src="/alerts-notifications/lifecycle.png"
            alt="Step by step audit logging and human-in-the-loop validation flow"
            className="w-full h-full object-contain mb-8 rounded-3xl"
          />
        </div>

        {/* Step Cards Row (Grid representation instead of layout colspans) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col items-start gap-3"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step.color}`}
              >
                {step.num}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F172A]">
                  {step.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
