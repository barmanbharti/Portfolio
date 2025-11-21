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
      img: "/projects/cpaas-sms.png",
      url: "https://sms.pixabits.in",
      desc: "A multi-channel SMS dashboard for campaigns, delivery tracking, analytics and wallet usage.",
      category: "SMS",
      role: "Frontend Developer (UI + API Integration)",
      tech: ["Angular", "TypeScript", "Charts.js"],
      bullets: [
        "Developed complete UI modules for campaigns, templates, delivery analytics, wallet management and reporting.",
        "Integrated real-time delivery insights (sent/delivered/failed) with interactive chart visualizations and event-based updates.",
        "Built reusable tables with advanced filters, pagination, search and export features for large datasets."
      ]
    },
  
    {
      title: "Voice Calling Dashboard",
      img: "/projects/cpaas-voice.png",
      url: "https://voice.pixabits.in",
      desc: "A voice routing and call-management dashboard with real-time call logs and agent analytics.",
      category: "VOICE",
      role: "Frontend Developer",
      tech: ["Angular", "WebRTC", "REST"],
      bullets: [
        "Designed routing screens, detailed call logs, agent performance dashboards and end-to-end call flow UI.",
        "Integrated WebRTC call event updates including ringing, connected and dropped states for real-time analytics.",
        "Built reporting tools with dynamic columns, status grouping, filters and export-to-file options."
      ]
    },
  
    {
      title: "RCS Rich Messaging Panel",
      img: "/projects/cpaas-rcs.png",
      url: "https://rcs.pixabits.in",
      desc: "A rich media RCS platform for creating cards, CTAs, carousels and tracking engagement.",
      category: "RCS",
      role: "Frontend Developer",
      tech: ["Angular", "TypeScript"],
      bullets: [
        "Built a full RCS template builder supporting images, videos, CTAs, carousels and multi-step preview flows.",
        "Integrated delivery and read analytics with chart-based insights and real-time event synchronization.",
        "Implemented approval flows, validations and modular UI components for easy template creation."
      ]
    },
  
    {
      title: "WhatsApp Business API Panel",
      img: "/projects/cpaas-waba.png",
      url: "https://wab.pixabits.in",
      desc: "A WhatsApp platform for templates, broadcasts, segmentation and live message reporting.",
      category: "WABA",
      role: "Frontend Developer",
      tech: ["Angular", "REST"],
      bullets: [
        "Developed complete template creation UI including variable mapping, multi-language preview and category tagging.",
        "Built broadcast scheduling with segmentation, attachments and live delivery state updates.",
        "Created analytics dashboards for delivered, read, failed and pending message events."
      ]
    },
  
    {
      title: "CRM With WebRTC Calling",
      img: "/projects/cpaas-crm.png",
      url: "https://crm.pixabits.in",
      desc: "A CRM platform with live lead management, WebRTC calling, pipelines and real-time dashboards.",
      category: "CRM",
      role: "Frontend Engineer (React + WebRTC)",
      tech: ["React", "Redux", "WebRTC"],
      bullets: [
        "Integrated WebRTC calling with controls, live call events, logging and agent-based workflows.",
        "Built lead dashboard screens including assignment, pipeline stages, filters and detailed lead views.",
        "Created real-time dashboards using event-driven updates and optimized Redux state management."
      ]
    },
  
    {
      title: "Pixabits Corporate Website",
      img: "/projects/pixabits.png",
      url: "https://pixabits.in",
      desc: "A professional CPaaS website showcasing features, pricing, products and brand identity.",
      category: "WEBSITE",
      role: "Frontend Developer",
      tech: ["React", "Tailwind", "Framer Motion"],
      bullets: [
        "Designed and developed landing, product, pricing and feature-highlight sections with responsive layouts.",
        "Implemented animations, transitions and micro-interactions using Framer Motion for a premium UX.",
        "Improved SEO, performance and accessibility across the entire website."
      ]
    },
  
    {
      title: "Paisastreet – Finance Marketplace",
      img: "/projects/paisastreet.png", // Add image in /public/projects/
      url: "https://paisastreet.in",
      desc: "A fintech platform offering loans, credit cards, insurance and financial product comparisons.",
      category: "WEBSITE",
      role: "Frontend Developer",
      tech: ["React", "Tailwind"],
      bullets: [
        "Developed complete UI for loan comparison, credit card listings, insurance products and lead forms.",
        "Built responsive landing pages with modern layouts, forms, product highlights and SEO-friendly structure.",
        "Integrated dynamic data rendering with reusable components for cards, listings and product details."
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
        const amount = Math.round(slider.clientWidth * 0.5);
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

  // ARROW SCROLL
  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = Math.round(slider.clientWidth * 0.5);
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

      <div className="flex items-center justify-between mb-4">
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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
      >
        {projects.map((p, index) => (
         <motion.div
         key={index}
         whileHover={{ scale: 1.03 }}
         className="snap-start"
         style={{
           transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
         }}
       >
         <div className="relative">
           {/* gradient glow border */}
           <div
             className="absolute -inset-[2px] rounded-2xl opacity-60 blur-sm"
             style={{
               background:
                 "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(14,165,233,0.25))",
             }}
           />
       
           {/* CARD */}
           <div className="relative z-10 min-w-[420px] md:min-w-[470px] bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl">
       
             {/* Category + Role */}
             <div className="flex items-center justify-between">
               <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-indigo-300">
                 {p.category}
               </span>
               <span className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-200 rounded-full">
                 My Role
               </span>
             </div>
       
             {/* FLEX ROW: IMAGE LEFT + CONTENT RIGHT */}
             <div className="flex gap-4 mt-4">
               {/* LEFT SMALL IMAGE */}
               <img
                 src={p.img}
                 alt={p.title}
                 className="w-24 h-24 object-cover rounded-lg border border-white/10"
               />
       
               {/* RIGHT CONTENT */}
               <div className="flex-1">
                 <h3 className="text-xl font-semibold">{p.title}</h3>
       
                 <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                   {p.desc}
                 </p>
               </div>
             </div>
       
             {/* BULLET POINTS */}
             <ul className="mt-3 space-y-2">
               {p.bullets.map((line, i) => (
                 <li key={i} className="text-sm text-slate-300 flex gap-2">
                   <span className="text-indigo-400 mt-1">•</span>
                   {line}
                 </li>
               ))}
             </ul>
       
             {/* TECH BADGES */}
             <div className="flex flex-wrap gap-2 mt-4">
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
               className="block mt-4 text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white"
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
