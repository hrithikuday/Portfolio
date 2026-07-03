"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Music, DollarSign, Receipt, ExternalLink, ShoppingBag,
  Server, Database, Share2, Download, Globe, Layers, Terminal, Cpu 
} from "lucide-react";
import { FaGithub, FaTelegram } from "react-icons/fa6";

interface ProjectItem {
  id: string;
  name: string;
  label: string;
  description: string;
  tech: string[];
  gradient: string; // CSS gradient class
  glowColor: string; // Shadow glow color
  icon: React.ReactNode;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: "web" | "bots" | "utils";
}

const projects: ProjectItem[] = [
  {
    id: "song4u",
    name: "Song4U",
    label: "FEATURED PROJECT",
    description: "A premium music streaming and media platform featuring catalog discovery, personalized queues, and real-time audio playback control. Built with robust API systems and optimized data storage.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "bg-linear-to-br from-purple-500/20 via-pink-500/10 to-transparent",
    glowColor: "hover:shadow-purple-500/10",
    icon: <Music className="text-purple-600" size={24} />,
    demoUrl: "https://app.hrithikuday.me",
    githubUrl: "https://github.com/hrithikuday/Song4u_Music_Playe",
    featured: true,
    category: "web",
  },
  {
    id: "tg-stream",
    name: "TG-Stream",
    label: "TELEGRAM FILE STREAM BOT",
    description: "A high-speed, lightweight Telegram bot and HTTP web server written in Go that enables users to stream or download files stored on Telegram directly via HTTP links.",
    tech: ["Go", "Telegram Bot API", "HTTP Stream Server"],
    gradient: "bg-linear-to-br from-indigo-500/20 via-sky-500/10 to-transparent",
    glowColor: "hover:shadow-indigo-500/10",
    icon: <Server className="text-indigo-600" size={24} />,
    demoUrl: "https://t.me/TG_Stream_bot",
    githubUrl: "https://github.com/hrithikuday/TG-Stream",
    featured: false,
    category: "bots",
  },
  {
    id: "5db-movie-filter",
    name: "5DB Movie Filter Bot",
    label: "TELEGRAM AUTO FILTER",
    description: "A high-performance Telegram Auto Filter Bot featuring a unique 5-database architecture for up to 2.5 GB of free MongoDB storage, parallel duplicate checking, batch indexing, and IMDB integration.",
    tech: ["Python", "Pyrogram", "MongoDB", "IMDB API"],
    gradient: "bg-linear-to-br from-red-500/20 via-pink-500/10 to-transparent",
    glowColor: "hover:shadow-red-500/10",
    icon: <Database className="text-red-600" size={24} />,
    demoUrl: "https://t.me/FiveDB_Movie_Filter_Bot",
    githubUrl: "https://github.com/hrithikuday/5DB-Movie-Filter-Bot",
    featured: false,
    category: "bots",
  },
  {
    id: "autoforward-bot",
    name: "AutoForward Bot V1",
    label: "TELEGRAM FORWARDER",
    description: "Pyrogram-based Telegram bot to forward messages, save restricted content, filter specific file types, skip duplicates using MongoDB, customize captions, and insert custom inline buttons.",
    tech: ["Python", "Pyrogram", "MongoDB", "Telegram Bot API"],
    gradient: "bg-linear-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent",
    glowColor: "hover:shadow-fuchsia-500/10",
    icon: <Share2 className="text-fuchsia-600" size={24} />,
    demoUrl: "https://t.me/AutoForward_Bot_V1",
    githubUrl: "https://github.com/hrithikuday/AutoForward-Bot-V1",
    featured: false,
    category: "bots",
  },
  {
    id: "income-tracker",
    name: "Income Expense Tracker",
    label: "WEB APP",
    description: "Track revenues, daily expenses, and budgets with visual analytics dashboards, filterable category timelines, and exportable financial summaries.",
    tech: ["Python", "HTML5", "Django", "JavaScript", "SQLite"],
    gradient: "bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-transparent",
    glowColor: "hover:shadow-blue-500/10",
    icon: <DollarSign className="text-blue-600" size={24} />,
    demoUrl: "https://myexpense.hrithikuday.me",
    githubUrl: "https://github.com/hrithikuday/MyExpense",
    featured: false,
    category: "web",
  },
  {
    id: "bill-system",
    name: "Customer Bill System",
    label: "ENTERPRISE TOOL",
    description: "Invoice and billing management software helping business owners create bills, track unpaid client invoices, calculate automatic tax tallies, and email PDF statements.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    gradient: "bg-linear-to-br from-orange-500/20 via-yellow-500/10 to-transparent",
    glowColor: "hover:shadow-orange-500/10",
    icon: <Receipt className="text-orange-600" size={24} />,
    demoUrl: "https://billsystem.demo",
    githubUrl: "https://github.com/officialhrithik/bill-system",
    featured: false,
    category: "web",
  },
  {
    id: "Telegram Utility Bot",
    name: "XeonModzz",
    label: "TELEGRAM BOT",
    description: "A Telegram utility bot that downloads media from Instagram, Facebook, Pinterest, and YouTube (songs/videos) using a Flask API with scraping tools like Instaloader and other extractors.",
    tech: ["Python", "MongoDB", "Flask", "Telegram Bot API"],
    gradient: "bg-linear-to-br from-sky-500/20 via-blue-500/10 to-transparent",
    glowColor: "hover:shadow-sky-500/10",
    icon: <FaTelegram className="text-sky-500" size={24} />,
    demoUrl: "https://t.me/XeonModz_bot",
    githubUrl: "https://github.com/hrithikuday/XeonModzz",
    featured: false,
    category: "bots",
  },
  {
    id: "xeon-ecommerce",
    name: "Xeon E-Commerce",
    label: "E-COMMERCE PLATFORM",
    description: "A state-of-the-art E-Commerce platform built with Django and Django REST Framework (DRF). Features a premium glassmorphic UI, robust REST APIs, secure token authentication, and WhiteNoise static asset serving.",
    tech: ["Django", "Django REST Framework", "PostgreSQL", "Vanilla CSS"],
    gradient: "bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-transparent",
    glowColor: "hover:shadow-emerald-500/10",
    icon: <ShoppingBag className="text-emerald-600" size={24} />,
    demoUrl: "https://ecommerce.hrithikuday.me",
    githubUrl: "https://github.com/hrithikuday/Ecommerce",
    featured: false,
    category: "web",
  },
  {
    id: "ytdlp-downloader",
    name: "YTDLP Downloader",
    label: "MEDIA UTILITY",
    description: "A high-performance media downloader built on top of yt-dlp to download and convert video and audio from various platforms with quality selection and optimized caching.",
    tech: ["Python", "yt-dlp", "Telegram Bot API"],
    gradient: "bg-linear-to-br from-rose-500/20 via-red-500/10 to-transparent",
    glowColor: "hover:shadow-rose-500/10",
    icon: <Download className="text-rose-600" size={24} />,
    demoUrl: "https://github.com/hrithikuday/YTDLP",
    githubUrl: "https://github.com/hrithikuday/YTDLP",
    featured: false,
    category: "utils",
  },
  {
    id: "portfolio-v2",
    name: "Developer Portfolio",
    label: "PERSONAL PORTFOLIO",
    description: "This personal portfolio website, featuring a premium glassmorphic UI design, custom keyframe floating animations, filtering tabs, responsive layouts, and robust React components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "bg-linear-to-br from-pink-500/20 via-purple-500/10 to-transparent",
    glowColor: "hover:shadow-pink-500/10",
    icon: <Globe className="text-pink-600" size={24} />,
    demoUrl: "https://hrithikuday.me",
    githubUrl: "https://github.com/hrithikuday/Portfolio",
    featured: false,
    category: "web",
  },
  {
    id: "cardview-lib",
    name: "CardView Library",
    label: "COMPONENT LIBRARY",
    description: "A responsive, customizable card component library for React and TypeScript designed to display clean visual grids with glassmorphic aesthetics and modern hover animations.",
    tech: ["TypeScript", "React", "Vanilla CSS"],
    gradient: "bg-linear-to-br from-teal-500/20 via-emerald-500/10 to-transparent",
    glowColor: "hover:shadow-teal-500/10",
    icon: <Layers className="text-teal-600" size={24} />,
    demoUrl: "https://github.com/hrithikuday/cardview",
    githubUrl: "https://github.com/hrithikuday/cardview",
    featured: false,
    category: "utils",
  },
  {
    id: "basetg-template",
    name: "BaseTG Bot Template",
    label: "DEVELOPER BOILERPLATE",
    description: "A clean, production-ready base template for building Telegram bots in Python using Pyrogram, pre-configured with database utilities, logging handlers, and helper classes.",
    tech: ["Python", "Pyrogram", "MongoDB"],
    gradient: "bg-linear-to-br from-amber-500/20 via-yellow-500/10 to-transparent",
    glowColor: "hover:shadow-amber-500/10",
    icon: <Terminal className="text-amber-600" size={24} />,
    demoUrl: "https://github.com/hrithikuday/BaseTG",
    githubUrl: "https://github.com/hrithikuday/BaseTG",
    featured: false,
    category: "utils",
  },
  {
    id: "my-apis",
    name: "MyAPIs",
    label: "REST API SUITE",
    description: "A centralized API service offering high-speed scraping, media fetching, and database utility endpoints for modern application integrations.",
    tech: ["Node.js", "Express", "REST API", "Scraping"],
    gradient: "bg-linear-to-br from-violet-500/20 via-indigo-500/10 to-transparent",
    glowColor: "hover:shadow-violet-500/10",
    icon: <Cpu className="text-violet-600" size={24} />,
    demoUrl: "https://github.com/hrithikuday/MyAPIs",
    githubUrl: "https://github.com/hrithikuday/MyAPIs",
    featured: false,
    category: "utils",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "bots" | "utils">("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background visual shapes */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neutral-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-12"
          >
            Recent Works
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Apps" },
              { id: "bots", label: "Telegram Bots" },
              { id: "utils", label: "APIs & Utilities" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  activeFilter === tab.id
                    ? "bg-black text-white border-black shadow-xs"
                    : "bg-white text-secondary-text border-border-custom hover:text-black hover:border-black/20 hover:bg-neutral-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.01 }}
                key={project.id}
                className={`group relative overflow-hidden rounded-[32px] border border-border-custom bg-card-custom p-8 sm:p-10 transition-all duration-300 hover:border-black/20 hover:shadow-xl ${project.glowColor} ${project.featured ? "md:col-span-2" : "md:col-span-1"
                  }`}
              >
                {/* Colored Gradient overlay background */}
                <div
                  className={`absolute inset-0 ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Decorative circles inside card */}
                <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full border border-neutral-200/20 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
                <div className="absolute right-1/4 -bottom-16 w-32 h-32 rounded-full bg-neutral-100/10 pointer-events-none" />

                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Top bar: Icon and category label */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-bold text-secondary-text tracking-widest uppercase bg-white border border-border-custom px-3 py-1.5 rounded-full shadow-2xs">
                        {project.label}
                      </span>
                      <div className="p-3 rounded-2xl bg-white border border-border-custom shadow-xs">
                        {project.icon}
                      </div>
                    </div>

                    {/* Project Name */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-4 group-hover:text-black transition-colors">
                      {project.name}
                    </h3>

                    {/* Project Description */}
                    <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="text-xs font-semibold text-black bg-white/80 border border-border-custom px-3 py-1.5 rounded-lg backdrop-blur-md"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Links / Action buttons */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-xs"
                        aria-label={`View Live Demo for ${project.name}`}
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                      
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white text-secondary-text border border-border-custom px-5 py-2.5 rounded-full hover:text-black hover:border-black/20 hover:bg-neutral-50 transition-colors"
                        aria-label={`View GitHub Repository for ${project.name}`}
                      >
                        <FaGithub size={14} />
                        Source
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
