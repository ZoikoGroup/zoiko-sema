import React from "react";

export function ScheduleMeetScreen() {
  const regions = [
    { num: "01", title: "Header", desc: "Breadcrumb or back action; title Schedule a meeting; draft status; Help link." },
    { num: "02", title: "Core details", desc: "Meeting title, date, start/end time, time zone, recurrence, organizer/host." },
    { num: "03", title: "Participants", desc: "Invitee autocomplete, external markers, groups, required/optional role." },
    { num: "04", title: "Context", desc: "Workspace, space/channel, meeting template, agenda, files, linked work item." },
    { num: "05", title: "Availability", desc: "Permission-aware free/busy and time-zone overlap suggestions." },
    { num: "06", title: "Meeting settings", desc: "Waiting room, guest policy, passcode, recording, transcription, AI, retention, Confidential Mode." },
    { num: "07", title: "Effective policy", desc: "Clear labels for inherited, required, locked, or host-configurable settings." },
    { num: "08", title: "Actions", desc: "Save draft, Cancel, Send invitations — never ambiguous when invitations will be delivered." },
    { num: "09", title: "Status", desc: "Inline validation, calendar connection status, policy status, and delivery result." }
  ];

  return (
    <section className="relative w-full bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row gap-16">
        
        {/* Left Column */}
        <div className="w-full xl:w-5/12 flex flex-col justify-start">
          <div className="text-blue-600 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            SCHEDULER SCREEN
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight mb-6">
            Nine regions, each with a<br />defined job.
          </h2>
          <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6 mb-12 max-w-md">
            Product proof comes from a credible scheduling UI, not a decorative illustration. Every region below maps to a required component set.
          </p>
          <div className="w-full max-w-[384px] h-[384px] bg-slate-900 rounded-3xl overflow-hidden shadow-lg relative mx-auto xl:mx-0">
            <img
              src="/schedule-a-meet/feature-3.png"
              alt="Scheduler Screen UI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column (Regions Table) */}
        <div className="w-full xl:w-7/12 bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col">
          {regions.map((region, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col sm:flex-row py-5 gap-4 sm:gap-8 ${idx > 0 ? "border-t border-violet-100" : ""}`}
            >
              <div className="w-8 flex-shrink-0 text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                {region.num}
              </div>
              <div className="w-36 flex-shrink-0 text-slate-900 text-sm font-bold font-['Inter']">
                {region.title}
              </div>
              <div className="flex-1 text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {region.desc}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
