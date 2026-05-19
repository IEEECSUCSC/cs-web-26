'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const milestones = [
  { year: '2021', title: 'Chapter Founded', description: 'Official IEEE CS student branch established at UCSC.' },
  { year: '2022', title: 'First Hackathon Conducted', description: 'Hosted the inaugural 24-hour coding competition with 100+ participants.' },
  { year: '2023', title: 'National Level Workshop Series', description: 'Expanded reach to invite students from universities nationwide.' },
  { year: '2024', title: '500 Members Milestone', description: 'Became the largest technical student community on campus.' },
  { year: '2025', title: 'Industry Partnership Expansion', description: 'Secured partnerships with 10+ leading tech firms for internships and mentorships.' },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="section-label mb-2">Our Journey</h2>
            <div className="blue-divider" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Timeline of Excellence
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Center Line Background */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-border-gray md:-translate-x-1/2 rounded-full overflow-hidden">
            {/* Animated Fill Line */}
            <motion.div 
              className="w-full h-full bg-ieee-blue origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="space-y-12 relative">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className="relative flex items-center md:justify-between flex-col md:flex-row"
                >
                  {/* Left Side (Empty for odd, Content for even on desktop) */}
                  <div className={`md:w-[calc(50%-3rem)] w-full pl-16 md:pl-0 ${!isEven ? 'md:order-3 md:text-left' : 'md:text-right'}`}>
                    <motion.div 
                      className="bg-light-gray p-6 rounded-2xl border border-border-gray hover:border-ieee-blue transition-colors hover:shadow-lg relative"
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    >
                      {/* Arrow pointer */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-light-gray border-t border-r border-border-gray rotate-45 ${!isEven ? '-left-2 border-b-0 border-l-0' : '-right-2 border-b-0 border-l-0'}`} />
                      
                      <span className="inline-block font-display font-bold text-2xl text-ieee-blue mb-2">
                        {item.year}
                      </span>
                      <h4 className="font-display font-bold text-lg text-navy mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-text-gray text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Circle with pop-in animation */}
                  <motion.div 
                    className="absolute left-[24px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-ieee-blue z-10 shadow-[0_0_0_4px_rgba(0,98,155,0.2)]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  />

                  {/* Right Side (Content for odd, Empty for even on desktop) */}
                  <div className={`md:w-[calc(50%-3rem)] hidden md:block ${!isEven ? 'md:order-1' : ''}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
