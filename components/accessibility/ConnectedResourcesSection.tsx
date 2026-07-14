"use client";

import { ArrowRight } from "lucide-react";

interface ResourceCard {
  dotColor: string;
  title: string;
  description: string;
  action: string;
  actionColor: string;
}

const leftCards: ResourceCard[] = [
  {
    dotColor: "bg-blue-500",
    title: "Compliance",
    description: "Evidence library, review paths, and VPAT / ACR requests.",
    action: "View Compliance",
    actionColor: "text-[#4F63F0] hover:text-[#3E51DE]",
  },
  {
    dotColor: "bg-green-500",
    title: "Security Center",
    description: "Security safeguards, access controls, and review.",
    action: "Visit Security Center",
    actionColor: "text-[#4F63F0] hover:text-[#3E51DE]",
  },
];

const rightCards: ResourceCard[] = [
  {
    dotColor: "bg-[#6C5CE7]",
    title: "Privacy & Data",
    description: "Data practices, controls, and request routes.",
    action: "View Privacy & Data",
    actionColor: "text-[#4F63F0] hover:text-[#3E51DE]",
  },
  {
    dotColor: "bg-red-500",
    title: "Report a Concern",
    description: "Raise a security, privacy, or misuse concern.",
    action: "Report a Concern",
    actionColor: "text-red-500 hover:text-red-600",
  },
];

export default function ConnectedResourcesSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
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
          Related trust material
        </p>

        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Connected resources.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[35%_30%_35%] lg:items-stretch">
          {/* Left */}
          <div className="grid gap-5">
            {leftCards.map(
              ({ dotColor, title, description, action, actionColor }, i) => (
                <div
                  key={title}
                  className="fade-in-item flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`h-3 w-3 rounded-full ${dotColor}`} />

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCFF] text-[#6C5CE7]">
                        <ArrowRight size={16} />
                      </div>
                    </div>

                    <h3 className="text-[18px] font-semibold text-gray-900">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {description}
                    </p>
                  </div>

                  <button
                    className={`mt-6 text-left text-sm font-semibold ${actionColor}`}
                  >
                    {action}
                  </button>
                </div>
              ),
            )}
          </div>

          {/* Image */}
          <div
            className="fade-in-item overflow-hidden rounded-3xl h-[356px] sm:h-[450px] lg:h-auto"
            style={{ animationDelay: "150ms" }}
          >
            <img
              src="/accessibility/trust.png"
              alt="Trust resources"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right */}
          <div className="grid gap-5">
            {rightCards.map(
              ({ dotColor, title, description, action, actionColor }, i) => (
                <div
                  key={title}
                  className="fade-in-item flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`h-3 w-3 rounded-full ${dotColor}`} />

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCFF] text-[#6C5CE7]">
                        <ArrowRight size={16} />
                      </div>
                    </div>

                    <h3 className="text-[18px] font-semibold text-gray-900">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {description}
                    </p>
                  </div>

                  <button
                    className={`mt-6 text-left text-sm font-semibold ${actionColor}`}
                  >
                    {action}
                  </button>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
