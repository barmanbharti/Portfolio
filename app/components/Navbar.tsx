"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl 
      bg-[#1c2130]/90 backdrop-blur-xl border border-white/10 text-white 
      rounded-2xl px-4 py-3 z-50 shadow-lg">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">

        {/* NAME + ROLE */}
        <h1 className="font-semibold text-xl whitespace-nowrap flex items-center gap-2">
          Bharti

           <span className="flex items-center gap-1">
    <span className="inline-block w-5 h-5 text-indigo-300">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm6 8v-1c0-2.7-3.3-4.5-6-4.5S6 16.3 6 19v1h12z"/>
        <path d="M15.5 14.5l2-2-2-2m-7 4l-2-2 2-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
      </svg>
    </span>

    <span className="text-transparent bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text">
      Full-Stack Developer
    </span>
  </span>
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#projects" className="hover:text-indigo-300 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-300 transition">Skills</a>
          <a href="#about" className="hover:text-indigo-300 transition">About</a>

          <a
            href="#contact"
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
          >
            Contact
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://github.com/barmanbharti"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black
                border border-indigo-300 hover:bg-indigo-200 hover:scale-110 transition-all"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/bharti-kumari-834383230"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black
                border border-cyan-300 hover:bg-cyan-200 hover:scale-110 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* MOBILE MENU (When Open) */}
      {open && (
        <div className="md:hidden mt-5 flex flex-col gap-4 bg-[#1c2130]/95 p-5 rounded-xl border border-white/10 text-base">

          {/* TOP BAR WHEN OPEN (NO MENU ICON) */}
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl">Bharti</h1>

            <button
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X size={26} />
            </button>
          </div>

          {/* NAV LINKS BELOW NAME */}
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-3 py-2 bg-indigo-600 rounded-lg text-center"
          >
            Contact
          </a>

          {/* SOCIAL ICONS BELOW LINKS */}
          <div className="flex items-center gap-4 pt-3">

            <a
              href="https://github.com/barmanbharti"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-black border border-indigo-300
                hover:bg-indigo-200 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/bharti-kumari-834383230"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-black border border-cyan-300
                hover:bg-cyan-200 transition"
            >
              <Linkedin size={22} />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
