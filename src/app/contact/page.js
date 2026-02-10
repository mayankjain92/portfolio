"use client";
import React from "react";

const page = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="w-full max-w-[1000px] glass rounded-3xl px-10 py-8 text-white">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-gray-400 mt-2 text-xl">
            Get in touch before I write another line of code.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name, your fame"
              className="w-full rounded-xl bg-white/5 border border-white/15
                         px-4 py-3 text-white placeholder-gray-400
                         focus:outline-none focus:border-violet-400
                         transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="Where can I reach you back?"
              className="w-full rounded-xl bg-white/5 border border-white/15
                         px-4 py-3 text-white placeholder-gray-400
                         focus:outline-none focus:border-violet-400
                         transition"
            />
            <p className="text-xs text-gray-500 mt-1">
              Temporary emails are fine — unless you want a reply 🙂
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Your words, my inbox."
              className="w-full rounded-xl bg-white/5 border border-white/15
                         px-4 py-3 text-white placeholder-gray-400
                         focus:outline-none focus:border-violet-400
                         transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold
                       bg-violet-600 hover:bg-violet-600/90
                       border border-violet-400/40
                       transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
