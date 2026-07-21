import { STATUS_STYLES, UpdateStatus } from "./statusStyles";

const legend: { status: UpdateStatus; description: string }[] = [
  { status: "Announced", description: "approved, not yet usable" },
  { status: "Beta", description: "opt-in, feedback expected" },
  { status: "Rolling out", description: "phased delivery underway" },
  { status: "Available", description: "usable now if eligible" },
  { status: "Deprecated", description: "supported temporarily" },
  { status: "Retired", description: "no longer available" },
];

export default function StatusLegend() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Status Legend
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              What each status actually means.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {legend.map((item, index) => {
              const style = STATUS_STYLES[item.status];

              return (
                <div
                  key={item.status}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <span
                    className="w-28 shrink-0 rounded-full px-3 py-1 text-center text-xs font-bold"
                    style={{ backgroundColor: style.bg, color: style.color }}
                  >
                    {item.status}
                  </span>
                  <span className="text-sm text-[#4B5563]">{item.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
