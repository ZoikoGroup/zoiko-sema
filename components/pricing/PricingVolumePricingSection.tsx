"use client";

/**
 * PricingVolumePricingSection
 * Eyebrow + heading, a dark textured banner with a large gold-embossed
 * "VOLUME" wordmark, then three tier cards below.
 */

interface Tier {
  title: string;
  description: string;
  cta: string;
  href: string;
}

const TIERS: Tier[] = [
  {
    title: "50-250 seats",
    description: "Volume discounts and dedicated onboarding support.",
    cta: "Get a custom quote",
    href: "/contact-sales/",
  },
  {
    title: "250+ seats",
    description: "Enterprise rollout planning, security review, and procurement support.",
    cta: "Contact Sales",
    href: "/contact-sales/",
  },
  {
    title: "Multi-region / ZoikoTime",
    description: "Custom retention, data residency, and governed ZoikoTime deployment.",
    cta: "Get a demo",
    href: "/get-a-demo/",
  },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingVolumePricingSection() {
  return (
    <section className="bg-[#F5F7FC] px-4 py-20 sm:px-6 lg:px-8">
      <style>{`
        .vp-gold-text {
          background: linear-gradient(180deg, #FCE8A8 0%, #E8C15E 28%, #B8873A 52%, #F5DA9A 70%, #8A611F 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 1px 0 rgba(255,241,199,0.35), 0 2px 10px rgba(0,0,0,0.45);
          letter-spacing: 0.05em;
        }
        .vp-tier-card {
          transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s ease;
        }
        .vp-tier-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15,17,40,0.10);
        }
        .vp-tier-link {
          transition: gap .2s ease;
        }
        .vp-tier-link:hover { gap: 8px; }
      `}</style>

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3B5BFF]">
          Volume pricing
        </p>
        <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-[#15131F] sm:text-[34px]">
          Scaling past 50 seats? Let&apos;s talk specifics.
        </h2>
      </div>

      {/* Gold banner */}
      <div
        className="relative mx-auto mt-10 flex max-w-5xl items-center justify-center overflow-hidden rounded-2xl"
        style={{
          height: "clamp(140px, 20vw, 200px)",
          background:
            "radial-gradient(600px 260px at 50% 30%, rgba(184,135,58,0.16), transparent 65%), linear-gradient(135deg, #0B0B10 0%, #17171D 55%, #0B0B10 100%)",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)",
          }}
        />
        <span
          className="vp-gold-text relative font-extrabold uppercase"
          style={{ fontSize: "clamp(40px, 9vw, 96px)" }}
        >
          Volume
        </span>
      </div>

      {/* Tier cards */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.title}
            className="vp-tier-card rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 className="text-[15.5px] font-bold text-[#15131F]">{tier.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{tier.description}</p>
            <a
              href={tier.href}
              className="vp-tier-link mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#3B5BFF]"
            >
              {tier.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
