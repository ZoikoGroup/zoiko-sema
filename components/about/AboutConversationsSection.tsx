"use client"
export default function AboutConversationsSection() {
  return (
    <section className="bg-[#F2F3FB] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Why Sema exists
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-10 text-gray-900 md:text-[32px]">
          Work communication breaks when context is scattered
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
          Conversations, meetings, files, decisions, tasks, and follow-ups often live in separate places.
          Sema keeps them connected and easier to act on.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <span className="absolute left-4 top-4 rounded-full bg-[#4F46E5] px-4 py-1.5 text-xs font-semibold text-white">
              Before
            </span>
            <img
              src="/about/before.png"
              alt="Before: scattered notes and disorganized workspace"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <span className="absolute left-4 top-4 rounded-full bg-[#4F46E5] px-4 py-1.5 text-xs font-semibold text-white">
              After
            </span>
            <img
              src="/about/after.png"
              alt="After: organized communication with Sema"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
