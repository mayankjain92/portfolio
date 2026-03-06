import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full max-w-5xl mx-auto px-4 mt-16 scroll-mt-24"
      >
        <div className="glass rounded-3xl overflow-hidden border border-white/10 relative">
          {/* dramatic background glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.15) 0%, transparent 70%)",
            }}
          />

          {/* top accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="px-8 py-8 text-center">
            <p className="text-violet-400/70 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Let&apos;s build something together
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-4">
              Got an idea?
              <br />
              <span className="text-white/30">Let&apos;s talk.</span>
            </h2>

            <p className="text-white/40 text-base max-w-sm mx-auto mt-6 mb-10 leading-relaxed">
              Open to full-time roles, freelance work, or just a good
              conversation about tech.
            </p>

            {/* primary CTA */}
            <a
              href="mailto:mayankjain96725@gmail.com"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-2xl bg-violet-700 hover:bg-violet-600 border border-violet-400/40 hover:border-violet-400/70 transition-all duration-200 hover:scale-105 text-base font-semibold mb-10"
            >
              <MdOutlineEmail className="w-5 h-5" /> Get in touch
            </a>

            {/* divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto mb-6">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-white/20 text-xs font-medium">
                or reach me via
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            {/* secondary links */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/mayank-jain-b39a8a287/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/mayankjain92"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://mysterymessage-bice.vercel.app/u/mayank"
                target="_blank"
                rel="noopener noreferrer"
                className="glass py-2.5 px-5 rounded-xl inline-flex items-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:border-violet-400/40 hover:text-violet-300/80 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
              >
                <span>👻</span> Anonymous Message
              </a>
            </div>

            {/* bottom note */}
            <p className="text-white/15 text-xs mt-6">
              Usually responds within 24 hours · mayankjain96725@gmail.com
            </p>
          </div>

          {/* bottom accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
        </div>
      </section>
    </>
  );
};

export default Contact;
