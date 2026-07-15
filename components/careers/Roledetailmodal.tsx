"use client";

import React, { useEffect, useRef } from "react";
import { FiX, FiCheck, FiArrowRight, FiShield } from "react-icons/fi";
import type { Job } from "./OpenRolesSection";

// Generic placeholders shown for every role until HR-approved content exists.
const COLLABORATION_MODEL =
  "Works with product, engineering, and security teams. Documentation-first, with clear decisions and owners. Meeting expectations are HR-approved.*";
const HIRING_PROCESS =
  "Recruiter screen → team interview → work sample (if applicable) → final conversation → decision. Exact stages are HR-approved per role.*";
const ACCOMMODATIONS =
  "Need an adjustment during the hiring process? We'll route you to our HR-approved accommodation support — every request is handled confidentially.";

const grayTag =
  "rounded-full bg-[#F3F3FB] px-3 py-1 text-[12px] font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-7">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function RoleDetailModal({
  job,
  onClose,
}: {
  job: Job;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Lock background scroll while the modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for accessibility.
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <>
      <style>{`
        @keyframes rmFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rmPop  { from { opacity: 0; transform: translateY(16px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .rm-backdrop { animation: rmFade .2s ease forwards; }
        .rm-dialog   { animation: rmPop .3s cubic-bezier(.22,1,.36,1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .rm-backdrop, .rm-dialog { animation: none !important; }
        }
      `}</style>

      <div
        className="rm-backdrop fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
        onClick={onClose}
      >
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rm-title"
          onClick={(e) => e.stopPropagation()}
          className="rm-dialog relative my-auto w-full max-w-5xl rounded-2xl bg-[#F6F5FC] shadow-2xl outline-none dark:bg-[#0D0B24]"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close role details"
            className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:text-gray-900 dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-3 lg:gap-7 lg:p-8">
            {/* LEFT — role content */}
            <div className="rounded-2xl bg-white p-6 dark:bg-[#151233] sm:p-8 lg:col-span-2">
              <span className="inline-flex items-center rounded-full bg-[#4F5BD5]/10 px-3 py-1 text-[11px] font-semibold text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                Example role · placeholder
              </span>

              <h2
                id="rm-title"
                className="mt-4 pr-8 text-[clamp(22px,3vw,30px)] font-bold leading-tight tracking-tight text-[#172046] dark:text-white"
              >
                {job.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#EEF0FB] px-3 py-1 text-[12px] font-medium text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                  {job.department}
                </span>
                <span className={grayTag}>Location: HR-approved*</span>
                <span className={grayTag}>{job.employment}*</span>
                <span className={grayTag}>Level: HR-approved*</span>
              </div>

              <Block title="Role summary">
                <p className="text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                  {job.summary}
                </p>
              </Block>

              <Block title="What you'll work on">
                <ul className="flex flex-col gap-2.5">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#4F5BD5]/12 text-[#4F5BD5] dark:bg-[#4F5BD5]/25 dark:text-[#8C95F2]">
                        <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[14px] leading-6 text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Collaboration model">
                <p className="text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                  {COLLABORATION_MODEL}
                </p>
              </Block>

              <Block title="Hiring process">
                <p className="text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                  {HIRING_PROCESS}
                </p>
              </Block>
            </div>

            {/* RIGHT — apply + accommodations */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-white/10 dark:bg-[#151233]">
                <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                  Apply for this role
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                  Applications open once the role is live and HR-approved.
                </p>

                <button
                  type="button"
                  // TODO: wire to your roles board / talent community route
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F5BD5] px-5 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5C68E0]"
                >
                  Apply / Join Talent Community
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  // TODO: wire share behaviour (copy link / share sheet)
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-[14px] font-semibold text-[#172046] transition hover:border-[#4F5BD5] hover:text-[#4F5BD5] dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                >
                  Share role
                </button>
              </div>

              <div className="rounded-2xl bg-[#EFEFF8] p-6 dark:bg-[#11102B]">
                <div className="mb-2 flex items-center gap-2">
                  <FiShield className="h-4 w-4 text-[#4F5BD5] dark:text-[#8C95F2]" aria-hidden="true" />
                  <h4 className="text-[14px] font-semibold text-[#172046] dark:text-white">
                    Accommodations
                  </h4>
                </div>
                <p className="text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                  {ACCOMMODATIONS}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}