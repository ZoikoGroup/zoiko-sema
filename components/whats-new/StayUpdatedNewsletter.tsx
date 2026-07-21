"use client";

import { useState } from "react";

export default function StayUpdatedNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }

    setError("");
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

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

        .nl-input{ transition: border-color .18s, box-shadow .18s; }
        .nl-input:hover{ border-color: #C7CBE8; }
        .nl-input:focus{ border-color: #4F63F0; box-shadow: 0 0 0 3px rgba(79,99,240,0.12); }

        .nl-submit{ transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease; }
        .nl-submit:not(:disabled):hover{ transform: translateY(-2px); box-shadow: 0 12px 28px rgba(79,99,240,0.3); }
        .nl-submit:disabled{ opacity:.65; cursor:not-allowed; }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-xl text-center">
          <span className="fade-up inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
            Stay Updated
          </span>

          <h2 className="fade-up mt-3 text-3xl font-bold text-[#1F2937] md:text-[34px]">
            Get updates for the products you actually use.
          </h2>

          <div className="fade-up mt-8" style={{ animationDelay: ".1s" }}>
            {submitted ? (
              <div className="flex flex-col items-center gap-2 rounded-xl bg-[#DCFCE7] px-6 py-5">
                <p className="text-sm font-semibold text-[#16A34A]">
                  You&apos;re subscribed! Check {email} to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="name@company.com"
                  className="nl-input w-full max-w-xs rounded-lg border px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] outline-none sm:w-72"
                  style={{ borderColor: error ? "#ef4444" : "#E5E7EB" }}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="nl-submit flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Subscribing…
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}

            {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

            {!submitted && (
              <p className="mt-4 text-xs text-[#9CA3AF]">
                Choose products and change types after confirming. Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
