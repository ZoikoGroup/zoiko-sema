'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GovernanceCard {
  title: string;
  description: string;
  badgeText: string;
  icon: React.ReactNode;
}

// ── Intersection observer hook for scroll-triggered activation ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function GovernedCollaboration() {
  // Separate observer triggers for the header vs the card grid
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  const cards: GovernanceCard[] = [
    {
      title: 'RBAC and roles',
      description: 'Role chips for Owner, Admin, Member, and Guest with access scoped to each workspace.',
      badgeText: 'Advanced roles · Business / Enterprise',
      icon: (
                 <img className='w-5 h-5'  src="/TeamCollaboration/Frame (1).png"/>

      )
    },
    {
      title: 'Guest & external access',
      description: 'Invite partners into controlled spaces with expiry, domain controls, and external chips.',
      badgeText: 'Domain controls · Enterprise setup',
      icon: (
                 <img className='w-5 h-5'  src="/TeamCollaboration/Frame (12).png"/>

      )
    },
    {
      title: 'Policy-based sharing',
      description: 'Workspace policies control how files, channels, and decisions are shared and retained.',
      badgeText: 'Data policies · Enterprise',
      icon: (
         <img className='w-5 h-5'  src="/TeamCollaboration/Frame (10).png"/>
      )
    },
    {
      title: 'AI guardrails',
      description: "Administrators control where AI summaries run, what they access, and how long they're retained.",
      badgeText: 'Admin-controlled AI',
      icon: (
                 <img className='w-5 h-5'  src="/TeamCollaboration/Frame (14).png"/>

      )
    },
    {
      title: 'Audit visibility',
      description: 'Event timelines and exportable logs give IT clear, auditable collaboration history.',
      badgeText: 'Audit export · Enterprise',
      icon: (
                         <img className='w-5 h-5'  src="/TeamCollaboration/Frame (13).png"/>

      )
    },
    {
      title: 'SSO / MFA',
      description: 'Connect Okta, Microsoft Entra ID, or SAML/OIDC for secure access and simple rollout.',
      badgeText: 'Identity · Enterprise setup',
      icon: (
                 <img className='w-5 h-5'  src="/TeamCollaboration/Frame (11).png"/>

      )
    }
  ];

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes gcFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .gc-hidden  { opacity: 0; transform: translateY(36px); }
        .gc-visible { animation: gcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── Card hover polish ── */
        .gc-card {
          will-change: transform, box-shadow;
          transition: transform .32s cubic-bezier(.22,1,.36,1),
                      box-shadow .32s cubic-bezier(.22,1,.36,1),
                      border-color .32s ease,
                      background-color .32s ease;
        }
        .gc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.22);
        }

        .gc-icon-wrap {
          transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .3s ease;
        }
        .gc-card:hover .gc-icon-wrap {
          transform: scale(1.1) rotate(3deg);
          background-color: rgba(59,130,246,0.32);
        }

        .gc-title {
          transition: color .3s ease;
        }
        .gc-card:hover .gc-title {
          color: #93c5fd;
        }

        .gc-badge {
          transition: background-color .3s ease, border-color .3s ease, transform .3s ease;
        }
        .gc-card:hover .gc-badge {
          background-color: rgba(59,130,246,0.22);
          border-color: rgba(59,130,246,0.45);
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .gc-hidden, .gc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .gc-card:hover, .gc-card:hover .gc-icon-wrap, .gc-card:hover .gc-badge { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-slate-900 text-white py-20 antialiased">
        <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
          
          {/* Header Block Section — Reveals on scroll entrance */}
          <div
            ref={headRef}
            className={`max-w-[720px] w-full text-center flex flex-col items-center space-y-3 gc-hidden ${
              headInView ? "gc-visible" : ""
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">
              Governed Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-10">
              Team collaboration that can scale with control
            </h2>
            <p className="text-base text-slate-400 leading-relaxed max-w-[660px]">
              Use role-based access, guest controls, workspace policies, AI guardrails, audit visibility, and integrations to keep collaboration structured as teams grow.
            </p>
          </div>

          {/* Feature Grid Component Block — Cascades up on scroll entrance */}
          <div
            ref={gridRef}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className={`gc-card bg-white/[0.04] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-5 gc-hidden ${
                  gridInView ? "gc-visible" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* SVG Visual Emblem Wrapper */}
                  <div className="gc-icon-wrap size-11 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  
                  {/* Information Header Block */}
                  <div className="space-y-1.5">
                    <h3 className="gc-title text-white text-base font-bold leading-5">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Scope Hierarchy Label Tag */}
                <div className="gc-badge w-fit px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full inline-flex justify-center items-center">
                  <span className="text-blue-400 text-xs font-semibold leading-4">
                    {card.badgeText}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}