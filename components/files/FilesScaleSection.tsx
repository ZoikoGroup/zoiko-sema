"use client";
import { ArrowRight } from "lucide-react";

interface AudienceCard {
  title: string;
  description: string;
  action: string;
}

const audiences: AudienceCard[] = [
  {
    title: "Individuals",
    description:
      "Keep personal files connected to conversations, notes, and meetings.",
    action: "Start Free",
  },
  {
    title: "Teams",
    description:
      "Share project documents, meeting assets, and decisions in one workspace.",
    action: "Explore Teams",
  },
  {
    title: "Businesses",
    description:
      "Govern file sharing, access, retention, and audit controls across workspaces.",
    action: "Contact Sales",
  },
  {
    title: "Regulated teams",
    description:
      "Use policy controls, Confidential Mode, retention, and audit trails for sensitive file workflows.",
    action: "Talk to Sales",
  },
];

export default function FilesScaleSection() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            Secured, trusted
          </p>
          <h2 className="mx-auto text-2xl font-extrabold leading-snug text-gray-900 sm:text-[28px]">
            Files that scale from individuals to regulated teams.
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/files/audience.png"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ title, description, action }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_4px_12px_rgba(18,19,43,0.05),0_1px_3px_rgba(18,19,43,0.04)]"
            >
              <h3 className="text-xs font-semibold text-[#503AD7]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#12132B]">
                {description}
              </p>
              <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#3457E8] hover:text-[#3E51DE]">
                {action}
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
