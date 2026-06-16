"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "App Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    // Generate a simple text file representation of resume and download it
    const resumeContent = `Hrithik Uday - Full Stack Developer
Email: official.hrithikuday@gmail.com
Phone: +91 80755 57290
Location: Malappuram, India

SUMMARY:
Passionate Full Stack Developer with experience building scalable applications, web apps, mobile apps, database systems, and automation tools.

TECHNICAL STACK:
Python, Django, Flask, Node.js, JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, MongoDB, PostgreSQL, Git, GitHub, SQLite, Bootstrap, C, C++.`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Hrithik_Uday_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* Background Grid and Radial Gradients */}
      <div className="absolute inset-0 grid-pattern animate-grid-move opacity-50 pointer-events-none" />
      
      {/* Premium radial gradient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-100 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-neutral-50 rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center">
        
        {/* Hero text section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-custom bg-card-custom/50 text-xs font-semibold text-secondary-text mb-6 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Freelance & Full-time
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-black mb-3">
            Hrithik Uday
          </h1>

          {/* Rotating Role Text */}
          <div className="h-16 flex items-center justify-center overflow-hidden mb-6">
            <span className="text-2xl sm:text-3xl font-medium text-secondary-text mr-2 select-none">
              I am a
            </span>
            <div className="relative h-full flex items-center min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute text-2xl sm:text-3xl font-bold text-black border-b-2 border-black tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-secondary-text max-w-2xl mb-10 leading-relaxed">
            Building scalable web applications, modern mobile apps, automation tools, and digital experiences. Focused on clean code and pixel-perfect design.
          </p>

          {/* Actions CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <button
              onClick={() => handleScrollTo("projects")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white font-medium px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-all shadow-md active:scale-98"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleScrollTo("contact")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-full border border-border-custom hover:bg-neutral-50 transition-all active:scale-98"
            >
              Contact Me
              <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* <button
              onClick={handleDownloadResume}
              className="group flex items-center justify-center gap-2 bg-transparent text-secondary-text hover:text-black font-medium px-4 py-3.5 transition-colors"
            >
              <Download size={16} />
              Resume
            </button> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
