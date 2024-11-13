'use client'

import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(finishedLoading) {
  return (
    <div className="flex-row items-center hidden space-x-8 font-mono text-xs md:flex ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: finishedLoading ? 0 : 1.2,
          delay: finishedLoading ? 0 : 5.4,
        }}
        className=" text-secondary"
       
      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className="text-gray-700 duration-300 hover:cursor-pointer hover:text-secondary">About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: finishedLoading ? 0 : 1.2,
          delay: finishedLoading ? 0 : 5.5,
        }}
        className="text-secondary"
       
      >
        <ReactScrollLink to="projectSection" spy={true} smooth={true} offset={-300} duration={200}>
          <span className="text-gray-700 duration-300 hover:cursor-pointer hover:text-secondary">Projects</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: finishedLoading ? 0 : 1.2,
          delay: finishedLoading ? 0 : 5.6,
        }}
        className="text-secondary"
      >
        <ReactScrollLink to="publicationSection" spy={true} smooth={true} offset={-100} duration={200}>
        <span className="text-gray-700 duration-300 hover:cursor-pointer hover:text-secondary">Publications</span>

        </ReactScrollLink>
        
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: finishedLoading ? 0 : 1.2,
          delay: finishedLoading ? 0 : 6,
        }}
        className="text-secondary"
      >
         <ReactScrollLink to="contactSection" spy={true} smooth={true} offset={-100} duration={200}>
         <span className="text-gray-700 duration-300 hover:cursor-pointer hover:text-secondary">Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: finishedLoading ? 0 : 1.2,
          delay: finishedLoading ? 0 : 6.2,
        }}
        // onClick={()=>{router.push("/resume.pdf")}}
        className="px-3 py-2 border rounded-sm text-secondary border-spacing-2 border-secondary hover:bg-ResumeButtonHover"
      >
        Resume
      </motion.button>
      </a>
      
    </div>
  );
}
