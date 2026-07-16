import React from 'react';

export const ProjectManagementControlsSection = () => {
  return (
    <section className="bg-slate-50 flex justify-center w-full border-t border-b border-violet-100 overflow-hidden">
      <div className="w-[1440px] h-[674px] relative flex-shrink-0">
          <div className="w-40 h-4 left-[642.98px] top-[84px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            DELIVERY CONTROLS
          </div>
          <div className="w-[811.71px] h-11 left-[314.33px] top-[114px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Make delivery uncertainty explicit and auditable.
          </div>
          
          <div className="w-[1001.60px] h-80 left-[219.20px] top-[204.40px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden">
              {/* RISK */}
              <div className="w-[1000px] h-20 left-[0.80px] top-[0.80px] absolute border-l-[4.80px] border-b-[0.80px] border-yellow-600 flex items-center px-8 justify-between">
                  <div className="w-20">
                      <span className="text-yellow-600 text-xs font-extrabold font-inter tracking-wide uppercase">RISK</span>
                  </div>
                  <div className="flex-1">
                      <span className="text-slate-600 text-sm font-normal font-inter leading-5">Probability, impact, owner, mitigation, trigger, review date, and state.</span>
                  </div>
                  <button className="w-28 h-8 bg-slate-50 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-violet-100 hover:bg-slate-100 transition-colors flex items-center justify-center">
                      <span className="text-violet-600 text-xs font-semibold font-inter">State + audit</span>
                  </button>
              </div>
              
              {/* ISSUE */}
              <div className="w-[1000px] h-20 left-[0.80px] top-[78.40px] absolute border-l-[4.80px] border-b-[0.80px] border-red-500 flex items-center px-8 justify-between">
                  <div className="w-20">
                      <span className="text-red-500 text-xs font-extrabold font-inter tracking-wide uppercase">ISSUE</span>
                  </div>
                  <div className="flex-1">
                      <span className="text-slate-600 text-sm font-normal font-inter leading-5">Severity, owner, workaround, target resolution, and escalation.</span>
                  </div>
                  <button className="w-28 h-8 bg-slate-50 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-violet-100 hover:bg-slate-100 transition-colors flex items-center justify-center">
                      <span className="text-violet-600 text-xs font-semibold font-inter">State + audit</span>
                  </button>
              </div>
              
              {/* CHANGE */}
              <div className="w-[1000px] h-20 left-[0.80px] top-[156.00px] absolute border-l-[4.80px] border-b-[0.80px] border-violet-600 flex items-center px-8 justify-between">
                  <div className="w-20">
                      <span className="text-violet-600 text-xs font-extrabold font-inter tracking-wide uppercase">CHANGE</span>
                  </div>
                  <div className="flex-1">
                      <span className="text-slate-600 text-sm font-normal font-inter leading-5">Reason, scope/date/cost impact, requester, approver, and decision.</span>
                  </div>
                  <button className="w-28 h-8 bg-slate-50 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-violet-100 hover:bg-slate-100 transition-colors flex items-center justify-center">
                      <span className="text-violet-600 text-xs font-semibold font-inter">State + audit</span>
                  </button>
              </div>
              
              {/* DECISION */}
              <div className="w-[1000px] h-20 left-[0.80px] top-[233.60px] absolute border-l-[4.80px] border-b-[0.80px] border-teal-700 flex items-center px-8 justify-between">
                  <div className="w-20">
                      <span className="text-teal-700 text-xs font-extrabold font-inter tracking-wide uppercase">DECISION</span>
                  </div>
                  <div className="flex-1">
                      <span className="text-slate-600 text-sm font-normal font-inter leading-5">Rationale, evidence, approver, date, affected objects, and supersedes.</span>
                  </div>
                  <button className="w-28 h-8 bg-slate-50 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-violet-100 hover:bg-slate-100 transition-colors flex items-center justify-center">
                      <span className="text-violet-600 text-xs font-semibold font-inter">State + audit</span>
                  </button>
              </div>
          </div>
          
          {/* Bottom Callout box */}
          <div className="w-[1049.60px] h-14 left-[195.20px] top-[540.40px] absolute bg-yellow-600/10 rounded-xl outline outline-1 outline-offset-[-1px] outline-yellow-600/30 flex items-center pl-[24.80px]">
              <span className="text-yellow-700 text-xs font-semibold font-inter">
                No unexplained red/amber/green: every health status has a source, formula, owner, freshness, and next action.
              </span>
          </div>
      </div>
    </section>
  );
};
