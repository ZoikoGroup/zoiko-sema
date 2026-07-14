export function HelpCenterSupportPhilosophySection() {
  const steps = [
    {
      title: "Search",
      icon: <img src="/help/icon-search.svg" alt="Search" />
    },
    {
      title: "Suggested Articles",
      icon: <img src="/help/icon-document.svg" alt="Suggested Articles" />
    },
    {
      title: "Troubleshooting",
      icon: <img src="/help/icon-wrench.svg" alt="Troubleshooting" />
    },
    {
      title: "Create Ticket",
      icon: <img src="/help/icon-ticket.svg" alt="Create Ticket" />
    },
    {
      title: "Track Status",
      icon: <img src="/help/icon-track.svg" alt="Track Status" />
    }
  ];

  return (
    <div className="w-full bg-violet-50 flex justify-center py-20 overflow-hidden">
      <div className="w-full max-w-[1280px] px-8 lg:px-12 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-zinc-900 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">
            Our Support Philosophy
          </h2>
          <p className="max-w-[672px] text-zinc-700 text-base font-normal font-['Inter'] leading-6">
            From self-serve resources to direct engineer access, we guide you through every step<br className="hidden md:block"/>of resolving your query.
          </p>
        </div>
        
        <div className="w-full relative mt-8 pt-4 pb-12 overflow-x-auto">
          {/* Connecting Line - hidden on very small screens, visible md+ */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-neutral-300 hidden md:block z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative z-10 min-w-max md:min-w-0 px-4 md:px-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[88px] h-[88px] mb-4 bg-white rounded-full flex items-center justify-center shadow-[0px_8px_24px_-8px_rgba(0,0,0,0.12)] relative z-10">
                  <div className="w-6 h-6 flex justify-center items-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-zinc-900 text-sm font-medium font-['Inter'] text-center">
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
