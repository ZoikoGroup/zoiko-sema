import { FileCheck2 } from "lucide-react";

export default function AuditCompliance() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
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
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Audit & Compliance
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Simplify audit readiness with automated evidence collection and
              real-time activity timelines. Stop manual reporting and start
              continuous compliance.
            </p>

            <div
              className="fade-up mt-8 flex items-start gap-4 rounded-2xl border border-[#ECECF4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: ".15s" }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                <FileCheck2 size={20} className="text-[#4F63F0]" strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1F2937]">
                  Automated Evidence Collection
                </h3>
                <p className="mt-1.5 text-[15px] leading-7 text-[#6B7280]">
                  Linked directly to your security controls for instant audit
                  exports.
                </p>
              </div>
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl border border-[#ECECF4] shadow-lg"
            style={{ animationDelay: ".25s" }}
          >
            <img
              src="/security-compliance/audit-compliance.png"
              alt="Audit and compliance evidence timeline"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
