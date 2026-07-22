export default function QuickstartWorkflow() {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Browse APIs and identify required scopes.",
      active: true,
    },
    {
      number: "2",
      title: "Create App",
      description: "Set up credentials in the Developer Dashboard.",
    },
    {
      number: "3",
      title: "Build",
      description: "Install SDKs and implement your logic.",
    },
    {
      number: "4",
      title: "Test",
      description: "Validate in our secure sandbox environment.",
    },
    {
      number: "5",
      title: "Launch",
      description: "Apply for production access and scale.",
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

      <section id="quickstart" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Quickstart Workflow
            </h2>

            <p className="mt-4 text-[17px] text-[#6B7280]">
              From discovery to production in five clear steps.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="fade-up text-center"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    step.active
                      ? "border-[#3457E8] bg-[#3457E8] text-white"
                      : "border-[#D7D9E4] bg-white text-[#4B5563]"
                  }`}
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#1F2937]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[160px] text-sm leading-6 text-[#6B7280]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Workflow Image */}
          <div
            className="fade-up mt-16 overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: ".6s" }}
          >
            <img
              src="/developer-docs/workflow.png"
              alt="Quickstart Workflow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}