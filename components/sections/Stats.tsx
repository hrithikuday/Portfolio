"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 21, suffix: "", label: "Technologies Used" },
  { value: 40, suffix: "+", label: "GitHub Repositories" },
  { value: 2, suffix: "+", label: "Years Learning" },
];

function Counter({ value, suffix, duration = 1.5 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Easing out function
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(progress) * value);

        setCount(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-white border-b border-border-custom overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={stat.label}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-border-custom bg-card-custom hover:border-black/20 hover:bg-neutral-50/50 transition-all duration-300 shadow-xs"
            >
              {/* Big Number counter */}
              <div className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Metric description label */}
              <div className="text-xs font-semibold text-secondary-text uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
