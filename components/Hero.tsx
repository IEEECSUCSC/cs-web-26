"use client";

import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 bg-light-gray grid-pattern overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl w-full">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 border border-border-gray bg-white rounded-full px-4 py-1.5 text-sm font-medium text-ieee-blue mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan inline-block animate-pulse" />
              UCSC Student Branch Chapter
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-navy leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering Future <br />
            <span className="text-ieee-blue">Innovators Through Computing</span>
          </motion.h1>

          <motion.p
            className="text-text-gray text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-sans"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IEEE Computer Society UCSC Student Branch Chapter is a community of
            passionate students building technical excellence through workshops,
            hackathons, research, and industry collaborations.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#events"
              className="inline-flex items-center justify-center bg-ieee-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Events
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white border-2 border-border-gray text-navy font-sans font-semibold px-8 py-3.5 rounded-full hover:border-ieee-blue hover:text-ieee-blue transition-all duration-300"
            >
              Join Community
            </a>
          </motion.div>
        </div>

        {/* Right Illustration/Image */}
        <div className="flex-1 w-full relative flex items-center justify-center min-h-[400px]">
          <motion.div
            className="relative z-10 w-full max-w-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-[2rem] bg-white p-2 shadow-xl border border-border-gray relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-ieee-blue" />
              <img
                src="https://placehold.co/600x500/0A192F/FFFFFF?text=Students+Coding/Workshop"
                alt="Students collaborating"
                className="rounded-[1.5rem] w-full object-cover aspect-[6/5]"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-border-gray flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <p className="font-display font-bold text-navy text-sm">
                  Join the
                </p>
                <p className="font-sans text-ieee-blue text-xs font-semibold uppercase tracking-wider">
                  Revolution
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
