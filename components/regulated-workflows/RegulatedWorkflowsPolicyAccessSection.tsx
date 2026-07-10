"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

const BRAND = "#3457E8";

const roles = ["Owner", "Admin", "Compliance Admin", "Security Admin", "Reviewer", "Auditor", "External Guest"];

const cards = [
  {
    title: "Role-based access",
    desc: "Owner, Admin, Compliance Admin, Security Admin, Reviewer, Auditor, and External Guest roles.",
    tag: "Business+",
    tagBg: "rgba(52,87,232,0.1)",
    tagColor: BRAND,
  },
  {
    title: "SSO & MFA",
    desc: "Configured status, provider, enforcement scope, exception count, and test connection.",
    tag: "Business+",
    tagBg: "rgba(52,87,232,0.1)",
    tagColor: BRAND,
  },
  {
    title: "Retention rules",
    desc: "Workspace-level and workflow-level retention with duration, scope, and override status.",
    tag: "Business+",
    tagBg: "rgba(52,87,232,0.1)",
    tagColor: BRAND,
  },
  {
    title: "Legal hold",
    desc: "Hold target, case or matter, owner, status, and export availability.",
    tag: "Sales-assisted",
    tagBg: "#FCE7E7",
    tagColor: "#DC2626",
  },
  {
    title: "External access",
    desc: "Approved domains, guest expiry, client and partner roles, and review due dates.",
    tag: "Business+",
    tagBg: "rgba(52,87,232,0.1)",
    tagColor: BRAND,
  },
  {
    title: "Data controls",
    desc: "Classification labels, restricted sharing, file policy, DLP integration, and redaction.",
    tag: "Enterprise",
    tagBg: "#FEF3C7",
    tagColor: "#D97706",
  },
];

export default function RegulatedWorkflowsPolicyAccessSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: pillsRef, inView: pillsIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes rpaFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rpa-hidden  { opacity: 0; transform: translateY(28px); }
        .rpa-visible { animation: rpaFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rpa-pill { opacity: 0; transform: translateY(10px) scale(0.94); }
        .rpa-pills.rpa-visible .rpa-pill {
          animation: rpaPillIn .4s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes rpaPillIn {
          from { opacity: 0; transform: translateY(10px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .rpa-card { opacity: 0; transform: translateY(24px); }
        .rpa-grid.rpa-visible .rpa-card {
          animation: rpaFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rpa-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .rpa-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(52,87,232,0.1);
          border-color: rgba(52,87,232,0.2);
        }

        .rpa-role-pill {
          transition: transform .2s ease, background-color .2s ease;
        }
        .rpa-role-pill:hover {
          transform: translateY(-2px);
          background-color: rgba(52,87,232,0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .rpa-hidden, .rpa-visible, .rpa-pill, .rpa-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rpa-card-inner:hover, .rpa-role-pill:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Policy and access"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`rpa-hidden ${badgeIn ? "rpa-visible" : ""} text-center mb-4`}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: BRAND }}
            >
              Policy &amp; Access
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`rpa-hidden ${headIn ? "rpa-visible" : ""} text-center mb-8 sm:mb-10`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[600px] mx-auto">
              Enterprise administration, without the admin-manual feeling.
            </h2>
          </div>

          {/* Role pills */}
          <div
            ref={pillsRef}
            className={`rpa-pills ${pillsIn ? "rpa-visible" : ""} flex flex-wrap items-center justify-center gap-2.5 mb-12 sm:mb-16`}
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className="rpa-pill rpa-role-pill rounded-full text-[13px] font-semibold px-4 py-2"
                style={{
                  background: "rgba(52,87,232,0.08)",
                  color: BRAND,
                  animationDelay: `${0.05 + i * 0.05}s`,
                }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Feature cards */}
          <div
            ref={gridRef}
            className={`rpa-grid ${gridIn ? "rpa-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="rpa-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="rpa-card-inner h-full rounded-2xl border border-gray-100 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900">
                      {c.title}
                    </h3>
                    <span
                      className="shrink-0 rounded-full text-[10.5px] font-semibold px-2.5 py-1"
                      style={{ background: c.tagBg, color: c.tagColor }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}