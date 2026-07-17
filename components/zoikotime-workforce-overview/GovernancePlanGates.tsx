import { Check } from "lucide-react";

const plans = [
  {
    name: "Entry / Free",
    subtitle: "Personal & small-team overview",
    features: [
      "Personal / small-team overview as approved",
      "Basic team filters and saved views",
      "Core notice, own view, and correction",
      "Self-serve implementation",
    ],
    tone: "light",
  },
  {
    name: "Business",
    subtitle: "Advanced workflows and routing",
    features: [
      "Advanced approval & correction workflows",
      "Advanced team filters and saved views",
      "Advanced worker transparency routing",
      "SSO/MFA as approved · Priority support",
    ],
    tone: "highlight",
  },
  {
    name: "Enterprise",
    subtitle: "Custom policy at scale",
    features: [
      "Custom approval chains & separation of duties",
      "Jurisdiction / custom transparency routing",
      "Full SSO + SCIM + custom roles",
      "Custom retention, legal hold, and dedicated support",
    ],
    tone: "dark",
  },
];

export default function GovernancePlanGates() {
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
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              Governance & Plan Gates
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Legally required access and correction is never paywalled.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const isHighlight = plan.tone === "highlight";
              const isDark = plan.tone === "dark";

              return (
                <div
                  key={plan.name}
                  className={`fade-up rounded-2xl p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                    isDark
                      ? "bg-[#11163C] text-white"
                      : isHighlight
                      ? "border-2 border-[#5B5FEF] bg-[#F5F5FE]"
                      : "border border-[#ECECF4] bg-white"
                  }`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-[#1F2937]"}`}>
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-1.5 text-sm font-medium ${
                      isDark ? "text-[#9AA3C0]" : isHighlight ? "text-[#5B5FEF]" : "text-[#6B7280]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${isDark ? "text-[#5EEAD4]" : "text-[#16A34A]"}`}
                          strokeWidth={2.5}
                        />
                        <span
                          className={`text-sm leading-6 ${isDark ? "text-[#DDE1F0]" : "text-[#374151]"}`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
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
