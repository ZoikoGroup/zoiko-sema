type Value = "Yes" | "No" | "Policy" | "View" | "Request" | "Scoped";

interface Row {
  action: string;
  owner: Value;
  admin: Value;
  member: Value;
  guest: Value;
  auditor: Value;
}

const rows: Row[] = [
  { action: "Create workspace", owner: "Yes", admin: "Policy", member: "No", guest: "No", auditor: "No" },
  { action: "Manage members", owner: "Yes", admin: "Yes", member: "No", guest: "No", auditor: "View" },
  { action: "Create channels", owner: "Yes", admin: "Yes", member: "Policy", guest: "No", auditor: "View" },
  { action: "Invite guests", owner: "Yes", admin: "Policy", member: "Request", guest: "No", auditor: "View" },
  { action: "Confirm decisions", owner: "Yes", admin: "Yes", member: "Yes", guest: "Scoped", auditor: "View" },
  { action: "Configure AI", owner: "Yes", admin: "View", member: "No", guest: "No", auditor: "No" },
  { action: "Export audit", owner: "Yes", admin: "Policy", member: "No", guest: "No", auditor: "Policy" },
];

const columns: { key: keyof Omit<Row, "action">; label: string }[] = [
  { key: "owner", label: "Owner" },
  { key: "admin", label: "Admin" },
  { key: "member", label: "Member" },
  { key: "guest", label: "Guest" },
  { key: "auditor", label: "Auditor" },
];

function Cell({ value }: { value: Value }) {
  if (value === "Yes") {
    return (
      <span className="inline-flex rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs font-semibold text-[#16A34A]">
        Yes
      </span>
    );
  }

  if (value === "No") {
    return <span className="text-xs font-semibold text-[#F87171]">No</span>;
  }

  if (value === "View") {
    return (
      <span className="inline-flex rounded-full bg-[#F1F0FB] px-2.5 py-1 text-xs font-semibold text-[#4B5563]">
        View
      </span>
    );
  }

  return <span className="text-xs font-semibold text-[#4F63F0]">{value}</span>;
}

export default function RolesPermissions() {
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

        .role-row{ transition: background-color .2s ease; }
        .role-row:hover{ background-color: #F9FAFF; }
      `}</style>

      <section className="bg-[#F8F7FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E9FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Roles and Permissions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Visibility and actions governed by role.
            </h2>
          </div>

          <div className="fade-up mt-12 overflow-hidden rounded-2xl shadow-sm" style={{ animationDelay: ".15s" }}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#11163C]">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white">
                      Action
                    </th>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {rows.map((row, index) => (
                    <tr
                      key={row.action}
                      className={`role-row ${
                        index !== rows.length - 1 ? "border-b border-[#ECECF4]" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-[14px] font-medium text-[#1F2937]">
                        {row.action}
                      </td>
                      {columns.map((col) => (
                        <td key={col.key} className="px-6 py-4">
                          <Cell value={row[col.key]} />
                        </td>
                      ))}
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
