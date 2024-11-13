'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
const IconMenu = ({ rotate, setRotate, setShowElement, ShowElement,finishedLoading }) => {
  return (
    <div
      className="left-0 mt-2 space-y-2 text-white md:hidden hover:cursor-pointer"
      onClick={() => {
        setRotate(!rotate);
        setShowElement(!ShowElement);
      }}
    >
      <div className="flex justify-end">
        <motion.div
          animate={rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
          transition={
            rotate ? { y: 0.15, rotate: { delay: 0.2 } } : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-8 h-0.5 rounded bg-secondary"
        ></motion.div>
      </div>
      <motion.div
        animate={rotate ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className="flex justify-end"
      >
        <div className="w-6 h-0.5 rounded bg-secondary"></div>
      </motion.div>
      <div className="flex justify-end">
        <motion.div
          animate={rotate ? { y: -10, width: "150%", rotate: -45 } : { y: 0, rotate: 0, width: "50%" }}
          transition={
            rotate ? { y: 0.15, rotate: { delay: 0.2 } } : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-4 h-0.5 rounded bg-secondary"
        ></motion.div>
      </div>
    </div>
  );
};
export default IconMenu;
