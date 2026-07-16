import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Dynamic Permissions",
    description:
      "Automated access rotation based on user activity and role changes.",
  },
  {
    title: "Zero-Trust Architecture",
    description: "Continuous verification of every request, from every device.",
  },
];

export default function IdentityAccessManagement() {
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Identity & Access Management
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Secure your workforce with sophisticated SSO, biometric MFA, and
              granular permission matrices. Manage global access from a
              single source of truth.
            </p>

            <div className="mt-8 space-y-6">
              {points.map((point, index) => (
                <div
                  key={point.title}
                  className="fade-up flex gap-3.5"
                  style={{ animationDelay: `${0.1 + index * 0.12}s` }}
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

          <div
            className="fade-up overflow-hidden rounded-2xl border border-[#ECECF4] shadow-lg"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/security-compliance/identity-access.png"
              alt="Identity & Access Management dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
