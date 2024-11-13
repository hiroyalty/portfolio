'use client'

import { motion } from "framer-motion";
import { Link } from "react-scroll";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="fixed z-20 flex w-full h-screen duration-300 md:hidden"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="flex flex-col items-center justify-center w-3/4 h-full space-y-8 font-sans bg-MobileNavBarColor"
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col space-y-2 text-center"
          >
            <span
              className="text-sm text-gray-700 duration-300 font-Text2 sm:text-base hover:text-secondary hover:cursor-pointer"
            >
              About
            </span>
          </Link>
          <Link
            to="projectSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col space-y-2 text-center"
          >
            <span
              className="text-sm text-gray-700 duration-300 font-Text2 sm:text-base hover:text-secondary hover:cursor-pointer"
            >
              Projects
            </span>
          </Link>
          <Link
            to="publicationSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col space-y-2 text-center"
          >
            <span
              className="text-sm text-gray-700 duration-300 font-Text2 sm:text-base hover:text-secondary hover:cursor-pointer"
            >
              Publications
            </span>
          </Link>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col space-y-2 text-center"
          >
            <span
              className="text-sm text-gray-700 duration-300 font-Text2 sm:text-base hover:text-secondary hover:cursor-pointer"
            >
              Contact
            </span>
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="px-5 py-2 text-xs border rounded font-Text2 border-secondary hover:bg-ResumeButtonHover sm:py-4 sm:px-10 text-secondary"
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
