import Link from "next/link";

export function ComplianceRelatedMaterialSection() {
  const resources = [
    {
      title: "Security Center",
      description: "Security safeguards, access controls, and enterprise security review.",
      linkText: "Visit Security Center →",
      linkHref: "/security-center",
      dotColor: "bg-blue-500",
    },
    {
      title: "Privacy & Data",
      description: "Data practices, controls, request routes, and enterprise materials.",
      linkText: "View Privacy & Data →",
      linkHref: "/privacy",
      dotColor: "bg-violet-600",
    },
    {
      title: "Responsible AI",
      description: "How AI features are governed, reviewed, and kept transparent.",
      linkText: "View Responsible AI →",
      linkHref: "/responsive-ai",
      dotColor: "bg-teal-600",
    },
    {
      title: "Subprocessors",
      description: "Approved subprocessor categories and the update process.",
      linkText: "View Subprocessors →",
      linkHref: "/data-processing-addendum",
      dotColor: "bg-amber-500",
    },
    {
      title: "Accessibility",
      description: "Accessibility commitments and barrier-reporting routes.",
      linkText: "View Accessibility →",
      linkHref: "#",
      dotColor: "bg-slate-900",
    },
    {
      title: "Report a Concern",
      description: "Raise a security, privacy, AI, or accessibility concern to the right team.",
      linkText: "Report a Concern →",
      linkHref: "/contact",
      dotColor: "bg-red-500",
    },
  ];

  return (
    <section id="resources" className="flex flex-col max-w-5xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          RELATED TRUST MATERIAL
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
          Connected resources.
        </h3>
      </div>

      <div className="bg-white rounded-2xl border border-violet-100 overflow-hidden shadow-sm">
        <div className="flex flex-col">
          {resources.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 ${
                index !== resources.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                <div className={`w-2 h-2 rounded-sm mt-2 md:mt-0 flex-shrink-0 ${item.dotColor}`}></div>
                <div>
                  <h4 className="text-slate-900 text-base font-bold font-['Sora'] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-['Plus_Jakarta_Sans'] leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
              <Link
                href={item.linkHref}
                className="text-violet-600 text-xs font-bold font-['Plus_Jakarta_Sans'] hover:underline whitespace-nowrap ml-6 md:ml-0"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
