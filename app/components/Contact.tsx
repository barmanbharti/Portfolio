"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
<section id="contact" className="section text-center">
  <h2 className="text-3xl font-bold mb-6">Contact</h2>

  <p className="text-slate-300 mb-6">
    You can reach me anytime at:
  </p>

  {/* Row Layout */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">

    {/* Email */}
    <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white min-w-[280px] text-center">
      <span className="font-semibold">Email:</span> barmanbharti00@gmail.com
    </div>

    {/* Mobile */}
    <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white min-w-[280px] text-center">
      <span className="font-semibold">Mobile:</span> +91 9354266541
    </div>

  </div>

  {/* Download CV */}
  <a
    href="/BHARTI-KUMARI-Frontend dev-Resume.pdf"
    download
    className="mt-8 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition"
  >
    Download CV
  </a>
</section>

  
  );
}
