"use client";

import { PlusCircle, TrendingUp, Bug, Bot, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    icon: PlusCircle,
    title: "New Features",
    description: "All major product additions and module expansions.",
  },
  {
    icon: TrendingUp,
    title: "Improvements",
    description: "Performance boosts and UI/UX refinements.",
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description: "Technical resolutions and stability patches.",
  },
  {
    icon: Bot,
    title: "AI Updates",
    description: "Enhancements to the Sema Intelligence layer.",
  },
];

export default function ProductUpdateCategoriesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes puCatUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-cat-hidden { opacity: 0; transform: translateY(20px); }
        .pu-cat-visible { animation: puCatUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes puCatStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-cat-card {
          opacity: 0;
          animation: puCatStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .pu-cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.12);
          border-color: rgba(79,99,240,0.3);
        }
        .pu-cat-icon { transition: transform .2s ease; }
        .pu-cat-card:hover .pu-cat-icon { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .pu-cat-hidden { opacity: 1 !important; transform: none !important; }
          .pu-cat-visible { animation: none !important; }
          .pu-cat-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`pu-cat-hidden ${headIn ? "pu-cat-visible" : ""}`}>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
              Quickly find the updates that matter most to your role.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`pu-cat-hidden ${gridIn ? "pu-cat-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
          >
            {categories.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="pu-cat-card rounded-2xl border border-gray-200 p-6"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="pu-cat-icon mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4F63F0] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
