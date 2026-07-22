import { Fingerprint, KeyRound, Database, BrainCircuit, ClipboardCheck } from "lucide-react";

const items = [
  {
    title: "Identity Risks",
    description:
      "Centralized identity management with biometric MFA and zero-trust verification.",
    icon: Fingerprint,
  },
  {
    title: "Unauthorized Access",
    description:
      "Real-time perimeter defense and dynamic role-based permission matrices.",
    icon: KeyRound,
  },
  {
    title: "Data Governance",
    description:
      "Automated classification and retention policies across all cloud data silos.",
    icon: Database,
  },
  {
    title: "AI Governance",
    description:
      "Enforce ethical AI use policies with human-in-the-loop review cycles.",
    icon: BrainCircuit,
  },
  {
    title: "Compliance Readiness",
    description:
      "Continuous monitoring against SOC2, HIPAA, and GDPR frameworks.",
    icon: ClipboardCheck,
  },
];

export default function SolvedAtScale() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-[#F8F7FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Solved at Scale
            </h2>

            <p className="mt-4 text-[17px] leading-8 text-[#6B7280]">
              The architecture for modern enterprise complexity.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-6 lg:grid-cols-6">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`fade-up relative bg-white/70 backdrop-blur-[6px] rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200/50 p-10 shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-start items-start gap-2 ${
                    index < 3 ? "md:col-span-3 lg:col-span-2" : "md:col-span-3 lg:col-span-3"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-blue-600" size={24} strokeWidth={2} />

                  <div className="pt-4 flex flex-col justify-start items-start w-full">
                    <h3 className="text-base font-bold font-sans leading-6 text-zinc-900">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-col justify-start items-start w-full">
                    <p className="text-sm font-normal font-['Inter'] leading-6 text-zinc-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
