import { Terminal, MonitorSmartphone, Box } from "lucide-react";

export default function SDKSamples() {
  const sdks = [
    {
      title: "Node.js",
      command: "npm install @zoiko/sdk",
      icon: MonitorSmartphone,
    },
    {
      title: "Python",
      command: "pip install zoiko-sema",
      icon: Box,
    },
    {
      title: "Zoiko CLI",
      command: "brew install zoiko/cli",
      icon: Terminal,
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

      <section id="sdks" className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="fade-up">
            <h2 className="text-4xl font-semibold text-[#202533]">
              SDKs & Samples
            </h2>

            <p className="mt-4 text-lg text-[#6B7280]">
              Optimized libraries for every major platform.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sdks.map((sdk, index) => {
              const Icon = sdk.icon;

              return (
                <div
                  key={sdk.title}
                  className="fade-up flex items-center gap-5 rounded-2xl border border-[#E7EAF4] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2430]">
                    <Icon size={26} className="text-white" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#202533]">
                      {sdk.title}
                    </h3>

                    <p className="mt-1 font-mono text-sm text-[#6B7280]">
                      {sdk.command}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
