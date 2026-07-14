import Link from "next/link";

export function SubprocessorsOverviewSection() {
  const cards = [
    {
      id: "PC",
      title: "Provider categories",
      description: "Category-level view of the service providers that support Zoiko Sema — no unapproved vendor names.",
      linkText: "View current list →",
      linkHref: "#current-list",
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50",
      dotBgClass: "bg-blue-600",
    },
    {
      id: "DS",
      title: "Data scope",
      description: "Which data categories may be involved: account, workspace, meeting, AI, support, and more.",
      linkText: "Review data scope →",
      linkHref: "#data-categories",
      colorClass: "text-violet-600",
      bgClass: "bg-purple-50",
      dotBgClass: "bg-violet-600",
    },
    {
      id: "UP",
      title: "Update handling",
      description: "Review list changes, subscribe to notices, and follow the approved question/objection route.",
      linkText: "Subscribe to updates →",
      linkHref: "#subscribe",
      colorClass: "text-green-600",
      bgClass: "bg-green-50",
      dotBgClass: "bg-green-600",
    },
    {
      id: "LT",
      title: "Legal terms",
      description: "The DPA and Privacy & Data pages provide related data-processing and request-routing detail.",
      linkText: "View DPA →",
      linkHref: "/data-processing-addendum",
      colorClass: "text-green-600",
      bgClass: "bg-green-50",
      dotBgClass: "bg-green-600",
    },
  ];

  return (
    <section id="overview" className="flex flex-col max-w-5xl mx-auto w-full pt-16 pb-12 px-8 sm:px-12 lg:px-20">
      <div className="mb-10">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          OVERVIEW
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Sora']">
          Transparency, not a legal appendix.
        </h3>
        <p className="text-slate-500 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
          Understand which provider categories support Zoiko Sema, what data may be involved, how updates are handled, and where to review legal terms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`p-8 rounded-2xl ${card.bgClass} flex flex-col items-start gap-4`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold font-['Plus_Jakarta_Sans'] shrink-0 ${card.dotBgClass}`}>
                {card.id}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-slate-900 text-sm font-bold font-['Sora']">{card.title}</h4>
                <p className="text-slate-600 text-xs font-['Plus_Jakarta_Sans'] leading-5">{card.description}</p>
                <Link href={card.linkHref} className={`text-xs font-bold font-['Plus_Jakarta_Sans'] ${card.colorClass} hover:underline mt-1`}>
                  {card.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
