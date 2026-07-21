import { Archive } from "lucide-react";

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
          <div className="fade-up flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-4xl font-extrabold text-zinc-900 font-['Hanken_Grotesk'] md:text-[40px]">
                Audit &amp; Compliance
              </h2>
            </div>

            <div className="pb-2 flex flex-col justify-start items-start">
              <p className="max-w-lg text-base font-normal text-zinc-700 font-['Inter'] leading-6">
                Simplify audit readiness with automated evidence collection and real-time
                activity timelines. Stop manual reporting and start continuous compliance.
              </p>
            </div>

            <div
              className="fade-up self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300/30 shadow-xs inline-flex justify-start items-center gap-6"
              style={{ animationDelay: ".15s" }}
            >
              <div className="shrink-0">
                <Archive size={32} className="text-blue-600" strokeWidth={2} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <h3 className="text-base font-bold text-zinc-900 font-['Inter'] leading-6">
                  Automated Evidence Collection
                </h3>
                <p className="text-base font-normal text-zinc-700 font-['Inter'] leading-6">
                  Linked directly to your security controls for instant audit
                  exports.
                </p>
              </div>
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl"
            style={{ animationDelay: ".25s" }}
          >
            <img
              src="/security-and-compliance/audit-compliance-dash.jpg"
              alt="Audit and compliance evidence timeline"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
