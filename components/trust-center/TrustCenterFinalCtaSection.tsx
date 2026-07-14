"use client";

import { useInView } from "./useInView";

export default function TrustCenterFinalCtaSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes tcCtaUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-cta-hidden { opacity: 0; transform: translateY(20px); }
        .tc-cta-visible { animation: tcCtaUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-cta-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .tc-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(0,0,0,0.3);
          background-color: #f2f2f2;
        }
        .tc-cta-btn-secondary {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .tc-cta-btn-secondary:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          .tc-cta-hidden { opacity: 1 !important; transform: none !important; }
          .tc-cta-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#6034CF] px-6 py-16 text-center sm:px-10 lg:px-16">
        <div ref={ref} className={`tc-cta-hidden ${inView ? "tc-cta-visible" : ""} mx-auto max-w-2xl`}>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[36px]">
            Start free. Deploy securely. Build with confidence.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#D9D6FB]">
            Enterprise security controls, admin governance, and compliance
            readiness in one platform.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#security-review"
              className="tc-cta-btn-primary rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]"
            >
              Request trust documents
            </a>
            <a
              href="/contact"
              className="tc-cta-btn-secondary rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Contact sales for enterprise review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
