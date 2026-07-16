import React from 'react';

export const ProjectManagementStakeholderSection = () => {
  return (
    <section className="bg-slate-900 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[664.80px] relative bg-slate-900 flex-shrink-0">
          <div className="w-72 h-4 left-[131px] top-[186px] absolute justify-center text-teal-400 text-xs font-bold font-inter tracking-wider">
            CLIENT & STAKEHOLDER COLLABORATION
          </div>
          
          <div className="w-[500px] h-28 left-[131px] top-[214.40px] absolute justify-center text-white text-3xl font-extrabold font-plus-jakarta leading-10">
            Share the right project<br/>context with the right<br/>audience.
          </div>
          
          <div className="w-[500px] h-11 left-[131px] top-[370px] absolute justify-center text-slate-300 text-base font-normal font-inter leading-6">
            Clients and partners collaborate inside a scoped room —<br/>
            never with default access to internal context.
          </div>
          
          {/* Org Policy Card */}
          <div className="w-64 h-28 left-[641px] top-[98px] absolute bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col justify-center">
              <div className="text-teal-400 text-xs font-bold font-inter mb-2">Organization policy</div>
              <div className="text-slate-400 text-xs font-normal font-inter leading-4">Domains, guest defaults, retention</div>
          </div>
          
          {/* Project Policy Card */}
          <div className="w-64 h-28 left-[731px] top-[178px] absolute bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col justify-center">
              <div className="text-teal-400 text-xs font-bold font-inter mb-2">Project policy</div>
              <div className="text-slate-400 text-xs font-normal font-inter leading-4">Client room, artifact permissions</div>
          </div>
          
          {/* Invitation Card */}
          <div className="w-64 h-24 left-[831px] top-[263px] absolute bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col justify-center">
              <div className="text-teal-400 text-xs font-bold font-inter mb-2">Invitation</div>
              <div className="text-slate-400 text-xs font-normal font-inter leading-4">Sponsor, role, purpose, expiry</div>
          </div>
          
          {/* Review Workflow Card */}
          <div className="w-64 h-24 left-[941px] top-[338px] absolute bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col justify-center">
              <div className="text-teal-400 text-xs font-bold font-inter mb-2">Review workflow</div>
              <div className="text-slate-400 text-xs font-normal font-inter leading-4">Draft, internal review, external share</div>
          </div>
          
          {/* Offboarding Card */}
          <div className="w-60 h-24 left-[1041px] top-[398px] absolute bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col justify-center">
              <div className="text-teal-400 text-xs font-bold font-inter mb-2">Offboarding</div>
              <div className="text-slate-400 text-xs font-normal font-inter leading-4">Revoke, preserve records, audit</div>
          </div>
          
          {/* Bottom callout */}
          <div className="w-[949.60px] h-14 left-[245.20px] top-[524px] absolute bg-teal-400/10 rounded-xl outline outline-1 outline-offset-[-1px] outline-teal-400/25 flex items-center justify-center">
              <span className="text-teal-400 text-xs font-semibold font-inter text-center">
                External updates must be audience-scoped, reviewed, versioned, and reversible.
              </span>
          </div>
      </div>
    </section>
  );
};
