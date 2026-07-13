"use client";

import {
  ShoppingCart,
  Bell,
  Code2,
  GraduationCap,
  FileText,
  Shield,
  LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";

interface Route {
  icon: LucideIcon;
  title: string;
  quote: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const routes: Route[] = [
  {
    icon: ShoppingCart,
    title: "Buyer",
    quote: "What is Zoiko Sema and who is behind it?",
    primary: { label: "Product Overview", href: "/product-overview" },
    secondary: { label: "Contact Sales", href: "/contact" },
  },
  {
    icon: Bell,
    title: "Current customer",
    quote: "Where do I get support or find a policy?",
    primary: { label: "Help Center", href: "/resources" },
    secondary: { label: "Contact", href: "/contact" },
  },
  {
    icon: Code2,
    title: "Partner prospect",
    quote: "Is there a partnership path across Zoiko?",
    primary: { label: "Partners", href: "/partners" },
    secondary: { label: "Partner Inquiry", href: "/contact" },
  },
  {
    icon: GraduationCap,
    title: "Candidate",
    quote: "What's the company context before I apply?",
    primary: { label: "Careers", href: "/careers" },
    secondary: { label: "About Sema", href: "/about" },
  },
  {
    icon: FileText,
    title: "Press / analyst",
    quote: "Where's official positioning and media contact?",
    primary: { label: "Press", href: "/press" },
    secondary: { label: "Contact", href: "/contact" },
  },
  {
    icon: Shield,
    title: "Legal / security reviewer",
    quote: "Where are trust, privacy, and DPA resources?",
    primary: { label: "Trust Center", href: "/trust-center" },
    secondary: { label: "Contact", href: "/contact" },
  },
];

export default function ZoikoGroupFindRouteSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgRouteUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-route-hidden { opacity: 0; transform: translateY(20px); }
        .zg-route-visible { animation: zgRouteUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes zgRouteStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-route-card {
          opacity: 0;
          animation: zgRouteStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .zg-route-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
          border-color: rgba(79,99,240,0.3);
        }

        .zg-route-primary {
          background: #4F63F0;
          transition: transform .18s ease, background .18s ease;
        }
        .zg-route-primary:hover { transform: translateY(-2px); background: #3E51DE; }

        .zg-route-secondary {
          transition: transform .18s ease, background-color .18s ease, border-color .18s ease;
        }
        .zg-route-secondary:hover {
          transform: translateY(-2px);
          background-color: #F3F2FD;
          border-color: rgba(79,99,240,0.4);
        }

        @media (prefers-reduced-motion: reduce) {
          .zg-route-hidden { opacity: 1 !important; transform: none !important; }
          .zg-route-visible { animation: none !important; }
          .zg-route-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section id="find-your-route" className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`zg-route-hidden ${headIn ? "zg-route-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Who should use this page
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Find your route
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Pick the description that fits — each points to the right primary and
              secondary destination.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`zg-route-hidden ${gridIn ? "zg-route-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {routes.map(({ icon: Icon, title, quote, primary, secondary }, i) => (
              <div
                key={title}
                className="zg-route-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] italic leading-relaxed text-gray-500">
                  "{quote}"
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={primary.href}
                    className="zg-route-primary rounded-lg px-3.5 py-2 text-xs font-semibold text-white"
                  >
                    {primary.label}
                  </a>
                  <a
                    href={secondary.href}
                    className="zg-route-secondary rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700"
                  >
                    {secondary.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
