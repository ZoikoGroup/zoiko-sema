"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { title: "Product", url: "/product" },
  { title: "Solutions", url: "/solutions" },
  { title: "Use Cases", url: "/use-cases" },
  { title: "Pricing", url: "/pricing" },
  { title: "Resources", url: "/resources" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu — UNCHANGED */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="relative text-lg font-medium text-gray-800 group"
              >
                {item.title}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons — UNCHANGED */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/demo"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Get a demo
            </Link>
            <Link
              href="/start-free"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Start free
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-colors duration-200"
            style={{
              background: mobileMenu ? "#474787" : "#EEF2FF",
            }}
          >
            {mobileMenu ? (
              /* X icon when open */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              /* Hamburger icon when closed */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div
            className="lg:hidden py-5 border-t"
            style={{ borderColor: "rgba(71,71,135,0.12)" }}
          >
            <div className="flex flex-col gap-1">

              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors duration-150"
                  style={{ color: "#474787" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#EEF2FF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {/* brand-colored left dot accent */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#3B6FF7" }}
                  />
                  {item.title}
                </Link>
              ))}

              {/* Divider */}
              <div
                className="my-3 h-px"
                style={{ background: "rgba(71,71,135,0.1)" }}
              />

              {/* CTA buttons */}
              <Link
                href="/demo"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center px-5 py-3 rounded-full font-medium transition-colors duration-150"
                style={{
                  border: "1.5px solid #3B6FF7",
                  color: "#3B6FF7",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#EEF2FF")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                Get a demo
              </Link>

              <Link
                href="/start-free"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center px-5 py-3 rounded-full font-medium text-white transition-colors duration-150 mt-2"
                style={{ background: "#474787" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3B6FF7")}
                onMouseLeave={e => (e.currentTarget.style.background = "#474787")}
              >
                Start free
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}