const points = [
  {
    title: "Source disclosure",
    description: "Systems, coverage, missing data, and rule/model version shown.",
  },
  {
    title: "Permitted outcomes",
    description: "Confirm, correct, dismiss, reassign, redact, or escalate.",
  },
  {
    title: "Prohibited automation",
    description: "No automatic discipline, termination, pay denial, or ranking from AI alone.",
  },
];

export default function HumanInCommandAI() {
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

      <section
        className="px-6 py-20 sm:px-10 lg:px-16"
        style={{
          background: "linear-gradient(160deg, #171B4A 0%, #201A4D 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FA3FF]" />
              Human-in-Command AI and Decision Governance
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white md:text-[34px]">
              AI classifies and explains. A named human decides.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div
              className="fade-up overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              style={{ animationDelay: ".1s" }}
            >
              <img
                src="/zoikotime/overview/human-in-command.png"
                alt="Team video call review"
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              {points.map((point, index) => (
                <div
                  key={point.title}
                  className="fade-up flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-base font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9AA3C0]">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
