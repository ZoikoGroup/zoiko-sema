import Link from "next/link";

export function ComplianceOverviewSection() {
  const cards = [
    {
      id: "CA",
      title: "Control areas",
      description: "Security, privacy, responsible AI, access, and reliability domains in one map.",
      linkText: "Explore control map →",
      linkHref: "#control-map",
      bgColor: "bg-sky-100",
      iconBg: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      id: "RD",
      title: "Review docs",
      description: "DPA, policies, subprocessors, and status connected for procurement review.",
      linkText: "Open evidence library →",
      linkHref: "#evidence-library",
      bgColor: "bg-violet-100",
      iconBg: "bg-violet-600",
      textColor: "text-violet-600",
    },
    {
      id: "EA",
      title: "Evidence access",
      description: "Gated materials are requested through the approved Trust Center route.",
      linkText: "Request review →",
      linkHref: "#request-review",
      bgColor: "bg-green-100",
      iconBg: "bg-teal-600",
      textColor: "text-teal-600",
    },
    {
      id: "NO",
      title: "No overclaiming",
      description: "Only approved frameworks and statements — no unverified certification badges.",
      linkText: "See disclaimer →",
      linkHref: "#",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      id: "RP",
      title: "Review paths",
      description: "Clear routes for security, privacy, procurement, and legal reviewers.",
      linkText: "View review paths →",
      linkHref: "#review-paths",
      bgColor: "bg-orange-100",
      iconBg: "bg-amber-500",
      textColor: "text-amber-500",
    },
    {
      id: "ST",
      title: "Operational trust",
      description: "System status, subprocessor changes, and concern reporting stay visible.",
      linkText: "View operations →",
      linkHref: "#operations",
      bgColor: "bg-slate-200",
      iconBg: "bg-slate-900",
      textColor: "text-slate-900",
    },
  ];

  return (
    <section id="overview" className="flex flex-col items-start text-left w-full bg-white px-8 sm:px-12 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 flex flex-col items-start gap-3.5 max-w-[769px]">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            COMPLIANCE OVERVIEW
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 font-['Sora']">
            What you can review, and what needs a request.
          </h3>
        </div>
        <p className="text-slate-600 text-base font-['Plus_Jakarta_Sans'] leading-6">
          A calm, procurement-ready summary of compliance domains, approved
          statements, gated evidence, and document request paths — routed to the
          right legal and security resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-6 rounded-2xl flex flex-col justify-between h-[220px] ${card.bgColor}`}
          >
            <div>
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold font-['Sora'] mb-4 ${card.iconBg}`}
              >
                {card.id}
              </div>
              <h4 className="text-slate-900 text-base font-bold font-['Sora'] mb-1">
                {card.title}
              </h4>
              <p className="text-slate-600 text-xs font-['Plus_Jakarta_Sans'] leading-5">
                {card.description}
              </p>
            </div>
            <Link
              href={card.linkHref}
              className={`text-xs font-bold font-['Plus_Jakarta_Sans'] hover:underline ${card.textColor}`}
            >
              {card.linkText}
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
