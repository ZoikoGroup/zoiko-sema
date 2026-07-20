import React from "react";

export function ProductProblems() {
  return (
    <section className="relative w-full bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Side - Header & Copy */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start items-start">
          <div className="text-blue-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            01
          </div>
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight lg:leading-[1.2] mb-6 max-w-md">
            Unverified time.<br />Fragmented policy.<br />Opaque monitoring.
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed max-w-md">
            Most collaboration and time tools weren&apos;t built to survive
            a payroll audit or a works-council question.
          </p>
        </div>

        {/* Right Side - Problem Cards */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          {/* Card 1 */}
          <div className="w-full bg-white rounded-3xl border-t border-violet-100 p-8 shadow-sm flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-32 flex-shrink-0">
              <h3 className="text-slate-900 text-base font-extrabold font-['Inter']">
                Unverified<br />time
              </h3>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6 flex-1">
              Self-reported or unchecked timers create payroll risk and disputes with no evidence
              trail behind them.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white rounded-3xl border-t border-violet-100 p-8 shadow-sm flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-32 flex-shrink-0">
              <h3 className="text-slate-900 text-base font-extrabold font-['Inter']">
                Fragmented<br />policy
              </h3>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6 flex-1">
              Jurisdiction and role rules live in spreadsheets and drift out of sync with what&apos;s
              actually enforced.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white rounded-3xl border-t border-violet-100 p-8 shadow-sm flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-32 flex-shrink-0">
              <h3 className="text-slate-900 text-base font-extrabold font-['Inter']">
                Opaque<br />monitoring
              </h3>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6 flex-1">
              Employee monitoring tools erode trust without giving workers visibility or a route to
              respond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
