"use client";

interface Step {
  number: string;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Upload",
    description:
      "Enters through messages, meetings, mail, channels, or direct upload.",
    color: "bg-[#3457E8]",
  },
  {
    number: "2",
    title: "Share",
    description:
      "Permissions apply by workspace, channel, role, quota status, and policy.",
    color: "bg-[#503AD7]",
  },
  {
    number: "3",
    title: "Discuss",
    description: "Comments and conversation remain attached to the file.",
    color: "bg-[#1C9E79]",
  },
  {
    number: "4",
    title: "Decide",
    description:
      "Decisions, owners, and due dates captured from the discussion.",
    color: "bg-[#A2660F]",
  },
  {
    number: "5",
    title: "Follow-up",
    description: "Sema can draft follow-ups where policy allows.",
    color: "bg-[#B8362F]",
  },
  {
    number: "6",
    title: "Preserve",
    description: "Version, retention, and audit history remain available.",
    color: "bg-[#0B0F2D]",
  },
];

export default function FileLifecycleSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
            File lifecycle
          </p>

          <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-[32px]">
            Upload, share, discuss, decide, follow up, preserve.
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/files/lifecycle.png"
            alt="image"
            className="h-auto w-full object-cover lg:h-95"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-6">
          {steps.map(({ number, title, description, color }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <span
                className={`mb-3 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white ${color}`}
              >
                {number}
              </span>

              <h3 className="text-sm font-extrabold text-gray-900">
                {title}
              </h3>

              <p className="mt-1.5 max-w-full text-xs leading-relaxed text-gray-500 lg:max-w-32">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}