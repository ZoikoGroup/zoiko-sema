export function ComplianceRequestFlowSection() {
  const steps = [
    {
      num: "1",
      title: "Discover",
      desc: "Buyer or admin opens the Compliance page.",
      color: "bg-blue-500",
      shadow: "shadow-blue-500/50",
    },
    {
      num: "2",
      title: "Select",
      desc: "Choose evidence, questionnaire, DPA, or security review.",
      color: "bg-violet-600",
      shadow: "shadow-violet-600/50",
    },
    {
      num: "3",
      title: "Qualify",
      desc: "Form captures company, plan, region, due date.",
      color: "bg-teal-600",
      shadow: "shadow-teal-600/50",
    },
    {
      num: "4",
      title: "Route",
      desc: "Sales, legal, security, or support queue.",
      color: "bg-slate-900",
      shadow: "shadow-slate-900/50",
    },
    {
      num: "5",
      title: "Deliver",
      desc: "Approved materials, next steps, and tracking record.",
      color: "bg-green-500",
      shadow: "shadow-green-500/50",
    },
  ];

  return (
    <section id="request-flow" className="flex flex-col w-full bg-white px-8 sm:px-12 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
            REVIEW REQUEST FLOW
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
            How a compliance request moves.
          </h3>
        </div>

        <div className="relative w-full mb-16">
          {/* Connecting Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 z-0 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold font-['Sora'] mb-4 ring-[6px] ring-white shadow-md ${step.color} ${step.shadow}`}
                >
                  {step.num}
                </div>
                <h4 className="text-slate-900 text-sm font-bold font-['Sora'] mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-[11px] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#f0f4f8] rounded-3xl overflow-hidden relative mb-8 flex justify-center">
           <img
              src="/compliance/request-flow.png"
              alt="Request Flow Illustration"
              className="w-full max-w-5xl object-contain h-auto"
            />
        </div>
        
        <div className="bg-slate-100 p-[24px] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 text-left w-full">
          <h4 className="text-slate-900 text-sm font-bold font-['Sora'] mb-2">Compliance request requirement</h4>
          <p className="text-slate-600 text-xs font-['Plus_Jakarta_Sans'] leading-5">
            The page collects only the information needed to route requests correctly, confirms with a reference number, and avoids promising response<br className="hidden md:block" />times or evidence availability unless approved.
          </p>
        </div>
      </div>
    </section>
  );
}
