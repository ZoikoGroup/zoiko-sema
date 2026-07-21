"use client"

interface Principle {
  dotColor:string;
  text:string;
  title: string;
  description: string;
  mapsTo: string;
}

const principles: Principle[] = [
  {
    text:"text-blue-500",
    dotColor: "bg-blue-500",
    title: "Useful, not final",
    description:
      "AI assists with summaries, tasks, decisions, and drafts — it should not replace user review or professional judgment.",
    mapsTo: "Human review guidance",
  },
  {
    text:"text-[#6C5CE7]",
    dotColor: "bg-[#6C5CE7]",
    title: "Admin governed",
    description:
      "AI features are managed by workspace owners and admins based on organizational needs.",
    mapsTo: "Admin Console, role permissions",
  },
  {
    text:"text-teal-500",
    dotColor: "bg-teal-500",
    title: "Privacy-aware",
    description:
      "AI-related data handling aligns with approved privacy, security, DPA, and subprocessor materials.",
    mapsTo: "Privacy & Data, Reports",
  },
  {
    text:"text-green-500",
    dotColor: "bg-green-500",
    title: "Transparent",
    description: "Users are informed when AI is used and where AI output appears.",
    mapsTo: "AI labels, notifications",
  },
  {
    text:"text-amber-500",
    dotColor: "bg-amber-500",
    title: "Safety bounded",
    description:
      "AI features should not support harmful, deceptive, unauthorized, or policy-violating activity.",
    mapsTo: "AI Use Policy, Reports Console",
  },
  {
    text:"text-gray-800",
    dotColor: "bg-gray-800",
    title: "Continuously improved",
    description:
      "Feedback, quality checks, issue reports, and governance review inform improvements.",
    mapsTo: "Feedback flow, incident review",
  },
];

export default function ResponsibleAiPrinciplesSection() {
  return (
    <section id="principles" className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Responsible AI principles
            </p>
            <h2 className="text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
              Principles mapped to real controls.
            </h2>
          </div>
          <span className="rounded-full bg-[#4F63F0] px-4 py-2 text-xs font-semibold text-white">
            Trust framework
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ dotColor, title, description, mapsTo,text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-5 w-5 rounded-full ${dotColor}`} />
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-500">{description}</p>
              <p className="mt-3 text-xs text-gray-400">
                <span className="font-semibold text-gray-500">Maps to: </span>
                <span className={`${text} font-bold`}>{mapsTo}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#DCE0FA] bg-[#EEF0FF] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Design requirement
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Principles are stated in clear, evidence-oriented language. We avoid vague
            claims such as &quot;ethical by default&quot; or &quot;fully safe&quot; — each principle
            maps to a control, review path, reporting route, or related trust document.
          </p>
        </div>
      </div>
    </section>
  );
}
