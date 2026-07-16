const images = [
  {
    src: "/department-solutions/workflow-hr.png",
    alt: "HR request workflow dashboard",
  },
  {
    src: "/department-solutions/workflow-security.png",
    alt: "Security review workflow",
  },
];

export default function DepartmentWorkflows() {
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
          <h2 className="fade-up text-center text-3xl font-bold text-[#1F2937] md:text-[38px]">
            Department Workflows
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="fade-up overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
