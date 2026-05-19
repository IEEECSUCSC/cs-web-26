'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, Globe, MessageCircle, Share2, Users } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="section-label mb-2">Get In Touch</h2>
              <div className="blue-divider mb-6" />
              <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Let's collaborate!
              </h3>
              <p className="font-sans text-text-gray text-lg">
                Have a question or want to work together? Leave us a message and we will get back to you shortly.
              </p>
            </div>

            <form className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-sans text-sm font-semibold text-navy">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="font-sans text-sm font-semibold text-navy">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-sm font-semibold text-navy">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:bg-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all font-sans resize-none"
                />
              </div>
              
              <button 
                type="button" 
                className="w-full bg-ieee-blue text-white font-sans font-semibold py-4 rounded-xl hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 pt-8 lg:pt-0"
          >
            <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm">
              <h4 className="font-display font-bold text-2xl text-navy mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-gray mb-1">Email</p>
                    <a href="mailto:ieeecs@ucsc.cmb.ac.lk" className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors">
                      ieeecs@ucsc.cmb.ac.lk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-gray mb-1">Phone</p>
                    <a href="tel:+94771234567" className="font-sans font-medium text-navy hover:text-ieee-blue transition-colors">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-ieee-blue flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-gray mb-1">Location</p>
                    <p className="font-sans font-medium text-navy">
                      University of Colombo School of Computing,<br />UCSC
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border-gray">
                <p className="font-sans text-sm font-semibold text-text-gray mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[Globe, MessageCircle, Share2, Users].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-navy hover:bg-ieee-blue hover:text-white transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl border border-border-gray overflow-hidden shadow-sm h-64 relative bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8108888680263!2d79.85876387483526!3d6.902084093097214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e1!3m2!1sen!2slk!4v1779161693936!5m2!1sen!2slk" 
                className="w-full h-full absolute inset-0"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
