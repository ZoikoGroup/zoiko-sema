import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const ProductProofSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-16">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Product Proof
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl lg:text-4xl font-extrabold`}>
            The follow-up workspace, from recap to CRM
          </h2>
          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed max-w-[700px]">
            Captured commitments, an editable client-ready draft that requires review before send, owner assignment, CRM sync, and an audit timeline — in one place.
          </p>
        </div>
        
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full lg:w-64 flex flex-col gap-4">
            {[
              { title: "Call recap panel", desc: "Client, account, call time, participants, and an external/internal label.", icon: "/call/icon-07.svg" },
              { title: "Commitment extraction", desc: "Asks, promises, risks, and decisions with owner, due date, and priority.", icon: "/call/icon-02.svg" },
              { title: "Follow-up draft editor", desc: "Editable recap and next steps with an explicit approval status.", icon: "/call/icon-36.svg" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex justify-center items-center shrink-0">
                    <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
                  </div>
                  <h5 className={`${plusJakartaSans.className} text-slate-900 text-sm font-bold leading-tight`}>{item.title}</h5>
                </div>
                <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-[600px] flex justify-center">
            <img 
              src="/call/product-proof-dashboard.png" 
              alt="Workspace UI" 
              className="w-full max-w-[600px] h-auto rounded-[20px] shadow-lg border border-slate-100"
            />
          </div>
          
          <div className="w-full lg:w-64 flex flex-col gap-4">
            {[
              { title: "Owner assignment", desc: "Owner chips, due dates, reminders, and escalation routes.", icon: "/call/icon-19.svg" },
              { title: "CRM sync drawer", desc: "CRM fields, opportunity stage, and sync status with field mapping.", icon: "/call/icon-06.svg" },
              { title: "Audit timeline", desc: "Generated, edited, approved, sent, synced, exported, or blocked.", icon: "/call/icon-14.svg" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex justify-center items-center shrink-0">
                    <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
                  </div>
                  <h5 className={`${plusJakartaSans.className} text-slate-900 text-sm font-bold leading-tight`}>{item.title}</h5>
                </div>
                <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
