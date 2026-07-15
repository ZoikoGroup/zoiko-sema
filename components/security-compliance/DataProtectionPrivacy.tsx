import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Auto-Classification",
    description:
      "AI-powered discovery of PII, PHI, and financial data across all channels.",
  },
  {
    title: "Granular Retention",
    description:
      "Set custom data lifecycles to meet specific jurisdictional requirements.",
  },
];

export default function DataProtectionPrivacy() {
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

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div
            className="fade-up order-2 overflow-hidden rounded-2xl border border-[#ECECF4] shadow-lg lg:order-1"
          >
            <img
              src="/security-compliance/data-protection.png"
              alt="Communication supervision dashboard"
              className="w-full object-cover"
            />
          </div>

          <div className="fade-up order-1 lg:order-2" style={{ animationDelay: ".15s" }}>
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Data Protection & Privacy
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Take control of your data footprint. Automatically classify
              sensitive information and apply global retention policies to
              ensure compliance.
            </p>

            <div className="mt-8 space-y-6">
              {points.map((point, index) => (
                <div
                  key={point.title}
                  className="fade-up flex gap-3.5"
                  style={{ animationDelay: `${0.25 + index * 0.12}s` }}
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#4F63F0]"
                    strokeWidth={2}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#1F2937]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-7 text-[#6B7280]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
