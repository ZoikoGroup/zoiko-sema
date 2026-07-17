import React from "react";

export function ScheduleMeetAvailability() {
  const points = [
    {
      title: "Free/busy scope",
      desc: <>Request only the availability data required for the selected date range and authorized<br/>calendars.</>
    },
    {
      title: "No surveillance",
      desc: <>Never infer presence, activity, location, productivity, or attendance from calendar<br/>availability.</>
    },
    {
      title: "Unknown availability",
      desc: <>Label as Unknown or Calendar not connected; never treat unknown as available.</>
    },
    {
      title: "Time-zone display",
      desc: <>Show organizer zone and invitee-local interpretations, with UTC offset and DST<br/>awareness.</>
    },
    {
      title: "Overlap suggestion",
      desc: <>A suggestion based on visible free/busy and working hours — not a judgment about<br/>behavior.</>
    }
  ];

  return (
    <section className="relative w-full bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="text-teal-400 text-xs font-semibold font-['JetBrains_Mono'] tracking-widest uppercase mb-4">
            AVAILABILITY & TIME ZONE
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight mb-8 max-w-[480px]">
            Permissioned free/busy. Never surveillance.
          </h2>
          
          <div className="flex flex-col w-full">
            {points.map((point, idx) => (
              <div key={idx} className="flex flex-col py-5 border-t border-white/10 gap-2">
                <h3 className="text-white text-sm font-bold font-['Inter']">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 pr-4">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px] h-[575px] bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg outline outline-1 outline-white/10">
            <img
              src="/schedule-a-meet/feature-4.png"
              alt="Availability and Time Zone settings UI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
