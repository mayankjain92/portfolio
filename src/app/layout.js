import "./globals.css";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

export const metadata = {
  title: "Mayank Jain — Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Mayank Jain — Full Stack Developer specializing in Next.js 15, React, Node.js, Express, MongoDB, Redis, and scalable Web Architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen scroll-smooth ">
        <Navbar />
        <Background />
        {/* Page content */}
        <main className="relative z-10 pt-20 ">{children}</main>
      </body>
    </html>
  );
}
