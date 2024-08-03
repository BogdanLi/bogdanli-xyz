"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const container: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      variants={container}
      className="h-fit"
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
