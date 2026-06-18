"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}


export default function UseCasesWorkflowSection({
  consoleImageUrl = "/Use-case/workflow-console.webp",
}: {
  consoleImageUrl?: string;
}) {
  const { ref: headRef,    inView: headIn    } = useInView(0.2);
  const { ref: consoleRef, inView: consoleIn } = useInView(0.08);
  const { ref: imgRef,     inView: imgIn     } = useInView(0.08);

  const [active, setActive]       = useState(0);
  const [animKey, setAnimKey]     = useState(0);
  const [sidebarIn, setSidebarIn] = useState(false);

  useEffect(() => {
    if (consoleIn) setTimeout(() => setSidebarIn(true), 200);
  }, [consoleIn]);

  function selectWorkflow(i: number) {
    setActive(i);
    setAnimKey(k => k + 1);
  }



  return (
    <>
      <style>{`
        @keyframes ucwFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ucw-hidden  { opacity:0; transform:translateY(26px); }
        .ucw-visible { animation: ucwFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* console entrance */
        @keyframes ucwConsoleIn {
          from { opacity:0; transform:translateY(20px) scale(.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .ucw-console { opacity:0; }
        .ucw-console.on { animation: ucwConsoleIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* sidebar item stagger */
        @keyframes ucwSideIn {
          from { opacity:0; transform:translateX(-14px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .ucw-side-item { opacity:0; }
        .ucw-sidebar-in .ucw-side-item:nth-child(1) { animation: ucwSideIn .4s ease .1s  forwards; }
        .ucw-sidebar-in .ucw-side-item:nth-child(2) { animation: ucwSideIn .4s ease .2s  forwards; }
        .ucw-sidebar-in .ucw-side-item:nth-child(3) { animation: ucwSideIn .4s ease .3s  forwards; }
        .ucw-sidebar-in .ucw-side-item:nth-child(4) { animation: ucwSideIn .4s ease .4s  forwards; }

        /* artifact panel content switch */
        @keyframes ucwPanelIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ucw-panel-content { animation: ucwPanelIn .35s ease forwards; }

        /* artifact section entrance */
        @keyframes ucwBlockIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ucw-block { opacity:0; }
        .ucw-block.b1 { animation: ucwBlockIn .35s ease .05s forwards; }
        .ucw-block.b2 { animation: ucwBlockIn .35s ease .18s forwards; }
        .ucw-block.b3 { animation: ucwBlockIn .35s ease .31s forwards; }
        .ucw-block.b4 { animation: ucwBlockIn .35s ease .44s forwards; }

        /* workflow item hover */
        .ucw-wf-btn { transition: background .2s ease, transform .15s ease; }
        .ucw-wf-btn:not(.active):hover { background: rgba(71,71,135,0.06)!important; transform:translateX(2px); }

        /* step pill */
        .ucw-step { transition: background .2s; }

        /* img section */
        @keyframes ucwImgIn {
          from { opacity:0; transform:translateY(20px) scale(.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .ucw-img-wrap { opacity:0; }
        .ucw-img-wrap.on { animation: ucwImgIn .7s cubic-bezier(.22,1,.36,1) forwards; }
        .ucw-img-wrap:hover img { transform:scale(1.015); }
        .ucw-img-wrap img { transition:transform .5s ease; }

        @media (prefers-reduced-motion:reduce) {
          .ucw-hidden,.ucw-console,.ucw-side-item,.ucw-block,.ucw-img-wrap {
            opacity:1!important; transform:none!important; animation:none!important;
          }
          .ucw-visible { animation:none!important; opacity:1!important; }
          .ucw-panel-content { animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Pick a workflow"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`ucw-hidden ${headIn ? "ucw-visible" : ""} text-center mb-10`}>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              Pick a workflow. See the artifact Sema produces.
            </h2>
            <p className="mx-auto max-w-[780px] text-[15px] leading-[1.8] text-gray-500">
              Each workflow ends in a concrete output — a meeting summary, a client record,
              a coordinated task or a permissioned ZoikoTime signal. Select a workflow to
              see what Sema generates.
            </p>
          </div>

        

          {/* ── Bottom image ── */}
          <div
            ref={imgRef}
            className={`ucw-img-wrap ${imgIn ? "on" : ""} w-full rounded-2xl overflow-hidden`}
            style={{ border: "1px solid #e5e7eb", boxShadow: "0 4px 32px rgba(71,71,135,0.08)" }}
          >
            <img
              src={consoleImageUrl}
              alt="Sema Workflow Console full view"
              className="w-full h-auto block"
              loading="lazy"
              draggable={false}
            />
          </div>

        </div>
      </section>
    </>
  );
}