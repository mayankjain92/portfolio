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
    case "realtime-chat":
      return Code2;
    case "notesapp-web":
      return Zap;
    case "portfolio-website":
      return Layers;
    case "recipe-app":
      return Zap;
    default:
      return Code2;
  }
};

const Projects = () => {
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
    <>
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
            {PROJECTS.map((project) => {
              const Icon = getProjectIcon(project.projectName);
              return (
                <ScrollStackItem
                  key={project.idx}
                  itemClassName="glass border border-white/20 text-white"
                >
                  <div className="flex items-start justify-between ">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-violet-300">
                      Project {project.idx}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70">
                      <Icon size={15} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>

                  <p className="mt-3 text-white/75 text-sm leading-relaxed">
                    {project.shortDesc || project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.projectName}`}>
                    <button className="py-2 px-4 rounded-xl inline-flex items-center gap-1.5 bg-violet-800 hover:bg-violet-600/90 border border-violet-400/40 transition-all duration-200 ease-out cursor-pointer hover:scale-105 my-6 text-sm">
                      Explore Details <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </Link>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </section>
    </>
  );
};

export default Projects;
