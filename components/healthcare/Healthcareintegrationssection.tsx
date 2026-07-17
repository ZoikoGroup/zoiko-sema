"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiLock, FiDatabase, FiZap, FiGlobe } from "react-icons/fi";
import type { IconType } from "react-icons";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type IntegrationCard = {
  icon: IconType;
  title: string;
  items: string[];
  status: string;
  statusColor: "green" | "amber";
};

const LEFT_CARDS: IntegrationCard[] = [
  {
    icon: FiLock,
    title: "Identity",
    items: ["SAML / OIDC", "SCIM", "Microsoft Entra ID", "Okta", "Google Identity"],
    status: "Connected",
    statusColor: "green",
  },
  {
    icon: FiDatabase,
    title: "Storage / Docs",
    items: ["Approved cloud storage", "Document systems", "Archive connectors"],
    status: "Connected",
    statusColor: "green",
  },
];

const RIGHT_CARDS: IntegrationCard[] = [
  {
    icon: FiZap,
    title: "Operations",
    items: ["Service desk", "Scheduling", "Referral tools", "Workflow platforms"],
    status: "Connected",
    statusColor: "green",
  },
  {
    icon: FiGlobe,
    title: "Zoiko Ecosystem",
    items: ["ZoikoTime", "ZoikoID", "Zoiko Cloud", "Zoiko One"],
    status: "Where approved",
    statusColor: "amber",
  },
];

function IntegrationCardView({
  card,
  show,
  delay,
}: {
  card: IntegrationCard;
  show: boolean;
  delay: number;
}) {
  const Icon = card.icon;
  const dot = card.statusColor === "green" ? "bg-[#22C55E]" : "bg-[#F59E0B]";
  const label = card.statusColor === "green" ? "text-[#16A34A] dark:text-[#4ADE80]" : "text-[#D97706] dark:text-[#FBBF24]";
  return (
    <div
      className={`hi-hidden ${show ? "hi-visible" : ""} flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF0FB] text-[#2F6BEB] dark:bg-[#2F6BEB]/20 dark:text-[#6B8AF5]">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">
          {card.title}
        </h3>
      </div>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[13px] text-gray-500 dark:text-gray-400">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C7CEDE] dark:bg-white/25" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-3.5 dark:border-white/10">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <span className={`text-[12px] font-semibold ${label}`}>{card.status}</span>
      </div>
    </div>
  );
}

export function HealthcareIntegrationsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes hiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hiRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hi-hidden  { opacity: 0; transform: translateY(28px); }
        .hi-visible { animation: hiFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hi-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .hi-visible-r { animation: hiRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .hi-hidden, .hi-visible, .hi-hidden-r, .hi-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Records and integrations"
        className="w-full bg-[#EAF0FA] py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`hi-hidden ${eyebrowIn ? "hi-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Records &amp; Integrations
            </p>
            <h2
              ref={headRef}
              className={`hi-hidden ${headIn ? "hi-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Connect what you need. Control what you share.
            </h2>
            <p
              ref={subRef}
              className={`hi-hidden ${subIn ? "hi-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Approved integration groups with verified health, scoped data flows,
              and complete audit trails. Clinical / EHR integrations: only
              confirmed connections — never implied before verification.
            </p>
          </div>

          {/* cards | image | cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          >
            {/* LEFT cards */}
            <div className="flex flex-col gap-6">
              {LEFT_CARDS.map((card, i) => (
                <IntegrationCardView key={card.title} card={card} show={gridIn} delay={0.1 + i * 0.1} />
              ))}
            </div>

            {/* CENTER image */}
            <div
              className={`hi-hidden-r ${gridIn ? "hi-visible-r" : ""} min-h-[360px] overflow-hidden rounded-2xl lg:min-h-0`}
              style={{ animationDelay: "0.15s" }}
            >
              
              <img
                src="/healthcare/healthcare-integrations.png"
                alt="A person facing a wall of digital documents and data streams"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT cards */}
            <div className="flex flex-col gap-6">
              {RIGHT_CARDS.map((card, i) => (
                <IntegrationCardView key={card.title} card={card} show={gridIn} delay={0.2 + i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareIntegrationsSection;