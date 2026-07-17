import React from "react";

export function PrivacyRightsWorkflow() {
  const steps = [
    { num: 1, title: "Intake", color: "bg-blue-600" },
    { num: 2, title: "Verify identity", color: "bg-indigo-600" },
    { num: 3, title: "Collect & review", color: "bg-teal-600" },
    { num: 4, title: "Respond", color: "bg-yellow-700" },
    { num: 5, title: "Close & audit", color: "bg-slate-900" }
  ];

  return (
    <section className="relative w-full bg-violet-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              DATA-SUBJECT RIGHTS REQUEST WORKFLOW
            </span>
          </div>
          <h2 className="w-full md:w-[750px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Secure intake, verification, deadlines, and<br/>audited response.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-80 rounded-[20px] overflow-hidden shadow-md border border-slate-200/50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/rights-workflow.jpg" 
            alt="Rights request workflow dashboard" 
          />
        </div>

        {/* Steps Row */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="bg-white rounded-[20px] outline outline-2 outline-offset-[-2px] outline-slate-200 p-6 flex flex-col gap-6"
            >
              <div className={`w-7 h-7 ${step.color} rounded-2xl flex items-center justify-center`}>
                <span className="text-white text-xs font-extrabold font-['Inter'] leading-5">
                  {step.num}
                </span>
              </div>
              <span className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">
                {step.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
