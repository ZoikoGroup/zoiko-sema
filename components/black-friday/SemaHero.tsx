import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cross,
  Diamond,
  Hash,
  Home,
  LayoutGrid,
  MessageCircle,
  MessageSquare,
  Phone,
  Play,
  Rocket,
  Search,
  Shield,
  SquareDot,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  { text: "Meet. Message. Call.", accent: false },
  { text: "Move forward.", accent: true },
] as const;

const ACTIONS = [
  { label: "Explore Zoiko Sema", href: "/", primary: true },
  { label: "Watch it work", href: "/how-it-works", primary: false },
] as const;

const BADGES = [
  "One secure app",
  "Works across devices",
  "Admin & audit controls",
] as const;

const SIDEBAR: readonly {
  label: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  { label: "Home", icon: Home, tone: "text-white/60" },
  { label: "Messages", icon: MessageSquare, tone: "text-[#7fa6ff]" },
  { label: "Calls", icon: Phone, tone: "text-[#ef4444]" },
  { label: "Meetings", icon: LayoutGrid, tone: "text-white/60" },
  { label: "Contacts", icon: UserRound, tone: "text-white/60" },
  { label: "Channels", icon: Hash, tone: "text-white/60" },
] as const;

const PARTICIPANTS = [
  {
    name: "Olivia Chen · Host",
    src: "/black-friday/1.png",
    alt: "Olivia Chen, meeting host",
  },
  {
    name: "Daniel Reed",
    src: "/black-friday/2.png",
    alt: "Daniel Reed in the call",
  },
  {
    name: "Marcus Hale",
    src: "/black-friday/3.png",
    alt: "Marcus Hale in the call",
  },
  {
    name: "Emma Wilson",
    src: "/black-friday/4.png",
    alt: "Emma Wilson in the call",
  },
] as const;

const MOBILE_AVATARS = [
  { src: "/black-friday/1.png", alt: "Participant one" },
  { src: "/black-friday/2.png", alt: "Participant two" },
  { src: "/black-friday/3.png", alt: "Participant three" },
  { src: "/black-friday/4.png", alt: "Participant four" },
] as const;

const WAVE = [
  10, 18, 28, 16, 36, 24, 40, 26, 34, 18, 30, 20, 26, 14, 10,
] as const;

const FEATURES: readonly {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
  highlight: boolean;
}[] = [
  {
    title: "Enterprise-grade security",
    description: "End-to-end encryption & compliance you can trust.",
    icon: Shield,
    tone: "border-[#2dd4bf]/25 bg-[#0d2f33] text-[#2dd4bf]",
    highlight: false,
  },
  {
    title: "Works everywhere",
    description: "Desktop, mobile, web — stay connected anytime.",
    icon: SquareDot,
    tone: "border-[#4f8bff]/25 bg-[#12254f] text-[#4f8bff]",
    highlight: false,
  },
  {
    title: "Built for teams",
    description: "Streamline communication and boost productivity.",
    icon: Cross,
    tone: "border-[#a855f7]/25 bg-[#2a1450] text-[#a855f7]",
    highlight: false,
  },
  {
    title: "Black Friday savings",
    description: "Biggest savings of the year on Jaiko Sema plans.",
    icon: Diamond,
    tone: "border-[#fbbf24]/25 bg-[#3a2c0a] text-[#fbbf24]",
    highlight: true,
  },
] as const;

function SaveCard({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-[#7c5cff]/70 bg-[#0b0d24] p-3.5 sm:p-4 lg:p-5 shadow-[0_0_40px_rgba(124,92,255,0.45)] ${className ?? ""}`}
    >
      <p className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase leading-4 tracking-[0.02em] text-[#fbbf24]">
        <Zap
          className="h-3.5 w-3.5 shrink-0 fill-[#fbbf24]"
          aria-hidden="true"
        />
        Black Friday Offer
      </p>
      <div className="flex flex-1 flex-col items-center justify-center py-2 sm:py-3 text-center">
        <p className="text-3xl font-extrabold leading-none text-[#fbbf24] sm:text-4xl lg:text-5xl">
          SAVE
        </p>
        <p className="mt-1 text-3xl font-extrabold leading-none text-[#fbbf24] sm:text-4xl lg:text-5xl">
          25%
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.06em] text-white sm:mt-3 sm:text-sm">
          On all plans
        </p>
      </div>
    </div>
  );
}

export default function SemaHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050711] px-4 sm:px-6 md:px-8 lg:px-10 py-6 lg:py-10 text-white">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_32%,rgba(79,57,246,0.28),transparent_55%),radial-gradient(ellipse_at_100%_0%,rgba(124,92,255,0.16),transparent_40%),radial-gradient(ellipse_at_0%_100%,rgba(30,64,175,0.12),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-[1300px]">
        <div className="grid items-center gap-8 lg:grid-cols-[45fr_55fr] lg:gap-6 xl:gap-12">
          {/* Left Hero Content */}
          <div className="pt-2 lg:pt-0">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#fbbf24]/50 bg-[#fbbf24]/10 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-bold uppercase leading-5 tracking-[0.04em] text-[#fbbf24]">
                <Diamond
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#fbbf24]"
                  aria-hidden="true"
                />
                Black Friday 2026 — Limited Time
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3b5bdb]/50 bg-[#3b5bdb]/10 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm leading-5 text-[#a9bcff]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]"
                />
                Unified communication
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.60rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
              {HEADLINE.map((line) => (
                <span
                  key={line.text}
                  className={
                    line.accent
                      ? "block bg-gradient-to-r from-[#3DA9FF] via-[#3868FA] to-[#B22CF4] bg-clip-text text-transparent"
                      : "block"
                  }
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-base xl:text-lg leading-[1.65] text-white/70">
              Your conversations, more connected — one secure app for meetings,
              messaging and calls, so your team needs fewer disconnected tools.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex h-12 sm:h-[52px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:opacity-95"
                      : "inline-flex h-12 sm:h-[52px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#0b0e20] px-6 text-sm font-semibold text-white transition-all hover:bg-white/5"
                  }
                >
                  {!action.primary && (
                    <Play
                      className="h-3.5 w-3.5 fill-white"
                      aria-hidden="true"
                    />
                  )}
                  {action.label}
                  {action.primary && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            <ul className="mt-6 sm:mt-7 flex flex-wrap gap-x-6 gap-y-2 lg:pl-2 xl:pl-5">
              {BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[#3b82f6]"
                    aria-hidden="true"
                  />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Interface Mockup */}
          <div className="relative mx-auto w-full max-w-[680px] lg:max-w-none">
            {/* Mobile-only offer card preview */}
            <div className="mb-6 block sm:hidden">
              <SaveCard className="mx-auto w-full max-w-[280px]" />
            </div>

            {/* Scaleable UI canvas */}
            <div
              aria-hidden="true"
              className="relative aspect-[515/420] w-full"
            >
              {/* Connector lines SVG */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 515 420"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M186 34 C150 34 130 48 124 74"
                  stroke="#7c5cff"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  strokeDasharray="3 5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M238 30 C290 14 330 16 360 36"
                  stroke="#7c5cff"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Top Chat Badge */}
              <div className="absolute left-[36.1%] top-[1.7%] z-10 flex aspect-square w-[10.1%] items-center justify-center rounded-full border-2 border-[#7c5cff] bg-[#0b0d24] shadow-[0_0_30px_rgba(124,92,255,0.6)]">
                <MessageCircle className="h-[40%] w-[40%] text-white" />
              </div>

              {/* Floating accent background circle */}
              <div className="absolute left-[68.9%] top-[5%] z-0 aspect-square w-[9.7%] rounded-full border-2 border-[#7c5cff]/80 bg-[#0b0d24] shadow-[0_0_24px_rgba(124,92,255,0.45)]" />

              {/* Main App Desktop Window */}
              <div className="absolute left-[3.9%] top-[28.6%] z-0 flex h-[60.7%] w-[90.3%] overflow-hidden rounded-xl border border-[#4c3fd0]/70 bg-[#0a0d1e] shadow-[0_0_50px_rgba(76,63,208,0.35)]">
                {/* Sidebar */}
                <aside className="w-[26%] sm:w-[22%] md:w-[18.3%] shrink-0 border-r border-white/10 bg-[#080b19] p-1.5 sm:p-2.5">
                  <p className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs md:text-sm font-bold leading-5 text-[#9db8ff] truncate">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#4f8bff]" />
                    <span className="truncate">Zaiko Sema</span>
                  </p>
                  <ul className="mt-1.5 sm:mt-3 space-y-0.5">
                    {SIDEBAR.map((item) => {
                      const Icon = item.icon;
                      const active = item.label === "Messages";
                      return (
                        <li
                          key={item.label}
                          className={
                            active
                              ? "flex items-center gap-1 sm:gap-1.5 rounded-md border border-[#3b5bdb]/60 bg-[#1c2a63] px-1 sm:px-1.5 py-0.5 sm:py-1 text-[8px] sm:text-xs md:text-sm leading-4 sm:leading-5 text-white"
                              : "flex items-center gap-1 sm:gap-1.5 px-1 sm:px-1.5 py-0.5 sm:py-1 text-[8px] sm:text-xs md:text-sm leading-4 sm:leading-5 text-white/60"
                          }
                        >
                          <Icon
                            className={`h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0 ${item.tone}`}
                          />
                          <span className="hidden xs:inline truncate">
                            {item.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </aside>

                {/* Main Content Area */}
                <div className="flex min-w-0 flex-1 flex-col px-[3%] py-1.5 sm:py-3">
                  <p className="flex items-center gap-1 sm:gap-2 rounded-md border border-white/10 bg-white/5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-xs md:text-sm leading-4 sm:leading-5 text-white/50 truncate">
                    <Search className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span className="truncate">Search anything...</span>
                  </p>
                  <h2 className="mt-1 sm:mt-3 text-xs sm:text-sm md:text-base font-bold leading-4 sm:leading-5 truncate">
                    Team Sync
                  </h2>
                  <p className="text-[8px] sm:text-xs md:text-sm leading-3 sm:leading-5 text-white/50 truncate">
                    12 participants · Meeting in progress
                  </p>

                  <div className="mt-1.5 sm:mt-2.5 min-h-0 flex-1 pr-[22%] sm:pr-[26%]">
                    <ul className="grid h-full grid-cols-2 grid-rows-2 gap-1 sm:gap-2">
                      {PARTICIPANTS.map((person) => (
                        <li
                          key={person.name}
                          className="relative overflow-hidden rounded-md sm:rounded-lg"
                        >
                          <Image
                            src={person.src}
                            alt={person.alt}
                            fill
                            sizes="(min-width: 1024px) 14vw, 30vw"
                            className="object-cover"
                          />
                          <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1 py-0.5 text-[6px] sm:text-[10px] md:text-xs leading-none truncate max-w-[90%]">
                            {person.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Overlay Chat Message */}
              <div className="absolute left-0 top-[71.4%] z-10 w-[36%] sm:w-[31.8%] rounded-lg border border-white/10 bg-[#141831]/95 p-1.5 sm:p-2.5 shadow-xl backdrop-blur">
                <p className="flex items-center gap-1 text-[8px] sm:text-xs md:text-sm leading-3 sm:leading-5 truncate">
                  <span className="text-[#4f8bff]">@all</span> Great progress!
                  <Rocket className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0 text-[#f97316]" />
                </p>
                <p className="mt-1 rounded-md bg-white/5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[7px] sm:text-xs md:text-sm leading-3 sm:leading-5 truncate">
                  Let&apos;s keep momentum!
                </p>
              </div>

              {/* Mobile Device Mockup */}
              <div className="absolute left-[72.5%] top-[51.2%] z-10 h-[44%] sm:h-[42%] w-[23%] sm:w-[21.7%] overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-[#080b19] px-1.5 sm:px-2.5 pt-1 sm:pt-2 shadow-2xl">
                <div className="flex items-center justify-between text-[7px] sm:text-xs leading-3 sm:leading-4 text-white/60">
                  <span>9:41</span>
                  <span className="hidden sm:flex items-center gap-0.5">
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span className="ml-1 h-1.5 w-2.5 rounded-sm bg-white/60" />
                  </span>
                </div>
                <p className="mt-0.5 sm:mt-2 text-[8px] sm:text-xs md:text-sm font-bold leading-3 sm:leading-4 truncate">
                  Sema Meet
                </p>
                <p className="text-[7px] sm:text-xs leading-3 sm:leading-4 text-white/50 truncate">
                  Marketing Sync
                </p>
                <div className="relative mt-1 sm:mt-2 aspect-[3/2] w-full overflow-hidden rounded-md sm:rounded-lg">
                  <Image
                    src="/black-friday/3.png"
                    alt="Active speaker in the mobile meeting"
                    fill
                    sizes="12vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0.5 left-0.5 rounded bg-black/60 px-1 text-[6px] sm:text-[10px] leading-tight truncate max-w-[90%]">
                    Olivia · Speaking
                  </span>
                </div>
                <ul className="mt-1 sm:mt-2 flex justify-center -space-x-1 sm:-space-x-1.5">
                  {MOBILE_AVATARS.map((avatar) => (
                    <li
                      key={avatar.src}
                      className="relative h-4 w-4 sm:h-7 sm:w-7 overflow-hidden rounded-full border-1 sm:border-2 border-[#080b19]"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop-only overlay offer card */}
              <SaveCard className="hidden sm:flex absolute left-[69%] top-[7.1%] z-20 h-[44.5%] w-[31%]" />

              {/* Waveform Bar */}
              <div className="absolute left-[68.5%] top-[88.1%] z-20 flex h-[10%] w-[27%] items-center justify-center gap-0.5 sm:gap-1.5 rounded-lg sm:rounded-xl border border-[#7c5cff]/70 bg-[#0b0d24] px-1.5 sm:px-3 shadow-[0_0_30px_rgba(124,92,255,0.45)]">
                {WAVE.map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}%` }}
                    className="w-0.5 sm:w-1 max-h-full rounded-full bg-gradient-to-t from-[#3b82f6] to-[#a855f7]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <ul className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-[#090c1b] p-4 sm:p-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0 lg:border-r lg:border-white/10 lg:px-4 lg:first:pl-0 lg:last:border-r-0"
              >
                <span
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border ${feature.tone}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3
                    className={
                      feature.highlight
                        ? "text-sm sm:text-base font-bold leading-6 text-[#fbbf24]"
                        : "text-sm sm:text-base font-bold leading-6"
                    }
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 max-w-[220px] text-xs sm:text-sm leading-5 text-white/60">
                    {feature.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
