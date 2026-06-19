"use client";

import React, { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ResourcesNewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      setState("error");
      setErrorMsg("Enter your email to subscribe.");
      return;
    }
    if (!isValidEmail(email)) {
      setState("error");
      setErrorMsg("Enter a valid email address.");
      return;
    }

    setState("loading");
    setErrorMsg("");

    try {
      // Replace this with your real subscribe endpoint, e.g.:
      // const res = await fetch("/api/newsletter/subscribe", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) throw new Error("Subscription failed");

      await new Promise((resolve) => setTimeout(resolve, 1100)); // simulated network delay

      setState("success");
      setEmail("");
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <style>{`
        @keyframes rnFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rnShake {
          0%, 100% { transform: translateX(0); }
          20%      { transform: translateX(-6px); }
          40%      { transform: translateX(5px); }
          60%      { transform: translateX(-4px); }
          80%      { transform: translateX(3px); }
        }
        @keyframes rnCheckPop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes rnSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .rn-enter-1 { animation: rnFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .rn-enter-2 { animation: rnFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }
        .rn-enter-3 { animation: rnFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.18s both; }
        .rn-enter-4 { animation: rnFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.26s both; }

        .rn-input {
          transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .rn-input:hover {
          border-color: #c7cbe8;
        }
        .rn-input:focus {
          outline: none;
          border-color: #474787;
          box-shadow: 0 0 0 3px rgba(71,71,135,0.12);
        }
        .rn-input.has-error {
          border-color: #ef4444;
          animation: rnShake 0.4s ease;
        }

        .rn-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease, background-color .2s ease;
        }
        .rn-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(71,71,135,0.32);
        }
        .rn-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.97);
        }
        .rn-btn:disabled {
          cursor: default;
          opacity: 0.85;
        }
        @keyframes rnShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .rn-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .rn-btn:hover:not(:disabled)::after { animation: rnShimmer .6s ease forwards; }

        .rn-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: rnSpin 0.7s linear infinite;
        }

        .rn-check-icon {
          animation: rnCheckPop 0.4s cubic-bezier(.34,1.56,.64,1) both;
        }

        .rn-error-text {
          animation: rnFadeUp 0.3s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .rn-enter-1, .rn-enter-2, .rn-enter-3, .rn-enter-4, .rn-error-text { animation: none !important; opacity: 1 !important; transform: none !important; }
          .rn-input.has-error { animation: none !important; }
          .rn-btn:hover:not(:disabled) { transform: none; }
          .rn-spinner { animation: rnSpin 0.7s linear infinite; }
        }
      `}</style>

      <section
        aria-label="Stay on top of clearer communication"
        style={{ backgroundColor: "#EAEEFC" }}
        className="w-full py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-2xl px-6 md:px-10 text-center">

          {/* ── Heading ── */}
          <h2
            className="rn-enter-1 font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
            style={{ fontSize: "30px" }}
          >
            Stay on top of clearer communication
          </h2>

          {/* ── Sub-copy ── */}
          <p className="rn-enter-2 text-[14.5px] leading-[1.75] text-[#5C5870] max-w-[480px] mx-auto mb-8">
            Monthly insights on AI meeting intelligence, accountable communication,
            and how leading teams are turning conversations into work.
          </p>

          {/* ── Form ── */}
          {state === "success" ? (
            <div className="rn-enter-3 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 max-w-[420px] mx-auto shadow-sm">
              <span className="rn-check-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#474787" }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.2l3 3 6-6.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[14px] font-semibold text-[#15131F]">
                You&apos;re subscribed! Check your inbox to confirm.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rn-enter-3 flex flex-col sm:flex-row items-stretch gap-3 max-w-[460px] mx-auto"
              noValidate
            >
              <input
                type="email"
                inputMode="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                disabled={state === "loading"}
                className={`rn-input flex-1 rounded-full border border-gray-200 bg-white px-5 py-3.5 text-[14px] text-[#15131F] placeholder:text-gray-400 ${
                  state === "error" ? "has-error" : ""
                }`}
                aria-invalid={state === "error"}
                aria-describedby={state === "error" ? "newsletter-error" : undefined}
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="rn-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white whitespace-nowrap"
                style={{ background: "#474787" }}
              >
                {state === "loading" ? (
                  <>
                    <span className="rn-spinner" aria-hidden="true" />
                    Subscribing…
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}

          {/* ── Error message ── */}
          {state === "error" && (
            <p id="newsletter-error" className="rn-error-text text-[12.5px] text-red-500 mt-3 font-medium">
              {errorMsg}
            </p>
          )}

          {/* ── Fine print ── */}
          {state !== "success" && (
            <p className="rn-enter-4 text-[12.5px] text-[#9CA3AF] mt-4">
              No spam. Unsubscribe anytime.
            </p>
          )}

        </div>
      </section>
    </>
  );
}