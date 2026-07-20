import React from "react";

export function PrivacyDataInventory() {
  const categories = [
    "Category",
    "Source",
    "Purpose",
    "Lawful basis",
    "Retention",
    "Owner"
  ];

  return (
    <section className="relative w-full bg-violet-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              DATA INVENTORY AND PROCESSING REGISTER
            </span>
          </div>
          <h2 className="w-full md:w-[700px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Every category — source, purpose, basis,<br/>sensitivity, retention, and owner.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-96 rounded-[20px] overflow-hidden shadow-md border border-slate-200/50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/worker-transparency.jpg" 
            alt="Data Inventory UI with warehouse background" 
          />
        </div>

        {/* Categories Row */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center lg:justify-between gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] py-4 px-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 min-w-[140px] md:min-w-[160px] flex items-center"
            >
              <span className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">
                {cat}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
