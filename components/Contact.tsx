"use client";

import {
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

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
            <form className="bg-white p-10 rounded-2xl border border-border-gray/50 shadow-lg shadow-navy/[0.03] space-y-8 h-full flex flex-col justify-between">
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
                    className="w-full px-5 py-4 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
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
                    className="w-full px-5 py-4 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
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
                    className="w-full px-5 py-4 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans resize-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="w-full bg-ieee-blue text-white font-sans font-semibold py-4 rounded-xl hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer"
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
            <div className="bg-white p-10 rounded-2xl border border-border-gray/50 shadow-lg shadow-navy/[0.03] h-full flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-2xl text-navy mb-10">
                  Contact Information
                </h4>

                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:ieeecs@ucsc.cmb.ac.lk"
                        className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors"
                      >
                        ieeecs@ucsc.cmb.ac.lk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+94771234567"
                        className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors"
                      >
                        +94 77 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-gray mb-1">
                        Location
                      </p>
                      <p className="font-sans font-medium text-navy leading-relaxed">
                        University of Colombo School of Computing,
                        <br />
                        UCSC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border-gray/50">
                <p className="font-sans text-sm font-semibold text-text-gray mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-4">
                  {[Globe, MessageCircle, Share2, Users].map((Icon, i) => (
                    <a
                      key={i}
                      href="#contact"
                      className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-navy hover:bg-ieee-blue hover:text-white transition-all duration-300"
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
