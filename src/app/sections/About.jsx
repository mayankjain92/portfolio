import React from "react";

const About = () => {
  return (
    <>
      <section className="w-full mt-22 relative scroll-mt-24" id="about">
        <div className="py-6">
          <div className="w-full max-w-5xl mx-auto px-4 mb-6">
            <p className="text-violet-400/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              The person behind the code
            </p>
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Story card */}
            <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
              <p className="text-xs uppercase tracking-widest text-violet-400/60 font-semibold mb-3">
                My Story
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                I fell in love with coding back in school — what started as
                curiosity quickly turned into a passion I couldn&apos;t put
                down. There&apos;s something about turning a blank screen into
                something real and functional that just clicks for me. Now
                pursuing my B.Tech in CSE at{" "}
                <span className="text-violet-300">JECRC University</span>,
                I&apos;m channelling that same energy into building full-stack
                web applications and landing a role where I can do this every
                day professionally.
              </p>
            </div>

            {/* Education timeline */}
            <div className="glass rounded-2xl p-7 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-violet-400/60 font-semibold mb-5">
                Education
              </p>
              <div className="space-y-5">
                {[
                  {
                    year: "2023 – 2027",
                    title: "B.Tech · Computer Science Engineering",
                    place: "JECRC University, Jaipur",
                    dot: "bg-violet-400",
                    active: true,
                  },
                  {
                    year: "Until 2023",
                    title: "Higher Secondary · Science & Maths",
                    place: "Shanti Asiatic School",
                    dot: "bg-white/20",
                    active: false,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`}
                      />
                      <span className="w-px flex-1 bg-white/8 min-h-[20px]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30 font-medium mb-0.5">
                        {item.year}
                      </p>
                      <p
                        className={`text-sm font-semibold ${item.active ? "text-white" : "text-white/50"}`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {item.place}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="glass rounded-2xl p-7 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-emerald-400/60 font-semibold mb-5">
                Currently Learning
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Full Stack Web Development",
                    sub: "Next.js · Node.js · MongoDB",
                    color: "bg-violet-400",
                  },
                  {
                    label: "Data Structures & Algorithms",
                    sub: "Practicing consistently",
                    color: "bg-cyan-400",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.color} animate-pulse`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white/80">
                        {item.label}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="glass rounded-2xl p-7 border border-white/10 md:col-span-2">
              <p className="text-xs uppercase tracking-widest text-cyan-400/60 font-semibold mb-5">
                Outside of Code
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    emoji: "🎵",
                    label: "Ukulele",
                    desc: "I play ukulele — it's my go-to way to unwind and get creative away from screens.",
                  },
                  {
                    emoji: "📚",
                    label: "Reading",
                    desc: "Books are my second obsession. Always have one going — mostly non-fiction and tech.",
                  },
                  {
                    emoji: "🎮",
                    label: "Gaming",
                    desc: "Gaming sharpens my thinking and honestly keeps me sane between long coding sessions.",
                  },
                ].map((hobby) => (
                  <div
                    key={hobby.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-violet-400/30 hover:bg-violet-500/5 transition-all duration-200"
                  >
                    <span className="text-2xl">{hobby.emoji}</span>
                    <p className="text-sm font-semibold text-white/80 mt-2">
                      {hobby.label}
                    </p>
                    <p className="text-xs text-white/35 mt-1 leading-relaxed">
                      {hobby.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
