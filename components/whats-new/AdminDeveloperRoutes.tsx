"use client";

import { useProductUpdates } from "./ProductUpdatesContext";

export default function AdminDeveloperRoutes() {
  const { selectFilter } = useProductUpdates();

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
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              For Admins and Developers
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Two direct routes to what matters most to you.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div
              className="fade-up rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1F2937]">Admin impact</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Defaults, permissions, retention, and audit changes —
                filtered to what needs your review.
              </p>

              <button
                onClick={() => selectFilter("admin")}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
              >
                View admin updates
                <span aria-hidden>→</span>
              </button>
            </div>

            <div
              className="fade-up rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              style={{ animationDelay: ".1s" }}
            >
              <h3 className="text-lg font-semibold text-[#1F2937]">Developer changes</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                API, webhook, and SDK changes with migration guides and
                breaking-change deadlines.
              </p>

              <button
                onClick={() => selectFilter("developer")}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
              >
                View developer notes
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
