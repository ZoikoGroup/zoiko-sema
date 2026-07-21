import Link from "next/link";

export default function ResponsibleAiHeroSection() {
  return (
    <section className="bg-[#12163A] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-[#D6DEFF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1px] text-[#3457E8]">
            Trust &amp; security
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white max-w-120 md:text-[52px]">
            Responsible AI for governed, reviewable collaboration.
          </h1>
          <p className="mt-5 max-w-130 text-[18px] leading-relaxed text-[#C8C8C8]">
            A trust page explaining how Zoiko Sema frames responsible AI
            principles, human review, admin controls, data protection, safety
            boundaries, transparency, and enterprise assurance for AI-powered
            communication workflows.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="#principles" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1330] transition hover:bg-gray-100">
              Read principles
            </Link>
            <Link href="#controls" className="inline-flex items-center justify-center rounded-full bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
              View AI controls
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img src="/responsive-ai/hero.png" alt="image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
