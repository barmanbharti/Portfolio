"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col items-start px-4">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* MAIN TAGLINE */}
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight 
            bg-gradient-to-r from-indigo-300 to-cyan-300 
            text-transparent bg-clip-text mb-6"
          >
            Building Lightning-Fast, Scalable & Impactful Web Applications.
          </h1>

          {/* SUBTITLE */}
          <p
            className="text-lg md:text-2xl font-semibold bg-gradient-to-r 
            from-indigo-400 to-cyan-400 text-transparent bg-clip-text tracking-wide"
          >
            Full-Stack Developer • React • Angular • Node.js • 3+ Years Experience
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 text-slate-300 max-w-3xl text-lg leading-relaxed">
            I create performant, maintainable and user-centric applications —
            from sleek frontends to scalable backend APIs. Passionate about
            clean architecture, reusable components and building systems that
            grow with your business.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 rounded-xl text-white font-medium 
              hover:bg-indigo-500 transition-all shadow-lg"
            >
              Hire Me
            </a>

            <a
              href="/Bharti Fullstack Resume.pdf"
              download
              className="px-6 py-3 border border-indigo-400 rounded-xl text-indigo-200 font-medium 
              hover:border-indigo-300 transition-all"
            >
              Download CV
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
