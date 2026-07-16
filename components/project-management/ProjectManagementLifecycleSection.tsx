import React from 'react';

export const ProjectManagementLifecycleSection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[852.40px] relative flex-shrink-0">
          <div className="w-36 h-4 left-[645.49px] top-[91.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            PROJECT LIFECYCLE
          </div>
          <div className="w-[782.56px] h-11 left-[328.89px] top-[121.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Every stage produces a visible, owned artifact.
          </div>
          
          {/* Callout Box */}
          <div className="w-[809.60px] h-16 left-[315.20px] top-[692.40px] absolute bg-teal-600/10 rounded-xl outline outline-1 outline-offset-[-1px] outline-teal-700/20 flex flex-col justify-center px-[24.80px]">
              <div className="text-teal-700 text-xs font-semibold font-inter leading-[18px]">
                Completion rule: a project is complete only when agreed deliverables, approvals, decisions, unresolved risks, handoff
              </div>
              <div className="text-teal-700 text-xs font-semibold font-inter leading-[18px]">
                evidence, and archive status are visible to authorized stakeholders.
              </div>
          </div>
          
          {/* Timeline Center Line */}
          <div className="w-0.5 h-96 left-[719px] top-[225.60px] absolute bg-slate-200"></div>
          
          {/* 1. KICKOFF */}
          <div className="w-16 h-4 left-[608.65px] top-[221.25px] absolute text-right justify-center text-blue-600 text-xs font-extrabold font-inter tracking-wide uppercase">KICKOFF</div>
          <div className="w-48 h-4 left-[474.84px] top-[244.85px] absolute text-right justify-center text-slate-600 text-xs font-normal font-inter leading-5">Purpose, owner, team, template</div>
          <div className="w-11 h-11 left-[697.60px] top-[219.60px] absolute bg-blue-600/10 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-blue-600 text-sm font-extrabold font-plus-jakarta">1</span>
          </div>
          
          {/* 2. PLAN */}
          <div className="w-10 h-4 left-[770.40px] top-[300.05px] absolute justify-center text-violet-600 text-xs font-extrabold font-inter tracking-wide uppercase">PLAN</div>
          <div className="w-52 h-4 left-[770.40px] top-[323.65px] absolute justify-center text-slate-600 text-xs font-normal font-inter leading-5">Phases, milestones, dependencies</div>
          <div className="w-11 h-11 left-[697.60px] top-[298.40px] absolute bg-violet-600/10 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-violet-600 text-sm font-extrabold font-plus-jakarta">2</span>
          </div>
          
          {/* 3. EXECUTE */}
          <div className="w-16 h-4 left-[603.60px] top-[378.85px] absolute text-right justify-center text-teal-700 text-xs font-extrabold font-inter tracking-wide uppercase">EXECUTE</div>
          <div className="w-48 h-4 left-[471.31px] top-[402.45px] absolute text-right justify-center text-slate-600 text-xs font-normal font-inter leading-5">Tasks, meetings, files, decisions</div>
          <div className="w-11 h-11 left-[697.60px] top-[377.20px] absolute bg-teal-400/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-teal-700 text-sm font-extrabold font-plus-jakarta">3</span>
          </div>
          
          {/* 4. CONTROL */}
          <div className="w-16 h-4 left-[770.40px] top-[457.65px] absolute justify-center text-yellow-600 text-xs font-extrabold font-inter tracking-wide uppercase">CONTROL</div>
          <div className="w-52 h-4 left-[770.40px] top-[481.25px] absolute justify-center text-slate-600 text-xs font-normal font-inter leading-5">Risks, changes, approvals, status</div>
          <div className="w-11 h-11 left-[697.60px] top-[456px] absolute bg-yellow-600/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-yellow-600 text-sm font-extrabold font-plus-jakarta">4</span>
          </div>
          
          {/* 5. DELIVER */}
          <div className="w-14 h-4 left-[610.10px] top-[536.45px] absolute text-right justify-center text-teal-600 text-xs font-extrabold font-inter tracking-wide uppercase">DELIVER</div>
          <div className="w-48 h-4 left-[477.59px] top-[560.05px] absolute text-right justify-center text-slate-600 text-xs font-normal font-inter leading-5">Acceptance, evidence, handoff</div>
          <div className="w-11 h-11 left-[697.60px] top-[534.80px] absolute bg-teal-600/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-teal-600 text-sm font-extrabold font-plus-jakarta">5</span>
          </div>
          
          {/* 6. CLOSE */}
          <div className="w-12 h-4 left-[770.40px] top-[615.25px] absolute justify-center text-slate-900 text-xs font-extrabold font-inter tracking-wide uppercase">CLOSE</div>
          <div className="w-52 h-4 left-[770.40px] top-[638.85px] absolute justify-center text-slate-600 text-xs font-normal font-inter leading-5">Outcome, archive, lessons, audit</div>
          <div className="w-11 h-11 left-[697.60px] top-[613.60px] absolute bg-slate-900/10 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-slate-900 text-sm font-extrabold font-plus-jakarta">6</span>
          </div>
          
          {/* Left portrait image (high five) */}
          <div className="w-72 h-[454px] left-[119px] top-[200.65px] absolute bg-black rounded-3xl overflow-hidden shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-72 h-[454px] left-0 top-0 absolute object-cover" src="/project-management/lifecycle-left.png" alt="Coworkers high fiving" />
          </div>
          
          {/* Right portrait image (woman showing tablet) */}
          <div className="w-72 h-[454px] left-[1046px] top-[191.65px] absolute bg-black rounded-3xl overflow-hidden shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-72 h-[454px] left-0 top-0 absolute object-cover" src="/project-management/lifecycle-right.png" alt="Team reviewing statistics on a tablet" />
          </div>
      </div>
    </section>
  );
};
