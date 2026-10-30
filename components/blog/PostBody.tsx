import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "@/lib/blog/posts";

function textOf(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

const components: Components = {
  h2: ({ children }) => (
    <h2
      id={slugifyHeading(textOf(children))}
      className="mt-14 scroll-mt-28 text-2xl font-bold leading-snug text-gray-900 sm:text-[28px]"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-lg font-bold text-gray-900 sm:text-xl">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-[17px] leading-[1.8] text-[#45464D]">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  a: ({ href = "", children }) =>
    href.startsWith("/") ? (
      <Link href={href} className="font-semibold text-[#4F63F0] underline underline-offset-4 hover:text-[#3E51DE]">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#4F63F0] underline underline-offset-4 hover:text-[#3E51DE]"
      >
        {children}
      </a>
    ),
  ul: ({ children }) => <ul className="mt-5 space-y-3">{children}</ul>,
  li: ({ children }) => (
    <li className="relative pl-6 text-[17px] leading-[1.75] text-[#45464D] before:absolute before:left-0 before:top-[0.7em] before:h-2 before:w-2 before:rounded-full before:bg-[#4F63F0]">
      {children}
    </li>
  ),
  table: ({ children }) => (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-[#EBE8F4]">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#11163C] text-white">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
  tr: ({ children }) => <tr className="border-b border-[#EBE8F4] last:border-0 even:bg-[#F7F9FB]">{children}</tr>,
  td: ({ children }) => <td className="px-4 py-3 align-top leading-relaxed text-[#45464D]">{children}</td>,
};

export default function PostBody({ markdown }: { markdown: string }) {
  return (
    <div className="[&>p:first-child]:mt-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
