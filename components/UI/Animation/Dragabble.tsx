"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Draggable = ({ children }: Props) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Draggable;
