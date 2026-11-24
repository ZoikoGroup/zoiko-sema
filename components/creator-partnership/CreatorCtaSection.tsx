export default function CreatorCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#2A2F6B] font-inter">
      <img
        src="/creator-partnership/cta-bg.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3E3C86]/75 via-[#2C3274]/70 to-[#121A45]/90" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 lg:py-24">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white font-plus-jakarta md:text-[44px]">
          Bring your audience closer to better collaboration.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-[#D5D8F0] md:text-[17px]">
          Share your creative approach and apply to partner with Zoiko Sema. Every application is reviewed for fit —
          approval and compensation are not guaranteed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#apply"
            className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0D1638] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            Apply for a Partnership
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
