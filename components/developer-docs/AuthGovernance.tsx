import { ShieldCheck, KeyRound, FlaskConical } from "lucide-react";

export default function AuthGovernance() {
  const features = [
    {
      icon: KeyRound,
      title: "Key Rotation",
      description: "Automated secrets management with zero downtime.",
    },
    {
      icon: FlaskConical,
      title: "Sandbox Mode",
      description: "Test dangerous actions without impacting production data.",
    },
  ];

  const logs = [
    {
      title: "message.created",
      time: "2s ago",
      color: "bg-[#2ED47A]",
    },
    {
      title: "meeting.started",
      time: "15s ago",
      color: "bg-[#2ED47A]",
    },
    {
      title: "user.invited",
      time: "1m ago",
      color: "bg-[#FF6B6B]",
    },
  ];

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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[2fr_0.95fr]">
          {/* Left Card */}
          <div className="fade-up rounded-3xl border border-[#E8EAF4] bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[#202533]">
                  Auth & Governance
                </h2>

                <p className="mt-3 text-lg text-[#6B7280]">
                  Enterprise-grade security controls for your apps.
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">
                <ShieldCheck
                  className="text-[#2563EB]"
                  size={24}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#E8EAF4]">
              <img
                src="/developer-docs/dashboard.png"
                alt="Auth Dashboard"
                className="size-100 w-full object-cover"
              />
            </div>

            {/* Bottom Cards */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="fade-up rounded-2xl border border-[#E8EAF4] p-6"
                    style={{
                      animationDelay: `${0.2 + index * 0.15}s`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-[#191C1E]" />

                      <h3 className="text-xl font-semibold text-[#191C1E]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-5 text-[15px] leading-7 text-[#45464D]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card */}
          <div
            className="fade-up flex flex-col rounded-3xl bg-[#171F38] p-8"
            style={{ animationDelay: ".2s" }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Live Webhook Log
            </h3>

            <div className="mt-8 space-y-4">
              {logs.map((log) => (
                <div
                  key={log.title}
                  className="flex items-center justify-between rounded-lg bg-[#222A43] px-4 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-8 w-1 rounded-full ${log.color}`} />

                    <span className="font-mono text-sm text-white">
                      {log.title}
                    </span>
                  </div>

                  <span className="text-xs text-[#7D869F]">{log.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-12">
              <button className="w-full text-center text-base font-semibold text-[#AFC4FF] transition hover:text-white">
                View Delivery Logs →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
