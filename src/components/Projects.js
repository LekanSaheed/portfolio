import React from "react";
import uhuru from "../assets/uhuru.png";
import payroll from "../assets/payroll.png";
import hoovaa from "../assets/hoovaa.png";
import { motion } from "framer-motion/dist/framer-motion";
import "./Projects.css";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiFirebase,
  SiMaterialui,
  SiCss3,
} from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      img: uhuru,
      name: "Uhuru Pay",
      link: "dashboard.uhurupay.ng",
      desc: "Automated Payment collection",
      tools: [
        {
          name: "React",
          icon: <SiReact />,
        },
        {
          name: "NextJS",
          icon: <SiNextdotjs />,
        },
        {
          name: "MUI",
          icon: <SiMaterialui />,
        },
      ],
    },
    {
      img: payroll,
      name: "Upayroll",
      link: "payroll.uhurupay.ng",
      desc: "Payroll system powered by Uhuru group",
      tools: [
        {
          name: "React",
          icon: <SiReact />,
        },
        {
          name: "NextJs",
          icon: <SiNextdotjs />,
        },
        {
          name: "MUI",
          icon: <SiMaterialui />,
        },
      ],
    },
    {
      img: hoovaa,
      name: "Hoovaa",
      link: "hoovaa.netlify.app",
      desc: "A Web App for buying, selling, swapping and Repairing gadegts",
      source: "hoovaa",
      tools: [
        {
          name: "React",
          icon: <SiReact />,
        },

        {
          name: "MUI",
          icon: <SiMaterialui />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
        },
      ],
    },
    {
      img: payroll,
      name: "Hoolaa",
      link: "hoolaa.vercel.app",
      desc: "Get the party started, make reservations and jump right into the party",
      source: "hoolaa",
      tools: ["React", "NextJs", "MUI", "Firebase", "Node"],
    },
    {
      img: payroll,
      name: "Upayroll",
      link: "payroll.uhurupay.ng",
      desc: "Payroll system powered by Uhuru group",
    },
    {
      img: payroll,
      name: "Upayroll",
      link: "payroll.uhurupay.ng",
      desc: "Automated Payment collection",
    },
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
            style={{ backgroundImage: `url(${project.img})` }}
          >
            {/* <img src={project.img} alt={project.name} /> */}
            <div className="desc_container">
              <div className="project_desc">
                <div className="desc">{project.desc}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: project.source ? "space-between" : "center",
                    alignItems: "center",
                    padding: "15px",
                    width: "100%",
                  }}
                >
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
                  {project.source && (
                    <a href={`github.com/${project.source}`} className="github">
                      <AiOutlineGithub className="git_icon" />
                    </a>
                  )}
                </div>
              </div>
              <div className="project_tool">
                {project.tools &&
                  project.tools.map((t, id) => {
                    return (
                      <span key={id}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1px",
                          }}
                        >
                          {t.icon}
                          {t.name}
                        </span>
                      </span>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
