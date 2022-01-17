import { motion } from "framer-motion/dist/framer-motion";
import React from "react";

const Works = () => {
  return (
    <div className="main-section" id="works">
      <div></div>
      <motion.div>
        <div className="flex-row">
          <div className="line"></div>
          <h1>Works.</h1>
        </div>
        <span className="theme-text bold-text">PROJECTS I'VE WORKED ON.</span>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Works;
