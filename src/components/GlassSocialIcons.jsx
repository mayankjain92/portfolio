"use client";
import React from "react";

/* Glass icon wrapper with hover color */
const GlassIcon = ({
  href,
  label,
  children,
  size = 56,
  hoverColor = "white",
}) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-2xl p-2 transition-transform transform-gpu hover:scale-110 focus:scale-110 focus:outline-none"
      style={{ width: size, height: size }}
    >
      <div
        className="w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-3xl bg-black/10 border border-white/20 ring-1 ring-black/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-colors duration-300"
        style={{
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          className="w-3/5 h-3/5 flex items-center justify-center text-white text-2xl"
          style={{ transition: "color 0.1s" }}
        >
          {React.cloneElement(children, {
            style: { color: "currentColor", transition: "color 0.9s" },
            className: "w-full h-full",
          })}
        </div>
      </div>
      <style jsx>{`
        a:hover > div > div {
          color: ${hoverColor};
        }
      `}</style>
    </a>
  );
};

/* Dynamic Social Icons component with brand colors */
export default function GlassSocialIcons({
  socials = [],
  size = 56,
  className = "",
}) {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      {socials.map(({ href, label, Icon, color }, index) => (
        <GlassIcon
          key={index}
          href={href}
          label={label}
          size={size}
          hoverColor={color}
        >
          <Icon />
        </GlassIcon>
      ))}
    </div>
  );
}
