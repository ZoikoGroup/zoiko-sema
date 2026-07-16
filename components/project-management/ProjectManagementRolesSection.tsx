import React from 'react';

export const ProjectManagementRolesSection = () => {
  return (
    <section className="bg-violet-50 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[866px] relative flex-shrink-0">
          <div className="w-72 h-4 left-[579.64px] top-[91.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            BUILT FOR THE WHOLE PROJECT TEAM
          </div>
          <div className="w-[620.93px] h-11 left-[409.69px] top-[121.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Every role sees exactly what it needs.
          </div>
          
          {/* Role 1 */}
          <div className="w-12 h-14 left-[131px] top-[218px] absolute justify-center text-violet-600/25 text-5xl font-extrabold font-plus-jakarta leading-10">01</div>
          <div className="w-72 h-36 left-[131px] top-[281.60px] absolute bg-slate-50 rounded-2xl shadow-[0px_10px_30px_-12px_rgba(20,22,60,0.12)] p-5">
              <div className="text-slate-900 text-base font-bold font-inter mb-2">Project Manager</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Plan, coordinate, control, report, and<br/>
                close work with milestone, risk, and<br/>
                decision visibility in one place.
              </div>
          </div>
          
          {/* Role 2 */}
          <div className="w-14 h-14 left-[431px] top-[254px] absolute justify-center text-blue-600/25 text-5xl font-extrabold font-plus-jakarta leading-10">02</div>
          <div className="w-72 h-40 left-[431px] top-[317.60px] absolute bg-slate-50 rounded-2xl shadow-[0px_10px_30px_-12px_rgba(20,22,60,0.12)] p-5">
              <div className="text-slate-900 text-base font-bold font-inter mb-2">Team Lead & Contributor</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                See My Work, priorities, due dates,<br/>
                and evidence expectations without<br/>
                digging through disconnected<br/>
                threads.
              </div>
          </div>
          
          {/* Role 3 */}
          <div className="w-14 h-14 left-[731px] top-[218px] absolute justify-center text-teal-400/30 text-5xl font-extrabold font-plus-jakarta leading-10">03</div>
          <div className="w-72 h-40 left-[731px] top-[281.60px] absolute bg-slate-50 rounded-2xl shadow-[0px_10px_30px_-12px_rgba(20,22,60,0.12)] p-5">
              <div className="text-slate-900 text-base font-bold font-inter mb-2">Approver & Sponsor</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Review gates, changes, and risks<br/>
                through concise decision and status<br/>
                views with drill-down, not endless<br/>
                threads.
              </div>
          </div>
          
          {/* Role 4 */}
          <div className="w-16 h-14 left-[1031px] top-[254px] absolute justify-center text-yellow-600/30 text-5xl font-extrabold font-plus-jakarta leading-10">04</div>
          <div className="w-72 h-36 left-[1031px] top-[317.60px] absolute bg-slate-50 rounded-2xl shadow-[0px_10px_30px_-12px_rgba(20,22,60,0.12)] p-5">
              <div className="text-slate-900 text-base font-bold font-inter mb-2">Client & PMO</div>
              <div className="text-slate-600 text-xs font-normal font-inter leading-5">
                Clients get scoped reviewed updates;<br/>
                PMOs get templates, portfolio<br/>
                visibility, and governed reporting.
              </div>
          </div>
          
          {/* Bottom Roles Dashboard Wide Image */}
          <div className="w-[1178px] h-72 left-[131px] top-[495.05px] absolute bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-[1178px] h-[616px] left-0 top-[-160px] absolute object-cover" src="/project-management/roles.png" alt="Every role sees what it needs dashboard panels" />
          </div>
      </div>
    </section>
  );
};
