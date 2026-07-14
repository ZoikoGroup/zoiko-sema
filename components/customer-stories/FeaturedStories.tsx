export default function FeaturedStories() {
  const stories = [
    {
      image: "/customer-stories/left.png",
      category: "Manufacturing",
      logo: "V",
      title:
        "Vanguard Auto: Accelerating supply chain decisions across 12 countries.",
      tags: ["Efficiency", "Governance"],
    },
    {
      image: "/customer-stories/center.png",
      category: "FinTech",
      logo: "A",
      title:
        "Astra Bank: Achieving 100% compliance in digital communications.",
      tags: ["Security", "Compliance"],
    },
    {
      image: "/customer-stories/right.png",
      category: "SaaS",
      logo: "S",
      title:
        "SemaScale: Scaling from 50 to 5000 users without losing speed.",
      tags: ["Scale", "AI Training"],
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={story.title}
              className="fade-up overflow-hidden rounded-2xl border border-[#ECECF4] bg-white shadow-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover"
              />

              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-gray-600">
                    {story.category}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded bg-[#F3F4F6] text-xs font-semibold text-gray-600">
                    {story.logo}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-8 text-[#111827]">
                  {story.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#EDF3FF] px-3 py-1 text-xs font-medium text-[#3457E8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-semibold text-[#111827] transition hover:text-[#3457E8]">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}