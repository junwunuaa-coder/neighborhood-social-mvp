import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "邻里社交 MVP",
  description: "小区内部社交试点应用（MVP）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}>
        <TopNav />
        <main className="mx-auto min-h-[calc(100vh-56px)] max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
