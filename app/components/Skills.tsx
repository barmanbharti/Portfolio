"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Braces,
  Box,
  GitBranch,
  Github,
  Gitlab,
  Cpu,
  Layers,
  FileJson,
  Cloud,
  CheckCircle,
  BookOpen,
  FileCode2
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: Code2 },
      { name: "TypeScript", icon: Braces },
    ],
  },
  {
    title: "Markup & Styling",
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: FileCode2 },
      { name: "Bootstrap", icon: Box },
      { name: "Tailwind CSS", icon: Box },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Angular", icon: Layers },
      { name: "React", icon: Cpu },
      { name: "Redux", icon: Layers },
    ],
  },
  {
    title: "Version Control & Dev Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "GitLab", icon: Gitlab },
      { name: "VS Code", icon: FileCode2 },
    ],
  },
  {
    title: "API Integration & Tools",
    skills: [
      { name: "RESTful APIs", icon: Cloud },
      { name: "JSON", icon: FileJson },
      { name: "Postman", icon: Cloud },
    ],
  },
  {
    title: "Development Practices",
    skills: [
      { name: "Agile", icon: CheckCircle },
      { name: "SDLC", icon: BookOpen },
      { name: "Scrum", icon: CheckCircle },
      { name: "Component-Based Architecture", icon: Layers },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-indigo-300 mb-3">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.07 }}
                  className="flex items-center gap-3 p-4 bg-white/10 
                             border border-white/10 rounded-xl shadow-md
                             hover:border-indigo-400 hover:shadow-indigo-500/30
                             transition-all duration-300"
                >
                  <skill.icon size={24} className="text-indigo-400" />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
