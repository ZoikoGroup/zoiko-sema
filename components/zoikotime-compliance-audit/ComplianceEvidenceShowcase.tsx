export default function ComplianceEvidenceShowcase() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="fade-up overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
          >
            <img
              src="/zoikotime/compliance-audit/evidence-showcase.png"
              alt="Compliance evidence review workspace"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
