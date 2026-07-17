import React from "react";

export function PrivacyArchitecture() {
  const cards = [
    {
      title: "Tenant isolation",
      desc: <>Deny cross-tenant access across data,<br/>jobs, exports, and support.</>
    },
    {
      title: "Data minimization",
      desc: <>Collection contracts allow only<br/>approved fields.</>
    },
    {
      title: "Purpose limitation",
      desc: <>Every category maps to an approved<br/>purpose and basis.</>
    },
    {
      title: "Role enforcement",
      desc: <>Server-side, deny-by-default, and<br/>independently auditable.</>
    }
  ];

  return (
    <section className="relative w-full bg-violet-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              PRIVACY ARCHITECTURE
            </span>
          </div>
          <h2 className="w-full md:w-[600px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            System-level invariants — not a one-line<br/>marketing claim.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-96 rounded-[20px] overflow-hidden shadow-md border border-slate-200/50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/proof-strip.jpg" 
            alt="Privacy architecture UI" 
          />
        </div>

        {/* Cards Row */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] h-28 px-7 py-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-center gap-1.5"
            >
              <h3 className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
