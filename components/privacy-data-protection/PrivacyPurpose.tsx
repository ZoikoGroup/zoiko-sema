import React from "react";

export function PrivacyPurpose() {
  return (
    <section className="relative w-full min-h-[760px] bg-slate-900 bg-radial-[at_20%_15%] from-indigo-600/60 to-indigo-600/0 to 60% py-24 overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm" />
            <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              PURPOSE, MINIMIZATION AND PROHIBITED SIGNALS
            </span>
          </div>
          <h2 className="w-full md:w-[780px] text-white text-3xl font-extrabold font-['Inter'] leading-10">
            Activation is blocked until purpose, basis, and<br/>scope are complete.
          </h2>
        </div>

        {/* Content Layout */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Left Image Container */}
          <div className="w-full lg:w-1/2 rounded-[20px] overflow-hidden shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] outline outline-1 outline-white/10 relative aspect-[4/3] lg:aspect-auto">
            <img 
              className="w-full h-full object-cover" 
              src="/privacy-data/roles-gates.jpg" 
              alt="Data mapping illustration" 
            />
          </div>

          {/* Right Cards Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
            
            {/* Allowed Card */}
            <div className="bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[6px] p-6 flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-6">Allowed</h3>
              <p className="text-white/70 text-sm font-normal font-['Inter'] leading-6">
                Approved timestamps, minimum device metadata, disclosed location<br/>where necessary.
              </p>
            </div>

            {/* Prohibited Card */}
            <div className="bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[6px] p-6 flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-6">Prohibited</h3>
              <p className="text-white/70 text-sm font-normal font-['Inter'] leading-6">
                Hidden screenshots, keystroke content, webcam/microphone<br/>surveillance, protected-trait inference.
              </p>
            </div>

            {/* Activation Gate Card */}
            <div className="bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[6px] p-6 flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-6">Activation gate</h3>
              <p className="text-white/70 text-sm font-normal font-['Inter'] leading-6">
                Blocked until owner, purpose, basis, notice, and risk review are<br/>complete.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
