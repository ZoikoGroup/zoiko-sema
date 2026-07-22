"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EcosystemCard {
  logo: string;
  description: string;
  action: string;
  link: string;
}

const leftCards: EcosystemCard[] = [
  {
    logo: "/about/zoikotime.png",
    description:
      "Related workforce and customer context that can connect to Sema for relevant customers.",
    action: "Learn about ZoikoTime",
    link: "/sema-zoikotime",
  },
  {
    logo: "/about/zoikoone.png",
    description:
      "Corporate and technology company background lives on About Zoiko Tech.",
    action: "About Zoiko Tech",
    link: "/about-zoikotech",
  },
];

const rightCards: EcosystemCard[] = [
  {
    logo: "/about/zoikocloud.png",
    description:
      "Group-wide compute and structure lives on the Zoiko Group page.",
    action: "Zoiko Group",
    link: "/zoiko-group",
  },
  {
    logo: "/about/zoikomail.png",
    description:
      "Continue to Help Center, Trust Center, Blog, and Product Updates.",
    action: "Browse Resources",
    link: "/resources",
  },
];

export default function WhereSemaFitsSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          ZoikoTime &amp; ecosystem context
        </p>
        <h2 className="mx-auto text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          Where Sema fits in the Zoiko ecosystem
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
          Sema is the work communication platform. ZoikoTime can provide workforce and customer
          context where relevant, and the wider Zoiko companies provide corporate background.
        </p>

        <div className="mt-10 grid grid-cols-1 items-center gap-5 text-left lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="grid grid-cols-1 gap-5">
            {leftCards.map(({ logo, description, action, link }) => (
              <div
                key={logo}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <img src={logo} alt="logo" />
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
                <Link
                  href={link}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/about/context.png"
              alt="Team on a Sema video call"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-5">
            {rightCards.map(({ logo, description, action, link }) => (
              <div
                key={logo}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <img src={logo} alt="logo" />
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
                <Link
                  href={link}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
