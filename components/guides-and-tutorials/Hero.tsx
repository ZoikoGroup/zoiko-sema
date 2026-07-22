import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full bg-[#f8f9ff] py-16 px-4 md:px-8 lg:px-10 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col items-center gap-6">
        <div className="px-4 py-1.5 bg-[#eff2ff] rounded-full border border-[#e0e7ff] inline-flex justify-start items-center gap-2">
          <img src="/guides-and-Tutorials/icon-park-outline_application-menu (1).svg" alt="Hub" className="w-4 h-4 object-contain" />
          <div className="text-center text-indigo-700 text-xs font-bold uppercase leading-4 tracking-wider font-['Hanken_Grotesk']">
            GUIDES & TUTORIALS HUB
          </div>
        </div>
        
        <h1 className="text-center text-[#0f172a] text-4xl md:text-5xl lg:text-[56px] font-bold font-['Hanken_Grotesk'] leading-[1.1] max-w-4xl tracking-tight">
          Learn Zoiko Sema by completing real work.
        </h1>
        
        <p className="text-center text-slate-600 text-lg font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-3xl mt-2">
          Build a task-driven learning experience where users can search by task, feature, role, or outcome and quickly access accurate, product-version-specific guides.
        </p>
        
        <div className="w-full max-w-2xl mt-4 relative">
          <div className="w-full h-14 pl-12 pr-4 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center overflow-hidden">
            <svg className="w-5 h-5 text-slate-400 absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="Search a task, feature, error, or outcome" 
              className="w-full h-full text-slate-600 text-base font-normal font-['Hanken_Grotesk'] outline-none bg-transparent"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 mb-8">
          <a href="#quick-start" className="px-7 py-2.5 bg-[#0f172a] text-white rounded-lg text-sm font-semibold font-['Hanken_Grotesk'] hover:bg-slate-800 transition-colors">
            Browse Guides
          </a>
          <Link href="/start-free" className="px-7 py-2.5 bg-white border border-slate-200 text-[#0f172a] rounded-lg text-sm font-semibold font-['Hanken_Grotesk'] hover:bg-slate-50 transition-colors shadow-sm">
            Start Free
          </Link>
          <Link href="/get-a-demo" className="px-7 py-2.5 text-slate-600 rounded-lg text-sm font-semibold font-['Hanken_Grotesk'] hover:bg-slate-100 transition-colors">
            Get a Demo
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-5xl mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <img className="w-full h-auto object-cover" src="/guides-and-Tutorials/mastery-course.png" alt="Platform Overview" />
      </div>
    </div>
  );
};

export default Hero;
