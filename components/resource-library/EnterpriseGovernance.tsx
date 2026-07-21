import { ShieldCheck, UsersRound, FileSearch } from "lucide-react";

const pillars = [
  {
    title: "Source Verification",
    description: "All resources are cryptographically signed by the Zoiko Sema core team before publication.",
    icon: ShieldCheck,
    badge: "ACTIVE",
    badgeBg: "#DCFCE7",
    badgeColor: "#16A34A",
  },
  {
    title: "Human Review",
    description: "Technical assets undergo 3-tier internal verification for accuracy and compliance.",
    icon: UsersRound,
    badge: "PEER-REVIEWED",
    badgeBg: "#F3E8FF",
    badgeColor: "#7C3AED",
  },
  {
    title: "Audit Trail",
    description: "Immutable logs tracking every version, download request, and security scan performed.",
    icon: FileSearch,
    badge: "AUDITED",
    badgeBg: "#EEF2FF",
    badgeColor: "#4F63F0",
  },
];

export default function EnterpriseGovernance() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="fade-up text-3xl font-bold text-[#1F2937] md:text-[34px]">
            Enterprise Governance
          </h2>

          <div
            className="fade-up mt-8 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/resources/downloads/governance-diagram.webp"
              alt="Enterprise governance architecture diagram"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={20} className="text-[#4B5563]" strokeWidth={2} />
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                      style={{ backgroundColor: pillar.badgeBg, color: pillar.badgeColor }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#1F2937]">{pillar.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
