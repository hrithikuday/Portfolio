"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-black" size={20} />,
      label: "Email Me",
      value: "official.hrithikuday@gmail.com",
      href: "mailto:official.hrithikuday@gmail.com",
    },
    {
      icon: <Phone className="text-black" size={20} />,
      label: "Call Me",
      value: "+91 80755 57290",
      href: "tel:+918075557290",
    },
    {
      icon: <MapPin className="text-black" size={20} />,
      label: "My Location",
      value: "Malappuram, India",
      href: "https://maps.google.com/?q=Malappuram,India",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission to mock backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger canvas-confetti success celebration
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#000000", "#525252", "#E5E5E5"]
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden"
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
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
          >
            Let&apos;s Build Together
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-black tracking-tight mb-2">
              Contact Information
            </h3>
            <p className="text-secondary-text text-sm leading-relaxed mb-4">
              Feel free to reach out to me for project inquiries, collaborations, or just to say hello. I will get back to you as soon as possible.
            </p>

            {contactInfo.map((info) => (
              <motion.a
                whileHover={{ scale: 1.01, x: 4 }}
                key={info.label}
                href={info.href}
                target={info.label === "My Location" ? "_blank" : undefined}
                rel={info.label === "My Location" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border-custom bg-card-custom hover:border-black/20 hover:bg-neutral-50/50 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-white border border-border-custom shadow-xs">
                  {info.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-secondary-text tracking-widest uppercase">
                    {info.label}
                  </div>
                  <div className="text-sm font-extrabold text-black mt-0.5 break-all">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-[32px] border border-border-custom bg-card-custom relative">
              <h3 className="text-xl font-bold text-black tracking-tight mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email side-by-side on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-secondary-text uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full bg-white border ${
                        errors.name ? "border-red-500" : "border-border-custom"
                      } rounded-xl px-4 py-3 text-sm focus:border-black focus:outline-hidden transition-colors disabled:opacity-60`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs font-medium text-red-500 mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-secondary-text uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full bg-white border ${
                        errors.email ? "border-red-500" : "border-border-custom"
                      } rounded-xl px-4 py-3 text-sm focus:border-black focus:outline-hidden transition-colors disabled:opacity-60`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-xs font-medium text-red-500 mt-1">{errors.email}</span>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-secondary-text uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full bg-white border ${
                      errors.subject ? "border-red-500" : "border-border-custom"
                    } rounded-xl px-4 py-3 text-sm focus:border-black focus:outline-hidden transition-colors disabled:opacity-60`}
                    placeholder="Project Proposal"
                  />
                  {errors.subject && (
                    <span className="text-xs font-medium text-red-500 mt-1">{errors.subject}</span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-secondary-text uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full bg-white border ${
                      errors.message ? "border-red-500" : "border-border-custom"
                    } rounded-xl px-4 py-3 text-sm focus:border-black focus:outline-hidden transition-colors resize-none disabled:opacity-60`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <span className="text-xs font-medium text-red-500 mt-1">{errors.message}</span>
                  )}
                </div>

                {/* Submit button / Success feedback */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white font-medium px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all shadow-md disabled:bg-neutral-400 disabled:cursor-not-allowed select-none active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-2 text-emerald-600 text-sm font-semibold mt-2 sm:mt-0"
                      >
                        <CheckCircle2 size={18} />
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
