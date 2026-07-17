import React from 'react';

export const GovContractorCoordination = () => {
  return (
    <section className="bg-[#12142d] flex justify-center w-full overflow-hidden text-white">
      <div className="w-[1440px] h-[767.41px] relative flex-shrink-0 bg-[#12142d]">
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.6)_0%,rgba(99,102,241,0)_60%)] pointer-events-none" />
          
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-indigo-400 rounded-full"></div>
          
          <div className="w-96 h-5 left-[528px] top-[88px] absolute text-center justify-center text-indigo-400 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            EXTERNAL CONTRACTOR & INTERAGENCY COORDINATION
          </div>
          
          {/* Headline */}
          <div className="w-[680px] h-20 left-[380px] top-[120.80px] absolute text-center justify-center text-white text-3xl font-extrabold font-inter leading-10">
            Sponsor, scope, expiry, and audit — for every<br/>external participant.
          </div>
          
          {/* Left Meeting Image Container */}
          <div className="w-[589.08px] h-96 left-[152px] top-[272.98px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[589.08px] h-[384px] left-0 top-0 absolute overflow-hidden">
                  <img className="w-[638px] h-96 left-[-25.90px] top-[-20.39px] absolute object-cover" src="/use-case-government/government-patterns.png" alt="Contractor and interagency coordination meeting" />
              </div>
          </div>
          
          {/* Right Card 1: Sponsor & purpose */}
          <div className="w-[490.92px] h-32 left-[797.08px] top-[272.98px] absolute bg-white/5 rounded-2xl border border-white/20 backdrop-blur-[6px] p-6 flex flex-col justify-center">
              <div className="text-white text-sm font-bold font-inter mb-2">Sponsor & purpose</div>
              <div className="text-white/70 text-sm font-normal font-inter leading-6">
                Authorized internal sponsor states purpose, partner, and end date.
              </div>
          </div>
          
          {/* Right Card 2: Scope */}
          <div className="w-[490.92px] h-32 left-[797.08px] top-[405.03px] absolute bg-white/5 rounded-2xl border border-white/20 backdrop-blur-[6px] p-6 flex flex-col justify-center">
              <div className="text-white text-sm font-bold font-inter mb-2">Scope</div>
              <div className="text-white/70 text-sm font-normal font-inter leading-6">
                Minimum necessary workspaces, files, and history.
              </div>
          </div>
          
          {/* Right Card 3: Offboarding */}
          <div className="w-[490.92px] h-[144px] left-[797.08px] top-[537.08px] absolute bg-white/5 rounded-2xl border border-white/20 backdrop-blur-[6px] p-6 flex flex-col justify-center">
              <div className="text-white text-sm font-bold font-inter mb-2">Offboarding</div>
              <div className="text-white/70 text-sm font-normal font-inter leading-6">
                Revoke sessions, preserve required evidence, and confirm records<br/>
                treatment.
              </div>
          </div>
      </div>
    </section>
  );
};
