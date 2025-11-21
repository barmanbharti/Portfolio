"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        
        {/* LEFT — PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl"
        >
          <Image
            src="/profile.png"
            width={300}
            height={300}
            alt="Bharti"
            className="object-cover w-full h-full"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full border-4 border-indigo-400/40 blur-2xl"></div>
        </motion.div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* MOTO / MAIN TAGLINE */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
                         bg-gradient-to-r from-indigo-300 to-cyan-300 
                         text-transparent bg-clip-text mb-4">
            Transforming Ideas Into Fast, Modern & Beautiful Interfaces.
          </h1>

          {/* SUBTITLE — HIGHLIGHTED */}
          <p className="text-lg md:text-xl font-semibold bg-gradient-to-r 
                        from-indigo-400 to-cyan-400 text-transparent bg-clip-text 
                        tracking-wide">
            Frontend Developer • React • Angular • UI Engineer • 3+ Years Experience
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 text-slate-300 max-w-lg">
            Passionate about crafting clean, reliable and delightful web experiences.  
            Specialized in modern UI engineering, performance-focused apps and scalable design systems.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-7">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 rounded-xl text-white font-medium 
                         hover:bg-indigo-500 transition-all shadow-lg"
            >
              Hire Me
            </a>

            <a
              href="/BHARTI-KUMARI-Frontend dev-Resume.pdf"
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
