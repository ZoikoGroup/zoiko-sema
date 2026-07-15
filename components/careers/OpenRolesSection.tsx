"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiSearch,
  FiGrid,
  FiClipboard,
  FiCode,
  FiServer,
  FiShield,
  FiCpu,
  FiHeadphones,
  FiShoppingCart,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import RoleDetailModal from "./Roledetailmodal";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export type Job = {
  id: number;
  icon: IconType;
  color: string;
  title: string;
  department: string;
  location: string;
  employment: string;
  category: string;
  description: string;
  summary: string;
  responsibilities: string[];
};

const CATEGORIES = [
  "All",
  "Product & Design",
  "Engineering",
  "Security",
  "AI",
  "Customer Success",
  "Sales",
  "Operations",
];

const JOBS: Job[] = [
  {
    id: 1,
    icon: FiGrid,
    color: "#6A63F6",
    title: "Product Designer, Communication",
    department: "Product & Design",
    location: "Remote",
    employment: "Full-time",
    category: "Product & Design",
    description:
      "Design secure, usable messaging, meeting, and summary experiences.",
    summary:
      "Design secure, usable communication experiences across messaging, meetings, and AI summaries — helping teams keep context and act with confidence.",
    responsibilities: [
      "Design end-to-end flows for messaging, meetings, and summary review.",
      "Partner with engineering on governed AI and admin experiences.",
      "Contribute to the design system and accessibility standards.",
      "Turn enterprise requirements into clear, calm interfaces.",
    ],
  },
  {
    id: 2,
    icon: FiClipboard,
    color: "#6A63F6",
    title: "Senior Product Manager",
    department: "Product & Design",
    location: "Hybrid",
    employment: "Full-time",
    category: "Product & Design",
    description:
      "Own outcomes across meetings, AI summaries, and admin governance.",
    summary:
      "Own outcomes across meetings, AI summaries, and admin governance, aligning teams around a clear, trusted roadmap.",
    responsibilities: [
      "Define and prioritize a roadmap across meetings, summaries, and governance.",
      "Translate enterprise and admin needs into shippable outcomes.",
      "Partner with design, engineering, and security on delivery.",
      "Measure adoption and follow-through to guide iteration.",
    ],
  },
  {
    id: 3,
    icon: FiCode,
    color: "#15C6B4",
    title: "Front-End Engineer",
    department: "Engineering",
    location: "Remote",
    employment: "Full-time",
    category: "Engineering",
    description:
      "Build reliable, accessible interfaces for real-time communication.",
    summary:
      "Build reliable, accessible interfaces for real-time communication that hold up under enterprise use.",
    responsibilities: [
      "Build responsive, accessible UI for messaging and meetings.",
      "Collaborate with design on a consistent component system.",
      "Optimize real-time performance and reliability.",
      "Uphold testing, quality, and accessibility standards.",
    ],
  },
  {
    id: 4,
    icon: FiServer,
    color: "#15C6B4",
    title: "Backend Engineer, Platform",
    department: "Engineering",
    location: "Remote",
    employment: "Full-time",
    category: "Engineering",
    description: "Scale messaging, meetings, and integration infrastructure.",
    summary:
      "Scale the messaging, meetings, and integration infrastructure behind Zoiko Sema.",
    responsibilities: [
      "Design and scale services for messaging and meetings.",
      "Build secure, well-documented integration APIs.",
      "Improve reliability, observability, and performance.",
      "Partner with security on data handling and controls.",
    ],
  },
  {
    id: 5,
    icon: FiShield,
    color: "#5C68E0",
    title: "Security Engineer",
    department: "Security & Governance",
    location: "Remote",
    employment: "Full-time",
    category: "Security",
    description:
      "Strengthen trust, permissions, auditability, and policy controls.",
    summary:
      "Strengthen trust, permissions, auditability, and policy controls across the platform.",
    responsibilities: [
      "Harden permissions, auditability, and policy controls.",
      "Review designs and code for security risk.",
      "Support enterprise security and compliance reviews.",
      "Improve detection, response, and governance tooling.",
    ],
  },
  {
    id: 6,
    icon: FiCpu,
    color: "#7B6CF6",
    title: "AI Product Engineer",
    department: "AI & Meeting Intelligence",
    location: "Remote",
    employment: "Full-time",
    category: "AI",
    description:
      "Improve governed summaries, decisions, and human-review workflows.",
    summary:
      "Improve governed summaries, decisions, and human-review workflows that teams can rely on.",
    responsibilities: [
      "Improve summary, decision, and action-item quality.",
      "Build human-review and correction workflows.",
      "Measure and raise the reliability of AI outputs.",
      "Partner with product and security on governance.",
    ],
  },
  {
    id: 7,
    icon: FiHeadphones,
    color: "#16A34A",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Hybrid",
    employment: "Full-time",
    category: "Customer Success",
    description:
      "Help customers adopt Sema and build repeatable success paths.",
    summary:
      "Help customers adopt Sema, resolve issues, and build repeatable paths to success.",
    responsibilities: [
      "Onboard and guide customers to lasting adoption.",
      "Build repeatable success and enablement playbooks.",
      "Surface product feedback from real usage.",
      "Partner with support and sales on account health.",
    ],
  },
  {
    id: 8,
    icon: FiShoppingCart,
    color: "#C68A11",
    title: "Account Executive",
    department: "Sales & Partnerships",
    location: "Hybrid",
    employment: "Full-time",
    category: "Sales",
    description: "Help organizations evaluate and adopt Zoiko Sema.",
    summary:
      "Help organizations understand, evaluate, and adopt Zoiko Sema.",
    responsibilities: [
      "Guide prospects through evaluation and adoption.",
      "Understand enterprise communication and governance needs.",
      "Partner with solutions and success teams.",
      "Build durable, trust-based customer relationships.",
    ],
  },
  {
    id: 9,
    icon: FiUsers,
    color: "#233A72",
    title: "People Operations Specialist",
    department: "Operations & People",
    location: "Remote",
    employment: "Full-time",
    category: "Operations",
    description:
      "Support hiring, documentation, and internal collaboration.",
    summary:
      "Support hiring, documentation, process, and internal collaboration across the company.",
    responsibilities: [
      "Support hiring and a great candidate experience.",
      "Maintain documentation-first internal processes.",
      "Improve onboarding and internal collaboration.",
      "Partner across teams on people operations.",
    ],
  },
];

const badgeClass =
  "rounded-full bg-[#F3F3FB] px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300";

export default function OpenRolesSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: contentRef, inView: contentIn } = useInView(0.1);

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesCategory =
        activeCategory === "All" || job.category === activeCategory;

      const keyword = search.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(keyword) ||
        job.department.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      <style>{`
        @keyframes rolesFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .roles-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .roles-visible{
          animation:rolesFadeUp .7s cubic-bezier(.22,1,.36,1) forwards;
        }

        .role-card{
          transition:
          transform .3s ease,
          border-color .3s ease,
          box-shadow .3s ease;
        }

        .role-card:hover{
          transform:translateY(-4px);
          border-color:rgba(79,91,213,.25);
          box-shadow:0 18px 40px rgba(79,91,213,.08);
        }

        .filter-chip{
          transition:all .25s ease;
        }

        .filter-chip:hover{
          transform:translateY(-2px);
        }

        @media(prefers-reduced-motion:reduce){
          .roles-hidden,
          .roles-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }
        }
      `}</style>

      <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div
            ref={headerRef}
            className={`roles-hidden ${headerIn ? "roles-visible" : ""} text-center`}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
              Open Roles
            </p>

            <h2 className="text-[clamp(32px,4vw,46px)] font-bold text-[#172046] dark:text-white">
              Find your role
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400">
              Search and filter roles by team, location, and type.
              Listings below are illustrative placeholders until
              HR-approved roles are published.
            </p>
          </div>

          {/* Search + Filter Container */}

          <div
            ref={contentRef}
            className={`roles-hidden ${
              contentIn ? "roles-visible" : ""
            } mt-14 overflow-hidden rounded-3xl border border-[#E8E9F7] bg-[#F5F4FF] dark:border-white/10 dark:bg-[#151233]`}
            style={{ animationDelay: ".12s" }}
          >
            {/* Search */}

            <div className="border-b border-[#E8E9F7] bg-white p-5 dark:border-white/10 dark:bg-[#151233]">
              <div className="relative">
                <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search by title, team, skill, or keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white pl-12 pr-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                />
              </div>

              {/* Filter Chips */}

              <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`filter-chip whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeCategory === category
                        ? "bg-[#5B63F6] text-white shadow-md"
                        : "border border-[#E5E7EB] bg-white text-gray-600 hover:border-[#5B63F6] hover:text-[#5B63F6] dark:border-white/10 dark:bg-[#0D0B24] dark:text-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Sample roles for layout only. Locations, types, and
                compensation appear once HR-approved.
              </p>
            </div>

            {/* Jobs */}

            <div className="divide-y divide-[#ECECF5] dark:divide-white/10 bg-white dark:bg-[#151233]">

              {filteredJobs.length === 0 ? (

                <div className="py-20 text-center">

                  <h3 className="text-lg font-semibold text-[#172046] dark:text-white">
                    No matching roles found
                  </h3>

                  <p className="mt-3 text-gray-500 dark:text-gray-400">
                    Try another keyword or choose a different category.
                  </p>

                </div>

              ) : (

                filteredJobs.map((job, index) => {

                  const Icon = job.icon;

                  return (

                    <div
                      key={job.id}
                      style={{
                        animationDelay: `${0.18 + index * 0.05}s`,
                      }}
                      className={`role-card roles-hidden ${
                        contentIn ? "roles-visible" : ""
                      } flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between`}
                    >

                      {/* Left */}

                      <div className="flex gap-5">

                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{
                            backgroundColor: job.color,
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>

                          <h3 className="text-lg font-semibold text-[#172046] dark:text-white">
                            {job.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap gap-2">

                            <span className={badgeClass}>
                              {job.department}
                            </span>

                            <span className={badgeClass}>
                              {job.location}
                            </span>

                            <span className={badgeClass}>
                              {job.employment}
                            </span>

                          </div>

                          <p className="mt-4 max-w-2xl text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                            {job.description}
                          </p>

                        </div>

                      </div>

                      {/* Button */}

                      <div className="lg:ml-8">

                        <button
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#172046] transition hover:-translate-y-1 hover:border-[#5B63F6] hover:text-[#5B63F6] dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                        >
                          View role

                          <FiArrowRight className="h-4 w-4" />

                        </button>

                      </div>

                    </div>

                  );

                })

              )}

            </div>

            {/* Footer */}

            <div className="flex flex-col gap-3 border-t border-[#E8E9F7] bg-[#F5F4FF] px-6 py-5 text-sm dark:border-white/10 dark:bg-[#11102B] sm:flex-row sm:items-center sm:justify-between">

              <p className="text-gray-500 dark:text-gray-400">
                Don't see the right role?
                <button className="ml-2 font-semibold text-[#5B63F6] hover:underline">
                  Join the talent community
                </button>
              </p>

              <span className="text-gray-500 dark:text-gray-400">
                {filteredJobs.length} sample role
                {filteredJobs.length > 1 ? "s" : ""}
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* Role detail popup */}
      {selectedJob && (
        <RoleDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}