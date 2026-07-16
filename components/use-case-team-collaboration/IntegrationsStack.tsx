const categories = [
  {
    label: "Identity",
    items: ["Okta", "Azure AD", "Google Workspace", "SCIM"],
  },
  {
    label: "Calendar",
    items: ["Google Calendar", "Outlook", "Teams Calendar"],
  },
  {
    label: "Storage",
    items: ["Google Drive", "SharePoint", "Dropbox", "Box"],
  },
  {
    label: "Workflow",
    items: ["Jira", "Asana", "Slack import", "Webhooks & API"],
  },
];

export default function IntegrationsStack() {
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
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E9FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Integrations
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Connect your existing stack.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Identity, calendar, storage, and workflow integrations — plus
              open APIs, webhooks, and the full Zoiko ecosystem.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={category.label}
                className="fade-up rounded-2xl border border-[#ECECF4] bg-[#F8F7FD] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#4F63F0]">
                  {category.label}
                </p>

                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7CBE8]" />
                      <span className="text-sm text-[#4B5563]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="fade-up mt-8 overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: ".4s" }}
          >
            <img
              src="/use-cases/team-collaboration/integrations.webp"
              alt="Connected integration ecosystem"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
