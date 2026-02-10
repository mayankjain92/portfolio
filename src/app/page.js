"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="Icons absolute top-30 flex flex-col space-y-5 justify-center items-center w-full ">
        <h1 className="text-white font-bold text-3xl">
          Frontend Developer | React & Next.js Specialist
        </h1>
        <div>
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
            size={60}
          />
        </div>
        <div className=" px-12 py-10 w-[1000px] rounded-3xl glass flex flex-row text-white gap-8">
          <div className="w-2/3">
            <p className="text-xl mb-3">
              Hi, I'm Mayank Jain, a passionate frontend developer currently
              pursuing my B.Tech in Computer Science Engineering at JECRC
              University. Now in my third year, I am focused on mastering
              React.js, Next.js, HTML, CSS, and JavaScript. I enjoy crafting
              modern, responsive, and user-friendly web applications that
              deliver seamless experiences.
            </p>
            <a className="text-gray-400" href="/about">
              Learn more...
            </a>
            <div className="flex flex-row mt-10 gap-5">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HwNKi7D22l_uVBZGcTOQDhk4qkgKS7NO/view?usp=drive_link",
                    "_blank",
                  )
                }
                className="py-1.5 px-4 rounded-xl inline-flex items-center gap-1
             bg-violet-800 hover:bg-violet-600/90
             border border-violet-400/40
             transition-all duration-200 cursor-pointer transition-all duration-200 ease-out
    hover:scale-105 "
              >
                <span>Resume</span>

                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:mayankjain96725@gmail.com"
                className="glass py-0.5 px-3 rounded-xl inline-flex items-center gap-1
             text-center text-lg bg-violet-500/15 border-violet-400/40
             hover:border-violet-400/70 hover:bg-white/10
             transition-all duration-200 cursor-pointer transition-all duration-200 ease-out
    hover:scale-105"
              >
                <MdOutlineEmail className="w-4 h-4" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>
          <div className="h-55 w-1/4 rounded-2xl ">
            <img
              src="/Images/IMG_20260124_224848.jpg.jpeg"
              className="rounded-2xl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
