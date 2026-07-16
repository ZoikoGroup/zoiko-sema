import React from 'react';

export const ProjectManagementComparisonSection = () => {
  return (
    <section className="bg-slate-50 flex justify-center w-full border-t border-b border-violet-100 overflow-hidden">
      <div className="w-[1440px] h-[960px] relative flex-shrink-0">
          <div className="w-52 h-4 left-[612.69px] top-[84px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            WHY PROJECT MANAGEMENT
          </div>
          <div className="w-[674.76px] h-11 left-[382.79px] top-[114px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Generic task boards. Governed delivery.
          </div>
          
          {/* WITHOUT GOVERNANCE */}
          <div className="w-[577px] h-[384px] left-[131px] top-[204.40px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-red-500/25 flex flex-col p-[28px] gap-5">
              <div className="border-b border-red-500/20 pb-3">
                  <div className="text-red-500 text-xs font-extrabold font-inter tracking-wide uppercase">WITHOUT GOVERNANCE</div>
              </div>
              
              <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                      <img src="/project-management/cross-red.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="cross" />
                      <div>
                          <div className="text-slate-900 text-sm font-bold font-inter mb-1">Disconnected tools</div>
                          <div className="text-slate-600 text-xs font-normal font-inter leading-5">Messages, files, and tasks live in separate apps with no shared record.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/cross-red.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="cross" />
                      <div>
                          <div className="text-slate-900 text-sm font-bold font-inter mb-1">Vague health status</div>
                          <div className="text-slate-600 text-xs font-normal font-inter leading-5">Red/amber/green claims with no source, formula, or owner.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/cross-red.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="cross" />
                      <div>
                          <div className="text-slate-900 text-sm font-bold font-inter mb-1">Unowned exceptions</div>
                          <div className="text-slate-600 text-xs font-normal font-inter leading-5">Risks, issues, and change requests stall without an approver.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/cross-red.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="cross" />
                      <div>
                          <div className="text-slate-900 text-sm font-bold font-inter mb-1">Exposed client context</div>
                          <div className="text-slate-600 text-xs font-normal font-inter leading-5">External stakeholders see more internal detail than they should.</div>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* WITH ZOIKO SEMA */}
          <div className="w-[577px] h-[384px] left-[732px] top-[204.40px] absolute bg-slate-900 rounded-2xl flex flex-col p-[28px] gap-5">
              <div className="border-b border-white/10 pb-3">
                  <div className="text-teal-400 text-xs font-extrabold font-inter tracking-wide uppercase">WITH ZOIKO SEMA</div>
              </div>
              
              <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                      <img src="/project-management/check-teal.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="check" />
                      <div>
                          <div className="text-white text-sm font-bold font-inter mb-1">One governed workspace</div>
                          <div className="text-slate-400 text-xs font-normal font-inter leading-5">Messages, meetings, files, and tasks stay linked to their source.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/check-teal.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="check" />
                      <div>
                          <div className="text-white text-sm font-bold font-inter mb-1">Explainable health</div>
                          <div className="text-slate-400 text-xs font-normal font-inter leading-5">Every status has a source, formula, owner, and next action.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/check-teal.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="check" />
                      <div>
                          <div className="text-white text-sm font-bold font-inter mb-1">Owned exceptions</div>
                          <div className="text-slate-400 text-xs font-normal font-inter leading-5">Risks, issues, and changes always have a named approver.</div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <img src="/project-management/check-teal.svg" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="check" />
                      <div>
                          <div className="text-white text-sm font-bold font-inter mb-1">Scoped client rooms</div>
                          <div className="text-slate-400 text-xs font-normal font-inter leading-5">External stakeholders see only reviewed, permissioned context.</div>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Bottom Comparison Sticky Notes Wide Image - shifted down to 620px to prevent overlap */}
          <div className="w-[1178px] h-[300px] left-[131px] top-[620px] absolute bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-[1178px] h-[502px] left-0 top-[-110px] absolute object-cover" src="/project-management/comparison.png" alt="Sticky note collaboration session" />
          </div>
      </div>
    </section>
  );
};
