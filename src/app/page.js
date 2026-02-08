"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import GlassSocialIcons from "../components/GlassSocialIcons";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="Icons p-10 absolute top-30 flex flex-col space-y-5 justify-center items-center w-full ">
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
        <div className="px-12 py-10 w-[1000px] rounded-3xl bg-black/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-3xl ring-1 ring-black/30 flex items-center justify-between  text-white text-xl font-bold">
          <div className="w-2/3">
            Hi, I'm Mayank Jain, a passionate frontend developer currently
            pursuing my B.Tech in Computer Science Engineering at JECRC
            University. Now in my third year, I am focused on mastering
            React.js, Next.js, HTML, CSS, and JavaScript. I enjoy crafting
            modern, responsive, and user-friendly web applications that deliver
            seamless experiences. My goal is to grow as a frontend engineer and
            build impactful projects that combine creativity and technology.
          </div>
          <div className="h-55 w-1/4 rounded-2xl ">
            <img src="/Images/businessman.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
