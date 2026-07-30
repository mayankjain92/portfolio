"use client";
import React from "react";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight, Code2, Layers, Cpu, Terminal } from "lucide-react";

import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Page = () => {
  return (
    <div
      className="relative min-h-screen w-full text-white px-4 pb-24"
      id="home"
    >
      <div className="w-full max-w-5xl mx-auto pt-20 md:pt-24 space-y-8">
        {/* ── Hero Headline ── */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide text-white/80 border border-white/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Full Stack Developer • Building Scalable Web Apps</span>
          </div>

          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl leading-[1.15] max-w-4xl tracking-tight">
            Building Scalable, End-to-End Web Applications from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              UI to API
            </span>
          </h1>

          <p className="text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
            Full Stack Software Engineer specializing in Next.js 15, React, Node.js,
            Express, MongoDB, and Redis — crafting modern monorepos and real-time systems.
          </p>

          <GlassSocialIcons
            socials={[
              {
                href: "https://www.linkedin.com/in/mayank-jain-cse",
                label: "LinkedIn",
                Icon: FaLinkedin,
                color: "#0A66C2",
              },
              {
                href: "https://github.com/mayankjain92",
                label: "GitHub",
                Icon: FaGithub,
                color: "#FFFFFF",
              },
              {
                href: "https://x.com/92_jainmayank",
                label: "X.com",
                Icon: FaXTwitter,
                color: "#1DA1F2",
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
            size={56}
          />
        </div>

        {/* ── Main Bio Card ── */}
        <div className="glass rounded-3xl px-6 py-8 md:px-10 md:py-10 text-white grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-8 items-center border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl -z-10" />

          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Available for full-time roles
            </span>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Hi, I&apos;m <strong className="text-white font-bold">Mayank Jain</strong>,
              a passionate Full Stack Engineer pursuing B.Tech in CSE at{" "}
              <span className="text-violet-300 font-medium">JECRC University</span>.
              I design and engineer production-grade platforms — from high-performance Next.js 15 frontends and pnpm monorepos to Redis-cached Node/Express backends and real-time Socket.IO systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                className="inline-flex items-center gap-1 text-violet-300 hover:text-white transition-colors text-sm font-semibold group"
                href="/#about"
              >
                <span>Learn more about my background</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap mt-8 gap-3">
              <a
                href="https://drive.google.com/file/d/16q_ZD8_A1tkqAAAp_-qfSVAK4FAnEU_U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 font-bold rounded-xl inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 border border-violet-400/40 text-white shadow-lg shadow-violet-900/30 transition-all duration-200 cursor-pointer hover:scale-105 text-sm"
              >
                View Resume
              </a>

              <a
                href="mailto:mayankjain96725@gmail.com"
                className="glass py-2.5 px-5 font-semibold rounded-xl inline-flex items-center gap-2 text-sm bg-white/5 border border-white/15 hover:border-violet-400/50 hover:bg-violet-500/10 cursor-pointer transition-all duration-200 hover:scale-105 text-white/90"
              >
                <MdOutlineEmail className="w-4 h-4 text-violet-300" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="w-full max-w-[240px] md:max-w-none mx-auto relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-30 group-hover:opacity-60 blur transition duration-300 -z-10" />
            <img
              src="/Images/IMG_20260124_224848.jpg.jpeg"
              alt="Mayank Jain"
              className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/20 shadow-xl"
            />
          </div>
        </div>

        {/* ── Key Highlight Metric Badges ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: Code2,
              num: "4+",
              label: "Production Projects",
              color: "text-violet-400",
            },
            {
              icon: Layers,
              num: "Full Stack",
              label: "Monorepos & APIs",
              color: "text-cyan-400",
            },
            {
              icon: Cpu,
              num: "Next 15",
              label: "React 19 & Tailwind",
              color: "text-indigo-400",
            },
            {
              icon: Terminal,
              num: "DSA",
              label: "Consistent Learner",
              color: "text-amber-400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-4 md:p-5 border border-white/10 flex items-center gap-3.5 hover:border-white/20 transition-all duration-200"
            >
              <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-white leading-tight">
                  {item.num}
                </p>
                <p className="text-xs text-white/50 font-medium mt-0.5">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default Page;
