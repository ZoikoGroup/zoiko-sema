"use client";

import { User, Users, LayoutGrid, ShieldCheck, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual roles image path, e.g. "/Images/sema-zoikotime-roles.webp"
const ROLES_IMAGE_SRC = "/Images/sema-zoikotime-roles.webp";

interface RoleCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    icon: User,
    title: "Contributor",
    description: "Own tasks, source links, personal work items, and accepted signals.",
  },
  {
    icon: Users,
    title: "Manager",
    description: "Team work signals, follow-up health, and decision-to-work visibility.",
  },
  {
    icon: LayoutGrid,
    title: "Workspace admin",
    description: "Controls, roles, retention, integrations, and policy gates.",
  },
  {
    icon: ShieldCheck,
    title: "Auditor / compliance",
    description: "Source-linked audit trails and exports where permitted.",
  },
];

export default function SemaZoikoTimeRolesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.15);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztRolesUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-roles-hidden { opacity: 0; transform: translateY(20px); }
        .szt-roles-visible { animation: sztRolesUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztRolesStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-roles-card {
          opacity: 0;
          animation: sztRolesStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .szt-roles-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
          border-color: rgba(79,99,240,0.3);
        }

        @keyframes sztRolesImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .szt-roles-img-hidden { opacity: 0; transform: translateY(28px) scale(.98); }
        .szt-roles-img-visible { animation: sztRolesImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }
        .szt-roles-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .szt-roles-img-wrap:hover { transform: translateY(-6px); }
        .szt-roles-img-wrap img { transition: box-shadow .3s ease; }
        .szt-roles-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.3); }

        @media (prefers-reduced-motion: reduce) {
          .szt-roles-hidden, .szt-roles-img-hidden { opacity: 1 !important; transform: none !important; }
          .szt-roles-visible, .szt-roles-img-visible { animation: none !important; }
          .szt-roles-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-roles-hidden ${headIn ? "szt-roles-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Roles, permissions & plan gates
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Everyone sees the right layer
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Role-based visibility keeps work accountable and private. Advanced
              capabilities are plan-gated for Business and Enterprise.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-roles-hidden ${gridIn ? "szt-roles-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
          >
            {roles.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="szt-roles-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div
            ref={imgRef}
            className={`szt-roles-img-hidden ${imgIn ? "szt-roles-img-visible" : ""} szt-roles-img-wrap mt-10 overflow-hidden rounded-2xl`}
          >
            <img
              src={ROLES_IMAGE_SRC}
              alt="Contributor, manager, admin, and auditor roles connected to role-based visibility"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
