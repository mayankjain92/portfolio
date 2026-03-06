import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full max-w-5xl mx-auto px-4 mt-16 pb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* name + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-white font-semibold text-sm">
              Mayank Jain
            </span>
            <span className="text-white/25 text-xs">
              Full Stack Developer · Jaipur, India
            </span>
          </div>

          {/* nav links */}
          <div className="flex items-center gap-6">
            {[
              { label: "About", href: "/#about" },
              { label: "Skills", href: "/#skills" },
              { label: "Projects", href: "/#projects" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-white/30 hover:text-white/70 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>

          {/* copyright */}
          <span className="text-white/20 text-xs">
            © {new Date().getFullYear()} Mayank Jain
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
