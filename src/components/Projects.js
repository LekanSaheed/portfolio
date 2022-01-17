import React from "react";
import uhuru from "../assets/uhuru.png";
import payroll from "../assets/payroll.png";
import hoovaa from "../assets/hoovaa.png";
import { motion } from "framer-motion/dist/framer-motion";
import "./Projects.css";
import { HiArrowRight } from "react-icons/hi";
const Projects = () => {
  const projects = [
    { img: uhuru, name: "Uhuru Pay", link: "dashboard.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: hoovaa, name: "Hoovaa", link: "hoovaa.netlify.app" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
  ];
  const contV = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={contV}
      viewport={{ once: false }}
      className="project_container"
    >
      {projects.map((project, id) => {
        return (
          <motion.div
            variants={contV}
            // whileInView="visible"
            className="project"
            key={id}
          >
            <img src={project.img} alt={project.name} />
            <a
              className="link_btn"
              href={"https://" + project.link}
              target="_blank"
              rel="noreferrer"
            >
              View
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 10px",
                  fontSize: "20px",
                }}
              >
                <HiArrowRight />
              </span>
            </a>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
