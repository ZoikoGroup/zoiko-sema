"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function ProductShowcaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: uiRef, inView: uiIn } = useInView(0.15);

  return (
    <section className="w-full bg-[#0B0F19] py-24 lg:py-32 font-sans antialiased overflow-hidden relative">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[653px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-white text-4xl font-bold font-['Inter'] w-[635.94px] max-w-full">
            One workspace for the whole project<br/>lifecycle.
          </h2>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-6 w-[653.31px] max-w-full">
            Move from project room to meeting recap to a reviewed stakeholder update &mdash; without<br/>losing context across tools.
          </p>
        </div>

        {/* 3 Panels UI */}
        <div ref={uiRef} className={`w-full mt-20 flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 transition-all duration-1000 transform ${uiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          
          {/* Panel 1 */}
          <div className="w-full max-w-96 xl:w-96 shrink-0 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-80">
            <div className="w-full h-11 flex items-center justify-between px-4.5 border-b border-gray-100 shrink-0">
              <span className="text-slate-900 text-xs font-bold pl-[1.1rem]">Marketing Launch</span>
              <div className="bg-emerald-50 px-2 py-0.5 rounded-lg mr-2.5">
                <span className="text-emerald-600 text-[9.5px] font-bold">On track</span>
              </div>
            </div>
            <div className="flex-1 p-[18px] pt-4 flex flex-col gap-2.5">
              {[
                { name: "#spring-launch", val: "12 msgs" },
                { name: "Kickoff notes", val: "Ready" },
                { name: "Creative_brief.pdf", val: "Pinned" },
                { name: "Milestone · Build", val: "68%" },
                { name: "Status update", val: "Posted" }
              ].map((item, i) => (
                <div key={i} className="h-9 w-full flex items-center justify-between px-[13px] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-violet-100">
                  <span className="text-slate-900 text-xs font-semibold">{item.name}</span>
                  <span className="text-slate-400 text-[10px] font-semibold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="text-violet-400 text-2xl font-bold hidden xl:block">&rarr;</span>
          <span className="text-violet-400 text-2xl font-bold block xl:hidden rotate-90">&rarr;</span>

          {/* Panel 2 */}
          <div className="w-full max-w-96 xl:w-96 shrink-0 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.5)] outline outline-1 outline-offset-[-1px] outline-violet-600 overflow-hidden flex flex-col h-80">
            <div className="w-full h-11 flex items-center justify-between px-4.5 border-b border-gray-100 shrink-0">
              <span className="text-slate-900 text-xs font-bold pl-[1.1rem]">Weekly review &middot; recap</span>
              <div className="bg-yellow-50 px-2 py-0.5 rounded-lg mr-2.5">
                <span className="text-yellow-600 text-[9.5px] font-bold">Reviewing</span>
              </div>
            </div>
            <div className="flex-1 px-[19.6px] pt-2 flex flex-col">
              {[
                { icon: "✓", color: "text-emerald-600", name: "Key outcome", val: "Scope set", vColor: "text-emerald-600" },
                { icon: "✓", color: "text-emerald-600", name: "Decision", val: "Budget ✓", vColor: "text-emerald-600" },
                { icon: "✓", color: "text-emerald-600", name: "Action · Ava", val: "Due Thu", vColor: "text-violet-600" },
                { icon: "!", color: "text-yellow-600", name: "Risk flagged", val: "Reviewed", vColor: "text-yellow-600" },
                { icon: "✓", color: "text-emerald-600", name: "Recording", val: "Linked", vColor: "text-emerald-600" }
              ].map((item, i) => (
                <div key={i} className="h-9 w-full flex items-center justify-between border-b border-slate-100 relative">
                  <div className="flex items-center">
                    <span className={`${item.color} text-xs font-semibold absolute left-0`}>{item.icon}</span>
                    <span className="text-slate-900 text-xs font-semibold ml-[19.45px]">{item.name}</span>
                  </div>
                  <span className={`${item.vColor} text-xs font-bold pr-1`}>{item.val}</span>
                </div>
              ))}
              <div className="mt-2.5 h-8 w-full bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white text-xs font-bold">Log decisions &amp; tasks</span>
              </div>
              <div className="mt-2 w-full flex justify-center">
                <span className="text-slate-400 text-[10px]">Assign owners &middot; Add to project</span>
              </div>
            </div>
          </div>

          <span className="text-violet-400 text-2xl font-bold hidden xl:block">&rarr;</span>
          <span className="text-violet-400 text-2xl font-bold block xl:hidden rotate-90">&rarr;</span>

          {/* Panel 3 */}
          <div className="w-full max-w-96 xl:w-96 shrink-0 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-80">
            <div className="w-full h-11 flex items-center justify-between px-4.5 border-b border-gray-100 shrink-0">
              <span className="text-slate-900 text-xs font-bold pl-[1.1rem]">Stakeholder update</span>
              <div className="bg-emerald-50 px-2 py-0.5 rounded-lg mr-2.5">
                <span className="text-emerald-600 text-[9.5px] font-bold">Client-ready</span>
              </div>
            </div>
            <div className="flex-1 p-[18px] pt-4 flex flex-col">
              <div className="w-full h-14 bg-gray-50 outline outline-1 outline-offset-[-1px] outline-violet-100 rounded-[10px] px-3 flex items-center mb-[14px]">
                <p className="text-gray-500 text-xs leading-4">
                  Reviewed summary: 68% complete, 1 risk being managed, launch on track for Friday.
                </p>
              </div>
              
              <div className="w-full flex flex-col">
                <span className="text-slate-400 text-[10px] font-bold tracking-wide mb-3">NEXT STEPS</span>
                <div className="flex flex-col gap-[11px]">
                  {[
                    { name: "Confirm launch date", assignee: "Ava", day: "Mon" },
                    { name: "Finalize assets", assignee: "Liam", day: "Wed" },
                    { name: "Client review", assignee: "Nina", day: "Thu" },
                    { name: "Go-live checklist", assignee: "Maya", day: "Fri" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between h-4 relative">
                      <div className="flex items-center">
                        <div className="size-3.5 rounded-[5px] border border-slate-300 absolute left-0" />
                        <span className="text-slate-900 text-xs font-semibold ml-[23px]">{item.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-violet-600 text-xs font-bold w-9 text-right pr-1">{item.assignee}</span>
                        <span className="text-slate-400 text-[10px] w-6 text-right pr-0.5">{item.day}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className={`mt-20 flex flex-col items-center text-center gap-7 transition-all duration-700 delay-300 transform ${uiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-slate-300 text-sm max-w-[700px] leading-6">
            Every message, decision, file, and task stays connected to the project &mdash; and stakeholder updates are<br className="hidden md:block"/>always reviewed before they go out.
          </p>
          <div className="flex items-center gap-[42px] mt-1">
            <button className="bg-white text-slate-900 w-44 h-11 rounded-[999px] text-sm font-bold flex items-center justify-center transition-transform hover:scale-105">
              View product tour
            </button>
            <a href="#" className="text-white text-sm font-bold border-b border-white/40 pb-0 flex items-center justify-center transition-colors hover:border-white h-5">
              Get a demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
