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
      className="bg-light-gray grid-pattern relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-12 md:py-20 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="w-full max-w-2xl flex-1">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="border-border-gray text-ieee-blue mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-sm font-medium shadow-sm">
              <span className="bg-accent-cyan inline-block h-2 w-2 animate-pulse rounded-full" />
              UCSC Student Branch Chapter
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-navy mb-6 leading-[1.1] font-bold"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering Future <br />
            <span className="text-ieee-blue">Innovators Through Computing</span>
          </motion.h1>

          <motion.p
            className="text-text-gray mb-10 max-w-xl font-sans text-lg leading-relaxed md:text-xl"
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
              className="bg-ieee-blue hover:bg-navy inline-flex items-center justify-center rounded-full px-8 py-3.5 font-sans font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Events
            </a>
            <a
              href="#contact"
              className="border-border-gray text-navy hover:border-ieee-blue hover:text-ieee-blue inline-flex items-center justify-center rounded-full border-2 bg-white px-8 py-3.5 font-sans font-semibold transition-all duration-300"
            >
              Join Community
            </a>
          </motion.div>
        </div>

        {/* Right Illustration/Image */}
        <div className="relative flex min-h-[400px] w-full flex-1 items-center justify-center">
          <motion.div
            className="relative z-10 w-full max-w-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border-border-gray relative rounded-[2rem] border bg-white p-2 shadow-xl">
              <div className="bg-ieee-blue absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem]" />
              <img
                src="/img01.jpg"
                alt="Students collaborating"
                className="aspect-[6/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="border-border-gray absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-light-gray flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                🚀
              </div>
              <div>
                <p className="font-display text-navy text-sm font-bold">
                  Join the
                </p>
                <p className="text-ieee-blue font-sans text-xs font-semibold tracking-wider uppercase">
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
