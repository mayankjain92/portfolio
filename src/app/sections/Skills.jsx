"use client";

import React from "react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiPnpm,
  SiGit,
  SiPostman,
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
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiPnpm />, title: "pnpm", href: "https://pnpm.io" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
];

const Skills = () => {
  return (
    <section className="w-full mt-24 relative scroll-mt-24" id="skills">
      <div className="py-10">
        <div className="w-full max-w-6xl mx-auto px-4 mb-10">
          <p className="text-violet-300 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            What I bring to the table
          </p>
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
          <p className="text-white/65 mt-2 text-sm">
            Technologies, frameworks, and architecture tools I actively build with.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass rounded-2xl w-full max-w-6xl overflow-hidden p-8 md:p-10">
            {/* Logo Marquee */}
            <div className="py-6 border-b border-white/5">
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={40}
                gap={50}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology logos"
              />
            </div>

            {/* Programming Languages */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold mb-4">
                Programming Languages
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "Java",
                  "C++",
                  "Kotlin (Basic)",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="text-xs md:text-sm font-medium px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-200/90 hover:text-white hover:border-amber-400/50 transition-all duration-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Frontend",
                  icon: "🎨",
                  bg: "bg-violet-500/5",
                  border: "border-violet-400/20 hover:border-violet-400/40",
                  titleColor: "text-violet-300",
                  items: [
                    "React.js",
                    "Next.js 15 (App Router)",
                    "Tailwind CSS",
                    "TanStack Query",
                    "Framer Motion",
                    "HTML5 / CSS3",
                  ],
                },
                {
                  label: "Backend & Databases",
                  icon: "⚙️",
                  bg: "bg-cyan-500/5",
                  border: "border-cyan-400/20 hover:border-cyan-400/40",
                  titleColor: "text-cyan-300",
                  items: [
                    "Node.js",
                    "Express.js",
                    "MongoDB & Mongoose",
                    "Redis (Cache-Aside)",
                    "Socket.IO",
                    "RESTful APIs",
                  ],
                },
                {
                  label: "Architecture & Tooling",
                  icon: "🛠️",
                  bg: "bg-emerald-500/5",
                  border: "border-emerald-400/20 hover:border-emerald-400/40",
                  titleColor: "text-emerald-300",
                  items: [
                    "pnpm Monorepos",
                    "Docker & Docker Compose",
                    "Zod Schema Validation",
                    "Git & GitHub",
                    "Postman",
                    "Vitest / Jest",
                  ],
                },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className={`rounded-2xl p-6 border ${cat.border} ${cat.bg} backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">{cat.icon}</span>
                      <h3
                        className={`text-xs uppercase tracking-widest font-semibold ${cat.titleColor}`}
                      >
                        {cat.label}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Status Bar */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-white/60 font-medium tracking-wide">
                Always learning · Always building high-performance software
              </p>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-300 font-semibold">
                  Available for full-time roles
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
