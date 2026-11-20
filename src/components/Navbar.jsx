"use client";
import React, { useState, useEffect } from "react";
import FuzzyText from "./FuzzyText";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/15 py-3 shadow-2xl"
          : "bg-transparent py-4 border-b border-white/10"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#home"
          aria-label="Mayank Jain — Developer Portfolio Home"
          className="flex items-center gap-2"
        >
          <FuzzyText baseIntensity={0.05} hoverIntensity={0.1}>
            Mayank.dev
          </FuzzyText>
          <span className="sr-only">Mayank.dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-all duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}

          {/* Hire Me / Get in Touch Badge */}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-600/20 border border-violet-400/40 hover:bg-violet-600/40 hover:border-violet-400 transition-all duration-200 hover:scale-105"
          >
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-2xl border-b border-white/15 px-6 py-6 flex flex-col gap-4 text-sm font-medium shadow-2xl animate-in slide-in-from-top-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-violet-300 transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-violet-700 hover:bg-violet-600 text-white font-semibold text-sm border border-violet-400/40 min-h-[44px] flex items-center justify-center transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
