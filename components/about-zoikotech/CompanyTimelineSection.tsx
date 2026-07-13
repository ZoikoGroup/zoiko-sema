"use client";
import { LoaderCircle } from "lucide-react";

interface Milestone {
  label: string;
  title: string;
}

const milestones: Milestone[] = [
  {
    label: "Company",
    title: "Milestone — pending approval",
  },
  {
    label: "Product",
    title: "Zoiko Sema milestone — verified only",
  },
  {
    label: "Trust",
    title: "Security / privacy release — on approval",
  },
  {
    label: "Partnership",
    title: "Announcement — business-approved",
  },
  {
    label: "Press",
    title: "Media reference — when available",
  },
];

const FourSegmentCircle = ({
  size = 16,
  color = "#7C6CF3",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke={color} strokeWidth="2" strokeLinecap="round">
      {/* Top */}
      <path d="M6.3 1.8 A6.2 6.2 0 0 1 9.7 1.8" />
      {/* Right */}
      <path d="M14.2 6.3 A6.2 6.2 0 0 1 14.2 9.7" />
      {/* Bottom */}
      <path d="M9.7 14.2 A6.2 6.2 0 0 1 6.3 14.2" />
      {/* Left */}
      <path d="M1.8 9.7 A6.2 6.2 0 0 1 1.8 6.3" />
    </g>
  </svg>
);

export default function CompanyTimelineSection() {
  return (
    <section className="bg-[#F0EFFB] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F46E5]">
          Milestones
        </p>
        <h2 className="mx-auto max-w-xl text-4xl font-bold leading-snug text-gray-900">
          Company timeline
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
          A modular timeline, ready to populate with approved company history.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
          {milestones.map(({ label, title }, i) => (
            <div key={label} className="flex flex-col items-center">
              <div className="mb-3 flex h-5 items-center gap-5 text-[#4F46E5]/50">
                {i === 0 && (
                  <span className="text-lg leading-none text-[#4F46E5]">—</span>
                )}
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <FourSegmentCircle />
                </div>
              </div>

              <div className="w-full rounded-2xl border border-dashed border-gray-100 bg-white p-5 text-center shadow-sm">
                <span className="inline-block rounded-full bg-[#F6F5FE] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4F46E5]">
                  {label}
                </span>
                <p className="mx-auto mt-3 max-w-[160px] text-[13px] font-extrabold leading-snug text-[#1C2246]">
                  {title}
                </p>

                <div className="mx-auto mt-5 flex max-w-[140px] flex-col items-center gap-2">
                  <span className="h-2 w-full rounded-[4px] bg-[#ECEDF6]" />
                  <span className="h-2 w-3/5 rounded-[4px] bg-[#ECEDF6]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
