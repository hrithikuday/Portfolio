"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Zap } from "lucide-react";

const services = [
  {
    icon: <Monitor className="text-black" size={28} />,
    title: "Web Development",
    description: "Building responsive, modern, and high-performance web applications using React, Next.js, and TypeScript.",
  },
  {
    icon: <Smartphone className="text-black" size={28} />,
    title: "App Development",
    description: "Creating scalable cross-platform mobile applications and fluid desktop applications tailored to user needs.",
  },
  {
    icon: <Database className="text-black" size={28} />,
    title: "Backend Development",
    description: "Building robust, secure API architectures and database systems using Node.js, Django, PostgreSQL, and MongoDB.",
  },
  {
    icon: <Zap className="text-black" size={28} />,
    title: "Automation",
    description: "Creating custom productivity tools, scripting workflows, and scraping setups to automate manual tasks.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
    },
  },
};

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="relative py-24 bg-white border-b border-border-custom overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3"
          >
            Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
          >
            What I Do
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              key={service.title}
              className="group flex flex-col p-8 rounded-2xl border border-border-custom bg-card-custom transition-all duration-300 hover:border-black/20 hover:bg-neutral-50/30"
            >
              {/* Service Icon Container */}
              <div className="p-3 bg-white border border-border-custom shadow-xs rounded-xl inline-flex items-center justify-center w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-bold text-black mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-secondary-text text-sm leading-relaxed mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
