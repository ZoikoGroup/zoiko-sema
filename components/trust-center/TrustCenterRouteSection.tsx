"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-route.webp"
const ROUTE_IMAGE_SRC = "/Images/trust-last.webp";

interface RouteCard {
  dotColor: string;
  title: string;
  description: string;
  action: string;
  href: string;
  linkColor: string;
}

const cards: RouteCard[] = [
  {
    dotColor: "bg-blue-500",
    title: "Security overview",
    description: "Browse public controls, access, and admin governance summaries.",
    action: "View security controls",
    href: "/security-policy",
    linkColor: "text-blue-600",
  },
  {
    dotColor: "bg-violet-500",
    title: "Privacy resources",
    description: "Review our Privacy Policy, Cookie Policy, DPA, and data handling approach.",
    action: "View privacy resources",
    href: "/privacy-notice",
    linkColor: "text-violet-600",
  },
  {
    dotColor: "bg-emerald-500",
    title: "System Status",
    description: "Check real-time service health, incidents, and planned maintenance.",
    action: "View System Status",
    href: "/system-status",
    linkColor: "text-emerald-600",
  },
  {
    dotColor: "bg-amber-500",
    title: "Developer Docs",
    description: "API reference, OAuth setup, webhook events, and integration governance.",
    action: "View developer docs",
    href: "/admin-console",
    linkColor: "text-amber-600",
  },
  {
    dotColor: "bg-emerald-500",
    title: "Enterprise review",
    description: "Sales-assisted procurement review, custom questionnaire, and security meeting.",
    action: "Contact sales",
    href: "/contact",
    linkColor: "text-emerald-600",
  },
  {
    dotColor: "bg-gray-500",
    title: "Help Center",
    description: "Self-serve answers for admin, user, and integration questions.",
    action: "Visit Help Center",
    href: "/resources",
    linkColor: "text-gray-700",
  },
];

export default function TrustCenterRouteSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcRouteUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-route-hidden { opacity: 0; transform: translateY(20px); }
        .tc-route-visible { animation: tcRouteUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes tcRouteStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-route-card {
          opacity: 0;
          animation: tcRouteStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .tc-route-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .tc-route-link { transition: color .2s ease, gap .2s ease; }
        .tc-route-link .tc-arrow { transition: transform .2s ease; display: inline-block; }
        .tc-route-link:hover .tc-arrow { transform: translateX(3px); }

        @keyframes tcRouteImgIn {
          from { opacity: 0; transform: translateY(24px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tc-route-img-hidden { opacity: 0; transform: translateY(24px) scale(.98); }
        .tc-route-img-visible { animation: tcRouteImgIn .6s cubic-bezier(.22,1,.36,1) forwards; }
        .tc-route-img-wrap { transition: transform .35s ease; }
        .tc-route-img-wrap:hover { transform: translateY(-6px); }

        @media (prefers-reduced-motion: reduce) {
          .tc-route-hidden, .tc-route-img-hidden { opacity: 1 !important; transform: none !important; }
          .tc-route-visible, .tc-route-img-visible { animation: none !important; }
          .tc-route-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`tc-route-hidden ${headIn ? "tc-route-visible" : ""}`}>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Route every concern to the right team.
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Find the right path whether you are a security reviewer,
              developer, IT administrator, or procurement lead.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`tc-route-hidden ${gridIn ? "tc-route-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {cards.map(({ dotColor, title, description, action, href, linkColor }, i) => (
              <div
                key={title}
                className="tc-route-card rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className={`mb-3 inline-block h-2.5 w-2.5 rounded-full ${dotColor}`} />
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{description}</p>
                <a
                  href={href}
                  className={`tc-route-link mt-4 flex items-center gap-1 text-xs font-semibold ${linkColor}`}
                >
                  {action}
                  <span className="tc-arrow">→</span>
                </a>
              </div>
            ))}
          </div>

          <div
            ref={imgRef}
            className={`tc-route-img-hidden ${imgIn ? "tc-route-img-visible" : ""} tc-route-img-wrap mt-8 overflow-hidden rounded-2xl`}
          >
            <img
              src={ROUTE_IMAGE_SRC}
              alt="Home office desk with security dashboard on monitor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
