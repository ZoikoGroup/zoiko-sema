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

          {/* Desktop Menu */}
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

          {/* Buttons */}
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

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            ☰
          </button>
        </div>

        {mobileMenu && (
          <div className="lg:hidden py-5 border-t">
            <div className="flex flex-col gap-5">

              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/demo"
                className="border border-blue-600 text-blue-600 px-5 py-3 rounded-full text-center"
              >
                Get a demo
              </Link>

              <Link
                href="/start-free"
                className="bg-blue-600 text-white px-5 py-3 rounded-full text-center"
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