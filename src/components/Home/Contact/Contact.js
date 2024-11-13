'use client'

//import React from "react";

export default function Contact() {
  return (
    <div
      id="contactSection"
      className="flex flex-col items-center w-full pt-20 space-y-4 h-96 bg-primary"
    >
      <div className="flex flex-row items-center ">
      </div>
      <span className="text-3xl font-bold tracking-wider text-gray-500 sm:text-4xl opacity-85">Contact</span>
      <p className="flex font-Header tracking-wider text-gray-600 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m always open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out. I&apos;ll do my best to respond promptly!
      </p>
      <div className="pt-4">
        <a href="mailto:gbohlahgah@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-secondary border-secondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Send Message
          </button>
        </a>
      </div>
    </div>
  );
}
