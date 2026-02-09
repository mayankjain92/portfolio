"use client";
import React from "react";
import FuzzyText from "./FuzzyText";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-[999]
                 bg-black/30 backdrop-blur-2xl border-b border-white/20
                 text-white shadow-lg py-2"
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <FuzzyText baseIntensity={0.05} hoverIntensity={0.1}>
          Portfolio
        </FuzzyText>

        {/* Menu */}
        <div className="flex gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-violet-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-violet-400 transition">
            About
          </Link>
          <Link href="/skills" className="hover:text-violet-400 transition">
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
