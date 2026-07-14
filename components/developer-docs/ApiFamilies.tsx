import {
  MessageSquare,
  Mic,
  Video,
  BrainCircuit,
  Network,
  ShieldCheck,
  Webhook,
  ClipboardList,
} from "lucide-react";

export default function ApiFamilies() {
  const families = [
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Real-time chat, attachments, and reactions.",
    },
    {
      icon: Mic,
      title: "Audio",
      description: "Voice calls and audio conferencing.",
    },
    {
      icon: Video,
      title: "Video",
      description: "HD video streaming and layouts.",
    },
    {
      icon: BrainCircuit,
      title: "AI Summaries",
      description: "Extract insights from transcripts.",
    },
    {
      icon: Network,
      title: "Channels",
      description: "Manage workspaces and threads.",
    },
    {
      icon: ShieldCheck,
      title: "Admin",
      description: "User provisioning and compliance.",
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Configure event subscriptions.",
    },
    {
      icon: ClipboardList,
      title: "Reporting",
      description: "Usage metrics and audit logs.",
    },
  ];

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

      <section className="bg-[#F6F5FE] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-4xl font-bold text-[#1F2937]">
              Explore API Families
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="fade-up rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * .08}s`,
                  }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF2FF]">
                    <Icon
                      size={20}
                      className="text-[#3457E8]"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#1F2937]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}