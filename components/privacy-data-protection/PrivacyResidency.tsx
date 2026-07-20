import React from "react";

export function PrivacyResidency() {
  const items = [
    "Tenant region",
    "Legal hold",
    "Deletion evidence",
    "Sub-processors"
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              RESIDENCY, RETENTION, AND SHARING
            </span>
          </div>
          <h2 className="w-full md:w-[600px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Regions, holds, deletion evidence, sub-<br/>processors, and disconnect behavior.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-96 rounded-[20px] overflow-hidden shadow-md border border-slate-100 bg-slate-50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/command-center.jpg" 
            alt="World map representing data regions" 
          />
        </div>

        {/* Items Row */}
        <div className="w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] p-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center"
            >
              <span className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs font-normal font-['Inter'] leading-5 text-center max-w-2xl">
          No "deleted everywhere" claim unless verified. Backups, integrations, and failures are shown explicitly.
        </p>

      </div>
    </section>
  );
}
