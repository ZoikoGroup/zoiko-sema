import React from 'react';
import Link from 'next/link';

export const ProjectManagementHeroSection = () => {
  return (
    <section className="bg-slate-900 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[759.95px] relative bg-slate-900 overflow-hidden flex-shrink-0">
          {/* Badge */}
          <div className="w-56 h-7 left-[131px] top-[96px] absolute bg-violet-600/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-violet-400/30 flex items-center pl-3.5">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
              <span className="text-violet-400 text-xs font-bold font-inter tracking-wider ml-2">PROJECT MANAGEMENT</span>
          </div>
          
          {/* Headline */}
          <div className="w-[600px] left-[131px] top-[144px] absolute text-white text-5xl font-extrabold font-plus-jakarta leading-[55px]">
            Keep project work<br/>aligned from kickoff to<br/>delivery.
          </div>
          
          {/* Subheadline */}
          <div className="w-[520.48px] h-20 left-[131px] top-[343px] absolute text-slate-300 text-base font-normal font-inter leading-7">
            Bring project messages, meetings, milestones, tasks, files,<br/>
            decisions, risks, AI summaries, and stakeholder updates into one<br/>
            governed workspace.
          </div>
          
          {/* CTA Buttons */}
          <div className="absolute left-[131px] top-[447px] flex gap-4">
              <Link href="/get-a-demo" className="w-32 h-12 bg-blue-600 rounded-[100px] hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-base font-bold font-inter">Get a demo</span>
              </Link>
              
              <Link href="/start-free" className="w-32 h-12 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/25 hover:bg-slate-50 transition-colors flex items-center justify-center">
                  <span className="text-slate-900 text-base font-bold font-inter">Start free</span>
              </Link>
          </div>
          
          {/* Disclaimer */}
          <div className="w-[469.83px] h-9 left-[131px] top-[522px] absolute text-slate-500 text-xs font-normal font-inter leading-5">
            Project visibility and delivery context without employee monitoring or hidden<br/>
            productivity scoring.
          </div>
          
          {/* Checkbox pills */}
          <div className="w-44 h-7 left-[131px] top-[587px] absolute bg-white/5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/10 flex items-center pl-3.5">
              <img src="/project-management/check-teal-small.svg" className="w-3 h-3" alt="Check icon" />
              <span className="text-slate-300 text-xs font-medium font-inter ml-2.5">Cross-functional teams</span>
          </div>
          
          <div className="w-48 h-7 left-[323.14px] top-[587px] absolute bg-white/5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/10 flex items-center pl-3.5">
              <img src="/project-management/check-teal-small.svg" className="w-3 h-3" alt="Check icon" />
              <span className="text-slate-300 text-xs font-medium font-inter ml-2.5">Client & partner projects</span>
          </div>
          
          <div className="w-48 h-7 left-[131px] top-[626px] absolute bg-white/5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/10 flex items-center pl-3.5">
              <img src="/project-management/check-teal-small.svg" className="w-3 h-3" alt="Check icon" />
              <span className="text-slate-300 text-xs font-medium font-inter ml-2.5">Governed communication</span>
          </div>
          
          {/* Right Dashboard Mockup */}
          <div className="w-[579px] h-96 left-[732px] top-[171px] absolute bg-white rounded-2xl shadow-[0px_40px_80px_-20px_rgba(20,22,60,0.35)] outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden">
              <img className="w-[579px] h-[348px] left-0 top-[37px] absolute object-cover" src="/project-management/hero.png" alt="Hero dashboard" />
              
              {/* Browser window top bar */}
              <div className="w-[577px] h-9 left-[0.80px] top-[0.80px] absolute bg-slate-50 border-b-[0.80px] border-violet-100 flex items-center px-3.5 justify-between">
                  <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="w-80 h-6 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-violet-100 flex items-center justify-center">
                      <span className="text-slate-400 text-[10px] font-normal font-inter">app.zoikosema.com/project-collaboration</span>
                  </div>
                  <div className="w-4"></div>
              </div>
          </div>
      </div>
    </section>
  );
};
