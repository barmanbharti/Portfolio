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
        I’m a frontend engineer with 
        <span className="font-semibold text-indigo-300"> 3+ years of experience</span> 
        building fast, scalable and elegant web applications using 
        <span className="text-indigo-300"> React, Angular, TypeScript</span> and modern UI technologies. 
        I specialize in crafting clean interfaces, reusable component systems, real-time dashboards and 
        <span className="text-indigo-300"> WebRTC-based communication flows</span>.
      </motion.p>

      {/* EXTRA SKILLS SECTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        I have strong experience in 
        <span className="text-indigo-300"> SDLC processes</span>, 
        <span className="text-indigo-300"> CI/CD pipelines</span>, 
        <span className="text-indigo-300"> cross-browser compatibility</span>,  
        and <span className="text-indigo-300">frontend performance optimization</span>. 
        I also collaborate closely with backend, QA, product and design teams to 
        deliver complete, production-ready solutions. 
        Additionally, I assist junior developers with code reviews, 
        component structuring and best practices.
      </motion.p>

      {/* DOMAIN EXPERIENCE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-4 text-slate-300 leading-relaxed text-lg"
      >
        Over the years, I’ve worked extensively on CPaaS applications, CRM systems, 
        campaign builders, analytics dashboards and enterprise SaaS products—owning 
        UI development from scratch, integrating complex APIs and improving user 
        experience across devices and platforms.
      </motion.p>

      {/* TIMELINE */}
      <div className="mt-10 space-y-8 border-l border-white/10 pl-6">

        {/* Biocipher */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300">Biocipher Technologies</h3>
          <p className="text-slate-400 text-sm">2023 – Present</p>
          <p className="text-slate-300 mt-1">
            Leading UI development for multiple CPaaS modules (SMS, Voice, WhatsApp, RCS, CRM), 
            building scalable interfaces, real-time dashboards, campaign systems and 
            WebRTC calling. Collaborated closely with backend and QA teams to deliver 
            production-ready features. Mentored junior developers and improved project 
            structure, code quality and frontend consistency.
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
    Worked on a FinTech platform, handling UI tasks based on client requirements.
    Developed pages, components and features with clean design and responsive layouts,
    ensuring smooth user experience and accurate functionality as per specifications.
  </p>
</motion.div>


      </div>
    </section>
  );
}
