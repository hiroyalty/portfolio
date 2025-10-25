'use client'

import React from "react";
import Img from "../../smallComp/image/Img";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function About(props) {
  const technologies =
    [
      ["Spring Boot", "Flask", "Django", "Angular", "Next.js"],
      [ "Cloud Technologies - AWS, GCP", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "TypeScript"],
    ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="flex flex-col items-center pt-12 pb-18 snap-start bg-primary">
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center mr-4">
            <span className="flex-none pl-4 text-lg font-bold tracking-wider text-gray-500 opacity-85 sm:text-2xl">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-98 ml-4"></div>
        </div>

        <div className="flex flex-col w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full space-y-4 text-sm md:w-7/12 sm:text-base ">
            <div className="font-Header ">
              <span className="text-gray-500">
              Hi! I’m Famodun, a dedicated Full Stack Software Engineer with a strong foundation in building and scaling enterprise-level applications. My journey in software development is driven by a deep passion for transforming complex ideas into high-performing digital solutions. With a robust background in languages like <span className="text-secondary">Java, TypeScript, and JavaScript</span> I craft responsive, efficient applications designed to meet modern demands.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-500 ">
              Over the years, I’ve honed my skills across cloud technologies and both relational and NoSQL databases, enabling me to build secure, scalable systems in dynamic, cloud-native environments.  I bring a full-stack approach to every project. My commitment to innovation and continuous learning fuels my drive to create impactful software that not only solves real-world problems but also pushes technology forward.
              </span>
            </div>

            <div className="tracking-wide font-Header">
              <span className="text-gray-500 ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="flex flex-row space-x-16 tracking-wide font-Header">
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-xs text-gray-500 sm:text-sm">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-xs text-gray-500 sm:text-sm">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="relative hidden group lg:w-96 lg:h-96 md:w-72 md:h-72 md:block ">
            <div
              className="absolute w-5/6 duration-300 translate-x-5 translate-y-5 border-2 rounded group-hover:translate-x-3 group-hover:translate-y-3 h-5/6 border-secondary"
            ></div>

            <div className="absolute w-5/6 overflow-hidden rounded h-5/6">
              <div className="absolute w-full h-full overflow-hidden duration-300 rounded group-hover:opacity-0 bg-secondary opacity-10"></div>
              <Img
                src={"/img/photosme.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className="relative flex items-center justify-center w-full h-48 md:hidden">
            <div className="absolute w-48 h-full translate-x-5 translate-y-5 border-2 rounded border-secondary"></div>
            <div className="absolute w-48 h-full overflow-hidden rounded">
              <Img
                src={"/img/circle.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full overflow-hidden rounded bg-secondary opacity-10 md:opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
