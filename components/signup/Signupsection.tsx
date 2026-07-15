"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiMessageSquare,
  FiVideo,
  FiCloud,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiUser,
  FiMail,
  FiBriefcase,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import type { IconType } from "react-icons";

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

type MiniFeature = { icon: IconType; label: string };

const MINI_FEATURES: MiniFeature[] = [
  { icon: FiMessageSquare, label: "Team messaging that's instant and secure" },
  { icon: FiVideo, label: "HD meetings with up to 100 participants" },
  { icon: FiCloud, label: "Cloud storage to share and collaborate" },
  { icon: FiShield, label: "Enterprise-grade security you can trust" },
];

const PLAN_FEATURES = [
  "Unlimited 1:1 and group messaging",
  "Up to 100 participants in meetings",
  "Share files up to 2 GB",
  "10 GB cloud storage",
  "Apps for desktop and mobile",
  "Enterprise-grade security",
];

const DESCRIBES = [
  "Individual",
  "Team lead",
  "Business owner",
  "IT / Admin",
  "Developer",
  "Other",
];
const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const ROLES = ["Founder / CEO", "Manager", "IC / Employee", "IT / Admin", "Other"];

const inputBase =
  "h-12 w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white dark:placeholder-gray-500";
const selectBase =
  "h-12 w-full rounded-lg border border-gray-200 bg-white px-3.5 text-[14px] text-gray-900 outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white";
const labelBase =
  "mb-1.5 block text-[13px] font-semibold text-gray-700 dark:text-gray-300";

type FormState = {
  fullName: string;
  businessEmail: string;
  companyName: string;
  password: string;
  confirmPassword: string;
  describes: string;
  companySize: string;
  role: string;
  agree: boolean;
};

const INITIAL_FORM: FormState = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  password: "",
  confirmPassword: "",
  describes: "",
  companySize: "",
  role: "",
  agree: false,
};

export function SignupSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.1);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

    if (form.fullName.trim().length === 0) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      setError("Please enter a valid business email.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      setError("Please accept the Privacy Policy and Terms of Service.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: wire to your DRF signup endpoint.
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 700)); // placeholder
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes suFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .su-hidden  { opacity: 0; transform: translateY(24px); }
        .su-visible { animation: suFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .su-primary { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .su-primary:hover:not(:disabled) { transform: translateY(-1px); background-color: #5C68E0; box-shadow: 0 10px 24px rgba(79,91,213,0.4); }
        @media (prefers-reduced-motion: reduce) {
          .su-hidden, .su-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .su-primary:hover { transform: none !important; }
        }
      `}</style>

      <div className="min-h-screen w-full bg-white py-12 dark:bg-[#0D0B24] sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — marketing + plan */}
          <div ref={leftRef}>
            <h1
              className={`su-hidden ${leftIn ? "su-visible" : ""} text-[clamp(30px,3.6vw,44px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white`}
            >
              Start free.
              <br />
              Work better together.
            </h1>

            <p
              className={`su-hidden ${leftIn ? "su-visible" : ""} mt-4 max-w-[440px] text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.08s" }}
            >
              Create your free Zoiko Sema account in minutes and start
              communicating, collaborating, and getting more done—securely.
            </p>

            {/* Mini feature row */}
            <div
              className={`su-hidden ${leftIn ? "su-visible" : ""} mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4`}
              style={{ animationDelay: "0.16s" }}
            >
              {MINI_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex flex-col gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] leading-4 text-gray-500 dark:text-gray-400">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Free plan card */}
            <div
              className={`su-hidden ${leftIn ? "su-visible" : ""} mt-9 rounded-2xl bg-[#F5F4FF] p-6 dark:bg-[#151233]`}
              style={{ animationDelay: "0.24s" }}
            >
              <h3 className="text-[17px] font-bold text-gray-900 dark:text-white">
                Start with our Free plan
              </h3>
              <p className="mt-1 text-[13px] text-gray-500 dark:text-gray-400">
                Perfect for individuals and small teams getting started.
              </p>

              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <ul className="flex flex-col gap-2.5">
                  {PLAN_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[13px] text-gray-600 dark:text-gray-300"
                    >
                      <FiCheckCircle
                        className="h-4 w-4 flex-shrink-0 text-[#4F5BD5] dark:text-[#8C95F2]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center sm:border-l sm:border-gray-200 sm:pl-6 sm:dark:border-white/10">
                  <p className="flex items-start justify-center gap-1 font-extrabold text-gray-900 dark:text-white">
                    <span className="text-[36px] leading-none">$0</span>
                    <span className="mt-1 text-[12px] font-semibold text-gray-400">
                      USD
                    </span>
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-gray-400">
                    Free Forever
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-gray-400">
                    No credit card required
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]"
              >
                Compare all plans
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Testimonial */}
            <div
              className={`su-hidden ${leftIn ? "su-visible" : ""} mt-6 rounded-2xl bg-[#F5F4FF] p-6 dark:bg-[#151233]`}
              style={{ animationDelay: "0.32s" }}
            >
              <FaQuoteLeft className="h-4 w-4 text-[#4F5BD5] dark:text-[#8C95F2]" aria-hidden="true" />
              <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-300">
                Zoiko Sema has transformed the way our team communicates and
                collaborates. It&rsquo;s secure, reliable, and incredibly easy to
                use.
              </p>
              <div className="mt-4 flex items-center gap-3">
                {/* 👇 replace with the real avatar (PNG in /public/images/) */}
                <img
                  src="/images/avatar-lena-park.png"
                  alt="Lena Park"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-white">
                    Lena Park
                  </p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">
                    Head of Operations, Novora
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — create account form */}
          <div
            ref={formRef}
            className={`su-hidden ${formIn ? "su-visible" : ""} w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_24px_60px_rgba(16,24,40,0.10)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none sm:p-8`}
          >
            <h2 className="text-[22px] font-bold text-gray-900 dark:text-white">
              Create your free account
            </h2>
            <p className="mt-1 text-[13px] text-gray-500 dark:text-gray-400">
              No credit card required. Upgrade anytime.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="su-fullName" className={labelBase}>
                  Full name
                </label>
                <div className="relative">
                  <FiUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="su-fullName"
                    type="text"
                    value={form.fullName}
                    onChange={update("fullName")}
                    placeholder="Enter your full name"
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="su-businessEmail" className={labelBase}>
                  Business email
                </label>
                <div className="relative">
                  <FiMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="su-businessEmail"
                    type="email"
                    value={form.businessEmail}
                    onChange={update("businessEmail")}
                    placeholder="Enter your business email"
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="su-companyName" className={labelBase}>
                  Company name{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <div className="relative">
                  <FiBriefcase className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="su-companyName"
                    type="text"
                    value={form.companyName}
                    onChange={update("companyName")}
                    placeholder="Enter your company name"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="su-password" className={labelBase}>
                    Create password
                  </label>
                  <div className="relative">
                    <FiLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                    <input
                      id="su-password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={update("password")}
                      placeholder="Create password"
                      className={`${inputBase} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="su-confirmPassword" className={labelBase}>
                    Confirm password
                  </label>
                  <div className="relative">
                    <FiLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                    <input
                      id="su-confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={update("confirmPassword")}
                      placeholder="Confirm your password"
                      className={`${inputBase} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((s) => !s)}
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      {showConfirm ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <p className="-mt-1 text-[12px] text-gray-400 dark:text-gray-500">
                At least 8 characters with a mix of letters, numbers &amp;
                symbols.
              </p>

              <div>
                <label htmlFor="su-describes" className={labelBase}>
                  What best describes you?
                </label>
                <select
                  id="su-describes"
                  value={form.describes}
                  onChange={update("describes")}
                  className={`${selectBase} ${form.describes === "" ? "text-gray-400 dark:text-gray-500" : ""}`}
                >
                  <option value="">Select an option</option>
                  {DESCRIBES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="su-companySize" className={labelBase}>
                    Company size
                  </label>
                  <select
                    id="su-companySize"
                    value={form.companySize}
                    onChange={update("companySize")}
                    className={`${selectBase} ${form.companySize === "" ? "text-gray-400 dark:text-gray-500" : ""}`}
                  >
                    <option value="">Select company size</option>
                    {COMPANY_SIZES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="su-role" className={labelBase}>
                    Your role
                  </label>
                  <select
                    id="su-role"
                    value={form.role}
                    onChange={update("role")}
                    className={`${selectBase} ${form.role === "" ? "text-gray-400 dark:text-gray-500" : ""}`}
                  >
                    <option value="">Select your role</option>
                    {ROLES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-2.5 text-[13px] leading-5 text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={update("agree")}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-[#4F5BD5]"
                />
                <span>
                  I agree to the{" "}
                  <a href="privacy-notice" className="font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="terms-of-service" className="font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]">
                    Terms of Service
                  </a>
                  .
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
                className="su-primary mt-1 h-12 w-full rounded-lg bg-[#4F5BD5] text-[14px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Creating account..." : "Create free account"}
              </button>
            </form>

            <p className="mt-5 flex items-center justify-center gap-1.5 text-[12px] text-gray-400 dark:text-gray-500">
              <FiShield className="h-3.5 w-3.5" aria-hidden="true" />
              We respect your privacy. Your information is secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupSection;