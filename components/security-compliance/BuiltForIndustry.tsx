const industries = [
  {
    title: "Financial Services",
    description: "Secure trading platforms and automated supervision.",
    image: "/security-compliance/financial-services.png",
  },
  {
    title: "Healthcare",
    description: "HIPAA compliant workspaces with PHI classification.",
    image: "/security-compliance/healthcare.png",
  },
];

export default function BuiltForIndustry() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="fade-up text-3xl font-bold text-[#1F2937] md:text-[38px]">
            Built for Your Industry
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="fade-up group relative overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/85">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
