import React from "react";

export function ScheduleMeetWhy() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-blue-600 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            WHY A GOVERNED SCHEDULER
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            A generic calendar form isn't enough for an<br />enterprise platform.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          
          {/* Left Features Column */}
          <div className="w-full lg:w-[384px] flex flex-col gap-6">
            <div className="bg-slate-50 rounded-xl p-6 outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col gap-4 h-full">
              <h3 className="text-slate-400 text-xs font-semibold font-['Inter']">
                Scheduling treated as a basic date/time form
              </h3>
              <div className="w-5 h-[1.5px] bg-slate-200" />
              <p className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">
                A complete governed workflow: identity,<br />availability, guests, policy, delivery, and<br />outcome continuity.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col gap-4 h-full">
              <h3 className="text-slate-400 text-xs font-semibold font-['Inter']">
                Recurring series may create update confusion
              </h3>
              <div className="w-5 h-[1.5px] bg-slate-200" />
              <p className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">
                Define one-event, this-and-following, and<br />entire-series update semantics.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-[384px] bg-slate-50 rounded-xl overflow-hidden relative outline outline-1 outline-offset-[-1px] outline-violet-100 h-80 lg:h-auto min-h-[320px]">
            <img
              src="/schedule-a-meet/feature-1.png"
              alt="Scheduler Interface"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Features Column */}
          <div className="w-full lg:w-[384px] flex flex-col gap-6">
            <div className="bg-slate-50 rounded-xl px-6 pt-6 pb-11 outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col gap-4 h-full">
              <h3 className="text-slate-400 text-xs font-semibold font-['Inter']">
                Host choices may conflict with organization policy
              </h3>
              <div className="w-5 h-[1.5px] bg-slate-200" />
              <p className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">
                Calculate and display effective settings before<br />invitations are sent.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col gap-4 h-full">
              <h3 className="text-slate-400 text-xs font-semibold font-['Inter']">
                Guest invitations may bypass external-access controls
              </h3>
              <div className="w-5 h-[1.5px] bg-slate-200" />
              <p className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">
                Evaluate domain, waiting room, notice, and<br />expiry before send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
