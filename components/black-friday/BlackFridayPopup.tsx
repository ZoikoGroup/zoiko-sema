"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Diamond, X, Zap } from "lucide-react";
import { COUNTDOWN_TARGET, useCountdown } from "./SemaTestimonialsCta";

const OFFER_PATH = "/black-friday";
const OPEN_DELAY_MS = 1200;
const CLOSE_ANIMATION_MS = 250;

const RING_TEXT = "BLACK FRIDAY OFFER · BLACK FRIDAY OFFER · ";

const DEALS = [
  { name: "Pro", was: "$9", now: "$6.75", featured: false },
  { name: "Team", was: "$15", now: "$11.25", featured: true },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

function SpinningSaveBadge() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[118px] w-[118px] shrink-0 items-center justify-center rounded-full bg-[#080b16] shadow-[0_0_36px_rgba(251,191,36,0.35)]"
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path
            id="bf-popup-ring"
            d="M60 60 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0"
          />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="#fbbf24" strokeOpacity="0.3" />
        <text
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="1.6"
          fill="#fbbf24"
          textLength="296"
          lengthAdjust="spacing"
        >
          <textPath href="#bf-popup-ring">{RING_TEXT}</textPath>
        </text>
      </svg>
      <div className="relative text-center">
        <p className="text-lg font-extrabold uppercase leading-5 text-[#fbbf24]">Save</p>
        <p className="text-2xl font-extrabold leading-7 text-[#fbbf24]">25%</p>
      </div>
    </div>
  );
}

// Separate component so the 1s countdown interval only runs while the popup is open.
function OfferCountdown() {
  const { days, hrs, min, sec } = useCountdown(COUNTDOWN_TARGET);
  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hrs },
    { label: "Min", value: min },
    { label: "Sec", value: sec },
  ];

  return (
    <ul className="flex gap-2" aria-label="Time left on the offer">
      {units.map((unit) => (
        <li
          key={unit.label}
          className="flex h-[54px] w-[52px] flex-col items-center justify-center rounded-lg border border-white/20 bg-[#0b0d24]"
        >
          <span className="text-lg font-bold leading-5 tabular-nums">{pad(unit.value)}</span>
          <span className="text-[10px] uppercase leading-4 text-white/55">{unit.label}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Rendered by the home page only, so it opens on every home-page load
 * (each visit remounts it) and never on other pages.
 */
export default function BlackFridayPopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Open shortly after load, unless the offer has already ended.
  useEffect(() => {
    if (Date.now() > new Date(COUNTDOWN_TARGET).getTime()) return;

    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), CLOSE_ANIMATION_MS);
  }, []);

  // While open: lock page scroll, focus the CTA, close on Escape, keep Tab inside the dialog.
  useEffect(() => {
    if (!mounted) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ctaRef.current?.focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [mounted, close]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className="absolute inset-0 bg-[#050711]/80 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-describedby="bf-popup-desc"
        className={`relative max-h-[calc(100dvh-2rem)] w-full max-w-[580px] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#7c5cff]/60 bg-[#0b0d24] text-white shadow-[0_0_80px_rgba(124,92,255,0.45)] transition-all duration-300 ease-out motion-reduce:transition-none ${
          visible ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        }`}
      >
        {/* Glows + top ribbon */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(124,92,255,0.35),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(37,99,235,0.25),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="h-1.5 w-full bg-gradient-to-r from-[#3DA9FF] via-[#7c5cff] to-[#B22CF4]"
        />

        <button
          type="button"
          onClick={close}
          aria-label="Close Black Friday offer"
          className="absolute right-4 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative px-6 pb-6 pt-7 sm:px-8 sm:pb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#fbbf24]/50 bg-[#fbbf24]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[#fbbf24] sm:text-xs">
            <Diamond className="h-3 w-3 fill-[#fbbf24]" aria-hidden="true" />
            Black Friday 2026 — Limited Time
          </span>

          <div className="mt-5 flex items-center justify-between gap-5">
            <div>
              <h2
                id="bf-popup-title"
                className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[36px]"
              >
                <span className="block">Meet. Message. Call.</span>
                <span className="block bg-gradient-to-r from-[#3DA9FF] via-[#3868FA] to-[#B22CF4] bg-clip-text text-transparent">
                  Move forward.
                </span>
              </h2>
              <p id="bf-popup-desc" className="mt-3 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                <span className="font-semibold text-[#fbbf24]">
                  25% off eligible first-year annual plans*
                </span>{" "}
                — one secure app for meetings, messaging and calls. Lock in
                Black Friday pricing while it&apos;s open.
              </p>
            </div>
            <div className="hidden sm:block">
              <SpinningSaveBadge />
            </div>
          </div>

          {/* Plan deals */}
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {DEALS.map((deal) => (
              <li
                key={deal.name}
                className={`relative rounded-2xl border p-4 ${
                  deal.featured
                    ? "border-[#7c5cff]/70 bg-[#7c5cff]/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {deal.featured && (
                  <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c5cff] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
                  {deal.name}
                </p>
                <p className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white">{deal.now}</span>
                  <span className="text-sm text-white/40 line-through">{deal.was}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-white/50">/user · mo, year one*</p>
              </li>
            ))}
          </ul>

          {/* Countdown */}
          <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#141c5a]/40 px-4 py-4 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              <Zap className="h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]" aria-hidden="true" />
              Offer ends in
            </p>
            <OfferCountdown />
          </div>

          {/* CTA */}
          <div className="relative mt-6">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#3DA9FF] via-[#7c5cff] to-[#B22CF4] opacity-60 blur-md animate-pulse motion-reduce:animate-none"
            />
            <Link
              ref={ctaRef}
              href={OFFER_PATH}
              onClick={close}
              className="group relative flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#7c5cff] text-base font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Claim 25% off
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={close}
            className="mx-auto mt-3 block text-sm text-white/55 underline-offset-4 transition hover:text-white hover:underline"
          >
            No thanks, maybe later
          </button>

          <p className="mt-4 text-center text-[11px] leading-4 text-white/40">
            *Black Friday savings are proposed and release-gated — subject to
            product, finance and app-release verification.
          </p>
        </div>
      </div>
    </div>
  );
}
