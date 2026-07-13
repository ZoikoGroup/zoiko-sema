"use client";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Context search",
    description:
      "Search by project, meeting, sender, owner, decision, thread, or date.",
  },
  {
    title: "AI-assisted retrieval",
    description:
      "Suggests related files from meetings, mail, messages, and notes where policy allows.",
  },
  {
    title: "Permission filtering",
    description: "Results only show files the user is authorized to access.",
  },
];

export default function SearchAiMemorySection() {
  return (
    <section
      style={{
        background: `
          radial-gradient(circle at top center, #6B4FF04D 0%, #6B4FF000 45%),
          radial-gradient(circle at left center, #3457E86B 0%, #3457E800 50%),
          radial-gradient(circle at right center, #503AD78C 0%, #503AD700 50%),
          linear-gradient(to bottom, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
        `,
      }}
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-white">
            Search and AI memory
          </p>

          <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-snug text-white sm:text-3xl lg:max-w-180 lg:text-[32px]">
            Find files by the work they supported, not by filename guessing.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <img
            src="/files/hands.png"
            alt="image"
            className="h-auto w-full object-cover lg:h-100 lg:w-150"
          />

          <div className="mt-0 flex flex-col gap-4 lg:mt-6">
            {features.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-sm font-semibold text-white">{title}</h3>

                <p className="mt-1.5 max-w-full text-xs leading-relaxed text-[#9AA4BD] lg:max-w-100">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}