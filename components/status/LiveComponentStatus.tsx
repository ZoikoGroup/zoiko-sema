"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// --- Types & Dummy Data ---
type StatusType = "Operational" | "Degraded" | "Monitoring" | "Maintenance";

interface ComponentStatus {
  id: string;
  name: string;
  icon: string;
  status: StatusType;
  description: string;
}

const COMPONENTS: ComponentStatus[] = [
  {
    id: "msg",
    name: "Messaging",
    icon: "💬",
    status: "Operational",
    description: "Direct messages, group messages, delivery, reactions, attachments",
  },
  {
    id: "calls",
    name: "Audio Calls",
    icon: "📞",
    status: "Operational",
    description: "One-to-one and group voice calling",
  },
  {
    id: "video",
    name: "Video Meetings",
    icon: "📹",
    status: "Degraded",
    description: "Video sessions, screen share, backgrounds, captions, reactions",
  },
  {
    id: "ai-summary",
    name: "AI Meeting Summaries",
    icon: "🤖",
    status: "Monitoring",
    description: "Summary generation, action items, decisions, transcript processing",
  },
  {
    id: "spaces",
    name: "Channels & Spaces",
    icon: "📋",
    status: "Operational",
    description: "Workspace spaces, channels, permissions, threads, files",
  },
  {
    id: "admin",
    name: "Admin Console",
    icon: "⚙️",
    status: "Operational",
    description: "User management, roles, billing, settings, policies, audit logs",
  },
  {
    id: "auth",
    name: "Authentication",
    icon: "🔐",
    status: "Operational",
    description: "Sign in, SSO, MFA, sessions, account recovery",
  },
  {
    id: "apis",
    name: "Integrations & APIs",
    icon: "🔌",
    status: "Operational",
    description: "Webhooks, developer APIs, calendar and storage integrations",
  },
  {
    id: "zoiko-time",
    name: "ZoikoTime Integration",
    icon: "⏱️",
    status: "Operational",
    description: "Connected workforce-context services",
  },
];

// Custom Hook for Reveal Animate
function useIntersectionReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed] as const;
}

export default function LiveComponentStatus() {
  const [filter, setFilter] = useState<string>("All components");
  const [ref, isVisible] = useIntersectionReveal();

  const categories = ["All components", "Operational", "Degraded", "Monitoring", "Maintenance"];

  const filteredComponents = COMPONENTS.filter((comp) => {
    if (filter === "All components") return true;
    return comp.status.toLowerCase() === filter.toLowerCase();
  });

  const getStatusBadge = (status: StatusType) => {
    switch (status) {
      case "Operational":
        return (
          <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center gap-1.5 text-xs font-bold leading-4 tracking-tight">
            <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            Operational
          </span>
        );
      case "Degraded":
        return (
          <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full flex items-center gap-1.5 text-xs font-bold leading-4 tracking-tight">
            <span className="size-2 rounded-full bg-amber-600 dark:bg-amber-400" />
            Degraded
          </span>
        );
      case "Monitoring":
        return (
          <span className="px-2.5 py-1 bg-sky-50 dark:bg-sky-950/40 border border-sky-500/20 text-sky-600 dark:text-sky-400 rounded-full flex items-center gap-1.5 text-xs font-bold leading-4 tracking-tight">
            <span className="size-2 rounded-full bg-sky-600 dark:bg-sky-400" />
            Monitoring
          </span>
        );
      case "Maintenance":
        return (
          <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center gap-1.5 text-xs font-bold leading-4 tracking-tight">
            <span className="size-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Maintenance
          </span>
        );
    }
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-indigo-50/40 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Block */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase">
              Live Component Status
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
              Service-by-service health
            </h2>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 border ${
                  filter === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-violet-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Component Status Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-150 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component) => (
              <div
                key={component.id}
                className="group flex flex-col justify-between p-6 bg-white dark:bg-slate-900 border border-violet-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" role="img" aria-label={component.name}>
                        {component.icon}
                      </span>
                      <h3 className="text-slate-900 dark:text-white text-sm font-bold">
                        {component.name}
                      </h3>
                    </div>
                    {getStatusBadge(component.status)}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed mb-6">
                    {component.description}
                  </p>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 text-xs font-bold leading-4 transition-colors w-max"
                >
                  View history <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
              No components match the selected status filter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}