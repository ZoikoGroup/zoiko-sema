"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    FiVideo,
    FiMessageSquare,
    FiStar,
    FiGlobe,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiShield,
    FiKey,
    FiChevronDown,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaQuoteLeft } from "react-icons/fa";
import type { IconType } from "react-icons";
import Link from "next/link";

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

// react-icons has no colored Microsoft mark — inline the authentic 4-square logo.
function MicrosoftLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 23 23" className={className} aria-hidden="true">
            <rect x="1" y="1" width="10" height="10" fill="#F25022" />
            <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
            <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
            <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
        </svg>
    );
}

type Feature = { icon: IconType; title: string; description: string };

const FEATURES: Feature[] = [
    {
        icon: FiVideo,
        title: "Meet with confidence",
        description: "HD video, clear audio, and enterprise security you can trust.",
    },
    {
        icon: FiMessageSquare,
        title: "Built for teams",
        description: "Chat, share, and collaborate in one connected workspace.",
    },
    {
        icon: FiStar,
        title: "AI that works for you",
        description: "Smart summaries, transcriptions, and insights that save time.",
    },
    {
        icon: FiGlobe,
        title: "Anywhere, any device",
        description: "Join from your browser or the app. Work from anywhere.",
    },
];

const inputBase =
    "h-12 w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white dark:placeholder-gray-500";
const socialBtn =
    "flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:bg-[#151233] dark:text-gray-200 dark:hover:bg-white/5";

export function LoginSection() {
    const { ref: leftRef, inView: leftIn } = useInView(0.15);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length === 0) {
            setError("Please enter your password.");
            return;
        }

        try {
            setSubmitting(true);
            // TODO: wire to your DRF auth endpoint (returns a token).
            // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ email, password, remember: rememberMe }),
            // });
            await new Promise((r) => setTimeout(r, 700)); // placeholder
        } catch {
            setError("Sign in failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
        @keyframes lgFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lg-hidden  { opacity: 0; transform: translateY(24px); }
        .lg-visible { animation: lgFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .lg-primary { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .lg-primary:hover:not(:disabled) { transform: translateY(-1px); background-color: #5C68E0; box-shadow: 0 10px 24px rgba(79,91,213,0.4); }
        @media (prefers-reduced-motion: reduce) {
          .lg-hidden, .lg-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .lg-primary:hover { transform: none !important; }
        }
      `}</style>

            <div className="min-h-screen w-full bg-white dark:bg-[#0D0B24] lg:grid lg:grid-cols-2">
                {/* LEFT — marketing (hidden on small screens, standard for auth) */}
                <div
                    ref={leftRef}
                    className="hidden flex-col justify-center border-r border-gray-100 bg-[#F7F7FC] px-10 py-16 dark:border-white/10 dark:bg-[#0B0A1F] lg:flex xl:px-16"
                >
                    <div className="mx-auto w-full max-w-md">
                        <h1
                            className={`lg-hidden ${leftIn ? "lg-visible" : ""} text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white`}
                        >
                            Secure meetings.
                            <br />
                            <span className="text-[#4F5BD5] dark:text-[#8C95F2]">
                                Smarter collaboration.
                            </span>
                        </h1>

                        <p
                            className={`lg-hidden ${leftIn ? "lg-visible" : ""} mt-4 text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
                            style={{ animationDelay: "0.08s" }}
                        >
                            Zoiko Sema brings people, conversations, and ideas
                            together—securely, reliably, and beautifully.
                        </p>

                        <ul className="mt-9 flex flex-col gap-6">
                            {FEATURES.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <li
                                        key={feature.title}
                                        className={`lg-hidden ${leftIn ? "lg-visible" : ""} flex items-start gap-4`}
                                        style={{ animationDelay: `${0.16 + i * 0.08}s` }}
                                    >
                                        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        <div>
                                            <p className="text-[14px] font-semibold text-gray-900 dark:text-white">
                                                {feature.title}
                                            </p>
                                            <p className="mt-0.5 text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Testimonial */}
                        <div
                            className={`lg-hidden ${leftIn ? "lg-visible" : ""} mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
                            style={{ animationDelay: "0.48s" }}
                        >
                            <FaQuoteLeft className="h-5 w-5 text-[#4F5BD5] dark:text-[#8C95F2]" aria-hidden="true" />
                            <p className="mt-3 text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                                Zoiko Sema has transformed how our global teams communicate.
                                It&rsquo;s secure, reliable, and incredibly easy to use.
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                {/* replace with the real avatar (PNG in /public/images/) */}
                                <img
                                    src="/Images/avatar-lena-park.png"
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
                </div>

                {/* RIGHT — sign-in form */}
                <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:min-h-0 lg:px-14">
                    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-6">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-[24px] font-bold text-gray-900 dark:text-white">
                                    Welcome back
                                </h2>
                                <p className="mt-1 text-[13px] text-gray-500 dark:text-gray-400">
                                    Sign in to your Zoiko Sema account
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row flex-shrink-0 items-center gap-2">
                                <Link href="/start-free" >
                                    <button
                                        type="button"
                                        className="rounded-lg border border-[#4F5BD5]/40 px-3 py-1.5 text-[12px] font-semibold text-[#4F5BD5] transition hover:bg-[#4F5BD5]/5 dark:text-[#8C95F2]"
                                    >
                                        Start Free
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-[12px] font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                                >
                                    <FiGlobe className="h-3.5 w-3.5" aria-hidden="true" />
                                    English
                                    <FiChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        {/* Social auth */}
                        <div className="mt-7 flex flex-col gap-3">
                            <button type="button" className={socialBtn}>
                                <FcGoogle className="h-5 w-5" aria-hidden="true" />
                                Continue with Google
                            </button>
                            <button type="button" className={socialBtn}>
                                <MicrosoftLogo className="h-[18px] w-[18px]" />
                                Continue with Microsoft
                            </button>
                            <button type="button" className={socialBtn}>
                                <FaApple className="h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" />
                                Continue with Apple
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-4">
                            <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                            <span className="text-[12px] text-gray-400 dark:text-gray-500">
                                or continue with email
                            </span>
                            <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                        </div>

                        {/* Email + password */}
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="lg-email" className="mb-1.5 block text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                                    Email address
                                </label>
                                <div className="relative">
                                    <FiMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                                    <input
                                        id="lg-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        className={inputBase}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lg-password" className="mb-1.5 block text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <div className="relative">
                                    <FiLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                                    <input
                                        id="lg-password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className={`${inputBase} pr-11`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-200"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="h-4 w-4" />
                                        ) : (
                                            <FiEye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 rounded border-gray-300 accent-[#4F5BD5]"
                                    />
                                    Remember me
                                </label>
                                <button
                                    type="button"
                                    className="text-[13px] font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {error && (
                                <p className="text-[12px] font-medium text-red-500" role="alert">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="lg-primary mt-1 h-12 w-full rounded-lg bg-[#4F5BD5] text-[14px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {submitting ? "Signing in..." : "Sign in"}
                            </button>
                        </form>

                        {/* Security note */}
                        <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-[#F3F3FB] px-4 py-3 dark:bg-[#151233]">
                            <FiShield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4F5BD5] dark:text-[#8C95F2]" aria-hidden="true" />
                            <p className="text-[12px] leading-5 text-gray-500 dark:text-gray-400">
                                Your data is protected with end-to-end encryption and
                                enterprise-grade security.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-4">
                            <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                            <span className="text-[12px] text-gray-400 dark:text-gray-500">or</span>
                            <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                        </div>

                        {/* Passkey */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-[13px] font-semibold text-gray-900 dark:text-white">
                                    Sign in with passkey
                                </span>
                                <span className="rounded-full bg-[#4F5BD5]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#4F5BD5] dark:bg-[#4F5BD5]/25 dark:text-[#8C95F2]">
                                    Recommended
                                </span>
                            </div>
                            <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-400">
                                Use your device passkey for a faster, more secure sign-in
                            </p>
                            <button
                                type="button"
                                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[14px] font-semibold text-gray-700 transition hover:border-[#4F5BD5] hover:text-[#4F5BD5] dark:border-white/10 dark:bg-[#151233] dark:text-gray-200 dark:hover:text-white"
                            >
                                <FiKey className="h-4 w-4" aria-hidden="true" />
                                Use passkey
                            </button>
                        </div>

                        {/* Footer */}
                        <p className="mt-7 text-center text-[13px] text-gray-500 dark:text-gray-400">
                            Don&rsquo;t have an account?{" "}
                            <Link href="/signup" >
                                <button
                                    type="button"
                                    className="font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]"
                                >
                                    Start Free
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSection;