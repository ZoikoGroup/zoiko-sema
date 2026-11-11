"use client";

import { useState } from "react";

const TABS = ["Meetings", "Messaging", "Calls", "AI summaries"] as const;

const TILES = [
  {
    initials: "AM",
    avatar: "bg-[#3b6ef0]",
    surface: "from-[#1b2c5e] to-[#10172e]",
  },
  {
    initials: "DK",
    avatar: "bg-[#6a4fd6]",
    surface: "from-[#2a2260] to-[#12142c]",
  },
  {
    initials: "PR",
    avatar: "bg-[#2f9a8a]",
    surface: "from-[#10413f] to-[#0f1a24]",
  },
  {
    initials: "SM",
    avatar: "bg-[#c4583f]",
    surface: "from-[#2f2058] to-[#12142c]",
  },
  {
    initials: "LR",
    avatar: "bg-[#4a4aa8]",
    surface: "from-[#1b2c5e] to-[#10172e]",
  },
  {
    initials: "+6",
    avatar: "bg-[#2f6bea]",
    surface: "from-[#2a2260] to-[#12142c]",
  },
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

export default function SemaSeeInAction() {
  const [active, setActive] = useState<(typeof TABS)[number]>("Meetings");

  return (
    <section className="relative w-full overflow-x-hidden border-t border-white/5 bg-[#060914] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 text-white">
      {/* Top Right Ribbon positioned safely for desktop, hidden on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20px] sm:right-[-44px] top-[38px] z-10 hidden w-[210px] text-center sm:w-[230px] rotate-[20deg] rounded-md bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 pl-6 pr-[58px] shadow-[0_0_30px_rgba(59,130,246,0.55)] md:block"
      >
        <p className="whitespace-nowrap text-xs sm:text-sm font-extrabold uppercase leading-4">
          Black Friday
        </p>
        <p className="whitespace-nowrap text-xs sm:text-sm italic leading-4 text-white/90">
          Sale
        </p>
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Heading row with circular badge */}
        <div className="relative mx-auto max-w-[760px]">
          <div className="mx-auto mb-6 flex justify-center lg:absolute lg:-left-[195px] lg:-top-3 lg:mx-0 lg:mb-0">
            <SaveBadge />
          </div>

          <div className="text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
              <span
                aria-hidden="true"
                className="h-0.5 w-4 sm:w-5 bg-[#4f8bff]"
              />
              See it in action
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight">
              Flexible for every kind of conversation.
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-[520px] text-xs sm:text-base leading-5 sm:leading-7 text-white/60 px-2 sm:px-0">
              Meetings, messaging, calls and AI summaries — one connected
              workspace.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Conversation types"
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={
                active === tab
                  ? "rounded-full bg-[#2f6bea] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all"
                  : "rounded-full border border-white/10 bg-[#0e1426] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mock call grid */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-[760px] rounded-xl sm:rounded-2xl border border-[#2a3563] bg-[#0b1022] p-2.5 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3">
            {TILES.map((tile) => (
              <li
                key={tile.initials}
                className={`flex aspect-[4/3] sm:aspect-[3/2] items-center justify-center rounded-lg bg-gradient-to-br ${tile.surface}`}
              >
                <span
                  className={`flex h-7 w-7 sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full text-xs sm:text-sm font-bold text-white ${tile.avatar}`}
                >
                  {tile.initials}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
