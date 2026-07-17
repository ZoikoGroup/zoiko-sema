import React from "react";

export function ScheduleMeetJourney() {
  const steps = [
    {
      num: "01",
      title: "Notice",
      desc: <>Find Schedule a Meeting in<br/>the Sema Meet menu.</>
    },
    {
      num: "02",
      title: "Resolve",
      desc: <>Identity, workspace,<br/>organizer, host, plan,<br/>calendar connection,<br/>policy.</>
    },
    {
      num: "03",
      title: "Enter",
      desc: <>Minimum meeting info: title,<br/>date, time, time zone.</>
    },
    {
      num: "04",
      title: "Check",
      desc: <>Availability, room, guest,<br/>and recurrence<br/>requirements.</>
    },
    {
      num: "05",
      title: "Review",
      desc: <>Effective recording, AI,<br/>retention, and external-<br/>access settings.</>
    },
    {
      num: "06",
      title: "Send",
      desc: <>One idempotent invitation<br/>operation; confirm calendar<br/>delivery.</>
    }
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-violet-600 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            SCHEDULING JOURNEY
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            From menu click to a confirmed, delivered<br />invitation.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-0 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="w-full xl:w-48 flex flex-col gap-1.5 pr-5">
              <div className="flex items-center gap-2.5 w-full">
                <div className="w-8 h-8 relative bg-white rounded-2xl flex items-center justify-center shadow-[inset_0px_0px_0px_1.5px_rgba(108,79,224,1.00)] shrink-0">
                  <span className="text-violet-600 text-xs font-semibold font-['JetBrains_Mono']">{step.num}</span>
                </div>
                <div className="flex-1 h-[1.5px] bg-slate-200" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-['Inter'] mt-1">{step.title}</h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="w-full max-w-[1181px] mx-auto h-72 bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg">
          <img
            src="/schedule-a-meet/feature-2.png"
            alt="Scheduling Journey Illustration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
