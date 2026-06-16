"use client";

import { MapPin, Calendar, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { calculateAge } from "@/lib/utils";

export default function About() {
  const age = calculateAge("2004-01-23");

  const personalDetails = [
    {
      icon: <MapPin className="text-black" size={20} />,
      label: "Location",
      value: "Malappuram, India",
    },
    {
      icon: <Calendar className="text-black" size={20} />,
      label: "Age",
      value: `${age} Years Old`,
    },
    {
      icon: <Briefcase className="text-black" size={20} />,
      label: "Experience",
      value: "2+ Years Learning & Building",
    },
    {
      icon: <Code2 className="text-black" size={20} />,
      label: "Projects",
      value: "15+ Completed Projects",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-white border-y border-border-custom overflow-hidden"
    >
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
          >
            My Story & Journey
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-black text-black mb-6 tracking-tight">
              Designing and coding digital products from Kerala, India.
            </h3>
            
            <p className="text-secondary-text text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              I am a passionate Full Stack Developer from Malappuram, India. I enjoy building scalable applications, automation tools, SaaS products, and digital experiences. With a curiosity for technology sparked in my teens, I explore the intersections of client experience and backend systems.
            </p>
          </motion.div>

          {/* Quick stats details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {personalDetails.map((detail, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={detail.label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border-custom bg-card-custom hover:border-black/20 hover:bg-neutral-50/50 transition-all shadow-xs"
              >
                <div className="p-2.5 rounded-xl bg-white border border-border-custom shadow-xs">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-secondary-text uppercase tracking-widest">
                    {detail.label}
                  </div>
                  <div className="text-sm font-extrabold text-black mt-1">
                    {detail.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
