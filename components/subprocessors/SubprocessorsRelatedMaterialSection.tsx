import Link from "next/link";

export function SubprocessorsRelatedMaterialSection() {
  const resources = [
    {
      title: "Data Processing Addendum",
      description: "Data-processing terms and enterprise legal review.",
      linkText: "View DPA",
      linkHref: "/data-processing-addendum",
      dotColor: "bg-blue-500",
      linkColor: "text-blue-500",
    },
    {
      title: "Privacy & Data",
      description: "Data practices, categories, and request routes.",
      linkText: "View Privacy & Data",
      linkHref: "/privacy",
      dotColor: "bg-violet-600",
      linkColor: "text-violet-600",
    },
    {
      title: "Security Center",
      description: "Security safeguards, access controls, and review.",
      linkText: "Visit Security Center",
      linkHref: "/security-center",
      dotColor: "bg-teal-600",
      linkColor: "text-teal-600",
    },
    {
      title: "Compliance",
      description: "Compliance posture, evidence, and review paths.",
      linkText: "View Compliance",
      linkHref: "/compliance",
      dotColor: "bg-green-500",
      linkColor: "text-green-500",
    },
    {
      title: "Responsible AI",
      description: "How AI features are governed and reviewed.",
      linkText: "View Responsible AI",
      linkHref: "/responsive-ai",
      dotColor: "bg-amber-500",
      linkColor: "text-amber-500",
    },
    {
      title: "Report a Concern",
      description: "Raise a privacy, security, or legal concern.",
      linkText: "Report a Concern",
      linkHref: "/contact",
      dotColor: "bg-red-500",
      linkColor: "text-red-500",
    },
  ];

  return (
    <section id="resources" className="w-full bg-white">
      <div className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            RELATED TRUST MATERIAL
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
            Connected resources.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-violet-100 p-6 flex flex-col items-start min-h-[180px] justify-between relative group hover:shadow-md transition-shadow">
              <div className="w-7 h-7 rounded-full border border-slate-200 absolute top-6 right-6 flex items-center justify-center text-violet-300 text-sm group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
                →
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${item.dotColor}`}></div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Sora']">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-xs font-['Plus_Jakarta_Sans'] leading-5 max-w-[85%]">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.linkHref}
                className={`text-xs font-bold font-['Plus_Jakarta_Sans'] mt-6 ${item.linkColor} hover:underline`}
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
