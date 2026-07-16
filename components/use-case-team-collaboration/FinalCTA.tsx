const badges = [
  "Role-based access",
  "Controlled guest collaboration",
  "Admin-governed AI",
  "Audit-ready history",
];

export default function FinalCTA() {
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

      <section className="bg-[#0D1230] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="fade-up inline-block rounded-full bg-[#232B57] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
            Get Started
          </span>

          <h2
            className="fade-up mt-6 text-3xl font-bold leading-tight text-white md:text-[42px]"
            style={{ animationDelay: ".08s" }}
          >
            Ready to coordinate your teams into one governed workspace?
          </h2>

          <p
            className="fade-up mx-auto mt-5 max-w-xl text-[17px] leading-8 text-[#9AA3C0]"
            style={{ animationDelay: ".16s" }}
          >
            Start free for immediate team activation. Get a demo for governed
            rollout, security review, migration, and enterprise deployment.
          </p>

          <div
            className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: ".24s" }}
          >
            <a
              href="/get-a-demo"
              className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
            >
              Get a demo
            </a>

            <a
              href="/start-free"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
            >
              Start free
            </a>
          </div>

          <div
            className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: ".32s" }}
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-[#C8C8C8]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#2ED47A]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
