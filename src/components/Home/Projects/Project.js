'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function Project() {
  const projectList = [
    {
      projectTitle: "BCHockey",
      projectInfo: "BC Hockey has a lot to keep score of, and the 130 minor hockey associations, 60,000 players, 4,500 referees, 10,000 coaches and 20,000 official volunteers are just the tip of the stick. To help them manage amateur hockey throughout BC and the Yukon...",
      projectSite: "https://bchockey.net",
      projectSource: "#",
      projectImage: "/img/bchockey.jpg"
    },
    {
      projectTitle: "PizzaNova",
      projectInfo: "Building a platform for a world class franchise is always going to be a huge task. A franchise with thousands of loyal customers and huge community spirit require an end-to-end delivery solutions...",
      projectSite: "https://pizzanova.com",
      projectSource: "#",
      projectImage: "/img/pizzanova.jpg"
    },
    {
      projectTitle: "INE",
      projectInfo: "INE offers a continuous learn by doing training model Award winning, hands-on and technically challenging training ensures learners have the in-depth knowledge and skill set to master the subject.",
      projectSite: "https://ine.com",
      projectSource: "#",
      projectImage: "/img/ine.jpg"
    }
  ]
  const router = useRouter();
  
  return (
    <section id="projectSection">
  <div className="flex flex-col items-center pt-20 pb-10 bg-primary">
    <div
      className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
      md:w-[700px] lg:w-[900px]"
    >
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center mr-4">
          <span className="flex-none pl-4 text-lg font-bold tracking-wider text-gray-500 opacity-85 sm:text-2xl">
            Projects
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full sm:w-98 ml-4"></div>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center pt-20 pb-10 bg-primary">
    <div
      className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
      md:w-[700px] lg:w-[900px]"
    >
    {projectList.map((project, index) => (
      <div
        key={index}
        className={`flex flex-col pt-8 md:flex-row items-center gap-4 mb-[8rem] md:mb-[4rem] ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Text Section */}
        <div className="w-full md:w-2/5">
          <div className="md:mb-[2.8rem]">
            <h3 className="font-bold mb-[1.8rem] text-[2rem] text-gray-700">{project.projectTitle}</h3>
            <p className="mb-4 text-gray-600">{project.projectInfo}</p>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-blue-600 cta-btn cta-btn--hero hover:text-blue-700"
              href={project.projectSite}
            >
              See Live
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5">
          <div className="mx-auto md:w-full">
            <a rel="noreferrer" href={project.projectSite} target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                className="transition-transform duration-500 ease-out rounded shadow-lg thumbnail js-tilt hover:shadow-xl"
              >
                <img alt="Project Image" className="img-fluid" src={project.projectImage} />
              </div>
            </a>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</section>

  );
}
