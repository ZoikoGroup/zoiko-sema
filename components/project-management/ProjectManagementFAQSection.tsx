import React from 'react';

export const ProjectManagementFAQSection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[980px] relative flex-shrink-0">
          <div className="w-6 h-4 left-[706.88px] top-[83.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">FAQ</div>
          <div className="w-[480.49px] h-10 left-[479.75px] top-[113.20px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-plus-jakarta leading-10 whitespace-nowrap">Common questions answered.</div>
          
          {/* Left Column FAQs */}
          <div className="w-[582px] h-[120px] left-[131px] top-[194px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">How does Zoiko Sema support project management?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Zoiko Sema keeps project messages, meetings, milestones, tasks, files,<br/>
                decisions, risks, AI summaries, and stakeholder updates connected in one<br/>
                governed workspace.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[131px] top-[334px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Does Zoiko Sema support milestones and dependencies?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                The project experience shows phases, milestones, owners, dates, acceptance<br/>
                criteria, and dependencies, matching approved production availability and plan<br/>
                packaging.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[131px] top-[474px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Can clients and partners collaborate in a project?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Yes, when policy allows. External users receive scoped access with<br/>
                sponsorship, purpose, permissions, expiry, review, and offboarding controls.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[131px] top-[614px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Does Zoiko Sema automatically change project dates or scope with AI?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                No. AI may draft suggestions, but it cannot autonomously change scope,<br/>
                budget, dates, acceptance, or client commitments. Human review is required.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[131px] top-[754px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Can project records be exported for audit or handoff?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Permissioned roles can export approved records and evidence where the<br/>
                customer plan and policy allow. Retention and access controls still apply.
              </div>
          </div>
          
          {/* Right Column FAQs */}
          <div className="w-[582px] h-[120px] left-[727px] top-[194px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Can teams create dedicated project spaces?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Yes. Authorized users can create project spaces for launches, client work,<br/>
                internal programs, and operational initiatives using approved templates and<br/>
                organization policies.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[727px] top-[334px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Can project meetings become tasks and decisions?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Eligible meeting recaps can suggest decisions, actions, risks, and updates with<br/>
                source links. Authorized people review the draft before project records change.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[727px] top-[474px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Can Zoiko Sema track project risks and changes?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Separate risk, issue, change-request, and decision records exist with<br/>
                ownership, review states, evidence, and audit history.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[727px] top-[614px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Is project reporting based on employee monitoring?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                No. Project reporting focuses on explicit project objects and agreed delivery<br/>
                signals — never message volume, presence, or inferred productivity.
              </div>
          </div>
          
          <div className="w-[582px] h-[120px] left-[727px] top-[754px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Is Project Management a separate page from Project Collaboration?</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                No. The Project Management menu label routes to the canonical Project<br/>
                Collaboration page so the experience and search intent stay consolidated.
              </div>
          </div>
          
          {/* Centered Brand Logo at the bottom */}
          <div className="absolute w-full bottom-6 flex justify-center items-center">
              <img src="/logo.png" className="w-44 object-contain opacity-90" alt="Zoiko Sema Logo" />
          </div>
      </div>
    </section>
  );
};
