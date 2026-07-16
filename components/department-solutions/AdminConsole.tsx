import { ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Role-Aware Visibility",
    description: "Restricted boundaries for sensitive data.",
    icon: ShieldCheck,
  },
  {
    title: "AI Governance Policies",
    description: "Control AI summaries at department level.",
    icon: Sparkles,
  },
];

export default function AdminConsole() {
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Admin Console
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Global visibility with granular control. Define who sees what,
              when they see it, and how it is preserved across the entire
              organization.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="fade-up flex items-start gap-4 rounded-xl border border-[#ECECF4] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ animationDelay: `${0.1 + index * 0.12}s` }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                      <Icon size={18} className="text-[#4F63F0]" strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-[#1F2937]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-7 text-[#6B7280]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/department-solutions/admin-console.png"
              alt="Admin console dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
