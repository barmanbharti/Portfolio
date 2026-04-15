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
    desc: "Enterprise-scale SMS campaign management platform with real-time delivery analytics, template workflows, and high-volume messaging operations.",
    category: "SMS",
    role: "Full-Stack Developer (Angular + Node.js + Express + MongoDB)",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "Charts.js"],
    bullets: [
      "Engineered campaign, template, wallet, and delivery analytics modules for high-volume SMS processing workflows.",
      "Architected scalable RESTful APIs with optimized MongoDB queries for large-scale SMS log ingestion and retrieval.",
      "Integrated real-time delivery tracking pipelines for instant campaign status updates and delivery insights.",
      "Enhanced platform performance through query optimization, indexing, pagination, and efficient data processing pipelines."
    ]
  },

  {
    no: 2,
    title: "Voice Calling Dashboard",
    img: "/Voice.svg",
    url: "https://voice.pixabits.in",
    desc: "Real-time voice routing and analytics dashboard for managing call operations and monitoring agent performance.",
    category: "VOICE",
    role: "Full-Stack Developer (Angular + Node.js + WebRTC)",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    bullets: [
      "Developed voice routing interfaces, live agent dashboards, and real-time call monitoring modules.",
      "Implemented backend APIs for call lifecycle events, agent performance metrics, and reporting workflows.",
      "Integrated Web Real-Time Communication (WebRTC) signaling for live call state tracking and interaction management.",
      "Built aggregation-based reporting pipelines with advanced filtering and grouped analytics insights."
    ]
  },

  {
    no: 3,
    title: "RCS Rich Messaging Panel",
    img: "/RCS.svg",
    url: "https://rcs.pixabits.in",
    desc: "Rich Communication Services platform for managing dynamic RCS templates, media cards, and delivery analytics.",
    category: "RCS",
    role: "Full-Stack Developer",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Built dynamic RCS template builder supporting cards, media, carousels, CTAs, and live previews.",
      "Developed backend services for template persistence, approval workflows, and role-based access control.",
      "Implemented event-driven delivery and read analytics using real-time update streams.",
      "Designed scalable MongoDB schemas for campaign templates, approval workflows, and messaging configurations."
    ]
  },

  {
    no: 4,
    title: "WhatsApp Business API Panel",
    img: "/WA.svg",
    url: "https://wab.pixabits.in",
    desc: "WhatsApp Business API platform for template management, campaign broadcasting, audience segmentation, and analytics.",
    category: "WABA",
    role: "Full-Stack Developer",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Engineered template builder workflows with variable mapping, validations, and live preview rendering.",
      "Implemented backend modules for segmentation, campaign scheduling, and delivery event processing.",
      "Built real-time dashboards for delivered, read, failed, and pending campaign metrics.",
      "Optimized analytics performance for large-scale messaging logs using indexing and aggregation pipelines."
    ]
  },

  {
    no: 5,
    title: "CRM With WebRTC Calling",
    img: "/CRM.svg",
    url: "https://crm.pixabits.in",
    desc: "CRM platform with integrated WebRTC calling, lead lifecycle management, sales pipelines, and operational dashboards.",
    category: "CRM",
    role: "Full-Stack Engineer (React + Node.js + MongoDB)",
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    bullets: [
      "Integrated Web Real-Time Communication (WebRTC) based calling with call event handling and session tracking.",
      "Developed REST APIs for lead management, pipelines, call logs, and user activity analytics.",
      "Implemented real-time dashboards with Redux and event-driven architecture for operational visibility.",
      "Designed modular MongoDB schemas for leads, pipeline stages, activity logs, and workflow automation."
    ]
  },

  {
    no: 6,
    title: "Pixabits Corporate Website",
    img: "/PX_logo.svg",
    url: "https://pixabits.in",
    desc: "Corporate CPaaS website showcasing product offerings, pricing models, and brand presence.",
    category: "WEBSITE",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
    bullets: [
      "Developed responsive landing, pricing, and product showcase pages with reusable component architecture.",
      "Implemented backend endpoints for lead capture, newsletter subscriptions, and content workflows.",
      "Enhanced user engagement with animation-driven micro-interactions using Framer Motion.",
      "Optimized SEO, accessibility, and Lighthouse performance across public-facing web pages."
    ]
  },

  {
    no: 7,
    title: "Paisastreet – Finance Marketplace",
    img: "/PS_logo.svg",
    url: "https://paisastreet.in",
    desc: "FinTech marketplace platform for loans, credit cards, insurance, and financial product discovery.",
    category: "WEBSITE",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Built dynamic product listing and comparison interfaces for loans, insurance, and financial products.",
      "Developed backend APIs for lead generation, filtering, product categorization, and data retrieval.",
      "Created reusable UI systems for cards, grids, filters, and dynamic rendering components.",
      "Designed optimized MongoDB schemas for lead management, product catalogs, and category structures."
    ]
  }
];


  
  
export default function Projects() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* ---------------- AUTO SLIDER ---------------- */


  useEffect(() => {
    if (!autoPlay) return;

    const slider = sliderRef.current;
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      const cards = slider.children;
      if (!cards.length) return;

      indexRef.current =
        indexRef.current + 1 >= cards.length ? 0 : indexRef.current + 1;

      const target = cards[indexRef.current] as HTMLElement;

      slider.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay]);

  /* ---------------- ARROWS ---------------- */
  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    setAutoPlay(false); // stop auto on user intent

    const cards = slider.children;
    if (!cards.length) return;

    indexRef.current =
      dir === "left"
        ? Math.max(0, indexRef.current - 1)
        : Math.min(cards.length - 1, indexRef.current + 1);

    const target = cards[indexRef.current] as HTMLElement;

    slider.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  };

  const stopAutoPlay = () => {
  setAutoPlay(false);
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};


  return (
    <section id="projects" className="relative overflow-hidden py-10">

      {/* HEADER */}
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

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-14">
       <div
  ref={sliderRef}
  onPointerDown={stopAutoPlay}  // 🔥 click / touch
  onTouchStart={stopAutoPlay}   // 🔥 mobile tap
  onWheel={stopAutoPlay}        // 🔥 mouse wheel
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
              onClick={stopAutoPlay}
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
              <div className="px-3 sm:px-2 h-full">
                <div className="h-full bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col">

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
                        <span className="min-w-[2.4rem] h-8 sm:h-9 flex items-center justify-center bg-indigo-500/15 text-indigo-300 font-mono text-lg sm:text-xl rounded-md">
                          {String(p.no).padStart(2, "0")}
                        </span>
                        <span className="mt-[2px] leading-snug">{p.title}</span>
                      </h3>

                      <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
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

                  {/* TECH */}
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



