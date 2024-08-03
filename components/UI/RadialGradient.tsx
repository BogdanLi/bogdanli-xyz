"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  color: string;
  bgColor: string;
  start: number;
  end: number;
}

const RadialGradient = ({ className, color, bgColor, start, end }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{ top: 100, left: 100, bottom: 100, right: 100 }}
      className={`absolute ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} ${start}%, ${bgColor} ${end}%)`,
      }}
    />
  );
};

export default RadialGradient;
