"use client";

import { Shield, Activity, LayoutGrid, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual product image path, e.g. "/zoiko-group/product.png"
const PRODUCT_IMAGE_SRC = "/Images/zoiko-group-product.webp";

interface FitLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

const links: FitLink[] = [
  { icon: Shield, label: "Trust Center & Security Policy", href: "/trust-center" },
  { icon: Activity, label: "System Status", href: "/system-status" },
  { icon: LayoutGrid, label: "Admin Console & DPA", href: "/admin-console" },
];

export default function ZoikoGroupSemaFitSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgFitUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-fit-hidden { opacity: 0; transform: translateY(20px); }
        .zg-fit-visible { animation: zgFitUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes zgFitImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .zg-fit-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .zg-fit-img-visible { animation: zgFitImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        .zg-fit-row {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .zg-fit-row:hover {
          transform: translateX(4px);
          background-color: #F3F2FD;
          border-color: rgba(79,99,240,0.3);
        }
        .zg-fit-row .zg-arrow { transition: transform .2s ease; display: inline-block; }
        .zg-fit-row:hover .zg-arrow { transform: translateX(3px); }

        .zg-fit-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .zg-fit-img-wrap:hover { transform: translateY(-6px); }
        .zg-fit-img-wrap img { transition: box-shadow .3s ease; }
        .zg-fit-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.25); }

        @media (prefers-reduced-motion: reduce) {
          .zg-fit-hidden, .zg-fit-img-hidden { opacity: 1 !important; transform: none !important; }
          .zg-fit-visible, .zg-fit-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`zg-fit-hidden ${copyIn ? "zg-fit-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Zoiko Sema within the group
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              The product you&apos;re likely here for
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Zoiko Sema is the ecosystem&apos;s business communication and
              collaboration product — messaging, meetings, AI summaries,
              channels, and admin-governed workspaces. If you&apos;re evaluating
              Sema, start with the product.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="zg-fit-row flex items-center justify-between gap-3 rounded-xl border border-transparent bg-[#F7F7FC] px-4 py-3.5"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="text-[13.5px] font-semibold text-gray-800">
                      {label}
                    </span>
                  </span>
                  <span className="zg-arrow text-[#4F63F0]">→</span>
                </a>
              ))}
            </div>
          </div>

          <div
            ref={imgRef}
            className={`zg-fit-img-hidden ${imgIn ? "zg-fit-img-visible" : ""} zg-fit-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={PRODUCT_IMAGE_SRC}
              alt="Zoiko Sema business communication workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
