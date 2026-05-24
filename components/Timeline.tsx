"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import type { TimelineItem } from "@/sanity/lib/types";

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="timeline" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 flex flex-col items-center justify-center">
            <h2 className="section-label mb-2">Our Journey</h2>
            <div className="blue-divider" />
          </div>
          <h3 className="font-display text-navy mb-4 text-3xl font-bold md:text-4xl">
            Timeline of Excellence
          </h3>
        </div>

        <div className="relative mx-auto max-w-4xl" ref={containerRef}>
          {items.length === 0 ? (
            <div className="text-text-gray text-center font-sans text-sm">
              Timeline updates will be shared soon.
            </div>
          ) : (
            <>
              {/* Center Line Background */}
              <div className="bg-border-gray absolute top-0 bottom-0 left-6 w-1 overflow-hidden rounded-full md:left-1/2 md:-translate-x-1/2">
                {/* Animated Fill Line */}
                <motion.div
                  className="bg-ieee-blue h-full w-full origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>

              <div className="relative space-y-12">
                {items.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={item._id}
                      className="relative flex flex-col items-center md:flex-row md:justify-between"
                    >
                      {/* Left Side (Empty for odd, Content for even on desktop) */}
                      <div
                        className={`w-full pl-16 md:w-[calc(50%-3rem)] md:pl-0 ${!isEven ? "md:order-3 md:text-left" : "md:text-right"}`}
                      >
                        <motion.div
                          className="border-border-gray hover:border-ieee-blue relative rounded-2xl border bg-white p-6 transition-colors hover:shadow-lg"
                          initial={{ opacity: 0, y: 50, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{
                            duration: 0.6,
                            type: "spring",
                            bounce: 0.3,
                          }}
                        >
                          {/* Arrow pointer */}
                          <div
                            className={`border-border-gray absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-t border-r bg-white md:block ${!isEven ? "-left-2 border-b-0 border-l-0" : "-right-2 border-b-0 border-l-0"}`}
                          />

                          <span className="font-display text-ieee-blue mb-2 inline-block text-2xl font-bold">
                            {item.year}
                          </span>
                          <h4 className="font-display text-navy mb-2 text-lg font-bold">
                            {item.title}
                          </h4>
                          {item.description ? (
                            <p className="text-text-gray font-sans text-sm">
                              {item.description}
                            </p>
                          ) : null}
                        </motion.div>
                      </div>

                      {/* Center Circle with pop-in animation */}
                      <motion.div
                        className="border-ieee-blue absolute top-6 left-6 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 bg-white shadow-[0_0_0_4px_rgba(0,98,155,0.2)] md:top-1/2 md:left-1/2 md:-translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: 0.1,
                        }}
                      />

                      {/* Right Side (Content for odd, Empty for even on desktop) */}
                      <div
                        className={`hidden md:block md:w-[calc(50%-3rem)] ${!isEven ? "md:order-1" : ""}`}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
