"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
}

export default function CountUp({ value, duration = 2 }: CountUpProps) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].split(".")[1]?.length ?? 0;
  const isNumeric = !!match;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, target, duration, isNumeric]);

  if (!isNumeric) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}
