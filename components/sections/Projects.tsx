"use client";

import { motion } from "framer-motion";
import { Music, DollarSign, Receipt, ExternalLink } from "lucide-react";
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
    githubUrl: "https://github.com/officialhrithik/Song4u_Music_Player",
    featured: true,
  },
  {
    id: "income-tracker",
    name: "Income Expense Tracker",
    label: "WEB APP",
    description: "Track revenues, daily expenses, and budgets with visual analytics dashboards, filterable category timelines, and exportable financial summaries.",
    tech: ["Python", "HTML5 / Django Templates", "CSS & Tailwind CSS", "JavaScript", "SQLite"],
    gradient: "bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-transparent",
    glowColor: "hover:shadow-blue-500/10",
    icon: <DollarSign className="text-blue-600" size={24} />,
    demoUrl: "https://myexpense.hrithikuday.onrender.com/",
    githubUrl: "https://github.com/hrithikuday/MyExpense",
    featured: false,
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
    demoUrl: "https://t.me/XeonModzz_bot",
    githubUrl: "https://github.com/hrithikuday/XeonModzz",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
          >
            Recent Works
          </motion.div>
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={cardVariants}
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
        </motion.div>

      </div>
    </section>
  );
}
