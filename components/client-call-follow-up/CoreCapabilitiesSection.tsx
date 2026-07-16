import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const CoreCapabilitiesSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-12">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Core Capabilities
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl lg:text-4xl font-extrabold`}>
            Everything client follow-up needs
          </h2>
          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed max-w-[650px]">
            From recap to scheduling — the full toolkit for accountable, client-ready follow-through.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[
            { title: "Client call recaps", desc: "Summaries useful for internal handoff and client follow-up alike.", icon: "/call/icon-36.svg" },
            { title: "Commitment capture", desc: "Promised deliverables, client asks, objections, and decisions.", icon: "/call/icon-33.svg" },
            { title: "Follow-up drafts", desc: "Client-ready recaps you can edit before sending.", icon: "/call/icon-16.svg" },
            { title: "Owner assignments", desc: "Internal owners, due dates, priorities, and reminders.", icon: "/call/icon-08.svg" },
            { title: "CRM-ready notes", desc: "Notes and next steps prepared for CRM, account, or project records.", icon: "/call/icon-17.svg" },
            { title: "External sharing controls", desc: "Review, approve, restrict, and log what leaves the workspace.", icon: "/call/icon-34.svg" },
            { title: "Next meeting scheduling", desc: "Suggested agenda and a scheduling prompt for the next touchpoint.", icon: "/call/icon-26.svg" },
            { title: "Follow-up status tracking", desc: "Open commitments, overdue actions, and sent/received status.", icon: "/call/icon-27.svg" }
          ].map((capability, i) => (
            <div key={i} className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-200 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex justify-center items-center">
                <img src={capability.icon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className={`${plusJakartaSans.className} text-slate-900 text-base font-bold`}>{capability.title}</h4>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">
                  {capability.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
