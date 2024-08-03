"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  children: ReactNode;
}

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const FadeInStagger = ({ children }: Props) => {
  return <motion.div variants={item}>{children}</motion.div>;
};

export default FadeInStagger;
