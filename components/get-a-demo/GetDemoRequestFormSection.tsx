"use client";

import React, { useState } from "react";

// TODO: replace with the final banner photo URL.
const FORM_BANNER_IMAGE_URL = "/Images/Decorative Image for Form Context.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  teamSize: string;
  role: string;
  message: string;
}
interface Errors { [k: string]: string }

const teamSizeOptions = ["Just me", "2–10", "11–50", "50–250", "251–1,000", "1,000+"];

function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-700">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-[11.5px] text-red-500 leading-snug">{error}</p>}
    </div>
  );
}

function Input({ value, onChange, type = "text", placeholder = "", error = false }: {
  value: string; onChange: (v: string) => void; type?: string; placeholder?: string; error?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="gdf-input rounded-lg px-3.5 py-2.5 text-[13.5px] text-gray-800 placeholder:text-gray-400 outline-none w-full"
      style={{ border: `1px solid ${error ? "#ef4444" : "#e5e7eb"}`, background: "#fff" }}
    />
  );
}

function Select({ value, onChange, options, placeholder, error = false }: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder: string; error?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="gdf-input w-full rounded-lg px-3.5 py-2.5 text-[13.5px] outline-none appearance-none pr-9"
        style={{
          border: `1px solid ${error ? "#ef4444" : "#e5e7eb"}`,
          background: "#fff",
          color: value ? "#1f2937" : "#9ca3af",
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
}

export default function GetDemoRequestFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", company: "", teamSize: "", role: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function set(key: keyof FormData, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.teamSize) e.teamSize = "Please select a team size.";
    if (!form.role.trim()) e.role = "Role is required.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        .gdf-input { transition: border-color .18s, box-shadow .18s; }
        .gdf-input:hover  { border-color: #c7cbe8 !important; }
        .gdf-input:focus  { border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

        .gdf-submit { position:relative; overflow:hidden; transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease; }
        .gdf-submit:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(99,102,241,0.35); }
        .gdf-submit:active { transform: translateY(0); }
        .gdf-submit:disabled { opacity:.65; cursor:not-allowed; }
      `}</style>

      <section aria-label="Request your demo" className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-3xl px-6">

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#6366f1" }}>
              Request Your Demo
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontSize: "clamp(24px,3vw,32px)" }}>
              Tell us a little about your team.
            </h2>
          </div>

          {/* Banner image */}
          <div
            className="rounded-2xl overflow-hidden mb-8"
            style={{ border: "1px solid #e5e7eb" }}
          >
            {FORM_BANNER_IMAGE_URL ? (
              <img src={FORM_BANNER_IMAGE_URL} alt="" className="w-full h-auto block" style={{ maxHeight: 200, objectFit: "cover" }} />
            ) : (
              <div className="w-full flex items-center justify-center text-[13px] text-gray-400" style={{ height: 160, background: "#0f1235" }}>
                Add FORM_BANNER_IMAGE_URL to display the banner image
              </div>
            )}
          </div>

          {/* Form card */}
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{ boxShadow: "0 8px 40px rgba(15,15,40,0.08), 0 1px 6px rgba(0,0,0,0.05)", border: "1px solid #e5e7eb" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-bold text-gray-900">Request received!</h3>
                <p className="text-[13.5px] text-gray-500 max-w-[320px] leading-relaxed">
                  We&apos;ll review your details and reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="First name" required error={errors.firstName}>
                    <Input value={form.firstName} onChange={(v) => set("firstName", v)} placeholder="Jordan" error={!!errors.firstName} />
                  </Field>
                  <Field label="Last name" required error={errors.lastName}>
                    <Input value={form.lastName} onChange={(v) => set("lastName", v)} placeholder="Lee" error={!!errors.lastName} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Work email" required error={errors.email}>
                    <Input value={form.email} onChange={(v) => set("email", v)} type="email" placeholder="name@company.com" error={!!errors.email} />
                  </Field>
                  <Field label="Company" required error={errors.company}>
                    <Input value={form.company} onChange={(v) => set("company", v)} placeholder="Acme Corp" error={!!errors.company} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Team size" required error={errors.teamSize}>
                    <Select
                      value={form.teamSize}
                      onChange={(v) => set("teamSize", v)}
                      placeholder="Select team size"
                      options={teamSizeOptions}
                      error={!!errors.teamSize}
                    />
                  </Field>
                  <Field label="Role" required error={errors.role}>
                    <Input value={form.role} onChange={(v) => set("role", v)} placeholder="Operations Lead" error={!!errors.role} />
                  </Field>
                </div>

                <Field label="What brings you here?">
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={3}
                    placeholder="Evaluating for enterprise rollout with ZoikoTime"
                    className="gdf-input rounded-lg px-3.5 py-2.5 text-[13.5px] text-gray-800 placeholder:text-gray-400 outline-none resize-none"
                    style={{ border: "1px solid #e5e7eb", background: "#fff" }}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="gdf-submit w-full rounded-xl py-3.5 text-[14.5px] font-semibold text-white mt-1 flex items-center justify-center gap-2"
                  style={{ background: "#6366f1" }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : "Request demo"}
                </button>

                <p className="text-[12px] text-center text-gray-400">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="underline" style={{ color: "#6366f1" }}>Privacy Notice</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
