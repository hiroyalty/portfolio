'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Introduction({finishedLoading}) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col justify-center h-full px-6 pb-16 pt-52 2xl:px-72 xl:px-56 lg:px-20 md:px-28 sm:px-8 sm:pt-52 sm:pb-16"
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 3.4, duration: finishedLoading ? 0 : 0.2 },
          y: { delay: finishedLoading ? 0 : 3.4, duration: finishedLoading ? 0 : 0.2 },
        }}
        className="font-mono text-slate-700"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 3.5, duration: finishedLoading ? 0 : 0.2 },
          y: { delay: finishedLoading ? 0 : 3.5, duration: finishedLoading ? 0 : 0.2 },
        }}
        className="mt-4 text-3xl font-bold lg:text-7xl sm:text-5xl md:text-6xl text-secondary"
      >
        Michael Famodun.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 3.6, duration: finishedLoading ? 0 : 0.2 },
          y: { delay: finishedLoading ? 0 : 3.6, duration: finishedLoading ? 0 : 0.2 },
        }}
        className="mt-5 text-2xl font-bold text-gray-400 lg:text-5xl sm:text-3xl md:text-4xl"
      >
        I engineer seamless, end-to-end digital experiences.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 3.7, duration: finishedLoading ? 0 : 0.2 },
          y: { delay: finishedLoading ? 0 : 3.7, duration: finishedLoading ? 0 : 0.2 },
        }}
        className="mt-10 text-sm tracking-wider text-gray-600 font-Header md:text-lg sm:text-md"
      >

        With a strong foundation in <span className="text-secondary">Full Stack Software Engineering</span>, I bring expertise in developing <span className="text-secondary">scalable</span>, <span className="text-secondary">cloud-based enterprise</span> applications. My hands-on experience across front-end and back-end technologies, combined with a strategic view of the development process, ensures <span className="text-secondary">efficient</span> and reliable solutions

      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 3.8, duration: finishedLoading ? 0 : 0.2 },
          y: { delay: finishedLoading ? 0 : 3.8, duration: finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="px-4 pt-3 pb-6 border rounded bg-primary text-secondary sm:px-8 sm:py-4 border-secondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
