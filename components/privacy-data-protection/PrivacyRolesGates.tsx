import React from "react";

export function PrivacyRolesGates() {
  const columns = ["Action", "Privacy Admin", "Security", "HR / Legal", "Manager", "Worker"];
  
  const Check = () => <span className="text-green-700 text-sm font-extrabold font-['Inter'] mr-1">✓</span>;

  const rows = [
    {
      action: "Data inventory",
      cells: [
        <div key="1" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="2" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">View</span></div>,
        <div key="3" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">View</span></div>,
        <div key="4" className="text-slate-600 text-sm font-normal">Scoped</div>,
        <div key="5" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Own data</span></div>,
      ]
    },
    {
      action: "Rights cases",
      cells: [
        <div key="1" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="2" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="3" className="text-slate-600 text-sm font-normal">Limited</div>,
        <div key="4" className="text-slate-600 text-sm font-normal">No</div>,
        <div key="5" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Own case</span></div>,
      ]
    },
    {
      action: "Retention / hold",
      cells: [
        <div key="1" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="2" className="text-slate-600 text-sm font-normal">Edit</div>,
        <div key="3" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">View</span></div>,
        <div key="4" className="text-slate-600 text-sm font-normal">No</div>,
        <div key="5" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Own outcome</span></div>,
      ]
    },
    {
      action: "Incident",
      cells: [
        <div key="1" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="2" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="3" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Full</span></div>,
        <div key="4" className="text-slate-600 text-sm font-normal">Scoped</div>,
        <div key="5" className="flex items-center"><Check /><span className="text-slate-900 text-sm font-semibold">Own notice</span></div>,
      ]
    }
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              ROLES AND PLAN GATES
            </span>
          </div>
          <h2 className="w-full md:w-[700px] text-slate-900 text-3xl font-extrabold font-['Inter'] leading-10">
            Configuration, review, and audit stay<br/>separated by role.
          </h2>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[1136px] h-80 rounded-[20px] overflow-hidden shadow-md border border-slate-100 bg-slate-50 relative mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/residency.jpg" 
            alt="Role management dashboard" 
          />
        </div>

        {/* Table Container */}
        <div className="w-full max-w-6xl bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-violet-50 border-b border-slate-200">
                {columns.map((col, idx) => (
                  <th key={idx} className="py-4 px-6 text-slate-900 text-xs font-extrabold font-['Inter'] leading-5">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx !== rows.length - 1 ? "border-b border-slate-200" : ""}>
                  <td className="py-4 px-6 text-slate-900 text-sm font-bold font-['Inter'] leading-6">
                    {row.action}
                  </td>
                  {row.cells.map((cell, cIdx) => (
                    <td key={cIdx} className="py-4 px-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[20px] p-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2">
            <h3 className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">Data inventory & purpose mapping</h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">Basic on Entry/Team; custom multi-region on Enterprise.</p>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2">
            <h3 className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">Rights requests</h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">Manual-assisted on Team; custom SLA on Enterprise.</p>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.05)] shadow-[0px_1px_2px_0px_rgba(18,19,43,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2">
            <h3 className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">Custom retention & legal hold</h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">Available on Business and above.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
