import { Check } from "lucide-react";

const checklist = [
  "Partner onboarding checklist",
  "Product training",
  "Demo resources",
  "Positioning guidance",
  "Technical documentation",
  "Implementation playbooks",
  "Co-marketing review",
  "Support escalation path",
];

export default function PartnerEnablement() {
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
          <div className="fade-up">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Partner Enablement
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Support to help you deliver
            </h2>

            <p className="mt-4 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Qualified partners may receive structured onboarding and
              enablement after acceptance — presented professionally, never
              overpromised.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7]">
                    <Check size={13} className="text-[#16A34A]" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-[#374151]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/partners/Partner-Enablement.webp"
              alt="Partner enablement support"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
