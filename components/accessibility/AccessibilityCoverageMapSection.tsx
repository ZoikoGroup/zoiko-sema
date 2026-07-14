"use client"

interface Principle {
  letter: string;
  color: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    letter: "P",
    color: "text-blue-600",
    title: "Perceivable",
    description: "Text alternatives, captions, and sufficient contrast.",
  },
  {
    letter: "O",
    color: "text-[#6C5CE7]",
    title: "Operable",
    description: "Keyboard access, focus order, and enough time.",
  },
  {
    letter: "U",
    color: "text-teal-600",
    title: "Understandable",
    description: "Predictable, readable, with clear error handling.",
  },
  {
    letter: "R",
    color: "text-green-600",
    title: "Robust",
    description: "Works with assistive technologies and browsers.",
  },
  {
    letter: "G",
    color: "text-orange-500",
    title: "Governed",
    description: "Owned as a program with testing, tracking, reporting.",
  },
];

export default function AccessibilityCoverageMapSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section { animation: fadeInUp 0.7s ease-out both; }
        .fade-in-item { animation: fadeInUp 0.6s ease-out both; }
      `}</style>

      <div className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Accessibility coverage map
        </p>
        <h2 className="text-3xl font-bold leading-snug text-gray-900 md:text-[42px]">
          Perceivable, Operable, Understandable, Robust — and Governed.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
          The four WCAG principles, plus how we govern accessibility as an ongoing
          program rather than a one-time checklist.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl text-left sm:grid-cols-3 lg:grid-cols-5">
          {principles.map(({ letter, color, title, description }, i) => (
            <div
              key={title}
              className="fade-in-item"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className={`text-3xl font-extrabold ${color}`}>{letter}</span>
              <h3 className="mt-2 text-[14.5px] font-bold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-xs max-w-35 leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="fade-in-item mt-10 overflow-hidden rounded-2xl"
          style={{ animationDelay: "500ms" }}
        >
          <img src="/accessibility/coverage.png" alt="image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
