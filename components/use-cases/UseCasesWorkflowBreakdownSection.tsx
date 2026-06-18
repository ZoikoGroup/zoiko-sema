"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const workflows = [
  {
    dark: false,
    badge: "WORKFLOW 01",
    title: ["Meeting → Summary → ", "Decision", " → Action"],
    titleItalic: [false, true, false],
    desc: "For teams that need meetings to produce clear next steps instead of scattered notes.",
    useCase: "Ops, product and project teams running recurring syncs where decisions and owners need to land in one place.",
    output: "AI summary, decision log, action list with owners and due dates",
    governance: "Do not imply that every meeting is automatically converted into employee performance evidence.",
    cta: "Explore meeting workflows",
    ctaHref: "#meeting",
    steps: [
      { n: "01", title: "Meeting starts",            desc: "1:1, group or external. Audio or video. Recording and AI consent set per workspace policy." },
      { n: "02", title: "Sema generates a summary",  desc: "Explainable, traceable to source. Available immediately after the meeting ends." },
      { n: "03", title: "Decisions are extracted",   desc: "Confirmed by participants where the workspace requires it. Pinned to the relevant channel." },
      { n: "04", title: "Action items routed",       desc: "Each with owner, due date and link back to the source moment in the meeting." },
    ],
  },
  {
    dark: false,
    badge: "WORKFLOW 02",
    title: ["Client Call → Follow-Up → ", "Record"],
    titleItalic: [false, true],
    desc: "For sales, account, support and professional-service teams that need client conversations to become reliable follow-up.",
    useCase: "Account managers and consultants whose work depends on what was said on the call landing as a record someone else can act on.",
    output: "Call recap, client request summary, follow-up draft, CRM-ready record, internal handoff",
    governance: "Client data handling is permissioned, auditable and aligned to enterprise retention settings. Recording and consent rules apply per jurisdiction.",
    cta: "Explore client call workflows",
    ctaHref: "#client",
    steps: [
      { n: "01", title: "Client call begins",       desc: "Inbound or scheduled. Sema captures with the consent and recording rules set per workspace." },
      { n: "02", title: "Recap and request summary",desc: "Key points, client requests and commitments separated from internal commentary." },
      { n: "03", title: "Follow-up drafted",        desc: "Editable email or message draft with the language adjusted to the call's actual tone." },
      { n: "04", title: "Record + handoff",         desc: "CRM-ready record created. Internal handoff note generated for the next person who needs context." },
    ],
  },
  {
    dark: false,
    badge: "WORKFLOW 03",
    title: ["Team Discussion → ", "Coordinated Work"],
    titleItalic: [false, true],
    desc: "For fast-moving teams that need chat, calls and decisions to become coordinated execution.",
    useCase: "Product, engineering, design, ops or any cross-functional team where most of the real work happens in messages and quick calls between meetings.",
    output: "Thread summary, decision pin, task routing, priority marker, shared context",
    governance: "Avoid suggesting that private team conversations are mined without policy controls. Thread summarisation is workspace-scoped and admin-configurable.",
    cta: "Explore team workflows",
    ctaHref: "#team",
    steps: [
      { n: "01", title: "Discussion happens",       desc: "Across messages, voice notes and quick calls in a channel. Sema preserves the thread structure." },
      { n: "02", title: "Convergence detected",     desc: "Sema identifies decisions, blockers and open questions emerging from the thread." },
      { n: "03", title: "Decision pinned, work routed", desc: "Shared decisions pinned to the channel. Tasks routed to owners with priority markers." },
      { n: "04", title: "Context kept with the work",   desc: "Files, prior decisions and source threads linked to the work card so context never gets lost." },
    ],
  },
  {
    dark: true,
    badge: "WORKFLOW 04",
    title: ["Sema Signal → ", "ZoikoTime Workforce Context"],
    titleItalic: [false, true],
    desc: "For enterprises that use ZoikoTime and want communication context to support workforce truth — where enabled and where policy allows.",
    useCase: "Professional services, consulting, agencies and regulated operations where billable work, client commitments and team activity all benefit from a verifiable record.",
    output: "Permissioned signal, policy gate, context marker, ZoikoTime routing, governance explanation",
    governance: "This is not scoring, surveillance, disciplinary automation or automatic evidence creation. Routing requires admin enablement, role permission, retention policy, jurisdiction match and consent flag.",
    cta: "Explore Sema + ZoikoTime",
    ctaHref: "#zoikotime",
    steps: [
      { n: "01", title: "Sema produces a signal",   desc: "Communication context — call duration, participants, decisions, linked project — captured as a candidate signal." },
      { n: "02", title: "Policy gate evaluates",    desc: "Admin enablement, role permission, retention rules, jurisdiction and consent — all five must pass." },
      { n: "03", title: "Context marker attached",  desc: "Linked to a ZoikoTime work session with a tag — billable, client meeting, internal review — for human context." },
      { n: "04", title: "Routed for review",        desc: "Available to managers and reviewers under workforce policy — as evidence, never as a score or a judgment." },
    ],
  },
];

function WorkflowCard({ wf, index }: { wf: typeof workflows[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const [stepsIn, setStepsIn] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setStepsIn(true), 300);
  }, [inView]);

  const dark = wf.dark;

  return (
    <div
      ref={ref}
      className={`ucwb-card ${inView ? "on" : ""} rounded-2xl overflow-hidden`}
      style={{
        background: dark ? "#1a1a2e" : "#fff",
        border: dark ? "none" : "1px solid #e8ecf5",
        boxShadow: dark
          ? "0 8px 40px rgba(0,0,0,0.25)"
          : "0 2px 24px rgba(71,71,135,0.07)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* ── LEFT ── */}
        <div className={`p-8 md:p-10 flex flex-col gap-5 ${dark ? "" : "border-r border-gray-100"}`}>

          {/* Badge */}
          <span
            className="inline-flex w-fit text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded"
            style={{
              background: dark ? "rgba(255,255,255,0.12)" : "#EEF2FF",
              color: dark ? "#a5b4fc" : "#4f46e5",
            }}
          >
            {wf.badge}
          </span>

          {/* Title */}
          <h3
            className="font-bold leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(22px,2.4vw,30px)", color: dark ? "#fff" : "#111827" }}
          >
            {wf.title.map((part, i) =>
              wf.titleItalic[i]
                ? <em key={i} className="not-italic italic" style={{ fontFamily: "Georgia, serif" }}>{part}</em>
                : <span key={i}>{part}</span>
            )}
          </h3>

          {/* Desc */}
          <p className="text-[14px] leading-[1.75]" style={{ color: dark ? "#9da0c8" : "#6b7280" }}>
            {wf.desc}
          </p>

          {/* Use case box */}
          <div
            className="rounded-xl px-4 py-4 border-l-4"
            style={{
              background: dark ? "rgba(255,255,255,0.07)" : "#f8faff",
              borderLeftColor: dark ? "#6366f1" : "#c7d2fe",
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: dark ? "#a5b4fc" : "#4f46e5" }}>
              Use Case
            </p>
            <p className="text-[13.5px] leading-[1.7]" style={{ color: dark ? "#c7caed" : "#374151" }}>
              {wf.useCase}
            </p>
          </div>

          {/* Output pill */}
          <div
            className="rounded-xl px-4 py-3.5 flex items-start gap-3"
            style={{ background: "#474787" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            <p className="text-[13px] leading-[1.65] text-white">
              <span className="font-semibold" style={{ color: "#a5b4fc" }}>OUTPUT · </span>
              {wf.output}
            </p>
          </div>

          {/* Governance box */}
          <div
            className="rounded-xl px-4 py-3.5 flex items-start gap-3 border-l-4"
            style={{
              background: dark ? "rgba(255,200,100,0.07)" : "#fffbeb",
              borderLeftColor: "#f59e0b",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] mb-1" style={{ color: "#d97706" }}>Governance</p>
              <p className="text-[13px] leading-[1.65]" style={{ color: dark ? "#c7b080" : "#92400e" }}>
                {wf.governance}
              </p>
            </div>
          </div>

          {/* CTA link */}
          <a
            href={wf.ctaHref}
            className="ucwb-cta inline-flex items-center gap-1.5 text-[14px] font-semibold mt-1"
            style={{ color: dark ? "#a5b4fc" : "#4f46e5" }}
          >
            {wf.cta}
            <span className="ucwb-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* ── RIGHT — numbered steps ── */}
        <div className={`p-8 md:p-10 flex flex-col gap-6 ${stepsIn ? "ucwb-steps-in" : ""}`}>
          {wf.steps.map((step, i) => (
            <div
              key={i}
              className={`ucwb-step flex gap-4 items-start`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Number circle */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold"
                style={{
                  background: dark ? "rgba(163,182,252,0.12)" : "#EEF2FF",
                  border: `1.5px solid ${dark ? "rgba(163,182,252,0.3)" : "#c7d2fe"}`,
                  color: dark ? "#a5b4fc" : "#4f46e5",
                }}
              >
                {step.n}
              </div>
              <div>
                <p className="text-[15px] font-bold mb-1.5" style={{ color: dark ? "#fff" : "#111827" }}>
                  {step.title}
                </p>
                <p className="text-[13.5px] leading-[1.7]" style={{ color: dark ? "#9da0c8" : "#6b7280" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function UseCasesWorkflowBreakdownSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes ucwbFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ucwb-hidden  { opacity:0; transform:translateY(28px); }
        .ucwb-visible { animation: ucwbFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card entrance */
        .ucwb-card { opacity:0; transform:translateY(24px); transition:box-shadow .3s; }
        .ucwb-card.on { animation: ucwbFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* step slide in */
        @keyframes ucwbStepIn {
          from { opacity:0; transform:translateX(16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .ucwb-step { opacity:0; }
        .ucwb-steps-in .ucwb-step:nth-child(1) { animation: ucwbStepIn .4s ease .1s  forwards; }
        .ucwb-steps-in .ucwb-step:nth-child(2) { animation: ucwbStepIn .4s ease .22s forwards; }
        .ucwb-steps-in .ucwb-step:nth-child(3) { animation: ucwbStepIn .4s ease .34s forwards; }
        .ucwb-steps-in .ucwb-step:nth-child(4) { animation: ucwbStepIn .4s ease .46s forwards; }

        /* CTA arrow */
        .ucwb-arrow { display:inline-block; transition:transform .2s ease; }
        .ucwb-cta { transition:opacity .2s; }
        .ucwb-cta:hover { opacity:.75; }
        .ucwb-cta:hover .ucwb-arrow { transform:translateX(4px); }

        @media (prefers-reduced-motion:reduce) {
          .ucwb-hidden,.ucwb-card,.ucwb-step { opacity:1!important; transform:none!important; animation:none!important; }
          .ucwb-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Each workflow, broken down into a clear sequence"
        className="w-full py-20 md:py-24"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`ucwb-hidden ${headIn ? "ucwb-visible" : ""} text-center mb-12`}>
            <p className="text-[12.5px] text-gray-400 mb-3 leading-relaxed">
              Steps, the artifact Sema generates, and the governance note that sets the boundary. No customer claims: these are the designed flows.
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontSize: "35px" }}>
              Each workflow, broken down into a clear sequence
            </h2>
          </div>

          {/* ── 4 workflow cards ── */}
          <div className="flex flex-col gap-6">
            {workflows.map((wf, i) => (
              <WorkflowCard key={i} wf={wf} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}