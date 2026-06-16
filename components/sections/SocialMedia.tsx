"use client";

import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaWhatsapp, 
  FaSnapchat, 
  FaLinkedin, 
  FaInstagram, 
  FaXTwitter 
} from "react-icons/fa6";

interface SocialItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  href: string;
  color: string; // Brand color for hover text
  glow: string; // Tailwind shadow color on hover
  borderColor: string; // Brand border color hover
}

const socials: SocialItem[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com",
    color: "group-hover:text-black",
    glow: "hover:shadow-neutral-500/20",
    borderColor: "hover:border-neutral-500/40",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/918075557290",
    color: "group-hover:text-[#25D366]",
    glow: "hover:shadow-[#25D366]/20",
    borderColor: "hover:border-[#25D366]/40",
  },
  {
    name: "Snapchat",
    icon: FaSnapchat,
    href: "https://snapchat.com",
    color: "group-hover:text-[#FFFC00]",
    glow: "hover:shadow-[#FFFC00]/20",
    borderColor: "hover:border-[#FFFC00]/40",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com",
    color: "group-hover:text-[#0077B5]",
    glow: "hover:shadow-[#0077B5]/20",
    borderColor: "hover:border-[#0077B5]/40",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
    color: "group-hover:text-[#E1306C]",
    glow: "hover:shadow-[#E1306C]/20",
    borderColor: "hover:border-[#E1306C]/40",
  },
  {
    name: "Twitter/X",
    icon: FaXTwitter,
    href: "https://x.com",
    color: "group-hover:text-black",
    glow: "hover:shadow-neutral-800/20",
    borderColor: "hover:border-neutral-800/40",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function SocialMedia() {
  return (
    <section className="relative py-16 bg-white border-t border-border-custom overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Subtitle */}
        <div className="text-center mb-10">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary-text">
            Connect With Me
          </h3>
        </div>

        {/* Social media grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-6 transition-all duration-300 ${social.borderColor}`}
                aria-label={`Visit Hrithik's ${social.name}`}
              >
                <div className={`p-3 rounded-xl bg-white border border-border-custom shadow-xs group-hover:scale-110 transition-all duration-300 text-secondary-text ${social.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-xs font-semibold text-secondary-text group-hover:text-black transition-colors mt-3">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
