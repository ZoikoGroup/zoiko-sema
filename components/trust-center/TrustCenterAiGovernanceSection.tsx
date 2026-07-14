"use client";

import { Info } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-ai-governance.webp"
const AI_IMAGE_SRC = "/Images/AI-Governance.webp";

interface AiCard {
  title: string;
  description: string;
  tag: string;
}

const leftCards: AiCard[] = [
  {
    title: "AI summary generation",
    description:
      "Control who can generate, view, share, and export AI meeting summaries by role and workspace.",
    tag: "Admin-controlled",
  },
  {
    title: "Sensitive workspace exclusions",
    description:
      "Disable AI features in HR, legal, executive, or regulated workspaces via exclusion list.",
    tag: "Exclusion-ready",
  },
];

const rightCards: AiCard[] = [
  {
    title: "Guest & external meeting policy",
    description:
      "Define whether AI can be used when external participants join. Policy visible to all participants.",
    tag: "Policy-driven",
  },
  {
    title: "AI audit events",
    description:
      "Log when AI was used, by whom, in which workspace, and what outputs were shared.",
    tag: "Audit-visible",
  },
];

function AiCardBlock({ title, description, tag, delay }: AiCard & { delay: number }) {
  return (
    <div
      className="tc-ai-card rounded-2xl bg-white p-6 shadow-sm"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Info size={15} strokeWidth={2} />
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{description}</p>
      <span className="mt-3 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
        {tag}
      </span>
    </div>
  );
}

export default function TrustCenterAiGovernanceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcAiUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-ai-hidden { opacity: 0; transform: translateY(20px); }
        .tc-ai-visible { animation: tcAiUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes tcAiCardStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-ai-card {
          opacity: 0;
          animation: tcAiCardStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .tc-ai-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }

        @keyframes tcAiImgIn {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tc-ai-img-hidden { opacity: 0; transform: translateY(24px) scale(.97); }
        .tc-ai-img-visible { animation: tcAiImgIn .6s cubic-bezier(.22,1,.36,1) forwards; }
        .tc-ai-img-wrap { transition: transform .35s ease; }
        .tc-ai-img-wrap:hover { transform: translateY(-6px); }

        @media (prefers-reduced-motion: reduce) {
          .tc-ai-hidden, .tc-ai-img-hidden { opacity: 1 !important; transform: none !important; }
          .tc-ai-visible, .tc-ai-img-visible { animation: none !important; }
          .tc-ai-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`tc-ai-hidden ${headIn ? "tc-ai-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-emerald-600">
              AI Governance
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              AI supports. A person decides.
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Every AI feature is admin-controlled, auditable, and
              policy-driven. Sensitive workspaces can exclude AI entirely.
            </p>
          </div>

          <div
            ref={bodyRef}
            className={`tc-ai-hidden ${bodyIn ? "tc-ai-visible" : ""} mt-10 grid grid-cols-1 items-center gap-5 text-left lg:grid-cols-3`}
          >
            <div className="flex flex-col gap-5">
              {leftCards.map((c, i) => (
                <AiCardBlock key={c.title} {...c} delay={i * 0.1} />
              ))}
            </div>

            <div className={`tc-ai-img-hidden ${bodyIn ? "tc-ai-img-visible" : ""} tc-ai-img-wrap overflow-hidden rounded-2xl`}>
              <img
                src={AI_IMAGE_SRC}
                alt="Person reviewing AI-assisted meeting summary at night"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              {rightCards.map((c, i) => (
                <AiCardBlock key={c.title} {...c} delay={0.2 + i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
