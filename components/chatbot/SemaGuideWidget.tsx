"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, X, MoreVertical } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { starterPromptsForPath, isChatExcludedOnPath } from "./starterPrompts";
import { sendPublicChatMessage, type ChatTurn, type ChatSource } from "@/lib/semaGuideApi";

interface DisplayTurn extends ChatTurn {
  verified?: boolean;
  sources?: ChatSource[];
}

const SESSION_KEY = "sema_guide_public_session_id";

function getOrCreateSessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    // Private browsing / blocked storage — an in-memory id for this page
    // load is enough; nothing here needs to survive a refresh.
    return crypto.randomUUID();
  }
}

export default function SemaGuideWidget() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayTurn[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // A hard navigation to an excluded page (or Escape) closes the panel —
  // never carry an open chat over a payment/credential surface (WF-10).
  useEffect(() => {
    if (isChatExcludedOnPath(pathname)) setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (isChatExcludedOnPath(pathname)) return null;

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");
    setRateLimited(false);
    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setLoading(true);
    const result = await sendPublicChatMessage(trimmed, history, sessionIdRef.current);
    setLoading(false);
    if (result.error_code === "rate_limited") setRateLimited(true);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: result.response, verified: result.verified, sources: result.sources },
    ]);
  }

  const starters = starterPromptsForPath(pathname);

  return (
    <>
      {/* Launcher — copied exactly from the real in-product launcher
          (client/src/components/SemaGuideToggle.jsx + features/sema-guide/
          styles.css .sg-launcher-inner): a white 60x60/18px-radius surface
          with a soft elevation shadow, not a colored button — it's the
          icon asset that carries the brand, not a background fill. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Sema Guide" : "Open Sema Guide"}
        className="fixed bottom-6 right-6 z-40 grid h-[60px] w-[60px] place-items-center rounded-[18px] border border-[rgba(15,23,42,0.06)] bg-white shadow-[0_4px_10px_rgba(15,23,42,0.08),0_12px_28px_rgba(15,23,42,0.14)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6 text-[#6B7280]" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- fixed 34x34 UI chrome, not content; next/image's overhead isn't warranted here.
          <img src="/sema-guide-icon.svg" alt="" width={34} height={34} />
        )}
      </button>

      {open && (
        <>
          {/* Mobile scrim — sm:hidden mirrors the in-product panel's own
              backdrop, dismissible by tapping outside the sheet. */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <aside
            role="dialog"
            aria-label="Sema Guide — Zoiko Sema public assistant"
            aria-modal="true"
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[560px] sm:max-h-[720px] sm:w-[420px] sm:rounded-[22px] sm:border sm:border-[#E5E8F0] sm:shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
            style={{ height: "100dvh" }}
          >
            {/* Header — same logo image and 60px height as the real
                in-product header (GuideHeader.jsx uses /email-logo.png at
                the same spot). The "Public Zoiko Sema assistant" line below
                it is the one deliberate addition the wireframe requires for
                this anonymous surface (there's no equivalent in-product,
                since that context is already known to be authenticated). */}
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-[#F0F1F5] px-4">
              <div className="flex flex-col justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- fixed-size brand mark, not content */}
                <img src="/sema-guide-logo.png" alt="ZoikoSema" height={22} className="w-auto" />
                <div className="mt-0.5 text-[11px] text-[#6B7280]">Public Zoiko Sema assistant</div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setOverflowOpen((o) => !o)}
                  aria-label="More options"
                  aria-haspopup="menu"
                  aria-expanded={overflowOpen}
                  className="grid h-11 w-11 place-items-center rounded-xl text-[#6B7280] transition hover:bg-[#F5F7FC] sm:h-9 sm:w-9"
                >
                  <MoreVertical className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close Sema Guide"
                  className="grid h-11 w-11 place-items-center rounded-xl text-[#6B7280] transition hover:bg-[#F5F7FC] sm:h-9 sm:w-9"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {overflowOpen && (
              <div className="border-b border-[#F0F1F5] px-4 py-3 text-[12.5px]">
                <p className="mb-2 text-[#6B7280]">
                  Need a person?
                </p>
                <div className="flex flex-col gap-1.5">
                  <a href="/contact-sales" className="font-medium text-[#3F63F2]">Contact Sales</a>
                  <a href="/customer-support" className="font-medium text-[#3F63F2]">Get Support</a>
                  <a href="https://meet.zoikosema.com/login" className="font-medium text-[#3F63F2]">Sign in to Sema</a>
                </div>
              </div>
            )}

            {/* Conversation area */}
            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && !loading ? (
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl bg-[#F5F7FC] p-5">
                    <h3 className="text-[15px] font-bold leading-snug text-[#111827]">
                      Hello — I&apos;m Sema Guide, Zoiko Sema&apos;s AI support agent.
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
                      I can answer questions about public Zoiko Sema information — plans, features, security and getting started.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {starters.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleSend(s)}
                        className="flex h-[38px] items-center justify-center rounded-xl border border-[#3F63F2] px-3 text-[12.5px] font-semibold text-[#3F63F2] transition hover:bg-[#3F63F2] hover:text-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <ChatMessage key={i} turn={m} verified={m.verified} sources={m.sources} />
                ))
              )}

              {loading && (
                <div className="flex items-center gap-1.5 px-1 py-2">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#9CA3AF]" style={{ animationDelay: "0s" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#9CA3AF]" style={{ animationDelay: "0.15s" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#9CA3AF]" style={{ animationDelay: "0.3s" }} />
                </div>
              )}

              {rateLimited && (
                <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-[12.5px] text-[#DC2626]">
                  You&apos;re sending messages too quickly. Please try again shortly.
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Composer */}
            <div className="shrink-0 border-t border-[#F0F1F5] px-4 pb-3 pt-3">
              <div className="flex items-end gap-2 rounded-xl border border-[#E5E8F0] bg-[#F9FAFB] px-3.5 py-2.5">
                <textarea
                  value={input}
                  onChange={(e) => e.target.value.length <= 500 && setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(input);
                    }
                  }}
                  placeholder="Ask about Zoiko Sema…"
                  disabled={loading}
                  rows={1}
                  maxLength={500}
                  className="min-h-[40px] flex-1 resize-none border-0 bg-transparent text-[13px] leading-snug text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition disabled:cursor-not-allowed disabled:bg-[#D9DCE5] disabled:text-[#9CA3AF]"
                  style={{ backgroundColor: input.trim() && !loading ? "#5B4CE6" : undefined }}
                >
                  <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
              <p className="mt-2 flex items-center justify-between text-[10.5px] leading-tight text-[#9CA3AF]">
                <span>AI-generated guidance. Verify consequential details.</span>
                <span>Privacy · <a href="/customer-support" className="underline">Contact support</a></span>
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
