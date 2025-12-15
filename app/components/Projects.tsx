"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from "lucide-react";

type Project = {
    no:number,
    title: string;
    img: string;
    url: string;
    desc: string;
    category: "SMS" | "VOICE" | "RCS" | "WABA" | "CRM" | "WEBSITE";
    role: string;
    tech: string[];
    bullets: string[]; // <-- ADD THIS LINE
  };
  
  

const projects: Project[] = [
  {
    no: 1,
    title: "SMS Messaging Platform",
    img: "/SMS.svg",
    url: "https://sms.pixabits.in",
    desc: "A full-scale SMS platform for campaigns, delivery reports and real-time analytics.",
    category: "SMS",
    role: "Full-Stack Developer (Angular + Node.js + Express + MongoDB)",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "Charts.js"],
    bullets: [
      "Developed complete modules for campaigns, templates, wallet and detailed delivery analytics.",
      "Built scalable REST APIs with optimized MongoDB queries for high-volume SMS logs.",
      "Integrated real-time delivery insights using WebSockets for status updates and tracking.",
      "Improved performance with pagination, indexes and efficient data pipelines across modules."
    ]
  },

  {
    no: 2,
    title: "Voice Calling Dashboard",
    img: "/Voice.svg",
    url: "https://voice.pixabits.in",
    desc: "A voice routing and analytics panel for managing calls and monitoring agent performance.",
    category: "VOICE",
    role: "Full-Stack Developer (Angular + Node.js + WebRTC)",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    bullets: [
      "Built UI for call routing, agent dashboards and detailed live call logs.",
      "Implemented Node.js APIs for call events, performance tracking and reporting.",
      "Integrated WebRTC signaling to show ringing, connected and dropped call states.",
      "Created dynamic reports with filters, grouping and aggregation-based insights."
    ]
  },

  {
    no: 3,
    title: "RCS Rich Messaging Panel",
    img: "/RCS.svg",
    url: "https://rcs.pixabits.in",
    desc: "A platform for creating rich RCS cards, carousels, CTAs and monitoring delivery metrics.",
    category: "RCS",
    role: "Full-Stack Developer",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Built an RCS template builder supporting cards, media, carousels and previews.",
      "Created backend APIs for template saving, approval workflows and access control.",
      "Implemented delivery/read analytics using event-based real-time update streams.",
      "Designed scalable MongoDB schemas for templates, campaigns and approval flows."
    ]
  },

  {
    no: 4,
    title: "WhatsApp Business API Panel",
    img: "/WA.svg",
    url: "https://wab.pixabits.in",
    desc: "A WABA platform for templates, broadcast campaigns, segmentation and analytics.",
    category: "WABA",
    role: "Full-Stack Developer",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Built template creation UI with variable mapping, validations and preview steps.",
      "Developed backend for segmentation, broadcast scheduling and delivery events.",
      "Implemented real-time dashboards for delivered, read and failed message states.",
      "Optimized large logs using indexed queries, pagination and aggregated reporting."
    ]
  },

  {
    no: 5,
    title: "CRM With WebRTC Calling",
    img: "/CRM.svg",
    url: "https://crm.pixabits.in",
    desc: "A CRM system with WebRTC calling, lead tracking, pipelines and live dashboards.",
    category: "CRM",
    role: "Full-Stack Engineer (React + Node.js + MongoDB)",
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    bullets: [
      "Integrated WebRTC calling with event handling, call tracking and session logs.",
      "Built REST APIs for leads, pipelines, call logs and user activity analytics.",
      "Created real-time dashboards using Redux and event-driven data updates.",
      "Designed modular MongoDB schemas for leads, activities and pipeline workflows."
    ]
  },

  {
    no: 6,
    title: "Pixabits Corporate Website",
    img: "/PX_logo.svg",
    url: "https://pixabits.in",
    desc: "A corporate CPaaS website showcasing products, features, pricing and brand identity.",
    category: "WEBSITE",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
    bullets: [
      "Developed responsive landing, product and pricing pages with reusable components.",
      "Built backend endpoints for lead forms, newsletters and content submissions.",
      "Added smooth animations and micro-interactions using Framer Motion.",
      "Enhanced SEO, accessibility and performance across all major sections."
    ]
  },

  {
    no: 7,
    title: "Paisastreet – Finance Marketplace",
    img: "/PS_logo.svg",
    url: "https://paisastreet.in",
    desc: "A fintech marketplace for loans, credit cards, insurance and financial product listings.",
    category: "WEBSITE",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Developed UI for loan comparison, card listings, insurance pages and lead forms.",
      "Created backend APIs for forms, products, filtering and category-based data.",
      "Designed reusable UI components for cards, grids and dynamic product rendering.",
      "Built MongoDB schemas for leads, categories and product details with optimized queries."
    ]
  }
];


  
  
export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startAuto = () => {
      stopAuto();
      autoRef.current = setInterval(() => {
        if (!slider || isHovering) return;

        const card = slider.children[0] as HTMLElement;
        if (!card) return;

        slider.scrollBy({
          left: card.offsetWidth,
          behavior: "smooth",
        });

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - card.offsetWidth
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    const stopAuto = () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };

    startAuto();
    return () => stopAuto();
  }, [isHovering]);

  /* ---------------- ARROWS ---------------- */
  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[0] as HTMLElement;
    if (!card) return;

    slider.scrollBy({
      left: dir === "left" ? -card.offsetWidth : card.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative overflow-hidden py-10">

      {/* Header */}
      

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-14">
      <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="flex gap-3">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
    </div>
    
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-14">
        
     <div
  ref={sliderRef}
  className="
    flex
    overflow-x-auto
    snap-x snap-mandatory
    scrollbar-hide
    w-full
    min-h-[520px]
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>

       {projects.map((p) => (
  <motion.div
    key={p.no}
    whileHover={{ scale: 1.02 }}
    className="
      snap-start
      flex-shrink-0
      w-full
      min-w-full
      sm:w-[460px]
      sm:min-w-[460px]
      lg:w-[520px]
      lg:min-w-[520px]
    "
  >
    {/* CARD SPACING (REPLACES GAP) */}
    <div className="px-3 sm:px-2 w-full h-full">
      <div className="relative h-full bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col">

        {/* CATEGORY + ROLE */}
        <div className="flex items-center justify-between gap-2 sm:gap-0">
  <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-indigo-300">
    {p.category}
  </span>

  <span className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-200 rounded-full">
    {p.role}
  </span>
</div>


        {/* IMAGE + TITLE */}
        <div className="flex gap-4 mt-4">
          <img
            src={p.img}
            alt={p.title}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-white/10 object-cover"
          />

          <div className="flex-1">
      <h3 className="text-lg sm:text-xl font-semibold flex items-start gap-3">
  <span
    className="
      flex items-center justify-center
      min-w-[2.4rem]
      h-8
      sm:h-9
      rounded-md
      bg-indigo-500/15
      text-indigo-300
      font-mono
      text-lg
      sm:text-xl
      leading-none
    "
  >
    {String(p.no).padStart(2, "0")}
  </span>

  <span className="block mt-[2px] leading-snug">
    {p.title}
  </span>
</h3>




            <p className="text-slate-300 text-sm mt-1">
              {p.desc}
            </p>
          </div>
        </div>

        {/* BULLETS */}
        <ul className="mt-3 space-y-1.5">
          {p.bullets.map((line, i) => (
            <li
              key={i}
              className="text-sm text-slate-300 flex gap-2"
            >
              <span className="text-indigo-400 mt-1">•</span>
              {line}
            </li>
          ))}
        </ul>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {p.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-black/20 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 text-slate-200"
            >
              <Code size={14} /> {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={p.url}
          target="_blank"
          className="mt-auto block text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
        >
          Visit Project <ExternalLink size={14} className="inline ml-2" />
        </a>

      </div>
    </div>
  </motion.div>
))}

      </div>
      </div>
    </section>
  
);

}



