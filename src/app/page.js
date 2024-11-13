'use client'
import Image from "next/image";
import Head from "next/head";
import { useContext, useState, useEffect, useRef } from "react";
import Header from "@/components/Header/Header";
import Startup from "@/components/Header/StartupLogo/Startup";
import Introduction from "@/components/Home/Introduction/Introduction";
import About from "@/components/Home/About/About";
import Project from "@/components/Home/Projects/Project";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import AppContext from "@/components/AppContextFolder/AppContext";
import Publications from "@/components/Home/Publications/Publications";
import SideSocialLinks from "@/components/Home/SideSocialLinks/SideSocialLinks";

export default function Home() {
  
  const [ShowElement, setShowElement] = useState(false);
  const context = useContext(AppContext);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 500);

    setTimeout(() => {
      setShowElement(false);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 1000);
  }, [context]);

  const meta = {
    title: "Gbolaga Famodun - Software Engineer",
    description: `I've been working on Software development for over 8 years. Get in touch to know more.`,
    image: "/img/circle.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://gbolaga.com`} />
        <link rel="canonical" href={`https://gbolaga.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <div className="relative w-full min-h-screen snap-mandatory bg-primary ">
          {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
          <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
          <Introduction finishedLoading={context.sharedState.finishedLoading} />
          <SideSocialLinks finishedLoading={context.sharedState.finishedLoading} />
          {context.sharedState.finishedLoading ? <About ref={aboutRef} /> : <></>}
          {context.sharedState.finishedLoading ? <Project /> : <></>}
          {context.sharedState.finishedLoading ? <Publications /> : <></>}
          {context.sharedState.finishedLoading ? <Contact /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={"https://github.com/hiroyalty"} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
          </div>
          </>
  );
}
