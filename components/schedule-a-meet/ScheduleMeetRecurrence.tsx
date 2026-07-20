import React from "react";

export function ScheduleMeetRecurrence() {
  const recurrenceRows = [
    { label: "Default", desc: <>Does not repeat.</> },
    { label: "Supported rules", desc: <>Daily, weekdays, weekly, monthly, and custom interval where<br/>providers support them.</> },
    { label: "End condition", desc: <>Required for long-running or custom series: end date or<br/>occurrence count.</> },
    { label: "Exceptions", desc: <>Edit one occurrence, this-and-following, or entire series<br/>where provider semantics support it.</> },
    { label: "Cancellation", desc: <>One occurrence, future occurrences, or entire series — with<br/>confirmation and audit.</> }
  ];

  const guestRows = [
    { label: "Internal member", desc: <>Directory identity, workspace access, calendar availability,<br/>notification preferences.</> },
    { label: "External guest", desc: <>Clearly marked; domain, notice, waiting room, recording/AI,<br/>follow-up rules evaluated.</> },
    { label: "Restricted domain", desc: <>Block or route for approval; plain-language reason and safe<br/>alternative shown.</> },
    { label: "Personal email", desc: <>Organization guest policy applies; never assumed safe or<br/>unsafe by default.</> },
    { label: "Group / distribution list", desc: <>Resolve size and eligibility safely; warn if membership can't<br/>be evaluated.</> }
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-violet-600 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            RECURRENCE & GUESTS
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            Explicit series scope. Clearly marked<br />external access.
          </h2>
        </div>

        {/* Tables Row */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-stretch">
          
          {/* Recurrence Model Table */}
          <div className="w-full lg:w-1/2 p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col">
            <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-4">
              Recurrence model
            </h3>
            <div className="flex flex-col flex-1">
              {recurrenceRows.map((row, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row py-4 border-t border-slate-200 gap-2 sm:gap-4">
                  <div className="w-32 flex-shrink-0 text-violet-600 text-xs font-semibold font-['Inter']">
                    {row.label}
                  </div>
                  <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest & Domain Treatment Table */}
          <div className="w-full lg:w-1/2 p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col">
            <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-4">
              Guest & domain treatment
            </h3>
            <div className="flex flex-col flex-1">
              {guestRows.map((row, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row py-4 border-t border-slate-200 gap-2 sm:gap-4">
                  <div className="w-32 flex-shrink-0 text-blue-600 text-xs font-semibold font-['Inter']">
                    {row.label}
                  </div>
                  <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Image */}
        <div className="w-full max-w-[1178px] mx-auto h-72 bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg">
          <img
            src="/schedule-a-meet/feature-5.png"
            alt="Recurrence and Guests Illustration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
