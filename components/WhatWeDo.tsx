"use client";

import {
  Building2,
  Code2,
  FlaskConical,
  Mic2,
  MonitorPlay,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const activities = [
  {
    title: "Workshops",
    description:
      "Hands-on technical workshops on AI, Cloud, Cybersecurity, Web Development, and DevOps.",
    icon: MonitorPlay,
  },
  {
    title: "Hackathons",
    description:
      "Intense coding competitions challenging students to solve real-world problems in 24-48 hours.",
    icon: Code2,
  },
  {
    title: "Speaker Sessions",
    description:
      "Insightful talks and seminars by industry leaders and experienced alumni.",
    icon: Mic2,
  },
  {
    title: "Research Programs",
    description:
      "Fostering a culture of academic research and paper publications among undergrads.",
    icon: FlaskConical,
  },
  {
    title: "Industry Visits",
    description:
      "Exclusive tours to top tech companies bridging the gap between academia and industry.",
    icon: Building2,
  },
  {
    title: "Competitions",
    description:
      "Regular coding challenges, CTFs, and algorithmic contests to sharpen problem-solving skills.",
    icon: Trophy,
  },
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="section-label mb-2">Our Activities</h2>
            <div className="blue-divider" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Do
          </h3>
          <p className="font-sans text-text-gray text-lg">
            We provide a platform for students to learn, build, and grow through
            diverse technical and professional initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item, idx) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 rounded-2xl border border-border-gray/50 hover:border-ieee-blue/40 shadow-sm hover:shadow-[0_20px_50px_rgba(10,25,47,0.05)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-light-gray group-hover:bg-ieee-blue transition-colors duration-300" />

              <div className="w-14 h-14 rounded-xl bg-light-gray flex items-center justify-center mb-6 group-hover:bg-ieee-blue group-hover:text-white transition-colors duration-300 text-ieee-blue">
                <item.icon size={28} />
              </div>

              <h4 className="font-display font-bold text-xl text-navy mb-3 group-hover:text-ieee-blue transition-colors">
                {item.title}
              </h4>

              <p className="font-sans text-text-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
