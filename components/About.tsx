"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function About() {
  const highlights = [
    "Technical Workshops",
    "Networking Opportunities",
    "Competitions",
    "Research Culture",
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-light-gray border-border-gray relative z-10 aspect-[4/3] overflow-hidden rounded-3xl border shadow-sm">
              <img
                src="/img02.jpg"
                alt="Students collaborating in seminar"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative background block */}
            <div className="border-border-gray absolute -right-6 -bottom-6 -z-10 h-full w-full rounded-3xl border bg-white" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="pt-8 lg:pt-0 lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-block">
              <h2 className="section-label mb-2">About Us</h2>
              <div className="blue-divider" />
            </div>

            <h3 className="font-display text-navy mb-6 text-3xl leading-tight font-bold md:text-4xl">
              Advancing Computing Knowledge & Innovation
            </h3>

            <p className="text-text-gray mb-8 font-sans text-lg leading-relaxed">
              We are the official IEEE Computer Society chapter of UCSC
              dedicated to advancing computing knowledge, innovation,
              leadership, and collaboration among students. Our mission is to
              bridge the gap between academic learning and industry demands.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-ieee-blue/10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} className="text-ieee-blue" />
                  </div>
                  <span className="text-navy font-sans font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-light-gray border-border-gray/60 rounded-2xl border p-6">
              <p className="font-display text-navy font-medium">
                &ldquo;Empowering students to become the technology leaders of
                tomorrow through hands-on learning and global networking.&rdquo;
              </p>
              <p className="text-text-gray mt-2 font-sans text-sm font-semibold tracking-wider uppercase">
                — IEEE CS Chapter
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
