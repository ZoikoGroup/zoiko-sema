"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiClipboard, FiUsers, FiArrowRight, FiAlertCircle, FiFileText, FiGlobe } from "react-icons/fi";
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

type Workflow = {
  icon: IconType;
  title: string;
  roles: string;
  description: string;
};

const WORKFLOWS: Workflow[] = [
  {
    icon: FiClipboard,
    title: "Shift & Service Handoff",
    roles: "Care operations, unit coordinators",
    description:
      "Acknowledged handoff with owner, due time, and open items. Role/scope, escalation, expiry, and audit.",
  },
  {
    icon: FiUsers,
    title: "Case Conference",
    roles: "Authorized care and administrative teams",
    description:
      "Reviewed meeting summary, decisions, and follow-up. Participant notice, AI eligibility, and retention.",
  },
  {
    icon: FiArrowRight,
    title: "Referral / Authorization",
    roles: "Operations, payer/provider teams",
    description:
      "Structured request, status, decision, and evidence. Partner identity, minimum-necessary context, and audit.",
  },
  {
    icon: FiAlertCircle,
    title: "Incident Coordination",
    roles: "Security, privacy, IT, operations",
    description:
      "Incident workspace, actions, status, and post-event evidence. Restricted access, severity, and escalation.",
  },
  {
    icon: FiFileText,
    title: "Quality / Safety Committee",
    roles: "Authorized committee members",
    description:
      "Agenda, discussion, decisions, retained evidence. Sensitive exclusions, membership, and versioning.",
  },
  {
    icon: FiGlobe,
    title: "Vendor / Partner Collaboration",
    roles: "Internal owner, vendor contacts",
    description:
      "Scoped workspace, tasks, approvals, and expiry. Approved domain, contract status, guest restrictions.",
  },
];

export function HealthcareWorkflowsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes hwFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hwRise {
          from { opacity: 0; transform: translateY(36px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hw-hidden  { opacity: 0; transform: translateY(28px); }
        .hw-visible { animation: hwFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hw-hidden-r  { opacity: 0; transform: translateY(36px) scale(.99); }
        .hw-visible-r { animation: hwRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        .hw-card { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease; }
        .hw-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(16,24,40,0.10); border-color: rgba(47,107,235,0.30); }

        @media (prefers-reduced-motion: reduce) {
          .hw-hidden, .hw-visible, .hw-hidden-r, .hw-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .hw-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Every healthcare workflow, one governed platform"
        className="w-full bg-[#F5F6FB] py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`hw-hidden ${eyebrowIn ? "hw-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Operational workflows
            </p>
            <h2
              ref={headRef}
              className={`hw-hidden ${headIn ? "hw-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Every healthcare workflow. One governed platform.
            </h2>
            <p
              ref={subRef}
              className={`hw-hidden ${subIn ? "hw-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              From handoffs to vendor collaboration — with controls, evidence, and
              audit at every step.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WORKFLOWS.map((wf, i) => {
              const Icon = wf.icon;
              return (
                <div
                  key={wf.title}
                  className={`hw-card hw-hidden ${gridIn ? "hw-visible" : ""} rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#2F6BEB] dark:bg-[#2F6BEB]/20 dark:text-[#6B8AF5]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-1 text-[15px] font-semibold text-gray-900 dark:text-white">
                    {wf.title}
                  </h3>
                  <p className="mb-2.5 text-[12px] font-semibold text-[#2F6BEB] dark:text-[#6B8AF5]">
                    {wf.roles}
                  </p>
                  <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {wf.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`hw-hidden-r ${imgIn ? "hw-visible-r" : ""} mt-10 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            
            <img
              src="/healthcare/healthcare-workflows.png"
              alt="A healthcare operations specialist monitoring coordination dashboards at a multi-screen workstation"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/6] lg:aspect-[16/5]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareWorkflowsSection;