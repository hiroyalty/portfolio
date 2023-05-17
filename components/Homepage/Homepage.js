import Hero from "./Hero";
import Contact from "../Contactpage/Contact";
import { motion } from "framer-motion"; 
import SectionTitle from "../SectionTitle/SectionTitle";

const Fade = ({ children }) => {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0, y: -8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <>
      <Fade>
        <Hero />
      </Fade>

      <Fade>
        <Contact />
      </Fade>

      {/* <Fade>
        <section>
          <SectionTitle title="Section 2" />
        </section>
      </Fade>

      <Fade>
        <section>
          <SectionTitle title="Section 3"/>
        </section>
      </Fade> */}
    </>
  );
};

export default Homepage;