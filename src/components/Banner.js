import React from "react";
import "./Banner.css";
import { motion } from "framer-motion/dist/framer-motion";
const Banner = () => {
  const introVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const v1 = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const v2 = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const v3 = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 220,
      },
    },
  };
  return (
    <div className="banner" id="home">
      <motion.div
        className="intro"
        initial="hidden"
        whileInView="visible"
        variants={introVariant}
      >
        <motion.div variants={v2} initial="hidden" whileInView="visible">
          {" "}
          Hello, I'm{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="favored"
          >
            Lekan Saheed.
          </motion.span>
        </motion.div>
        <motion.div
          initial="hidden"
          viewPort={{ once: false }}
          whileInView="visible"
          variants={v1}
        >
          I'm a full-stack web developer
        </motion.div>
        <motion.button
          variants={v3}
          whileInView="visible"
          className="btn-view"
          whileHover={{ scale: 1.03 }}
        >
          View My Works{" "}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
