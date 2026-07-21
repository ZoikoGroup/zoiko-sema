const maySupport = [
  "Policy-approved time and session verification",
  "Human review queues and evidence",
  "Worker transparency, correction, and challenge",
];

const mustNot = [
  "A hidden employee surveillance system",
  "An automatic disciplinary or termination engine",
  "A default individual ranking or public leaderboard",
];

export default function SystemScopeBoundaries() {
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
              System Scope and Boundaries
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[#1F2937] md:text-[34px]">
              What ZoikoTime may support — and what it must never be
              presented as.
            </h2>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/zoikotime/overview/system-scope.png"
              alt="Global network of workforce data"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm" style={{ animationDelay: ".2s" }}>
              <span className="inline-block rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">
                May support
              </span>

              <ul className="mt-4 space-y-2.5">
                {maySupport.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9CA3AF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm" style={{ animationDelay: ".3s" }}>
              <span className="inline-block rounded-full bg-[#FEE2E2] px-3 py-1 text-xs font-bold text-[#DC2626]">
                Must not be presented as
              </span>

              <ul className="mt-4 space-y-2.5">
                {mustNot.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9CA3AF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
