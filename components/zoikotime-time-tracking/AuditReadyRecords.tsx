import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Granular Project Cost Tracking",
  "One-Click Compliance Export",
  "Automated Overtime Verification",
];

export default function AuditReadyRecords() {
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
          <div
            className="fade-up overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
          >
            <img
              src="/zoikotime/time-tracking/audit-ready-ledger.png"
              alt="Time record ledger dashboard"
              className="w-full object-cover"
            />
          </div>

          <div className="fade-up" style={{ animationDelay: ".15s" }}>
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Audit-Ready Record Management
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Maintain a complete, verified ledger of every workforce event
              with granular audit trails and project mapping. Our system
              creates an immutable chain of custody for every hour worked.
            </p>

            <div className="mt-6 space-y-3">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="fade-up flex items-center gap-2.5"
                  style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#4F63F0]" strokeWidth={2} />
                  <span className="text-[15px] font-medium text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
