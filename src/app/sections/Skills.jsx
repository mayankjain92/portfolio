"use client";

import React from "react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-24 relative scroll-mt-24" id="skills">
      <div className="py-10">
        <div className="w-full max-w-6xl mx-auto px-4 mb-10">
          <p className="text-violet-400/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            What I bring to the table
          </p>
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
          <p className="text-white/40 mt-2 text-sm">
            Technologies and languages I actively work with.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass rounded-2xl w-full max-w-6xl overflow-hidden p-10">
            {/* Logo Marquee */}
            <div className="py-6">
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={42}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology logos"
              />
            </div>

            {/* Programming Languages (Primary Section) */}
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-amber-400/60 font-semibold mb-5">
                Programming Languages
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Java",
                  "C++",
                  "JavaScript",
                  "TypeScript",
                  "Kotlin (Basic)",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="text-sm px-4 py-2 rounded-xl bg-amber-500/5 border border-amber-400/20 text-white/80 hover:text-white hover:border-amber-400/40 transition-all duration-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Cards */}
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "Frontend",
                  icon: "🎨",
                  bg: "bg-violet-500/5",
                  border: "border-violet-400/20",
                  titleColor: "text-violet-300",
                  items: [
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                  ],
                },
                {
                  label: "Backend",
                  icon: "⚙️",
                  bg: "bg-cyan-500/5",
                  border: "border-cyan-400/20",
                  titleColor: "text-cyan-300",
                  items: ["Node.js", "MongoDB", "REST APIs"],
                },
                {
                  label: "Tooling",
                  icon: "🛠️",
                  bg: "bg-emerald-500/5",
                  border: "border-emerald-400/20",
                  titleColor: "text-emerald-300",
                  items: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
                },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className={`rounded-2xl p-6 border ${cat.border} ${cat.bg} backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{cat.icon}</span>
                    <h3
                      className={`text-sm uppercase tracking-widest font-semibold ${cat.titleColor}`}
                    >
                      {cat.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <p className="text-xs text-white/20 font-medium tracking-wide">
                Always learning · Always building
              </p>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/25 font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
