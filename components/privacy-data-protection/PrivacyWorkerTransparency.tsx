import React from "react";

export function PrivacyWorkerTransparency() {
  const cards = [
    {
      title: "Least privilege",
      desc: <>Deny by default; managers see only permitted<br/>operational records for their team.</>
    },
    {
      title: "Worker view",
      desc: <>Own records, source, notices, corrections, and<br/>case outcomes — never peer data.</>
    },
    {
      title: "Correction & challenge",
      desc: <>Human review considers evidence; system output<br/>is never the final adverse decision.</>
    }
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              ACCESS AND WORKER TRANSPARENCY
            </span>
          </div>
          <h2 className="w-full md:w-[780px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Least privilege for admins. Full visibility for the<br/>worker whose data it is.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-96 rounded-[20px] overflow-hidden shadow-md border border-slate-100 bg-slate-50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/architecture.jpg" 
            alt="Worker transparency UI" 
          />
        </div>

        {/* Cards Row */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] h-28 px-7 py-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-center gap-1.5"
            >
              <h3 className="text-slate-900 text-sm font-bold font-['Inter'] leading-6">
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
