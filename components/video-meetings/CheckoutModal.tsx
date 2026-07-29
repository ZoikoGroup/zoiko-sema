"use client";

import React, { useEffect, useState } from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
};

interface CheckoutModalProps {
  plan: Plan | null;
  onClose: () => void;
}

type Step = "form" | "processing" | "success";

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function CheckoutModal({ plan, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const isOpen = !!plan;

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, step]);

  if (!plan) return null;

  function handleClose() {
    if (step === "processing") return;
    setClosing(true);
    window.setTimeout(() => {
      onClose();
    }, 220);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cardDigits = cardNumber.replace(/\s/g, "");
    if (!name.trim() || !email.trim() || cardDigits.length < 16 || expiry.length < 5 || cvc.length < 3) {
      setError("Please fill in all fields correctly.");
      return;
    }
    setError("");
    setStep("processing");
    window.setTimeout(() => {
      setStep("success");
      window.setTimeout(() => {
        handleClose();
      }, 1800);
    }, 1700);
  }

  return (
    <>
      <style>{`
        @keyframes ckoBackdropIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ckoBackdropOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes ckoPopIn {
          from { opacity: 0; transform: scale(.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ckoPopOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(.95) translateY(8px); }
        }
        @keyframes ckoSpin { to { transform: rotate(360deg); } }
        @keyframes ckoCheckIn {
          from { opacity: 0; transform: scale(.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ckoCheckStroke {
          from { stroke-dashoffset: 48; }
          to   { stroke-dashoffset: 0; }
        }

        .cko-backdrop { animation: ckoBackdropIn .25s ease forwards; }
        .cko-backdrop.closing { animation: ckoBackdropOut .2s ease forwards; }

        .cko-panel { animation: ckoPopIn .32s cubic-bezier(.22,1,.36,1) forwards; }
        .cko-panel.closing { animation: ckoPopOut .2s cubic-bezier(.4,0,1,1) forwards; }

        .cko-spinner {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          border: 2.5px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: ckoSpin .7s linear infinite;
        }

        .cko-check-circle { animation: ckoCheckIn .4s cubic-bezier(.22,1,.36,1) forwards; }
        .cko-check-path {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: ckoCheckStroke .5s ease .15s forwards;
        }

        .cko-pay-btn {
          transition: transform .2s cubic-bezier(.25,1,.5,1), box-shadow .2s ease, background-color .2s ease;
        }
        .cko-pay-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0px 16px 32px -10px rgba(52,87,232,0.55);
          background-color: #1d4ed8;
        }
        .cko-pay-btn:active:not(:disabled) {
          transform: translateY(0) scale(.98);
        }

        .cko-input {
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .cko-input:focus {
          border-color: #3457e8;
          box-shadow: 0 0 0 3px rgba(52,87,232,0.15);
        }

        @media (prefers-reduced-motion: reduce) {
          .cko-backdrop, .cko-panel, .cko-spinner, .cko-check-circle, .cko-check-path {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className={`cko-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 ${closing ? "closing" : ""}`}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Checkout for ${plan.name} plan`}
          className={`cko-panel relative w-full max-w-md rounded-[24px] bg-white shadow-[0px_40px_80px_-20px_rgba(11,15,45,0.45)] overflow-hidden ${closing ? "closing" : ""}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            disabled={step === "processing"}
            aria-label="Close checkout"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>

          {/* Order summary */}
          <div className="bg-slate-900 text-white px-8 pt-8 pb-6">
            <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
              Checkout
            </span>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">{plan.name} plan</h3>
                <p className="text-sm text-white/50 mt-0.5">
                  {plan.period ? "Billed monthly" : "One-time"}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-sm text-white/50">{plan.period}</span>}
              </div>
            </div>
          </div>

          <div className="px-8 py-7">
            {step === "success" ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="cko-check-circle w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path
                      className="cko-check-path"
                      d="M6 15.5L12 21.5L24 8.5"
                      stroke="#16a34a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Payment successful</h4>
                <p className="text-sm text-slate-500">
                  You&apos;re all set on the {plan.name} plan. A receipt has been sent to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name on card</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    disabled={step === "processing"}
                    className="cko-input w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    disabled={step === "processing"}
                    className="cko-input w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Card number</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="4242 4242 4242 4242"
                    disabled={step === "processing"}
                    className="cko-input w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Expiry</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      placeholder="MM/YY"
                      disabled={step === "processing"}
                      className="cko-input w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">CVC</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="123"
                      disabled={step === "processing"}
                      className="cko-input w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                </div>

                {error && <p className="text-xs font-medium text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={step === "processing"}
                  className="cko-pay-btn w-full mt-2 py-3.5 bg-blue-600 text-white font-semibold rounded-full text-base shadow-[0px_10px_30px_-8px_rgba(52,87,232,0.55)] flex items-center justify-center gap-2.5 disabled:cursor-not-allowed"
                >
                  {step === "processing" ? (
                    <>
                      <span className="cko-spinner inline-block" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${plan.price}${plan.period}`
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  This is a demo checkout — no real payment will be processed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
