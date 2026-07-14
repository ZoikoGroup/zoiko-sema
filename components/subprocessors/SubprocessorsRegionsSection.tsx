export function SubprocessorsRegionsSection() {
  const regions = [
    {
      title: "Global",
      description: "Providers that may operate across regions where approved.",
      dotColor: "bg-blue-500",
    },
    {
      title: "United States",
      description: "US-based processing for applicable providers.",
      dotColor: "bg-violet-600",
    },
    {
      title: "European Union",
      description: "EU processing where applicable and approved.",
      dotColor: "bg-teal-600",
    },
    {
      title: "United Kingdom",
      description: "UK processing where applicable and approved.",
      dotColor: "bg-green-500",
    },
    {
      title: "Customer-specific",
      description: "Region determined by customer configuration.",
      dotColor: "bg-amber-500",
    },
    {
      title: "Under review",
      description: "Region status pending privacy/legal confirmation.",
      dotColor: "bg-slate-900",
    },
  ];

  return (
    <section id="regions" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20 bg-[#f0f4f8]">
      <div className="mb-10">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          REGIONS
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Sora']">
          Where processing may occur.
        </h3>
        <p className="text-slate-500 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
          Approved region information only — no unsupported transfer claims. Region status may be under legal review.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
        {regions.map((region, index) => (
          <div key={index} className="bg-white p-8 flex flex-col items-start min-h-[140px]">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-2 h-2 rounded-sm ${region.dotColor}`}></div>
              <h4 className="text-slate-900 text-sm font-bold font-['Sora']">{region.title}</h4>
            </div>
            <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5">
              {region.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
