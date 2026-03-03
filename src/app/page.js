"use client";
import React from "react";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight, ExternalLink, Code2, Layers, Zap } from "lucide-react";
import Link from "next/link";

const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "VS Code",
];

const PROJECTS = [
  {
    idx: "01",
    title: "Mystery Message",
    desc: "Mystery Message allows users to receive honest, anonymous feedback from anyone through a unique profile link — without revealing the sender's identity. Built with a strong focus on privacy, security, and a polished user experience.",
    tags: ["NExtjs", "MongoDB", "Gemini AI"],
    Icon: Code2,
    href: "/projects",
  },
  {
    idx: "02",
    title: "Portfolio Website",
    desc: "A modern portfolio built with Next.js and Tailwind CSS, focused on smooth interactions, reusable components, and responsive UI across all devices.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    Icon: Layers,
    href: "/projects",
  },
  {
    idx: "03",
    title: "Task Manager App",
    desc: "A productivity app with task organisation, status tracking, priority labels, and a minimal interface designed for daily professional use.",
    tags: ["React", "LocalStorage", "SCSS"],
    Icon: Zap,
    href: "/projects",
  },
];

const Page = () => {
  const [isProjectsHeadingSticky, setIsProjectsHeadingSticky] =
    React.useState(true);
  const projectsSectionRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = projectsSectionRef.current;
      if (!section) return;
      if (window.scrollY < section.offsetTop - 120)
        setIsProjectsHeadingSticky(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white px-4 pb-24">
      <div className="w-full max-w-5xl mx-auto pt-24 space-y-7">
        {/* ── Hero ── */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="glass px-4 py-1.5 rounded-full text-sm tracking-wide text-white/80">
            Full Stack Developer • Open to Opportunities
          </span>

          <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight max-w-3xl">
            Building Scalable, End-to-End Web Applications from UI to API
          </h1>

          <p className="text-white/75 max-w-2xl text-base md:text-lg">
            Full Stack Developer skilled in React, Next.js, Node.js, and
            databases — turning ideas into complete, production-ready products
            with clean code on every layer.
          </p>

          <GlassSocialIcons
            socials={[
              {
                href: "https://www.linkedin.com/in/mayank-jain-b39a8a287/",
                label: "LinkedIn",
                Icon: FaLinkedin,
                color: "#0A66C2",
              },
              {
                href: "https://github.com/mayankjain92",
                label: "GitHub",
                Icon: FaGithub,
                color: "#000",
              },
              {
                href: "https://x.com/92_jainmayank",
                label: "X.com",
                Icon: FaXTwitter,
                color: "#000",
              },
              {
                href: "https://instagram.com/username",
                label: "Instagram",
                Icon: FaInstagram,
                color: "#E1306C",
              },
              {
                href: "mailto:mayankjain96725@gmail.com",
                label: "Gmail",
                Icon: MdOutlineEmail,
                color: "#EA4945",
              },
            ]}
            size={58}
          />
        </div>

        {/* ── About card ── */}
        <div className="glass rounded-3xl px-6 py-8 md:px-10 md:py-10 text-white grid grid-cols-1 md:grid-cols-[1.45fr_0.55fr] gap-8 items-center">
          <div>
            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              Available for opportunities
            </span>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Hi, I&apos;m <strong className="text-white">Mayank Jain</strong>,
              a passionate full stack developer currently pursuing my B.Tech in
              Computer Science Engineering at{" "}
              <span className="text-violet-300">JECRC University</span>. I build
              complete web applications using React.js, Next.js, Node.js, and
              MongoDB — handling everything from pixel-perfect UIs to robust
              backend APIs and database design.
            </p>

            <a
              className="inline-block mt-4 text-gray-300 hover:text-white transition-colors text-sm"
              href="/about"
            >
              Learn more about me →
            </a>

            {/* Skills */}
            <div className="mt-6">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-white/50 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap mt-8 gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HwNKi7D22l_uVBZGcTOQDhk4qkgKS7NO/view?usp=drive_link",
                    "_blank",
                  )
                }
                className="py-2 px-4 rounded-xl inline-flex items-center gap-1.5 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 transition-all duration-200 ease-out cursor-pointer hover:scale-105 text-sm"
              >
                View Resume <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:mayankjain96725@gmail.com"
                className="glass py-2 px-4 rounded-xl inline-flex items-center gap-1.5 text-sm bg-violet-500/15 border-violet-400/40 hover:border-violet-400/70 hover:bg-white/10 cursor-pointer transition-all duration-200 ease-out hover:scale-105"
              >
                <MdOutlineEmail className="w-4 h-4" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="w-full max-w-[240px] md:max-w-none mx-auto">
            <img
              src="/Images/IMG_20260124_224848.jpg.jpeg"
              alt="Mayank Jain"
              className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/20"
            />
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="glass rounded-2xl grid grid-cols-3 divide-x divide-white/10 overflow-hidden">
          {[
            { number: "10+", label: "Projects Built" },
            { number: "2+", label: "Years Learning" },
            { number: "B.Tech", label: "CS Engineering" },
          ].map(({ number, label }) => (
            <div key={label} className="flex flex-col items-center py-5 gap-1">
              <span className="text-2xl font-bold text-white">{number}</span>
              <span className="text-xs text-white/40 tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Projects ── */}
      <section ref={projectsSectionRef} className="w-full mt-16 relative">
        <div
          className={`w-full max-w-5xl mx-auto px-4 mb-6 ${
            isProjectsHeadingSticky ? "sticky top-20 z-20" : "relative"
          }`}
        >
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-white/70 mt-2">
            Scroll the showcase below to explore featured work with modern
            frontend architecture and polished UX.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4">
          <ScrollStack
            useWindowScroll={true}
            stackPosition="20%"
            scaleEndPosition="10%"
            onStackComplete={() => setIsProjectsHeadingSticky(false)}
          >
            {PROJECTS.map((project) => (
              <ScrollStackItem
                key={project.idx}
                itemClassName="glass border border-white/20 text-white"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-violet-400/60">
                    Project {project.idx}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50">
                    <project.Icon size={15} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>

                <p className="mt-3 text-white/75 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/projects">
                  <button className="py-2 px-4 rounded-xl inline-flex items-center gap-1.5 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 transition-all duration-200 ease-out cursor-pointer hover:scale-105 my-8 text-sm">
                    Explore Details <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-16">
        <div className="glass rounded-3xl px-8 py-12 text-center border border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open to new opportunities
          </h2>
          <p className="text-white/60 text-base max-w-md mx-auto mb-8 leading-relaxed">
            Whether it&apos;s a full-time role, a freelance project, or just a
            good conversation — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:mayankjain96725@gmail.com"
              className="py-2.5 px-5 rounded-xl inline-flex items-center gap-2 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 transition-all duration-200 hover:scale-105 text-sm font-medium"
            >
              <MdOutlineEmail className="w-4 h-4" /> Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-jain-b39a8a287/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-violet-500/15 border-violet-400/30 hover:border-violet-400/60 hover:bg-white/10 transition-all duration-200 hover:scale-105"
            >
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
