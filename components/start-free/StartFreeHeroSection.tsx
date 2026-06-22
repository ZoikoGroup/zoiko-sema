"use client";

import React, { useState } from "react";
import Link from "next/link";

type SubmitState = "idle" | "loading" | "success" | "error";

interface FormData {
  fullName: string;
  teamSize: string;
  workEmail: string;
  workspaceName: string;
}

const teamSizeOptions = [
  "Just me",
  "2–10",
  "11–50",
  "51–200",
  "201–1000",
  "1000+",
];

const stats = [
  { value: "10K+", label: "Workspaces created" },
  { value: "25+", label: "Countries active" },
  { value: "99.9%", label: "Uptime" },
];

const features = [
  "Unlimited 1:1 and group messaging — free forever for teams up to 10",
  "HD audio and video meetings — no time limit on 1:1 calls",
  "10 AI meeting summaries per month on the free plan",
  "Channels, threads, search, file sharing, and guest access",
];

export default function StartFreeHeroSection() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    teamSize: "",
    workEmail: "",
    workspaceName: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [teamSizeOpen, setTeamSizeOpen] = useState(false);

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate(): boolean {
    const next: Partial<FormData> = {};
    if (!form.fullName.trim()) next.fullName = "Required";
    if (!form.teamSize.trim()) next.teamSize = "Required";
    if (!form.workEmail.trim()) next.workEmail = "Required";
    else if (!isValidEmail(form.workEmail)) next.workEmail = "Invalid email";
    if (!form.workspaceName.trim()) next.workspaceName = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setState("error");
      return;
    }
    setState("loading");
    try {
      // Replace with real signup endpoint:
      // const res = await fetch("/api/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Signup failed");
      await new Promise((r) => setTimeout(r, 1200));
      setState("success");
    } catch {
      setState("error");
    }
  }

  function updateField<K extends keyof FormData>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  return (
    <>
      <style>{`
        @keyframes sfFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sfSlideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes sfBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(26px,16px) scale(1.05); }
        }
        @keyframes sfBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-20px,-14px) scale(1.04); }
        }
        @keyframes sfDotFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes sfTopGlow {
          0%,100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        @keyframes sfSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sfCheckPop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes sfShake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(2px); }
        }

        .sf-anim-1,.sf-anim-2,.sf-anim-3,.sf-anim-4,.sf-anim-5,.sf-anim-right { opacity: 0; }
        .sf-mounted .sf-anim-1 { animation: sfFadeUp .5s cubic-bezier(.22,1,.36,1) .04s forwards; }
        .sf-mounted .sf-anim-2 { animation: sfFadeUp .55s cubic-bezier(.22,1,.36,1) .12s forwards; }
        .sf-mounted .sf-anim-3 { animation: sfFadeUp .55s cubic-bezier(.22,1,.36,1) .20s forwards; }
        .sf-mounted .sf-anim-4 { animation: sfFadeUp .55s cubic-bezier(.22,1,.36,1) .30s forwards; }
        .sf-mounted .sf-anim-5 { animation: sfFadeUp .55s cubic-bezier(.22,1,.36,1) .40s forwards; }
        .sf-mounted .sf-anim-right { animation: sfSlideInRight .65s cubic-bezier(.22,1,.36,1) .18s forwards; }

        .sf-blob-1 { animation: sfBlobDrift1 12s ease-in-out infinite alternate; }
        .sf-blob-2 { animation: sfBlobDrift2 16s ease-in-out infinite alternate-reverse; }

        .sf-dot { animation: sfDotFloat 2.4s ease-in-out infinite; }
        .sf-dot:nth-child(2) { animation-delay: .3s; }
        .sf-dot:nth-child(3) { animation-delay: .6s; }
        .sf-dot:nth-child(4) { animation-delay: .9s; }

        .sf-top-glow { animation: sfTopGlow 3s ease-in-out infinite; }

        /* badge */
        .sf-badge {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .sf-badge:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,0.15); }

        /* feature row hover */
        .sf-feature { transition: padding-left .18s ease; }
        .sf-feature:hover { padding-left: 4px; }

        /* link hover */
        .sf-link { transition: color .2s ease, opacity .2s ease; opacity: 0.85; }
        .sf-link:hover { opacity: 1; text-decoration: underline; }

        /* ── form card ── */
        .sf-card {
          transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease;
        }
        .sf-card:hover { transform: translateY(-3px); }

        .sf-input {
          transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .sf-input:hover { border-color: #c7cbe8; }
        .sf-input:focus {
          outline: none;
          border-color: #474787;
          box-shadow: 0 0 0 3px rgba(71,71,135,0.12);
        }
        .sf-input.has-error {
          border-color: #ef4444;
          animation: sfShake 0.4s ease;
        }

        .sf-select-trigger {
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .sf-select-trigger:hover { border-color: #c7cbe8; }
        .sf-select-trigger:focus-visible {
          outline: none;
          border-color: #474787;
          box-shadow: 0 0 0 3px rgba(71,71,135,0.12);
        }
        .sf-select-chevron { transition: transform .25s ease; }
        .sf-select-chevron.is-open { transform: rotate(180deg); }
        .sf-select-dropdown {
          animation: sfFadeUp .18s cubic-bezier(.22,1,.36,1) both;
        }
        .sf-select-option { transition: background-color .15s ease, padding-left .15s ease; }
        .sf-select-option:hover { background-color: #F4F6FE; padding-left: 18px; }

        /* primary submit button */
        .sf-submit-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease, background-color .2s ease;
        }
        .sf-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(71,71,135,0.4);
        }
        .sf-submit-btn:active:not(:disabled) { transform: translateY(0) scale(0.98); }
        .sf-submit-btn:disabled { cursor: default; opacity: 0.85; }
        @keyframes sfShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .sf-submit-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .sf-submit-btn:hover:not(:disabled)::after { animation: sfShimmer .6s ease forwards; }

        .sf-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: sfSpin 0.7s linear infinite;
        }

        .sf-oauth-btn {
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .sf-oauth-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(15,15,40,0.08);
          border-color: #c7cbe8;
          background-color: #fafaff;
        }
        .sf-oauth-btn:active { transform: translateY(0) scale(0.98); }

        .sf-check-icon { animation: sfCheckPop 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        .sf-error-text { animation: sfFadeUp 0.3s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .sf-anim-1,.sf-anim-2,.sf-anim-3,.sf-anim-4,.sf-anim-5,.sf-anim-right {
            opacity: 1 !important; animation: none !important;
          }
          .sf-blob-1,.sf-blob-2,.sf-dot,.sf-top-glow { animation: none !important; }
          .sf-card:hover, .sf-submit-btn:hover, .sf-oauth-btn:hover, .sf-badge:hover { transform: none; }
          .sf-input.has-error { animation: none !important; }
        }

        /* ── mobile responsive ── */
        @media (max-width: 1023px) {
          .sf-grid {
            grid-template-columns: 1fr !important;
          }
          .sf-left-pad {
            padding-bottom: 0 !important;
          }
        }
      `}</style>

      <section
        aria-label="Where conversations become clarity"
        style={{ backgroundColor: "#474787" }}
        className="sf-mounted relative w-full min-h-screen overflow-hidden"
      >
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="sf-blob-1 pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-[110px]"
          style={{ background: "#a5b4fc" }}
        />
        <div
          aria-hidden="true"
          className="sf-blob-2 pointer-events-none absolute bottom-[-120px] right-[10%] w-[420px] h-[420px] rounded-full opacity-12 blur-[110px]"
          style={{ background: "#2563eb" }}
        />

        <div className="sf-grid relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.95fr] gap-12 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-20 items-center">

          {/* ════ LEFT CONTENT ════ */}
          <div className="sf-left-pad flex flex-col pb-10">

            {/* Badge */}
            <div className="sf-anim-1 mb-7">
              <span className="sf-badge inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold tracking-wide" style={{ color: "#474787" }}>
                START FREE · NO CREDIT CARD
              </span>
            </div>

            {/* Headline */}
            <h1
              className="sf-anim-2 font-bold leading-[1.08] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(32px,4.4vw,46px)" }}
            >
              Where conversations
              <br />
              become clarity.
            </h1>

            {/* Sub-copy */}
            <p className="sf-anim-3 text-[15px] leading-[1.75] max-w-[480px] mb-8" style={{ color: "#c7caed" }}>
              Create a free Sema workspace for secure messaging, calls, AI-powered
              meeting summaries, and governed team communication. Set up in 90
              seconds.
            </p>

            {/* Stats */}
            <div className="sf-anim-4 flex items-center gap-8 mb-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[22px] font-extrabold text-white leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[12px]" style={{ color: "#a8abda" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div className="sf-anim-5 space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="sf-feature flex items-start gap-3">
                  <span
                    className="sf-dot flex-shrink-0 w-4 h-4 rounded-full border-2 mt-[2px]"
                    style={{ borderColor: "rgba(255,255,255,0.4)" }}
                  />
                  <span className="text-[13.5px] leading-relaxed" style={{ color: "#dde0f5" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer links */}
            <div className="sf-anim-5 flex items-center gap-6">
              <Link href="/pricing" className="sf-link text-[13.5px] font-medium text-white">
                Compare plans
              </Link>
              <Link href="/get-a-demo/" className="sf-link text-[13.5px] font-medium text-white">
                Get a demo instead
              </Link>
            </div>
          </div>

          {/* ════ RIGHT — signup form card ════ */}
          <div className="sf-anim-right relative">
            <div
              className="sf-card relative rounded-[24px] bg-white p-8 md:p-9 shadow-2xl overflow-hidden"
            >
              {/* top gradient accent line */}
              <div
                className="sf-top-glow absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #474787, #2563eb, #34a16b)",
                }}
                aria-hidden="true"
              />

              {state === "success" ? (
                <div className="flex flex-col items-center text-center py-10">
                  <span
                    className="sf-check-icon w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "#474787" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5l5.5 5.5L20 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-[19px] font-bold text-[#15131F] mb-2">
                    Workspace created!
                  </h3>
                  <p className="text-[13.5px] text-[#5C5870] max-w-[280px]">
                    Check {form.workEmail || "your inbox"} for a confirmation link to
                    finish setting up {form.workspaceName || "your workspace"}.
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <h2 className="text-[20px] font-bold text-[#15131F] mb-1.5">
                    Create your free workspace
                  </h2>
                  <p className="text-[12.5px] text-[#9CA3AF] mb-6">
                    Free forever for teams up to 10 · No credit card required
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Full name + Team size */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[12.5px] font-semibold text-[#15131F] mb-1.5">
                          Full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={form.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                          className={`sf-input w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-[13.5px] text-[#15131F] placeholder:text-gray-400 ${
                            errors.fullName ? "has-error" : ""
                          }`}
                        />
                        {errors.fullName && (
                          <p className="sf-error-text text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Team size custom select */}
                      <div className="relative">
                        <label className="block text-[12.5px] font-semibold text-[#15131F] mb-1.5">
                          Team size <span className="text-red-500">*</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => setTeamSizeOpen((o) => !o)}
                          className={`sf-select-trigger w-full flex items-center justify-between rounded-lg border border-gray-200 px-3.5 py-2.5 text-[13.5px] text-left ${
                            form.teamSize ? "text-[#15131F]" : "text-gray-400"
                          } ${errors.teamSize ? "has-error" : ""}`}
                        >
                          {form.teamSize || "Select"}
                          <svg
                            className={`sf-select-chevron ${teamSizeOpen ? "is-open" : ""}`}
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                          >
                            <path d="M2 3.5l3 3 3-3" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        {teamSizeOpen && (
                          <div className="sf-select-dropdown absolute left-0 top-[calc(100%+4px)] z-30 w-full rounded-lg border border-gray-100 bg-white shadow-lg overflow-hidden">
                            {teamSizeOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  updateField("teamSize", opt);
                                  setTeamSizeOpen(false);
                                }}
                                className="sf-select-option w-full text-left px-3.5 py-2.5 text-[13px] text-[#15131F]"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                        {errors.teamSize && (
                          <p className="sf-error-text text-[11px] text-red-500 mt-1">{errors.teamSize}</p>
                        )}
                      </div>
                    </div>

                    {/* Work email */}
                    <div className="mb-4">
                      <label className="block text-[12.5px] font-semibold text-[#15131F] mb-1.5">
                        Work email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        inputMode="email"
                        placeholder="you@company.com"
                        value={form.workEmail}
                        onChange={(e) => updateField("workEmail", e.target.value)}
                        className={`sf-input w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-[13.5px] text-[#15131F] placeholder:text-gray-400 ${
                          errors.workEmail ? "has-error" : ""
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="sf-error-text text-[11px] text-red-500 mt-1">{errors.workEmail}</p>
                      )}
                    </div>

                    {/* Workspace name */}
                    <div className="mb-6">
                      <label className="block text-[12.5px] font-semibold text-[#15131F] mb-1.5">
                        Workspace name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={form.workspaceName}
                        onChange={(e) => updateField("workspaceName", e.target.value)}
                        className={`sf-input w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-[13.5px] text-[#15131F] placeholder:text-gray-400 ${
                          errors.workspaceName ? "has-error" : ""
                        }`}
                      />
                      {errors.workspaceName && (
                        <p className="sf-error-text text-[11px] text-red-500 mt-1">{errors.workspaceName}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="sf-submit-btn w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-semibold text-white mb-5"
                      style={{ background: "#474787" }}
                    >
                      {state === "loading" ? (
                        <>
                          <span className="sf-spinner" aria-hidden="true" />
                          Creating workspace…
                        </>
                      ) : (
                        "Create free workspace"
                      )}
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center mb-5">
                      <span className="absolute inset-x-0 top-1/2 h-px bg-gray-100" />
                      <span className="relative bg-white px-3 text-[11.5px] text-gray-400">
                        or use email
                      </span>
                    </div>

                    {/* OAuth buttons */}
                    <div className="space-y-3 mb-5">
                      <button
                        type="button"
                        className="sf-oauth-btn w-full flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-5 py-3 text-[13.5px] font-medium text-[#15131F]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.4c-.3 1.5-1.2 2.7-2.5 3.6v3h4.3c2.5-2.3 3.8-5.7 3.8-8.7z"/>
                          <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-4.3-3c-1.1.8-2.6 1.3-3.6 1.3-3.4 0-6.3-2.3-7.3-5.4H.4v3.1C2.4 21.2 6.8 24 12 24z"/>
                          <path fill="#FBBC05" d="M4.7 13c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V5.9H.4C-.1 7.6 0 9.3 0 11s-.1 3.4.4 5.1l4.3-3.1z"/>
                          <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.7 1.8l3.5-3.5C18 1.1 15.2 0 12 0 6.8 0 2.4 2.8.4 6.9l4.3 3.1c1-3.1 3.9-5.2 7.3-5.2z"/>
                        </svg>
                        Continue with Google
                      </button>

                      <button
                        type="button"
                        className="sf-oauth-btn w-full flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-5 py-3 text-[13.5px] font-medium text-[#15131F]"
                      >
                        <svg width="16" height="16" viewBox="0 0 23 23">
                          <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
                          <rect x="13" y="0" width="10" height="10" fill="#7FBA00"/>
                          <rect x="0" y="13" width="10" height="10" fill="#00A4EF"/>
                          <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
                        </svg>
                        Continue with Microsoft
                      </button>
                    </div>

                    {/* Fine print */}
                    <p className="text-[11px] text-center leading-relaxed text-gray-400">
                      No card required · Cancel anytime · By continuing, you agree to the{" "}
                      <Link href="/terms" className="sf-link text-[#474787] font-medium">
                        Terms of Service
                      </Link>
                      ,{" "}
                      <Link href="/privacy" className="sf-link text-[#474787] font-medium">
                        Privacy Notice
                      </Link>
                      , and{" "}
                      <Link href="/ai-use-policy" className="sf-link text-[#474787] font-medium">
                        AI Use Policy
                      </Link>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}