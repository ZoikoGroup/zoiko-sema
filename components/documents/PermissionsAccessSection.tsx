"use client"
import { Users, Globe, Eye, ShieldAlert, LucideIcon } from "lucide-react";

interface AccessItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const accessItems: AccessItem[] = [
  {
    icon: Users,
    title: "Named internal roles",
    description: "Viewer, Commenter, Editor, Approver, Owner",
  },
  {
    icon: Globe,
    title: "External guest access",
    description: "Domain-scoped, expiry, download controls",
  },
  {
    icon: Eye,
    title: "Published view",
    description: "Read-only public page, separate from editor",
  },
  {
    icon: ShieldAlert,
    title: "Emergency revoke",
    description: "Admin revokes all external access instantly",
  },
];

export default function PermissionsAccessSection() {
  return (
    <section className="bg-[#12163A] px-6 py-20 sm:px-10 lg:px-16">
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p
            className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#A98CF0]"
            style={{ animationDelay: "0ms" }}
          >
            Permissions &amp; access
          </p>
          <h2
            className="fade-in-item mt-4 text-4xl font-extrabold leading-tight text-white sm:text-[42px]"
            style={{ animationDelay: "80ms" }}
          >
            Control who sees,
            <br />
            edits, and shares.
          </h2>
          <p
            className="fade-in-item mt-5 max-w-md text-sm leading-relaxed text-[#B9BEDA]"
            style={{ animationDelay: "160ms" }}
          >
            Role-based access at the document level. Guest collaboration with
            expiry and revocation. Emergency revoke for security incidents.
            Every change is auditable.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {accessItems.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="fade-in-item flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                style={{ animationDelay: `${240 + i * 90}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6C4FE033] text-[#A98CF0]">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#8890B5]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="fade-in-item overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style={{ animationDelay: "220ms" }}
        >
          <div className="bg-white py-2 px-6">
            <span className="text-sm font-semibold text-gray-800">
              Role &amp; permission matrix
            </span>
          </div>
          <img src="/system-status/role.png" alt="image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
