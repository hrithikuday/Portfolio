"use client";

import { FaGithub, FaWhatsapp, FaSnapchat, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918075557290" },
  { name: "Snapchat", icon: FaSnapchat, href: "https://snapchat.com" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { name: "Twitter/X", icon: FaXTwitter, href: "https://x.com" },
];

export default function Footer() {
  const currentYear = 2026; // Static 2026 copyright as explicitly requested

  return (
    <footer className="border-t border-border-custom bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-sm text-secondary-text font-medium order-3 md:order-1">
          &copy; {currentYear} Hrithik Uday. All rights reserved.
        </div>

        {/* Center: Social Icons
        <div className="flex items-center gap-5 order-1 md:order-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-black transition-colors p-2 hover:bg-neutral-50 rounded-full border border-transparent hover:border-border-custom"
                aria-label={`Visit Hrithik's ${social.name}`}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div> */}

        {/* Right: Technical Stack Credential */}
        <div className="text-xs text-secondary-text font-medium tracking-tight order-2 md:order-3">
          Built with{" "}
          <span className="text-black font-semibold">Next.js 16</span>,{" "}
          <span className="text-black font-semibold">Tailwind CSS v4</span> &amp;{" "}
          <span className="text-black font-semibold">Framer Motion</span>
        </div>

      </div>
    </footer>
  );
}
