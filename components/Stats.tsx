"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 5, suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Events/Year" },
  { value: 1, suffix: "st", label: "Sri Lanka" },
  { value: 30, suffix: "+", label: "Projects" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-[#0A1628] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-[#1E3A5F]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-8 px-4 ${i === 0 ? "border-t-0" : ""}`}
            >
              <span className="font-display font-bold text-[#1D6FA4] text-4xl md:text-5xl mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[#94A3B8] text-sm tracking-wide uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
