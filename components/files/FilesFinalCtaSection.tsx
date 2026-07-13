import { ArrowRight } from "lucide-react";

export default function FilesFinalCtaSection() {
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
      className="px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#8B7BFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8B7BFF]" />
          Get started
        </p>
        <h2 className="text-3xl font-bold leading-snug text-white sm:text-[32px]">
          Keep every file connected to the conversation that matters.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#AEB7CC]">
          Start free, invite your team, or speak with sales about secure file
          collaboration, governance, and deployment.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
            Start free
          </button>
          <button className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Contact sales
          </button>
        </div>

        <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#8B7BFF] hover:text-white">
          Explore Search
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
