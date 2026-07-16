"use client"

interface ToggleItem {
  label: string;
  on: boolean;
}

const toggles: ToggleItem[] = [
  { label: "AI suggestions", on: true },
  { label: "Human confirmation required", on: true },
  { label: "Limit to authorized sources", on: true },
  { label: "Log AI actions to audit", on: true },
  { label: "Sensitive spaces excluded", on: false },
];

export default function AiAssistedAuthoringSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-20 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p
            className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
            style={{ animationDelay: "0ms" }}
          >
            AI-assisted authoring
          </p>
          <h2
            className="fade-in-item mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-[42px]"
            style={{ animationDelay: "80ms" }}
          >
            AI suggests.
            <br />A person decides.
          </h2>
          <p
            className="fade-in-item mt-5 max-w-110 text-sm leading-relaxed text-gray-500"
            style={{ animationDelay: "160ms" }}
          >
            Zoiko Sema can draft, summarize, rewrite, and extract from authorized
            sources. Nothing becomes official without human review. AI content is
            labeled, traceable, and policy-controlled.
          </p>

          <div
            className="fade-in-item mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white"
            style={{ animationDelay: "240ms" }}
          >
            {toggles.map(({ label, on }, i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                  i !== toggles.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      on ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                  <span className="font-medium text-gray-800">{label}</span>
                </span>
                <span
                  className={`text-xs font-semibold ${
                    on ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {on ? "On" : "Off"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="fade-in-item overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-lg"
          style={{ animationDelay: "220ms" }}
        >
          <div className="flex items-center justify-between px-5 py-3.5">
            <span className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6C5CE7] text-[11px] font-bold text-white">
                AI
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Suggested decision
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              High confidence
            </span>
          </div>
          <img src="/system-status/design.png" alt="image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
