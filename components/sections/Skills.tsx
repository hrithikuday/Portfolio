"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiDjango, SiFlask, SiNodedotjs, SiJavascript, 
  SiReact, SiNextdotjs, SiHtml5, SiCss, 
  SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiGithub, 
  SiSqlite, SiBootstrap, SiC, SiCplusplus 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface SkillItem {
  name: string;
  label: string;
  color: string; // Tailwind gradient classes
  iconColor: string; // Tailwind text color for the icon
  borderColor: string; // Hover border color class
  shadowColor: string; // Hover shadow glow color class
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const skills: SkillItem[] = [
  {
    name: "Python",
    label: "LANGUAGE",
    color: "from-yellow-500/10 to-yellow-600/5",
    iconColor: "text-yellow-600",
    borderColor: "hover:border-yellow-400/40",
    shadowColor: "shadow-yellow-500/5",
    icon: SiPython,
  },
  {
    name: "Django",
    label: "FRAMEWORK",
    color: "from-red-500/10 to-red-600/5",
    iconColor: "text-red-600",
    borderColor: "hover:border-red-400/40",
    shadowColor: "shadow-red-500/5",
    icon: SiDjango,
  },
  {
    name: "Flask",
    label: "FRAMEWORK",
    color: "from-orange-500/10 to-orange-600/5",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-400/40",
    shadowColor: "shadow-orange-500/5",
    icon: SiFlask,
  },
  {
    name: "Node.js",
    label: "RUN-TIME",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-400/40",
    shadowColor: "shadow-emerald-500/5",
    icon: SiNodedotjs,
  },
  {
    name: "JavaScript",
    label: "LANGUAGE",
    color: "from-amber-400/10 to-amber-500/5",
    iconColor: "text-amber-500",
    borderColor: "hover:border-amber-300/40",
    shadowColor: "shadow-amber-500/5",
    icon: SiJavascript,
  },
  {
    name: "AWS",
    label: "PLATFORM",
    color: "from-amber-500/10 to-orange-600/5",
    iconColor: "text-amber-500",
    borderColor: "hover:border-amber-400/40",
    shadowColor: "shadow-amber-500/5",
    icon: FaAws,
  },
  {
    name: "React",
    label: "LIBRARY",
    color: "from-cyan-400/10 to-cyan-500/5",
    iconColor: "text-cyan-500",
    borderColor: "hover:border-cyan-300/40",
    shadowColor: "shadow-cyan-500/5",
    icon: SiReact,
  },
  {
    name: "Next.js",
    label: "FRAMEWORK",
    color: "from-neutral-800/10 to-neutral-900/5",
    iconColor: "text-neutral-900",
    borderColor: "hover:border-neutral-500/40",
    shadowColor: "shadow-neutral-500/5",
    icon: SiNextdotjs,
  },
  {
    name: "HTML5",
    label: "MARKUP",
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-400/40",
    shadowColor: "shadow-purple-500/5",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    label: "STYLING",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-400/40",
    shadowColor: "shadow-blue-500/5",
    icon: SiCss,
  },
  {
    name: "Tailwind CSS",
    label: "STYLING",
    color: "from-sky-400/10 to-sky-500/5",
    iconColor: "text-sky-500",
    borderColor: "hover:border-sky-300/40",
    shadowColor: "shadow-sky-500/5",
    icon: SiTailwindcss,
  },
  {
    name: "MongoDB",
    label: "DATABASE",
    color: "from-emerald-600/10 to-emerald-700/5",
    iconColor: "text-emerald-700",
    borderColor: "hover:border-emerald-500/40",
    shadowColor: "shadow-emerald-600/5",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    label: "DATABASE",
    color: "from-indigo-500/10 to-indigo-600/5",
    iconColor: "text-indigo-600",
    borderColor: "hover:border-indigo-400/40",
    shadowColor: "shadow-indigo-500/5",
    icon: SiPostgresql,
  },
  {
    name: "SQLite",
    label: "DATABASE",
    color: "from-blue-400/10 to-sky-500/5",
    iconColor: "text-blue-500",
    borderColor: "hover:border-blue-400/40",
    shadowColor: "shadow-blue-400/5",
    icon: SiSqlite,
  },
  {
    name: "Git",
    label: "VCS",
    color: "from-orange-500/10 to-red-500/5",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-400/40",
    shadowColor: "shadow-orange-500/5",
    icon: SiGit,
  },
  {
    name: "GitHub",
    label: "PLATFORM",
    color: "from-neutral-500/10 to-neutral-600/5",
    iconColor: "text-neutral-600",
    borderColor: "hover:border-neutral-400/40",
    shadowColor: "shadow-neutral-500/5",
    icon: SiGithub,
  },
  {
    name: "Bootstrap",
    label: "STYLING",
    color: "from-violet-500/10 to-violet-600/5",
    iconColor: "text-violet-600",
    borderColor: "hover:border-violet-400/40",
    shadowColor: "shadow-violet-500/5",
    icon: SiBootstrap,
  },
  {
    name: "C",
    label: "LANGUAGE",
    color: "from-slate-500/10 to-slate-600/5",
    iconColor: "text-slate-600",
    borderColor: "hover:border-slate-400/40",
    shadowColor: "shadow-slate-500/5",
    icon: SiC,
  },
  {
    name: "C++",
    label: "LANGUAGE",
    color: "from-indigo-600/10 to-indigo-700/5",
    iconColor: "text-indigo-700",
    borderColor: "hover:border-indigo-500/40",
    shadowColor: "shadow-indigo-600/5",
    icon: SiCplusplus,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neutral-50 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neutral-100 rounded-full blur-[100px] pointer-events-none opacity-40" />

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
            My Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
          >
            Technologies I Work With
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                key={skill.name}
                className={`group relative overflow-hidden rounded-[24px] border border-border-custom bg-card-custom p-6 transition-all duration-300 ${skill.borderColor} hover:shadow-lg ${skill.shadowColor} select-none`}
              >
                {/* Decorative background circle */}
                <div
                  className={`absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-linear-to-tr ${skill.color} opacity-40 group-hover:scale-150 transition-transform duration-500`}
                />
                
                {/* Visual glow indicator */}
                <div
                  className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-linear-to-tr ${skill.color.replace("/10", "").replace("/5", "")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Skill Icon */}
                <div className={`p-2.5 rounded-xl bg-white border border-border-custom shadow-xs inline-flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${skill.iconColor}`}>
                  <Icon size={24} />
                </div>

                {/* Skill Category/Label */}
                <div className="text-[10px] font-bold text-secondary-text tracking-widest uppercase">
                  {skill.label}
                </div>

                {/* Skill Name */}
                <div className="text-base font-extrabold text-black mt-1 group-hover:text-black transition-colors">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
