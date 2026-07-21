const paths = [
  {
    label: "Distributed Teams",
    description: "Consistent policy across locations and time zones.",
  },
  {
    label: "Regulated Industries",
    description: "Evidence and audit trail for compliance review.",
  },
  {
    label: "Contractor & Billable Work",
    description: "Verified sessions supporting accurate billing.",
  },
  {
    label: "Enterprise Deployment",
    description: "Multi-jurisdiction rollout with sales-assisted support.",
  },
];

export default function UseCasePaths() {
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
              Use-Case Paths
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Distributed, regulated, contractor, and enterprise deployments.
            </h2>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/zoikotime/overview/use-case-paths.png"
              alt="Group of professionals"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path, index) => (
              <div
                key={path.label}
                className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#4F63F0]">
                  {path.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
