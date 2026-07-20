"use client"
import { Check } from "lucide-react";

interface Plan {
  eyebrow: string;
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  action: string;
  featured?: boolean;
  link:string
}

const plans: Plan[] = [
  {
    eyebrow: "Individual",
    name: "Free",
    price: "",
    description: "Personal documents with basic templates and limited history.",
    features: [
      "Basic documents",
      "Personal templates",
      "Basic collaboration",
      "Limited version history",
      "Standard export",
    ],
    action: "Start free",
    link:"/start-free",
  },
  {
    eyebrow: "Team",
    name: "$12",
    price: "$12",
    priceSuffix: "/user/mo",
    description:
      "Collaborative documents with team templates and standard versions.",
    features: [
      "Unlimited documents",
      "Team templates",
      "Review workflows",
      "Standard version history",
      "Basic guest access",
      "PDF, DOCX export",
    ],
    action: "Start free",
    featured: true,
    link:"/start-free",
  },
  {
    eyebrow: "Business",
    name: "$28",
    price: "$28",
    priceSuffix: "/user/mo",
    description:
      "Advanced governance, approvals, AI policy, and extended access controls.",
    features: [
      "Everything in Team",
      "Approval workflows",
      "Advanced AI policy",
      "Extended version history",
      "Advanced guest controls",
      "Audit log access",
    ],
    action: "Start free",
    link:"/start-free",
  },
  {
    eyebrow: "Enterprise",
    name: "Custom",
    price: "",
    description:
      "Custom governance, legal hold, data residency, and dedicated support.",
    features: [
      "Everything in Business",
      "Legal hold & retention",
      "DLP & classification",
      "Custom AI controls",
      "Data residency options",
      "Dedicated support",
    ],
    action: "Talk to sales",
    link:"/contact",
  },
];

export default function PlansPricingSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
          style={{ animationDelay: "0ms" }}
        >
          Plans &amp; pricing
        </p>
        <h2
          className="fade-in-item mt-4 text-4xl font-extrabold leading-snug text-gray-900 sm:text-[42px]"
          style={{ animationDelay: "80ms" }}
        >
          Start free. Scale with governance.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(
            (
              { eyebrow, price, priceSuffix, name, description, features, action, featured,link },
              i
            ) => (
              <div
                key={eyebrow}
                className={`fade-in-item flex flex-col rounded-2xl p-6 ${
                  featured
                    ? "bg-[#6C5CE7] text-white shadow-[0px_8px_24px_#6C4FE080] lg:-translate-y-3"
                    : "border border-gray-200 bg-white"
                }`}
                style={{ animationDelay: `${180 + i * 100}ms` }}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-[1.5px] ${
                    featured ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  {eyebrow}
                </p>

                <div className="mt-3 flex items-end gap-1">
                  <span
                    className={`text-3xl font-extrabold ${
                      featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {price || name}
                  </span>
                  {priceSuffix && (
                    <span
                      className={`mb-1 text-xs ${
                        featured ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {priceSuffix}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {description}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-xs ${
                        featured ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          featured ? "text-white" : "text-green-600"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <a href={link}>
                <button
                  className={`mt-7 h-11 w-full rounded-xl text-sm font-semibold transition ${
                    featured
                      ? "bg-white text-[#6C5CE7] hover:bg-gray-100"
                      : "bg-[#14163A] text-white hover:bg-[#1E2050]"
                  }`}
                >
                  {action}
                </button></a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
