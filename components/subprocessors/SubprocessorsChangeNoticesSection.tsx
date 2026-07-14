export function SubprocessorsChangeNoticesSection() {
  const steps = [
    {
      number: "1",
      title: "Identify",
      description: "New or changed provider is proposed.",
      tag: "Trigger",
      circleClass: "bg-blue-500 text-white",
      tagClass: "bg-sky-100 text-blue-500",
    },
    {
      number: "2",
      title: "Review",
      description: "Privacy, legal, security, product validate scope.",
      tag: "Privacy - Legal",
      circleClass: "bg-violet-600 text-white",
      tagClass: "bg-violet-100 text-violet-600",
    },
    {
      number: "3",
      title: "Publish",
      description: "Update list and change notice if approved.",
      tag: "Approved",
      circleClass: "bg-teal-600 text-white",
      tagClass: "bg-green-100 text-teal-600",
    },
    {
      number: "4",
      title: "Notify",
      description: "Customers can subscribe or review changes.",
      tag: "Customers",
      circleClass: "bg-slate-900 text-white",
      tagClass: "bg-slate-200 text-slate-900",
    },
    {
      number: "5",
      title: "Respond",
      description: "Objection or questions route to privacy / legal.",
      tag: "Privacy / Legal",
      circleClass: "bg-green-500 text-white",
      tagClass: "bg-green-100 text-green-500",
    },
  ];

  return (
    <section id="change-notices" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
      <div className="mb-8">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 font-['Plus_Jakarta_Sans']">
          CHANGE NOTICE FLOW
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
          How list changes are handled.
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Steps */}
        <div className="flex-1 relative flex flex-col gap-4">
          {/* The vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-5 z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base font-['Sora'] shrink-0 ${step.circleClass}`}>
                {step.number}
              </div>
              
              <div className="flex-1 min-h-[80px] bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-slate-900 text-base font-bold font-['Sora']">{step.title}</h4>
                  <p className="text-gray-500 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5">
                    {step.description}
                  </p>
                </div>
                <div className={`px-4 py-1.5 rounded-full flex items-center justify-center shrink-0 ${step.tagClass}`}>
                  <span className="text-xs font-bold font-['Plus_Jakarta_Sans']">{step.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-72 h-[470px] bg-slate-900 rounded-[20px] overflow-hidden relative shrink-0">
          <img 
            src="/sub/change-notices.png" 
            alt="Change Notice Process" 
            className="w-full h-[520px] absolute -top-[25px] left-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
