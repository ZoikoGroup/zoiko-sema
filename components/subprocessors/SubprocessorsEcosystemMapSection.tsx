export function SubprocessorsEcosystemMapSection() {
  const categories = [
    {
      title: "Hosting",
      description: "Service infrastructure.",
      dotColor: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      title: "Email / SMS",
      description: "User notifications.",
      dotColor: "bg-violet-600",
      borderColor: "border-violet-600",
    },
    {
      title: "Support",
      description: "Ticket resolution.",
      dotColor: "bg-teal-600",
      borderColor: "border-teal-600",
    },
    {
      title: "AI provider",
      description: "AI features when enabled.",
      dotColor: "bg-amber-500",
      borderColor: "border-amber-500",
    },
    {
      title: "Security",
      description: "Monitoring & protection.",
      dotColor: "bg-green-500",
      borderColor: "border-green-500",
    },
  ];

  return (
    <section id="ecosystem-map" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            SUBPROCESSOR ECOSYSTEM MAP
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
            Providers around the platform.
          </h3>
        </div>
        <div className="inline-flex px-4 py-2 bg-violet-600 rounded-full h-8 items-center justify-center">
          <span className="text-white text-xs font-bold font-['Plus_Jakarta_Sans']">Privacy governed</span>
        </div>
      </div>

      <div className="w-full bg-white rounded-3xl border border-violet-100 overflow-hidden">
        <div className="w-full overflow-x-auto p-10">
          <div className="flex flex-col items-center min-w-[860px]">
            {/* Top: Customer */}
            <div className="px-8 py-3 bg-purple-50 rounded-2xl border border-violet-100 flex flex-col items-center">
              <span className="text-slate-400 text-[10px] font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-1">Customer</span>
              <span className="text-slate-900 text-sm font-bold font-['Sora']">Your organization & data</span>
            </div>

            {/* Vertical Line */}
            <div className="w-[2px] h-6 bg-violet-200"></div>

            {/* Middle: ZoikoSema */}
            <div className="w-full max-w-[520px] h-24 bg-violet-100 rounded-2xl flex items-center justify-center shadow-[0px_22px_44px_-26px_rgba(75,52,176,0.70)] relative overflow-hidden">
              <img src="/logo.png" alt="Zoiko Sema" className="w-64 h-auto object-contain" />
            </div>

            {/* Vertical Line */}
            <div className="w-[2px] h-6 bg-violet-200"></div>
            <span className="text-slate-400 text-[10px] font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-4">Subprocessor categories</span>

            {/* Bottom Row */}
            <div className="flex gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className={`w-40 h-24 bg-gray-50 rounded-2xl border-x-[0.8px] border-b-[0.8px] border-t-[2.4px] ${cat.borderColor} p-4 flex flex-col`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-md ${cat.dotColor}`}></div>
                    <span className="text-slate-900 text-xs font-bold font-['Sora']">{cat.title}</span>
                  </div>
                  <p className="text-gray-500 text-[11px] font-normal font-['Plus_Jakarta_Sans'] leading-tight">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
