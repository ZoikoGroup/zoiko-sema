"use client";

/**
 * PricingTimeIntegrationSection
 * Dark, circuit-board-textured "ZoikoTime pricing note" band.
 * Centered eyebrow, heading, copy, governance callout box, and a link out.
 */

function CircuitTexture() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="ztCircuit" width="140" height="140" patternUnits="userSpaceOnUse">
          <path
            d="M0 20H50V60H100V20H140 M20 0V50H60V100H20V140 M100 140V100H140 M0 100H30V140"
            fill="none"
            stroke="#3B5BFF"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          <circle cx="50" cy="60" r="2.5" fill="#6C8CFF" fillOpacity="0.5" />
          <circle cx="100" cy="20" r="2.5" fill="#6C8CFF" fillOpacity="0.5" />
          <circle cx="20" cy="50" r="2.5" fill="#6C8CFF" fillOpacity="0.5" />
          <circle cx="60" cy="100" r="2.5" fill="#6C8CFF" fillOpacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ztCircuit)" />
    </svg>
  );
}

function LogoGlyph() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="16" stroke="#3B5BFF" strokeOpacity="0.5" strokeWidth="1.4" />
      <path
        d="M11 12c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5-1.5 4 0 5.5"
        stroke="#6C8CFF"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M23 12c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5 1.5 4 0 5.5"
        stroke="#3B5BFF"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PricingTimeIntegrationSection() {
  return (
    <section
      aria-label="ZoikoTime pricing note"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(900px 480px at 50% 0%, rgba(59,91,255,0.16), transparent 60%), linear-gradient(180deg, #090C22 0%, #0C1030 100%)",
      }}
    >
      <CircuitTexture />

      <div className="absolute right-6 top-6 sm:right-10 sm:top-8">
        <LogoGlyph />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FA6FF]">
          ZoikoTime pricing note
        </p>

        <h2 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-tight text-white sm:text-[34px]">
          ZoikoTime is enterprise-oriented, and always governed.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#B8BFE0]">
          Business plans can add integration configuration where approved;
          Enterprise includes it as a governed, permissioned capability.
        </p>

        <div
          className="mx-auto mt-8 max-w-xl rounded-xl px-6 py-4"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
        >
          <p className="text-[13.5px] leading-relaxed text-[#D7DBF3]">
            ZoikoTime integration is permissioned, policy-governed, and
            configurable only by authorized administrators.
          </p>
        </div>

        <a
          href="/sema-zoikotime/"
          className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8FA6FF] transition-colors duration-200 hover:text-white"
        >
          Explore Sema + ZoikoTime
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
