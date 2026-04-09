import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Veloz — IEEE Chair Candidate",
  description: "Carlos Veloz for UTA IEEE Chair 2026-2027. Larger events. More funding. Real collaborations.",
  openGraph: {
    title: "Carlos Veloz — IEEE Chair Candidate",
    description: "Carlos Veloz for UTA IEEE Chair 2026-2027. Larger events. More funding. Real collaborations.",
    url: "https://carlos-veloz-castillo.github.io/IEEE-Campaign/",
    siteName: "Carlos Veloz for IEEE Chair",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} light h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}