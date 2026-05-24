"use client";

import { Globe, Mail } from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    role: "Chairperson",
    name: "John Perera",
    image: "https://placehold.co/400x400/0A192F/FFFFFF?text=JP",
  },
  {
    role: "Vice Chair",
    name: "Sarah Fernando",
    image: "https://placehold.co/400x400/00629b/FFFFFF?text=SF",
  },
  {
    role: "Secretary",
    name: "Kavindu Silva",
    image: "https://placehold.co/400x400/00b5e2/FFFFFF?text=KS",
  },
  {
    role: "Treasurer",
    name: "Nethmi Jayasinghe",
    image: "https://placehold.co/400x400/475569/FFFFFF?text=NJ",
  },
  {
    role: "Webmaster",
    name: "Alex Perera",
    image: "https://placehold.co/400x400/0A192F/FFFFFF?text=AP",
  },
  {
    role: "Event Coordinator",
    name: "Hasini Wijesinghe",
    image: "https://placehold.co/400x400/00629b/FFFFFF?text=HW",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="section-label mb-2">Our People</h2>
            <div className="blue-divider" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Meet Our Team
          </h3>
          <p className="font-sans text-text-gray text-lg">
            Dedicated student leaders driving the IEEE Computer Society mission
            forward.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              className="group relative h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-light-gray/50 rounded-2xl p-6 text-center border border-border-gray/50 hover:bg-white hover:border-ieee-blue/40 hover:shadow-[0_20px_50px_rgba(10,25,47,0.05)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col">
                <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-display font-bold text-navy text-lg leading-tight mb-1">
                  {member.name}
                </h4>
                <p className="font-sans text-ieee-blue text-xs font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </p>

                <div className="flex items-center justify-center gap-3 mt-auto">
                  <a
                    href="#team"
                    className="w-8 h-8 rounded-full bg-light-gray border border-border-gray flex items-center justify-center text-text-gray hover:text-ieee-blue hover:border-ieee-blue transition-colors"
                  >
                    <Globe size={14} />
                  </a>
                  <a
                    href="#team"
                    className="w-8 h-8 rounded-full bg-light-gray border border-border-gray flex items-center justify-center text-text-gray hover:text-navy hover:border-navy transition-colors"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
