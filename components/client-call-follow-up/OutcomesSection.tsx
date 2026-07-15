import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const OutcomesSection = () => {
  return (
    <section className="w-full bg-blue-600 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className="text-blue-200 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            Outcomes
          </h3>
          <p className={`${plusJakartaSans.className} text-white text-2xl lg:text-3xl font-bold leading-relaxed`}>
            "After every client call, the recap, the commitments, and the CRM update are already drafted — the rep just reviews and sends. Nothing waits three days anymore, and nothing gets promised and forgotten."
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-12 bg-blue-400 rounded-full overflow-hidden shrink-0">
              <img src="/call/avatar.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`${plusJakartaSans.className} text-white font-bold`}>Head of Operations</span>
              <span className="text-blue-200 text-sm">Growth-stage software company</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {[
              { title: "Fewer recap gaps", desc: "Reviewed summaries after every meeting", icon: "/call/icon-31.svg" },
              { title: "Clearer follow-through", desc: "Owned action items with due dates", icon: "/call/icon-22.svg" },
              { title: "Searchable decisions", desc: "Decision log linked to source meetings", icon: "/call/icon-10.svg" }
            ].map((outcome, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/10 flex items-center gap-4 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center shrink-0">
                  <img src={outcome.icon} alt="" className="w-6 h-6 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className={`${plusJakartaSans.className} text-white text-base font-bold`}>{outcome.title}</h4>
                  <p className="text-indigo-100 text-sm font-normal font-['Inter']">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
