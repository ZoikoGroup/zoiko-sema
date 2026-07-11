"use client";

import React from "react";
import { useInView } from "./useInView";

export function ProductShowcaseSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: flowRef, inView: flowIn } = useInView(0.15);

  return (
    <section className="w-full bg-slate-900 py-20 md:py-24 font-sans antialiased text-white overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} max-w-[760px] text-center flex flex-col items-center gap-5`}>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
            One flow from private capture to team<br className="hidden sm:block" />action.
          </h2>
          <p className="text-slate-300 text-base leading-6 max-w-[685px]">
            Move from message to meeting to decision to shared follow-up &mdash; without copying context between apps or exposing private work by accident.
          </p>
        </div>

        {/* UI Flow Mockups */}
        <div ref={flowRef} className={`ptt-hidden ${flowIn ? "ptt-visible" : ""} w-full flex flex-col xl:flex-row items-center justify-center gap-3 xl:gap-4`}>
          
          {/* Card 1: Personal Hub */}
          <div className="w-96 h-80 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.50)] flex flex-col shrink-0 relative overflow-hidden text-slate-900 mx-auto">
            <div className="h-11 border-b border-gray-100 flex justify-between items-center px-4">
              <span className="text-xs font-bold">Personal hub</span>
              <div className="px-2 py-0.5 bg-violet-50 rounded-lg">
                <span className="text-violet-600 text-[9.5px] font-bold">Private</span>
              </div>
            </div>
            <div className="pt-[18px] pl-[18px] flex flex-col gap-2.5">
              {[
                { title: "Meeting takeaways", badge: "3 notes" },
                { title: "Draft proposal", badge: "Editing" },
                { title: "Saved messages", badge: "5 items" },
                { title: "Personal tasks", badge: "4 open" },
                { title: "AI suggested tasks", badge: "Review" },
              ].map((item, i) => (
                <div key={i} className="w-80 h-9 rounded-[10px] border border-violet-100 flex items-center justify-between px-[13px]">
                  <span className="text-xs font-semibold">{item.title}</span>
                  <span className="text-slate-400 text-[10px] font-semibold">{item.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="text-violet-400 text-2xl font-bold rotate-90 xl:rotate-0">→</span>

          {/* Card 2: Share Review */}
          <div className="w-96 h-80 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.50)] outline outline-1 outline-offset-[-1px] outline-violet-600 flex flex-col shrink-0 relative overflow-hidden text-slate-900 mx-auto">
             <div className="h-11 border-b border-gray-100 flex justify-between items-center px-4">
              <span className="text-xs font-bold">Share review</span>
              <div className="px-2 py-0.5 bg-yellow-50 rounded-lg">
                <span className="text-yellow-600 text-[9.5px] font-bold">Reviewing</span>
              </div>
            </div>
            <div className="pt-[19px] pl-[19.6px] flex flex-col">
              {[
                { label: "Audience", val: "Team", valColor: "text-emerald-600" },
                { label: "Private notes", val: "Hidden", valColor: "text-violet-600" },
                { label: "Task owners", val: "Added", valColor: "text-emerald-600" },
                { label: "Files", val: "Attached", valColor: "text-emerald-600" },
                { label: "Audit record", val: "On", valColor: "text-emerald-600" },
              ].map((row, i) => (
                <div key={i} className="w-80 h-9 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <span className="text-emerald-600 text-xs font-semibold">✓</span>
                    <span className="text-xs font-semibold">{row.label}</span>
                  </div>
                  <span className={`${row.valColor} text-xs font-bold`}>{row.val}</span>
                </div>
              ))}
              <div className="w-80 h-8 bg-blue-600 rounded-lg flex items-center justify-center mt-3 cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white text-xs font-bold">Create team space</span>
              </div>
              <div className="w-80 flex justify-center">
                <span className="text-slate-400 text-[10px] mt-3">Save as draft &middot; Preview as teammate</span>
              </div>
            </div>
          </div>

          <span className="text-violet-400 text-2xl font-bold rotate-90 xl:rotate-0">→</span>

          {/* Card 3: # client-launch */}
          <div className="w-96 h-80 bg-white rounded-2xl shadow-[0px_30px_70px_-30px_rgba(0,0,0,0.50)] flex flex-col shrink-0 relative overflow-hidden text-slate-900 mx-auto">
             <div className="h-11 border-b border-gray-100 flex justify-between items-center px-4">
              <span className="text-xs font-bold"># client-launch</span>
              <div className="px-2 py-0.5 bg-emerald-50 rounded-lg">
                <span className="text-emerald-600 text-[9.5px] font-bold">Team</span>
              </div>
            </div>
            <div className="pt-[17px] pl-[18px] flex flex-col">
              <div className="w-80 h-14 bg-gray-50 outline outline-1 outline-offset-[-1px] outline-violet-100 rounded-[10px] flex items-center justify-center mb-3.5">
                <p className="text-gray-500 text-[12px] leading-[16px]">Shared recap: scope confirmed, draft approved, 5 owner<br/>tasks assigned for launch week.</p>
              </div>
              
              <span className="text-slate-400 text-[10px] font-bold tracking-wide mb-3">OWNER FOLLOW-UPS</span>
              
              <div className="w-80 flex flex-col gap-3">
                {[
                  { title: "Confirm scope", owner: "Ava", time: "Today" },
                  { title: "Review draft", owner: "Liam", time: "Thu" },
                  { title: "Client agenda", owner: "Nina", time: "Fri" },
                  { title: "Share recap", owner: "Maya", time: "Fri" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="size-3.5 rounded-[5px] border border-slate-300" />
                      <span className="text-xs font-semibold">{task.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-violet-600 text-xs font-bold">{task.owner}</span>
                      <span className="text-slate-400 text-[10px] w-8 text-right">{task.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <p className="text-slate-300 text-sm leading-6 max-w-[687px] text-center">
          Private notes stay private. Shared context is intentionally approved, auditable, and visible only to the selected audience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white rounded-full text-slate-900 text-sm font-bold hover:bg-gray-100 transition-colors">
            View product tour
          </button>
          <button className="px-4 py-3 border-b border-white/40 text-white text-sm font-bold hover:border-white transition-colors">
            Get a demo
          </button>
        </div>

      </div>
    </section>
  );
}
