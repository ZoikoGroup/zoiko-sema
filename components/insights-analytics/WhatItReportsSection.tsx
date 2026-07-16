import React from "react";

export default function WhatItReportsSection() {
  const reportingAreas = [
    {
      icon: "📈",
      title: "Adoption",
      desc: "Activation & return, by<br/>cohort",
      paddingY: "py-4",
    },
    {
      icon: "✅",
      title: "Meeting-to-work",
      desc: "Review, decisions,<br/>ownership",
      paddingY: "py-4",
    },
    {
      icon: "💬",
      title: "Collaboration",
      desc: "Workspace health, guests",
      paddingY: "pt-4 pb-8",
    },
    {
      icon: "🤖",
      title: "AI governance",
      desc: "Use, review, retention",
      paddingY: "pt-4 pb-8",
    },
    {
      icon: "🔒",
      title: "Security & access",
      desc: "Identity, guest, policy",
      paddingY: "pt-4 pb-8",
    },
    {
      icon: "⚙",
      title: "Operational",
      desc: "Integrations, reports,<br/>sync",
      paddingY: "py-4",
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1160px] px-6 inline-flex flex-col justify-start items-center gap-8">
        
        <div className="w-full max-w-[680px] flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="text-center justify-center text-[#64748B] text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-7 tracking-widest">
              What it reports
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="text-center justify-center text-[#1E1B4B] text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-10">
              Six governed reporting areas
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1050px] inline-flex flex-wrap md:flex-nowrap justify-center items-start gap-3">
          {reportingAreas.map((area, index) => (
            <div 
              key={index} 
              className={`flex-1 px-3.5 ${area.paddingY} bg-white rounded-xl shadow-[0px_4px_14px_0px_rgba(17,22,60,0.05)] shadow-[0px_1px_2px_0px_rgba(17,22,60,0.06)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-0.5`}
            >
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-[#1E1B4B] text-xl font-normal font-['Inter'] leading-9">
                  {area.icon}
                </div>
              </div>
              <div className="self-stretch pt-1.5 flex flex-col justify-start items-center">
                <div className="text-center justify-center text-[#1E1B4B] text-xs font-bold font-['Plus_Jakarta_Sans'] leading-4">
                  {area.title}
                </div>
              </div>
              <div className="self-stretch pb-[0.58px] flex flex-col justify-start items-center">
                <div 
                  className="text-center justify-center text-[#64748B] text-xs font-normal font-['Inter'] leading-4"
                  dangerouslySetInnerHTML={{ __html: area.desc }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
