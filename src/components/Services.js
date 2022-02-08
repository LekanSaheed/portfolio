import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Services.css";
import { motion } from "framer-motion/dist/framer-motion";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
const Services = () => {
  const { dark } = useGlobalContext();

  const cards = [
    {
      titleText: "Html",
      icons: <SiHtml5 />,
      text: "Markup language for websites. Seems ugly but beatiful to learn",
    },
    {
      titleText: "CSS",
      icons: <SiCss3 />,
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Javascript",
      icons: <SiJavascript />,
      text: "The big boss of the web language, handles everything quite well, has lot of haters but its users are quite large.",
    },
    {
      titleText: "React",
      icons: <SiReact />,
      text: "Built with javascript. One of the best libraries for building SPAs",
    },
    {
      titleText: "Node js",
      icons: <SiNodedotjs />,
      text: "Built on JS v8 Engine, you can run js outside the browser.",
    },
    {
      titleText: "Next js",
      icons: <SiNextdotjs />,
      text: "My favorite. Built on top of React, it adds to React what the React team failed to.",
    },
  ];
  const listVariant = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        // when: "beforeChildren",
      },
    },
  };
  return (
    <div
      id="toolbox"
      className={`service-container main-section ${
        dark ? "dark-service" : "light-service"
      }`}
    >
      <div style={{ marginTop: "20px", gap: "14px" }} className="flex-column">
        <div className="flex-row">
          <div className="line"></div>
          <h1>Toolbox.</h1>
        </div>
        <span className="theme-text bold-text">MY WONDERFUL TOOLBOX.</span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={boxVariant}
          viewPort={{ once: false }}
          className="tool-container"
          style={{ gap: "14px" }}
        >
          {React.Children.toArray(
            cards.map((card) => {
              return (
                <motion.div
                  variants={listVariant}
                  whileInView="visible"
                  className={` toolcard ${dark ? "dark-card" : " "}`}
                  style={{ color: !dark && "white" }}
                >
                  <div className="skill_icon">{card.icons}</div>
                  <div className="bold-text title-text">{card.titleText}</div>
                  {/* <div className="skill_text">{card.text}</div> */}
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
