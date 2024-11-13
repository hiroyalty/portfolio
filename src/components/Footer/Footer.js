'use client'

import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import MediumIcon from "../Icons/MediumIcon";

const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-secondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/hiroyalty", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/gbolaga-famodun/", Icon: LinkedinIcon },
  { href: "https://medium.com/@michaelfamodun", Icon: MediumIcon }
];

export default function Footer({ githubUrl, hideSocialsInDesktop}) {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4 bg-primary">
      <div className={`flex flex-row space-x-8 ${hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="flex flex-col items-center justify-center space-y-2 font-mono text-sm text-gray-400 group "
        >
          <span className="text-xs group-hover:text-secondary sm:text-sm">
            Built by Michael Famodun
          </span>

          <span className="flex flex-row items-center space-x-2 text-xs group-hover:text-secondary">
            <GithubIcon className={"w-4 h-4 text-gray-500 fill-current group-hover:text-secondary"} />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
