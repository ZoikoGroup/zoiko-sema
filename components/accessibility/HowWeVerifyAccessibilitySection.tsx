"use client"

interface Method {
  dotColor: string;
  title: string;
  description: string;
}

const methods: Method[] = [
  {
    dotColor: "bg-blue-400",
    title: "Automated scanning",
    description: "Continuous checks integrated into development workflows.",
  },
  {
    dotColor: "bg-[#8B7CF6]",
    title: "Manual keyboard testing",
    description: "Every core flow walked through without a mouse.",
  },
  {
    dotColor: "bg-teal-400",
    title: "Screen reader testing",
    description: "Tested with common assistive technologies.",
  },
  {
    dotColor: "bg-green-400",
    title: "User feedback",
    description: "Barrier reports feed directly into the roadmap.",
  },
];

export default function HowWeVerifyAccessibilitySection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
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
          Testing &amp; evidence
        </p>
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          How we verify accessibility.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            className="fade-in-item rounded-2xl bg-[#0B1330] p-6"
            style={{ animationDelay: "100ms" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
              Testing methods
            </p>
            <div className="flex mt-10 flex-col gap-5">
              {methods.map(({ dotColor, title, description }) => (
                <div key={title} className="flex border-t border-t-[#FFFFFF1A] py-4 items-start gap-3">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotColor}`} />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#9AA4BD]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="fade-in-item overflow-hidden border border-[#EEEBF6] rounded-2xl"
            style={{ animationDelay: "200ms" }}
          >
            <img src="/accessibility/testing.png" alt="image" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
