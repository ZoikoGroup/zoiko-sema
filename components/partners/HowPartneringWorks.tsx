import { Search, FileText, SquareCheck, GraduationCap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Explore",
    description: "Review partner types and select the best-fit route.",
    icon: Search,
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Submit company, route, market, capability, and contact details.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Qualify",
    description:
      "Partnerships reviews fit, capacity, risk, value, and conflicts.",
    icon: SquareCheck,
  },
  {
    number: "04",
    title: "Onboard",
    description: "Approved partners begin onboarding with enablement and contacts.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Grow",
    description: "Work on opportunities, integrations, deployments, and support.",
    icon: TrendingUp,
  },
];

export default function HowPartneringWorks() {
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
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Application & Review
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              How partnering works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Five clear steps from exploring routes to growing together.
              Applying starts a review — it isn&apos;t automatic approval.
            </p>
          </div>

          <div className="relative mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-x-6">
            <div className="absolute left-[10%] right-[10%] top-[26px] hidden h-px bg-[#D9DDFB] md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="fade-up relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <span className="text-xs font-bold text-[#818CF8]">
                    {step.number}
                  </span>

                  <div className="relative mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF0FE] transition duration-300 hover:-translate-y-1">
                    <Icon size={22} className="text-[#4F63F0]" strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#1F2937]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[160px] text-sm leading-6 text-[#6B7280]">
                    {step.description}
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
