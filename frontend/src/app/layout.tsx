import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xelforo.io — Game Development, Tutorials & Community | Andrew Groves",
  description: "Xelforo.io is the official digital headquarters for Andrew Groves — a professional software engineer and game developer. Explore games (Xelforo, BunkerRun), tutorials, developer tools (Xelzip), and join a growing community of game developers.",
  keywords: ["game development", "Java game tutorial", "C++ game engine", "voxel game", "Xelforo", "BunkerRun", "Xelzip", "Andrew Groves", "game developer", "LWJGL", "OpenGL", "Minecraft plugin"],
  authors: [{ name: "Andrew Groves", url: "https://xelforo.io" }],
  creator: "Andrew Groves",
  publisher: "Xelforo.io",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xelforo.io",
    siteName: "Xelforo.io",
    title: "Xelforo.io — Game Development, Tutorials & Community",
    description: "Professional game development portfolio, tutorials, and community by Andrew Groves. Explore Xelforo (voxel game in beta), BunkerRun (Java FPS), Xelzip (decompiler tool), and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xelforo.io — Game Development by Andrew Groves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelforo.io — Game Development, Tutorials & Community",
    description: "Professional game development portfolio, tutorials, and community by Andrew Groves.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
