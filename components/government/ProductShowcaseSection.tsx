import React from 'react';
import Image from 'next/image';

export const ProductShowcaseSection = () => {
  const features = [
    {
      title: "Left navigation",
      description: <>Overview, Mission Rooms, Programs, Interagency, Records, AI<br/>Review, Audit Logs, Integrations, Admin — visibility scoped by<br/>role.</>
    },
    {
      title: "KPI row",
      description: <>Active mission rooms, records exceptions, external reviews due,<br/>AI items awaiting review — with definitions and freshness.</>
    },
    {
      title: "Priority coordination",
      description: <>Title, program, owner, status, due date, classification, record<br/>state, and external state in one filterable queue.</>
    },
    {
      title: "Governance alerts",
      description: <>Missing records schedule, guest review due, identity exception,<br/>missing AI policy, stale integration — each with an owner and<br/>due date.</>
    },
    {
      title: "Setup checklist",
      description: <>Verify domains, configure SSO, assign records officer, map<br/>schedules, set AI policy, connect archive or SIEM.</>
    },
    {
      title: "Recent activity",
      description: <>Admin, action, object, timestamp, result, and evidence event —<br/>read-only for auditors, export permission separated.</>
    }
  ];

  return (
    <section className="bg-slate-900 py-24 flex justify-center">
      <div className="w-[1440px] max-w-[1440px] px-[131px]">
        {/* Header section */}
        <div className="flex flex-col items-center mb-[94.4px]">
          <div className="text-center text-teal-400 text-xs font-bold font-inter tracking-wider uppercase mb-[14px]">PRODUCT SHOWCASE</div>
          <h2 className="text-center text-white text-4xl font-extrabold font-plus-jakarta mb-[12.40px] leading-tight">The Government Coordination Hub.</h2>
          <p className="text-center text-slate-300 text-base font-normal font-inter leading-[25px]">
            One workspace for mission rooms, programs, records, AI review, audit logs, and<br/>admin — scoped by role.
          </p>
        </div>

        {/* Content section */}
        <div className="flex flex-row justify-between items-start">
          {/* Left Column (Features) */}
          <div className="flex flex-col gap-[19.25px] flex-shrink-0 mt-[0.75px]">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-[18px]">
                <div className="absolute left-[-18px] top-[7px] w-1.5 h-1.5 bg-teal-400 rounded-[3px]"></div>
                <h3 className="text-white text-sm font-bold font-inter mb-2 leading-none">{feature.title}</h3>
                <p className="whitespace-nowrap text-slate-400 text-xs font-normal font-inter leading-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Mockup) */}
          <div className="w-[702px] h-[498.40px] relative bg-white rounded-2xl shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.40)] outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden flex-shrink-0">
            <div className="w-[700.40px] h-9 left-[0.80px] top-[0.80px] absolute bg-slate-50 border-b-[0.80px] border-violet-100 z-10 flex items-center px-4 space-x-[11px]">
              <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
            </div>
            <div className="w-[700.40px] h-[460px] left-[0.80px] top-[37.60px] absolute bg-white overflow-hidden">
                <Image 
                  src="/governement/interagency-collaboration.png"
                  alt="Government Coordination Hub Dashboard"
                  width={818}
                  height={460}
                  className="absolute left-[-76px] top-0 max-w-none"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
