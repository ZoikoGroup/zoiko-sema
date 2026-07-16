import React from "react";
import { CheckCircle2, AlertTriangle, ServerCrash } from "lucide-react";

export default function ResilienceStatus() {
  const cards = [
    {
      status: "ACTIVE",
      title: "Systems Operational",
      desc: "All 4,200 store endpoints are synchronized with the central inventory core.",
      icon: (
        <CheckCircle2 className="w-5 h-5 text-[#22C55E] fill-[#22C55E]/10" />
      ),
      topBorder: "border-t-[6px] border-[#22C55E]",
    },
    {
      status: "ESCALATED",
      title: "Regional Outage",
      desc: "Critical escalation active in North-West district. Response team deployed.",
      icon: (
        <AlertTriangle className="w-5 h-5 text-[#EF4444] fill-[#EF4444]/10" />
      ),
      topBorder: "border-t-[6px] border-[#EF4444]",
    },
    {
      status: "INTEGRATION WARNING",
      title: "Legacy API Lag",
      desc: "ZoikoTime connector experiencing 400ms latency. Auto-recovery in progress.",
      icon: <ServerCrash className="w-5 h-5 text-[#F59E0B]" />,
      topBorder: "border-t-[6px] border-[#F59E0B]",
    },
  ];

  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] relative overflow-hidden animate-fade-up-res">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRes {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-res {
          animation: fadeUpRes 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl bg-[#F5F3F680] mx-auto px-6 py-18">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center tracking-tight mb-16">
          Enterprise-Grade Resilience
        </h2>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-[24px] p-8 shadow-xl flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 duration-300 ${card.topBorder}`}
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-extrabold tracking-widest text-[#64748B] uppercase">
                  {card.status}
                </span>
                <div className="flex-shrink-0">{card.icon}</div>
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
