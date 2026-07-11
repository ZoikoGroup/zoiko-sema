"use client";

import React from "react";

export function SharedStyles() {
  return (
    <style>{`
      @keyframes pttFadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes pttFloat {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-10px); }
      }
      .ptt-hidden  { opacity: 0; transform: translateY(30px); }
      .ptt-visible { animation: pttFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

      .ptt-item { opacity: 0; transform: translateY(22px); }
      .ptt-group.ptt-group-in .ptt-item {
        animation: pttFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
      }

      .ptt-card {
        transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
      }
      .ptt-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(76,29,149,0.12);
      }
      
      .ptt-btn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
      .ptt-btn:hover { transform: translateY(-2px); }
      
      .ptt-float { animation: pttFloat 5s ease-in-out infinite; }

      @media (prefers-reduced-motion: reduce) {
        .ptt-hidden, .ptt-visible, .ptt-item { opacity: 1 !important; transform: none !important; animation: none !important; }
        .ptt-card:hover, .ptt-btn:hover, .ptt-float { transform: none !important; animation: none !important; }
      }
    `}</style>
  );
}
