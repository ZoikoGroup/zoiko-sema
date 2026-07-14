"use client"
import {
  MessageSquare,
  Video,
  FileText,
  Users,
  ShieldCheck,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface PlatformItem {
  icon: LucideIcon;
  label: string;
}

const items: PlatformItem[] = [
  { icon: MessageSquare, label: "Messaging" },
  { icon: Video, label: "Video Meetings" },
  { icon: FileText, label: "AI Summaries" },
  { icon: Users, label: "Channels & Spaces" },
  { icon: ShieldCheck, label: "Admin Console" },
  { icon: Lightbulb, label: "Use Cases" },
];

export default function MasterThePlatformSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-[28px]">
          Master the Platform
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-10 w-10 items-center justify-center text-[#0058BE]">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <p className="text-[#191C1E] text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
