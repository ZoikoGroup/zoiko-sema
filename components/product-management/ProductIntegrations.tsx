import React from "react";

export function ProductIntegrations() {
  const integrationsList = [
    {
      color: "bg-teal-400",
      title: "HRIS / workforce system",
      desc: "Identity, manager, employment type",
    },
    {
      color: "bg-teal-400",
      title: "Time & attendance",
      desc: "Sessions, clock events, approvals",
    },
    {
      color: "bg-teal-400",
      title: "Scheduling / leave",
      desc: "Planned shift, approved leave",
    },
    {
      color: "bg-yellow-600",
      title: "Payroll / finance",
      desc: "Export readiness, reconciliation",
    },
    {
      color: "bg-teal-400",
      title: "Identity / security",
      desc: "SSO, MFA, SCIM, device context",
    },
    {
      color: "bg-slate-400",
      title: "APIs / webhooks",
      desc: "Approved read/write events",
    },
  ];

  const reportingList = [
    {
      title: "Method: ",
      desc: "Numerator, denominator, population, and exclusions shown for every figure.",
    },
    {
      title: "Coverage: ",
      desc: "Source completeness and any partial or delayed data are disclosed inline.",
    },
    {
      title: "Exports: ",
      desc: "Permission-gated exports with reviewer, timestamp, and integrity metadata.",
    },
    {
      title: "Audit trail: ",
      desc: "Policy version, decision rationale, and challenge outcomes retained for review.",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* Left Column: Integrations */}
          <div className="flex-1 flex flex-col">
            <div className="mb-12">
              <div className="text-blue-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
                08 — Integrations
              </div>
              <h2 className="text-slate-900 text-2xl md:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
                Systems of record stay authoritative.
              </h2>
            </div>

            <div className="flex flex-col">
              {integrationsList.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row sm:items-center py-4 border-t border-slate-200 gap-2 sm:gap-6 relative`}
                >
                  <div className={`w-1.5 h-1.5 ${item.color} rounded-sm absolute left-0 top-6 sm:top-[22px]`} />
                  <div className="pl-6 w-full sm:w-48 flex-shrink-0 text-slate-900 text-sm md:text-xs font-bold font-['Inter']">
                    {item.title}
                  </div>
                  <div className="pl-6 sm:pl-0 flex-1 text-slate-600 text-sm md:text-xs font-normal font-['Inter']">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Reporting & Evidence */}
          <div className="flex-1 flex flex-col">
            <div className="mb-12">
              <div className="text-violet-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
                — Reporting & Evidence
              </div>
              <h2 className="text-slate-900 text-2xl md:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
                Every figure ships with its method.
              </h2>
            </div>

            <div className="flex flex-col">
              {reportingList.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`py-4 border-t border-slate-200 text-sm md:text-xs leading-5`}
                >
                  <span className="text-slate-900 font-bold font-['Inter']">
                    {item.title}
                  </span>
                  <span className="text-slate-600 font-normal font-['Inter']">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
