import { ArrowRight } from "lucide-react";

const TAGS = ["Individuals & agencies", "No company required", "Reviewed for fit", "Governed campaigns"];

export default function CreatorHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1538] font-inter">
      <img
        src="/creator-partnership/hero-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1538]/90 via-[#0B1538]/70 to-[#13235E]/45" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#38A8F5] font-plus-jakarta">
            India Creator Partnership Program
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white font-plus-jakarta sm:text-5xl lg:text-[56px]">
            Become a Zoiko Sema Creator Partner.
          </h1>

          <p className="mt-5 text-lg font-semibold text-[#38A8F5] font-plus-jakarta">
            Create. Inspire. Connect. Earn.
          </p>

          <p className="mt-3 max-w-lg text-[17px] leading-7 text-[#C9D0E6]">
            Bring your audience a smarter way to meet, communicate, and collaborate. Share your creative
            approach and explore a partnership with Zoiko Sema.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F6FED] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2560D8] hover:shadow-lg hover:shadow-blue-600/30"
            >
              Apply for a Partnership <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              How It Works
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[13px] text-[#C9D0E6]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40">
          <img
            src="/creator-partnership/hero-creator.webp"
            alt="Creator reviewing campaign analytics on a laptop"
            width={530}
            height={414}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
