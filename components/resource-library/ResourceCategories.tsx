const categories = [
  {
    title: "Guides & Tutorials",
    description: "Step-by-step technical implementation guides for enterprise teams.",
    image: "/resources/downloads/category-guides.png",
  },
  {
    title: "White Papers",
    description: "Deep-dive research on security, scaling, and governance frameworks.",
    image: "/resources/downloads/category-white-papers.png",
  },
  {
    title: "API Documentation",
    description: "Full specification for REST, GraphQL, and Webhook integrations.",
    image: "/resources/downloads/category-api-docs.png",
  },
  {
    title: "Templates",
    description: "Deployment manifest and configuration boilerplates.",
    image: "/resources/downloads/category-templates.png",
  },
  {
    title: "Case Studies",
    description: "Performance metrics and transformation stories from the field.",
    image: "/resources/downloads/category-case-studies.png",
  },
  {
    title: "Compliance Assets",
    description: "Regulatory mapping and audit-ready documentation packages.",
    image: "/resources/downloads/category-compliance.png",
  },
];

export default function ResourceCategories() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Resource Categories
            </h2>
            <p className="mt-2 text-[15px] text-[#6B7280]">
              Browse our curated technical knowledge base.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-40 w-full rounded-xl object-cover"
                />

                <div className="pt-5">
                  <h3 className="text-base font-semibold text-[#1F2937]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {category.description}
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
