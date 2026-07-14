"use client";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  action: string;
}

const features: Feature[] = [
  {
    title: "Share where work happens",
    description:
      "Attach documents to messages, spaces, meetings, mail threads, and follow-ups without breaking context.",
    action: "Explore sharing",
  },
  {
    title: "Keep every file tied to context",
    description:
      "See the conversation, meeting, decision, owner, and related notes behind a file.",
    action: "View context model",
  },
  {
    title: "Find files by meaning",
    description:
      "Search by topic, meeting, owner, decision, mail thread, or project context.",
    action: "Explore Search",
  },
  {
    title: "Govern without slowing down",
    description:
      "Permissions, retention, version history, external sharing rules, and audit controls.",
    action: "View governance",
  },
];

export default function FileFirstSystemSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative text-center">
          <p className="static mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0] lg:absolute lg:right-0 lg:top-1 lg:mb-0">
            Not a folder system
          </p>

          <span className="mx-auto mb-3 block h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />

          <h2 className="mx-auto max-w-xl text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-[32px]">
            Sema Files is a contextual file layer inside the workspace.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            Files stay tied to the messages, meetings, mail threads, and
            decisions that gave them meaning.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/files/semafile.png"
            alt="image"
            className="h-full w-full object-cover lg:h-95"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, action }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-[0px_4px_8px_rgba(18,19,43,0.05),0px_1px_3px_rgba(18,19,43,0.04)]"
            >
              <div>
                <h3 className="text-sm font-extrabold text-gray-900">
                  {title}
                </h3>

                <p className="mt-2 max-w-full text-xs leading-relaxed text-gray-500 lg:max-w-50">
                  {description}
                </p>
              </div>

              <button className="mt-5 flex items-center gap-1 text-xs font-bold text-[#4F63F0] transition hover:text-[#3E51DE]">
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