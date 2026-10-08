import type { NextConfig } from "next";

// Old URLs that were linked but never existed (reported as 404s in search).
// Permanently redirect them to the real pages.
const legacyRedirects: Record<string, string> = {
  "/ai-use-poilicy": "/ai-use-policy",
  "/terms": "/terms-of-service",
  "/system-status": "/status",
  "/sema/start-free": "/start-free",
  "/sema/contact-sales": "/contact-sales",
  "/sema/ai": "/sema-ai",
  "/sema/admin-console": "/admin-console",
  "/sema/channels-spaces": "/channels-spaces",
  "/sema/meetings": "/ai-meetings",
  "/sema/client-workflows": "/freelancer-workflows",
  "/insights": "/insights-analytics",
  "/contact-support": "/customer-support",
  "/get-support": "/customer-support",
  "/report-abuse": "/report-concern",
  "/remote-work": "/use-cases/remote-hybrid-work",
  "/regulated-industries": "/regulated-workflows",
  "/resources/sema-zoikotime-integration": "/sema-zoikotime",
  "/solutions/teams": "/team-collaboration",
  "/solutions/freelancers": "/freelancer-workflows",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
