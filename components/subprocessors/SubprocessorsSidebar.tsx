import Link from "next/link";

export function SubprocessorsSidebar() {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Current list", href: "#current-list" },
    { label: "Provider categories", href: "#provider-categories" },
    { label: "Data categories", href: "#data-categories" },
    { label: "Regions", href: "#regions" },
    { label: "Ecosystem map", href: "#ecosystem-map" },
    { label: "Change notices", href: "#change-notices" },
    { label: "Subscribe", href: "#subscribe" },
    { label: "Objections", href: "#objections" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="w-[300px] bg-slate-900 min-h-screen sticky top-0 border-r border-slate-800 hidden lg:block pt-32 pb-12 px-10 overflow-y-auto z-20">
      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6 font-['Plus_Jakarta_Sans']">
        ON THIS PAGE
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-bold font-['Plus_Jakarta_Sans'] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
