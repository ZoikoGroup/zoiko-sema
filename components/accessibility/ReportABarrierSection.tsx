"use client";

import { useState } from "react";

const areas = [
  "Visual / contrast",
  "Keyboard / focus",
  "Screen reader",
  "Clarity / cognitive",
  "Something else",
];

const sideCards = [
  {
    title: "General support",
    description: "Contact Support for account-level issues.",
  },
  {
    title: "Procurement documentation",
    description: "Request a VPAT / ACR for compliance.",
  },
  {
    title: "Security concern",
    description: "Use Report a Concern for security issues.",
  },
];

export default function ReportABarrierSection() {
  const [selectedArea, setSelectedArea] = useState("Visual / contrast");

  return (
    <section className="bg-[#fbfafd] px-5 py-14 sm:px-8 sm:py-16 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-section {
          animation: fadeInUp 0.7s ease-out both;
        }

        .fade-in-item {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>

      <div className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Report a barrier
        </p>

        <h2 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-[32px] lg:text-[36px]">
          Tell us what&apos;s not working.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-[15px]">
          Choose an area — the form adapts routing guidance and confirmation.
          This is a design prototype; live submissions route to the
          accessibility team.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Form */}
          <form
            className="fade-in-item rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
            style={{ animationDelay: "100ms" }}
          >
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Area
            </label>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 ${
                    selectedArea === area
                      ? "border-[#6C4FE0] bg-[#6C4FE0] text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#F8F6FD] p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C4FE0]" />

              <p className="text-xs leading-relaxed text-[#5B5D80]">
                Visual and contrast reports route to design and engineering for
                review against WCAG contrast guidance.
              </p>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-900">
                Work email{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#4F63F0]"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-900">
                What happened?
              </label>

              <textarea
                rows={4}
                placeholder="What did you see, and where? Include the page or feature."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#4F63F0]"
              />
            </div>

            <button
              type="submit"
              className="mt-5 h-12 w-full rounded-xl bg-[#6C4FE0] text-sm font-semibold text-white transition hover:bg-[#3E51DE]"
            >
              Submit report
            </button>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-400">
              This prototype does not process real data. See the Privacy Notice
              for live handling.
            </p>
          </form>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            <div
              className="fade-in-item overflow-hidden rounded-2xl w-full h-64 sm:h-72 lg:h-[333px]"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src="/accessibility/report.png"
                alt="Report accessibility barrier"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
              {sideCards.map(({ title, description }, i) => (
                <div
                  key={title}
                  className="fade-in-item rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <p className="text-sm font-semibold text-gray-900">{title}</p>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
