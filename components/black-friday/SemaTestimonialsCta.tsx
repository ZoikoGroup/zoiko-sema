"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We replaced three apps with Sema. Meetings, chat and calls finally live in one place, and the summaries keep everyone aligned.",
    initials: "HS",
    name: "Hannah S.",
    role: "Operations lead",
    avatar: "bg-[#3b5bdb]",
  },
  {
    quote:
      "Our standups run themselves now — auto-recording and action items mean nothing slips. Onboarding the team took an afternoon.",
    initials: "MT",
    name: "Marco T.",
    role: "Engineering manager",
    avatar: "bg-[#3b5bdb]",
  },
  {
    quote:
      "Clean, fast and secure. Admin controls gave us the governance we needed without slowing anyone down.",
    initials: "AK",
    name: "Amara K.",
    role: "IT director",
    avatar: "bg-[#3b5bdb]",
  },
] as const;

const STARS = [0, 1, 2, 3, 4] as const;

export const COUNTDOWN_TARGET = "2026-11-30T23:59:59";

const RING_TEXT = "BLACK FRIDAY OFFER · BLACK FRIDAY OFFER · ";

const BADGES = [
  {
    id: "top-right",
    position: "-right-6 -top-6 sm:-right-8 sm:-top-8",
    ring: "bf-ring-cta-a",
  },
  {
    id: "bottom-left",
    position: "-bottom-6 -left-4 sm:-bottom-8 sm:-left-6",
    ring: "bf-ring-cta-b",
  },
] as const;

function SaveBadge({ ringId }: { ringId: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[#080b16] shadow-[0_0_28px_rgba(251,191,36,0.22)]"
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
        <defs>
          <path
            id={ringId}
            d="M60 60 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          stroke="#fbbf24"
          strokeOpacity="0.25"
        />
        <text
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="1.6"
          fill="#fbbf24"
          textLength="296"
          lengthAdjust="spacing"
        >
          <textPath href={`#${ringId}`}>{RING_TEXT}</textPath>
        </text>
      </svg>
      <div className="relative text-center">
        <p className="text-xl font-extrabold uppercase leading-6 text-[#fbbf24]">
          Save
        </p>
        <p className="text-[16px] font-extrabold leading-7 text-[#fbbf24]">
          25%
        </p>
        <p className="mt-0.5 text-[10px] uppercase leading-4 text-white/60">
          First event*
        </p>
      </div>
    </div>
  );
}

export function useCountdown(target: string) {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff / 3600000) % 24),
        min: Math.floor((diff / 60000) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function SemaTestimonialsCta() {
  const { days, hrs, min, sec } = useCountdown(COUNTDOWN_TARGET);

  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hrs },
    { label: "Min", value: min },
    { label: "Sec", value: sec },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] px-6 py-16 text-white sm:px-8 lg:px-10">
      {/* Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-44px] top-[38px] text-center z-10 hidden w-[230px] rotate-[20deg] rounded-md bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 pl-6 pr-[58px] shadow-[0_0_30px_rgba(59,130,246,0.55)] md:block"
      >
        <p className="whitespace-nowrap text-sm font-extrabold uppercase leading-4">
          Black Friday
        </p>
        <p className="whitespace-nowrap text-sm italic leading-4 text-white/90">
          Sale
        </p>
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Testimonials */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
            <span aria-hidden="true" className="h-0.5 w-5 bg-[#4f8bff]" />
            What teams say
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Fewer tools. More momentum.
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[1100px] gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-xl border border-white/10 bg-[#0e1426] p-5"
            >
              <p
                className="flex gap-0.5"
                role="img"
                aria-label="Rated 5 out of 5"
              >
                {STARS.map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]"
                    aria-hidden="true"
                  />
                ))}
              </p>
              <blockquote className="mt-4 text-sm leading-6 text-white/85">
                {item.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${item.avatar}`}
                >
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-bold leading-5">{item.name}</p>
                  <p className="text-sm leading-5 text-white/50">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative mx-auto mt-20 max-w-[1100px]">
          {BADGES.map((badge) => (
            <div
              key={badge.id}
              className={`absolute z-10 hidden sm:block ${badge.position}`}
            >
              <SaveBadge ringId={badge.ring} />
            </div>
          ))}

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#182A6B] via-[#2A2A7A] to-[#2057C4] px-6 py-14 text-center shadow-[0_20px_60px_rgba(35,80,214,0.25)] sm:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(99,60,200,0.35),transparent_55%)]"
            />

            <div className="relative flex flex-col items-center">
              <p className="flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-[0.18em] text-white/80">
                <span aria-hidden="true" className="h-0.5 w-5 bg-white/70" />
                Get started
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Start free. Scale with your team.
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] text-base leading-7 text-white/75">
                Your conversations, more connected. Bring meetings, messaging
                and calls together — and lock in Black Friday pricing while
                it&apos;s open.
              </p>

              <ul className="mt-8 flex items-center justify-center gap-3">
                {units.map((unit) => (
                  <li
                    key={unit.label}
                    className="flex h-[68px] w-[60px] flex-col items-center justify-center rounded-lg border border-white/20 bg-[#141c5a]/70"
                  >
                    <span className="text-xl font-bold leading-6">
                      {pad(unit.value)}
                    </span>
                    <span className="text-sm uppercase leading-4 text-white/60">
                      {unit.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
                >
                  Explore Zoiko Sema →
                </Link>
                <Link
                  href="/start-free"
                  className="inline-flex h-11 items-center rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white"
                >
                  Start free
                </Link>
              </div>

              <p className="mx-auto mt-8 max-w-[520px] text-sm leading-5 text-white/60">
                Black Friday savings are proposed and release-gated — subject to
                product, finance and app-release verification. Capabilities
                shown reflect planned functionality; final creative uses
                approved app screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
