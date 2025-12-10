"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* VS CODE BACKGROUND */}
    <div
  className="
    absolute inset-0
    opacity-40
    bg-cover bg-top
    pointer-events-none 
    select-none
  "
  style={{
    backgroundImage: "url('/Bg1.png')",
    filter: "brightness(1.3) contrast(1)",
  }}
/>


      {/* GRADIENT OVERLAY FOR CLARITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-start px-4 z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight 
            bg-gradient-to-r from-indigo-300 to-cyan-300 
            text-transparent bg-clip-text mb-6"
          >
            Building Lightning-Fast, Scalable & Impactful Web Applications.
          </h1>

          <p
            className="text-lg md:text-2xl font-semibold bg-gradient-to-r 
            from-indigo-400 to-cyan-400 text-transparent bg-clip-text tracking-wide"
          >
            Full-Stack Developer • React • Angular • Node.js • 3+ Years Experience
          </p>

          <p className="mt-5 text-slate-300 max-w-3xl text-lg leading-relaxed">
            I create performant, maintainable and user-centric applications —
            from sleek frontends to scalable backend APIs. Passionate about
            clean architecture, reusable components and building systems that
            grow with your business.
          </p>

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
