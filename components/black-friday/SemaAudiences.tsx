import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    eyebrow: "Business",
    title: "Sema for Business",
    description:
      "Communication, accountability and operational clarity across teams and roles.",
    cta: "Explore Business",
    href: "/business-communication",
    src: "/black-friday/5.png",
    alt: "Colleagues reviewing data on a glass wall in a modern office",
  },
  {
    eyebrow: "Teams",
    title: "Sema for Teams",
    description:
      "Real teams, departments and projects that need one place to coordinate.",
    cta: "Explore Teams",
    href: "/teams-and-groups",
    src: "/black-friday/6.png",
    alt: "Smiling team of professionals standing together with arms crossed",
  },
  {
    eyebrow: "Individuals",
    title: "Sema for You",
    description:
      "For people who want secure audio, video and messaging — without a business account.",
    cta: "Use free",
    href: "/individual-productivity",
    src: "/black-friday/7.png",
    alt: "Smiling professional in a suit standing in a bright office",
  },
] as const;

const RIBBONS = [
  {
    id: "left",
    position: "-left-[35px] sm:-left-[45px] top-[38px] -rotate-[22deg]",
  },
  {
    id: "right",
    position: "-right-[35px] sm:-right-[45px] top-[38px] rotate-[22deg]",
  },
] as const;

export default function SemaAudiences() {
  return (
    <section className="relative w-full overflow-x-hidden border-t border-white/5 bg-[#0A0F1A] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 text-white">
      {/* Corner-positioned Black Friday Badges (Hidden on mobile, safely contained on md+ screens) */}
      {RIBBONS.map((ribbon) => (
        <div
          key={ribbon.id}
          aria-hidden="true"
          className={`pointer-events-none absolute z-35 hidden w-[170px] sm:w-[190px] md:w-[210px] rounded-md bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-4 sm:px-5 py-2.5 sm:py-3 text-center shadow-[0_0_35px_rgba(59,130,246,0.6)] md:block ${ribbon.position}`}
        >
          <p className="whitespace-nowrap text-xs sm:text-sm font-extrabold uppercase leading-4 text-white">
            Black Friday
          </p>
          <p className="whitespace-nowrap text-xs sm:text-sm italic leading-4 text-white/90">
            Sale
          </p>
        </div>
      ))}

      <div className="relative mx-auto max-w-[1300px]">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#4f8bff]">
            <span
              aria-hidden="true"
              className="h-0.5 w-4 sm:w-5 bg-[#4f8bff]"
            />
            Built for the way you work
          </p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight sm:text-4xl">
            One app, right-sized for everyone.
          </h2>
        </div>

        <ul className="mx-auto mt-8 sm:mt-10 grid max-w-[1100px] grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1426] transition-all hover:border-[#3b82f6]/40"
            >
              <div className="relative h-[150px] sm:h-[160px] md:h-[160px] w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.12em] text-[#4f8bff]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold">
                  {card.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 text-white/60">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  {card.cta}
                  <ArrowRight
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#4f8bff]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}