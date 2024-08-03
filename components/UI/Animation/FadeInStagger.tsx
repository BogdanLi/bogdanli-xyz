"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const FadeInStagger = ({ children, className = "" }: Props) => {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};

export default FadeInStagger;
