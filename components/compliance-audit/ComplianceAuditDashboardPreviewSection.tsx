"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual dashboard preview image path, e.g. "/Images/compliance-audit-dashboard.webp"
const DASHBOARD_IMAGE_SRC = "/Images/compliance-audit-dashboard.webp";

export default function ComplianceAuditDashboardPreviewSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caDashUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-dash-hidden { opacity: 0; transform: translateY(20px); }
        .ca-dash-visible { animation: caDashUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caDashImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ca-dash-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .ca-dash-img-visible { animation: caDashImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ca-dash-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ca-dash-img-wrap:hover { transform: translateY(-6px); }
        .ca-dash-img-wrap img { transition: box-shadow .3s ease; }
        .ca-dash-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.3); }

        @media (prefers-reduced-motion: reduce) {
          .ca-dash-hidden, .ca-dash-img-hidden { opacity: 1 !important; transform: none !important; }
          .ca-dash-visible, .ca-dash-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <div ref={headRef} className={`ca-dash-hidden ${headIn ? "ca-dash-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Audit dashboard preview
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Records, states, owners, and exports
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Filter by status to see how records move from capture to
              export. Counts use neutral record language — never employee
              scoring.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`ca-dash-img-hidden ${imgIn ? "ca-dash-img-visible" : ""} ca-dash-img-wrap mt-10 overflow-hidden rounded-2xl`}
          >
            <img
              src={DASHBOARD_IMAGE_SRC}
              alt="Compliance workspace records dashboard filtered by status"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
