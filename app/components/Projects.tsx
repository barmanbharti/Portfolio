"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from "lucide-react";

type Project = {
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

  // AUTO SLIDE
useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startAuto = () => {
      stopAuto();
      autoRef.current = setInterval(() => {
        if (!slider || isHovering) return;

        // ⭐ exact card width instead of slider width
        const card = slider.querySelector("div.snap-start") as HTMLDivElement;
        const amount = card?.clientWidth || slider.clientWidth;

        slider.scrollBy({ left: amount, behavior: "smooth" });

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
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

  // ⭐ FIXED ARROW SCROLL
  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("div.snap-start") as HTMLDivElement;
    const amount = card?.clientWidth || slider.clientWidth;

    slider.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // 3D TILT EFFECT
  const handleTilt = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTilt({
      rotateY: ((x / rect.width) - 0.5) * 12,
      rotateX: ((y / rect.height) - 0.5) * -8,
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });


  return (
<section id="projects" className="section relative overflow-hidden">

  {/* Neon blur backgrounds */}
  <div className="absolute -top-32 -left-20 w-[300px] h-[300px] bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />
  <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

  <div className="flex items-center justify-between mb-4 px-2">
    <h2 className="text-3xl font-bold">Projects</h2>

    <div className="flex gap-3">
      <button
        aria-label="prev"
        onClick={() => scroll("left")}
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronLeft />
      </button>

      <button
        aria-label="next"
        onClick={() => scroll("right")}
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronRight />
      </button>
    </div>
  </div>


  {/* SLIDER */}
   <div
        ref={sliderRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          resetTilt();
        }}
        onMouseMove={handleTilt}
        className="
          flex 
          overflow-x-auto 
          snap-x snap-mandatory 
          scrollbar-hide 
          gap-4 
          w-full
          px-2
        "
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="
              snap-start
              w-[100%]
              sm:w-[380px]
              md:w-[460px]
              flex-shrink-0
            "
          >
            <div className="relative w-full">

              {/* Glow Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-40 blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(14,165,233,0.25))",
                }}
              />

              {/* CARD */}
              <div
                className="
                  relative z-10
                  w-full
                  bg-white/5 backdrop-blur-xl 
                  p-5 rounded-2xl 
                  border border-white/10
                  shadow-xl 
                  flex flex-col
                "
              >
                {/* Category + Role */}
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-indigo-300">
                    {p.category}
                  </span>
                  <span className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-200 rounded-full">
                    My Role
                  </span>
                </div>

                {/* IMAGE + TITLE + DESC */}
                <div className="flex gap-4 mt-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-white/10"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* BULLETS */}
                <ul className="mt-3 space-y-1.5">
                  {p.bullets.map((line, i) => (
                    <li key={i} className="text-sm text-slate-300 flex gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      {line}
                    </li>
                  ))}
                </ul>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="text-xs bg-black/20 px-3 py-1 rounded-full text-slate-200 border border-white/10 flex items-center gap-1"
                    >
                      <Code size={14} /> {tech}
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={p.url}
                  target="_blank"
                  className="block mt-auto mb-1 text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white"
                >
                  Visit Project <ExternalLink size={14} className="inline ml-2" />
                </a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>


</section>

  );
}



