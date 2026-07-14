"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const TABLE_DATA = [
  {
    feature: "View marketing page",
    public: "Yes",
    business: "Yes",
    enterprise: "Yes",
    admin: "Yes",
  },
  {
    feature: "Aggregate dashboards",
    public: "Preview",
    business: "Limited",
    enterprise: "Full",
    admin: "Full",
  },
  {
    feature: "Source-linked evidence drawer",
    public: "—",
    business: "Limited",
    enterprise: "Full",
    admin: "Role-based",
  },
  {
    feature: "Review-before-sync",
    public: "—",
    business: "Limited",
    enterprise: "Full",
    admin: "Required",
  },
  {
    feature: "Export packs (CSV / PDF / API)",
    public: "—",
    business: "Plan-based",
    enterprise: "Advanced",
    admin: "Admin-controlled",
  },
  {
    feature: "Custom governance policy",
    public: "—",
    business: "No",
    enterprise: "Available",
    admin: "Enterprise-only",
  },
];

function renderValue(value: string) {
  if (value === "Yes") {
    return (
      <span className="inline-flex items-center gap-1 font-semibold text-[#4F5BD5] dark:text-[#8A94F8]">
        <FiCheck className="h-4 w-4" />
        Yes
      </span>
    );
  }

  if (value === "—") {
    return (
      <span className="text-gray-400 dark:text-gray-500">
        —
      </span>
    );
  }

  const color =
    value === "Limited" || value === "Plan-based"
      ? "text-[#C48911]"
      : "text-[#4F5BD5] dark:text-[#8A94F8]";

  return (
    <span className={`font-medium ${color}`}>
      {value}
    </span>
  );
}

export default function PermissionsTableSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView();
  const { ref: titleRef, inView: titleIn } = useInView();
  const { ref: subRef, inView: subIn } = useInView();
  const { ref: tableRef, inView: tableIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ptFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .pt-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .pt-visible{
          animation:ptFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pt-table{
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .pt-table:hover{
          transform:translateY(-4px);
          box-shadow:0 24px 50px rgba(79,91,213,.08);
        }

        tbody tr{
          transition:background .25s ease;
        }

        tbody tr:hover{
          background:rgba(79,91,213,.03);
        }

        .dark tbody tr:hover{
          background:rgba(255,255,255,.03);
        }

        @media(prefers-reduced-motion:reduce){
          .pt-hidden,
          .pt-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .pt-table:hover{
            transform:none;
          }
        }
      `}</style>

      <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`pt-hidden ${
                badgeIn ? "pt-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Admin Controls & Plan Gates
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`pt-hidden ${
                titleIn ? "pt-visible" : ""
              } text-[clamp(30px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Who can view, approve,
              export, and sync
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`pt-hidden ${
                subIn ? "pt-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Advanced governance, exports, and custom policy are
              Enterprise-gated. Everything stays role-based and audited.
            </p>

          </div>

          {/* Table */}

          <div
            ref={tableRef}
            style={{ animationDelay: ".2s" }}
            className={`pt-hidden ${
              tableIn ? "pt-visible" : ""
            } mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#151233]`}
          >
            <div className="overflow-x-auto">

              <table className="pt-table min-w-[820px] w-full">

                <thead className="bg-[#F3F4FA] dark:bg-white/5">

                  <tr>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#172046] dark:text-white">
                      Feature / Action
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#172046] dark:text-white">
                      Public
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#172046] dark:text-white">
                      Business
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#4F5BD5]">
                      Enterprise
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#4F5BD5]">
                      Admin / Reviewer
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {TABLE_DATA.map((row) => (

                    <tr
                      key={row.feature}
                      className="border-t border-gray-100 dark:border-white/10"
                    >

                      <td className="px-6 py-4 font-medium text-[#172046] dark:text-white">
                        {row.feature}
                      </td>

                      <td className="px-6 py-4">
                        {renderValue(row.public)}
                      </td>

                      <td className="px-6 py-4">
                        {renderValue(row.business)}
                      </td>

                      <td className="px-6 py-4">
                        {renderValue(row.enterprise)}
                      </td>

                      <td className="px-6 py-4">
                        {renderValue(row.admin)}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}