export default function FilesHeroSection() {
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
      className="px-5 py-12 sm:px-8 lg:px-54 lg:py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[2px] text-white lg:justify-start">
            <span className="h-1 w-1 rounded-full bg-white" />
            Files
          </p>

          <h1 className="mx-auto max-w-full text-3xl font-bold leading-tight text-white sm:text-4xl lg:mx-0 lg:max-w-[400px] lg:text-[42px]">
            Files that stay connected to the work.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC] lg:mx-0">
            Share, discuss, find, and govern documents inside the same Sema
            workspace where meetings, messages, mail, calendar events, notes,
            decisions, and follow-ups happen.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start lg:gap-10">
            <button className="w-full rounded-full bg-[#3457E8] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE] sm:w-auto lg:px-20">
              Start free
            </button>

            <button className="w-full rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto lg:px-15">
              Contact sales
            </button>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {[
              "Secure sharing",
              "Meeting files",
              "Mail attachments",
              "Version history",
              "Search",
              "Admin policies",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-[#FFFFFF12] px-3.5 py-1.5 text-xs text-[#AEB7CC]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/files/hero.png"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}