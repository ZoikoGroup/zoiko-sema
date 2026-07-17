import React from 'react';

export const GovCoordinationHub = () => {
  return (
    <section className="bg-violet-50 flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[915.11px] relative flex-shrink-0 bg-violet-50">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-64 h-5 left-[591.10px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            GOVERNMENT COORDINATION HUB
          </div>
          
          {/* Headline */}
          <div className="w-[700px] h-20 left-[370px] top-[120.80px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Briefings, handoffs, records state, and<br/>external access — in one screen.
          </div>
          
          {/* Dashboard Image */}
          <div className="w-[1136px] h-[479px] left-[152.10px] top-[248.72px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-[478.75px] left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1136px] h-[757px] left-[0.10px] top-[-44px] absolute object-cover" src="/use-case-government/coordination-hub-photo.png" alt="Government coordination hub dashboard panel mockup" />
              </div>
          </div>
          
          {/* Card 1: Mission coordination queue */}
          <div className="w-64 h-28 left-[152px] top-[764.72px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] border border-slate-200 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-xs font-bold font-inter leading-5 mb-1.5">Mission coordination queue</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">Owner, receiving office, due time,<br/>status, and sensitivity.</div>
          </div>
          
          {/* Card 2: Briefing panel */}
          <div className="w-64 h-28 left-[441px] top-[764.72px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] border border-slate-200 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-xs font-bold font-inter leading-5 mb-1.5">Briefing panel</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">Agenda, participants, reviewed<br/>summary, and audience.</div>
          </div>
          
          {/* Card 3: Records review panel */}
          <div className="w-64 h-28 left-[730px] top-[764.72px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] border border-slate-200 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-xs font-bold font-inter leading-5 mb-1.5">Records review panel</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">Schedule mapping, retention, hold,<br/>redaction, export.</div>
          </div>
          
          {/* Card 4: External access panel */}
          <div className="w-64 h-28 left-[1019px] top-[764.72px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] border border-slate-200 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-xs font-bold font-inter leading-5 mb-1.5">External access panel</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">Sponsor, domain, scope, expiry, and<br/>review.</div>
          </div>
      </div>
    </section>
  );
};
