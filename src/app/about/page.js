import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-full flex items-center justify-center py-5">
      <div className="px-12 py-10 w-[1200px] rounded-3xl glass flex flex-col text-white text-lg">
        <div className="mb-10 font-bold">
          <h1 className="text-5xl">About Me</h1>
          <h2 className="text-4xl text-gray-400">
            More than just a student—here’s a little about me.
          </h2>
        </div>

        <p className="py-3">
          I’m Mayank Jain, a passionate frontend developer currently pursuing my
          B.Tech in Computer Science Engineering at JECRC University. I enjoy
          building clean, responsive, and user-friendly web applications using
          modern technologies like React.js, Next.js, and Tailwind CSS.
        </p>

        <p className="py-3">
          With a strong focus on UI/UX and performance, I love turning ideas
          into visually appealing and intuitive interfaces. I’m continuously
          improving my skills by exploring new tools, refining my fundamentals,
          and working on real-world projects that challenge me to grow.
        </p>

        <p className="py-3">
          Beyond coding, I value consistency, problem-solving, and
          collaboration. My goal is to become a well-rounded software engineer
          and contribute to meaningful products that create real impact.
        </p>
        <div className="flex flex-wrap gap-3">
          <span
            className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm transition-all duration-200 ease-out
    hover:scale-105"
          >
            Problem Solver
          </span>
          <span
            className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm transition-all duration-200 ease-out
    hover:scale-105"
          >
            Collaborative
          </span>
          <span
            className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm transition-all duration-200 ease-out
    hover:scale-105"
          >
            Quick Learner
          </span>
          <span
            className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm transition-all duration-200 ease-out
    hover:scale-105"
          >
            UI-Focused
          </span>
        </div>
        <div className="text-white pt-10 flex gap-5">
          <span className="text-2xl font-bold">Ready to work together?</span>
          <Link href="/contact">
            <button
              className="py-0.5 px-4 rounded-xl inline-flex items-center gap-1
            bg-violet-800 hover:bg-violet-600/90
            border border-violet-400/40
            cursor-pointe transition-all duration-200 ease-out hover:scale-105"
            >
              <span>Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
