"use client"
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const filters = [
  "All",
  "Business Communication",
  "Messaging",
  "Video Meetings",
  "AI Meeting Summaries",
  "Secure Communication",
  "Remote Coordination",
  "Admin & Governance",
  "Product Updates",
];

export default function SearchFilterBarSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="bg-white px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search guides, articles, and playbooks..."
              className="h-12 w-full rounded-xl border border-gray-200 bg-[#F7F9FB] pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#4F63F0] focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="whitespace-nowrap">Sort by:</span>
            <div className="relative">
              <select className="h-11 appearance-none rounded-xl border border-gray-200 bg-[#F7F9FB] pl-4 pr-9 text-sm text-gray-700 outline-none focus:border-[#4F63F0]">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 transition ${
                activeFilter === filter
                  ? "bg-[#0058BE] text-white"
                  : "bg-[#ECEEF0] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
