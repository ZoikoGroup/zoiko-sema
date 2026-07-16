"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiLock, FiUsers, FiEye, FiClock, FiShield, FiLayers, FiArrowRight } from "react-icons/fi";
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

type Control = { icon: IconType; title: string; description: string };

const CONTROLS: Control[] = [
  {
    icon: FiLock,
    title: "Purpose",
    description:
      "Approved operational purpose for every workspace and access request. Customer-configurable and auditable.",
  },
  {
    icon: FiUsers,
    title: "Role",
    description:
      "Named roles and permission sets. No broad 'all healthcare staff' access patterns.",
  },
  {
    icon: FiEye,
    title: "Scope",
    description:
      "Access to the exact org, workspace, channel, meeting, document, or workflow required.",
  },
  {
    icon: FiClock,
    title: "Time",
    description:
      "Guest expiry, access review dates, temporary escalation, and emergency-access expiration where policy allows.",
  },
  {
    icon: FiShield,
    title: "Emergency Access",
    description:
      "Requires reason, approved role, visible status, limited duration, post-use review, and audit.",
  },
  {
    icon: FiLayers,
    title: "Audit",
    description:
      "Every grant, denial, role change, expiry, export, download, invite, and revocation event is logged.",
  },
];

export function HealthcareAccessSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: linkRef, inView: linkIn } = useInView<HTMLButtonElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes haFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ha-hidden  { opacity: 0; transform: translateY(28px); }
        .ha-visible { animation: haFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ha-card { transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .3s ease; }
        .ha-card:hover { transform: translateY(-3px); background-color: rgba(47,107,235,0.06); }

        .ha-link-arrow { transition: transform .25s ease; }
        .ha-link:hover .ha-link-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .ha-hidden, .ha-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ha-card:hover { transform: none !important; }
          .ha-link:hover .ha-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Minimum-necessary access by design"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-md lg:pt-2">
            <p
              ref={eyebrowRef}
              className={`ha-hidden ${eyebrowIn ? "ha-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Privacy &amp; Access
            </p>
            <h2
              ref={headRef}
              className={`ha-hidden ${headIn ? "ha-visible" : ""} mb-4 text-[clamp(28px,4.2vw,40px)] font-bold leading-[1.12] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Minimum-necessary access. By design.
            </h2>
            <p
              ref={subRef}
              className={`ha-hidden ${subIn ? "ha-visible" : ""} mb-6 text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Every access decision is governed by purpose, role, scope, and time
              — with visible controls, audit evidence, and safe external-partner
              patterns.
            </p>
            <Link href="#">
              <button
                ref={linkRef}
                type="button"
                className={`ha-hidden ha-link ${linkIn ? "ha-visible" : ""} inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2F6BEB] dark:text-[#6B8AF5]`}
                style={{ animationDelay: "0.24s" }}
              >
              Explore access controls
              <FiArrowRight className="ha-link-arrow h-4 w-4" aria-hidden="true" />
            </button>
            </Link>
          </div>

          {/* RIGHT — 2x3 control cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {CONTROLS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className={`ha-card ha-hidden ${gridIn ? "ha-visible" : ""} rounded-xl bg-[#F5F6FA] p-5 dark:bg-[#151233]`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 flex-shrink-0 text-[#2F6BEB] dark:text-[#6B8AF5]" aria-hidden="true" />
                    <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-[12px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareAccessSection;