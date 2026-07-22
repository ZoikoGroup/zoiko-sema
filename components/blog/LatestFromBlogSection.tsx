"use client"
import { Bookmark } from "lucide-react";

interface Post {
  category: string;
  title: string;
  description: string;
  readTime: string;
  src:string;
}

const posts: Post[] = [
  {
    category: "Messaging",
    title: "Beyond the DM: Building Contextual Channels",
    description:
      "Learn how structured channel governance reduces noise and keeps teams focused on...",
    readTime: "8 min read",
    src:"/blog/messaging.png"
  },
  {
    category: "Security",
    title: "Zero Trust: The Future of Global Messaging",
    description:
      "Why encryption alone isn't enough for the modern enterprise, and how Zoiko Sema...",
    readTime: "12 min read",
    src:"/blog/security.png"
  },
  {
    category: "Remote Work",
    title: "Combating Virtual Meeting Fatigue",
    description:
      "Strategies for maintaining high engagement and mental clarity in distributed teams using...",
    readTime: "6 min read",
    src:"/blog/remote.png"
  },
];

export default function LatestFromBlogSection() {
  return (
    <section id="latest" className="bg-white px-6 py-16 sm:px-10 lg:px-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-[28px]">
            Latest from the Blog
          </h2>
          <a href="#" className="text-sm font-semibold text-[#3B5BFF] hover:text-[#2E47D9]">
            View all posts
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ category, title, description, readTime,src }) => (
            <div key={title}>
              <div className="relative overflow-hidden rounded-2xl">
                <span className="absolute left-3 top-3 rounded-full bg-[#FFFFFFE5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-700 shadow-sm">
                  {category}
                </span>
                <img src={src} alt="image" className="h-52 w-full object-cover" />
              </div>

              <h3 className="mt-4 max-w-70 text-lg font-bold leading-snug text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#45464D]">{readTime}</span>
                <button aria-label="Save post" className="text-[#3B5BFF] hover:text-[#2E47D9]">
                  <Bookmark size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
