import Link from "next/link";
import { FileText, ShieldCheck, BarChart3 } from "lucide-react";

const items = [
  {
    title: "Security Whitepapers",
    description: "Deep technical dives into our architecture.",
    icon: "/security-and-compliance/security-icon-34.svg",
    href: "/security-policy",
  },
  {
    title: "Certifications",
    description: "SOC2 Type II, HIPAA, ISO 27001, GDPR.",
    icon: "/security-and-compliance/security-icon-40.svg",
    href: "/trust-center",
  },
  {
    title: "Status Reports",
    description: "Real-time infrastructure health metrics.",
    icon: "/security-and-compliance/security-icon-41.svg",
    href: "/trust-center",
  },
];

export default function OperationalTrust() {
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

      <section className="bg-slate-900 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up flex flex-col justify-start items-center gap-6 text-center">
            <h2 className="text-4xl font-extrabold text-white font-['Hanken_Grotesk'] md:text-[40px]">
              Built on Operational Trust
            </h2>

            <p className="max-w-[672px] text-base font-normal text-slate-500 font-['Inter'] leading-6">
              Transparency is our core value. Visit our Trust Center for the latest security
              documentation and uptime reports.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {items.map((item, index) => {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="fade-up w-full p-10 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-center gap-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:outline-white/20"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="flex justify-center items-center">
                    <img src={item.icon} alt={item.title} className="size-9 object-contain" />
                  </div>

                  <div className="pt-2 flex flex-col justify-start items-center w-full">
                    <h3 className="text-center text-white text-base font-normal font-['Hanken_Grotesk'] leading-6">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-col justify-start items-center opacity-70 w-full">
                    <p className="text-center text-white text-base font-normal font-['Inter'] leading-6">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
