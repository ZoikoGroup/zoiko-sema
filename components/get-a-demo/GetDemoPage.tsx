"use client";

import React, { useEffect, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  teamSize: string;
  role: string;
  reason: string;
  message: string;
  consent: boolean;
}
interface Errors { [k: string]: string }

// ── Check icon ─────────────────────────────────────────────────────────────
function CheckCircle() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#474787" }}>
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

// ── Field wrapper ──────────────────────────────────────────────────────────
function Field({ label, required, hint, error, children }: {
  label: string; required?: boolean; hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-gray-800">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[11.5px] text-gray-400 leading-snug">{hint}</p>}
      {error && <p className="text-[11.5px] text-red-500 leading-snug">{error}</p>}
    </div>
  );
}

// ── Input ─────────────────────────────────────────────────────────────────
function Input({ value, onChange, type = "text", placeholder = "", error = false }: {
  value: string; onChange: (v: string) => void; type?: string; placeholder?: string; error?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      className="gd-input rounded-lg px-3 py-2.5 text-[13.5px] text-gray-800 outline-none"
      style={{
        border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`,
        background: "#fff",
        transition: "border-color .18s, box-shadow .18s",
      }}
    />
  );
}

// ── Select ─────────────────────────────────────────────────────────────────
function Select({ value, onChange, options, placeholder, error = false }: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder: string; error?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="gd-select w-full rounded-lg px-3 py-2.5 text-[13.5px] text-gray-800 outline-none appearance-none pr-9"
        style={{
          border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`,
          background: "#fff",
          color: value ? "#111827" : "#9ca3af",
          transition: "border-color .18s, box-shadow .18s",
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function GetDemoPage() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", company: "",
    teamSize: "", role: "", reason: "", message: "", consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => { setMounted(true); }, []);

  function set(key: keyof FormData, val: string | boolean) {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => { const n = { ...e }; delete n[key]; return n; });
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.firstName.trim())  e.firstName = "First name is required.";
    if (!form.lastName.trim())   e.lastName  = "Last name is required.";
    if (!form.email.trim())      e.email     = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.company.trim())    e.company   = "Company or organisation name is required.";
    if (!form.teamSize)          e.teamSize  = "Please select a team size.";
    if (!form.role)              e.role      = "Please select your role.";
    if (!form.reason)            e.reason    = "Please tell us what brings you here.";
    if (!form.consent)           e.consent   = "Please agree to be contacted before submitting.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @keyframes gdFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes gdBlobDrift1 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(26px,16px) scale(1.04); }
        }
        @keyframes gdBlobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(-20px,-14px) scale(1.03); }
        }
        @keyframes gdPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow:0 0 0 4px rgba(71,71,135,0); }
        }
        @keyframes gdShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        @keyframes gdSuccessIn {
          from { opacity:0; transform:scale(.92); }
          65%  { transform:scale(1.03); }
          to   { opacity:1; transform:scale(1); }
        }

        .gd-blob-1 { animation: gdBlobDrift1 13s ease-in-out infinite alternate; }
        .gd-blob-2 { animation: gdBlobDrift2 17s ease-in-out infinite alternate-reverse; }
        .gd-badge-dot { animation: gdPulse 2.4s ease-in-out infinite; }

        .gd-a1,.gd-a2,.gd-a3,.gd-a4,.gd-a5,.gd-a6 { opacity:0; }
        .gd-mounted .gd-a1 { animation: gdFadeUp .5s ease .05s forwards; }
        .gd-mounted .gd-a2 { animation: gdFadeUp .5s ease .16s forwards; }
        .gd-mounted .gd-a3 { animation: gdFadeUp .5s ease .26s forwards; }
        .gd-mounted .gd-a4 { animation: gdFadeUp .5s ease .36s forwards; }
        .gd-mounted .gd-a5 { animation: gdFadeUp .5s ease .46s forwards; }
        .gd-mounted .gd-a6 { animation: gdFadeUp .5s ease .56s forwards; }

        .gd-form-card { opacity:0; animation: gdFadeUp .65s cubic-bezier(.22,1,.36,1) .1s forwards; }

        /* inputs */
        .gd-input:hover  { border-color: #a5b4fc !important; }
        .gd-input:focus  { border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
        .gd-select:hover { border-color: #a5b4fc !important; }
        .gd-select:focus { border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

        /* submit btn */
        .gd-submit { position:relative; overflow:hidden; transition:opacity .2s, transform .2s, box-shadow .2s; }
        .gd-submit::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .gd-submit:not(:disabled):hover::after { animation: gdShimmer .65s ease forwards; }
        .gd-submit:not(:disabled):hover { opacity:.9; transform:translateY(-1px); box-shadow:0 8px 24px rgba(71,71,135,0.32); }
        .gd-submit:active { transform:translateY(0); }
        .gd-submit:disabled { opacity:.6; cursor:not-allowed; }

        /* success */
        .gd-success { animation: gdSuccessIn .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* checkbox */
        .gd-checkbox { accent-color: #474787; width:16px; height:16px; flex-shrink:0; cursor:pointer; }

        @media (prefers-reduced-motion:reduce) {
          .gd-a1,.gd-a2,.gd-a3,.gd-a4,.gd-a5,.gd-a6,.gd-form-card { opacity:1!important; animation:none!important; }
          .gd-blob-1,.gd-blob-2,.gd-badge-dot { animation:none!important; }
          .gd-submit:hover { transform:none; }
        }
      `}</style>

      <div
        className={`relative flex items-start justify-center overflow-hidden min-h-screen py-20 ${mounted ? "gd-mounted" : ""}`}
        style={{ background: "#ECF3FF" }}
      >
        {/* blobs */}
        <div aria-hidden="true" className="gd-blob-1 pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full opacity-20 blur-[90px]" style={{ background:"#c7d2fe" }} />
        <div aria-hidden="true" className="gd-blob-2 pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full opacity-15 blur-[80px]" style={{ background:"#a5b4fc" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT ── */}
          <div className="lg:pt-10 flex flex-col gap-5">

            {/* Badge */}
            <span className="gd-a1 inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.14em] cursor-default"
              style={{ borderColor:"#c7d2fe", color:"#474787" }}>
              <span aria-hidden="true" className="gd-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:"#474787" }} />
              Get a Demo
            </span>

            {/* Headline */}
            <h1 className="gd-a2 font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontSize:"clamp(30px,4vw,46px)" }}>
              See Sema in action
            </h1>

            {/* Sub */}
            <p className="gd-a3 text-[15px] leading-[1.8] text-gray-500 max-w-[480px]">
              See how Sema brings messaging, audio calls, video meetings, AI-assisted summaries,
              and collaboration into one clearer communication platform — tailored to your team,
              your tools, and ZoikoTime if relevant.
            </p>

            {/* Checklist */}
            <div className="gd-a4 flex flex-col gap-3">
              {[
                "Tailored to your workflow",
                "Real questions answered, not a generic pitch",
                "ZoikoTime integration walkthrough if relevant",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle />
                  <span className="text-[14px] text-gray-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="gd-a5 text-[12.5px] leading-[1.7] text-gray-400 max-w-[360px] mt-2">
              Designed for businesses, teams, freelancers, and individuals who need communication
              to be clearer, more accountable, and easier to manage.
            </p>
          </div>

          {/* ── RIGHT — form card ── */}
          <div
            className="gd-form-card bg-white rounded-2xl p-8 md:p-9"
            style={{ boxShadow:"0 8px 40px rgba(71,71,135,0.12), 0 1px 6px rgba(0,0,0,0.06)", border:"1px solid #e5e7eb" }}
          >
            {submitted ? (
              /* ── Success state ── */
              <div className="gd-success flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2" style={{ background:"#EEF2FF" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 className="text-[22px] font-bold text-gray-900">Request received!</h2>
                <p className="text-[14.5px] text-gray-500 leading-relaxed max-w-[300px]">
                  We'll review your details and reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <h2 className="text-[20px] font-bold text-gray-900 mb-1">Request your demo.</h2>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    Tell us a little about your needs so we can route your request and tailor the conversation.
                  </p>
                </div>

                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First name" required error={errors.firstName}>
                    <Input value={form.firstName} onChange={v => set("firstName", v)} error={!!errors.firstName} />
                  </Field>
                  <Field label="Last name" required error={errors.lastName}>
                    <Input value={form.lastName} onChange={v => set("lastName", v)} error={!!errors.lastName} />
                  </Field>
                </div>

                {/* Work email */}
                <Field label="Work email" required hint="Use your work email if you have one." error={errors.email}>
                  <Input value={form.email} onChange={v => set("email", v)} type="email" error={!!errors.email} />
                </Field>

                {/* Company */}
                <Field label="Company / organization" required hint='Use your company, team, or organization name. Individuals may enter "Individual" or "Self-employed".' error={errors.company}>
                  <Input value={form.company} onChange={v => set("company", v)} error={!!errors.company} />
                </Field>

                {/* Team size */}
                <Field label="Team size" required error={errors.teamSize}>
                  <Select
                    value={form.teamSize}
                    onChange={v => set("teamSize", v)}
                    placeholder="Select team size"
                    options={["Just me", "2–10", "11–50", "51–200", "201–1,000", "1,000+"]}
                    error={!!errors.teamSize}
                  />
                </Field>

                {/* Role */}
                <Field label="Your role" required error={errors.role}>
                  <Select
                    value={form.role}
                    onChange={v => set("role", v)}
                    placeholder="Select your role"
                    options={["Founder / CEO", "Product / Engineering", "Operations", "Sales / Account", "HR / People", "IT / Security", "Consultant / Freelancer", "Other"]}
                    error={!!errors.role}
                  />
                </Field>

                {/* Reason */}
                <Field label="What brings you here?" required error={errors.reason}>
                  <Select
                    value={form.reason}
                    onChange={v => set("reason", v)}
                    placeholder="Select what brings you here"
                    options={["Evaluating for my team", "Interested in ZoikoTime integration", "Comparing with existing tools", "Looking for individual use", "Enterprise / compliance needs", "Just exploring"]}
                    error={!!errors.reason}
                  />
                </Field>

                {/* Message */}
                <Field label="Anything else we should know?" hint="Optional — share any context that would help us tailor the demo.">
                  <textarea
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    rows={3}
                    className="gd-input rounded-lg px-3 py-2.5 text-[13.5px] text-gray-800 outline-none resize-none"
                    style={{ border:"1px solid #d1d5db", background:"#fff" }}
                  />
                </Field>

                {/* Consent */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={e => set("consent", e.target.checked)}
                      className="gd-checkbox mt-0.5"
                    />
                    <span className="text-[12.5px] text-gray-600 leading-relaxed">
                      I agree to be contacted by Zoiko Sema about my demo request and understand that my
                      information will be handled in accordance with the{" "}
                      <a href="#privacy" className="underline" style={{ color:"#474787" }}>Privacy Notice</a>.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11.5px] text-red-500 ml-7">{errors.consent}</p>
                  )}
                  <p className="text-[11.5px] text-gray-400 leading-relaxed ml-7 mt-1">
                    <em>We will use your details only to respond to this request and related follow-up. We do not automatically enrol demo requesters into marketing emails.</em>
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="gd-submit w-full rounded-xl py-3.5 text-[15px] font-semibold text-white mt-1 flex items-center justify-center gap-2"
                  style={{ background:"#474787" }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity=".25"/>
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : "Request Demo"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}