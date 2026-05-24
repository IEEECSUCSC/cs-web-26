"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  MessageCircle,
  Share2,
  Users,
} from "lucide-react";

const socialLinks = [
  { Icon: Globe, key: "globe", href: "#contact" },
  { Icon: MessageCircle, key: "message", href: "#contact" },
  { Icon: Share2, key: "share", href: "#contact" },
  { Icon: Users, key: "users", href: "#contact" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-label mb-2">Get In Touch</h2>
          <div className="blue-divider mb-6" />
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Let's collaborate!
          </h3>
          <p className="font-sans text-text-gray text-lg">
            Have a question or want to work together? Leave us a message and we
            will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <form className="bg-white p-10 md:p-12 rounded-3xl border border-navy/[0.02] shadow-[0_20px_50px_rgba(10,25,47,0.04)] space-y-10 h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-sans text-sm font-semibold text-navy"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-[18px] rounded-2xl border border-border-gray/80 bg-light-gray/70 focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-sans text-sm font-semibold text-navy"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-[18px] rounded-2xl border border-border-gray/80 bg-light-gray/70 focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-sans text-sm font-semibold text-navy"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-[18px] rounded-2xl border border-border-gray/80 bg-light-gray/70 focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans resize-none"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="w-full bg-ieee-blue text-white font-sans font-semibold py-4.5 rounded-2xl hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg"
                >
                  Send Message{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-white p-10 md:p-12 rounded-3xl border border-navy/[0.02] shadow-[0_20px_50px_rgba(10,25,47,0.04)] h-full flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-2xl text-navy mb-12">
                  Contact Information
                </h4>

                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:ieeecs@ucsc.cmb.ac.lk"
                        className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors text-lg"
                      >
                        ieeecs@ucsc.cmb.ac.lk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+94771234567"
                        className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors text-lg"
                      >
                        +94 77 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Location
                      </p>
                      <p className="font-sans font-medium text-navy leading-relaxed text-lg">
                        University of Colombo School of Computing,
                        <br />
                        UCSC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-border-gray/50">
                <p className="font-sans text-sm font-semibold text-text-gray mb-6">
                  Follow Us
                </p>
                <div className="flex items-center gap-5">
                  {socialLinks.map(({ Icon, key, href }) => (
                    <a
                      key={key}
                      href={href}
                      className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-navy hover:bg-ieee-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
