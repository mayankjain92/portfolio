import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export default async function ProjectPage({ params }) {
  const { projectName } = await params;
  const project = PROJECTS.find((p) => p.projectName === projectName);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <p className="text-white/40 text-sm uppercase tracking-widest">404</p>
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link
          href="/#projects"
          className="text-violet-400 hover:text-violet-300 text-sm transition-colors"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full text-white px-4 pb-24">
      <div className="w-full max-w-4xl mx-auto pt-24">
        {/* ── Back link ── */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm transition-colors duration-150 mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
          Back to projects
        </Link>

        {/* ── Header ── */}
        <div className="mb-8">
          <p className="text-violet-400/60 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Project {project.idx}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            {project.shortDesc}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-violet-700 hover:bg-violet-600 border border-violet-400/40 transition-all duration-200 hover:scale-105 text-sm font-semibold"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl glass border border-white/10 bg-white/5 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105 text-sm font-semibold"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
        </div>

        {/* ── Screenshots ── */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {project.screenshots.map((src, i) => (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden border border-white/10 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* ── Screenshot placeholder if none added yet ── */}
        {(!project.screenshots || project.screenshots.length === 0) && (
          <div className="glass rounded-2xl border border-white/10 border-dashed h-56 flex items-center justify-center mb-10">
            <p className="text-white/20 text-sm">Screenshots coming soon</p>
          </div>
        )}

        {/* ── Details grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* About the project */}
          <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-violet-400/60 font-semibold mb-3">
              About this project
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              {project.longDesc}
            </p>
          </div>

          {/* What I learned */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <p className="text-xs uppercase tracking-widest text-emerald-400/60 font-semibold mb-3">
              What I learned
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {project.learned}
            </p>
          </div>

          {/* Tech stack */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <p className="text-xs uppercase tracking-widest text-cyan-400/60 font-semibold mb-4">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-white/60 border border-white/10 bg-white/5 px-3 py-1.5 rounded-lg hover:border-violet-400/30 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer nav ── */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
            All projects
          </Link>
          <span className="text-white/15 text-xs">
            Project {project.idx} of {PROJECTS.length}
          </span>
        </div>
      </div>
    </div>
  );
}
