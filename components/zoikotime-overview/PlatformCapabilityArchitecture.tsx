const layers = [
  "Session & Identity Assurance",
  "Time & Activity Verification",
  "Performance Intelligence",
  "Policy & Location Context",
  "Integrity & Anomaly Detection",
  "Evidence Capture & Audit",
];

export default function PlatformCapabilityArchitecture() {
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

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Platform Capability Architecture
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Six connected layers of assurance and evidence.
            </h2>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl  transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/zoikotime/overview/capability-architecture.png"
              alt="Team reviewing a video call presentation"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {layers.map((layer, index) => (
              <div
                key={layer}
                className="fade-up rounded-xl border border-[#ECECF4] bg-white p-5 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${0.2 + index * 0.06}s` }}
              >
                <p className="text-sm font-semibold text-[#1F2937]">{layer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
