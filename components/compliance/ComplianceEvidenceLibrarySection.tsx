export function ComplianceEvidenceLibrarySection() {
  const libraryItems = [
    {
      resource: "Security Center",
      availability: "Public — no gate unless deeper review requested.",
      status: "Public",
      statusColor: "bg-green-100 text-teal-600",
    },
    {
      resource: "Security Policy",
      availability: "Public legal / trust resource.",
      status: "Public",
      statusColor: "bg-green-100 text-teal-600",
    },
    {
      resource: "Privacy Notice",
      availability: "Public — no gate.",
      status: "Public",
      statusColor: "bg-green-100 text-teal-600",
    },
    {
      resource: "Data Processing Addendum",
      availability: "Public overview; execution may require review.",
      status: "Gated",
      statusColor: "bg-yellow-50 text-yellow-600",
    },
    {
      resource: "Subprocessor List",
      availability: "Public or gated based on legal decision; subscribe where available.",
      status: "Public / gated",
      statusColor: "bg-sky-100 text-blue-500",
    },
    {
      resource: "System Status",
      availability: "Public — operational trust resource.",
      status: "Public",
      statusColor: "bg-green-100 text-teal-600",
    },
    {
      resource: "Responsible AI materials",
      availability: "Public overview; deeper materials gated if needed.",
      status: "Gated",
      statusColor: "bg-yellow-50 text-yellow-600",
    },
    {
      resource: "Security questionnaire",
      availability: "Usually gated — request compliance review.",
      status: "Gated",
      statusColor: "bg-yellow-50 text-yellow-600",
    },
    {
      resource: "Audit reports / certifications",
      availability: "Only if verified and approved; NDA or qualified route.",
      status: "NDA / review",
      statusColor: "bg-violet-100 text-violet-600",
    },
    {
      resource: "Pen test summary",
      availability: "Gated if available and approved; security review route.",
      status: "NDA / review",
      statusColor: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <section id="evidence-library" className="flex flex-col max-w-5xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          EVIDENCE LIBRARY
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Sora']">
          What's public, and what's on request.
        </h3>
        <p className="text-slate-600 text-base font-['Plus_Jakarta_Sans'] max-w-3xl leading-relaxed">
          Availability is explicit — public, gated, or NDA-required. We don't imply every resource
          is instantly available or display unverified certifications.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-violet-100 overflow-hidden shadow-sm">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-purple-50 border-b border-violet-100 px-6 py-4">
          <div className="col-span-4 text-slate-400 text-xs font-bold uppercase tracking-wide font-['Plus_Jakarta_Sans']">
            Resource
          </div>
          <div className="col-span-6 text-slate-400 text-xs font-bold uppercase tracking-wide font-['Plus_Jakarta_Sans']">
            Availability
          </div>
          <div className="col-span-2 text-slate-400 text-xs font-bold uppercase tracking-wide font-['Plus_Jakarta_Sans'] text-right">
            Status
          </div>
        </div>

        <div className="flex flex-col">
          {libraryItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 ${
                index !== libraryItems.length - 1 ? "border-b border-slate-100" : ""
              } items-center`}
            >
              <div className="col-span-4">
                <span className="text-slate-900 text-sm font-bold font-['Sora']">
                  {item.resource}
                </span>
              </div>
              <div className="col-span-6">
                <span className="text-gray-500 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5">
                  {item.availability}
                </span>
              </div>
              <div className="col-span-2 md:text-right mt-2 md:mt-0 flex md:justify-end">
                <span
                  className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans'] ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
