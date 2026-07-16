import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const WhyClientCallFollowUpSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-6 flex flex-col justify-start items-center gap-12">
        <div className="max-w-[760px] flex flex-col justify-start items-center text-center gap-4">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Why Client Call Follow-Up
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl lg:text-4xl font-extrabold`}>
            Every promise made on a call, kept after it
          </h2>
          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed max-w-[650px]">
            Capture commitments, respond faster with client-ready drafts, and keep external communication governed — so nothing slips after the call ends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-start items-start gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex justify-center items-center">
              <img src="/call/icon-33.svg" alt="" className="w-6 h-6 object-contain" />
            </div>
            <h4 className={`${plusJakartaSans.className} text-slate-900 text-xl font-bold`}>Capture commitments</h4>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
              Keep client asks, promised deliverables, and internal owners connected to the call.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-start items-start gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex justify-center items-center">
              <img src="/call/icon-35.svg" alt="" className="w-6 h-6 object-contain" />
            </div>
            <h4 className={`${plusJakartaSans.className} text-slate-900 text-xl font-bold`}>Respond faster</h4>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
              Draft follow-up emails, assign tasks, and prepare next meetings without losing context.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-start items-start gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex justify-center items-center">
              <img src="/call/icon-34.svg" alt="" className="w-6 h-6 object-contain" />
            </div>
            <h4 className={`${plusJakartaSans.className} text-slate-900 text-xl font-bold`}>Stay governed</h4>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
              Control external sharing, client visibility, CRM sync, retention, and audit history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
