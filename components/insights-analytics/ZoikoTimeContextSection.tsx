import React from "react";

export default function ZoikoTimeContextSection() {
  const cards = [
    {
      badge: "Business · Enterprise",
      title: "Customer-configured scope",
      desc: "Map approved Sema workspaces and<br/>teams to authorized ZoikoTime units. Only<br/>aggregates defined in the integration<br/>contract flow — no communication content<br/>transfer."
    },
    {
      badge: "Privacy modes",
      title: "Jurisdiction-aware aggregation",
      desc: "Customer-configured, jurisdiction-aware<br/>signal availability and minimum-cohort<br/>aggregation. Privacy mode is set by the<br/>customer, not assumed."
    },
    {
      badge: "Auditable",
      title: "Connection & sync status",
      desc: "Not connected, available, pending,<br/>connected, needs review, stale, error, or<br/>disabled — each with an audit trail and<br/>support route."
    }
  ];

  return (
    <section className="w-full bg-[#0B1120] py-16 lg:py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-[#0284C7] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
            ZoikoTime — Optional governed context
          </span>
          <h2 className="text-white text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            Add approved aggregate<br />workforce context
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base font-normal font-['Inter'] leading-7 max-w-2xl mt-2">
            Business and Enterprise customers can connect ZoikoTime under customer-<br/>controlled privacy, mapping, and policy settings. It's never implied in every plan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1020px] justify-items-center">
          {cards.map((card, i) => (
            <div key={i} className="w-80 px-5 pt-6 pb-5 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-1.5 hover:bg-white/10 transition-colors">
                <div className="px-2 py-[3px] bg-[#0284C7]/20 rounded-full outline outline-1 outline-offset-[-1px] outline-[#0284C7]/50 inline-flex justify-start items-start">
                    <div className="justify-center text-white text-[10px] font-bold font-['Inter'] leading-4">
                      {card.badge}
                    </div>
                </div>
                <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-white text-base font-bold font-['Plus_Jakarta_Sans'] leading-5">
                      {card.title}
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div 
                      className="self-stretch justify-center text-[#94A3B8] text-sm font-normal font-['Inter'] leading-5 mt-1"
                      dangerouslySetInnerHTML={{ __html: card.desc }}
                    />
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
