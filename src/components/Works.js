import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import Projects from "./Projects";
import Note from "./Note";
const Works = () => {
  return (
    <div style={{ marginBottom: "100px" }} className="main-section" id="works">
      <motion.div>
        <div className="flex-row">
          <div className="line"></div>
          <h1>Works.</h1>
        </div>
        <span className="theme-text bold-text">PROJECTS I'VE WORKED ON.</span>
      </motion.div>
      <Note note="Hover on a project to view project details" />
      <Projects />
    </div>
  );
};

export default Works;
