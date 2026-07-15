import Link from "next/link";
import {
  MessageCircle,
  Sparkles,
  ShieldCheck,
  SquareCheck,
  Code2,
  Activity,
} from "lucide-react";

const items = [
  {
    title: "Enterprise communication demand",
    description:
      "Customers need secure, context-aware communication workflows — a durable, real problem to solve.",
    icon: MessageCircle,
  },
  {
    title: "AI-governed collaboration",
    description:
      "Meeting summaries, decision tracking, and follow-ups as governed, human-reviewed capabilities.",
    icon: Sparkles,
    link: { href: "/ai-meetings", label: "AI Meeting Summaries" },
  },
  {
    title: "Admin & security readiness",
    description:
      "Admin controls, policy management, roles, and audit — with Trust Center routes for buyers.",
    icon: ShieldCheck,
    link: { href: "/trust-center", label: "Trust Center" },
  },
  {
    title: "Deployment support",
    description:
      "Onboarding, implementation guidance, enablement materials, and customer success alignment.",
    icon: SquareCheck,
  },
  {
    title: "Integration opportunities",
    description:
      "APIs, webhooks, developer docs, and connected workflow opportunities.",
    icon: Code2,
    link: { href: "/developer-docs", label: "Developer Docs" },
  },
  {
    title: "Customer retention value",
    description:
      "Support adoption, workflow rollout, training, and expansion over time.",
    icon: Activity,
  },
];

export default function WhyPartner() {
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
              Why Partner With Zoiko Sema
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Real customer demand, governed product, clear enablement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Partners help teams adopt secure, context-aware communication —
              with the trust proof enterprise buyers expect.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
                    >
                      {item.link.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
