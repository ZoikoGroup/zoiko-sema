"use client";

import { Code2, ShoppingCart, SquareCheck, ShieldCheck, UserPlus, LayoutList } from "lucide-react";
import { usePartners, PartnerRouteId } from "./PartnersContext";

interface PartnerType {
  id: PartnerRouteId;
  title: string;
  description: string;
  detail: string;
  cta: string;
  icon: typeof Code2;
  iconBg: string;
}

const partnerTypes: PartnerType[] = [
  {
    id: "technology",
    title: "Technology Partners",
    description:
      "APIs, integrations, connectors, marketplace apps, extensions.",
    detail: "Extend Zoiko Sema into customer systems and workflows.",
    cta: "Explore Technology Partnership",
    icon: Code2,
    iconBg: "bg-[#5B6EF3]",
  },
  {
    id: "channel",
    title: "Channel Partners",
    description: "Organizations that sell, refer, or package Zoiko Sema.",
    detail: "Create revenue and customer acquisition opportunities.",
    cta: "Explore Channel Partnership",
    icon: ShoppingCart,
    iconBg: "bg-[#C08B1E]",
  },
  {
    id: "implementation",
    title: "Implementation Partners",
    description: "Deployment, migration, onboarding, training, adoption.",
    detail: "Help customers launch and adopt Zoiko Sema successfully.",
    cta: "Explore Implementation Partnership",
    icon: SquareCheck,
    iconBg: "bg-[#1F9D55]",
  },
  {
    id: "consulting",
    title: "Consulting Partners",
    description:
      "Governance, change management, security, regulated, AI adoption.",
    detail: "Guide enterprise readiness and controlled rollout.",
    cta: "Explore Consulting Partnership",
    icon: ShieldCheck,
    iconBg: "bg-[#4338CA]",
  },
  {
    id: "referral",
    title: "Referral Partners",
    description: "Individuals or firms introducing qualified opportunities.",
    detail: "Refer buyer demand with a simple qualification path.",
    cta: "Submit Referral Interest",
    icon: UserPlus,
    iconBg: "bg-[#0D9488]",
  },
  {
    id: "marketplace",
    title: "Marketplace Partners",
    description: "Listing, packaged solutions, or marketplace visibility.",
    detail: "Support discovery and buyer confidence.",
    cta: "Explore Marketplace Route",
    icon: LayoutList,
    iconBg: "bg-[#6366F1]",
  },
];

export default function PartnerTypes() {
  const { selectedRoute, selectRoute } = usePartners();

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

      <section id="partner-types" className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Partner Types
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Choose the route that fits
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Select your path to see it pre-filled in the application below.
              Each route is reviewed for fit — selection isn&apos;t approval.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              const isSelected = selectedRoute === type.id;

              return (
                <div
                  key={type.id}
                  className={`fade-up rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg ${
                    isSelected
                      ? "border-[#4F63F0] ring-2 ring-[#4F63F0]/20"
                      : "border-[#ECECF4]"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${type.iconBg}`}
                  >
                    <Icon className="text-white" size={24} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">
                    {type.description}
                  </p>

                  <p className="mt-2 text-[15px] leading-7 text-[#6B7280]">
                    {type.detail}
                  </p>

                  <button
                    onClick={() => selectRoute(type.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
                  >
                    {type.cta}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
