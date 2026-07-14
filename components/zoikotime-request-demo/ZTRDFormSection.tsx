"use client";

import React, { useState } from "react";
import { useInView } from "./useInView";
import { useZTRD } from "./ZTRDContext";
import { useCaseOptions } from "./ztrdUseCases";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ROLE_OPTIONS = [
  "Operations",
  "Compliance / Legal",
  "IT & Admin",
  "Executive / Leadership",
  "Workforce / People",
  "Other",
];

const COMPANY_SIZE_OPTIONS = ["1-50", "51-200", "201-1,000", "1,000+"];

const REGION_OPTIONS = ["North America", "Europe", "APAC", "Other"];

const TOOL_OPTIONS = ["Calendar", "CRM", "Project / PM", "HRIS", "Identity / SSO", "BI"];

interface FormState {
  workEmail: string;
  fullName: string;
  companyName: string;
  roleDept: string;
  companySize: string;
  primaryGoal: string;
  tools: string[];
  needsComplianceReview: boolean;
  preferredTime: string;
  region: string;
  message: string;
  agree: boolean;
}

interface FormErrors {
  workEmail?: string;
  fullName?: string;
  companyName?: string;
  roleDept?: string;
  companySize?: string;
  primaryGoal?: string;
  agree?: string;
}

const initialForm: FormState = {
  workEmail: "",
  fullName: "",
  companyName: "",
  roleDept: "",
  companySize: "",
  primaryGoal: "",
  tools: [],
  needsComplianceReview: false,
  preferredTime: "",
  region: "",
  message: "",
  agree: false,
};

export default function ZTRDFormSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: formRef, inView: formIn } = useInView(0.05);
  const { selectedGoal, setSelectedGoal } = useZTRD();

  const [form, setForm] = useState<FormState>({ ...initialForm, primaryGoal: selectedGoal });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Keep the form's goal field in sync if the use-case cards above are changed.
  if (selectedGoal !== form.primaryGoal && !touched.primaryGoal) {
    setForm((prev) => ({ ...prev, primaryGoal: selectedGoal }));
  }

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.workEmail.trim()) {
      next.workEmail = "Please enter your work email.";
    } else if (!EMAIL_RE.test(state.workEmail.trim())) {
      next.workEmail = "Please enter a valid email address.";
    }
    if (!state.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!state.companyName.trim()) next.companyName = "Please enter your company name.";
    if (!state.roleDept) next.roleDept = "Please select your role / department.";
    if (!state.companySize) next.companySize = "Please select your company size.";
    if (!state.primaryGoal) next.primaryGoal = "Please select your primary ZoikoTime goal.";
    if (!state.agree) next.agree = "Please confirm consent to be contacted.";
    return next;
  };

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (key === "primaryGoal") setSelectedGoal(value as string);
    if (touched[key]) setErrors(validate(next));
  };

  const handleBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(form));
  };

  const toggleTool = (tool: string) => {
    const next = form.tools.includes(tool)
      ? form.tools.filter((t) => t !== tool)
      : [...form.tools, tool];
    handleChange("tools", next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({
      workEmail: true,
      fullName: true,
      companyName: true,
      roleDept: true,
      companySize: true,
      primaryGoal: true,
      agree: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[13.5px] text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#4F63F0]";
  const errClass = (key: keyof FormErrors) =>
    errors[key] && touched[key] ? "border-red-400" : "border-gray-200";

  return (
    <>
      <style>{`
        @keyframes ztrdFormFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-form-hidden { opacity: 0; transform: translateY(24px); }
        .ztrd-form-visible { animation: ztrdFormFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-form-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease, background .2s ease;
        }
        .ztrd-form-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(79,99,240,0.4);
          background: #3E51DE;
        }
        .ztrd-form-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .ztrd-form-check { accent-color: #4F63F0; }

        .ztrd-chip {
          transition: transform .15s ease, background-color .15s ease, border-color .15s ease, color .15s ease;
        }
        .ztrd-chip:hover { transform: translateY(-1px); }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-form-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-form-visible { animation: none !important; }
          .ztrd-form-btn:hover, .ztrd-chip:hover { transform: none !important; }
        }
      `}</style>

      <section id="request-demo" className="bg-[#fff] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <div ref={headRef} className={`ztrd-form-hidden ${headIn ? "ztrd-form-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Request your demo
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Tell us enough to tailor the walkthrough
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              A short, adaptive form — we only ask for what helps us prepare
              a relevant session.
            </p>
          </div>

          <div
            ref={formRef}
            className={`ztrd-form-hidden ${formIn ? "ztrd-form-visible" : ""} mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(15,15,42,0.08)]`}
            style={{ animationDelay: "0.08s" }}
          >
            <div className="bg-[#0B1330] px-6 py-5 sm:px-8">
              <h3 className="text-[14.5px] font-bold text-white">ZoikoTime demo request</h3>
            </div>

            <div className="px-6 py-7 sm:px-8">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    Thanks — your request is on its way.
                  </h3>
                  <p className="mx-auto max-w-[360px] text-[13px] text-gray-500">
                    Our team will reach out at {form.workEmail} to schedule your tailored walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ztrd-work-email" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Work email *
                      </label>
                      <input
                        id="ztrd-work-email"
                        type="email"
                        value={form.workEmail}
                        onChange={(e) => handleChange("workEmail", e.target.value)}
                        onBlur={() => handleBlur("workEmail")}
                        placeholder="you@company.com"
                        className={`${inputBase} ${errClass("workEmail")}`}
                      />
                      <p className="mt-1 text-[11px] text-gray-400">
                        Use a business email so we can route your request correctly.
                      </p>
                      {errors.workEmail && touched.workEmail && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.workEmail}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="ztrd-full-name" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Full name *
                      </label>
                      <input
                        id="ztrd-full-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Jordan Rivera"
                        className={`${inputBase} ${errClass("fullName")}`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ztrd-company" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Company name *
                      </label>
                      <input
                        id="ztrd-company"
                        type="text"
                        value={form.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        onBlur={() => handleBlur("companyName")}
                        placeholder="Acme Corp"
                        className={`${inputBase} ${errClass("companyName")}`}
                      />
                      {errors.companyName && touched.companyName && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.companyName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="ztrd-role" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Role / department *
                      </label>
                      <select
                        id="ztrd-role"
                        value={form.roleDept}
                        onChange={(e) => handleChange("roleDept", e.target.value)}
                        onBlur={() => handleBlur("roleDept")}
                        className={`${inputBase} ${errClass("roleDept")}`}
                      >
                        <option value="">Select...</option>
                        {ROLE_OPTIONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      {errors.roleDept && touched.roleDept && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.roleDept}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ztrd-company-size" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Company size *
                      </label>
                      <select
                        id="ztrd-company-size"
                        value={form.companySize}
                        onChange={(e) => handleChange("companySize", e.target.value)}
                        onBlur={() => handleBlur("companySize")}
                        className={`${inputBase} ${errClass("companySize")}`}
                      >
                        <option value="">Select range...</option>
                        {COMPANY_SIZE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.companySize && touched.companySize && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.companySize}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="ztrd-goal" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Primary ZoikoTime goal *
                      </label>
                      <select
                        id="ztrd-goal"
                        value={form.primaryGoal}
                        onChange={(e) => handleChange("primaryGoal", e.target.value)}
                        onBlur={() => handleBlur("primaryGoal")}
                        className={`${inputBase} ${errClass("primaryGoal")}`}
                      >
                        <option value="">Select a use case...</option>
                        {useCaseOptions.map((o) => (
                          <option key={o.id} value={o.id}>{o.title}</option>
                        ))}
                        <option value="not-sure">Not sure yet</option>
                      </select>
                      {errors.primaryGoal && touched.primaryGoal && (
                        <p className="mt-1 text-[11.5px] text-red-500">{errors.primaryGoal}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="mb-2 text-[12.5px] font-semibold text-gray-900">
                      Current tools <span className="font-normal text-gray-400">(optional — helps us prepare integrations)</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TOOL_OPTIONS.map((tool) => {
                        const active = form.tools.includes(tool);
                        return (
                          <button
                            key={tool}
                            type="button"
                            onClick={() => toggleTool(tool)}
                            aria-pressed={active}
                            className={`ztrd-chip rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium ${
                              active
                                ? "border-[#4F63F0] bg-[#EDEBFB] text-[#4F63F0]"
                                : "border-gray-200 bg-white text-gray-600"
                            }`}
                          >
                            {tool}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-2">
                    <input
                      type="checkbox"
                      checked={form.needsComplianceReview}
                      onChange={(e) => handleChange("needsComplianceReview", e.target.checked)}
                      className="ztrd-form-check mt-0.5 h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-[12.5px] leading-snug text-gray-600">
                      We have security, DPA, or compliance review needs before purchase.
                    </span>
                  </label>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ztrd-time" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Preferred demo time <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <input
                        id="ztrd-time"
                        type="text"
                        value={form.preferredTime}
                        onChange={(e) => handleChange("preferredTime", e.target.value)}
                        placeholder="Flexible"
                        className={`${inputBase} border-gray-200`}
                      />
                    </div>
                    <div>
                      <label htmlFor="ztrd-region" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                        Region <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <select
                        id="ztrd-region"
                        value={form.region}
                        onChange={(e) => handleChange("region", e.target.value)}
                        className={`${inputBase} border-gray-200`}
                      >
                        <option value="">Select...</option>
                        {REGION_OPTIONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="ztrd-message" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Message <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="ztrd-message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Anything specific you'd like the demo to cover?"
                      rows={3}
                      className={`${inputBase} resize-none border-gray-200`}
                    />
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-2">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => handleChange("agree", e.target.checked)}
                      onBlur={() => handleBlur("agree")}
                      className="ztrd-form-check mt-0.5 h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-[12px] leading-snug text-gray-600">
                      I agree that Zoiko Sema may contact me about this request and
                      process my details per the{" "}
                      <a href="/privacy-notice" className="font-semibold text-[#4F63F0] hover:underline">
                        Privacy Notice
                      </a>
                      . Fields are used to route and prepare the demo — not for employee monitoring.
                    </span>
                  </label>
                  {errors.agree && touched.agree && (
                    <p className="mt-1 text-[11.5px] text-red-500">{errors.agree}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="ztrd-form-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-semibold text-white"
                  >
                    {status === "submitting" && (
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
                        <path d="M22 12a10 10 0 0 0-10-10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    )}
                    {status === "submitting" ? "Submitting..." : "Request Demo"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}