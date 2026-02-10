import React from "react";

const page = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] glass rounded-3xl px-12 py-12 text-white">
        <div className="mb-18">
          <h1 className="text-5xl font-bold text-white">Projects</h1>
          <h2 className="text-3xl font-bold text-gray-400 mt-2">
            A lot of ideas, but some are still under construction!
          </h2>
        </div>
        {/* projects */}
        <div className="grid grid-cols-3 gap-6 ">
          <div
            className="px-4 py-3 rounded-3xl bg-white/10 border border-white/20 transition-all duration-200 ease-out
    hover:scale-105"
          >
            <h1 className="font-bold text-white text-xl">
              Portfolio | Mayank Jain
            </h1>
            <p className="text-gray-400 mb-2">
              A dynamic portfolio showcasing my projects, skills, and
              contributions using the latest web technologies. My personal
              portfolio is built to highlight my journey as a developer.
            </p>
            <a className="text-sm" href="/">
              Learn More..
            </a>
          </div>
          <div
            className="px-4 py-3 rounded-3xl bg-white/10 border border-white/20 transition-all duration-200 ease-out
    hover:scale-105"
          >
            <h1 className="font-bold text-white text-xl">Recipe App</h1>
            <p className="text-gray-400 mb-2">
              An Android recipe app built using Kotlin and Jetpack Compose that
              fetches recipe data from a web API and displays selected recipes
              with a modern, responsive UI.
            </p>
            <a className="text-sm" href="/">
              Learn More..
            </a>
          </div>
        </div>
      </div>
      <div>page</div>;
    </section>
  );
};

export default page;
