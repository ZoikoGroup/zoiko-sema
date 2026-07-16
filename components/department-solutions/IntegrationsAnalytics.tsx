const integrationTags = ["Identity Management", "Cloud Storage", "ZoikoTime"];

const workflowHealth = [55, 68, 100, 62, 40];

export default function IntegrationsAnalytics() {
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

        @keyframes growBar{
          from{ height: 0%; }
        }

        .grow-bar{
          animation: growBar .9s ease forwards;
        }

        @keyframes growWidth{
          from{ width: 0%; }
        }

        .grow-width{
          animation: growWidth 1s ease forwards;
        }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div
            className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#1F2937]">
              Integrations
            </h3>

            <div className="mt-5 overflow-hidden rounded-xl">
              <img
                src="/department-solutions/integrations.png"
                alt="Integration hub diagram"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {integrationTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F1F0FB] px-4 py-1.5 text-sm font-medium text-[#4B5563]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: ".15s" }}
          >
            <h3 className="text-xl font-semibold text-[#1F2937]">
              Enterprise Analytics
            </h3>

            <div className="mt-5 rounded-xl bg-[#F8F7FD] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">
                  Department Adoption
                </span>
                <span className="text-sm font-bold text-[#4F63F0]">85%</span>
              </div>

              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                <div
                  className="grow-width h-full rounded-full bg-[#4F63F0]"
                  style={{ width: "85%" }}
                />
              </div>
            </div>

            <div className="mt-6 flex h-32 items-end justify-between gap-3">
              {workflowHealth.map((height, index) => (
                <div
                  key={index}
                  className={`grow-bar flex-1 rounded-t-md ${
                    height === 100 ? "bg-[#4F63F0]" : "bg-[#D9DDF0]"
                  }`}
                  style={{ height: `${height}%`, animationDelay: `${0.1 + index * 0.08}s` }}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-sm text-[#6B7280]">
              Workflow Health Across 5 Hubs
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
