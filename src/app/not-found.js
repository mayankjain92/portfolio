import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex flex-col items-center justify-center text-white px-4 text-center">
      <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 max-w-lg w-full flex flex-col items-center gap-5">
        <p className="text-violet-400 font-semibold text-xs tracking-[0.25em] uppercase">
          Error 404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Page not found
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          The project or page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-xl bg-violet-700 hover:bg-violet-600 border border-violet-400/40 text-white font-medium text-sm transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
      </div>
    </main>
  );
}
