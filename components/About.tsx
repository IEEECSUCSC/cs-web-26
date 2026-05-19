'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function About() {
  const highlights = [
    'Technical Workshops',
    'Networking Opportunities',
    'Competitions',
    'Research Culture'
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden bg-light-gray aspect-[4/3] border border-border-gray relative z-10 shadow-sm">
              <img 
                src="https://placehold.co/800x600/F8FAFC/0A192F?text=Students+Working+Together" 
                alt="Students collaborating in seminar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-light-gray rounded-3xl -z-10 border border-border-gray" />
            
            {/* Floating stats cards */}
            <motion.div 
              className="absolute -bottom-10 left-10 bg-white p-5 rounded-2xl shadow-lg border border-border-gray flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <p className="font-display font-bold text-ieee-blue text-2xl">2021</p>
                <p className="font-sans text-text-gray text-xs font-semibold uppercase tracking-wider mt-1">Founded</p>
              </div>
              <div className="w-px bg-border-gray" />
              <div>
                <p className="font-display font-bold text-ieee-blue text-2xl">500+</p>
                <p className="font-sans text-text-gray text-xs font-semibold uppercase tracking-wider mt-1">Members</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            className="lg:pl-8 pt-8 lg:pt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4">
              <h2 className="section-label mb-2">About Us</h2>
              <div className="blue-divider" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Advancing Computing Knowledge & Innovation
            </h3>

            <p className="font-sans text-text-gray text-lg leading-relaxed mb-8">
              We are the official IEEE Computer Society chapter of UCSC dedicated to advancing computing knowledge, innovation, leadership, and collaboration among students. Our mission is to bridge the gap between academic learning and industry demands.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ieee-blue/10 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-ieee-blue" />
                  </div>
                  <span className="font-sans text-navy font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-light-gray p-6 rounded-2xl border border-border-gray">
              <p className="font-display font-medium text-navy">
                &ldquo;Empowering students to become the technology leaders of tomorrow through hands-on learning and global networking.&rdquo;
              </p>
              <p className="font-sans text-sm text-text-gray mt-2 font-semibold uppercase tracking-wider">
                — IEEE CS Chapter
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
