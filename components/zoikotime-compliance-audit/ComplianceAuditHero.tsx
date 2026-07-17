import { ShieldCheck } from "lucide-react";

export default function ComplianceAuditHero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
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

        .delay-1{animation-delay:.15s;}
      `}</style>

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#2A2F5C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              Enterprise Governance
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-[44px]">
              Compliance &amp; Audit
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Automated governance, continuous evidence collection, and
              human-reviewed audit trails for the modern enterprise. Scale
              security without increasing operational friction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/get-a-demo"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                View Audit Evidence
              </a>

              <a
                href="/trust-center"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                Explore Compliance
              </a>
            </div>
          </div>

          <div className="fade-up delay-1 relative">
            <div className="overflow-hidden rounded-2xl ">
              <img
                src="/zoikotime/compliance-audit/hero.png"
                alt="Compliance and audit security graphic"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
