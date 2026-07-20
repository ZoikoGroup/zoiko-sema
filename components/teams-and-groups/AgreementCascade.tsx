"use client";

import React from "react";

export default function AgreementCascade() {
  const rows = [
    {
      label: "Review scope",
      text: "Direct, inherited, dynamic, temporary, privileged, export, and delegated access.",
    },
    {
      label: "Review owner",
      text: "Named accountable owner with due date, escalation, and separation from the access grantee where required.",
    },
    {
      label: "Evidence",
      text: "User, role, permission, object scope, source, purpose, expiry, and prior decision.",
    },
    {
      label: "Decision",
      text: "Keep, modify, remove, expire, request evidence, transfer owner, escalate, or document exception.",
    },
    {
      label: "High-risk access",
      text: "Privileged admin, evidence access, payroll, HR/legal, and export access require enhanced review.",
    },
    {
      label: "No surveillance",
      text: "Activity or responsiveness scoring is never used as the sole basis for access removal.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpCascade {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-cascade {
              animation: fadeUpCascade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-cascade">
        {/* Top Header Block */}
        <div className="w-full mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              09 – ACCESS REVIEWS & SEPARATION OF DUTIES
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight max-w-3xl">
            Attested, evidenced, and never a one-click blanket approval.
          </h2>
        </div>

        {/* Structured Info Box Matrix Layout */}
        <div className="w-full bg-[#F8F9FC] border border-[#E2DCF2] rounded-2xl p-2 md:p-4 shadow-sm flex flex-col mb-10 overflow-hidden">
          {rows.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-4 px-4 items-start ${
                index !== rows.length - 1 ? "border-b border-[#f3f5fa]" : ""
              }`}
            >
              {/* Feature Label */}
              <div className="md:col-span-3 font-bold text-[#664de6] text-[13px]">
                {item.label}
              </div>

              {/* Feature Parameters Specification */}
              <div className="md:col-span-9 text-[#51567d] leading-relaxed text-[13px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Column Bottom Graphic Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <img
              src="/teams-and-groups/access.png"
              alt="image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          <div>
            <img
              src="/teams-and-groups/image 287.png"
              alt="image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
