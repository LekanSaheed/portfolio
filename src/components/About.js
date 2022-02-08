import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./About.css";
import Myself from "./Myself";
const About = ({ connectEth }) => {
  return (
    <motion.div id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="about-title"
      >
        About
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          // animate={{
          //   opacity: 1,
          //   transitionEnd: {
          //     display: "block",
          //   },
          // }}
          className="line"
          // initial={{ opacity: 0.5, scale: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transitionEnd: {
              display: "block",
            },
          }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
        ></motion.div>
      </motion.div>
      <Myself connectEth={connectEth} />
    </motion.div>
  );
};

export default About;
