import { ListChecks, Handshake, RefreshCw, Share2, Shield, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Better Follow-up",
    description: "Automatically draft high-context follow-ups reviewed by humans to ensure perfect personalization.",
    icon: ListChecks,
  },
  {
    title: "Customer Accountability",
    description: "Formalize meeting commitments into shared action plans that both sides can track and verify.",
    icon: Handshake,
  },
  {
    title: "CRM Alignment",
    description: "Keep your source of truth fresh without manual data entry. Automatic sync of verified notes.",
    icon: RefreshCw,
  },
  {
    title: "Team Collaboration",
    description: "Bridge the gap between sales, solutions, and implementation with unified workspace context.",
    icon: Share2,
  },
  {
    title: "Governed Communication",
    description: "Secure deal rooms with role-based access, ensuring sensitive materials stay with the right stakeholders.",
    icon: Shield,
  },
  {
    title: "Enterprise Trust",
    description: "SOC2 Type II and GDPR compliant. Audit logs for every interaction and shared document.",
    icon: BadgeCheck,
  },
];

export default function EngineeredForClosingVelocity() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Engineered for Closing Velocity
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              Drive results across the entire revenue organization with
              governed, AI-assisted collaboration.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-[#F8F7FD] p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Icon size={22} className="text-[#4F63F0]" strokeWidth={2} />

                  <h3 className="mt-4 text-base font-semibold text-[#1F2937]">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#6B7280]">
                    {feature.description}
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
