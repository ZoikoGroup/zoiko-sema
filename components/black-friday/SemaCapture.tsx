import { CircleDot, ListFilter, Search, type LucideIcon } from "lucide-react";

const FEATURES: readonly {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Summarize & share",
    description:
      "Capture decisions, action items and follow-ups inside every meeting — no more lost notes between calls.",
    icon: ListFilter,
  },
  {
    title: "Automatic recording",
    description:
      "Start a meeting and Sema records audio and video in real time, so the right people can revisit it later.",
    icon: CircleDot,
  },
  {
    title: "Transcription & search",
    description:
      "Every conversation becomes searchable, so it's easy to find and reference specific moments.",
    icon: Search,
  },
] as const;

const STATS = [
  { value: "200K+", label: "People on the platform" },
  { value: "150+", label: "Teams & companies" },
  { value: "40+", label: "Integrations" },
  { value: "48/10", label: "Avg. user rating" },
] as const;

export default function SemaCapture() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#0A0F1A] text-white">
      {/* Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-48px] top-[38px] text-center z-10 hidden w-[230px] -rotate-[20deg] rounded-md bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 pl-[58px] pr-6 shadow-[0_0_30px_rgba(59,130,246,0.55)] md:block"
      >
        <p className="whitespace-nowrap text-sm font-extrabold uppercase leading-4">
          Black Friday
        </p>
        <p className="whitespace-nowrap text-sm italic leading-4 text-white/90">
          Sale
        </p>
      </div>

      <div className="px-6 pb-14 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
              <span aria-hidden="true" className="h-0.5 w-5 bg-[#4f8bff]" />
              Every conversation, in context
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Capture what matters, automatically.
            </h2>
          </div>

          <ul className="mx-auto mt-10 grid max-w-[1100px] gap-5 md:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#0e1426] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3b5bdb]/40 bg-[#14275c] text-[#4f8bff]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-white/60">
                    {feature.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-white/10 px-6 py-12 sm:px-8 lg:px-10">
        <ul className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <p className="text-4xl font-extrabold tracking-tight text-[#4f8bff]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
