import React from 'react';
import Link from 'next/link';

export const ProjectManagementCTASection = () => {
  return (
    <section className="bg-blue-600 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[296px] relative flex-shrink-0">
          <div className="w-[792.83px] h-[72px] left-[323.59px] top-[65px] absolute text-center justify-center text-white text-3xl font-extrabold font-plus-jakarta leading-10">
            Ready to run projects with accountable context?
          </div>
          
          <div className="w-[600px] h-12 left-[420px] top-[138px] absolute text-center justify-center text-white/95 text-base font-normal font-inter leading-relaxed">
            Start free to activate your first project, or get a demo for governed, multi-team<br/>
            rollout.
          </div>
          
          <div className="absolute left-[564px] top-[204px] flex gap-4">
              <Link href="/start-free" className="w-36 h-12 bg-white rounded-[100px] hover:bg-slate-50 transition-colors flex items-center justify-center">
                  <span className="text-blue-600 text-base font-bold font-inter">Start free</span>
              </Link>
              
              <Link href="/get-a-demo" className="w-36 h-12 bg-blue-500 rounded-[100px] hover:bg-blue-400 border border-blue-400/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-base font-bold font-inter">Get a demo</span>
              </Link>
          </div>
      </div>
    </section>
  );
};
