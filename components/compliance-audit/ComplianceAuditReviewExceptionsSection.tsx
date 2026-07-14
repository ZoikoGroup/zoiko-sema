"use client";

import {
  RotateCcw,
  User,
  Check,
  Lock,
  FileText,
  MessageSquare,
  Copy,
  RefreshCw,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";

interface ReviewRow {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

interface ExceptionRow {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reviewRows: ReviewRow[] = [
  {
    icon: RotateCcw,
    title: "Review before sync",
    description: "Prevents unreviewed meeting outputs from entering ZoikoTime records.",
    tags: ["Admin policy on/off", "Always shown for demo"],
  },
  {
    icon: User,
    title: "Owner confirmation",
    description: "Confirm who owns the work item or decision.",
    tags: ["Unassigned", "Suggested", "Confirmed", "Reassigned"],
  },
  {
    icon: Check,
    title: "Decision confirmation",
    description: "Confirm a decision is valid and not a draft or open question.",
    tags: ["Draft", "Proposed", "Confirmed", "Rejected"],
  },
  {
    icon: Lock,
    title: "Sensitive record flag",
    description: "Mark confidential, legal, HR, regulated, client-sensitive, or executive records.",
    tags: ["Flagged", "Restricted", "Export-limited"],
  },
  {
    icon: FileText,
    title: "Reviewer note & policy override",
    description: "Reviewers explain approvals; admin overrides require reason, role, timestamp, and audit log.",
    tags: ["Required for reject", "Audit-logged"],
  },
];

const exceptionRows: ExceptionRow[] = [
  {
    icon: User,
    title: "Missing owner",
    description: "Assign owner, request confirmation, or mark not applicable.",
  },
  {
    icon: MessageSquare,
    title: "Disputed decision",
    description: "Open a review thread, update the decision, or reject the record.",
  },
  {
    icon: Copy,
    title: "Duplicate record",
    description: "Merge records or dismiss the duplicate with a note.",
  },
  {
    icon: RefreshCw,
    title: "Failed sync",
    description: "Retry, remap the project, or contact an admin.",
  },
  {
    icon: Lock,
    title: "Sensitive export blocked",
    description: "Request approval, redact the export, or remove from the pack.",
  },
  {
    icon: AlertCircle,
    title: "Source unavailable",
    description: "Show a source-unavailable state with preserved metadata.",
  },
];

export default function ComplianceAuditReviewExceptionsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: colsRef, inView: colsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caReviewUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-review-hidden { opacity: 0; transform: translateY(20px); }
        .ca-review-visible { animation: caReviewUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caReviewRowStagger {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-review-row {
          opacity: 0;
          animation: caReviewRowStagger .4s ease forwards;
          transition: background-color .18s ease;
        }
        .ca-review-row:hover { background-color: #F7F7FC; }

        @media (prefers-reduced-motion: reduce) {
          .ca-review-hidden { opacity: 1 !important; transform: none !important; }
          .ca-review-visible { animation: none !important; }
          .ca-review-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-review-hidden ${headIn ? "ca-review-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Review, approval & exceptions
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Human control, graceful exceptions
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Nothing syncs or exports without review — and incomplete or
              disputed records are handled as a trust signal, not a fear
              signal.
            </p>
          </div>

          <div
            ref={colsRef}
            className={`ca-review-hidden ${colsIn ? "ca-review-visible" : ""} mt-10 grid grid-cols-1 gap-6 text-left lg:grid-cols-2`}
          >
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">
                Review &amp; approval controls
              </h3>
              <p className="mt-1 text-[13px] text-gray-500">
                Authorized users confirm records before they become work
                evidence.
              </p>
              <div className="mt-5 flex flex-col divide-y divide-gray-100">
                {reviewRows.map(({ icon: Icon, title, description, tags }, i) => (
                  <div
                    key={title}
                    className="ca-review-row flex items-start gap-3 rounded-lg px-2 py-4"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-semibold text-gray-900">{title}</h4>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                        {description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#F3F2FD] px-2 py-0.5 text-[10.5px] font-medium text-[#4F63F0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">Exception handling</h3>
              <p className="mt-1 text-[13px] text-gray-500">
                Incomplete or disputed records move to a calm resolution queue.
              </p>
              <div className="mt-5 flex flex-col divide-y divide-gray-100">
                {exceptionRows.map(({ icon: Icon, title, description }, i) => (
                  <div
                    key={title}
                    className="ca-review-row flex items-start gap-3 rounded-lg px-2 py-4"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-semibold text-gray-900">{title}</h4>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
