import React from "react";
import uhuru from "../assets/uhuru.png";
import payroll from "../assets/payroll.png";
import hoovaa from "../assets/hoovaa.png";
import "./Projects.css";
const Projects = () => {
  const projects = [
    { img: uhuru, name: "Uhuru Pay", link: "dashboard.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: hoovaa, name: "Hoovaa", link: "hoovaa.netlify.app" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
    { img: payroll, name: "Upayroll", link: "payroll.uhurupay.ng" },
  ];
  return (
    <div className="project_container">
      {projects.map((project, id) => {
        return (
          <div className="project" key={id}>
            <img src={project.img} alt={project.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
