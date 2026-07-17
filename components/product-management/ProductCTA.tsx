import React from "react";

export function ProductCTA() {
  return (
    <section className="relative w-full bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-xl">
            Ready for workforce assurance your workers can also see?
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-[77px] text-white text-base font-bold font-['Inter']">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-[77px] outline outline-1 outline-white/25 hover:bg-white/10 transition-colors text-white text-base font-bold font-['Inter']">
              Download Free
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 transition-colors rounded-[77px] text-slate-300 text-base font-bold font-['Inter']">
              Open ZoikoTime Dashboard
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
