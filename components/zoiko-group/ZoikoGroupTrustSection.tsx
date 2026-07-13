"use client";

import { Shield, Lock, ShieldCheck, Star, FileText, Activity, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const cards: TrustCard[] = [
  {
    icon: Shield,
    title: "Trust Center",
    description:
      "Central security, privacy, compliance, AI governance, and reliability resource.",
    action: "Visit Trust Center",
    href: "/trust-center",
  },
  {
    icon: Lock,
    title: "Security Policy",
    description: "Security responsibilities, safeguards, and reporting routes.",
    action: "Read Security Policy",
    href: "/security-policy",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Notice",
    description: "Data categories, privacy choices, and request routes.",
    action: "Read Privacy Notice",
    href: "/privacy-notice",
  },
  {
    icon: Star,
    title: "AI Use Policy",
    description:
      "Responsible AI usage, human review, admin controls, and restrictions.",
    action: "Read AI Use Policy",
    href: "/ai-use-policy",
  },
  {
    icon: FileText,
    title: "Data Processing Addendum",
    description: "Enterprise data processing review path.",
    action: "View DPA",
    href: "/data-processing-addendum",
  },
  {
    icon: Activity,
    title: "System Status",
    description:
      "Service availability, incidents, maintenance, and update history.",
    action: "View Status",
    href: "/system-status",
  },
];

export default function ZoikoGroupTrustSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgTrustUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-trust-hidden { opacity: 0; transform: translateY(20px); }
        .zg-trust-visible { animation: zgTrustUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes zgTrustStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-trust-card {
          opacity: 0;
          animation: zgTrustStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease, border-color .22s ease;
        }
        .zg-trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(0,0,0,0.5);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(124,140,248,0.35);
        }
        .zg-trust-link { transition: color .2s ease, gap .2s ease; }
        .zg-trust-link .zg-arrow { transition: transform .2s ease; display: inline-block; }
        .zg-trust-link:hover .zg-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .zg-trust-hidden { opacity: 1 !important; transform: none !important; }
          .zg-trust-visible { animation: none !important; }
          .zg-trust-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`zg-trust-hidden ${headIn ? "zg-trust-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Trust &amp; governance
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Proof routes, not claims
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Group-level trust points to the resources that document it — no
              unsupported security, privacy, AI, or compliance claims.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`zg-trust-hidden ${gridIn ? "zg-trust-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {cards.map(({ icon: Icon, title, description, action, href }, i) => (
              <div
                key={title}
                className="zg-trust-card rounded-2xl border border-white/10 bg-white/3 p-6"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F63F0]/20 text-[#8FA3FF]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#9CA0C4]">
                  {description}
                </p>
                <a
                  href={href}
                  className="zg-trust-link mt-5 flex items-center gap-1 text-xs font-semibold text-[#8FA3FF] hover:text-white"
                >
                  {action}
                  <span className="zg-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
