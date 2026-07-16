import Link from "next/link";
import { FileText, ShieldCheck, BarChart3 } from "lucide-react";

const items = [
  {
    title: "Security Whitepapers",
    description: "Deep technical dives into our architecture.",
    icon: FileText,
    href: "/security-policy",
  },
  {
    title: "Certifications",
    description: "SOC2 Type II, HIPAA, ISO 27001, GDPR.",
    icon: ShieldCheck,
    href: "/trust-center",
  },
  {
    title: "Status Reports",
    description: "Real-time infrastructure health metrics.",
    icon: BarChart3,
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-white md:text-[38px]">
              Built on Operational Trust
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#9AA3C0]">
              Transparency is our core value. Visit our Trust Center for the
              latest security documentation and uptime reports.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="fade-up rounded-2xl border border-white/10 bg-[#171F38] p-7 text-center transition duration-300 hover:-translate-y-2 hover:bg-[#1D2749]"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <Icon size={20} className="text-white" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#9AA3C0]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
