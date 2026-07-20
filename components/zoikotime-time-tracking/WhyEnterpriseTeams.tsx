import { ShieldCheck, Fingerprint, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Absolute Compliance",
    description:
      "Automated regulatory alignment with local labor laws and global standards, reducing legal exposure by 94%.",
    icon: ShieldCheck,
    bg: "#11163C",
  },
  {
    title: "High-Precision ID",
    description:
      "Multi-factor biometric and spatial verification ensures the right person is at the right location, every time.",
    icon: Fingerprint,
    bg: "#4F63F0",
  },
  {
    title: "Real-time Insights",
    description:
      "Instant visibility into workforce trends, fatigue monitoring, and performance metrics across global sites.",
    icon: TrendingUp,
    bg: "#11163C",
  },
];

export default function WhyEnterpriseTeams() {
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
              Why Enterprise Teams Choose ZoikoTime
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#4F63F0]" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: feature.bg }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-[#1F2937]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">
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
