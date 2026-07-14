"use client";

import {
  ShieldCheck,
  BrainCircuit,
  Lock,
  ClipboardCheck,
  Boxes,
  Accessibility,
  Flag,
  FileText,
  LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
  href: string;
}

const cards: TrustCard[] = [
  {
    icon: ShieldCheck,
    title: "Security Center",
    desc: "Supports security review before demo or procurement.",
    link: "Visit Security Center →",
    href: "/security-center",
  },
  {
    icon: BrainCircuit,
    title: "Responsible AI",
    desc: "AI governance, human review, and responsible AI principles.",
    link: "Read Responsible AI →",
    href: "/responsible-ai",
  },
  {
    icon: Lock,
    title: "Privacy & Data",
    desc: "Privacy, data handling, and individual request routes.",
    link: "Review Privacy & Data →",
    href: "/privacy",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance",
    desc: "Compliance review and evidence expectations.",
    link: "View Compliance →",
    href: "/compliance-audit",
  },
  {
    icon: Boxes,
    title: "Subprocessors",
    desc: "Vendor and data-processing review.",
    link: "View Subprocessors →",
    href: "/subprocessors",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    desc: "Accessibility review and buyer confidence.",
    link: "View Accessibility →",
    href: "/accessibility",
  },
  {
    icon: Flag,
    title: "Report a Concern",
    desc: "A trust route for issues or questions.",
    link: "Report a Concern →",
    href: "/report-a-concern",
  },
  {
    icon: FileText,
    title: "Data Processing Addendum",
    desc: "Legal and procurement review support.",
    link: "Request DPA →",
    href: "/data-processing-addendum",
  },
];

export default function ZTRDTrustSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztrdTrustFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-trust-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-trust-visible { animation: ztrdTrustFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-trust-card {
          transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s ease, border-color .2s ease;
        }
        .ztrd-trust-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px -16px rgba(15,15,42,0.16);
          border-color: #C9D0FA;
        }
        .ztrd-trust-icon { transition: transform .2s ease; }
        .ztrd-trust-card:hover .ztrd-trust-icon { transform: scale(1.08); }
        .ztrd-trust-link { transition: gap .2s ease; }
        .ztrd-trust-card:hover .ztrd-trust-link { gap: 6px; }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-trust-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-trust-visible { animation: none !important; }
          .ztrd-trust-card:hover { transform: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`ztrd-trust-hidden ${headIn ? "ztrd-trust-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Enterprise trust & procurement
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Everything security and legal need,
              <br className="hidden sm:block" /> up front
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Governed, reviewable, and source-linked by design — no
              surveillance framing, no unverifiable claims.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ztrd-trust-hidden ${gridIn ? "ztrd-trust-visible" : ""} mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`}
            style={{ animationDelay: "0.08s" }}
          >
            {cards.map((card) => (
              <div key={card.title} className="ztrd-trust-card rounded-2xl border border-gray-200 p-6">
                <span className="ztrd-trust-icon mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDEBFB]">
                  <card.icon size={19} strokeWidth={2} color="#4F63F0" />
                </span>
                <h3 className="mb-1.5 text-[15px] font-bold text-gray-900">{card.title}</h3>
                <p className="mb-4 text-[13px] leading-relaxed text-gray-500">{card.desc}</p>
                <a
                  href={card.href}
                  className="ztrd-trust-link inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#4F63F0] hover:underline"
                >
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}