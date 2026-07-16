const templates = [
  {
    title: "IT Service Desk Template",
    policy: "Policy: 7-year retention.",
    aiRule: "AI Rule: Priority tagging.",
    image: "/department-solutions/template-it.png",
  },
  {
    title: "HR Onboarding Workflow",
    policy: "Policy: PII redaction.",
    aiRule: "AI Rule: Milestone tracking.",
    image: "/department-solutions/template-hr.png",
  },
  {
    title: "Finance Compliance Archive",
    policy: "Policy: Immutable storage.",
    aiRule: "AI Rule: Audit summary.",
    image: "/department-solutions/template-finance.png",
  },
];

export default function TemplateLibrary() {
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
          <h2 className="fade-up text-3xl font-bold text-[#1F2937] md:text-[38px]">
            Template Library
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {templates.map((template, index) => (
              <div
                key={template.title}
                className="fade-up overflow-hidden rounded-2xl border border-[#ECECF4] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-base font-semibold text-[#1F2937]">
                    {template.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {template.policy}
                  </p>
                  <p className="text-sm leading-6 text-[#6B7280]">
                    {template.aiRule}
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
