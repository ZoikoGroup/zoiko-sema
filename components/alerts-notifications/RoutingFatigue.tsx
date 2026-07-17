import React from "react";
import { Layers, HelpCircle, BellOff, VolumeX, Shuffle } from "lucide-react";

export default function RoutingFatigue() {
  const items = [
    {
      label: "Deduplication",
      icon: <Layers className="w-4 h-4 text-[#4F46E5]" />,
    },
    {
      label: "Suppression",
      icon: <BellOff className="w-4 h-4 text-[#4F46E5]" />,
    },
    {
      label: "Throttling",
      icon: <VolumeX className="w-4 h-4 text-[#4F46E5]" />,
    },
    {
      label: "Quiet hours",
      icon: <HelpCircle className="w-4 h-4 text-[#4F46E5]" />,
    },
    {
      label: "Escalation",
      icon: <Shuffle className="w-4 h-4 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-rf">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRF {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-rf {
          animation: fadeUpRF 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
            ROUTING AND FATIGUE CONTROLS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-[32px] font-extrabold text-[#0F172A] text-center tracking-tight leading-[1.2] max-w-3xl mb-12">
          Grouping, cooldowns, suppression, and quiet hours — by design.
        </h2>

        {/* Centered Large Image Container */}
        <div>
          <img
            src="/alerts-notifications/routing.png"
            alt="Advanced incident grouping, cooldown matrices, and routing rules workbench layout"
            className="w-full h-full object-contain rounded-[20px] mb-8"
          />
        </div>

        {/* Small Horizontal Control Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl py-4 px-5 rounded-[20px] border border-[#E7E7F2] shadow-sm transition-transform hover:-translate-y-0.5 duration-300"
            >
              <span className="text-xs font-bold text-[#1E293B] tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
