import Link from "next/link";
import { Rocket, ShieldCheck, BookOpenText } from "lucide-react";

export default function DocsCards() {
  const cards = [
    {
      title: "Quickstart",
      description:
        "Get up and running with your first app integration in under 10 minutes.",
      icon: Rocket,
      href: "#quickstart",
    },
    {
      title: "Authentication",
      description:
        "Deep dive into OAuth 2.0, scopes, and securing your enterprise service accounts.",
      icon: ShieldCheck,
      href: "#auth",
    },
    {
      title: "API Reference",
      description:
        "Browse full technical specs for every endpoint, parameter, and response model.",
      icon: BookOpenText,
      href: "#api-example",
    },
  ];

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

      <section id="docs" className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="fade-up block rounded-2xl border border-[#ECECF4] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EEF2FF]">
                  <Icon className="text-[#4F63F0]" size={28} strokeWidth={2} />
                </div>

                <h3 className="mt-8 text-[30px] font-semibold text-[#1F2937]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[17px] leading-8 text-[#6B7280]">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
