import React from "react";

export default function ReportsViewsAlertsSection() {
  const features = [
    {
      icon: "💾",
      title: "Saved views",
      desc: "Save scope, filters, and comparison. Shared<br/>views use saved-view identifiers — never<br/>private values in a URL."
    },
    {
      icon: "📤",
      title: "Exports",
      desc: "Role, plan, classification, recipient, expiry, and<br/>audit rules apply to every export, with content<br/>minimization."
    },
    {
      icon: "🕔",
      title: "Schedules",
      desc: "Deliver reports on a cadence. Delivery<br/>success, retries, and failures are reported so<br/>nothing silently breaks."
    },
    {
      icon: "🔔",
      title: "Thresholds & alerts",
      desc: "Alert on review backlog, overdue access<br/>reviews, or failed syncs — routed to the right<br/>owner, not broadcast."
    },
    {
      icon: "♻",
      title: "Review queues",
      desc: "Guest reviews, policy exceptions, and<br/>unowned actions become a worklist authorized<br/>roles can clear."
    },
    {
      icon: "📑",
      title: "Delivery status",
      desc: "Recipient bounces, expiries, and failed runs<br/>surface with a retry and support route — no<br/>data loss."
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-11">
        
        <div className="w-full max-w-[680px] flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-[#64748B] text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-7 tracking-widest">
                  Reports, saved views & alerts
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-10">
                  Turn a report into a recurring<br/>decision
                </div>
            </div>
            <div className="self-stretch pt-[2.70px] flex flex-col justify-start items-center">
                <div className="text-center justify-center text-[#64748B] text-base font-normal font-['Inter'] leading-7">
                  Where role, plan, classification, recipient, retention, and audit rules permit.
                </div>
            </div>
        </div>

        <div className="w-full max-w-[1160px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((feature, i) => (
              <div key={i} className="self-stretch p-5 bg-white rounded-2xl shadow-[0px_4px_14px_0px_rgba(17,22,60,0.05)] shadow-[0px_1px_2px_0px_rgba(17,22,60,0.06)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="w-10 h-10 pt-[5px] pb-1.5 bg-gray-50 rounded-xl inline-flex justify-center items-center">
                      <div className="text-center justify-center text-[#1E1B4B] text-xl font-normal font-['Inter'] leading-8">
                        {feature.icon}
                      </div>
                  </div>
                  <div className="self-stretch pt-1.5 pb-[0.80px] flex flex-col justify-start items-start">
                      <div className="self-stretch justify-center text-[#1E1B4B] text-base font-bold font-['Plus_Jakarta_Sans'] leading-5">
                        {feature.title}
                      </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                      <div 
                        className="self-stretch justify-center text-[#64748B] text-sm font-normal font-['Inter'] leading-5"
                        dangerouslySetInnerHTML={{ __html: feature.desc }}
                      />
                  </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
