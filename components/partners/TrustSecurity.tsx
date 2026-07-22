import Link from "next/link";
import { ShieldCheck, Lock, Sparkles, Activity } from "lucide-react";

const items = [
  {
    title: "Security",
    description: "Security posture documented for buyer review.",
    icon: ShieldCheck,
    href: "/security-policy",
    label: "Trust Center / Security Policy",
  },
  {
    title: "Privacy",
    description: "Privacy Notice, DPA, and data handling routes.",
    icon: Lock,
    href: "/privacy-notice",
    label: "Privacy Notice / DPA",
  },
  {
    title: "AI governance",
    description: "AI features are governed, reviewable, and admin-controlled.",
    icon: Sparkles,
    href: "/ai-use-policy",
    label: "AI Use Policy",
  },
  {
    title: "System status",
    description: "Current service availability and incident transparency.",
    icon: Activity,
    href: "/status",
    label: "System Status",
  },
];

export default function TrustSecurity() {
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
              Trust, Security & Governance
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Enterprise readiness partners can stand behind
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Point customers to the documentation that backs secure,
              governed, responsibly-assisted communication.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF]">
                    <Icon className="text-[#4F63F0]" size={22} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#1F2937]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
                  >
                    {item.label}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
