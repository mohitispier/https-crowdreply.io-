import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "CrowdReply - The #1 AI Search Visibility Tool",
  description:
    "The only AI search visibility platform with a built-in Engagement Engine. Track rankings, monitor cited conversations and place your brand where it matters.",
  openGraph: {
    title: "CrowdReply - The #1 AI Search Visibility Tool",
    description:
      "The only AI search visibility platform with a built-in Engagement Engine. Track rankings, monitor cited conversations and place your brand where it matters.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrowdReply - The #1 AI Search Visibility Tool",
    description:
      "The only AI search visibility platform with a built-in Engagement Engine. Track rankings, monitor cited conversations and place your brand where it matters.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
