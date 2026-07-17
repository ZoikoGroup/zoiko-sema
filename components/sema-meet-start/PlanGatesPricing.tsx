import { Check, Minus } from "lucide-react";

const plans = ["Free", "Pro", "Team", "Business"];

const rows = [
  { capability: "Instant meeting creation", values: [true, true, true, true] },
  { capability: "Waiting room", values: [true, true, true, true] },
  { capability: "Recording + transcript", values: [false, true, true, true] },
  { capability: "AI meeting summary", values: [false, false, true, true] },
  { capability: "Advanced guest controls", values: [false, false, false, true] },
  { capability: "SSO / MFA / SCIM", values: [false, false, false, true] },
  { capability: "Audit + legal hold", values: [false, false, false, true] },
  { capability: "Confidential Mode", values: [false, false, false, true] },
];

const ctas = [
  { label: "Start free", href: "/start-free", primary: false },
  { label: "Upgrade", href: "/pricing", primary: false },
  { label: "Start free", href: "/start-free", primary: false },
  { label: "Get a demo", href: "/get-a-demo", primary: true },
];

export default function PlanGatesPricing() {
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
        <div className="mx-auto max-w-4xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Plan Gates
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Start free. Unlock governance when you need it.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#6B7280]">
              Every gate preserves your setup and returns you to the same
              start flow after an entitlement change — no rebuilding the
              meeting from scratch.
            </p>
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-2xl border border-[#ECECF4] shadow-sm"
            style={{ animationDelay: ".1s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#11163C]">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#9AA3C0]">
                      Capability
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan}
                        className={`px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide ${
                          plan === "Business" ? "text-[#8FA3FF]" : "text-[#9AA3C0]"
                        }`}
                      >
                        {plan}
                        {plan === "Business" && (
                          <span className="mt-0.5 block text-[9px] font-bold normal-case text-[#8FA3FF]">
                            Recommended
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.capability}
                      className={`transition hover:bg-[#F9FAFB] ${
                        index !== rows.length - 1 ? "border-b border-[#ECECF4]" : ""
                      }`}
                    >
                      <td className="px-5 py-4 text-sm font-medium text-[#1F2937]">
                        {row.capability}
                      </td>
                      {row.values.map((value, colIndex) => (
                        <td
                          key={colIndex}
                          className={`px-5 py-4 text-center ${
                            plans[colIndex] === "Business" ? "bg-[#EEF2FF]" : ""
                          }`}
                        >
                          {value ? (
                            <Check size={16} className="mx-auto text-[#16A34A]" strokeWidth={2.5} />
                          ) : (
                            <Minus size={14} className="mx-auto text-[#D1D5DB]" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <td className="px-5 py-5" />
                    {ctas.map((cta, index) => (
                      <td
                        key={cta.label + index}
                        className={`px-5 py-5 text-center ${
                          plans[index] === "Business" ? "bg-[#EEF2FF]" : ""
                        }`}
                      >
                        <a
                          href={cta.href}
                          className={`inline-block rounded-full px-4 py-2 text-xs font-semibold transition ${
                            cta.primary
                              ? "bg-[#4F63F0] text-white hover:bg-[#4053E6]"
                              : "bg-[#EEF2FF] text-[#4F63F0] hover:bg-[#E0E4FD]"
                          }`}
                        >
                          {cta.label}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
