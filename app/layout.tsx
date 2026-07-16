import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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