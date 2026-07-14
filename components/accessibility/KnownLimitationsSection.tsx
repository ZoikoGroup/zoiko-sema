"use client"

interface Limitation {
  title: string;
  description: string;
  tag: string;
}

const limitations: Limitation[] = [
  {
    title: "Complex admin tables",
    description:
      "Some data tables in the admin console need improved screen-reader navigation.",
    tag: "Targeted next release",
  },
  {
    title: "Meeting layout on mobile",
    description:
      "Some meeting grids on small screens can be difficult to navigate by touch.",
    tag: "In active design",
  },
  {
    title: "Custom emoji picker",
    description: "The emoji picker lacks full keyboard arrow-key navigation.",
    tag: "Backlog, tracked",
  },
];

export default function KnownLimitationsSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section { animation: fadeInUp 0.7s ease-out both; }
        .fade-in-item { animation: fadeInUp 0.6s ease-out both; }
      `}</style>

      <div className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Known limitations
        </p>
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          What we&apos;re still improving.
        </h2>
        <p className="mt-4 max-w-160 text-[15px] leading-relaxed text-[#54577A]">
          Transparency over overclaiming. These are areas we know need work, tracked
          with active remediation.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {limitations.map(({ title, description, tag }, i) => (
            <div
              key={title}
              className="fade-in-item rounded-xl border border-amber-100 bg-[#FDF3E0] border border-[#F5E3BC] p-5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-sm font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {description}
              </p>
              <p className="mt-3 text-xs font-bold text-[#B7791F]">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
