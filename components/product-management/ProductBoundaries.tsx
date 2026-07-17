import React from "react";

export function ProductBoundaries() {
  const tableData = [
    {
      left: "Policy-approved time and session verification",
      right: "A hidden employee surveillance system",
    },
    {
      left: "Contextual, explainable workforce intelligence",
      right: "An unquestionable “truth” about human performance",
    },
    {
      left: "Human review queues and evidence",
      right: "An automatic disciplinary or termination engine",
    },
    {
      left: "Aggregated management reporting with caveats",
      right: "A default individual ranking or public leaderboard",
    },
    {
      left: "Worker transparency, correction, and challenge",
      right: "A system that denies access to explanations",
    },
    {
      left: "Integration with HRIS, payroll, identity systems",
      right: "Unlimited capture of screens, keystrokes, or mic/camera",
    },
  ];

  return (
    <section className="relative w-full bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-teal-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            07 — Product Boundaries
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
            What ZoikoTime may support — and must never be presented as.
          </h2>
        </div>

        {/* Table Container */}
        <div className="w-full rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 overflow-hidden flex flex-col">
          
          {/* Table Header */}
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 bg-teal-400/10 border-b border-white/10 p-5">
              <span className="text-teal-400 text-xs font-extrabold font-['Inter'] tracking-wide uppercase">
                May Support
              </span>
            </div>
            <div className="flex-1 bg-red-500/10 md:border-l border-b border-white/10 p-5">
              <span className="text-red-400 text-xs font-extrabold font-['Inter'] tracking-wide uppercase">
                Must not be presented as
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {tableData.map((row, idx) => (
            <div key={idx} className="flex flex-col md:flex-row">
              <div className={`flex-1 p-5 ${idx !== tableData.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-slate-300 text-sm font-normal font-['Inter'] leading-5">
                  {row.left}
                </span>
              </div>
              <div className={`flex-1 p-5 md:border-l border-white/5 ${idx !== tableData.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-slate-300 text-sm font-normal font-['Inter'] leading-5">
                  {row.right}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
