"use client";
import React from "react";
import GooeyNav from "./GooeyNav";
import FuzzyText from "./FuzzyText";

const Navbar = () => {
  // update with your own items
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#" },
  ];
  return (
    <div
      className="py-5 px-3 w-full fixed top-0 z-[999] 
                    bg-black/30 backdrop-blur-2xl border-b border-white/20 
                    text-white shadow-lg"
    >
      <div className="font-['Test Founders Gtsk X-Cond SmB'] text-xl font-bold flex items-center justify-between">
        {/* Portfolio */}
        <FuzzyText
          baseIntensity={0.05}
          hoverIntensity={0.1}
          // enableHover={enableHover}
        >
          Portfolio
        </FuzzyText>
        {/* MenuBar */}
        <div className="flex gap-20 text-sm">
          {/* <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a> */}
          <div className="hover:text-gray-300 transition">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[70, 5]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={400}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
