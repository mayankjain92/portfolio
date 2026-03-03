"use client";
import React from "react";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight, Code2, Layers, Zap } from "lucide-react";
import Link from "next/link";
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
    projectName: "mystery-message",
    title: "Mystery Message",
    desc: "Mystery Message allows users to receive honest, anonymous feedback from anyone through a unique profile link — without revealing the sender's identity. Built with a strong focus on privacy, security, and a polished user experience.",
    tags: ["NExtjs", "MongoDB", "Gemini AI"],
    Icon: Code2,
    href: "/projects",
  },
  {
    idx: "02",
    projectName: "portfolio-website",
    title: "Portfolio Website",
    desc: "A modern portfolio built with Next.js and Tailwind CSS, focused on smooth interactions, reusable components, and responsive UI across all devices.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    Icon: Layers,
    href: "/projects",
  },
  {
    idx: "03",
    projectName: "",
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
    <div
      className="relative min-h-screen w-full text-white px-4 pb-24"
      id="home"
    >
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
              href="/#about"
            >
              Learn more about me →
            </a>

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
      </div>

      {/* About */}
      <section className="w-full mt-22 relative scroll-mt-24" id="about">
        <div className="py-6">
          <div className="w-full max-w-5xl mx-auto px-4 mb-6">
            <p className="text-violet-400/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              The person behind the code
            </p>
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Story card */}
            <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
              <p className="text-xs uppercase tracking-widest text-violet-400/60 font-semibold mb-3">
                My Story
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                I fell in love with coding back in school — what started as
                curiosity quickly turned into a passion I couldn&apos;t put
                down. There&apos;s something about turning a blank screen into
                something real and functional that just clicks for me. Now
                pursuing my B.Tech in CSE at{" "}
                <span className="text-violet-300">JECRC University</span>,
                I&apos;m channelling that same energy into building full-stack
                web applications and landing a role where I can do this every
                day professionally.
              </p>
            </div>

            {/* Education timeline */}
            <div className="glass rounded-2xl p-7 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-violet-400/60 font-semibold mb-5">
                Education
              </p>
              <div className="space-y-5">
                {[
                  {
                    year: "2023 – 2027",
                    title: "B.Tech · Computer Science Engineering",
                    place: "JECRC University, Jaipur",
                    dot: "bg-violet-400",
                    active: true,
                  },
                  {
                    year: "Until 2023",
                    title: "Higher Secondary · Science & Maths",
                    place: "School",
                    dot: "bg-white/20",
                    active: false,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`}
                      />
                      <span className="w-px flex-1 bg-white/8 min-h-[20px]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30 font-medium mb-0.5">
                        {item.year}
                      </p>
                      <p
                        className={`text-sm font-semibold ${item.active ? "text-white" : "text-white/50"}`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {item.place}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="glass rounded-2xl p-7 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-emerald-400/60 font-semibold mb-5">
                Currently Learning
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Full Stack Web Development",
                    sub: "Next.js · Node.js · MongoDB",
                    color: "bg-violet-400",
                  },
                  {
                    label: "Data Structures & Algorithms",
                    sub: "Practicing consistently",
                    color: "bg-cyan-400",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.color} animate-pulse`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white/80">
                        {item.label}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
              <p className="text-xs uppercase tracking-widest text-cyan-400/60 font-semibold mb-5">
                Outside of Code
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    emoji: "🎵",
                    label: "Ukulele",
                    desc: "I play ukulele — it's my go-to way to unwind and get creative away from screens.",
                  },
                  {
                    emoji: "📚",
                    label: "Reading",
                    desc: "Books are my second obsession. Always have one going — mostly non-fiction and tech.",
                  },
                  {
                    emoji: "🎮",
                    label: "Gaming",
                    desc: "Gaming sharpens my thinking and honestly keeps me sane between long coding sessions.",
                  },
                ].map((hobby) => (
                  <div
                    key={hobby.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-violet-400/30 hover:bg-violet-500/5 transition-all duration-200"
                  >
                    <span className="text-2xl">{hobby.emoji}</span>
                    <p className="text-sm font-semibold text-white/80 mt-2">
                      {hobby.label}
                    </p>
                    <p className="text-xs text-white/35 mt-1 leading-relaxed">
                      {hobby.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full mt-22 relative scroll-mt-24" id="skills">
        <div className="py-6">
          <div className="w-full max-w-5xl mx-auto px-4 mb-6">
            <p className="text-violet-400/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              What I bring to the table
            </p>
            <h2 className="text-4xl font-bold">Skills &amp; Stack</h2>
            <p className="text-white/40 mt-1.5 text-sm">
              Technologies I actively use — not just listed.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="glass rounded-2xl w-2/3 overflow-hidden p-10">
              {/* Logo marquee */}
              <div className="py-4">
                <LogoLoop
                  logos={techLogos}
                  speed={100}
                  direction="left"
                  logoHeight={42}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  ariaLabel="Technology partners"
                />
              </div>

              {/* Grouped skill rows */}
              <div className="mt-8 space-y-5">
                {[
                  {
                    label: "Frontend",
                    color: "text-violet-300",
                    dot: "bg-violet-400",
                    items: [
                      "React.js",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                    ],
                  },
                  {
                    label: "Backend",
                    color: "text-cyan-300",
                    dot: "bg-cyan-400",
                    items: ["Node.js", "MongoDB", "REST APIs"],
                  },
                  {
                    label: "Tooling",
                    color: "text-emerald-300",
                    dot: "bg-emerald-400",
                    items: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
                  },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    className="grid grid-cols-[90px_1fr] items-start gap-4"
                  >
                    {/* Category label */}
                    <div className="flex items-center gap-2 pt-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.dot}`}
                      />
                      <span
                        className={` font-semibold uppercase tracking-widest ${cat.color}`}
                      >
                        {cat.label}
                      </span>
                    </div>

                    {/* Skills in a clean wrapping row */}
                    <div className="flex flex-wrap px-6 gap-x-6 gap-y-2">
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-lg text-white/70 hover:text-white transition-colors duration-150 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer strip */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <p className="text-xs text-white/20 font-medium tracking-wide">
                  Always learning · Always shipping
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/25 font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        ref={projectsSectionRef}
        className="w-full mt-22 relative scroll-mt-24"
        id="projects"
      >
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
            stackPosition="25%"
            scaleEndPosition="15%"
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

                <Link href={`/projects/${project.projectName}`}>
                  <button className="py-2 px-4 rounded-xl inline-flex items-center gap-1.5 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 transition-all duration-200 ease-out cursor-pointer hover:scale-105 my-8 text-sm">
                    Explore Details <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="w-full max-w-5xl mx-auto px-4 mt-16 scroll-mt-24"
      >
        <div className="glass rounded-3xl overflow-hidden border border-white/10 relative">
          {/* dramatic background glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.15) 0%, transparent 70%)",
            }}
          />

          {/* top accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="px-8 py-8 text-center">
            <p className="text-violet-400/70 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Let&apos;s build something together
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-4">
              Got an idea?
              <br />
              <span className="text-white/30">Let&apos;s talk.</span>
            </h2>

            <p className="text-white/40 text-base max-w-sm mx-auto mt-6 mb-10 leading-relaxed">
              Open to full-time roles, freelance work, or just a good
              conversation about tech.
            </p>

            {/* primary CTA */}
            <a
              href="mailto:mayankjain96725@gmail.com"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-2xl bg-violet-700 hover:bg-violet-600 border border-violet-400/40 hover:border-violet-400/70 transition-all duration-200 hover:scale-105 text-base font-semibold mb-10"
            >
              <MdOutlineEmail className="w-5 h-5" /> Get in touch
            </a>

            {/* divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto mb-6">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-white/20 text-xs font-medium">
                or reach me via
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            {/* secondary links */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/mayank-jain-b39a8a287/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/mayankjain92"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://mysterymessage-bice.vercel.app/u/mayank"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <span>👻</span> Anonymous Message
              </a>
            </div>

            {/* bottom note */}
            <p className="text-white/15 text-xs mt-6">
              Usually responds within 24 hours · mayankjain96725@gmail.com
            </p>
          </div>

          {/* bottom accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
        </div>
      </section>

      {/* ── Footer ── */}
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
    </div>
  );
};

export default Page;
