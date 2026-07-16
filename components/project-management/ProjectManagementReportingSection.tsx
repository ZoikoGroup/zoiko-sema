import React from 'react';

export const ProjectManagementReportingSection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[588.80px] relative bg-white flex-shrink-0">
          {/* Badge */}
          <div className="w-20 h-4 left-[678.44px] top-[83.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            REPORTING
          </div>
          
          {/* Headline - widened and set to whitespace-nowrap to prevent overlap */}
          <div className="w-[800px] h-11 left-[320px] top-[113.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta whitespace-nowrap">
            Delivery health, not worker scoring.
          </div>
          
          {/* Card 1: Delivery */}
          <div className="w-72 h-40 left-[131px] top-[203.60px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5">
              <div className="w-7 h-7 bg-violet-600/10 rounded-md flex items-center justify-center mb-3">
                  <img src="/project-management/chart-violet.svg" className="w-3.5 h-3.5" alt="icon" />
              </div>
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Delivery</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-4">
                Milestones, tasks, overdue items, forecast<br/>
                freshness
              </div>
          </div>
          
          {/* Center Mockup Image */}
          <div className="w-[587px] h-80 left-[426px] top-[203.45px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.1)]">
              <img className="w-[586px] h-[586px] left-0 top-[-165px] absolute object-cover" src="/project-management/reporting.png" alt="Reporting dashboard chart mockup" />
          </div>
          
          {/* Card 2: Stakeholder */}
          <div className="w-72 h-40 left-[1028px] top-[203.60px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5">
              <div className="w-7 h-7 bg-violet-600/10 rounded-md flex items-center justify-center mb-3">
                  <img src="/project-management/document-violet.svg" className="w-3.5 h-3.5" alt="icon" />
              </div>
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Stakeholder</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-4">
                Update cadence, drafts, approved<br/>
                updates
              </div>
          </div>
          
          {/* Card 3: External access */}
          <div className="w-72 h-32 left-[131px] top-[374.20px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5">
              <div className="w-7 h-7 bg-violet-600/10 rounded-md flex items-center justify-center mb-3">
                  <img src="/project-management/link-gold.svg" className="w-3.5 h-3.5" alt="icon" />
              </div>
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">External access</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-4">
                Active guests, expiring access
              </div>
          </div>
          
          {/* Card 4: Privacy boundary */}
          <div className="w-72 h-32 left-[1028px] top-[374.20px] absolute bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-5 flex flex-col justify-center">
              <div className="w-7 h-7 bg-violet-600/10 rounded-md flex items-center justify-center mb-3">
                  <img src="/project-management/check-teal-medium.svg" className="w-3.5 h-3.5" alt="icon" />
              </div>
              <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Privacy boundary</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-4">
                No hidden worker ranking
              </div>
          </div>
      </div>
    </section>
  );
};
