"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiShield, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import type { IconType } from "react-icons";
import Link from "next/link";

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

type TrustCard = { icon: IconType; title: string; description: string };

const LEFT_CARD: TrustCard = {
  icon: FiShield,
  title: "Security & Privacy",
  description:
    "SSO, MFA, SCIM, domain verification, session controls, access governance, and verified encryption claims — detailed evidence in Trust Center.",
};

const RIGHT_CARD: TrustCard = {
  icon: FiCheckCircle,
  title: "Dedicated Support",
  description:
    "Priority and dedicated implementation, training, policy review, incident routing, and account team for enterprise customers.",
};

const LINKS = [
  { label: "Review DPA", href: "data-processing-agreement" },
  { label: "System Status", href: "#" },
];

function Card({ card, show, delay }: { card: TrustCard; show: boolean; delay: number }) {
  const Icon = card.icon;
  return (
    <div
      className={`ht-hidden ${show ? "ht-visible" : ""} flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#151233] p-6`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F6BEB]/15 text-[#6B8AF5]">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <h3 className="mb-2 text-[15px] font-semibold text-white">{card.title}</h3>
      <p className="text-[13px] leading-[1.6] text-gray-400">{card.description}</p>
    </div>
  );
}

export function HealthcareTrustSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: noteRef, inView: noteIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes htFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes htRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ht-hidden  { opacity: 0; transform: translateY(28px); }
        .ht-visible { animation: htFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .ht-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .ht-visible-r { animation: htRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        .ht-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .ht-btn-primary:hover { transform: translateY(-2px); background-color: #3B78F0; box-shadow: 0 12px 28px rgba(47,107,235,0.45); }
        .ht-btn-primary:active { transform: translateY(0); }

        .ht-btn-secondary { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .ht-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); }
        .ht-btn-secondary:active { transform: translateY(0); }

        .ht-link-icon { transition: transform .25s ease; }
        .ht-link:hover .ht-link-icon { transform: translate(2px, -2px); }

        @media (prefers-reduced-motion: reduce) {
          .ht-hidden, .ht-visible, .ht-hidden-r, .ht-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ht-btn-primary:hover, .ht-btn-secondary:hover { transform: none !important; }
          .ht-link:hover .ht-link-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Enterprise trust — security, privacy, legal, and procurement"
        className="w-full bg-[#0D0B24] py-10 sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p
              ref={eyebrowRef}
              className={`ht-hidden ${eyebrowIn ? "ht-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#6B8AF5]`}
            >
              Enterprise Trust
            </p>
            <h2
              ref={headRef}
              className={`ht-hidden ${headIn ? "ht-visible" : ""} mb-4 text-[clamp(26px,4.2vw,40px)] font-bold leading-[1.12] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Support security, privacy, legal, and procurement.
            </h2>
            <p
              ref={subRef}
              className={`ht-hidden ${subIn ? "ht-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Zoiko Sema supports privacy, security, compliance, and audit
              workflows. Customers remain responsible for lawful configuration and
              use.
            </p>
          </div>

          {/* card | image | card */}
          <div
            ref={rowRef}
            className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          >
            <Card card={LEFT_CARD} show={rowIn} delay={0.1} />

            <div
              className={`ht-hidden-r ${rowIn ? "ht-visible-r" : ""} min-h-[240px] overflow-hidden rounded-2xl lg:min-h-0`}
              style={{ animationDelay: "0.18s" }}
            >
              
              <img
                src="/healthcare/trust.png"
                alt="Two people shaking hands over a desk, closing an enterprise agreement"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <Card card={RIGHT_CARD} show={rowIn} delay={0.26} />
          </div>

          {/* CTAs + links */}
          <div
            ref={ctaRef}
            className={`ht-hidden ${ctaIn ? "ht-visible" : ""} mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3`}
            style={{ animationDelay: "0.1s" }}
          >
            <Link href="trust-center">
            <button
              type="button"
              className="ht-btn-primary rounded-lg bg-[#2F6BEB] px-6 py-3 text-[14px] font-semibold text-white"
            >
              Visit Trust Center
            </button>
            </Link>
            <Link href="contact-sales">
            <button
              type="button"
              className="ht-btn-secondary rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-[14px] font-semibold text-white"
            >
              Talk to sales
            </button>
            </Link>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="ht-link inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6B8AF5]"
              >
                {link.label}
                <FiExternalLink className="ht-link-icon h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Fine print */}
          <div
            ref={noteRef}
            className={`ht-hidden ${noteIn ? "ht-visible" : ""} mt-10 rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 text-center`}
            style={{ animationDelay: "0.1s" }}
          >
            <p className="mx-auto max-w-3xl text-[12px] leading-[1.7] text-gray-500">
              No automatic HIPAA compliance claim is made. BAA review is available
              through sales-assisted contracting where offered and approved.
              Compliance depends on the exact service, configuration, contract,
              policies, notices, permissions, safeguards, and applicable law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareTrustSection;