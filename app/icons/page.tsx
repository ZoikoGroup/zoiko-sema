
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Zoiko Sema Icons | Digital Brand Assets",
  description:
    "Explore the official Zoiko Sema icon library with brand, product and digital icons for consistent visual identity across websites, products and marketing.",
};

export default function IconsPage() {
  const dir = path.join(process.cwd(), "public", "sales-and-engagement");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".svg"));
  
  return (
    <div style={{ padding: "40px", backgroundColor: "white", color: "black", fontFamily: "sans-serif" }}>
      <h1>Icons</h1>
      <table border={1} cellPadding={20}>
        <tbody>
          {files.map(f => {
            const content = fs.readFileSync(path.join(dir, f), "utf8");
            return (
              <tr key={f}>
                <td>{f}</td>
                <td dangerouslySetInnerHTML={{ __html: content }} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

