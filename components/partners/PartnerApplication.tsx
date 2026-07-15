"use client";

import { useState } from "react";
import { usePartners, PARTNER_ROUTES } from "./PartnersContext";

interface FormData {
  companyName: string;
  companyWebsite: string;
  country: string;
  companySize: string;
  industry: string;
  fullName: string;
  role: string;
  email: string;
  linkedin: string;
  fit: string;
}

const emptyForm: FormData = {
  companyName: "",
  companyWebsite: "",
  country: "",
  companySize: "",
  industry: "",
  fullName: "",
  role: "",
  email: "",
  linkedin: "",
  fit: "",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}

export default function PartnerApplication() {
  const { selectedRoute, selectRoute } = usePartners();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedRoute || !consent) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  const inputClass =
    "pa-input w-full rounded-lg px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none";

  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }

        .pa-input{ border: 1px solid #e5e7eb; background: #fff; transition: border-color .18s, box-shadow .18s; }
        .pa-input:hover{ border-color: #c7cbe8; }
        .pa-input:focus{ border-color: #4F63F0; box-shadow: 0 0 0 3px rgba(79,99,240,0.12); }

        .pa-pill{ transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease, color .18s ease, border-color .18s ease; }
        .pa-pill:hover{ transform: translateY(-1px); }

        .pa-submit{ position:relative; overflow:hidden; transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease; }
        .pa-submit:not(:disabled):hover{ transform: translateY(-2px); box-shadow: 0 12px 28px rgba(79,99,240,0.35); }
        .pa-submit:active{ transform: translateY(0); }
        .pa-submit:disabled{ opacity:.6; cursor:not-allowed; }
      `}</style>

      <section id="apply" className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Partner Application
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Apply to become a partner
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-8 text-[#6B7280]">
              Tell us about your organization and the route you&apos;re
              interested in. Applications are reviewed by our partnerships
              team.
            </p>
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-3xl shadow-lg"
            style={{ animationDelay: ".15s" }}
          >
            <div className="bg-[#11163C] px-8 py-6">
              <h3 className="text-lg font-semibold text-white">
                Partner application
              </h3>
              <p className="mt-1.5 text-sm text-[#9AA3C0]">
                All routes are reviewed for fit — submitting this form starts
                a conversation, not an approval.
              </p>
            </div>

            <div className="bg-white p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF2FF]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4F63F0"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[19px] font-bold text-gray-900">
                    Application received!
                  </h3>
                  <p className="max-w-[360px] text-[13.5px] leading-relaxed text-gray-500">
                    Our partnerships team will review your details for fit and
                    reach out with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Partner route
                    </p>
                    <p className="mt-2 text-[15px] font-medium text-[#1F2937]">
                      Which partnership are you interested in?
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {PARTNER_ROUTES.map((route) => {
                        const active = selectedRoute === route.id;

                        return (
                          <button
                            key={route.id}
                            type="button"
                            onClick={() => selectRoute(route.id)}
                            className={`pa-pill rounded-full border px-5 py-2 text-sm font-semibold ${
                              active
                                ? "border-[#4F63F0] bg-[#4F63F0] text-white"
                                : "border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#C7CBE8]"
                            }`}
                          >
                            {route.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Company details
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Company name">
                        <input
                          value={form.companyName}
                          onChange={(e) => set("companyName", e.target.value)}
                          placeholder="Company"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Company website">
                        <input
                          value={form.companyWebsite}
                          onChange={(e) => set("companyWebsite", e.target.value)}
                          placeholder="https://"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <Field label="Country / region">
                        <input
                          value={form.country}
                          onChange={(e) => set("country", e.target.value)}
                          placeholder="Region"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Company size">
                        <input
                          value={form.companySize}
                          onChange={(e) => set("companySize", e.target.value)}
                          placeholder="1-10"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Industry focus">
                        <input
                          value={form.industry}
                          onChange={(e) => set("industry", e.target.value)}
                          placeholder="Industry"
                          className={inputClass}
                        />
                      </Field>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Contact details
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Full name">
                        <input
                          value={form.fullName}
                          onChange={(e) => set("fullName", e.target.value)}
                          placeholder="Name"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Role / title">
                        <input
                          value={form.role}
                          onChange={(e) => set("role", e.target.value)}
                          placeholder="Title"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Business email">
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="LinkedIn (optional)">
                        <input
                          value={form.linkedin}
                          onChange={(e) => set("linkedin", e.target.value)}
                          placeholder="https://linkedin.com/..."
                          className={inputClass}
                        />
                      </Field>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Partnership fit
                    </p>

                    <div className="mt-4">
                      <Field label="Customer segments, use cases, market coverage, and expected value">
                        <textarea
                          value={form.fit}
                          onChange={(e) => set("fit", e.target.value)}
                          rows={4}
                          placeholder="Tell us who you serve, how you'd work with Zoiko Sema, and the value you'd create..."
                          className={`${inputClass} resize-none`}
                        />
                      </Field>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 text-[13px] leading-6 text-[#4B5563]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#4F63F0] focus:ring-[#4F63F0]"
                    />
                    <span>
                      I understand applications are reviewed for fit and that
                      submitting this form does not guarantee approval, and I
                      consent to my details being processed per the{" "}
                      <a
                        href="/privacy-notice"
                        className="font-medium text-[#4F63F0] underline"
                      >
                        Privacy Notice
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting || !selectedRoute || !consent}
                    className="pa-submit flex w-full items-center justify-center gap-2 rounded-full bg-[#4F63F0] py-3.5 text-[15px] font-semibold text-white"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit application
                        <span aria-hidden>→</span>
                      </>
                    )}
                  </button>

                  <p className="-mt-4 text-center text-xs text-[#9CA3AF]">
                    Reviewed for partner fit, customer value, operational
                    readiness, and brand alignment.
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
