"use client";

import { BarChart3, ShieldAlert, TrendingUp, Lock, Target, Mail, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface AudienceCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  question: string;
  title: string;
  bullets: string[];
  link: string;
  href: string;
}

const cards: AudienceCard[] = [
  {
    icon: BarChart3,
    iconBg: "#E6F6EC",
    iconColor: "#1B9E5A",
    question: "How do meetings become work execution?",
    title: "Operations teams",
    bullets: ["Meeting-to-work flow & action ownership", "Review-before-sync", "Task handoff"],
    link: "Select operations use case →",
    href: "#use-case-selector",
  },
  {
    icon: ShieldAlert,
    iconBg: "#FDEAE7",
    iconColor: "#D9502C",
    question: "How do we show source-linked work evidence?",
    title: "Compliance teams",
    bullets: ["Audit trails & evidence packs", "Export workflow", "Exception review"],
    link: "Select compliance use case →",
    href: "#use-case-selector",
  },
  {
    icon: TrendingUp,
    iconBg: "#E8EEFD",
    iconColor: "#3E51DE",
    question: "How do we understand productivity responsibly?",
    title: "Workforce leaders",
    bullets: ["Team-level signals & trend views", "Privacy controls", "Governance boundaries"],
    link: "Select productivity use case →",
    href: "#use-case-selector",
  },
  {
    icon: Lock,
    iconBg: "#FDF3DB",
    iconColor: "#B8860B",
    question: "How does it deploy securely?",
    title: "IT & admins",
    bullets: ["SSO, roles & permissions", "Integrations & retention", "Trust/security routing"],
    link: "Select IT / admin use case →",
    href: "#use-case-selector",
  },
  {
    icon: Target,
    iconBg: "#FCE9E4",
    iconColor: "#E0562B",
    question: "What is the business impact?",
    title: "Executives",
    bullets: ["Reduced manual follow-up", "Clearer ownership", "Governance visibility"],
    link: "Request executive walkthrough →",
    href: "#request-demo",
  },
  {
    icon: Mail,
    iconBg: "#FBF0D9",
    iconColor: "#C09A2E",
    question: "How can we add ZoikoTime?",
    title: "Current customers",
    bullets: ["Expansion path & account context", "Implementation plan", "Success milestones"],
    link: "Existing customer route →",
    href: "#request-demo",
  },
];

export default function ZTRDAudienceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztrdAudFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-aud-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-aud-visible { animation: ztrdAudFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-aud-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease, border-color .25s ease;
        }
        .ztrd-aud-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -18px rgba(15,15,42,0.18);
          border-color: #C9D0FA;
        }
        .ztrd-aud-icon { transition: transform .25s ease; }
        .ztrd-aud-card:hover .ztrd-aud-icon { transform: scale(1.08); }
        .ztrd-aud-link { transition: gap .2s ease; }
        .ztrd-aud-card:hover .ztrd-aud-link { gap: 6px; }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-aud-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-aud-visible { animation: none !important; }
          .ztrd-aud-card:hover { transform: none !important; }
        }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`ztrd-aud-hidden ${headIn ? "ztrd-aud-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Who this demo is for
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Built for the teams evaluating
              <br className="hidden sm:block" /> ZoikoTime
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Every walkthrough is tailored to the questions your team needs
              answered — pick the role closest to yours.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ztrd-aud-hidden ${gridIn ? "ztrd-aud-visible" : ""} mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`}
            style={{ animationDelay: "0.08s" }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="ztrd-aud-card rounded-2xl border border-gray-200 p-6"
              >
                <span
                  className="ztrd-aud-icon mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: card.iconBg }}
                >
                  <card.icon size={19} strokeWidth={2} color={card.iconColor} />
                </span>
                <p className="mb-1.5 text-[12.5px] text-gray-400">{card.question}</p>
                <h3 className="mb-3 text-base font-bold text-gray-900">{card.title}</h3>
                <ul className="mb-4 flex flex-col gap-1.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] leading-snug text-gray-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4F63F0]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  className="ztrd-aud-link inline-flex items-center gap-1 text-[13px] font-semibold text-[#4F63F0] hover:underline"
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