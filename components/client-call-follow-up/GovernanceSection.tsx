import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const GovernanceSection = () => {
  return (
    <section className="w-full bg-slate-900 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-16">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-cyan-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Governance & External Sharing
          </h3>
          <h2 className={`${plusJakartaSans.className} text-white text-3xl lg:text-4xl font-extrabold`}>
            Nothing leaves the workspace without review
          </h2>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-relaxed max-w-[650px]">
            Control who sees what, flag sensitive content, and keep an audit trail — so external communication stays consistent and safe.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-12 items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Client visibility", desc: "Internal only, selected recipients, all participants, or guests blocked.", icon: "/call/icon-42.svg" },
              { title: "Review before send", desc: "Owner review, manager approval, or legal review for flagged calls — never an automatic send.", icon: "/call/icon-31.svg" },
              { title: "Sensitive content flags", desc: "Pricing, legal terms, security claims, personal data, and contract risks.", icon: "/call/icon-12.svg" },
              { title: "CRM sync controls", desc: "Sync recap, tasks, notes, and opportunity stage with field mapping and blocked states.", icon: "/call/icon-29.svg" },
              { title: "Retention", desc: "Call recap retention, follow-up history, CRM sync logs, and audit events.", icon: "/call/icon-44.svg" },
              { title: "Audit visibility", desc: "Generated, edited, approved, sent, synced, exported, or blocked by policy.", icon: "/call/icon-13.svg" }
            ].map((item, i) => (
              <div key={i} className="bg-[#131b31] rounded-[16px] p-6 border border-white/5 flex flex-col justify-start items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex justify-center items-center">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(20%) saturate(1000%) hue-rotate(200deg) brightness(110%) contrast(100%)' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className={`${plusJakartaSans.className} text-white text-base font-bold`}>{item.title}</h4>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/call/governance-ui.png" 
              alt="Governance UI" 
              className="w-full max-w-[550px] h-auto rounded-[20px] shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
