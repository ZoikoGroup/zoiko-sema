"use client";

import { Sparkles, MessageCircle, Shield, User, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface GlanceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const cards: GlanceCard[] = [
  {
    icon: Sparkles,
    title: "What is Zoiko Group?",
    description:
      "The parent ecosystem and shared operating vision for Zoiko products. Wording is brand and legal approved.",
    action: "See the ecosystem",
    href: "#ecosystem-map",
  },
  {
    icon: MessageCircle,
    title: "Where does Sema fit?",
    description:
      "Zoiko Sema is the business communication and collaboration product in this ecosystem.",
    action: "Explore Product Overview",
    href: "/product-overview",
  },
  {
    icon: Shield,
    title: "Shared principles",
    description:
      "Security, privacy, governance, customer clarity, responsible AI, and audit-ready operations.",
    action: "Visit Trust Center",
    href: "/trust-center",
  },
  {
    icon: User,
    title: "Who is this page for?",
    description:
      "Buyers, customers, partners, press, candidates, analysts, and enterprise reviewers.",
    action: "Choose your route",
    href: "#find-your-route",
  },
];

export default function ZoikoGroupGlanceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgGlanceUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-glance-hidden { opacity: 0; transform: translateY(20px); }
        .zg-glance-visible { animation: zgGlanceUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .zg-glance-card {
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .zg-glance-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(79,99,240,0.25);
          border-color: rgba(79,99,240,0.35);
        }
        .zg-glance-link { transition: color .2s ease, gap .2s ease; }
        .zg-glance-link .zg-arrow { transition: transform .2s ease; display: inline-block; }
        .zg-glance-link:hover .zg-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .zg-glance-hidden { opacity: 1 !important; transform: none !important; }
          .zg-glance-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div
            ref={headRef}
            className={`zg-glance-hidden ${headIn ? "zg-glance-visible" : ""}`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Group at a glance
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              What this page is for
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              The group relationship, where Sema fits, shared trust, and where to go
              next — without the corporate brochure.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`zg-glance-hidden ${gridIn ? "zg-glance-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
            style={{ animationDelay: "0.1s" }}
          >
            {cards.map(({ icon: Icon, title, description, action, href }) => (
              <div
                key={title}
                className="zg-glance-card flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <a
                  href={href}
                  className="zg-glance-link mt-5 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
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
