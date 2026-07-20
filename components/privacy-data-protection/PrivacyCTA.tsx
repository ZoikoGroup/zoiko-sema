import React from "react";
import Footer from "@/components/footer/Footer";

export function PrivacyCTA() {
  return (
    <>
      <section className="relative w-full bg-slate-900 bg-radial-[at_20%_15%] from-indigo-600/60 to-indigo-600/0 to 60% py-24 overflow-hidden">
        
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 bg-black"></div>
        </div>
        
        {/* Abstract Background Image */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img 
            src="/privacy-data/cta-bg.png" 
            alt="Background pattern" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
          
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm" />
            <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              GET STARTED
            </span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6 text-center max-w-2xl">
            Give workforce data a governed home.
          </h2>

          <p className="text-white/70 text-base font-normal font-['Inter'] leading-7 mb-12 text-center max-w-2xl">
            Request a guided demo, review the privacy framework, or contact our privacy team directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-[999px] text-white text-sm font-semibold font-['Inter'] leading-6">
              Request a demo
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-[999px] outline outline-1 outline-white/30 hover:bg-white/10 transition-colors text-white text-sm font-semibold font-['Inter'] leading-6">
              View privacy framework
            </button>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
}
