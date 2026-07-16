import React from 'react';

export const ProjectManagementShowcaseSection = () => {
  return (
    <section className="bg-slate-900 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[858.40px] relative flex-shrink-0">
          <div className="w-40 h-4 left-[640px] top-[91.20px] absolute text-center justify-center text-teal-400 text-xs font-bold font-inter tracking-wider">
            PRODUCT SHOWCASE
          </div>
          
          {/* Headline - widened and set to whitespace-nowrap to prevent overlap */}
          <div className="w-[800px] h-11 left-[320px] top-[121.20px] absolute text-center justify-center text-white text-4xl font-extrabold font-plus-jakarta whitespace-nowrap">
            The Project Control Center.
          </div>
          
          <div className="w-[556.51px] h-10 left-[441.84px] top-[177.60px] absolute text-center justify-center text-slate-300 text-base font-normal font-inter leading-6">
            One workspace for milestones, tasks, risks, decisions, files, and reviewed<br/>
            stakeholder updates — scoped by role.
          </div>
          
          {/* Item 1 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[299.90px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-32 h-4 left-[149px] top-[292.90px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Project navigation
          </div>
          <div className="w-96 h-9 left-[149px] top-[315.30px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Overview, Milestones, Board, Meetings, Decisions, Files, Reports<br/>
            — scoped by role.
          </div>
          
          {/* Item 2 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[379px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-28 h-4 left-[149px] top-[372px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Health & KPI row
          </div>
          <div className="w-96 h-9 left-[149px] top-[394.40px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Health, milestones on track, open risks, and tasks due — each<br/>
            with definition and freshness.
          </div>
          
          {/* Item 3 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[458.10px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-32 h-4 left-[149px] top-[451.10px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Milestone delivery
          </div>
          <div className="w-96 h-9 left-[149px] top-[473.50px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Phase-by-phase progress with status, percent complete, and<br/>
            owner.
          </div>
          
          {/* Item 4 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[537.20px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-32 h-4 left-[149px] top-[530.20px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Delivery attention
          </div>
          <div className="w-96 h-9 left-[149px] top-[552.60px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Risks, decisions, approvals, and updates that need a named<br/>
            owner's action.
          </div>
          
          {/* Item 5 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[616.30px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-32 h-4 left-[149px] top-[609.30px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Governed AI drafts
          </div>
          <div className="w-96 h-9 left-[149px] top-[631.70px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Recap, task, risk, and update suggestions with source links and a<br/>
            review queue.
          </div>
          
          {/* Item 6 */}
          <div className="w-1.5 h-1.5 left-[131px] top-[695.40px] absolute bg-teal-400 rounded-full"></div>
          <div className="w-16 h-4 left-[149px] top-[688.40px] absolute text-white text-sm font-bold font-inter whitespace-nowrap">
            Audit trail
          </div>
          <div className="w-96 h-9 left-[149px] top-[710.80px] absolute text-slate-400 text-xs font-normal font-inter leading-5">
            Every plan change, approval, and AI application recorded with<br/>
            actor and timestamp.
          </div>
          
          {/* Right Monitor Control Center Mockup Image */}
          <div className="w-[702px] h-[498.40px] left-[607px] top-[272px] absolute bg-white rounded-2xl shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.40)] outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden">
              <img className="w-[702px] h-[463px] left-0 top-[35.40px] absolute object-cover" src="/project-management/showcase.png" alt="Showcase monitoring room dashboard layout" />
              
              {/* Browser bar */}
              <div className="w-[700.40px] h-9 left-[0.80px] top-[0.80px] absolute bg-slate-50 border-b-[0.80px] border-violet-100 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};
