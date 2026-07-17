import React from "react";

export function PrivacyAIGovernance() {
  return (
    <section className="relative w-full bg-slate-900 bg-radial-[at_20%_15%] from-indigo-600/60 to-indigo-600/0 to 60% py-24 overflow-hidden">
      
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
              AI GOVERNANCE AND INCIDENT RESPONSE
            </span>
          </div>
          <h2 className="w-full md:w-[600px] text-white text-3xl font-extrabold font-['Inter'] leading-10">
            Human-in-command AI. Contained,<br/>assessed, and disclosed incidents.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-96 rounded-[20px] overflow-hidden shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] outline outline-1 outline-white/10 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/ai-governance.jpg" 
            alt="AI Governance Dashboard" 
          />
        </div>

        {/* Statement Box */}
        <div className="w-full max-w-6xl bg-violet-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-6 flex items-center justify-center text-center">
          <p className="text-gray-700 text-sm font-normal font-['Inter'] leading-6 max-w-4xl text-left md:text-center">
            AI cannot issue final discipline, termination, pay, promotion, or legal decisions. Sensitive inference — protected traits, health, emotion, union, or political signals — is<br/>blocked by policy.
          </p>
        </div>

      </div>
    </section>
  );
}
