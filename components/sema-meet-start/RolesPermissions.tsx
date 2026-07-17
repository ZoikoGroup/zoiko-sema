import { Users, Play, UserPlus, Settings, Globe, Check, X } from "lucide-react";

const roles = [
  {
    title: "Workspace Member",
    icon: Users,
    color: "#6B7280",
    can: ["Start where permitted", "Join invited meetings", "Use self media controls", "See own audit events"],
    cannot: ["Manage room", "Enable recording (policy)", "View directory from room"],
  },
  {
    title: "Meeting Host",
    icon: Play,
    color: "#4F63F0",
    can: ["Full room management", "Admit / mute participants", "Enable recording if permitted", "Assign co-host", "End for all"],
    cannot: ["Exceed workspace policy", "Enable AI without eligibility"],
  },
  {
    title: "Co-host",
    icon: UserPlus,
    color: "#7C3AED",
    can: ["Delegated live admin", "Admit / mute participants", "Manage content if delegated"],
    cannot: ["Exceed host entitlement", "Assign another co-host"],
  },
  {
    title: "Admin",
    icon: Settings,
    color: "#4F63F0",
    can: ["View policy source", "Resolve access requests", "Configure workspace defaults", "Audit room events"],
    cannot: ["Override legal hold", "Access meeting content"],
  },
  {
    title: "Guest",
    icon: Globe,
    color: "#D97706",
    can: ["Join from invite link", "Self media controls", "Chat (if permitted)"],
    cannot: ["Start a meeting", "See member directory", "Enable recording"],
  },
];

const photos = [
  { src: "/sema-meet/start/roles-team-1.png", alt: "Team collaborating in a meeting" },
  { src: "/sema-meet/start/roles-team-2.png", alt: "Team presenting growth strategy" },
];

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
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E8FD] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Roles and Permissions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              What each role can and cannot do.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <div
                  key={role.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Icon size={20} style={{ color: role.color }} strokeWidth={2} />

                  <h3 className="mt-3 text-[15px] font-semibold text-[#1F2937]">{role.title}</h3>

                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[#4F63F0]">
                    Can
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {role.can.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs leading-5 text-[#4B5563]">
                        <Check size={13} className="mt-0.5 shrink-0 text-[#16A34A]" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[#DC2626]">
                    Cannot
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {role.cannot.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs leading-5 text-[#9CA3AF]">
                        <X size={13} className="mt-0.5 shrink-0 text-[#DC2626]" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className="fade-up overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
