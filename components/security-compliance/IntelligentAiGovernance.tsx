export default function IntelligentAiGovernance() {
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
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Intelligent AI Governance
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Empower your teams with AI without compromising on ethical
              standards or security protocols.
            </p>
          </div>

          <div
            className="fade-up mt-14 overflow-hidden rounded-2xl shadow-2xl"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/security-compliance/ai-governance.png"
              alt="Intelligent AI governance summary review"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
