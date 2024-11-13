'use client'

import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import MediumIcon from "../../Icons/MediumIcon";

const IconClickableWithAnimation = props => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-secondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SideSocialLinks(finishedLoading) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: finishedLoading ? 0 : 11, duration: finishedLoading ? 0 : 0.5 } }}
        className="fixed bottom-0 left-0 z-10 flex-row items-center justify-between hidden px-8 lg:flex "
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-5">
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/hiroyalty"} />
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/gbolaga-famodun/"} />
            <IconClickableWithAnimation Icon={MediumIcon} href={"https://medium.com/@michaelfamodun"} />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
