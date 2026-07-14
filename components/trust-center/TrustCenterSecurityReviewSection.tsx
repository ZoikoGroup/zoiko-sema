"use client";

import React, { useState } from "react";
import { Globe, FileText, Clock, CheckCircle2, RefreshCw, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-security-review.webp"
const REVIEW_IMAGE_SRC = "/Images/Security-Review-Request.webp";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: Globe, title: "Discover", description: "Browse public trust resources and security overview." },
  { icon: FileText, title: "Request", description: "Submit work email, company, role, and documents needed." },
  { icon: Clock, title: "Verify", description: "Zoiko reviews your commercial context and access need." },
  { icon: CheckCircle2, title: "Approve", description: "Approved reviewers receive access to selected materials." },
  { icon: RefreshCw, title: "Audit", description: "Access, downloads, expiry, and reviewer details are recorded." },
];

const DOCUMENT_OPTIONS = [
  "Security overview",
  "Privacy overview",
  "AI governance brief",
  "Vendor security packet",
  "Data processing summary",
  "Compliance support notes",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  reviewPurpose: string;
  documents: string[];
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  company?: string;
  reviewPurpose?: string;
  documents?: string;
}

const initialForm: FormState = {
  fullName: "",
  workEmail: "",
  company: "",
  role: "",
  reviewPurpose: "",
  documents: [],
};

export default function TrustCenterSecurityReviewSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: stepsRef, inView: stepsIn } = useInView(0.1);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!state.workEmail.trim()) {
      next.workEmail = "Please enter your work email.";
    } else if (!EMAIL_RE.test(state.workEmail.trim())) {
      next.workEmail = "Please enter a valid email address.";
    }
    if (!state.company.trim()) next.company = "Please enter your company name.";
    if (!state.reviewPurpose.trim()) next.reviewPurpose = "Please describe your review purpose.";
    if (state.documents.length === 0) next.documents = "Please select at least one document.";
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

  const toggleDocument = (doc: string) => {
    const next = form.documents.includes(doc)
      ? form.documents.filter((d) => d !== doc)
      : [...form.documents, doc];
    handleChange("documents", next);
    setTouched((prev) => ({ ...prev, documents: true }));
    setErrors(validate({ ...form, documents: next }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({ fullName: true, workEmail: true, company: true, reviewPurpose: true, documents: true });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  const inputBase =
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6B7196] outline-none transition-colors focus:border-white";

  return (
    <>
      <style>{`
        @keyframes tcReviewUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-review-hidden { opacity: 0; transform: translateY(20px); }
        .tc-review-visible { animation: tcReviewUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes tcStepStagger {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-review-step {
          opacity: 0;
          animation: tcStepStagger .45s ease forwards;
        }
        .tc-review-step-icon { transition: transform .22s ease; }
        .tc-review-step:hover .tc-review-step-icon { transform: translateY(-3px) scale(1.08); }

        .tc-review-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .tc-review-img-wrap:hover { transform: translateY(-6px); }

        .tc-review-chip {
          transition: transform .18s ease, background-color .18s ease, border-color .18s ease;
        }
        .tc-review-chip:hover { transform: translateY(-2px); }
        .tc-review-chip.selected {
          background-color: #4F63F0;
          border-color: #4F63F0;
        }

        .tc-review-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;
        }
        .tc-review-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(79,99,240,0.4);
          background: #3E51DE;
        }
        .tc-review-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (prefers-reduced-motion: reduce) {
          .tc-review-hidden, .tc-review-step { opacity: 1 !important; transform: none !important; animation: none !important; }
          .tc-review-visible { animation: none !important; }
        }
      `}</style>

      <section id="security-review" className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`tc-review-hidden ${headIn ? "tc-review-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#8FA3FF]">
              Security review request
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Need security review materials for your organization?
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Qualified buyers can request controlled trust materials through
              a verified access process.
            </p>
          </div>

          <div
            ref={stepsRef}
            className={`tc-review-hidden ${stepsIn ? "tc-review-visible" : ""} mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5`}
          >
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] border-t border-dashed border-white/20 lg:block" />
                )}
                <div
                  className="tc-review-step flex flex-col items-center text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="tc-review-step-icon relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F63F0] text-white">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#9CA0C4]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <div
              ref={formRef}
              className={`tc-review-hidden ${formIn ? "tc-review-visible" : ""} rounded-2xl bg-white/3 p-6 sm:p-7`}
            >
              {status === "success" ? (
                <div className="py-8 text-center">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="mb-2 text-base font-bold text-white">
                    Request received.
                  </h3>
                  <p className="mx-auto max-w-[360px] text-[13px] text-[#AEB7CC]">
                    Our security team will follow up at {form.workEmail}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="tc-full-name" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                        Full name
                      </label>
                      <input
                        id="tc-full-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Jane Smith"
                        className={`${inputBase} ${errors.fullName && touched.fullName ? "border-red-400" : "border-white/15"}`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="mt-1 text-[11.5px] text-red-400">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="tc-work-email" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                        Work email
                      </label>
                      <input
                        id="tc-work-email"
                        type="email"
                        value={form.workEmail}
                        onChange={(e) => handleChange("workEmail", e.target.value)}
                        onBlur={() => handleBlur("workEmail")}
                        placeholder="jane@company.com"
                        className={`${inputBase} ${errors.workEmail && touched.workEmail ? "border-red-400" : "border-white/15"}`}
                      />
                      {errors.workEmail && touched.workEmail && (
                        <p className="mt-1 text-[11.5px] text-red-400">{errors.workEmail}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="tc-company" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                        Company
                      </label>
                      <input
                        id="tc-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        placeholder="Acme Corp"
                        className={`${inputBase} ${errors.company && touched.company ? "border-red-400" : "border-white/15"}`}
                      />
                      {errors.company && touched.company && (
                        <p className="mt-1 text-[11.5px] text-red-400">{errors.company}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="tc-role" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                        Role
                      </label>
                      <input
                        id="tc-role"
                        type="text"
                        value={form.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        placeholder="Security Engineer"
                        className={`${inputBase} border-white/15`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="tc-purpose" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                        Review purpose
                      </label>
                      <textarea
                        id="tc-purpose"
                        value={form.reviewPurpose}
                        onChange={(e) => handleChange("reviewPurpose", e.target.value)}
                        onBlur={() => handleBlur("reviewPurpose")}
                        placeholder="Vendor risk assessment for enterprise procurement..."
                        rows={3}
                        className={`${inputBase} resize-none ${errors.reviewPurpose && touched.reviewPurpose ? "border-red-400" : "border-white/15"}`}
                      />
                      {errors.reviewPurpose && touched.reviewPurpose && (
                        <p className="mt-1 text-[11.5px] text-red-400">{errors.reviewPurpose}</p>
                      )}
                    </div>
                  </div>

                  <p className="mb-2 mt-5 text-[12.5px] font-semibold text-white">
                    Documents requested (select at least one)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DOCUMENT_OPTIONS.map((doc) => (
                      <button
                        key={doc}
                        type="button"
                        onClick={() => toggleDocument(doc)}
                        className={`tc-review-chip rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-medium text-white ${
                          form.documents.includes(doc) ? "selected" : ""
                        }`}
                      >
                        {doc}
                      </button>
                    ))}
                  </div>
                  {errors.documents && touched.documents && (
                    <p className="mt-1.5 text-[11.5px] text-red-400">{errors.documents}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="tc-review-btn mt-6 w-full rounded-xl py-3.5 text-[14px] font-semibold text-white"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit request"}
                  </button>
                </form>
              )}
            </div>

            <div
              className={`tc-review-hidden ${formIn ? "tc-review-visible" : ""} tc-review-img-wrap overflow-hidden rounded-2xl`}
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src={REVIEW_IMAGE_SRC}
                alt="Security engineer reviewing trust dashboard"
                className="h-[608px] w-full object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
