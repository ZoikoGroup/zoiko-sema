import React from 'react';

export const ProjectManagementPlanningSection = () => {
  return (
    <section className="bg-slate-100 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[841.20px] relative flex-shrink-0">
          <div className="w-60 h-4 left-[598.46px] top-[83.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            PLANNING, MILESTONES & TASKS
          </div>
          <div className="w-[650.24px] h-11 left-[395.04px] top-[113.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Plan visually. Deliver with owned tasks.
          </div>
          
          <div className="w-[1178px] h-[557.60px] left-[131px] top-[203.60px] absolute bg-white rounded-2xl shadow-[0px_10px_40px_-18px_rgba(20,22,60,0.15)] overflow-hidden">
              {/* Left sidebar navigation */}
              <div className="w-64 h-[557.60px] left-0 top-0 absolute bg-slate-900 flex flex-col pt-6 gap-6 pl-[28.40px]">
                  <div className="border-l-[2.40px] border-violet-600 pl-3">
                      <span className="text-white text-sm font-bold font-inter">Shared views</span>
                  </div>
                  <div className="pl-3.5">
                      <span className="text-white text-sm font-bold font-inter">Baseline & dates</span>
                  </div>
                  <div className="pl-3.5">
                      <span className="text-white text-sm font-bold font-inter">Dependencies</span>
                  </div>
                  <div className="pl-3.5">
                      <span className="text-white text-sm font-bold font-inter">My Work</span>
                  </div>
                  <div className="pl-3.5">
                      <span className="text-white text-sm font-bold font-inter">Board & timeline</span>
                  </div>
                  <div className="pl-3.5">
                      <span className="text-white text-sm font-bold font-inter">Completion evidence</span>
                  </div>
              </div>
              
              {/* List of items */}
              <div className="w-[828px] h-12 left-[310px] top-[36px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-violet-600/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-violet.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Timeline, milestone list, calendar, roadmap, and phase cards use the same objects.</span>
              </div>
              
              <div className="w-[828px] h-12 left-[310px] top-[108.80px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-blue.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Authorized roles set or revise a baseline with rationale, approver, and timestamp.</span>
              </div>
              
              <div className="w-[828px] h-12 left-[310px] top-[181.60px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-teal-400/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-teal.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Predecessor, successor, type, owner, lag, and impact with broken-dependency warnings.</span>
              </div>
              
              <div className="w-[828px] h-12 left-[310px] top-[254.40px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-600/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-gold.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Assigned tasks grouped by priority, due date, project, status, and next action.</span>
              </div>
              
              <div className="w-[828px] h-12 left-[310px] top-[327.20px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-violet-600/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-violet.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Status- or milestone-based swimlanes with keyboard-accessible, non-drag alternatives.</span>
              </div>
              
              <div className="w-[828px] h-12 left-[310px] top-[400px] absolute border-b-[0.80px] border-violet-100 flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <img src="/project-management/calendar-blue.svg" className="w-4 h-4" alt="icon" />
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-inter leading-5">Optional or required evidence — file, comment, approval, link, or checklist.</span>
              </div>
              
              {/* Callout box */}
              <div className="w-[828px] h-12 left-[310px] top-[472.80px] absolute bg-blue-600/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-blue-600/20 flex items-center pl-5">
                  <span className="text-gray-900 text-xs font-semibold font-inter">No productivity scoring: project reporting never ranks contributors by messages, hours, task velocity, or online presence.</span>
              </div>
          </div>
      </div>
    </section>
  );
};
