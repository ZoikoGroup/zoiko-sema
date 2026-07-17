import React from "react";

export function PrivacyProofStrip() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              PRIVACY PROOF STRIP
            </span>
          </div>
          <h2 className="w-full md:w-[680px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Minimization, rights, access, retention,<br/>residency, and audit — at a glance.
          </h2>
        </div>

        {/* Image Container */}
        <div className="w-full max-w-[1136px] h-80 rounded-[20px] overflow-hidden shadow-lg border border-slate-100 bg-slate-50 relative">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/data-inventory.jpg" 
            alt="Laptop showing privacy dashboard" 
          />
        </div>

      </div>
    </section>
  );
}
