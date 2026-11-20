import React from "react";
import { ArrowUpRight, Code2, Layers, Zap } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Link from "next/link";

import { PROJECTS } from "@/data/projects";

const getProjectIcon = (projectName) => {
  switch (projectName) {
    case "prep-os":
      return Zap;
    case "mystery-message":
      return Code2;
    case "mailiac":
      return Zap;
    case "realtime-chat":
      return Code2;
    case "spotify-dynamic-island":
      return Layers;
    case "portfolio-website":
      return Layers;
    default:
      return Code2;
  }
};

const Projects = () => {
  return (
    <section
      className="w-full mt-22 relative scroll-mt-24"
      id="projects"
    >
      <div className="w-full max-w-5xl mx-auto px-4 mb-6 sticky top-20 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projects</h2>
        <p className="text-white/80 mt-2 text-sm sm:text-base leading-relaxed">
          Scroll the showcase below to explore featured work with modern
          frontend architecture and polished UX.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <ScrollStack
          useWindowScroll={true}
          stackPosition="25%"
          scaleEndPosition="15%"
        >
          {PROJECTS.map((project) => {
            const Icon = getProjectIcon(project.projectName);
            return (
              <ScrollStackItem
                key={project.idx}
                itemClassName="glass border border-white/20 text-white"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-violet-300">
                      Project {project.idx}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80">
                      <Icon size={15} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-white/85 text-sm sm:text-base leading-relaxed">
                    {project.shortDesc || project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/15 bg-white/10 text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/projects/${project.projectName}`}
                    className="py-2.5 px-4 rounded-xl inline-flex items-center gap-1.5 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 text-white font-medium transition-all duration-200 ease-out cursor-pointer hover:scale-105 text-sm shadow-md shadow-violet-950/40 min-h-[44px]"
                  >
                    <span>Explore Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Projects;
