"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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

type TopicValue =
  | ""
  | "sales"
  | "support"
  | "partnerships"
  | "press"
  | "security"
  | "legal";

const TOPICS: { value: TopicValue; label: string; team: string }[] = [
  { value: "sales", label: "Sales & demo", team: "our Sales team" },
  { value: "support", label: "Customer support", team: "our Support team" },
  { value: "partnerships", label: "Partnerships", team: "our Partnerships team" },
  { value: "press", label: "Press", team: "our Press team" },
  { value: "security", label: "Security", team: "our Security team" },
  { value: "legal", label: "Legal & privacy", team: "our Legal team" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  topic: TopicValue;
  name: string;
  email: string;
  message: string;
  updates: boolean;
}

interface FormErrors {
  topic?: string;
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSmartFormSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: formRef, inView: formIn } = useInView(0.1);

  const [form, setForm] = useState<FormState>({
    topic: "",
    name: "",
    email: "",
    message: "",
    updates: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const selectedTopic = useMemo(
    () => TOPICS.find((t) => t.value === form.topic) ?? null,
    [form.topic]
  );

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.topic) next.topic = "Please choose a topic.";
    if (!state.name.trim()) next.name = "Please enter your name.";
    if (!state.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(state.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!state.message.trim()) {
      next.message = "Please tell us how we can help.";
    } else if (state.message.trim().length < 10) {
      next.message = "Please add a few more details (at least 10 characters).";
    }
    return next;
  };

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched[key]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({ topic: true, name: true, email: true, message: true });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[13.5px] text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-brand";

  return (
    <>
      <style>{`
        @keyframes csfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csf-hidden  { opacity: 0; transform: translateY(28px); }
        .csf-visible { animation: csfFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .csf-btn {
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .csf-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(75, 71, 229, 0.35);
        }
        .csf-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .csf-check {
          accent-color: #4B47E5;
        }

        @media (prefers-reduced-motion: reduce) {
          .csf-hidden, .csf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .csf-btn:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Smart contact form"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`csf-hidden ${badgeIn ? "csf-visible" : ""} flex items-center justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Smart Contact Form
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`csf-hidden ${headIn ? "csf-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-3">
              One form, tailored to your request
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-gray-500 max-w-[540px] mx-auto">
              Choose a topic and we&apos;ll show only the fields that route matters — then send it to the right team.
            </p>
          </div>

          {/* Form card */}
          <div
            ref={formRef}
            className={`csf-hidden ${formIn ? "csf-visible" : ""} rounded-3xl border border-gray-200 overflow-hidden shadow-[0_20px_50px_rgba(15,15,42,0.08)]`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Header bar */}
            <div className="bg-[#0D0B22] px-6 sm:px-8 py-5 flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 8h18" />
                </svg>
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-white">
                  {selectedTopic ? `${selectedTopic.label} inquiry` : "Choose a topic to begin"}
                </h3>
                <p className="text-[12px] text-white/50">
                  {selectedTopic
                    ? `This will be routed to ${selectedTopic.team}.`
                    : "Select the route that best matches your request."}
                </p>
              </div>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} noValidate className="px-6 sm:px-8 py-7">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                    Thanks — your inquiry is on its way.
                  </h3>
                  <p className="text-[13px] text-gray-500 max-w-[400px] mx-auto">
                    {selectedTopic
                      ? `We've routed this to ${selectedTopic.team}. Expect a reply at ${form.email}.`
                      : `We'll reach out at ${form.email}.`}
                  </p>
                </div>
              ) : (
                <>
                  {/* Inquiry type */}
                  <div className="mb-5">
                    <label htmlFor="csf-topic" className="block text-[13px] font-semibold text-gray-900 mb-2">
                      Inquiry type
                    </label>
                    <select
                      id="csf-topic"
                      value={form.topic}
                      onChange={(e) => handleChange("topic", e.target.value as TopicValue)}
                      onBlur={() => handleBlur("topic")}
                      className={`${inputBase} ${errors.topic && touched.topic ? "border-red-400" : "border-gray-200"}`}
                    >
                      <option value="">Select a topic...</option>
                      {TOPICS.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    {errors.topic && touched.topic && (
                      <p className="mt-1.5 text-[12px] text-red-500">{errors.topic}</p>
                    )}
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="csf-name" className="block text-[13px] font-semibold text-gray-900 mb-2">
                        Name
                      </label>
                      <input
                        id="csf-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="Your name"
                        className={`${inputBase} ${errors.name && touched.name ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1.5 text-[12px] text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="csf-email" className="block text-[13px] font-semibold text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        id="csf-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="you@email.com"
                        className={`${inputBase} ${errors.email && touched.email ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <label htmlFor="csf-message" className="block text-[13px] font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="csf-message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="How can we help?"
                      rows={4}
                      className={`${inputBase} resize-none ${errors.message && touched.message ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1.5 text-[12px] text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-start gap-2 mb-3">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4B47E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p className="text-[12px] text-gray-500">
                      Your details are processed per our Privacy Notice to handle this request.
                    </p>
                  </div>

                  {/* Updates checkbox */}
                  <label className="flex items-start gap-2 mb-6 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.updates}
                      onChange={(e) => handleChange("updates", e.target.checked)}
                      className="csf-check mt-0.5 w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-[12.5px] text-gray-700">
                      Keep me updated about Zoiko Sema (optional — not required to contact us).
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="csf-btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#4B47E5] text-white text-[14px] font-semibold py-3.5"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit inquiry"}
                    {status !== "submitting" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[12px] text-gray-400 flex items-center justify-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={selectedTopic ? "#10B981" : "currentColor"} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {selectedTopic
                      ? `Your request will be routed to ${selectedTopic.team}.`
                      : "Choose a topic above and your request will be routed to the right team."}
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}