/**
 * Client for the public, anonymous Sema Guide assistant (ZS-CB-WF-001).
 *
 * Talks to POST {NEXT_PUBLIC_SEMA_ASSISTANT_API_URL}/api/sema-guide/public/chat
 * on the Zoiko_Meet backend — a stateless, unauthenticated endpoint: no
 * cookies, no bearer token, no account. The client holds the conversation
 * and resends it each turn (same pattern the authenticated in-product
 * assistant already uses); the server independently caps how much of it
 * it will trust (see server/app/connect/sema_guide/service.py::public_chat).
 */

export type ChatRole = "user" | "assistant";

export interface ChatTurn {
  role: ChatRole;
  content: string;
}

export interface ChatSource {
  label: string;
  title: string;
}

export interface PublicChatResponse {
  response: string;
  verified: boolean;
  sources: ChatSource[];
  error_code?: string | null;
}

const FALLBACK_MESSAGE = "Chat is temporarily unavailable. Please try again later.";

function getApiBase(): string {
  return process.env.NEXT_PUBLIC_SEMA_ASSISTANT_API_URL?.replace(/\/$/, "") ?? "";
}

/** Bounded to the last few exchanges before it ever leaves the browser —
 * the server enforces its own independent cap regardless, but there is no
 * reason to ship an ever-growing payload on every keystroke's follow-up. */
export function trimHistory(history: ChatTurn[], maxTurns = 6): ChatTurn[] {
  return history.slice(-maxTurns);
}

export async function sendPublicChatMessage(
  message: string,
  history: ChatTurn[],
  sessionId?: string
): Promise<PublicChatResponse> {
  const base = getApiBase();
  if (!base) {
    // Misconfigured deployment (env var not set) — fail the same safe way
    // a real backend outage would, not with a raw fetch/type error in the
    // console (Phase 3 applies to the frontend's own failure modes too).
    return { response: FALLBACK_MESSAGE, verified: false, sources: [], error_code: "not_configured" };
  }

  try {
    const res = await fetch(`${base}/api/sema-guide/public/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Opaque, client-generated (see SemaGuideWidget's getOrCreateSessionId)
        // — never an auth credential. The backend doesn't key anything off it
        // today; carried so future abuse-pattern correlation or per-session
        // analytics doesn't need a client change to start reading it.
        ...(sessionId ? { "X-Sema-Guide-Session-Id": sessionId } : {}),
      },
      body: JSON.stringify({
        message,
        conversation: trimHistory(history).map((t) => ({ role: t.role, content: t.content })),
      }),
    });

    if (!res.ok) {
      return { response: FALLBACK_MESSAGE, verified: false, sources: [], error_code: `http_${res.status}` };
    }

    const data = (await res.json()) as PublicChatResponse;
    return {
      response: data.response ?? FALLBACK_MESSAGE,
      verified: Boolean(data.verified),
      sources: Array.isArray(data.sources) ? data.sources : [],
      error_code: data.error_code ?? null,
    };
  } catch {
    // Network failure, CORS misconfiguration, timeout — never let this
    // surface as an unhandled rejection in the widget (Phase 3/WF-09: a
    // chatbot failure must never affect the underlying website).
    return { response: FALLBACK_MESSAGE, verified: false, sources: [], error_code: "network_error" };
  }
}
