"use client"
import { MessageSquare, Video, CheckSquare, Folder, Mail, Search, LucideIcon } from "lucide-react";

interface ConnectedCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const cards: ConnectedCard[] = [
  {
    icon: MessageSquare,
    iconBg: "bg-[#F1EEFE]",
    iconColor: "text-[#7C5CFC]",
    title: "Channels & Spaces",
    description: "Create documents from threads and channels with source context.",
  },
  {
    icon: Video,
    iconBg: "bg-[#E9F1FE]",
    iconColor: "text-[#3B82F6]",
    title: "Sema Meet",
    description: "Turn meeting recaps and AI summaries into reviewed documents.",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-[#E8F7EF]",
    iconColor: "text-[#22A35F]",
    title: "Tasks & To-dos",
    description: "Embed task status and create tasks from document content.",
  },
  {
    icon: Folder,
    iconBg: "bg-[#FDF1E5]",
    iconColor: "text-[#E08A2E]",
    title: "Files",
    description: "Attach and embed files with permission inheritance preserved.",
  },
  {
    icon: Mail,
    iconBg: "bg-[#FDECF1]",
    iconColor: "text-[#E24E85]",
    title: "Mail",
    description: "Create documents from approved email context, share via Mail.",
  },
  {
    icon: Search,
    iconBg: "bg-[#E9F1FE]",
    iconColor: "text-[#3B82F6]",
    title: "Ask Sema",
    description:
      "Retrieve documents and sourced answers within your permission boundary.",
  },
];

export default function ConnectedWorkSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-20 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
          style={{ animationDelay: "0ms" }}
        >
          Connected work
        </p>
        <h2
          className="fade-in-item mx-auto mt-4 max-w-130 text-4xl font-extrabold leading-snug text-gray-900 sm:text-[42px]"
          style={{ animationDelay: "80ms" }}
        >
          Documents live inside your whole workspace.
        </h2>
        <p
          className="fade-in-item mx-auto mt-4 max-w-100 text-sm leading-relaxed text-gray-500"
          style={{ animationDelay: "160ms" }}
        >
          Connected to the meeting, the channel, the task, and the file that gave
          it meaning.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, iconBg, iconColor, title, description }, i) => (
            <div
              key={title}
              className="fade-in-item rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              style={{ animationDelay: `${240 + i * 80}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}
                >
                  <Icon size={16} strokeWidth={2} />
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
