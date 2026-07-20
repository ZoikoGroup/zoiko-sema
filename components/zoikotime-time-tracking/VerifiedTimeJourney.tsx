export default function VerifiedTimeJourney() {
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
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[36px]">
              The Verified Time Journey
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              From clock-in to payroll sync, every record is verified,
              classified, and reviewed.
            </p>
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: ".15s" }}
          >
            <img
              src="/zoikotime/time-tracking/verified-time-journey.png"
              alt="Verified time journey flow diagram"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
