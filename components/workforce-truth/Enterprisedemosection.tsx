"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheck, FiArrowRight, FiShield } from "react-icons/fi";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

const CHECKLIST = [
  "Source-linked work records from real collaboration.",
  "Responsible leadership visibility — no surveillance framing.",
  "Admin governance, retention, and audit-ready evidence.",
];

const COMPANY_SIZES = ["1-50", "51-200", "201-1000", "1001-5000", "5000+"];
const PRIMARY_INTERESTS = [
  "Meeting-to-work accountability",
  "Verified collaboration",
  "Compliance & audit",
  "Productivity intelligence",
  "Other",
];
const ROLLOUT_TIMELINES = [
  "Exploring",
  "This quarter",
  "Next quarter",
  "Within 6 months",
  "No set timeline",
];

type FormState = {
  workEmail: string;
  company: string;
  role: string;
  companySize: string;
  region: string;
  commStack: string;
  primaryInterest: string;
  rolloutTimeline: string;
  notes: string;
  consent: boolean;
};

const INITIAL_FORM: FormState = {
  workEmail: "",
  company: "",
  role: "",
  companySize: "1-50",
  region: "",
  commStack: "",
  primaryInterest: "",
  rolloutTimeline: "Exploring",
  notes: "",
  consent: false,
};

const inputBase =
  "w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#4F5BD5] focus:ring-2 focus:ring-[#4F5BD5]/20 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white dark:placeholder-gray-500";
const labelBase =
  "mb-1.5 block text-[12px] font-semibold text-gray-700 dark:text-gray-300";

export function EnterpriseDemoSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail);
    if (!emailOk) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!form.consent) {
      setError("Please accept the Privacy Notice to continue.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: wire to your DRF endpoint, e.g.
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demo-requests/`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 700)); // placeholder
      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes edFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes edFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .ed-hidden   { opacity: 0; transform: translateY(28px); }
        .ed-visible  { animation: edFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .ed-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .ed-visible-x { animation: edFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }
        .ed-submit { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .ed-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(79,91,213,0.45); }
        .ed-submit:active:not(:disabled) { transform: translateY(0); }
        .ed-arrow { transition: transform .25s ease; }
        .ed-submit:hover:not(:disabled) .ed-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .ed-hidden, .ed-visible, .ed-hidden-x, .ed-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .ed-submit:hover .ed-arrow { transform: none !important; }
          .ed-submit:hover:not(:disabled) { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Request an enterprise demo"
        className="w-full bg-[#F5F5FB] py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy + checklist */}
          <div ref={leftRef} className="max-w-xl lg:pt-6">
            <p
              className={`ed-hidden ${leftIn ? "ed-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Enterprise demo
            </p>
            <h2
              className={`ed-hidden ${leftIn ? "ed-visible" : ""} mb-5 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              See Workforce Truth on your workflows
            </h2>
            <p
              className={`ed-hidden ${leftIn ? "ed-visible" : ""} mb-8 max-w-[440px] text-[15px] leading-[1.75] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Walk through meeting-to-work accountability, verified collaboration,
              compliance and audit, and productivity intelligence with our team.
            </p>

            <ul className="flex flex-col gap-4">
              {CHECKLIST.map((item, i) => (
                <li
                  key={item}
                  className={`ed-hidden ${leftIn ? "ed-visible" : ""} flex items-start gap-3`}
                  style={{ animationDelay: `${0.24 + i * 0.08}s` }}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#4F5BD5]/15 text-[#4F5BD5] dark:bg-[#4F5BD5]/25 dark:text-[#8C95F2]">
                    <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-[14px] leading-[1.5] text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — request-a-demo form card */}
          <div
            ref={formRef}
            className={`ed-hidden-x ${formIn ? "ed-visible-x" : ""} w-full overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(16,24,40,0.14)] dark:bg-[#151233] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]`}
          >
            {/* Card header */}
            <div className="flex items-center justify-between bg-[#171436] px-6 py-4">
              <span className="text-[15px] font-semibold text-white">
                Request a demo
              </span>
              <span className="inline-flex items-center rounded-full bg-[#4F5BD5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                Enterprise
              </span>
            </div>

            {/* Card body */}
            <div className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4F5BD5]/15 text-[#4F5BD5] dark:text-[#8C95F2]">
                    <FiCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">
                    Thanks — request received.
                  </h3>
                  <p className="max-w-xs text-[13px] text-gray-500 dark:text-gray-400">
                    Our team will reach out shortly to schedule your walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="workEmail" className={labelBase}>
                        Work email
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        value={form.workEmail}
                        onChange={update("workEmail")}
                        placeholder="you@company.com"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelBase}>
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Company"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className={labelBase}>
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        value={form.role}
                        onChange={update("role")}
                        placeholder="Title"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="companySize" className={labelBase}>
                        Company size
                      </label>
                      <select
                        id="companySize"
                        value={form.companySize}
                        onChange={update("companySize")}
                        className={inputBase}
                      >
                        {COMPANY_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="region" className={labelBase}>
                        Region
                      </label>
                      <input
                        id="region"
                        type="text"
                        value={form.region}
                        onChange={update("region")}
                        placeholder="Region"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="commStack" className={labelBase}>
                        Current communication stack
                      </label>
                      <input
                        id="commStack"
                        type="text"
                        value={form.commStack}
                        onChange={update("commStack")}
                        placeholder="Tools you use"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="primaryInterest" className={labelBase}>
                      Primary interest
                    </label>
                    <select
                      id="primaryInterest"
                      value={form.primaryInterest}
                      onChange={update("primaryInterest")}
                      className={`${inputBase} ${form.primaryInterest === "" ? "text-gray-400 dark:text-gray-500" : ""}`}
                    >
                      <option value="">Select an area...</option>
                      {PRIMARY_INTERESTS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rolloutTimeline" className={labelBase}>
                      Expected rollout timeline
                    </label>
                    <select
                      id="rolloutTimeline"
                      value={form.rolloutTimeline}
                      onChange={update("rolloutTimeline")}
                      className={inputBase}
                    >
                      {ROLLOUT_TIMELINES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className={labelBase}>
                      Anything else? <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={form.notes}
                      onChange={update("notes")}
                      placeholder="Tell us about your teams and goals..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-gray-600 dark:text-gray-400">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={update("consent")}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-[#4F5BD5] accent-[#4F5BD5]"
                    />
                    <span>
                      I consent to my details being processed per the Privacy
                      Notice to handle this demo request.
                    </span>
                  </label>

                  {error && (
                    <p className="text-[12px] font-medium text-red-500" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="ed-submit mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F5BD5] px-6 py-3 text-[14px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Request Demo"}
                    {!submitting && (
                      <FiArrowRight className="ed-arrow h-4 w-4" aria-hidden="true" />
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-[12px] text-gray-400 dark:text-gray-500">
                    <FiShield className="h-3.5 w-3.5" aria-hidden="true" />
                    Verified collaboration, not employee surveillance.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnterpriseDemoSection;