"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { useInView } from "./useInView";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Frequency = "weekly" | "monthly" | "instant";

const frequencies: { value: Frequency; label: string; sub: string }[] = [
  { value: "weekly", label: "Weekly", sub: "Best of" },
  { value: "monthly", label: "Monthly", sub: "Summary" },
  { value: "instant", label: "Instant", sub: "All alerts" },
];

interface FormErrors {
  email?: string;
  frequency?: string;
}

export default function ProductUpdateNewsletterSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState<Frequency | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ email?: boolean; frequency?: boolean }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (emailVal: string, freqVal: Frequency | null): FormErrors => {
    const next: FormErrors = {};
    if (!emailVal.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(emailVal.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!freqVal) next.frequency = "Please choose a preferred frequency.";
    return next;
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (touched.email) setErrors(validate(value, frequency));
  };

  const handleEmailBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    setErrors(validate(email, frequency));
  };

  const handleFrequencySelect = (value: Frequency) => {
    setFrequency(value);
    setTouched((prev) => ({ ...prev, frequency: true }));
    setErrors(validate(email, value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(email, frequency);
    setErrors(nextErrors);
    setTouched({ email: true, frequency: true });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  return (
    <>
      <style>{`
        @keyframes puNewsUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-news-hidden { opacity: 0; transform: translateY(24px); }
        .pu-news-visible { animation: puNewsUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .pu-freq-btn {
          transition: transform .18s ease, border-color .18s ease, background-color .18s ease;
        }
        .pu-freq-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.5);
        }
        .pu-freq-btn.selected {
          background-color: rgba(255,255,255,0.1);
          border-color: #fff;
        }

        .pu-news-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;
        }
        .pu-news-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(79,99,240,0.45);
          background: #3E51DE;
        }
        .pu-news-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (prefers-reduced-motion: reduce) {
          .pu-news-hidden { opacity: 1 !important; transform: none !important; }
          .pu-news-visible { animation: none !important; }
          .pu-freq-btn:hover, .pu-news-btn:hover { transform: none !important; }
        }
      `}</style>

      <section className="bg-[#4F46E5] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={leftRef} className={`pu-news-hidden ${leftIn ? "pu-news-visible" : ""}`}>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[36px]">
              Stay in the loop.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#D9D6FB]">
              Choose exactly what you want to hear about and how often you
              want to hear it.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white">
              <Mail size={16} strokeWidth={2} />
              Join 150k+ admins tracking releases.
            </div>
          </div>

          <div
            ref={formRef}
            className={`pu-news-hidden ${formIn ? "pu-news-visible" : ""} rounded-2xl bg-[#12132B] p-6 sm:p-7`}
            style={{ animationDelay: "0.1s" }}
          >
            {status === "success" ? (
              <div className="py-6 text-center">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-bold text-white">
                  You&apos;re subscribed.
                </h3>
                <p className="mt-1.5 text-[13px] text-[#AEB7CC]">
                  Updates will arrive at {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="pu-email" className="mb-1.5 block text-[12.5px] font-semibold text-white">
                  Email Address
                </label>
                <input
                  id="pu-email"
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onBlur={handleEmailBlur}
                  placeholder="you@company.com"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6B7196] outline-none transition-colors focus:border-white ${
                    errors.email && touched.email ? "border-red-400" : "border-white/15"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1.5 text-[11.5px] text-red-400">{errors.email}</p>
                )}

                <p className="mb-2 mt-5 text-[12.5px] font-semibold text-white">
                  Preferred Frequency
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {frequencies.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => handleFrequencySelect(f.value)}
                      className={`pu-freq-btn rounded-xl border border-white/15 px-2 py-3 text-center ${
                        frequency === f.value ? "selected" : ""
                      }`}
                    >
                      <span className="block text-[13px] font-semibold text-white">
                        {f.label}
                      </span>
                      <span className="block text-[10.5px] text-[#8B90B8]">{f.sub}</span>
                    </button>
                  ))}
                </div>
                {errors.frequency && touched.frequency && (
                  <p className="mt-1.5 text-[11.5px] text-red-400">{errors.frequency}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="pu-news-btn mt-6 w-full rounded-xl py-3.5 text-[14px] font-semibold text-white"
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe to Updates"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
