export default function ApiExample() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-[#161D34] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}
          <div className="fade-up">
            <span className="inline-flex rounded-lg bg-[#164A3D] px-7 py-2 text-xs font-bold uppercase tracking-[3px] text-[#37D67A]">
              POST
            </span>

            <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
              Create a scheduled meeting
            </h2>

            <p className="mt-8 max-w-xl text-[22px] leading-10 text-[#727A93]">
              Initialize a high-definition meeting room with custom recording
              policies and participant permissions.
            </p>

            {/* OAuth */}
            <div className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#5F667D]">
                OAUTH SCOPES
              </p>

              <div className="mt-5 flex gap-3">
                <span className="rounded-md bg-[#232A44] px-10 py-2 font-mono text-sm text-[#9EA6BC]">
                  meetings:write
                </span>

                <span className="rounded-md bg-[#232A44] px-10 py-2 font-mono text-sm text-[#9EA6BC]">
                  user:profile:read
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="mt-14">
              <div className="grid grid-cols-3 border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-wide text-[#5F667D]">
                <span>Parameter</span>
                <span>Type</span>
                <span>Required</span>
              </div>

              <div className="grid grid-cols-3 border-b border-white/10 py-5 text-lg">
                <span className="font-mono text-[#D8DCEA]">title</span>

                <span className="text-[#7D8498]">string</span>

                <span className="text-white">Required</span>
              </div>

              <div className="grid grid-cols-3 py-5 text-lg">
                <span className="font-mono text-[#D8DCEA]">start_time</span>

                <span className="text-[#7D8498]">ISO8601</span>

                <span className="text-[#7D8498]">Optional</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="fade-up" style={{ animationDelay: ".2s" }}>
            <img
              src="/developer-docs/api.png"
              alt="API Example"
              className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
