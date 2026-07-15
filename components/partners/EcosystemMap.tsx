"use client";

export default function EcosystemMap() {
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
              Partner Ecosystem Map
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-[38px]">
              How partners support the customer journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#C8C8C8]">
              From discovery to adoption, integration, governance, and
              expansion — each partner type plays a role.
            </p>
          </div>

          <div
            className="fade-up relative mt-14 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            style={{ animationDelay: ".2s" }}
          >
            <video
              className="w-full object-cover"
              poster="/partners/ecosystem.webp"
              src="/partners/ecosystem.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
    </>
  );
}
