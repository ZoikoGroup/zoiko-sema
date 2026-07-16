import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const ScenariosSection = () => {
  return (
    <section className="w-full bg-slate-50 flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-12">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Scenarios
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl lg:text-4xl font-extrabold`}>
            Recognize your client-facing situation
          </h2>
          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed max-w-[650px]">
            From discovery to escalation, Client Call Follow-Up fits every client conversation your team runs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            { title: "Sales discovery call", role: "Sales reps / managers", desc: "Capture pain points, buying criteria, budget signals, objections, and the next demo step.", tag: "Deal hygiene", icon: "/call/icon-15.svg" },
            { title: "Product demo follow-up", role: "Account executives", desc: "Summarize demo interests, technical questions, decision makers, and requested assets.", tag: "Shorter cycles", icon: "/call/icon-03.svg" },
            { title: "Customer success review", role: "CSMs / account teams", desc: "Capture risks, adoption blockers, renewal notes, and executive commitments.", tag: "Retention", icon: "/call/icon-13.svg" },
            { title: "Consulting client check-in", role: "Consultants / agencies", desc: "Track deliverables, feedback, approvals, scope changes, and next actions.", tag: "Less friction", icon: "/call/icon-18.svg" },
            { title: "Implementation kickoff", role: "Onboarding / pro services", desc: "Create action owners, milestones, dependencies, and data needed from the client.", tag: "Onboarding clarity", icon: "/call/icon-20.svg" },
            { title: "Escalation or issue call", role: "Support / operations", desc: "Capture issue summary, owner, resolution promise, and follow-up date.", tag: "Protect trust", icon: "/call/icon-12.svg" }
          ].map((scenario, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-28 bg-[#1e2340] relative flex justify-center items-center">
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-blue-500/20 rounded border border-blue-500/30 text-blue-300 text-[10px] font-medium uppercase tracking-wide">
                  {scenario.tag}
                </div>
                <div className="text-blue-300">
                  <img src={scenario.icon} alt="" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(20%) saturate(1000%) hue-rotate(200deg) brightness(110%) contrast(100%)' }} />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-start items-start gap-3">
                <h4 className={`${plusJakartaSans.className} text-slate-900 text-lg font-bold`}>{scenario.title}</h4>
                <p className="text-blue-600 text-xs font-bold font-['Inter']">{scenario.role}</p>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed mt-1">
                  {scenario.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
