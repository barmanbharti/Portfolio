"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-[#1c2130]/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl px-4 py-3 z-50 shadow-lg">
      <div className="flex items-center justify-between w-full">

        {/* LOGO */}
        <h1 className="font-semibold text-lg whitespace-nowrap">
        Bharti Kumari • Frontend Developer
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-end">
          <a href="#projects" className="hover:text-indigo-300 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-300 transition">Skills</a>
          <a href="#about" className="hover:text-indigo-300 transition">About</a>
          <a
            href="#contact"
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
          >
            Contact
          </a>
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
        </div>
      )}
    </nav>
  );
}
