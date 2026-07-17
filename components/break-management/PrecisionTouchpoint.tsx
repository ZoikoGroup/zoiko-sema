"use client";

import React from "react";
import { Clock, ClipboardList, Bell } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Custom icons (no exact 1:1 lucide match, drawn to mirror the reference)    */
/* -------------------------------------------------------------------------- */

function DriftAnalysisIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M2 11.5l3.4-6 2.8 5 3-8 2.8 8.5 2.6-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="5.6"
        cy="17.4"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7.8 19.6L10 21.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BanknoteIcon({
  size = 24,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 9v.01M18 15v.01"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function MealScheduleGraphic() {
  return (
    <div className="relative flex h-[68px] w-[68px] items-center justify-center">
      <ClipboardList size={64} strokeWidth={1.3} className="text-indigo-300" />
      <span className="absolute -bottom-1.5 -right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
        <Clock size={24} strokeWidth={1.6} className="text-indigo-400" />
      </span>
    </div>
  );
}

function CashGraphic() {
  return (
    <div className="relative flex h-[70px] w-[86px] items-center justify-center">
      <div className="absolute left-1 top-3 text-indigo-200">
        <BanknoteIcon size={54} strokeWidth={1.4} />
      </div>
      <div className="absolute left-5 top-7 text-indigo-300">
        <BanknoteIcon size={54} strokeWidth={1.4} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card shells                                                               */
/* -------------------------------------------------------------------------- */

function PlainFeatureCard({
  icon,
  title,
  description,
  variant = "white",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "white" | "blue";
}) {
  return (
    <div
      className={`precision-card flex h-full flex-col justify-center rounded-[28px] border p-10 ${
        variant === "blue"
          ? "border-transparent bg-[#D3E4FE]"
          : "border-slate-200 bg-white"
      }`}
    >
      <span
        className={variant === "blue" ? "text-[#4B41E1]" : "text-indigo-600"}
      >
        {icon}
      </span>
      <h3 className="mt-5 text-[26px] font-bold leading-tight text-[#0F1B3D]">
        {title}
      </h3>
      <p
        className={`mt-3 max-w-xs text-[15px] leading-relaxed ${
          variant === "blue" ? "text-slate-700" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function MediaFeatureCard({
  icon,
  title,
  description,
  media,
  mediaSide = "right",
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  media: React.ReactNode;
  mediaSide?: "left" | "right";
}) {
  const text = (
    <div className="flex min-w-0 flex-1 flex-col justify-center">
      <span className="text-indigo-600">{icon}</span>
      <h3 className="mt-5 text-[26px] font-bold leading-tight text-[#0F1B3D]">
        {title}
      </h3>
      <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );

  const box = (
    <div
      className={`flex h-full w-full items-center justify-center rounded-2xl ${
        mediaSide === "right" ? "bg-[#E3E9FD]" : "bg-slate-100"
      }`}
    >
      {media}
    </div>
  );

  return (
    <div className="precision-card flex h-full flex-col gap-8 rounded-[28px] border border-slate-200 bg-white p-10 sm:flex-row sm:items-center">
      {mediaSide === "left" ? (
        <>
          <div className="h-[220px] w-full shrink-0 sm:w-[260px]">{box}</div>
          {text}
        </>
      ) : (
        <>
          {text}
          <div className="h-[220px] w-full shrink-0 sm:w-[260px]">{box}</div>
        </>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main section                                                              */
/* -------------------------------------------------------------------------- */

export default function PrecisionTouchpoint() {
  return (
    <section className="bg-white px-6 py-24">
      <style>{`
        @keyframes precision-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .precision-card {
          animation: precision-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .precision-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -18px rgba(15, 27, 61, 0.16);
        }
        .precision-row > *:nth-child(1) { animation-delay: 0.05s; }
        .precision-row > *:nth-child(2) { animation-delay: 0.18s; }
        @media (prefers-reduced-motion: reduce) {
          .precision-card { animation: none !important; transition: none !important; }
        }
      `}</style>

      <h2 className="text-center text-[38px] font-extrabold tracking-tight text-[#0F1B3D] sm:text-[44px]">
        Precision at Every Touchpoint
      </h2>
      <p className="mt-4 text-center text-[17px] text-slate-500">
        A unified platform for operational excellence and workforce wellbeing.
      </p>

      {/* Row 1: Automated Meal Scheduling + Proactive Alerts */}
      <div className="precision-row mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.28fr_1fr]">
        <MediaFeatureCard
          icon={<Clock size={28} strokeWidth={1.8} />}
          title={
            <>
              Automated Meal
              <br />
              Scheduling
            </>
          }
          description="Prevent violations before they happen with intelligent scheduling that accounts for peak demand and individual state mandates."
          media={<MealScheduleGraphic />}
          mediaSide="right"
        />

        <PlainFeatureCard
          icon={<Bell size={28} strokeWidth={1.8} />}
          title="Proactive Alerts"
          description="Push notifications to frontline workers and supervisors when a violation window is approaching."
          variant="blue"
        />
      </div>

      {/* Row 2: Drift Analysis + Payroll Precision */}
      <div className="precision-row mx-auto mt-6 grid max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-[0.82fr_1.4fr]">
        <PlainFeatureCard
          icon={<DriftAnalysisIcon size={28} />}
          title="Drift Analysis"
          description="Identify pattern-based non-compliance and operational bottlenecks with advanced trend reporting."
        />

        <MediaFeatureCard
          icon={<BanknoteIcon size={28} strokeWidth={1.8} />}
          title="Payroll Precision"
          description="Seamless integration with Workday, ADP, and SAP to ensure premium pay and penalties are calculated accurately every time."
          media={<CashGraphic />}
          mediaSide="left"
        />
      </div>
    </section>
  );
}
