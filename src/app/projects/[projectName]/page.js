import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    projectName: project.projectName,
  }));
}

export async function generateMetadata({ params }) {
  const { projectName } = await params;
  const project = PROJECTS.find((p) => p.projectName === projectName);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const ogImages =
    project.screenshots && project.screenshots.length > 0
      ? [
          {
            url: project.screenshots[0],
            width: 1200,
            height: 630,
            alt: `${project.title} Screenshot`,
          },
        ]
      : [];

  return {
    title: `${project.title} — Mayank Jain`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} — Mayank Jain`,
      description: project.shortDesc,
      url: `https://mayankjain.dev/projects/${project.projectName}`,
      siteName: "Mayank Jain Portfolio",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Mayank Jain`,
      description: project.shortDesc,
      images:
        project.screenshots && project.screenshots.length > 0
          ? [project.screenshots[0]]
          : [],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { projectName } = await params;
  const project = PROJECTS.find((p) => p.projectName === projectName);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full text-white px-4 pb-24">
      <div className="w-full max-w-4xl mx-auto pt-24">
        {/* ── Back link ── */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 min-h-[44px] text-white/70 hover:text-white text-sm transition-colors duration-150 mb-10 group"
          aria-label="Back to projects"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
          Back to projects
        </Link>

        {/* ── Header ── */}
        <div className="mb-8">
          <p className="text-violet-300 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Project {project.idx}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            {project.shortDesc}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-lg border border-violet-400/30 bg-violet-500/15 text-violet-200"
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
              className="inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-5 rounded-xl bg-violet-700 hover:bg-violet-600 border border-violet-400/40 transition-all duration-200 hover:scale-105 text-sm font-semibold text-white"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-5 rounded-xl glass border border-white/10 bg-white/5 text-white/80 hover:border-violet-400/40 hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105 text-sm font-semibold"
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
                className={`glass rounded-2xl overflow-hidden border border-white/10 relative aspect-video ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 440px"
                  }
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* ── Screenshot placeholder if none added yet ── */}
        {(!project.screenshots || project.screenshots.length === 0) && (
          <div className="glass rounded-2xl border border-white/10 border-dashed h-56 flex items-center justify-center mb-10">
            <p className="text-white/60 text-sm">Screenshots coming soon</p>
          </div>
        )}

        {/* ── Details grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* About the project */}
          <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-violet-300 font-semibold mb-3">
              About this project
            </p>
            <p className="text-white/80 text-base leading-relaxed whitespace-pre-line">
              {project.longDesc}
            </p>
          </div>

          {/* What I learned */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-3">
              What I learned
            </p>
            <p className="text-white/80 text-base leading-relaxed whitespace-pre-line">
              {project.learned}
            </p>
          </div>

          {/* Key Features */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <p className="text-xs uppercase tracking-widest text-cyan-300 font-semibold mb-4">
              Key Features
            </p>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-white/80 border border-white/10 bg-white/5 px-3 py-1.5 rounded-lg hover:border-violet-400/30 hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-200"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Footer nav ── */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 min-h-[44px] text-white/70 hover:text-white text-sm transition-colors group"
            aria-label="All projects"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
            All projects
          </Link>
          <span className="text-white/60 text-xs">
            Project {project.idx} of {PROJECTS.length}
          </span>
        </div>
      </div>
    </div>
  );
}
