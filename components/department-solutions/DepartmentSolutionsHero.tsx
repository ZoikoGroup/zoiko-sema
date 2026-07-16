export default function DepartmentSolutionsHero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
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

        .delay-1{animation-delay:.15s;}
      `}</style>

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
              Department Solutions
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[44px]">
              One communication platform tailored for every department.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Shared platform governance with department-specific templates,
              meeting the unique security and workflow needs of enterprise
              teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/get-a-demo"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Request Demo
              </a>

              <a
                href="#workflow-center"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                View Module
              </a>
            </div>
          </div>

          <div className="fade-up delay-1  rounded-2xl ">
            <img
              src="/department-solutions/hero-one.webp"
              alt="Department-specific workflow platform"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
