"use client";

import { ShoppingCart, SquareCheck, Code2, ShieldCheck, LayoutList } from "lucide-react";
import { usePartners, PartnerRouteId } from "./PartnersContext";

interface RouteRow {
  id: PartnerRouteId;
  label: string;
  who: string;
  needs: string;
  cta: string;
  icon: typeof ShoppingCart;
  iconBg: string;
}

const rows: RouteRow[] = [
  {
    id: "channel",
    label: "Channel",
    who: "Resellers, service providers, solution sellers.",
    needs: "Sales motion & support capacity.",
    cta: "Apply as Channel Partner",
    icon: ShoppingCart,
    iconBg: "bg-[#C08B1E]",
  },
  {
    id: "implementation",
    label: "Implementation",
    who: "Deployment, onboarding, migration, training specialists.",
    needs: "SaaS delivery capability, enterprise readiness, training capacity.",
    cta: "Apply as Implementation Partner",
    icon: SquareCheck,
    iconBg: "bg-[#1F9D55]",
  },
  {
    id: "technology",
    label: "Technology",
    who: "Integration vendors, API builders, workflow platforms.",
    needs: "Integration concept, technical capability, security review readiness.",
    cta: "Apply as Technology Partner",
    icon: Code2,
    iconBg: "bg-[#5B6EF3]",
  },
  {
    id: "consulting",
    label: "Consulting",
    who: "Governance, regulated workflow, AI, security, change advisors.",
    needs: "Domain expertise, industry focus, customer proof.",
    cta: "Apply as Consulting Partner",
    icon: ShieldCheck,
    iconBg: "bg-[#4338CA]",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    who: "Approved partners with packaged solutions or listings.",
    needs: "Completed review, supported offering, security/product approval.",
    cta: "Request Marketplace Review",
    icon: LayoutList,
    iconBg: "bg-[#6366F1]",
  },
];

export default function CompareRoutes() {
  const { selectRoute } = usePartners();

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

        .route-row{ transition: background-color .2s ease; }
        .route-row:hover{ background-color: #F9FAFF; }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Partner Programs
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Compare partner routes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              What each route is for, what it needs, and how to apply.
              Commercial terms and specific benefits are program-approved.
            </p>
          </div>

          <div className="fade-up mt-14 overflow-hidden rounded-2xl border border-[#ECECF4] shadow-sm" style={{ animationDelay: ".15s" }}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#EEF0FA]">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#4B5563]">
                      Route
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#4B5563]">
                      Who it&apos;s for
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#4B5563]">
                      What it needs
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#4B5563]">
                      How to apply
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => {
                    const Icon = row.icon;

                    return (
                      <tr
                        key={row.id}
                        className={`route-row ${
                          index !== rows.length - 1
                            ? "border-b border-[#ECECF4]"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-lg ${row.iconBg}`}
                            >
                              <Icon className="text-white" size={16} strokeWidth={2} />
                            </span>
                            <span className="font-semibold text-[#1F2937]">
                              {row.label}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-[15px] leading-7 text-[#4B5563]">
                          {row.who}
                        </td>

                        <td className="px-6 py-5 text-[15px] leading-7 text-[#4B5563]">
                          {row.needs}
                        </td>

                        <td className="px-6 py-5">
                          <button
                            onClick={() => selectRoute(row.id)}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
                          >
                            {row.cta}
                            <span aria-hidden>→</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
