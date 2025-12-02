"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X,Terminal  } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl 
  bg-[#1c2130]/90 backdrop-blur-xl border border-white/10 text-white 
  rounded-2xl px-4 py-3 z-50 shadow-lg overflow-visible">

  <div className="flex items-center justify-between w-full">

    {/* LOGO */}
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



    {/* DESKTOP NAV LINKS */}
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

        {/* GitHub */}
        <a
          href="https://github.com/barmanbharti"
          target="_blank"
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full
            bg-white
            text-black
            border border-indigo-300
            hover:bg-indigo-200
            hover:border-indigo-400
            hover:scale-110
            transition-all duration-200
          "
        >
          <Github size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/bharti-kumari-834383230"
          target="_blank"
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full
            bg-white
            text-black
            border border-cyan-300
            hover:bg-cyan-200
            hover:border-cyan-400
            hover:scale-110
            transition-all duration-200
          "
        >
          <Linkedin size={20} />
        </a>

      </div>
    </div>

    {/* MOBILE MENU ICON */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-white"
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* MOBILE MENU DROPDOWN */}
  {open && (
    <div className="md:hidden mt-3 flex flex-col gap-4 bg-[#1c2130]/95 p-4 rounded-xl border border-white/10 text-sm">

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

      {/* MOBILE SOCIAL ICONS */}
      <div className="flex items-center gap-3 pt-2">

        <a
          href="https://github.com/barmanbharti"
          target="_blank"
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full
            bg-white
            text-black
            border border-indigo-300
            hover:bg-indigo-200
            hover:border-indigo-400
            transition-all duration-200
          "
        >
          <Github size={22} />
        </a>

        <a
          href="https://linkedin.com/in/bharti-kumari-834383230"
          target="_blank"
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full
            bg-white
            text-black
            border border-cyan-300
            hover:bg-cyan-200
            hover:border-cyan-400
            transition-all duration-200
          "
        >
          <Linkedin size={22} />
        </a>

      </div>
    </div>
  )}
</nav>

  );
}
