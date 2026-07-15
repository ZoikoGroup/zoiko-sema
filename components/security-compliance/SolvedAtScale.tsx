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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-[#4F63F0]" size={26} strokeWidth={2} />

                  <h3 className="mt-5 text-lg font-semibold text-[#1F2937]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
