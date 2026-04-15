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
        <span className="font-semibold text-indigo-300"> 3+ years of hands-on experience </span>
        building scalable, high-performance, and production-grade web applications across
        modern frontend and backend ecosystems using
        <span className="text-indigo-300"> React, Angular, TypeScript, Node.js, and Express.js</span>.
        I specialize in architecting performant user interfaces, robust backend services,
        and maintainable full-stack systems.
      </motion.p>

      {/* TECH STRENGTH */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        My expertise includes designing and integrating
        <span className="text-indigo-300"> RESTful APIs</span>,
        architecting
        <span className="text-indigo-300"> microservices-based backend systems</span>,
        optimizing
        <span className="text-indigo-300"> MongoDB data models and query performance</span>,
        implementing
        <span className="text-indigo-300"> real-time applications using WebSockets</span>,
        and delivering
        <span className="text-indigo-300"> Web Real-Time Communication (WebRTC) powered communication workflows</span>.
      </motion.p>

      {/* OWNERSHIP */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I drive end-to-end feature delivery across the software development lifecycle,
        from requirement analysis, technical design, and component architecture to
        backend integration, unit testing, CI/CD automation, production deployment,
        and post-release optimization. I collaborate cross-functionally with product,
        design, QA, and engineering teams to deliver scalable, maintainable solutions.
      </motion.p>

      {/* DOMAIN EXPERIENCE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I have extensive experience building
        <span className="text-indigo-300"> CPaaS platforms, CRM systems, campaign management modules</span>,
        analytics dashboards, and enterprise SaaS applications. My work includes
        architecting systems from scratch, integrating third-party APIs, handling
        high-throughput data flows, and continuously optimizing UX across desktop
        and mobile platforms.
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
          <p className="text-slate-400 text-sm">March 2023 – March 2026</p>

         <p className="text-slate-300 mt-2">
  Worked as a Full-Stack Developer on large-scale CPaaS and CRM platforms
  supporting SMS, Voice, WhatsApp, RCS, live calling, and campaign automation workflows.
  Architected reusable frontend modules, scalable backend APIs, and real-time dashboards
  for analytics, campaign tracking, and user activity monitoring.
</p>

<p className="text-slate-300 mt-2">
  Contributed to backend architecture, performance optimization, database schema design,
  and microservices scalability for high-traffic, data-intensive production systems.
  Resolved production issues, optimized API performance, and enhanced overall platform resilience.
</p>

<p className="text-slate-300 mt-2">
  Participated in code reviews, mentored junior developers, established engineering best practices,
  and collaborated with cross-functional stakeholders to maintain code quality and accelerate delivery cycles.
</p>
        </motion.div>

        {/* SYNORIQ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">Synoriq</h3>
          <p className="text-slate-400 text-sm">Jan 2022 - Aug 2022</p>

          <p className="text-slate-300 mt-2">
  Contributed to the development of an enterprise Conveyance Management System by implementing
  responsive frontend modules and backend-integrated features aligned with business and technical requirements.
</p>

<p className="text-slate-300 mt-2">
  Collaborated with senior engineers and stakeholders to deliver scalable UI solutions,
  optimize application performance, resolve technical issues, and enhance maintainability
  through clean architecture and iterative development practices.
</p>
        </motion.div>

      </div>
    </section>
  );
}