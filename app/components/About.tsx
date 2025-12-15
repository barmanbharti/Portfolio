"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section max-w-4xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      {/* INTRO */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-slate-300 leading-relaxed text-lg"
      >
        I’m a <span className="font-semibold text-indigo-300">Full-Stack Developer</span> with
        <span className="font-semibold text-indigo-300"> 3+ years of hands-on experience</span>
        building scalable, high-performance web applications. I work across the stack using
        <span className="text-indigo-300"> React, Angular, TypeScript, Node.js</span> and modern
        backend technologies to deliver clean UI, robust APIs and production-ready systems.
      </motion.p>

      {/* TECH STRENGTH */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I have strong experience designing and consuming
        <span className="text-indigo-300"> REST APIs</span>,
        working with
        <span className="text-indigo-300"> MongoDB</span>,
        implementing
        <span className="text-indigo-300"> real-time systems using WebSockets</span>,
        and building
        <span className="text-indigo-300"> WebRTC-based communication workflows</span>.
        I follow best practices around
        <span className="text-indigo-300"> SDLC, Agile/Scrum processes, CI/CD pipelines</span>,
        frontend performance optimization and cross-browser compatibility.
      </motion.p>

      {/* OWNERSHIP */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I’m comfortable owning features end-to-end — from requirement analysis and UI architecture
        to backend integration, testing, deployment and post-release improvements. I regularly
        collaborate with backend, QA, product and design teams to ensure scalability, performance
        and maintainability of delivered solutions.
      </motion.p>

      {/* DOMAIN EXPERIENCE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        Over the years, I’ve worked extensively on
        <span className="text-indigo-300"> CPaaS platforms, CRM systems, campaign builders</span>,
        analytics dashboards and enterprise SaaS products. My work includes building modules
        from scratch, integrating third-party services, handling high-volume data flows and
        continuously improving user experience across desktop and mobile devices.
      </motion.p>

      {/* TIMELINE */}
      <div className="mt-10 space-y-8 border-l border-white/10 pl-6">

        {/* BIOCIPHER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">
            Biocipher Technologies
          </h3>
          <p className="text-slate-400 text-sm">2023 – Present</p>
          <p className="text-slate-300 mt-2">
            Working as a Full-Stack Developer on large-scale CPaaS products including
            SMS, Voice, WhatsApp, RCS and CRM modules. I design and develop reusable UI
            components, build secure and scalable backend APIs, and implement real-time
            dashboards for monitoring campaigns, delivery metrics and user activity.
          </p>
          <p className="text-slate-300 mt-2">
            I’ve been actively involved in architectural decisions, performance tuning,
            database schema design and debugging production issues. I also mentor junior
            developers, conduct code reviews and help improve overall frontend
            consistency, code quality and delivery speed.
          </p>
        </motion.div>

        {/* SYNORIQ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">Synoriq</h3>
          <p className="text-slate-400 text-sm">2022</p>
          <p className="text-slate-300 mt-2">
            Worked on a FinTech platform where I developed responsive UI components
            and implemented features based on client requirements. Focused on
            translating functional specifications into clean, maintainable code
            while ensuring usability, performance and cross-browser compatibility.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
