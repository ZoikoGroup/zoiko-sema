"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle, MailCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = ["Identity", "Channels", "Audience", "Proposal", "Review"] as const;

const LANGUAGES = ["English", "Hindi", "Other"];
const PLATFORMS = ["YouTube", "Instagram", "LinkedIn", "X (Twitter)", "Podcast", "Blog / Newsletter", "Other"];
const AUDIENCE_SIZES = ["Under 1K", "1K – 10K", "10K – 50K", "50K – 250K", "250K+"];
const AUDIENCE_TYPES = ["Students", "Working professionals", "Small businesses", "Educators", "Tech enthusiasts", "Remote teams"];
const MODELS = ["Sponsored content", "Performance-based", "Negotiated hybrid", "Not sure yet"];

interface FormState {
  applicantType: "individual" | "agency";
  fullName: string;
  agencyName: string;
  email: string;
  country: string;
  languages: string[];
  ageConfirmed: boolean;
  platforms: string[];
  primaryUrl: string;
  otherUrls: string;
  audienceSize: string;
  audienceTypes: string[];
  topics: string;
  model: string;
  idea: string;
  consentAccurate: boolean;
  consentDisclosure: boolean;
}

const INITIAL: FormState = {
  applicantType: "individual",
  fullName: "",
  agencyName: "",
  email: "",
  country: "India",
  languages: ["English"],
  ageConfirmed: false,
  platforms: [],
  primaryUrl: "",
  otherUrls: "",
  audienceSize: "",
  audienceTypes: [],
  topics: "",
  model: "",
  idea: "",
  consentAccurate: false,
  consentDisclosure: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_RE = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i;
const IDEA_MIN = 40;

function validate(step: number, f: FormState): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!f.fullName.trim()) e.fullName = "Please enter your name.";
    if (f.applicantType === "agency" && !f.agencyName.trim()) e.agencyName = "Please enter the agency name.";
    if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
    if (!f.country) e.country = "Please select a country or region.";
    if (f.languages.length === 0) e.languages = "Choose at least one language.";
    if (!f.ageConfirmed) e.ageConfirmed = "You must be 18 or older to apply.";
  }
  if (step === 1) {
    if (f.platforms.length === 0) e.platforms = "Choose at least one platform.";
    if (!URL_RE.test(f.primaryUrl.trim())) e.primaryUrl = "Please enter a valid channel or profile link.";
  }
  if (step === 2) {
    if (!f.audienceSize) e.audienceSize = "Select an approximate audience size.";
    if (f.audienceTypes.length === 0) e.audienceTypes = "Choose at least one audience type.";
  }
  if (step === 3) {
    if (!f.model) e.model = "Select a collaboration model.";
    if (f.idea.trim().length < IDEA_MIN) e.idea = `Please share a little more (at least ${IDEA_MIN} characters).`;
  }
  if (step === 4) {
    if (!f.consentAccurate) e.consentAccurate = "Please confirm the information is accurate.";
    if (!f.consentDisclosure) e.consentDisclosure = "Please confirm you'll follow disclosure rules.";
  }
  return e;
}

const inputCls =
  "w-full rounded-lg border bg-[#F8FAFF] px-3.5 py-2.5 text-[15px] text-[#0D1638] placeholder:text-[#9AA3BC] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-[#2F6FED]/10";

function borderFor(err?: string) {
  return err ? "border-red-400" : "border-[#DCE3F2] hover:border-[#B9C6E6]";
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[14px] font-semibold text-[#0D1638]">
      {children} <span className="text-[#2F6FED]">*</span>
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1.5 text-[12.5px] text-red-500">{msg}</p> : null;
}

function Pills({
  options,
  selected,
  onToggle,
  ariaLabel,
}: {
  options: string[];
  selected: string[];
  onToggle: (o: string) => void;
  ariaLabel: string;
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = selected.includes(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onToggle(o)}
            className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition ${
              on
                ? "border-[#2F6FED] bg-[#2F6FED] text-white"
                : "border-[#DCE3F2] bg-white text-[#4B5675] hover:border-[#2F6FED] hover:text-[#2F6FED]"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Check({
  checked,
  onChange,
  children,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-2.5 text-[14px] text-[#2B3452]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#2F6FED]"
        />
        <span>
          {children} <span className="text-[#2F6FED]">*</span>
        </span>
      </label>
      <FieldError msg={error} />
    </div>
  );
}

function StepIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-[19px] font-bold text-[#0D1638] font-plus-jakarta">{title}</h3>
      <p className="mt-1 text-[14px] text-[#5B6582]">{body}</p>
    </div>
  );
}

export default function CreatorApplicationSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function toggle(key: "languages" | "platforms" | "audienceTypes", value: string) {
    const list = form[key];
    set(key, list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  async function next() {
    const found = validate(step, form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }

    // No creator-application endpoint exists yet; simulate submission like the partners form.
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
  }

  function reset() {
    setForm(INITIAL);
    setErrors({});
    setStep(0);
    setSubmitted(false);
  }

  const isAgency = form.applicantType === "agency";
  const progress = submitted ? 100 : ((step + 1) / STEPS.length) * 100;

  const summary: [string, string][] = [
    ["Applicant type", isAgency ? "Agency" : "Individual creator"],
    [isAgency ? "Authorized representative" : "Full name", form.fullName],
    ...(isAgency ? ([["Agency", form.agencyName]] as [string, string][]) : []),
    ["Email", form.email],
    ["Country / region", form.country],
    ["Languages", form.languages.join(", ")],
    ["Platforms", form.platforms.join(", ")],
    ["Primary channel", form.primaryUrl],
    ["Audience size", form.audienceSize],
    ["Audience", form.audienceTypes.join(", ")],
    ["Preferred model", form.model],
  ];

  return (
    <section id="apply" className="scroll-mt-20 bg-white px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Creator application"
          title="Apply in five short steps"
          intro="Stateful, validated, and private. We only ask for what we need to review audience fit — no payment or identity documents."
        />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[#E3E8F4] bg-white shadow-xl shadow-[#0D1638]/8">
          {/* Header + progress */}
          <div className="bg-[#0B1538] px-6 pb-4 pt-6 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[17px] font-bold text-white font-plus-jakarta sm:text-[19px]">
                Creator Partnership Application
              </h3>
              <span className="shrink-0 text-[13px] text-[#B8C0DA]">
                Step <strong className="text-white">{submitted ? STEPS.length : step + 1}</strong> of {STEPS.length}
              </span>
            </div>
            <div
              className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#2F6FED] to-[#38A8F5] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <ol className="mt-3 grid grid-cols-5 text-center text-[11.5px] sm:text-[12.5px]">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  aria-current={i === step ? "step" : undefined}
                  className={i === step && !submitted ? "font-semibold text-white" : i < step || submitted ? "text-[#8FA6D8]" : "text-[#6B7697]"}
                >
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2F6FED]">
                  <MailCheck size={26} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#0D1638] font-plus-jakarta">Application received</h3>
                <p className="mt-2 max-w-md text-[15px] leading-6 text-[#5B6582]">
                  Thanks, {form.fullName.split(" ")[0] || "there"}. Please verify your email at{" "}
                  <strong className="text-[#0D1638]">{form.email}</strong> — after that, a member of our team will
                  review your application. Submitting doesn&apos;t guarantee approval or compensation.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 text-[14px] font-semibold text-[#2F6FED] hover:underline"
                >
                  Start a new application
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  next();
                }}
              >
                {step === 0 && (
                  <>
                    <StepIntro title="About you" body="Individual creator or an authorized agency — both are welcome." />

                    <Label>Applicant type</Label>
                    <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Applicant type">
                      {(["individual", "agency"] as const).map((t) => {
                        const on = form.applicantType === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            role="radio"
                            aria-checked={on}
                            onClick={() => set("applicantType", t)}
                            className={`rounded-lg border px-4 py-3 text-[14.5px] font-medium transition ${
                              on
                                ? "border-[#2F6FED] bg-[#EEF4FF] font-semibold text-[#2F6FED]"
                                : "border-[#DCE3F2] bg-[#F8FAFF] text-[#4B5675] hover:border-[#B9C6E6]"
                            }`}
                          >
                            {t === "individual" ? "Individual creator" : "Agency"}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="cp-name">{isAgency ? "Authorized representative" : "Full name"}</Label>
                        <input
                          id="cp-name"
                          autoComplete="name"
                          value={form.fullName}
                          onChange={(e) => set("fullName", e.target.value)}
                          placeholder="Your name"
                          className={`${inputCls} ${borderFor(errors.fullName)}`}
                        />
                        <FieldError msg={errors.fullName} />
                      </div>
                      <div>
                        <Label htmlFor="cp-email">Email address</Label>
                        <input
                          id="cp-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="you@email.com"
                          className={`${inputCls} ${borderFor(errors.email)}`}
                        />
                        {errors.email ? (
                          <FieldError msg={errors.email} />
                        ) : (
                          <p className="mt-1.5 text-[12.5px] text-[#7A84A0]">
                            We&apos;ll ask you to verify this email after you submit.
                          </p>
                        )}
                      </div>

                      {isAgency && (
                        <div className="sm:col-span-2">
                          <Label htmlFor="cp-agency">Agency name</Label>
                          <input
                            id="cp-agency"
                            autoComplete="organization"
                            value={form.agencyName}
                            onChange={(e) => set("agencyName", e.target.value)}
                            placeholder="Registered or trading name"
                            className={`${inputCls} ${borderFor(errors.agencyName)}`}
                          />
                          <FieldError msg={errors.agencyName} />
                        </div>
                      )}

                      <div>
                        <Label htmlFor="cp-country">Country / region</Label>
                        <select
                          id="cp-country"
                          value={form.country}
                          onChange={(e) => set("country", e.target.value)}
                          className={`${inputCls} ${borderFor(errors.country)}`}
                        >
                          <option value="India">India</option>
                          <option value="Other">Other country / region</option>
                        </select>
                        {form.country === "Other" && (
                          <p className="mt-1.5 text-[12.5px] text-[#7A84A0]">
                            This program currently focuses on India. You can still apply and we&apos;ll keep your
                            details for future programs.
                          </p>
                        )}
                      </div>
                      <div>
                        <Label>Preferred language(s)</Label>
                        <Pills
                          ariaLabel="Preferred languages"
                          options={LANGUAGES}
                          selected={form.languages}
                          onToggle={(o) => toggle("languages", o)}
                        />
                        <FieldError msg={errors.languages} />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Check
                        checked={form.ageConfirmed}
                        onChange={(v) => set("ageConfirmed", v)}
                        error={errors.ageConfirmed}
                      >
                        I confirm I am 18 years of age or older.
                      </Check>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <StepIntro
                      title="Your channels"
                      body="Where does your audience find you? Public links only — no logins or analytics access."
                    />
                    <Label>Platforms you create on</Label>
                    <Pills
                      ariaLabel="Platforms"
                      options={PLATFORMS}
                      selected={form.platforms}
                      onToggle={(o) => toggle("platforms", o)}
                    />
                    <FieldError msg={errors.platforms} />

                    <div className="mt-6">
                      <Label htmlFor="cp-url">Primary channel or profile link</Label>
                      <input
                        id="cp-url"
                        type="url"
                        inputMode="url"
                        value={form.primaryUrl}
                        onChange={(e) => set("primaryUrl", e.target.value)}
                        placeholder="https://youtube.com/@yourchannel"
                        className={`${inputCls} ${borderFor(errors.primaryUrl)}`}
                      />
                      <FieldError msg={errors.primaryUrl} />
                    </div>

                    <div className="mt-6">
                      <label htmlFor="cp-other" className="mb-2 block text-[14px] font-semibold text-[#0D1638]">
                        Other links <span className="font-normal text-[#7A84A0]">(optional)</span>
                      </label>
                      <textarea
                        id="cp-other"
                        rows={3}
                        value={form.otherUrls}
                        onChange={(e) => set("otherUrls", e.target.value)}
                        placeholder="One link per line"
                        className={`${inputCls} ${borderFor()} resize-none`}
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <StepIntro
                      title="Your audience"
                      body="Approximate figures are fine. There's no minimum — we review relevance and fit."
                    />
                    <Label>Approximate total audience</Label>
                    <Pills
                      ariaLabel="Audience size"
                      options={AUDIENCE_SIZES}
                      selected={form.audienceSize ? [form.audienceSize] : []}
                      onToggle={(o) => set("audienceSize", o)}
                    />
                    <FieldError msg={errors.audienceSize} />

                    <div className="mt-6">
                      <Label>Who is your audience?</Label>
                      <Pills
                        ariaLabel="Audience types"
                        options={AUDIENCE_TYPES}
                        selected={form.audienceTypes}
                        onToggle={(o) => toggle("audienceTypes", o)}
                      />
                      <FieldError msg={errors.audienceTypes} />
                    </div>

                    <div className="mt-6">
                      <label htmlFor="cp-topics" className="mb-2 block text-[14px] font-semibold text-[#0D1638]">
                        Main content topics <span className="font-normal text-[#7A84A0]">(optional)</span>
                      </label>
                      <input
                        id="cp-topics"
                        value={form.topics}
                        onChange={(e) => set("topics", e.target.value)}
                        placeholder="e.g. productivity, remote work, career tips"
                        className={`${inputCls} ${borderFor()}`}
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <StepIntro
                      title="Your proposal"
                      body="Tell us how you'd introduce Zoiko Sema to your audience. Final terms are agreed separately."
                    />
                    <Label>Preferred collaboration model</Label>
                    <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Collaboration model">
                      {MODELS.map((m) => {
                        const on = form.model === m;
                        return (
                          <button
                            key={m}
                            type="button"
                            role="radio"
                            aria-checked={on}
                            onClick={() => set("model", m)}
                            className={`rounded-lg border px-4 py-3 text-left text-[14.5px] transition ${
                              on
                                ? "border-[#2F6FED] bg-[#EEF4FF] font-semibold text-[#2F6FED]"
                                : "border-[#DCE3F2] bg-[#F8FAFF] text-[#4B5675] hover:border-[#B9C6E6]"
                            }`}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                    <FieldError msg={errors.model} />

                    <div className="mt-6">
                      <Label htmlFor="cp-idea">Your content idea</Label>
                      <textarea
                        id="cp-idea"
                        rows={5}
                        maxLength={1500}
                        value={form.idea}
                        onChange={(e) => set("idea", e.target.value)}
                        placeholder="Format, angle, and why it fits your audience…"
                        className={`${inputCls} ${borderFor(errors.idea)} resize-none`}
                      />
                      <div className="mt-1.5 flex justify-between gap-4">
                        <FieldError msg={errors.idea} />
                        <span className="ml-auto text-[12px] text-[#9AA3BC]">{form.idea.length}/1500</span>
                      </div>
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <StepIntro title="Review & submit" body="Check your details. You can go back to edit any step." />
                    <dl className="divide-y divide-[#EEF1F8] rounded-xl border border-[#E3E8F4] bg-[#F8FAFF]">
                      {summary.map(([k, v]) => (
                        <div key={k} className="grid grid-cols-[140px_1fr] gap-3 px-4 py-2.5 text-[14px] sm:grid-cols-[190px_1fr]">
                          <dt className="text-[#7A84A0]">{k}</dt>
                          <dd className="break-words font-medium text-[#0D1638]">{v || "—"}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 space-y-3">
                      <Check
                        checked={form.consentAccurate}
                        onChange={(v) => set("consentAccurate", v)}
                        error={errors.consentAccurate}
                      >
                        The information I&apos;ve shared is accurate, and I understand approval and compensation are
                        not guaranteed.
                      </Check>
                      <Check
                        checked={form.consentDisclosure}
                        onChange={(v) => set("consentDisclosure", v)}
                        error={errors.consentDisclosure}
                      >
                        If approved, I&apos;ll clearly disclose paid collaborations as required by the agreement
                        and applicable advertising rules.
                      </Check>
                    </div>
                    <p className="mt-4 text-[12.5px] text-[#7A84A0]">
                      We handle your details as described in our{" "}
                      <a href="/privacy-notice" className="text-[#2F6FED] hover:underline">
                        Privacy Notice
                      </a>
                      .
                    </p>
                  </>
                )}

                <div className="mt-8 flex items-center justify-between border-t border-[#EEF1F8] pt-6">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#4B5675] transition hover:text-[#0D1638]"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <span />
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2F6FED] px-6 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2560D8] hover:shadow-lg hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <LoaderCircle size={16} className="animate-spin" /> Submitting…
                      </>
                    ) : step === STEPS.length - 1 ? (
                      "Submit application"
                    ) : (
                      <>
                        Continue <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
