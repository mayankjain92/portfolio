import React from "react";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  programming: ["Java", "Kotlin", "C++"],
  tools: ["Git", "GitHub", "Postman", "npm", "VS Code", "Figma"],
  learning: ["Node.js", "Express.js", "MongoDB"],
};

const page = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] glass rounded-3xl px-12 py-12 text-white">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">Skills & Tools</h1>
          <h2 className="text-3xl text-gray-400 mt-2 font-bold">
            Built by learning, breaking, fixing, and building again.
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          As a frontend-focused developer, I specialize in building modern,
          responsive, and user-friendly web applications using React.js,
          Next.js, and Tailwind CSS. I focus on clean UI, performance, and
          scalability while continuously improving my skills through real-world
          projects and hands-on learning.
        </p>

        {/* Skills Sections */}
        <div className="space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Currently Exploring</h3>
            <div className="flex flex-wrap gap-3">
              {skills.learning.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-sm text-violet-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
