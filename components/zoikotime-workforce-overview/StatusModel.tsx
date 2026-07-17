const statuses = [
  {
    label: "Working Session Recorded",
    color: "#16A34A",
    description: "An approved source reports a work session within the configured period.",
    caveat: "Never implies: productivity, engagement, or exact physical presence.",
  },
  {
    label: "Scheduled, No Record Yet",
    color: "#2563EB",
    description: "Schedule exists but a sufficient work record is not yet available.",
    caveat: "Never implies: lateness or absence before the policy threshold.",
  },
  {
    label: "On Approved Break",
    color: "#5B5FEF",
    description: "A break record exists within configured policy.",
    caveat: "Never implies: a negative performance score or ranking.",
  },
  {
    label: "Approved Leave / Unavailable",
    color: "#A78BFA",
    description: "An approved HR/schedule state permits minimum necessary visibility.",
    caveat: "Never implies: medical, family, or disability detail to general viewers.",
  },
  {
    label: "Needs Review",
    color: "#D97706",
    description: "Sources conflict, a required record is missing, or a policy exception triggers.",
    caveat: "Never implies: misconduct, fraud, or automatic adverse action.",
  },
  {
    label: "Data Unavailable",
    color: "#DC2626",
    description: "Integration, permission, mapping, or network issue prevents reliable status.",
    caveat: "Never implies: zero hours, absence, or non-compliance.",
  },
  {
    label: "Out Of Scope",
    color: "#9CA3AF",
    description: "Worker/record excluded by purpose, plan, geography, role, or policy.",
    caveat: "Never implies: hidden inclusion or cross-purpose reuse.",
  },
];

export default function StatusModel() {
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
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              Status Model
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Explicit states replace ambiguous &quot;Active now.&quot;
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="space-y-4">
              {statuses.map((status, index) => (
                <div
                  key={status.label}
                  className="fade-up rounded-r-xl border-l-4 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: status.color, animationDelay: `${index * 0.07}s` }}
                >
                  <h3
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: status.color }}
                  >
                    {status.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#374151]">
                    {status.description}
                  </p>

                  <p className="mt-1.5 text-xs italic leading-5 text-[#9CA3AF]">
                    {status.caveat}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="fade-up overflow-hidden lg:sticky lg:top-24"
              style={{ animationDelay: ".2s" }}
            >
              <img
                src="/zoikotime/workforce-overview/status-model.png"
                alt="Team reviewing status states in a meeting"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
