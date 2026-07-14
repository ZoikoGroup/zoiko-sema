import Link from "next/link";

export function ComplianceReviewPathsSection() {
  const paths = [
    {
      id: "SR",
      title: "Security reviewers",
      description: "Find security policy, controls, review route, status, and evidence access.",
      linkText: "Security Center →",
      linkHref: "/security-center",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      linkColor: "text-blue-500",
    },
    {
      id: "PR",
      title: "Privacy reviewers",
      description: "Find Privacy Notice, DPA, subprocessors, data request paths, and retention.",
      linkText: "Privacy & Data →",
      linkHref: "/privacy",
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      linkColor: "text-purple-600",
    },
    {
      id: "PT",
      title: "Procurement teams",
      description: "Request compliance materials, questionnaires, and enterprise review support.",
      linkText: "Request review →",
      linkHref: "#request-review",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      linkColor: "text-emerald-600",
    },
  ];

  return (
    <section id="review-paths" className="flex flex-col w-full bg-[#eff4f9] rounded-[32px] p-8 sm:p-12 lg:p-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
            REVIEW PATHS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Sora']">
            Routes by reviewer.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col h-full"
            >
              <div className="flex-1">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold font-['Sora'] mb-6 ${path.iconBg} ${path.iconText}`}
                >
                  {path.id}
                </div>
                <h4 className="text-slate-900 text-lg font-bold font-['Sora'] mb-3">
                  {path.title}
                </h4>
                <p className="text-slate-500 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed mb-8">
                  {path.description}
                </p>
              </div>
              <Link
                href={path.linkHref}
                className={`text-sm font-bold font-['Plus_Jakarta_Sans'] hover:underline ${path.linkColor}`}
              >
                {path.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
