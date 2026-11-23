import { Building2, GraduationCap, School, Smartphone, Users, Video } from "lucide-react";
import SectionHeading from "./SectionHeading";

const APPLICANTS = [
  { icon: Video, title: "Creators & YouTubers", body: "Video, shorts, and channel audiences.", img: "creators-youtubers" },
  { icon: GraduationCap, title: "Educators & trainers", body: "Teaching communication, meetings, productivity.", img: "educators-trainers" },
  { icon: Smartphone, title: "Tech reviewers", body: "Hands-on product and workflow reviews.", img: "tech-reviewers" },
  { icon: School, title: "Student creators (18+)", body: "Campus and early-career communities.", img: "student-creators" },
  { icon: Users, title: "Community leaders", body: "Professional and interest communities.", img: "community-leaders" },
  { icon: Building2, title: "Creator agencies", body: "Representing multiple creators under one brief.", img: "creator-agencies" },
];

export default function WhoCanApplySection() {
  return (
    <section className="bg-[#EEF4FF] px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who can apply"
          title="Creators of every kind — reviewed for fit"
          intro="Every application is reviewed for audience relevance, authenticity, and collaboration fit. There's no single follower threshold."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICANTS.map(({ icon: Icon, title, body, img }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0D1638]/10"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={`/creator-partnership/${img}.webp`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-5 pb-5 pt-8">
                <span className="absolute -top-6 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0D1638] shadow-md">
                  <Icon size={19} />
                </span>
                <h3 className="text-[16px] font-bold text-[#0D1638] font-plus-jakarta">{title}</h3>
                <p className="mt-1 text-[14px] text-[#5B6582]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
