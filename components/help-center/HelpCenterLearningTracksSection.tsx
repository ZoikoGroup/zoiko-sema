export function HelpCenterLearningTracksSection() {
  const tracks = [
    {
      title: "Start Using Zoiko Sema",
      meta: "6 Modules • Beginner Friendly",
      image: "/help/dashboard.jpg"
    },
    {
      title: "Run Better Meetings",
      meta: "4 Modules • Performance Focus",
      image: "/help/track-2.jpg"
    },
    {
      title: "Use AI Responsibly",
      meta: "3 Modules • Governance & Privacy",
      image: "/help/track-1.jpg"
    }
  ];

  return (
    <div className="w-full bg-white flex justify-center py-16 overflow-hidden">
      <div className="w-full max-w-[1280px] px-8 lg:px-12 flex flex-col items-start gap-12">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full justify-center text-zinc-900 text-3xl font-semibold font-sans leading-10">
            Product Learning Tracks
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="flex-1 flex flex-col justify-start items-start gap-2 group cursor-pointer">
              <div className="w-full rounded-2xl flex flex-col justify-center items-start overflow-hidden shadow-sm bg-white">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="w-full pt-4 flex flex-col justify-start items-start">
                <div className="w-full justify-center text-zinc-900 text-2xl font-semibold font-sans leading-8 group-hover:text-blue-600 transition-colors">
                  {track.title}
                </div>
              </div>
              <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full justify-center text-zinc-700 text-base font-normal font-sans leading-6">
                  {track.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
