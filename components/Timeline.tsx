'use client'

import { motion } from 'motion/react'

const milestones = [
  { year: '2021', title: 'Chapter Founded', description: 'Official IEEE CS student branch established at the university.' },
  { year: '2022', title: 'First Hackathon Conducted', description: 'Hosted the inaugural 24-hour coding competition with 100+ participants.' },
  { year: '2023', title: 'National Level Workshop Series', description: 'Expanded reach to invite students from universities nationwide.' },
  { year: '2024', title: '500 Members Milestone', description: 'Became the largest technical student community on campus.' },
  { year: '2025', title: 'Industry Partnership Expansion', description: 'Secured partnerships with 10+ leading tech firms for internships and mentorships.' },
]

export default function Timeline() {
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

        <div className="relative max-w-4xl mx-auto">
          {/* Center Blue Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border-gray md:-translate-x-1/2">
            <div className="w-full h-full bg-ieee-blue origin-top scale-y-100" />
          </div>

          <div className="space-y-12 relative">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={item.year}
                  className="relative flex items-center md:justify-between flex-col md:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Left Side (Empty for odd, Content for even on desktop) */}
                  <div className={`md:w-[calc(50%-3rem)] w-full pl-16 md:pl-0 ${!isEven ? 'md:order-3 md:text-left' : 'md:text-right'}`}>
                    <div className="bg-light-gray p-6 rounded-2xl border border-border-gray hover:border-ieee-blue transition-colors hover:shadow-lg relative">
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
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-[24px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-ieee-blue z-10 shadow-[0_0_0_4px_rgba(0,98,155,0.1)]" />

                  {/* Right Side (Content for odd, Empty for even on desktop) */}
                  <div className={`md:w-[calc(50%-3rem)] hidden md:block ${!isEven ? 'md:order-1' : ''}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
