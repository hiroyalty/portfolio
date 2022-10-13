import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative grid grid-cols-1 px-0 pb-6 mb-0 overflow-hidden md:px-12 md:pb-6 lg:overflow-visible lg:pl-12 lg:pr-0 rounded-b-3xl lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:-mx-12">
      <div className="order-2 py-4 lg:py-32 lg:order-1">
        <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
          Hello, I'm Gbolaga
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-headers md:text-5xl text-primary">
          I'm a Full Stack Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;