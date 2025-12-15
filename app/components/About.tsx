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

      {/* MAIN INTRO */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-slate-300 leading-relaxed text-lg"
      >
        I’m a <span className="font-semibold text-indigo-300">Full-Stack Developer</span> with
        <span className="font-semibold text-indigo-300"> 3+ years of experience</span> building
        scalable, high-performance web applications. I work across the stack using
        <span className="text-indigo-300"> React, Angular, TypeScript, Node.js</span> and modern
        backend technologies to deliver clean UI, reliable APIs and production-ready solutions.
      </motion.p>

      {/* SKILLS & PRACTICES */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I have strong experience with
        <span className="text-indigo-300"> REST APIs</span>,
        <span className="text-indigo-300"> MongoDB</span>,
        <span className="text-indigo-300"> WebSockets</span> and
        <span className="text-indigo-300"> WebRTC-based communication systems</span>.
        I follow best practices around
        <span className="text-indigo-300"> SDLC, Agile/Scrum workflows, CI/CD pipelines</span>,
        performance optimization and cross-browser compatibility.
      </motion.p>

      {/* COLLABORATION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I collaborate closely with backend, QA, product and design teams to translate business
        requirements into robust technical solutions. I’m comfortable owning features end-to-end —
        from UI design and frontend architecture to backend integration, deployment and maintenance.
      </motion.p>

      {/* DOMAIN EXPERIENCE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        My experience spans CPaaS platforms, CRM systems, campaign builders, analytics dashboards
        and enterprise SaaS products. I’ve built modules from scratch, integrated complex APIs,
        optimized performance and improved user experience across desktop and mobile devices.
      </motion.p>

      {/* TIMELINE */}
      <div className="mt-10 space-y-8 border-l border-white/10 pl-6">

        {/* Biocipher */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">
            Biocipher Technologies
          </h3>
          <p className="text-slate-400 text-sm">2023 – Present</p>
          <p className="text-slate-300 mt-1">
            Working as a Full-Stack Developer on CPaaS products including SMS, Voice,
            WhatsApp, RCS and CRM modules. Built scalable UI components, backend APIs,
            real-time dashboards and WebRTC calling features. Actively involved in
            architecture decisions, code reviews and mentoring junior developers to
            improve code quality and frontend consistency.
          </p>
        </motion.div>

        {/* Synoriq */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">Synoriq</h3>
          <p className="text-slate-400 text-sm">2022</p>
          <p className="text-slate-300 mt-1">
            Contributed to a FinTech platform by developing responsive UI components
            and implementing client-specific features. Focused on clean code,
            usability, and accurate implementation of functional requirements in
            collaboration with cross-functional teams.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
