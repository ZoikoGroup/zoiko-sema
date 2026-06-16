import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoiko Sema — Intelligent Communication",
  description:
    "Sema brings secure messaging, audio calls, video meetings, AI summaries and team collaboration into one intelligent communication platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.className} min-h-full flex flex-col`}
      >
        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}