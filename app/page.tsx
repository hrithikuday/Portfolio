import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import WhatIDo from "@/components/sections/WhatIDo";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import SocialMedia from "@/components/sections/SocialMedia";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero />
        
        {/* About Section */}
        <About />

        {/* What I Do Section */}
        <WhatIDo />

        {/* Skills Grid Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Numbers Statistics Bar */}
        <Stats />

        {/* Contact Form & Cards Section */}
        <Contact />

        {/* Large Animated Social Icons */}
        <SocialMedia />
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
