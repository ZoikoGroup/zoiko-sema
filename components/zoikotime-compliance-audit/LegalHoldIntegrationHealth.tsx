import { Ban, Share2 } from "lucide-react";

const legalHolds = [
  {
    title: "Project Phoenix Investigation",
    trigger: "Internal Whistleblower",
    label: "DURATION",
    value: "Indefinite",
  },
  {
    title: "EU General Logs",
    trigger: "Rule: GDPR-R-12",
    label: "REMAINING",
    value: "422 Days",
  },
];

const integrations = [
  { name: "Azure AD", status: "ACTIVE", color: "#16A34A", bg: "#DCFCE7" },
  { name: "Workspace", status: "ACTIVE", color: "#16A34A", bg: "#DCFCE7" },
  { name: "Okta", status: "LAGGING", color: "#D97706", bg: "#FEF3C7" },
];

export default function LegalHoldIntegrationHealth() {
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

        .lh-card{ transition: transform .3s ease, box-shadow .3s ease; }
        .lh-card:hover{ transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15,15,40,0.08); }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="lh-card fade-up rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2">
                <Ban size={17} className="text-[#4B5563]" strokeWidth={2} />
                <h3 className="text-sm font-semibold text-[#1F2937]">
                  Legal Hold &amp; Retention
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {legalHolds.map((hold) => (
                  <div
                    key={hold.title}
                    className="flex items-center justify-between rounded-lg bg-[#F3F4F6] px-4 py-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#1F2937]">{hold.title}</p>
                      <p className="mt-1 text-xs text-[#6B7280]">Trigger: {hold.trigger}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#4F63F0]">
                        {hold.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#1F2937]">{hold.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="lh-card fade-up rounded-2xl bg-white p-7 shadow-sm"
              style={{ animationDelay: ".1s" }}
            >
              <div className="flex items-center gap-2">
                <Share2 size={17} className="text-[#4B5563]" strokeWidth={2} />
                <h3 className="text-sm font-semibold text-[#1F2937]">Integration Health</h3>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex flex-col items-center gap-2.5 rounded-xl border border-[#ECECF4] py-5 text-center"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full"
                      style={{ backgroundColor: integration.bg }}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: integration.color }}
                      />
                    </span>

                    <span className="text-xs font-semibold text-[#1F2937]">
                      {integration.name}
                    </span>

                    <span
                      className="flex items-center gap-1 text-[10px] font-bold"
                      style={{ color: integration.color }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: integration.color }}
                      />
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-xs text-[#9CA3AF]">
                Last global sync: 4 minutes ago
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
