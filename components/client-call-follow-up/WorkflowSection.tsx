import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const WorkflowSection = () => {
  return (
    <section className="w-full bg-slate-50 flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-16">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Workflow
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl lg:text-4xl font-extrabold`}>
            From client call to tracked follow-up
          </h2>
          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed max-w-[650px]">
            Six governed steps take a conversation to a client-ready response, assigned owners, and synced context.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start w-full relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-indigo-100 z-0"></div>
          
          {[
            { num: "01", title: "Call", desc: "Client conversation with participants, title, and source workspace.", icon: "/call/icon-07.svg" },
            { num: "02", title: "Capture", desc: "Identify asks, commitments, risks, decisions, and next steps.", icon: "/call/icon-02.svg" },
            { num: "03", title: "Draft", desc: "Client-ready follow-up draft with editable sections.", icon: "/call/icon-36.svg" },
            { num: "04", title: "Assign", desc: "Owners, due dates, priorities, and reminders on every follow-up.", icon: "/call/icon-19.svg" },
            { num: "05", title: "Sync", desc: "Update CRM, project workspace, task tool, and channel after approval.", icon: "/call/icon-06.svg" },
            { num: "06", title: "Track", desc: "Follow-up health, open commitments, overdue tasks, and client response.", icon: "/call/icon-14.svg" },
          ].map((step, i) => (
            <div key={i} className="flex-1 flex flex-col justify-start items-center px-4 relative z-10 gap-3 mb-8 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-[14px] border-[2px] border-indigo-100 flex justify-center items-center shadow-sm">
                <img src={step.icon} alt={step.title} className="w-5 h-5 object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <span className={`${plusJakartaSans.className} text-blue-400 text-xs font-extrabold`}>{step.num}</span>
                <h4 className={`${plusJakartaSans.className} text-slate-900 text-base font-bold mt-1`}>{step.title}</h4>
              </div>
              <p className="text-slate-500 text-xs font-normal font-['Inter'] text-center leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
