import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SemaGuideWidget from "@/components/chatbot/SemaGuideWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoiko Sema | AI Communication for Verified Work",
  description:
    "Zoiko Sema turns conversations into accountable work with secure messaging, video meetings, AI summaries, and ZoikoTime workforce truth for serious teams.",
  verification: {
    google: "1240l0gxTMKux_pFWRJ_orBzM5aK2kil_wLkFBdpiXo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is a governed communication and collaboration platform for meetings, messaging, audio calls, video calls, channels, files, search, and AI-assisted follow-up. It helps people and organizations keep conversations, decisions, action items, owners, and work context connected in one secure workspace."
    }
  },{
    "@type": "Question",
    "name": "What does Zoiko Sema help organizations do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema helps organizations communicate, coordinate, and follow through without scattering important context across unrelated tools. Teams can meet, message, share information, generate reviewable summaries, confirm decisions, assign actions, and retain searchable records under role-based and workspace-level controls."
    }
  },{
    "@type": "Question",
    "name": "Who is Zoiko Sema designed for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is designed for individuals, freelancers, project teams, small businesses, growing organizations, enterprises, remote teams, and compliance-sensitive operations. A person can start independently, while organizations can add administration, security, retention, governance, and enterprise deployment controls as their needs grow."
    }
  },{
    "@type": "Question",
    "name": "How is Zoiko Sema different from Zoom, Microsoft Teams, Slack, or Google Meet?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema combines communication with governed follow-through. Its differentiating focus is the connection between meetings, messages, AI-assisted summaries, decisions, action items, searchable work memory, and optional ZoikoTime context. Buyers should compare current features, integrations, security requirements, pricing, and deployment needs before choosing any platform."
    }
  },{
    "@type": "Question",
    "name": "Can individuals use Zoiko Sema without a company account?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Individuals can use Zoiko Sema for messaging, calls, meetings, personal groups, and eligible AI features without first joining a company workspace. They can remain individual users or later create or join a governed team or business workspace when collaboration needs become more structured."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema include messaging, audio calls, and video meetings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema brings messaging, audio calls, and video meetings into the same workspace. Users can move from a message to a call or meeting while keeping the surrounding chat, participants, files, decisions, and follow-up connected to the relevant person, group, channel, or project."
    }
  },{
    "@type": "Question",
    "name": "What are Zoiko Sema AI Meeting Summaries?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema AI Meeting Summaries are reviewable meeting recaps that organize the discussion into useful work outputs. Depending on the meeting and policy settings, a summary can include key points, confirmed decisions, action items, owners, due dates, risks, unresolved questions, and a draft follow-up."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema AI act automatically without human approval?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Zoiko Sema AI is designed to assist within permissions and policy, not operate as an unrestricted decision-maker. AI-generated summaries, decisions, owners, actions, and follow-up drafts remain reviewable. Authorized users and workspace rules determine what may be approved, shared, exported, retained, or sent."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema secure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is designed with layered controls for accounts, meetings, messages, channels, AI features, administration, integrations, and data governance. Available protections depend on the plan, role, workspace policy, region, and deployment. Organizations should review the Trust Center and request current security evidence for procurement decisions."
    }
  },{
    "@type": "Question",
    "name": "What controls can Zoiko Sema administrators manage?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Depending on plan and role, administrators can manage users, identity settings, roles, permissions, guest access, meeting policies, AI availability, sensitive-workspace exclusions, retention, exports, audit visibility, integrations, credentials, and other workspace settings. The applicable Admin Console should be treated as the operational source of truth."
    }
  },{
    "@type": "Question",
    "name": "What Zoiko Sema plans are available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema currently presents four plan routes: Free for individuals getting started, Pro for freelancers and professionals, Business for teams that need governance, and Enterprise for scaled or regulated deployment. Prices, entitlements, minimum seats, and availability should always be confirmed on the current Pricing page."
    }
  },{
    "@type": "Question",
    "name": "How do I get started with Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Choose Start Free for individual use or initial evaluation. Organizations that need Business or Enterprise administration, security review, data-residency discussion, custom integrations, compliance support, or ZoikoTime should request a guided demonstration and deployment conversation before production rollout."
    }
  },{
    "@type": "Question",
    "name": "What are Channels and Spaces in Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Channels and Spaces are persistent collaboration areas for teams, departments, projects, clients, communities, and sensitive workflows. They keep messages, meetings, files, summaries, decisions, and responsibilities organized around the correct subject or group instead of leaving important context inside disconnected chats and inboxes."
    }
  },{
    "@type": "Question",
    "name": "Can external guests, clients, or contractors join Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "External participants can be given scoped access to approved meetings, channels, or spaces where guest access is enabled. Workspace administrators can govern what guests can see, do, share, download, or retain. Availability and exact controls depend on plan, role, workspace policy, and the external-collaboration configuration."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema support meeting recording, captions, and transcripts?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema supports meeting records such as recording, captions, and transcripts where the feature is enabled and permitted by the applicable plan and workspace policy. Hosts and organizations remain responsible for legally required notices, permissions, and participant consent. Confidential Mode and other restricted meetings may disable server-side processing."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema include mail, calendar, files, and search?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is designed as a connected workspace that includes mail, calendar, files, search, meetings, messaging, and AI-assisted summaries. Exact feature availability, quotas, integrations, and release status can vary by plan and device, so users should confirm the current product and pricing pages before relying on a specific capability."
    }
  },{
    "@type": "Question",
    "name": "Can I use Zoiko Sema on mobile, web, and desktop?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema supports web and mobile use, with desktop-oriented experiences for richer meeting, transcript, summary, and administration workflows. The exact applications, operating systems, feature parity, and minimum device requirements should be confirmed on the current Download Apps and Help Center pages."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema suitable for remote and hybrid teams?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema helps remote and hybrid teams combine live meetings with asynchronous messaging, files, searchable summaries, decisions, handoffs, and follow-up. This allows people in different locations and time zones to understand what changed, who owns the next step, and where the supporting context is stored."
    }
  },{
    "@type": "Question",
    "name": "What information can a Zoiko Sema meeting summary include?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A Zoiko Sema meeting summary can include an executive recap, key discussion points, confirmed decisions, rationale, action items, owners, due dates, blockers, risks, dependencies, unresolved questions, and suggested follow-up. The exact output depends on the meeting content, enabled features, workspace policy, and the information available to the AI workflow."
    }
  },{
    "@type": "Question",
    "name": "Can Zoiko Sema identify action items, owners, and due dates?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema can identify proposed action items, likely owners, and mentioned due dates from an enabled meeting or call. These are suggestions until an authorized user reviews and confirms the task, owner, deadline, and scope. The source context should remain available so reviewers can validate the interpretation."
    }
  },{
    "@type": "Question",
    "name": "Can Zoiko Sema draft a meeting follow-up email?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema can prepare a reviewable follow-up draft using the approved meeting summary, decisions, actions, owners, and next steps. A user must check the recipients, wording, confidentiality, attachments, commitments, and dates before sending. AI assistance does not transfer responsibility for the communication away from the sender."
    }
  },{
    "@type": "Question",
    "name": "Can users edit or reject an AI-generated meeting summary?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Authorized users can review, correct, reorganize, regenerate, approve, or reject an AI-generated summary before it becomes an accepted or shared work record. Material decisions, commitments, ownership, deadlines, legal statements, and sensitive information should be checked against the meeting record and organizational policy."
    }
  },{
    "@type": "Question",
    "name": "Are Zoiko Sema meeting summaries searchable?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Approved meeting summaries can be connected to workspace search so users can find outcomes by topic, decision, person, date, project, client, or action. Search visibility follows the user’s permissions, workspace boundaries, retention settings, and the access rules applied to the original meeting and summary."
    }
  },{
    "@type": "Question",
    "name": "Can administrators control when AI Meeting Summaries are used?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Depending on plan and role, administrators can control which workspaces use AI summaries, who can generate or view them, whether external-participant meetings are eligible, how outputs may be shared or exported, how long they are retained, and which sensitive workspaces exclude AI entirely."
    }
  },{
    "@type": "Question",
    "name": "How does Confidential Mode affect AI Meeting Summaries?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Confidential Mode creates a stricter processing boundary. Meetings using that mode do not expose their content to the standard AI-summary workflow, so server-side AI summarization is disabled for that meeting context. Users should confirm the exact restrictions, participant notices, recording behavior, and device requirements before relying on Confidential Mode."
    }
  },{
    "@type": "Question",
    "name": "How does Zoiko Sema approach security?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema applies security across the full communication workflow: accounts, identity, meetings, messaging, channels, AI summaries, administration, integrations, retention, and data governance. Security is a shared responsibility between the platform and workspace administrators, who must configure access, roles, policies, notices, integrations, and retention appropriately."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema support SSO, SAML, SCIM, and multifactor authentication?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enterprise plans list SSO, SAML, and SCIM capabilities, while multifactor authentication and related identity controls are available where supported. Exact identity-provider compatibility, provisioning behavior, enforcement options, session controls, device controls, and implementation requirements must be confirmed during technical review and reflected in the customer’s deployment plan."
    }
  },{
    "@type": "Question",
    "name": "How are roles, permissions, and guest access controlled?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema uses role- and workspace-based controls to limit who can administer, host, join, view, share, export, or modify information. Administrators should apply least-privilege access, review guest boundaries, remove stale access, and separate sensitive workspaces. Exact permissions depend on the role model, plan, and enabled feature."
    }
  },{
    "@type": "Question",
    "name": "Can organizations configure retention, exports, and audit visibility?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Business and Enterprise capabilities can support configurable retention, export, deletion, and audit workflows where enabled. Administrators may review selected security events, administrative actions, policy changes, AI activity, sharing, and exports. Exact event coverage, retention periods, legal-hold support, and export formats must be confirmed for the deployment."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema support data residency?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data-residency options depend on the plan, deployment region, technical architecture, service availability, and contractual arrangement. Enterprise buyers should request the current list of supported regions, data categories, subprocessors, transfer mechanisms, backup locations, and operational exceptions rather than relying on a general residency statement."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema ISO 27001 or SOC 2 certified?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Do not infer certification from a badge, framework name, or readiness statement. Buyers should review the Zoiko Sema Trust Center and request the latest approved certificate, attestation, scope, audit period, issuing body, and exceptions. Zoiko Sema should state “certified” or “SOC 2 Type II” publicly only when current evidence formally supports that claim."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema compliant with GDPR, HIPAA, CCPA, PCI DSS, or FedRAMP?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A software platform does not make every customer or use case automatically compliant. Zoiko Sema may provide controls, agreements, evidence, or deployment options that support particular obligations, but applicability depends on the customer’s configuration, data, notices, consent, contracts, location, and operating practices. Request a formal review for the relevant requirement."
    }
  },{
    "@type": "Question",
    "name": "Can Zoiko Sema support regulated or sensitive workflows?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is designed to support governed communication through access control, policy, retention, auditability, review-first AI, controlled sharing, and enterprise review pathways. Healthcare, legal, financial, government, employment, and other regulated uses require a documented security, privacy, legal, compliance, and configuration assessment before production deployment."
    }
  },{
    "@type": "Question",
    "name": "How can I request a Zoiko Sema security review or report a concern?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use the Trust Center to request security, privacy, AI-governance, data-processing, subprocessor, or procurement materials. Use the dedicated Report a Concern route for suspected vulnerabilities, unauthorized access, privacy issues, harmful or unauthorized AI output, abuse, or accessibility barriers. Do not submit sensitive incident details through public comments or social media."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema currently offers a Free plan for individuals getting started, with no credit card required according to the public Pricing page. The Free plan includes core communication and basic AI capabilities, subject to current limits, fair-use rules, feature availability, and the applicable Terms of Service."
    }
  },{
    "@type": "Question",
    "name": "How much does Zoiko Sema cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The current public Pricing page lists Free at $0, Pro at $14 per user per month, Business at $24 per user per month with a three-seat minimum, and Enterprise at custom pricing. Billing cycle, taxes, currency, discounts, seat count, add-ons, and contract terms can change the final price."
    }
  },{
    "@type": "Question",
    "name": "Which Zoiko Sema plans are available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema currently presents Free, Pro, Business, and Enterprise plans. Free supports initial individual use; Pro adds fuller AI and productivity capabilities; Business adds administration, governance, and Confidential Mode; Enterprise adds scaled identity, retention, compliance, deployment, support, integration, and ZoikoTime options."
    }
  },{
    "@type": "Question",
    "name": "What does Zoiko Sema Business add over Pro?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Business adds organization-level governance on top of Pro capabilities. The current public Pricing page highlights the Admin Console, policies, Confidential Mode, security controls, retention, and compliance-oriented functionality. Business currently requires a three-seat minimum. Exact entitlements and quotas should be confirmed in the live comparison table."
    }
  },{
    "@type": "Question",
    "name": "How is Zoiko Sema Enterprise priced?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enterprise pricing is tailored to the organization’s seat count, deployment model, identity requirements, regions, retention, security review, compliance needs, support model, integrations, onboarding, and ZoikoTime scope. A buyer should request a written quote and entitlement schedule rather than relying on a generic per-user estimate."
    }
  },{
    "@type": "Question",
    "name": "Does ZoikoTime cost extra with Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ZoikoTime is a separate, independently priced subscription. Business customers may add governed integration configuration where approved, while Enterprise deployments can include a permissioned ZoikoTime design within the broader solution. The commercial proposal should state both the Zoiko Sema and ZoikoTime charges, scope, users, and implementation responsibilities."
    }
  },{
    "@type": "Question",
    "name": "Can I change my Zoiko Sema plan or billing cycle?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The current Pricing page states that customers can upgrade, downgrade, or switch between monthly and annual billing from account settings, with charges prorated accordingly. The controlling billing terms, effective date, refund treatment, minimum commitment, seat changes, and enterprise contract conditions should be confirmed before making a change."
    }
  },{
    "@type": "Question",
    "name": "What is ZoikoTime?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ZoikoTime is a separate workforce-truth and time-intelligence platform within the Zoiko ecosystem. It helps authorized organizations connect approved work records, time context, projects, tasks, meetings, decisions, approvals, and operational evidence under defined permissions and policies. It is independently priced and deployed according to the customer’s requirements."
    }
  },{
    "@type": "Question",
    "name": "How do Zoiko Sema and ZoikoTime work together?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema captures communication context such as meetings, messages, decisions, action items, owners, and follow-up. Where authorized and configured, ZoikoTime can connect approved work records to time, project, operational, workforce, billing, or compliance context. The integration must follow role, consent, policy, data-minimization, and audit requirements."
    }
  },{
    "@type": "Question",
    "name": "Is ZoikoTime employee-surveillance software?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ZoikoTime should be deployed around authorized work evidence and accountable workflows, not covert monitoring of private behavior. Its intended focus is approved records such as tasks, meetings, decisions, projects, time entries, and outcomes. Customers remain responsible for lawful workplace notices, consultation, consent where required, proportionality, and employee-access rights."
    }
  },{
    "@type": "Question",
    "name": "Can Zoiko Sema or ZoikoTime make automatic employment decisions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. AI and automation may summarize information, identify exceptions, or route items for review, but they should not independently make hiring, termination, pay, promotion, disciplinary, performance, or other material employment decisions. Authorized people must review the evidence, apply organizational policy, and provide appropriate due process."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema suitable for enterprise deployment?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Zoiko Sema Enterprise is intended for scaled or regulated deployments that require advanced identity, administration, retention, security review, compliance support, custom integrations, onboarding, dedicated support, and optional ZoikoTime design. Production rollout should follow a documented discovery, security, legal, configuration, migration, training, and acceptance process."
    }
  },{
    "@type": "Question",
    "name": "Does Zoiko Sema provide APIs, webhooks, and integrations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema supports developer and integration pathways that may include APIs, OAuth connections, webhooks, credentials, and customer-directed integrations. Access depends on plan, role, approved use case, technical availability, scopes, rate limits, security requirements, and administrator authorization. Review the Developer Docs for current endpoints and limitations."
    }
  },{
    "@type": "Question",
    "name": "Is Zoiko Sema accessible?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoiko Sema is designed to support accessible communication and collaboration. The official Accessibility page should state the current standards target, supported assistive technologies, known limitations, accommodation process, and barrier-reporting route. Users who encounter an accessibility issue should report the affected page, device, browser, and task."
    }
  },{
    "@type": "Question",
    "name": "Where can I check Zoiko Sema service status?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use the public System Status page to review current service availability, incidents, degraded performance, planned maintenance, and recovery updates. Users should check that page before assuming a local device, network, browser, application, or account problem is a platform-wide incident."
    }
  },{
    "@type": "Question",
    "name": "Where can Zoiko Sema users get help?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Start with the Zoiko Sema Help Center for account setup, product guidance, meeting help, administration, billing, integrations, and troubleshooting. Existing customers should use the authorized support channel included with their plan. Security, privacy, AI, abuse, and accessibility concerns should use the dedicated concern routes."
    }
  },{
    "@type": "Question",
    "name": "How can I submit a privacy request to Zoiko Sema?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use the privacy-request route identified in the Privacy Notice or Trust Center. Provide enough information to verify your identity and identify the relevant account, workspace, data, and requested action, but do not submit unnecessary sensitive information. The applicable privacy law, exceptions, and response process depend on the request and jurisdiction."
    }
  },{
    "@type": "Question",
    "name": "How do I request a Zoiko Sema demonstration or enterprise consultation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use the Get a Demo or Contact Sales route and provide your organization, role, approximate number of users, current tools, priority use cases, deployment regions, identity requirements, integrations, security or compliance needs, ZoikoTime interest, and target timeline. This allows the request to reach the appropriate commercial and technical team."
    }
  }]
}`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.className} min-h-full flex flex-col`}
      >
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <SemaGuideWidget />
      </body>
    </html>
  );
}
