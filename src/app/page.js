"use client";
import React from "react";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

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
                    "https://drive.google.com/file/d/1Zh5OA4-kovQMCXT6e9TJFIuv7hZaErla/view?usp=sharing",
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

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default Page;
