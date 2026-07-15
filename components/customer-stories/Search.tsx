export default function Search() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp .8s ease forwards;
        }

        .delay-1 {
          animation-delay: .15s;
        }

        .delay-2 {
          animation-delay: .3s;
        }

        .delay-3 {
          animation-delay: .45s;
        }

        .delay-4 {
          animation-delay: .6s;
        }
      `}</style>

      {/* SEARCH */}
      <section className="bg-white px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl fade-up delay-2">
          <div className="mx-auto max-w-3xl">
            <div className="flex h-14 items-center rounded-full bg-[#F4F5F8] px-6">
              <svg
                className="mr-3 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>

              <input
                placeholder="Search by company name, industry, or challenge..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-500">
                Filter by:
              </span>

              {["Use Case", "Product", "Industry", "Team Size", "Outcome"].map(
                (item, index) => (
                  <button
                    key={item}
                    className={`rounded-full border px-5 py-2 text-sm transition ${
                      index === 0
                        ? "border-[#4F63F0] bg-[#4F63F0] text-white"
                        : "border-gray-300 bg-white hover:border-[#4F63F0]"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
