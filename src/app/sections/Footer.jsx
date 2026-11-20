import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4 mt-16 pb-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* name + tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-semibold text-sm">
            Mayank Jain
          </span>
          <span className="text-white/70 text-xs">
            Full Stack Developer · Jaipur, India
          </span>
        </div>

        {/* nav links */}
        <nav aria-label="Footer Navigation" className="flex items-center gap-6">
          {[
            { label: "About", href: "/#about" },
            { label: "Skills", href: "/#skills" },
            { label: "Projects", href: "/#projects" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* social links */}
        <div className="flex items-center gap-4 text-white/80">
          <a
            href="https://www.linkedin.com/in/mayank-jain-cse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded p-1"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/mayankjain92"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded p-1"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/mayyyankjain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded p-1"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:mayankjain96725@gmail.com"
            aria-label="Send Email"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded p-1"
          >
            <MdOutlineEmail className="w-4 h-4" />
          </a>
        </div>

        {/* copyright */}
        <span
          suppressHydrationWarning
          className="text-white/70 text-xs"
        >
          © {new Date().getFullYear()} Mayank Jain
        </span>
      </div>
    </footer>
  );
};

export default Footer;
