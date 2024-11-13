'use client'

import React from "react";
import { motion } from "framer-motion";
export default function Logo(finishedLoading) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: finishedLoading ? 0 : 3, duration: 0 },
          opacity: { delay: finishedLoading ? 0 : 3, duration: 0 },
        }}
        className="relative w-10 h-12 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute flex items-center justify-center w-full h-full text-lg font-Header text-secondary"
        >
          M
        </motion.span>

        <motion.div animate={{ rotate: -30, y: 5 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: -10, y: 18 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 30, y: 31 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: -30, y: 27, x: 19 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 30, x: 19, y: -10 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: 28, y: 2 }} className="w-6 h-1 rounded bg-secondary"></motion.div>
      </motion.div>
    </>
  );
}
