const controlColumns = [
  {
    title: "Room management",
    items: ["Lock meeting", "Assign co-host", "Admit / deny / remove", "Mute participant", "End for all"],
  },
  {
    title: "Recording & AI",
    items: ["Start / stop recording", "Persistent REC indicator", "Enable AI summary (if eligible)", "Set review owner", "View notice before enabling"],
  },
  {
    title: "Security & access",
    items: ["View participant status", "External / guest indicators", "Report or remove participant", "Waiting-room admission", "Confidential Mode state"],
  },
];

export default function HostControlsLiveRoom() {
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3DD68C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
              Live Room + Lobby
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-[36px]">
              Host controls visible. Governance always on.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#9AA3C0]">
              Recording, AI, and external-participant states remain
              continuously visible. Administrative controls live in drawers —
              not cluttering the meeting surface.
            </p>
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-2xl "
            style={{ animationDelay: ".15s" }}
          >
            <img
              src="/sema-meet/start/live-room.png"
              alt="Live meeting room with host controls"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {controlColumns.map((col, index) => (
              <div
                key={col.title}
                className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h3 className="text-sm font-semibold text-[#8FA3FF]">{col.title}</h3>

                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#DDE1F0]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B4270]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
