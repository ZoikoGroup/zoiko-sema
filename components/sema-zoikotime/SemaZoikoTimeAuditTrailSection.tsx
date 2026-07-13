"use client";

import { CheckSquare, List, Clock, Star, LayoutGrid, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual audit trail image path, e.g. "/Images/sema-zoikotime-audit-trail.webp"
const AUDIT_IMAGE_SRC = "/Images/sema-zoikotime-audit-trail.webp";

interface TrailLink {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const links: TrailLink[] = [
  {
    icon: CheckSquare,
    title: "Decision trail",
    description: "Decisions linked to meetings, owners, and status history.",
    action: "Decision Tracking",
    href: "/team-decision-tracking",
  },
  {
    icon: List,
    title: "Action item trail",
    description: "Assignment history, acceptance, and completion evidence.",
    action: "View Tasks",
    href: "/tasks",
  },
  {
    icon: Clock,
    title: "Time / work trail",
    description: "Verified work signals with role-based visibility & source.",
    action: "View ZoikoTime",
    href: "/zoikotime-customers",
  },
  {
    icon: Star,
    title: "AI review trail",
    description: "Where AI summaries were reviewed before sharing or assignment.",
    action: "Responsible AI",
    href: "/ai-use-policy",
  },
  {
    icon: LayoutGrid,
    title: "Retention & export",
    description: "Admin-managed retention, export, and archive states.",
    action: "Admin Console",
    href: "/admin-console",
  },
];

export default function SemaZoikoTimeAuditTrailSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztAuditUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-audit-hidden { opacity: 0; transform: translateY(20px); }
        .szt-audit-visible { animation: sztAuditUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztAuditImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .szt-audit-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .szt-audit-img-visible { animation: sztAuditImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        .szt-audit-row {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .szt-audit-row:hover {
          transform: translateX(4px);
          background-color: #F3F2FD;
          border-color: rgba(79,99,240,0.3);
        }
        .szt-audit-row .szt-arrow { transition: transform .2s ease; display: inline-block; }
        .szt-audit-row:hover .szt-arrow { transform: translateX(3px); }

        .szt-audit-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .szt-audit-img-wrap:hover { transform: translateY(-6px); }
        .szt-audit-img-wrap img { transition: box-shadow .3s ease; }
        .szt-audit-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.25); }

        @media (prefers-reduced-motion: reduce) {
          .szt-audit-hidden, .szt-audit-img-hidden { opacity: 1 !important; transform: none !important; }
          .szt-audit-visible, .szt-audit-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`szt-audit-hidden ${copyIn ? "szt-audit-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Compliance & audit
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              Prove who owned what, and why
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Decisions, action items, and verified work all carry source
              links — so audit and compliance teams can trace outcomes with
              role-based visibility.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              {links.map(({ icon: Icon, title, description, action, href }) => (
                <a
                  key={title}
                  href={href}
                  className="szt-audit-row flex items-center justify-between gap-3 rounded-xl border border-transparent bg-[#F7F7FC] px-4 py-3.5"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-semibold text-gray-800">
                        {title}
                      </span>
                      <span className="block text-[12px] text-gray-500">
                        {description}
                      </span>
                    </span>
                  </span>
                  <span className="szt-arrow shrink-0 text-[#4F63F0]">
                    {action} →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            ref={imgRef}
            className={`szt-audit-img-hidden ${imgIn ? "szt-audit-img-visible" : ""} szt-audit-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={AUDIT_IMAGE_SRC}
              alt="Audit trail linking source meeting, decision, work signal, and audit view"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
