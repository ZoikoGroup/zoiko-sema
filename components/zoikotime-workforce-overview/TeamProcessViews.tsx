const departments = [
  { name: "Operations", coverage: "96%", approvalReady: "92%", openExceptions: 4, exceptionColor: "#D97706", quality: "Good" },
  { name: "Customer Care", coverage: "91%", approvalReady: "85%", openExceptions: 7, exceptionColor: "#DC2626", quality: "Fair" },
  { name: "Field Services", coverage: "88%", approvalReady: "80%", openExceptions: 9, exceptionColor: "#DC2626", quality: "Fair" },
  { name: "Finance", coverage: "99%", approvalReady: "98%", openExceptions: 1, exceptionColor: "#2563EB", quality: "Good" },
  { name: "Engineering", coverage: "94%", approvalReady: "90%", openExceptions: 1, exceptionColor: "#2563EB", quality: "Good" },
];

const qualityStyles: Record<string, string> = {
  Good: "bg-[#DCFCE7] text-[#16A34A]",
  Fair: "bg-[#FEF3C7] text-[#D97706]",
};

export default function TeamProcessViews() {
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

        .dept-row{ transition: background-color .2s ease; }
        .dept-row:hover{ background-color: #FAFAFF; }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#14B8A6]">
              Team & Process Views
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Compared by process health — never by rank.
            </h2>
          </div>

          <div
            className="fade-up mt-14 overflow-hidden rounded-2xl border border-[#ECECF4] shadow-sm"
            style={{ animationDelay: ".1s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#F5F5FC]">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">Department</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">Coverage</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">Approval Ready</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">Open Exceptions</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">Data Quality</th>
                  </tr>
                </thead>

                <tbody>
                  {departments.map((dept, index) => (
                    <tr
                      key={dept.name}
                      className={`dept-row ${index !== departments.length - 1 ? "border-b border-[#ECECF4]" : ""}`}
                    >
                      <td className="px-6 py-5 font-semibold text-[#1F2937]">{dept.name}</td>
                      <td className="px-6 py-5 text-[#374151]">{dept.coverage}</td>
                      <td className="px-6 py-5 text-[#374151]">{dept.approvalReady}</td>
                      <td className="px-6 py-5 font-semibold" style={{ color: dept.exceptionColor }}>
                        {dept.openExceptions}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${qualityStyles[dept.quality]}`}>
                          {dept.quality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
