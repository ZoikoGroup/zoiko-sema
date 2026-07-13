"use client";

import React, { useState } from "react";
import { useInView } from "./useInView";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  workEmail: string;
  companyName: string;
  role: string;
  teamSize: string;
  primaryInterest: string;
  collaborationTools: string;
  zoikotimeNeed: string;
  complianceNeed: string;
  timeline: string;
  comments: string;
  agree: boolean;
}

interface FormErrors {
  workEmail?: string;
  companyName?: string;
  agree?: string;
}

const initialForm: FormState = {
  workEmail: "",
  companyName: "",
  role: "",
  teamSize: "",
  primaryInterest: "",
  collaborationTools: "",
  zoikotimeNeed: "",
  complianceNeed: "",
  timeline: "",
  comments: "",
  agree: false,
};

const checklist = [
  "Enterprise-ready, source-linked, admin-governed",
  "Trust-led — not employee surveillance",
  "Role-filtered productivity intelligence",
];

export default function SemaZoikoTimeDemoFormSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.workEmail.trim()) {
      next.workEmail = "Please enter your work email.";
    } else if (!EMAIL_RE.test(state.workEmail.trim())) {
      next.workEmail = "Please enter a valid email address.";
    }
    if (!state.companyName.trim()) next.companyName = "Please enter your company name.";
    if (!state.agree) next.agree = "Please confirm consent to be contacted.";
    return next;
  };

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched[key]) setErrors(validate(next));
  };

  const handleBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({ workEmail: true, companyName: true, agree: true });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[13.5px] text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#4F63F0]";

  return (
    <>
      <style>{`
        @keyframes sztDemoUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-demo-hidden { opacity: 0; transform: translateY(24px); }
        .szt-demo-visible { animation: sztDemoUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .szt-demo-check-item { opacity: 0; transform: translateX(-14px); }
        .szt-demo-check-item.active { animation: sztDemoCheckIn .45s cubic-bezier(.22,1,.36,1) forwards; }
        @keyframes sztDemoCheckIn {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .szt-demo-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease, background .2s ease;
        }
        .szt-demo-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(79,99,240,0.4);
          background: #3E51DE;
        }
        .szt-demo-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .szt-demo-check { accent-color: #4F63F0; }

        @media (prefers-reduced-motion: reduce) {
          .szt-demo-hidden, .szt-demo-check-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .szt-demo-visible { animation: none !important; }
          .szt-demo-btn:hover { transform: none !important; }
        }
      `}</style>

      <section id="request-demo" className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div ref={leftRef} className={`szt-demo-hidden ${leftIn ? "szt-demo-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Enterprise demo
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[34px]">
              Turn meetings into verified work signals.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              See how Zoiko Sema and ZoikoTime connect communication,
              summaries, decisions, action items, workforce truth, compliance,
              and productivity intelligence.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              {checklist.map((item, i) => (
                <div
                  key={item}
                  className={`szt-demo-check-item ${leftIn ? "active" : ""} flex items-start gap-2.5`}
                  style={{ animationDelay: `${300 + i * 90}ms` }}
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#22C55E" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <polyline
                        points="2,5 4,7 8,3"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-[13.5px] leading-snug text-[#C7CCE8]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right form card */}
          <div
            ref={formRef}
            className={`szt-demo-hidden ${formIn ? "szt-demo-visible" : ""} rounded-2xl bg-white p-6 sm:p-7`}
            style={{ animationDelay: "0.1s" }}
          >
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
                  Our enterprise team will reach out at {form.workEmail}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900">Request a demo</h3>
                  <span className="rounded-full bg-[#EDEBFB] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4F63F0]">
                    Enterprise
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="szt-work-email" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Work email
                    </label>
                    <input
                      id="szt-work-email"
                      type="email"
                      value={form.workEmail}
                      onChange={(e) => handleChange("workEmail", e.target.value)}
                      onBlur={() => handleBlur("workEmail")}
                      placeholder="you@company.com"
                      className={`${inputBase} ${errors.workEmail && touched.workEmail ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.workEmail && touched.workEmail && (
                      <p className="mt-1 text-[11.5px] text-red-500">{errors.workEmail}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="szt-company" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Company name
                    </label>
                    <input
                      id="szt-company"
                      type="text"
                      value={form.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      onBlur={() => handleBlur("companyName")}
                      placeholder="Company"
                      className={`${inputBase} ${errors.companyName && touched.companyName ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className="mt-1 text-[11.5px] text-red-500">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="szt-role" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Role
                    </label>
                    <input
                      id="szt-role"
                      type="text"
                      value={form.role}
                      onChange={(e) => handleChange("role", e.target.value)}
                      placeholder="e.g. Ops Director"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>
                  <div>
                    <label htmlFor="szt-team-size" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Team size
                    </label>
                    <input
                      id="szt-team-size"
                      type="text"
                      value={form.teamSize}
                      onChange={(e) => handleChange("teamSize", e.target.value)}
                      placeholder="1-50"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>

                  <div>
                    <label htmlFor="szt-primary-interest" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Primary interest
                    </label>
                    <input
                      id="szt-primary-interest"
                      type="text"
                      value={form.primaryInterest}
                      onChange={(e) => handleChange("primaryInterest", e.target.value)}
                      placeholder="Meeting-to-work"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>
                  <div>
                    <label htmlFor="szt-tools" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Current collaboration tools
                    </label>
                    <input
                      id="szt-tools"
                      type="text"
                      value={form.collaborationTools}
                      onChange={(e) => handleChange("collaborationTools", e.target.value)}
                      placeholder="e.g. chat, meetings, tasks"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>

                  <div>
                    <label htmlFor="szt-need" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      ZoikoTime need
                    </label>
                    <input
                      id="szt-need"
                      type="text"
                      value={form.zoikotimeNeed}
                      onChange={(e) => handleChange("zoikotimeNeed", e.target.value)}
                      placeholder="Exploring"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>
                  <div>
                    <label htmlFor="szt-compliance-need" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Compliance / audit need
                    </label>
                    <input
                      id="szt-compliance-need"
                      type="text"
                      value={form.complianceNeed}
                      onChange={(e) => handleChange("complianceNeed", e.target.value)}
                      placeholder="Nice to have"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="szt-timeline" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Timeline
                    </label>
                    <input
                      id="szt-timeline"
                      type="text"
                      value={form.timeline}
                      onChange={(e) => handleChange("timeline", e.target.value)}
                      placeholder="Exploring"
                      className={`${inputBase} border-gray-200`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="szt-comments" className="mb-1.5 block text-[12.5px] font-semibold text-gray-900">
                      Comments
                    </label>
                    <textarea
                      id="szt-comments"
                      value={form.comments}
                      onChange={(e) => handleChange("comments", e.target.value)}
                      placeholder="What would you like to see in the demo?"
                      rows={3}
                      className={`${inputBase} resize-none border-gray-200`}
                    />
                  </div>
                </div>

                <label className="mt-5 flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => handleChange("agree", e.target.checked)}
                    onBlur={() => handleBlur("agree")}
                    className="szt-demo-check mt-0.5 h-4 w-4 rounded border-gray-300"
                  />
                  <span className="text-[12px] leading-snug text-gray-600">
                    I agree to be contacted about this request and consent to
                    processing per the Privacy Notice.
                  </span>
                </label>
                {errors.agree && touched.agree && (
                  <p className="mt-1 text-[11.5px] text-red-500">{errors.agree}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="szt-demo-btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-semibold text-white"
                >
                  {status === "submitting" ? "Submitting..." : "Request Demo"}
                  {status !== "submitting" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>

                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11.5px] text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4F63F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Routed to the enterprise team. Or{" "}
                  <a href="/contact" className="font-semibold text-[#4F63F0] hover:underline">
                    talk to Sales
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
