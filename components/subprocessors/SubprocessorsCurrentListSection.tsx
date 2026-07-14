export function SubprocessorsCurrentListSection() {
  const providers = [
    {
      category: "Hosting",
      purpose: "Service delivery",
      dataScope: "Workspace data",
      region: "Global",
      status: "Active",
      dotColor: "bg-blue-500",
      statusColor: "text-teal-600 bg-green-100",
    },
    {
      category: "Email / SMS",
      purpose: "Notifications",
      dataScope: "Contact data",
      region: "US / EU",
      status: "Active",
      dotColor: "bg-violet-600",
      statusColor: "text-teal-600 bg-green-100",
    },
    {
      category: "Support",
      purpose: "Customer support",
      dataScope: "Ticket data",
      region: "US",
      status: "Active",
      dotColor: "bg-teal-600",
      statusColor: "text-teal-600 bg-green-100",
    },
    {
      category: "Security",
      purpose: "Monitoring",
      dataScope: "Logs",
      region: "Global",
      status: "Active",
      dotColor: "bg-green-500",
      statusColor: "text-teal-600 bg-green-100",
    },
    {
      category: "Analytics",
      purpose: "Diagnostics",
      dataScope: "Usage data",
      region: "Global",
      status: "Active",
      dotColor: "bg-slate-900",
      statusColor: "text-teal-600 bg-green-100",
    },
    {
      category: "AI services",
      purpose: "AI features",
      dataScope: "Configured data",
      region: "TBD",
      status: "Review",
      dotColor: "bg-amber-500",
      statusColor: "text-yellow-600 bg-yellow-50",
    },
    {
      category: "Integrations",
      purpose: "Customer-directed apps",
      dataScope: "Varies",
      region: "Customer-specific",
      status: "Review",
      dotColor: "bg-red-500",
      statusColor: "text-yellow-600 bg-yellow-50",
    },
  ];

  return (
    <section id="current-list" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            CURRENT SUBPROCESSOR LIST
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
            Provider categories at a glance.
          </h3>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 bg-violet-600 rounded-full border border-violet-600 text-white text-xs font-bold font-['Plus_Jakarta_Sans'] cursor-pointer">
            All
          </div>
          <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-600 text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-slate-50 cursor-pointer transition-colors">
            Active
          </div>
          <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-600 text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-slate-50 cursor-pointer transition-colors">
            Review
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl border border-violet-100 overflow-hidden mb-5">
        <div className="grid grid-cols-12 bg-slate-900 px-6 py-4">
          <div className="col-span-3 text-white text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-wide">Provider category</div>
          <div className="col-span-3 text-slate-300 text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-wide">Purpose</div>
          <div className="col-span-3 text-slate-300 text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-wide">Data scope</div>
          <div className="col-span-2 text-slate-300 text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-wide">Region</div>
          <div className="col-span-1 text-white text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-wide">Status</div>
        </div>
        
        <div className="flex flex-col">
          {providers.map((provider, index) => (
            <div key={index} className={`grid grid-cols-12 items-center px-6 py-4 ${index !== providers.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <div className="col-span-3 flex items-center gap-3">
                <div className={`w-2 h-2 rounded-sm ${provider.dotColor}`}></div>
                <span className="text-slate-900 text-sm font-bold font-['Sora']">{provider.category}</span>
              </div>
              <div className="col-span-3 text-gray-500 text-xs font-normal font-['Plus_Jakarta_Sans']">
                {provider.purpose}
              </div>
              <div className="col-span-3 text-gray-500 text-xs font-normal font-['Plus_Jakarta_Sans']">
                {provider.dataScope}
              </div>
              <div className="col-span-2 text-gray-500 text-xs font-normal font-['Plus_Jakarta_Sans']">
                {provider.region}
              </div>
              <div className="col-span-1">
                <div className={`inline-flex px-3 py-1 rounded-full ${provider.statusColor}`}>
                  <span className="text-xs font-bold font-['Plus_Jakarta_Sans']">{provider.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-slate-400 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5">
        Category-level view. Final provider names, region data, and legal terms are validated by privacy and legal before publication.
      </p>
    </section>
  );
}
