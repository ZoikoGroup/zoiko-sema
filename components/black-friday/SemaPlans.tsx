import Link from "next/link";
import {
  Check,
  Tag,
  Video,
  MessageSquare,
  Phone,
  Sparkles,
  Hash,
  FileText,
} from "lucide-react";

const PLANS = [
  {
    name: "Personal",
    description: "For individuals and small groups.",
    price: "Free",
    unit: "",
    note: null,
    badge: null,
    cta: "Start free",
    href: "/start-free",
    featured: false,
    features: [
      "Group meetings & chat",
      "Audio & video calls",
      "Basic AI summaries",
    ],
  },
  {
    name: "Pro",
    description: "For power users and freelancers.",
    price: "$9",
    unit: "/user · mo*",
    note: { prefix: "Year one: ", highlight: "$6.75/mo with Black Friday*" },
    badge: "BF −25%*",
    cta: "Upgrade to Pro",
    href: "/start-free",
    featured: false,
    features: ["Longer meetings", "Cloud recording", "Advanced AI summaries"],
  },
  {
    name: "Team",
    description: "For small teams and projects.",
    price: "$15",
    unit: "/user · mo*",
    note: { prefix: "Year one: ", highlight: "$11.25/mo with Black Friday*" },
    badge: "BF −25%*",
    cta: "Start team plan",
    href: "/start-free",
    featured: true,
    features: [
      "Shared channels & spaces",
      "Transcription & search",
      "Team admin controls",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations.",
    price: "Custom",
    unit: "",
    note: { prefix: "Tailored to your org", highlight: "" },
    badge: null,
    cta: "Talk to sales",
    href: "/contact-sales",
    featured: false,
    features: [
      "SSO & advanced admin",
      "Audit log & data controls",
      "Dedicated support",
    ],
  },
] as const;

const PLATFORMS = [
  { name: "Meetings", icon: Video },
  { name: "Messaging", icon: MessageSquare },
  { name: "Calls", icon: Phone },
  { name: "AI summaries", icon: Sparkles },
  { name: "Channels", icon: Hash },
  { name: "Follow-ups", icon: FileText },
] as const;

const RING_TEXT = "BLACK FRIDAY OFFER · BLACK FRIDAY OFFER · ";

function SaveBadge() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[110px] w-[110px] sm:h-[135px] sm:w-[135px] shrink-0 items-center justify-center rounded-full bg-[#060914] shadow-[0_0_28px_rgba(251,191,36,0.18)]"
    >
      <svg viewBox="0 0 135 135" className="absolute inset-0 h-full w-full">
        <defs>
          <path
            id="bf-ring-tabs"
            d="M67.5 67.5 m-54 0 a54 54 0 1 1 108 0 a54 54 0 1 1 -108 0"
          />
        </defs>
        <circle
          cx="67.5"
          cy="67.5"
          r="65"
          fill="none"
          stroke="#fbbf24"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <text
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="2.2"
          fill="#fbbf24"
          textLength="339"
          lengthAdjust="spacing"
        >
          <textPath href="#bf-ring-tabs">{RING_TEXT}</textPath>
        </text>
      </svg>
      <div className="relative text-center">
        <p className="text-sm sm:text-lg font-extrabold uppercase leading-none tracking-wide text-[#fbbf24]">
          Save
        </p>
        <p className="mt-1 text-xl sm:text-3xl font-extrabold leading-none text-[#fbbf24]">
          25%
        </p>
        <p className="mt-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider leading-none text-white/60">
          First event*
        </p>
      </div>
    </div>
  );
}

export default function SemaPlans() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050711] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,91,219,0.12),transparent_55%)]"
      />

      {/* Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-44px] top-[38px] z-10 hidden w-[230px] rotate-[20deg] rounded-md bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 pl-6 pr-[58px] shadow-[0_0_30px_rgba(59,130,246,0.55)] text-center md:block"
      >
        <p className="whitespace-nowrap text-sm font-extrabold uppercase leading-4">
          Black Friday
        </p>
        <p className="whitespace-nowrap text-sm italic leading-4 text-white/90">
          Sale
        </p>
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="relative mx-auto max-w-[760px] text-center">
          {/* Circular badge */}
          <div className="mx-auto mb-6 flex justify-center lg:absolute lg:-left-[195px] lg:-top-3 lg:mx-0 lg:mb-0">
            <SaveBadge />
          </div>

          <p className="flex items-center justify-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
            <span
              aria-hidden="true"
              className="h-0.5 w-4 sm:w-5 bg-[#4f8bff]"
            />
            Plans
          </p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight">
            Start free. Scale when the need is real.
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-[480px] text-sm sm:text-base leading-6 sm:leading-7 text-white/60">
            Free for individuals and small groups. Paid plans for teams and
            organizations that need structure.
          </p>

          <p className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-[#3b5bdb]/50 bg-[#3b5bdb]/10 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/95 text-center">
            <Tag
              className="h-3.5 w-3.5 shrink-0 text-[#4f8bff]"
              aria-hidden="true"
            />
            <span className="leading-snug">
              Black Friday: 25% off eligible first-year annual plans*
            </span>
          </p>
        </div>

        {/* Plans Grid */}
        <ul className="mx-auto mt-10 sm:mt-12 grid max-w-[760px] items-stretch gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:px-[3%]">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl border border-[#3b82f6] bg-[#0c1230] p-5 sm:p-6 shadow-[0_0_50px_rgba(59,130,246,0.35)] lg:-mt-1 lg:pb-8"
                  : "relative flex flex-col rounded-2xl border border-white/10 bg-[#0a0e1f] p-5 sm:p-6"
              }
            >
              {plan.featured && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.04em] whitespace-nowrap">
                  Most popular
                </span>
              )}
              {plan.badge && (
                <span className="absolute right-3 top-3 rounded-full bg-[#fbbf24] px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-bold text-[#1a1203]">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-base font-bold">{plan.name}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-5 text-white/55">
                {plan.description}
              </p>

              <p className="mt-5 sm:mt-6 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold leading-none">
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="text-xs sm:text-sm text-white/60">
                    {plan.unit}
                  </span>
                )}
              </p>

              <p className="mt-2.5 sm:mt-3 min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm leading-5 text-white/45">
                {plan.note && (
                  <>
                    {plan.note.prefix}
                    {plan.note.highlight && (
                      <strong className="font-bold text-[#4f8bff]">
                        {plan.note.highlight}
                      </strong>
                    )}
                  </>
                )}
              </p>

              <Link
                href={plan.href}
                className={
                  plan.featured
                    ? "mt-4 sm:mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:opacity-95"
                    : "mt-4 sm:mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-white/15 bg-[#0b0e20] px-4 text-sm font-semibold text-white transition-all hover:bg-white/5"
                }
              >
                {plan.cta}
              </Link>

              <ul className="mt-5 space-y-2.5 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs sm:text-sm text-white/80"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#2dd4bf]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* One Platform Section */}
        <div className="mx-auto mt-16 sm:mt-24 max-w-[1200px] text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
            <span
              aria-hidden="true"
              className="h-0.5 w-4 sm:w-5 bg-[#4f8bff]"
            />
            One Platform
          </p>
          <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight">
            Everything your team needs to talk, in one place.
          </h3>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PLATFORMS.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0a0e1f] p-4 sm:p-6 text-center transition-all hover:border-[#3b82f6]/50"
                >
                  <div className="mb-3 sm:mb-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#131b3b] text-[#4f8bff]">
                    <IconComponent
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {platform.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
