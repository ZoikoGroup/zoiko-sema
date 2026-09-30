/**
 * Page-aware starter prompts (ZS-CB-WF-001 Phase 7). Page context selects
 * which fixed prompt list to show — it never feeds page HTML, form values,
 * query parameters, or any other page state into the assistant itself
 * (WF-05). Falls back to the homepage set for any route not listed here.
 */

const STARTER_PROMPTS: Record<string, string[]> = {
  "/": ["What is Zoiko Sema?", "Explore plans", "Meetings & AI", "Get started"],
  "/pricing": ["Compare plans", "Which plan includes AI?", "Team vs Business", "Talk to sales"],
  "/ai-meetings": ["Meeting features", "AI summaries", "Security & privacy", "Get started"],
  "/messaging": ["Channels & spaces", "Search & files", "Team collaboration", "Plans"],
  "/audio-calls": ["Audio/video calling", "Supported use cases", "Plans", "Get started"],
  "/compliance": ["Data protection", "Admin controls", "Privacy", "Contact security/privacy team"],
  "/customer-support": ["Sign in", "Account help", "Product documentation", "Contact support"],
  "/help-center": ["Sign in", "Account help", "Product documentation", "Contact support"],
};

const DEFAULT_PROMPTS = STARTER_PROMPTS["/"];

export function starterPromptsForPath(pathname: string): string[] {
  return STARTER_PROMPTS[pathname] ?? DEFAULT_PROMPTS;
}

/**
 * Sensitive surfaces where the wireframe requires the widget to stay
 * hidden unless separately approved (WF-10): payment entry, password
 * reset, MFA challenge, credential entry. This marketing site (checked
 * 2026-09-30) has only /login among these today — payment, password
 * reset and MFA all live on the separate meet.zoikosema.com app, outside
 * this repo. /login is kept here since it's real and does collect
 * credentials; the list is intentionally easy to extend if this site
 * ever grows its own checkout/reset/MFA pages.
 */
const EXCLUDED_PATH_PREFIXES = ["/login"];

export function isChatExcludedOnPath(pathname: string): boolean {
  return EXCLUDED_PATH_PREFIXES.some((p) => pathname.startsWith(p));
}
