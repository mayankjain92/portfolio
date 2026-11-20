import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mayankjain.dev"),
  title: {
    default: "Mayank Jain — Full Stack Developer & Software Engineer",
    template: "%s | Mayank Jain",
  },
  description:
    "Portfolio of Mayank Jain — Full Stack Developer specializing in Next.js 15, React, Node.js, Express, MongoDB, Redis, and scalable Web Architectures.",
  keywords: [
    "Mayank Jain",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Mayank Jain", url: "https://mayankjain.dev" }],
  creator: "Mayank Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mayank Jain — Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Mayank Jain — Full Stack Developer specializing in Next.js 15, React, Node.js, Express, MongoDB, Redis, and scalable Web Architectures.",
    url: "https://mayankjain.dev",
    siteName: "Mayank Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Jain — Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Mayank Jain — Full Stack Developer specializing in Next.js 15, React, Node.js, Express, MongoDB, Redis, and scalable Web Architectures.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative min-h-screen scroll-smooth antialiased`}>
        <Navbar />
        <Background />
        {/* Page content */}
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
