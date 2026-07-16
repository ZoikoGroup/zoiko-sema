import { Zap, Eye, RefreshCcw, Bell } from "lucide-react";

const features = [
  { label: "Live Feed", icon: Zap },
  { label: "Global Visibility", icon: Eye },
  { label: "Handoff Health", icon: RefreshCcw },
  { label: "Smart Alerts", icon: Bell },
];

export default function TheRemoteHub() {
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

      <section className="bg-[#0B1030] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-white md:text-[38px]">
              The Remote Hub
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#C8C8C8]">
              Centralize the pulse of your distributed organization. Monitor
              &apos;Team Feeds&apos; that aggregate updates, document
              changes, and critical blockers in real-time without needing to
              join a single call.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="fade-up flex items-center gap-2.5"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <Icon size={17} className="shrink-0 text-[#8FA3FF]" strokeWidth={2} />
                    <span className="text-[15px] font-medium text-[#DDE1F0]">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/use-cases/remote-hybrid-work/remote-hub.png"
              alt="Remote hub monitor dashboard"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
